'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Profile {
  id: string
  display_name: string
  age: number
  location: string
  bio: string
  disability_type: string
  looking_for: string
  interests: string[]
  communication_preferences: string[]
  verification_status: string
  liked?: boolean
}

export default function DatingPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [likedUsers, setLikedUsers] = useState<Set<string>>(new Set())
  const [filter, setFilter] = useState({
    lookingFor: 'all',
    location: ''
  })

  useEffect(() => {
    checkUserAndLoadProfiles()
  }, [])

  const checkUserAndLoadProfiles = async () => {
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

    // Get user's likes
    const { data: likesData } = await supabase
      .from('likes')
      .select('to_user_id')
      .eq('from_user_id', user.id)

    if (likesData) {
      setLikedUsers(new Set(likesData.map(l => l.to_user_id)))
    }

    // Load verified profiles (excluding self)
    await loadProfiles(user.id)

    setLoading(false)
  }

  const loadProfiles = async (userId: string) => {
    let query = supabase
      .from('profiles')
      .select('*')
      .eq('verification_status', 'verified')
      .neq('id', userId)
      .order('created_at', { ascending: false })

    const { data, error } = await query

    if (data) {
      setProfiles(data)
    }
  }

  const handleLike = async (toUserId: string) => {
    if (!user) return

    // Add like
    const { error } = await supabase
      .from('likes')
      .insert([{ from_user_id: user.id, to_user_id: toUserId }])

    if (error) {
      console.error('Like error:', error)
      return
    }

    // Update local state
    setLikedUsers(prev => new Set([...prev, toUserId]))

    // Check if it's a match (other person also liked us)
    const { data: mutualLike } = await supabase
      .from('likes')
      .select('id')
      .eq('from_user_id', toUserId)
      .eq('to_user_id', user.id)
      .single()

    if (mutualLike) {
      // Create match
      const user1 = user.id < toUserId ? user.id : toUserId
      const user2 = user.id < toUserId ? toUserId : user.id

      await supabase
        .from('matches')
        .insert([{ user1_id: user1, user2_id: user2 }])

      alert('It is a match! You can now message each other.')
    }
  }

  const handleUnlike = async (toUserId: string) => {
    if (!user) return

    await supabase
      .from('likes')
      .delete()
      .eq('from_user_id', user.id)
      .eq('to_user_id', toUserId)

    setLikedUsers(prev => {
      const newSet = new Set(prev)
      newSet.delete(toUserId)
      return newSet
    })
  }

  const getDisabilityLabel = (type: string) => {
    const labels: Record<string, string> = {
      'mobility': 'Mobility',
      'visual': 'Visual',
      'hearing': 'Hearing',
      'chronic': 'Chronic Illness',
      'neurodiversity': 'Neurodiversity',
      'prefer_not_to_say': 'Prefer not to say',
      'none': ''
    }
    return labels[type] || type
  }

  const getLookingForLabel = (type: string) => {
    const labels: Record<string, string> = {
      'dating': 'Dating',
      'friendship': 'Friendship',
      'experience_exchange': 'Experience Exchange',
      'volunteering': 'Volunteering'
    }
    return labels[type] || type
  }

  const filteredProfiles = profiles.filter(p => {
    if (filter.lookingFor !== 'all' && p.looking_for !== filter.lookingFor) return false
    if (filter.location && !p.location?.toLowerCase().includes(filter.location.toLowerCase())) return false
    return true
  })

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  // Not verified - show prompt
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
            To protect our community, only verified users can browse profiles and connect with others.
          </p>
          <p style={{ color: '#856404', marginBottom: '2rem' }}>
            Verification is not about restriction. It is about protecting real people.
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
    <section style={{ padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Find Your Connection</h1>
        <p style={{ color: '#666' }}>Browse verified profiles and find meaningful connections</p>
      </div>

      {/* Filters */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        padding: '1rem',
        background: '#f9f9f9',
        borderRadius: '8px'
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', color: '#666' }}>
            Looking for
          </label>
          <select
            value={filter.lookingFor}
            onChange={(e) => setFilter({ ...filter, lookingFor: e.target.value })}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            <option value="all">All</option>
            <option value="dating">Dating</option>
            <option value="friendship">Friendship</option>
            <option value="experience_exchange">Experience Exchange</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', color: '#666' }}>
            Location
          </label>
          <input
            type="text"
            placeholder="City or country..."
            value={filter.location}
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ marginLeft: 'auto', alignSelf: 'flex-end' }}>
          <Link
            href="/platform-preview/matches"
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#667eea',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}
          >
            My Matches
          </Link>
        </div>
      </div>

      {/* Profile Grid */}
      {filteredProfiles.length === 0 ? (
        <div style={{
          padding: '4rem',
          textAlign: 'center',
          background: '#f9f9f9',
          borderRadius: '12px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h2 style={{ marginBottom: '0.5rem' }}>No profiles found</h2>
          <p style={{ color: '#666' }}>Try adjusting your filters or check back later</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProfiles.map((p) => (
            <div
              key={p.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Profile Header */}
              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.3rem' }}>
                      {p.display_name || 'Anonymous'}
                    </h3>
                    <p style={{ margin: '0.25rem 0 0', opacity: 0.9, fontSize: '0.95rem' }}>
                      {p.age ? `${p.age} years` : ''} {p.location ? `• ${p.location}` : ''}
                    </p>
                  </div>
                  <span style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem'
                  }}>
                    Verified
                  </span>
                </div>
              </div>

              {/* Profile Body */}
              <div style={{ padding: '1.5rem' }}>
                {p.bio && (
                  <p style={{ 
                    color: '#555', 
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    {p.bio.length > 150 ? p.bio.substring(0, 150) + '...' : p.bio}
                  </p>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {p.looking_for && (
                    <span style={{
                      background: '#e7f3ff',
                      color: '#667eea',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem'
                    }}>
                      {getLookingForLabel(p.looking_for)}
                    </span>
                  )}
                  {p.disability_type && p.disability_type !== 'none' && p.disability_type !== 'prefer_not_to_say' && (
                    <span style={{
                      background: '#f0f4ff',
                      color: '#555',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem'
                    }}>
                      {getDisabilityLabel(p.disability_type)}
                    </span>
                  )}
                </div>

                {p.interests && p.interests.length > 0 && (
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.5rem' }}>Interests:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                      {p.interests.slice(0, 4).map((interest, i) => (
                        <span key={i} style={{
                          background: '#f5f5f5',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          color: '#666'
                        }}>
                          {interest}
                        </span>
                      ))}
                      {p.interests.length > 4 && (
                        <span style={{ fontSize: '0.8rem', color: '#999' }}>
                          +{p.interests.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link
                    href={`/profile/${p.id}`}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      background: '#f5f5f5',
                      color: '#333',
                      border: 'none',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontSize: '0.95rem'
                    }}
                  >
                    View Profile
                  </Link>
                  {likedUsers.has(p.id) ? (
                    <button
                      onClick={() => handleUnlike(p.id)}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        background: '#f8d7da',
                        color: '#721c24',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.95rem'
                      }}
                    >
                      Unlike
                    </button>
                  ) : (
                    <button
                      onClick={() => handleLike(p.id)}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.95rem'
                      }}
                    >
                      Like
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/dashboard" style={{ color: '#667eea' }}>Back to Dashboard</Link>
      </div>
    </section>
  )
}
