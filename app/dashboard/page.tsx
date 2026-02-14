'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(profileData)
    setLoading(false)
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>
        Loading...
      </div>
    )
  }

  const hasProfile = profile?.display_name
  const isVerified = profile?.verification_status === 'verified'
  const isPending = profile?.verification_status === 'pending'
  const isAdmin = profile?.role === 'admin' || profile?.role === 'moderator'

  const cardStyle: React.CSSProperties = {
    padding: '1.5rem',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    transition: 'transform 0.2s, box-shadow 0.2s',
  }

  return (
    <div style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1.5rem' }}>
      {/* Welcome */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '16px',
        marginBottom: '2rem'
      }}>
        <h1 style={{ marginBottom: '0.5rem', fontSize: '1.8rem' }}>
          Welcome{hasProfile ? `, ${profile.display_name}` : ''}! 💙
        </h1>
        <p style={{ fontSize: '1.05rem', opacity: 0.9, margin: 0 }}>
          {isVerified
            ? 'Your account is verified. You have full access to all features.'
            : hasProfile
              ? 'Complete verification to unlock dating, matching, and messaging.'
              : 'Create your profile to get started on your journey.'}
        </p>
      </div>

      {/* Steps / Status */}
      {!hasProfile && (
        <Link href="/profile/create" style={{
          ...cardStyle,
          border: '2px dashed #667eea',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>👤</div>
          <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Step 1: Create Your Profile</h3>
          <p style={{ color: '#666', margin: 0 }}>
            Tell us about yourself to start connecting with others.
          </p>
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#667eea',
            color: 'white',
            borderRadius: '8px',
            display: 'inline-block',
            fontWeight: 600,
          }}>
            Create Profile →
          </div>
        </Link>
      )}

      {hasProfile && !isVerified && !isPending && (
        <Link href="/platform-preview/verify" style={{
          ...cardStyle,
          border: '2px solid #f59e0b',
          background: '#fffbeb',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🛡️</div>
          <h3 style={{ color: '#92400e', marginBottom: '0.5rem' }}>Verify Your Identity</h3>
          <p style={{ color: '#78716c', margin: 0 }}>
            Upload an ID document to get verified. This unlocks dating, matching, and messaging.
          </p>
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#f59e0b',
            color: 'white',
            borderRadius: '8px',
            display: 'inline-block',
            fontWeight: 600,
          }}>
            Start Verification →
          </div>
        </Link>
      )}

      {isPending && (
        <div style={{
          ...cardStyle,
          border: '2px solid #3b82f6',
          background: '#eff6ff',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⏳</div>
          <h3 style={{ color: '#1e40af', marginBottom: '0.5rem' }}>Verification In Progress</h3>
          <p style={{ color: '#64748b', margin: 0 }}>
            Your documents are being reviewed. This usually takes 1-2 business days.
          </p>
        </div>
      )}

      {/* Main Actions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        {isVerified && (
          <>
            <Link href="/platform-preview/dating" style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💑</div>
              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Browse Profiles</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                Discover people who understand your journey
              </p>
            </Link>

            <Link href="/platform-preview/matches" style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💕</div>
              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>My Matches</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                See who liked you back
              </p>
            </Link>

            <Link href="/messages" style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💬</div>
              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Messages</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                Chat with your matches
              </p>
            </Link>
          </>
        )}

        {hasProfile && (
          <>
            <Link href="/profile/edit" style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✏️</div>
              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Edit Profile</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                Update your photos, bio, and preferences
              </p>
            </Link>

            <Link href="/profile/blocked" style={cardStyle}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚫</div>
              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Blocked Users</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                Manage your blocked list
              </p>
            </Link>
          </>
        )}

        {isAdmin && (
          <Link href="/admin" style={{ ...cardStyle, borderLeft: '4px solid #f59e0b' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚙️</div>
            <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem', color: '#f59e0b' }}>Admin Panel</h3>
            <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
              Manage users, reports, and verification
            </p>
          </Link>
        )}
      </div>

      {/* Account Info */}
      <div style={{
        padding: '1.5rem',
        background: '#f9f9f9',
        borderRadius: '12px',
      }}>
        <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', color: '#333' }}>Account Info</h3>
        <p style={{ marginBottom: '0.25rem', fontSize: '0.9rem' }}>
          <strong>Email:</strong> {user?.email}
        </p>
        <p style={{ marginBottom: '0.25rem', fontSize: '0.9rem' }}>
          <strong>Status:</strong>{' '}
          {isVerified
            ? <span style={{ color: '#16a34a' }}>Verified ✅</span>
            : isPending
              ? <span style={{ color: '#2563eb' }}>Pending Review ⏳</span>
              : <span style={{ color: '#d97706' }}>Not Verified</span>
          }
        </p>
        {hasProfile && (
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            <strong>Profile:</strong> {profile.display_name}
            {profile.location && ` — ${profile.location}`}
          </p>
        )}
      </div>
    </div>
  )
}
