'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useParams, useRouter } from 'next/navigation'

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    loadProfile()
    checkCurrentUser()
  }, [params.id])

  const checkCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setCurrentUser(user)
  }

  const loadProfile = async () => {
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
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  if (loading) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading profile...</div>
  }

  if (!profile) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Profile Not Found</h1>
        <p style={{ marginTop: '1rem' }}>
          <a href="/dashboard" className="button">Back to Dashboard</a>
        </p>
      </div>
    )
  }

  const isOwnProfile = currentUser?.id === profile.id

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '2rem' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <a href="/dashboard" style={{ color: '#667eea', textDecoration: 'none' }}>
          ← Back
        </a>
        {isOwnProfile && (
          <button
            onClick={() => router.push('/profile/edit')}
            className="button button-secondary"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Profile Card */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {/* Profile Photo Placeholder */}
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          color: 'white',
          margin: '0 auto 2rem',
          fontWeight: 'bold'
        }}>
          {profile.display_name?.charAt(0).toUpperCase() || '?'}
        </div>

        {/* Name and Age */}
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          {profile.display_name}
          {profile.date_of_birth && `, ${calculateAge(profile.date_of_birth)}`}
        </h1>

        {/* Location */}
        {profile.location && (
          <p style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            📍 {profile.location}
          </p>
        )}

        {/* Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <div>
            <strong style={{ color: '#667eea' }}>Gender:</strong>
            <p style={{ margin: '0.25rem 0 0', textTransform: 'capitalize' }}>
              {profile.gender?.replace('-', ' ') || 'Not specified'}
            </p>
          </div>
          {profile.disability_type && (
            <div>
              <strong style={{ color: '#667eea' }}>Disability Type:</strong>
              <p style={{ margin: '0.25rem 0 0' }}>{profile.disability_type}</p>
            </div>
          )}
        </div>

        {/* Bio */}
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>About Me</h3>
          <p style={{
            lineHeight: '1.8',
            whiteSpace: 'pre-wrap',
            color: '#333'
          }}>
            {profile.bio}
          </p>
        </div>

        {/* Member Since */}
        <p style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #eee',
          color: '#999',
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          Member since {new Date(profile.created_at).toLocaleDateString()}
        </p>
      </div>

      {/* Action Buttons (if not own profile) */}
      {!isOwnProfile && (
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <button className="button" style={{ padding: '1rem 2rem' }}>
            💙 Like
          </button>
          <button className="button button-secondary" style={{ padding: '1rem 2rem' }}>
            ✉️ Message
          </button>
        </div>
      )}
    </div>
  )
}
