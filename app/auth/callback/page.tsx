'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { EmailOtpType } from '@supabase/supabase-js'

function parseHashParams() {
  const hash = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : ''
  return new URLSearchParams(hash)
}

export default function AuthCallbackPage() {
  const router = useRouter()
  const [message, setMessage] = useState('Completing sign in...')

  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search)
      const hashParams = parseHashParams()
      const next = params.get('next') || '/profile/create'

      const callbackError = params.get('error_description') || params.get('error')
      if (callbackError) {
        router.replace(`/login?error=${encodeURIComponent(String(callbackError))}`)
        return
      }

      const code = params.get('code')
      const tokenHash = params.get('token_hash')
      const type = params.get('type') as EmailOtpType | null

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (error) {
          router.replace(`/login?error=${encodeURIComponent(error.message)}`)
          return
        }
      } else if (tokenHash && type) {
        const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash })
        if (error) {
          router.replace(`/login?error=${encodeURIComponent(error.message)}`)
          return
        }
      } else {
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')

        if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          if (error) {
            router.replace(`/login?error=${encodeURIComponent(error.message)}`)
            return
          }
        }
      }

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.replace('/login?verified=1')
        return
      }

      setMessage('Loading your account...')

      const { data: profile } = await supabase
        .from('profiles')
        .select('display_name')
        .eq('id', user.id)
        .maybeSingle()

      const destination = profile?.display_name ? next : '/profile/create'
      router.replace(destination)
    }

    run()
  }, [router])

  return (
    <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--gray-500)' }}>
      {message}
    </div>
  )
}
