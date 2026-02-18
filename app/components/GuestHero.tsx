'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function GuestHero() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/profile/create`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/profile/create')
    }
  }

  return (
    <section className="hero-guest">
      <h1>Find Someone Who Gets It</h1>
      <p className="subtitle">
        The first dating platform built for people with disabilities.
        Free, safe, and actually accessible.
      </p>

      <div className="signup-form">
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            aria-label="Password"
          />
          {error && (
            <p style={{ color: 'var(--error)', fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
              {error}
            </p>
          )}
          <button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Join Free'}
          </button>
        </form>
        <p style={{ margin: '1rem 0 0', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </div>

      <div className="value-props">
        <div className="value-prop">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#9829;</div>
          <h3>No Barriers</h3>
          <p>Designed so disability is understood, not explained on the first date.</p>
        </div>
        <div className="value-prop">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#9733;</div>
          <h3>100% Accessible</h3>
          <p>Screen reader support, keyboard navigation, high contrast. Tested by real users.</p>
        </div>
        <div className="value-prop">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#10003;</div>
          <h3>Verified & Safe</h3>
          <p>Identity verification, active moderation, and robust safety tools.</p>
        </div>
      </div>
    </section>
  )
}
