'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Match {
  id: string
  created_at: string
  other_user: {
    id: string
    display_name: string
    age: number
    location: string
    bio: string
    looking_for: string
  }
}

export default function MatchesPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUserAndLoadMatches()
  }, [])

  const checkUserAndLoadMatches = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    // Get user profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(profileData)

    // Check if verified
    if (profileData?.verification_status !== 'verified') {
      setLoading(false)
      return
    }

    // Load matches
    await loadMatches(user.id)

    setLoading(false)
  }

  const loadMatches = async (userId: string) => {
    // Get matches where user is user1
    const { data: matches1 } = await supabase
      .from('matches')
      .select('id, created_at, user2_id')
      .eq('user1_id', userId)

    // Get matches where user is user2
    const { data: matches2 } = await supabase
      .from('matches')
      .select('id, created_at, user1_id')
      .eq('user2_id', userId)

    // Combine and get other user IDs
    const otherUserIds: string[] = []
    const matchMap: Record<string, { id: string, created_at: string }> = {}

    if (matches1) {
      matches1.forEach(m => {
        otherUserIds.push(m.user2_id)
        matchMap[m.user2_id] = { id: m.id, created_at: m.created_at }
      })
    }

    if (matches2) {
      matches2.forEach(m => {
        otherUserIds.push(m.user1_id)
        matchMap[m.user1_id] = { id: m.id, created_at: m.created_at }
      })
    }

    if (otherUserIds.length === 0) {
      setMatches([])
      return
    }

    // Get profiles of matched users
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name, age, location, bio, looking_for')
      .in('id', otherUserIds)

    if (profiles) {
      const matchesWithProfiles = profiles.map(p => ({
        id: matchMap[p.id].id,
        created_at: matchMap[p.id].created_at,
        other_user: p
      }))

      // Sort by newest first
      matchesWithProfiles.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )

      setMatches(matchesWithProfiles)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  // Not verified
  if (profile?.verification_status !== 'verified') {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          padding: '3rem',
          background: '#fff3cd',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #ffc107'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔐</div>
          <h1 style={{ color: '#856404', marginBottom: '1rem' }}>Verification Required</h1>
          <p style={{ color: '#856404', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            You need to be verified to view your matches.
          </p>
          <Link 
            href="/verify"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: '#667eea',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Get Verified Now
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: '2rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>My Matches</h1>
        <p style={{ color: '#666' }}>People who liked you back - start a conversation!</p>
      </div>

      {/* Stats */}
      <div style={{
        display: 'inline-block',
        padding: '1rem 1.5rem',
        background: '#d4edda',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#155724' }}>
          {matches.length}
        </span>
        <span style={{ marginLeft: '0.5rem', color: '#155724' }}>
          {matches.length === 1 ? 'Match' : 'Matches'}
        </span>
      </div>

      {/* Matches List */}
      {matches.length === 0 ? (
        <div style={{
          padding: '4rem',
          textAlign: 'center',
          background: '#f9f9f9',
          borderRadius: '12px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💝</div>
          <h2 style={{ marginBottom: '0.5rem' }}>No matches yet</h2>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            Keep liking profiles - when someone likes you back, they will appear here!
          </p>
          <Link
            href="/platform-preview/dating"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#667eea',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Browse Profiles
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {matches.map((match) => (
            <div
              key={match.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}
            >
              {/* Avatar placeholder */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {match.other_user.display_name?.charAt(0).toUpperCase() || '?'}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
                    {match.other_user.display_name || 'Anonymous'}
                  </h3>
                  <span style={{
                    background: '#d4edda',
                    color: '#155724',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem'
                  }}>
                    Match
                  </span>
                </div>
                <p style={{ margin: '0.25rem 0', color: '#666', fontSize: '0.95rem' }}>
                  {match.other_user.age ? `${match.other_user.age} years` : ''} 
                  {match.other_user.location ? ` • ${match.other_user.location}` : ''}
                </p>
                {match.other_user.bio && (
                  <p style={{ 
                    margin: '0.5rem 0 0', 
                    color: '#888', 
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {match.other_user.bio}
                  </p>
                )}
                <p style={{ margin: '0.5rem 0 0', color: '#999', fontSize: '0.8rem' }}>
                  Matched on {formatDate(match.created_at)}
                </p>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <Link
                  href={`/profile/${match.other_user.id}`}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#f5f5f5',
                    color: '#333',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  Profile
                </Link>
                <Link
                  href={`/messages/${match.other_user.id}`}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#667eea',
                    color: 'white',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  Message
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/platform-preview/dating" style={{ color: '#667eea', marginRight: '1.5rem' }}>
          Browse Profiles
        </Link>
        <Link href="/dashboard" style={{ color: '#667eea' }}>
          Dashboard
        </Link>
      </div>
    </section>
  )
}
