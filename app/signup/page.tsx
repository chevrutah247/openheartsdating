'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isStrongPassword, PASSWORD_REQUIREMENTS_TEXT } from '@/lib/auth-password'
import { getSiteUrl } from '@/lib/site-url'
import { isExistingUserSignUpResult, toFriendlyAuthError } from '@/lib/auth-errors'
import { hasPlusAliasInLocalPart } from '@/lib/email-validation'

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (!isStrongPassword(password)) {
      setError(PASSWORD_REQUIREMENTS_TEXT)
      setLoading(false)
      return
    }

    const normalizedEmail = email.trim().toLowerCase()

    if (hasPlusAliasInLocalPart(normalizedEmail)) {
      setError('Email aliases with + are not allowed. Please use your main email address.')
      setLoading(false)
      return
    }
    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        emailRedirectTo: `${getSiteUrl()}/auth/callback?next=${encodeURIComponent('/profile/create')}`,
      },
    })

    if (error) {
      setError(toFriendlyAuthError(error.message))
    } else {
      if (isExistingUserSignUpResult(data.user, data.session)) {
        setError('This email is already registered. Please sign in on the login page.')
        setLoading(false)
        return
      }

      if (data.session) {
        router.push('/profile/create')
      } else {
        setMessage('Check your email, confirm your account, then sign in on the login page.')
      }
    }

    setLoading(false)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '3rem auto', padding: '0 1.5rem' }}>
      <div style={{
        background: 'white',
        borderRadius: 'var(--radius-xl)',
        padding: '2.5rem 2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', textAlign: 'center' }}>
          Create Account
        </h1>
        <p style={{ color: 'var(--gray-500)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Join the community — it&apos;s free
        </p>

        <form onSubmit={handleSignUp}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@email.com"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              placeholder="Min 8 chars, A-Z, 0-9, special"
            />
            <small style={{ display: 'block', marginTop: '0.5rem', color: 'var(--gray-500)', lineHeight: 1.4 }}>
              {PASSWORD_REQUIREMENTS_TEXT}
            </small>
          </div>

          {error && (
            <div style={{
              padding: '0.75rem',
              marginBottom: '1rem',
              background: 'var(--error-bg)',
              color: 'var(--error-text)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
            }}>
              {error}
            </div>
          )}

          {message && (
            <div style={{
              padding: '0.75rem',
              marginBottom: '1rem',
              background: 'var(--success-bg)',
              color: 'var(--success-text)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
            }}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="button button-primary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Creating account...' : 'Join Free'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--gray-500)', fontSize: '0.95rem' }}>
          Already have an account? <Link href="/login">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
