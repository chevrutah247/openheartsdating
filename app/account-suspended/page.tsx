'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function AccountSuspendedPage() {
  const [status, setStatus] = useState<string>('loading')
  const [reason, setReason] = useState<string>('')
  const [until, setUntil] = useState<string | null>(null)

  useEffect(() => {
    loadStatus()
  }, [])

  const loadStatus = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setStatus('unknown')
      return
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('account_status, suspension_reason, suspension_until')
      .eq('id', user.id)
      .single()

    if (!profile) {
      setStatus('unknown')
      return
    }

    setStatus(profile.account_status || 'active')
    setReason(profile.suspension_reason || '')
    setUntil(profile.suspension_until || null)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const isBanned = status === 'banned'
  const isSuspended = status === 'suspended'

  if (status === 'loading') {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>
  }

  if (status === 'active' || status === 'warned') {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <p>Your account is active.</p>
        <Link href="/" style={{ color: 'var(--primary)' }}>Go to Dashboard</Link>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9fafb',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '500px',
        textAlign: 'center',
        background: 'white',
        padding: '3rem 2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>
          {isBanned ? '🚫' : '⏸️'}
        </div>
        <h1 style={{ color: isBanned ? '#991b1b' : '#92400e', marginBottom: '1rem' }}>
          {isBanned ? 'Account Banned' : 'Account Suspended'}
        </h1>

        {reason && (
          <div style={{
            padding: '1rem',
            background: isBanned ? '#fef2f2' : '#fffbeb',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            textAlign: 'left',
          }}>
            <strong>Reason:</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>{reason}</p>
          </div>
        )}

        {isSuspended && until && (
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem' }}>
            Your suspension ends on{' '}
            <strong>{new Date(until).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
          </p>
        )}

        {isBanned && (
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem' }}>
            This action is permanent. If you believe this is an error, please contact support.
          </p>
        )}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:contact@openheartsdating.com"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Contact Support
          </a>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'white',
              color: '#666',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
