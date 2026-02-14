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

const VALID_REASONS = ['harassment', 'spam', 'fake_profile', 'inappropriate_content', 'scam', 'other']

export async function POST(request: NextRequest) {
  try {
    const user = await getUser(request)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // Rate limit
    const { allowed } = checkRateLimit(user.id, 'reports')
    if (!allowed) {
      return NextResponse.json({ error: 'Too many reports. Please try again later.' }, { status: 429 })
    }

    const { reported_user_id, reason, description } = await request.json()

    if (!reported_user_id || !reason) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (reported_user_id === user.id) {
      return NextResponse.json({ error: 'Cannot report yourself' }, { status: 400 })
    }
    if (!VALID_REASONS.includes(reason)) {
      return NextResponse.json({ error: 'Invalid reason' }, { status: 400 })
    }

    // Check for duplicate report in last 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    const { data: existing } = await supabaseAdmin
      .from('reports')
      .select('id')
      .eq('reporter_id', user.id)
      .eq('reported_user_id', reported_user_id)
      .gte('created_at', oneDayAgo)
      .limit(1)

    if (existing && existing.length > 0) {
      return NextResponse.json({ error: 'You already reported this user recently' }, { status: 429 })
    }

    // Check reporter is verified
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('verification_status')
      .eq('id', user.id)
      .single()

    if (profile?.verification_status !== 'verified') {
      return NextResponse.json({ error: 'Verification required to submit reports' }, { status: 403 })
    }

    const { error } = await supabaseAdmin
      .from('reports')
      .insert({
        reporter_id: user.id,
        reported_user_id,
        reason,
        description: description || null,
      })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
