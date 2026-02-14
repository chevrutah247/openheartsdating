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
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: any) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protected routes that require authentication
  const protectedPaths = [
    '/dashboard',
    '/profile/create',
    '/profile/edit',
    '/profile/blocked',
    '/messages',
    '/profiles',
    '/platform-preview/dating',
    '/platform-preview/matches',
    '/platform-preview/verify',
  ]
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // If accessing protected route without auth, redirect to login
  if (isProtectedPath && !user) {
    const redirectUrl = new URL('/login', request.url)
    redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Check account status for authenticated users
  if (user) {
    const suspendedPage = '/account-suspended'
    const isSuspendedPage = request.nextUrl.pathname === suspendedPage
    const isLogoutPath = request.nextUrl.pathname === '/api/auth/signout'

    // Skip check for the suspended page itself and logout
    if (!isSuspendedPage && !isLogoutPath) {
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
          // Auto-unsuspend if suspension period has passed
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
        // If check fails, allow through rather than blocking
      }
    }
  }

  // If accessing auth pages (login/signup) while authenticated, redirect to dashboard
  const authPaths = ['/login', '/signup']
  const isAuthPath = authPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (isAuthPath && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}
