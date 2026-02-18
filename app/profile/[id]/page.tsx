'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [currentUserProfile, setCurrentUserProfile] = useState<any>(null)
  const [isMatched, setIsMatched] = useState(false)
  const [hasLiked, setHasLiked] = useState(false)
  const [likeLoading, setLikeLoading] = useState(false)

  useEffect(() => {
    loadData()
  }, [params.id])

  const loadData = async () => {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    setCurrentUser(user)

    if (user) {
      // Get current user's profile
      const { data: userProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      setCurrentUserProfile(userProfile)

      // Check if already liked
      const { data: existingLike } = await supabase
        .from('likes')
        .select('id')
        .eq('from_user_id', user.id)
        .eq('to_user_id', params.id)
        .single()
      
      setHasLiked(!!existingLike)

      // Check if matched
      const { data: match } = await supabase
        .from('matches')
        .select('id')
        .or(`and(user1_id.eq.${user.id},user2_id.eq.${params.id}),and(user1_id.eq.${params.id},user2_id.eq.${user.id})`)
        .single()
      
      setIsMatched(!!match)
    }

    // Load profile
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', params.id)
      .single()

    if (data) {
      setProfile(data)
    }
    setLoading(false)
  }

  const calculateAge = (dateOfBirth: string) => {
    if (!dateOfBirth) return null
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const handleLike = async () => {
    if (!currentUser || hasLiked || likeLoading) return
    
    setLikeLoading(true)

    try {
      // Insert like
      const { error: likeError } = await supabase
        .from('likes')
        .insert({
          from_user_id: currentUser.id,
          to_user_id: params.id
        })

      if (likeError) {
        if (likeError.code === '23505') {
          // Already liked
          setHasLiked(true)
        } else {
          console.error('Like error:', likeError)
          alert('Failed to like profile')
        }
        setLikeLoading(false)
        return
      }

      setHasLiked(true)

      // Check for mutual like (match)
      const { data: mutualLike } = await supabase
        .from('likes')
        .select('id')
        .eq('from_user_id', params.id)
        .eq('to_user_id', currentUser.id)
        .single()

      if (mutualLike) {
        // Create match
        const { error: matchError } = await supabase
          .from('matches')
          .insert({
            user1_id: currentUser.id < (params.id as string) ? currentUser.id : params.id,
            user2_id: currentUser.id < (params.id as string) ? params.id : currentUser.id
          })

        if (!matchError) {
          setIsMatched(true)
          alert('🎉 It\'s a match! You can now message each other.')
        }
      }
    } catch (err) {
      console.error('Error:', err)
    }

    setLikeLoading(false)
  }

  const handleMessage = () => {
    router.push(`/messages/${params.id}`)
  }

  if (loading) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading profile...</div>
  }

  // Profile not found
  if (!profile) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😕</div>
        <h1>Profile Not Found</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          This profile doesn't exist or has been removed.
        </p>
        <Link href="/browse" className="button">
          Browse Profiles
        </Link>
      </div>
    )
  }

  // Current user not verified
  if (currentUser && currentUserProfile?.verification_status !== 'verified') {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          padding: '3rem',
          background: '#fff3cd',
          borderRadius: '12px',
          border: '1px solid #ffc107'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔐</div>
          <h1 style={{ color: '#856404', marginBottom: '1rem' }}>Verification Required</h1>
          <p style={{ color: '#856404', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            You need to verify your identity to view profiles and connect with others.
          </p>
          <Link
            href="/platform-preview/verify"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Verify Your Identity →
          </Link>
        </div>
      </section>
    )
  }

  // Profile not verified (and not own profile)
  const isOwnProfile = currentUser?.id === profile.id
  if (!isOwnProfile && profile.verification_status !== 'verified') {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔒</div>
        <h1>Profile Not Available</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          This user hasn't completed verification yet.
        </p>
        <Link href="/browse" className="button">
          Browse Profiles
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1.5rem' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Link 
          href="/browse" 
          style={{ color: 'var(--primary)', textDecoration: 'none' }}
        >
          ← Back to Browse
        </Link>
        {isOwnProfile && (
          <Link
            href="/profile/edit"
            style={{
              padding: '0.5rem 1rem',
              background: '#f5f5f5',
              color: '#333',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Edit Profile
          </Link>
        )}
      </div>

      {/* Profile Card */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        {/* Header with photo */}
        <div style={{
          height: '250px',
          background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {profile.profile_photo ? (
            <img
              src={profile.profile_photo}
              alt={profile.display_name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          ) : (
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {profile.display_name?.charAt(0).toUpperCase() || '?'}
            </div>
          )}

          {/* Verification badge */}
          {profile.verification_status === 'verified' && (
            <span style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              padding: '0.5rem 1rem',
              background: '#d4edda',
              color: '#155724',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}>
              ✅ Verified
            </span>
          )}

          {/* Match badge */}
          {isMatched && !isOwnProfile && (
            <span style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              padding: '0.5rem 1rem',
              background: '#fff3cd',
              color: '#856404',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}>
              💕 Matched
            </span>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          {/* Name and basic info */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>
              {profile.display_name}
              {profile.date_of_birth && (
                <span style={{ fontWeight: 'normal', color: '#666' }}>
                  , {calculateAge(profile.date_of_birth)}
                </span>
              )}
            </h1>
            
            {profile.location && (
              <p style={{ color: '#666', fontSize: '1.1rem', margin: 0 }}>
                📍 {profile.location}
              </p>
            )}
          </div>

          {/* Tags */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            {profile.gender && (
              <span style={{
                padding: '0.4rem 1rem',
                background: '#e7f3ff',
                color: '#1a365d',
                borderRadius: '20px',
                fontSize: '0.9rem',
                textTransform: 'capitalize'
              }}>
                {profile.gender.replace('-', ' ')}
              </span>
            )}
            {profile.disability_type && profile.disability_type !== 'none' && profile.disability_type !== 'Prefer not to say' && (
              <span style={{
                padding: '0.4rem 1rem',
                background: '#f3e5f5',
                color: '#4a148c',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                {profile.disability_type}
              </span>
            )}
          </div>

          {/* Bio */}
          {profile.bio && (
            <div style={{
              padding: '1.5rem',
              background: '#f9f9f9',
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.1rem' }}>
                About Me
              </h3>
              <p style={{
                lineHeight: '1.8',
                whiteSpace: 'pre-wrap',
                color: '#333',
                margin: 0
              }}>
                {profile.bio}
              </p>
            </div>
          )}

          {/* Looking for */}
          {profile.looking_for && (
            <div style={{
              padding: '1.5rem',
              background: '#f0f4ff',
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.1rem' }}>
                Looking For
              </h3>
              <p style={{ margin: 0, color: '#333' }}>
                {profile.looking_for}
              </p>
            </div>
          )}

          {/* Action Buttons (if not own profile) */}
          {!isOwnProfile && currentUser && (
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              paddingTop: '1rem'
            }}>
              {isMatched ? (
                <button
                  onClick={handleMessage}
                  style={{
                    padding: '1rem 2.5rem',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  ✉️ Send Message
                </button>
              ) : (
                <button
                  onClick={handleLike}
                  disabled={hasLiked || likeLoading}
                  style={{
                    padding: '1rem 2.5rem',
                    background: hasLiked ? '#d4edda' : 'var(--primary)',
                    color: hasLiked ? '#155724' : 'white',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: hasLiked ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {likeLoading ? '...' : hasLiked ? '💚 Liked' : '💙 Like'}
                </button>
              )}
            </div>
          )}

          {/* Not logged in */}
          {!currentUser && (
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: '#f0f4ff',
              borderRadius: '12px'
            }}>
              <p style={{ marginBottom: '1rem', color: '#666' }}>
                Sign in to like and connect with {profile.display_name}
              </p>
              <Link
                href="/login"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                Sign In
              </Link>
            </div>
          )}

          {/* Member since */}
          <p style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #eee',
            color: '#999',
            fontSize: '0.85rem',
            textAlign: 'center'
          }}>
            Member since {new Date(profile.created_at).toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div style={{ 
        marginTop: '2rem', 
        textAlign: 'center',
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Link href="/browse" style={{ color: 'var(--primary)' }}>
          Browse Profiles
        </Link>
        <Link href="/matches" style={{ color: 'var(--primary)' }}>
          My Matches
        </Link>
        <Link href="/messages" style={{ color: 'var(--primary)' }}>
          Messages
        </Link>
        <Link href="/" style={{ color: 'var(--primary)' }}>
          Dashboard
        </Link>
      </div>
    </div>
  )
}
