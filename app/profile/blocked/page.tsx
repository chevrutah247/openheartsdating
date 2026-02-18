'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface BlockedUser {
  id: string
  display_name: string
  profile_photo: string | null
  blocked_at: string
}

export default function BlockedUsersPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([])
  const [unblocking, setUnblocking] = useState<string | null>(null)

  useEffect(() => {
    loadBlockedUsers()
  }, [])

  const loadBlockedUsers = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    const res = await fetch('/api/blocks')
    if (res.ok) {
      const data = await res.json()
      setBlockedUsers(data.blocked_users || [])
    }
    setLoading(false)
  }

  const handleUnblock = async (blockedId: string) => {
    if (!confirm('Unblock this user? They will be able to see your profile again.')) return

    setUnblocking(blockedId)
    const res = await fetch('/api/blocks', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blocked_id: blockedId }),
    })

    if (res.ok) {
      setBlockedUsers(prev => prev.filter(u => u.id !== blockedId))
    }
    setUnblocking(null)
  }

  if (loading) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>
  }

  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0 }}>Blocked Users</h1>
        <Link href="/profile/edit" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
          ← Back to Profile
        </Link>
      </div>

      {blockedUsers.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          background: '#f9fafb',
          borderRadius: '12px',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>You haven't blocked anyone.</p>
        </div>
      ) : (
        <div>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            Blocked users cannot see your profile, send you messages, or interact with you.
          </p>
          {blockedUsers.map(user => (
            <div
              key={user.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'white',
                borderRadius: '8px',
                marginBottom: '0.75rem',
                border: '1px solid #e5e7eb',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                flexShrink: 0,
                background: user.profile_photo
                  ? `url(${user.profile_photo}) center/cover no-repeat`
                  : 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: user.profile_photo ? '0' : '1rem',
              }}>
                {!user.profile_photo && user.display_name.charAt(0).toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: '600' }}>{user.display_name}</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#999' }}>
                  Blocked {new Date(user.blocked_at).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleUnblock(user.id)}
                disabled={unblocking === user.id}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  color: '#666',
                }}
              >
                {unblocking === user.id ? '...' : 'Unblock'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
