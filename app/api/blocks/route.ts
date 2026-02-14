import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { createServerClient } from '@supabase/ssr'
import { checkRateLimit } from '@/lib/rate-limit'

async function getUser(request: NextRequest) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set() {},
        remove() {},
      },
    }
  )
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUser(request)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // Rate limit
    const { allowed } = checkRateLimit(user.id, 'blocks')
    if (!allowed) {
      return NextResponse.json({ error: 'Too many block actions. Please try again later.' }, { status: 429 })
    }

    const { blocked_id } = await request.json()
    if (!blocked_id) return NextResponse.json({ error: 'Missing blocked_id' }, { status: 400 })
    if (blocked_id === user.id) return NextResponse.json({ error: 'Cannot block yourself' }, { status: 400 })

    // Insert block
    const { error: blockError } = await supabaseAdmin
      .from('blocks')
      .insert({ blocker_id: user.id, blocked_id })

    if (blockError) {
      if (blockError.code === '23505') {
        return NextResponse.json({ error: 'Already blocked' }, { status: 409 })
      }
      return NextResponse.json({ error: blockError.message }, { status: 500 })
    }

    // Remove match between users
    await supabaseAdmin
      .from('matches')
      .delete()
      .or(`and(user1_id.eq.${user.id},user2_id.eq.${blocked_id}),and(user1_id.eq.${blocked_id},user2_id.eq.${user.id})`)

    // Remove likes between users
    await supabaseAdmin
      .from('likes')
      .delete()
      .or(`and(from_user_id.eq.${user.id},to_user_id.eq.${blocked_id}),and(from_user_id.eq.${blocked_id},to_user_id.eq.${user.id})`)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getUser(request)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { blocked_id } = await request.json()
    if (!blocked_id) return NextResponse.json({ error: 'Missing blocked_id' }, { status: 400 })

    await supabaseAdmin
      .from('blocks')
      .delete()
      .eq('blocker_id', user.id)
      .eq('blocked_id', blocked_id)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getUser(request)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data: blocks } = await supabaseAdmin
      .from('blocks')
      .select('blocked_id, created_at')
      .eq('blocker_id', user.id)
      .order('created_at', { ascending: false })

    if (!blocks || blocks.length === 0) {
      return NextResponse.json({ blocked_users: [] })
    }

    // Get profiles of blocked users
    const blockedIds = blocks.map(b => b.blocked_id)
    const { data: profiles } = await supabaseAdmin
      .from('profiles')
      .select('id, display_name, profile_photo')
      .in('id', blockedIds)

    const blockedUsers = blocks.map(b => {
      const profile = profiles?.find(p => p.id === b.blocked_id)
      return {
        id: b.blocked_id,
        display_name: profile?.display_name || 'Unknown',
        profile_photo: profile?.profile_photo || null,
        blocked_at: b.created_at,
      }
    })

    return NextResponse.json({ blocked_users: blockedUsers })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
