import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // Refresh session cookie if it exists
  const { data: { user } } = await supabase.auth.getUser()

  // NOTE: Protected route checks are handled client-side in each page.
  // The client uses localStorage for auth (not cookies), so middleware
  // cannot reliably block unauthenticated users. Pages like /dashboard,
  // /messages, etc. each check supabase.auth.getUser() and redirect.

  // Check account status for suspended/banned users (only if cookie session exists)
  if (user) {
    const suspendedPage = '/account-suspended'
    const isSuspendedPage = request.nextUrl.pathname === suspendedPage

    if (!isSuspendedPage) {
      try {
        const { createClient } = await import('@supabase/supabase-js')
        const adminClient = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!
        )
        const { data: profile } = await adminClient
          .from('profiles')
          .select('account_status, suspension_until')
          .eq('id', user.id)
          .single()

        if (profile) {
          if (profile.account_status === 'suspended' && profile.suspension_until) {
            const until = new Date(profile.suspension_until)
            if (until < new Date()) {
              await adminClient
                .from('profiles')
                .update({ account_status: 'active', suspension_reason: null, suspension_until: null })
                .eq('id', user.id)
            } else {
              return NextResponse.redirect(new URL(suspendedPage, request.url))
            }
          }
          if (profile.account_status === 'banned') {
            return NextResponse.redirect(new URL(suspendedPage, request.url))
          }
        }
      } catch {
        // If check fails, allow through
      }
    }

    // Redirect authenticated users away from login/signup
    const authPaths = ['/login', '/signup']
    if (authPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return response
}
