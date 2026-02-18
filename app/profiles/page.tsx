'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface Profile {
  id: string
  display_name: string
  date_of_birth: string
  gender: string
  bio: string
  location: string
  disability_type: string
  profile_photo: string
  verification_status: string
  created_at: string
}

export default function BrowseProfilesPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [userProfile, setUserProfile] = useState<any>(null)
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Filters
  const [ageMin, setAgeMin] = useState(18)
  const [ageMax, setAgeMax] = useState(99)
  const [genderFilter, setGenderFilter] = useState('all')

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

    // Get user's profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profile) {
      setUserProfile(profile)
    }

    // Load all verified profiles except current user
    const { data: allProfiles } = await supabase
      .from('profiles')
      .select('*')
      .neq('id', user.id)
      .eq('verification_status', 'verified')
      .order('created_at', { ascending: false })

    if (allProfiles) {
      setProfiles(allProfiles)
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

  const filteredProfiles = profiles.filter(profile => {
    const age = calculateAge(profile.date_of_birth)
    if (age && (age < ageMin || age > ageMax)) return false
    if (genderFilter !== 'all' && profile.gender !== genderFilter) return false
    return true
  })

  const currentProfile = filteredProfiles[currentIndex]

  const handlePass = () => {
    if (currentIndex < filteredProfiles.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleLike = async () => {
    // TODO: Implement like functionality with database
    console.log('Liked:', currentProfile?.id)
    
    if (currentIndex < filteredProfiles.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleViewProfile = () => {
    if (currentProfile) {
      router.push(`/profile/${currentProfile.id}`)
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading profiles...
      </div>
    )
  }

  // Check if user is verified
  if (userProfile?.verification_status !== 'verified') {
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
            To browse profiles and connect with other users, you must first verify your identity.
          </p>
          <a
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
          </a>
        </div>
        <p style={{ marginTop: '2rem' }}>
          <a href="/platform-preview" style={{ color: 'var(--primary)' }}>← Back to Platform Preview</a>
        </p>
      </section>
    )
  }

  return (
    <section style={{ padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h1 style={{ marginBottom: '0.25rem' }}>Discover People 💕</h1>
          <p style={{ color: '#666', margin: 0 }}>
            {filteredProfiles.length} verified {filteredProfiles.length === 1 ? 'profile' : 'profiles'} available
          </p>
        </div>
        <a href="/platform-preview" style={{ color: 'var(--primary)' }}>← Back</a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Filters Sidebar */}
        <div style={{
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '12px',
          position: 'sticky',
          top: '2rem'
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Filters</h3>

          {/* Age Range */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              Age Range
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input
                type="number"
                min="18"
                max="99"
                value={ageMin}
                onChange={(e) => setAgeMin(Number(e.target.value))}
                style={{
                  width: '60px',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
              <span>to</span>
              <input
                type="number"
                min="18"
                max="99"
                value={ageMax}
                onChange={(e) => setAgeMax(Number(e.target.value))}
                style={{
                  width: '60px',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>
          </div>

          {/* Gender Filter */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              Gender
            </label>
            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            onClick={() => {
              setAgeMin(18)
              setAgeMax(99)
              setGenderFilter('all')
              setCurrentIndex(0)
            }}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'transparent',
              color: 'var(--primary)',
              border: '1px solid var(--primary)',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Reset Filters
          </button>
        </div>

        {/* Profile Card */}
        <div>
          {filteredProfiles.length === 0 ? (
            <div style={{
              padding: '4rem',
              background: '#f9f9f9',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h2>No Profiles Found</h2>
              <p style={{ color: '#666' }}>
                Try adjusting your filters or check back later for new users.
              </p>
            </div>
          ) : currentIndex >= filteredProfiles.length ? (
            <div style={{
              padding: '4rem',
              background: '#f9f9f9',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
              <h2>You've Seen Everyone!</h2>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                Check back later for new profiles or adjust your filters.
              </p>
              <button
                onClick={() => setCurrentIndex(0)}
                style={{
                  padding: '1rem 2rem',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Start Over
              </button>
            </div>
          ) : currentProfile && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              {/* Profile Photo / Avatar */}
              <div style={{
                height: '300px',
                background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {currentProfile.profile_photo ? (
                  <img
                    src={currentProfile.profile_photo}
                    alt={currentProfile.display_name}
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
                    color: 'white'
                  }}>
                    {currentProfile.display_name?.charAt(0).toUpperCase() || '?'}
                  </div>
                )}
              </div>

              {/* Profile Info */}
              <div style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h2 style={{ marginBottom: '0.25rem' }}>
                      {currentProfile.display_name}
                      {currentProfile.date_of_birth && `, ${calculateAge(currentProfile.date_of_birth)}`}
                    </h2>
                    {currentProfile.location && (
                      <p style={{ color: '#666', margin: 0 }}>
                        📍 {currentProfile.location}
                      </p>
                    )}
                  </div>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: '#d4edda',
                    color: '#155724',
                    borderRadius: '20px',
                    fontSize: '0.85rem'
                  }}>
                    ✅ Verified
                  </span>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}>
                  {currentProfile.gender && (
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: '#e7f3ff',
                      color: '#1a365d',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      textTransform: 'capitalize'
                    }}>
                      {currentProfile.gender.replace('-', ' ')}
                    </span>
                  )}
                  {currentProfile.disability_type && currentProfile.disability_type !== 'none' && (
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: '#f3e5f5',
                      color: '#4a148c',
                      borderRadius: '20px',
                      fontSize: '0.85rem'
                    }}>
                      {currentProfile.disability_type}
                    </span>
                  )}
                </div>

                {/* Bio */}
                {currentProfile.bio && (
                  <div style={{
                    padding: '1rem',
                    background: '#f9f9f9',
                    borderRadius: '8px',
                    marginBottom: '1.5rem'
                  }}>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>
                      {currentProfile.bio.length > 200
                        ? currentProfile.bio.substring(0, 200) + '...'
                        : currentProfile.bio}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center'
                }}>
                  <button
                    onClick={handlePass}
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: '#f8d7da',
                      border: 'none',
                      fontSize: '2rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                  >
                    ❌
                  </button>
                  <button
                    onClick={handleViewProfile}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#e7f3ff',
                      border: 'none',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                  >
                    👤
                  </button>
                  <button
                    onClick={handleLike}
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: '#d4edda',
                      border: 'none',
                      fontSize: '2rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                  >
                    💚
                  </button>
                </div>

                {/* Progress */}
                <div style={{
                  marginTop: '1.5rem',
                  textAlign: 'center',
                  color: '#999',
                  fontSize: '0.9rem'
                }}>
                  {currentIndex + 1} of {filteredProfiles.length} profiles
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
