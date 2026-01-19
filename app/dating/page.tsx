'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Profile {
  id: string
  display_name: string
  bio: string
  location: string
  gender: string
  photo_url: string | null
  age: number | null
  disability_type: string | null
}

export default function DatingPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    loadProfiles()
  }, [])

  async function loadProfiles() {
    try {
      // Получить текущего пользователя
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }

      // Получить профиль текущего пользователя
      const { data: userProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (!userProfile) {
        router.push('/profile/create')
        return
      }

      setCurrentUser(userProfile)

      // ТРАДИЦИОННЫЕ ЦЕННОСТИ: показывать только противоположный пол
      // Male → показываем Female
      // Female → показываем Male
      const oppositeGender = userProfile.gender === 'male' ? 'female' : 'male'

      // Получить профили противоположного пола
      const { data: oppositeProfiles, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('gender', oppositeGender) // Только противоположный пол!
        .eq('looking_for', userProfile.gender) // Они тоже ищут наш пол
        .neq('id', user.id) // Не показывать себя
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) throw error

      setProfiles(oppositeProfiles || [])
    } catch (error) {
      console.error('Error loading profiles:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleLike(profileId: string) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Добавить лайк
      const { error } = await supabase
        .from('likes')
        .insert({
          liker_id: user.id,
          liked_id: profileId
        })

      if (error) throw error

      // Проверить взаимный лайк
      const { data: mutualLike } = await supabase
        .from('likes')
        .select('*')
        .eq('liker_id', profileId)
        .eq('liked_id', user.id)
        .single()

      if (mutualLike) {
        // Это матч! Создать чат
        alert('🎉 It\'s a match!')
        // TODO: Создать чат и перенаправить на messages
      }

      // Убрать профиль из списка
      setProfiles(prev => prev.filter(p => p.id !== profileId))
    } catch (error) {
      console.error('Error liking profile:', error)
    }
  }

  async function handleSkip(profileId: string) {
    // Просто убрать из списка (можно добавить в БД table "skipped")
    setProfiles(prev => prev.filter(p => p.id !== profileId))
  }

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <p>Loading profiles...</p>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Find Your Match</h1>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            {currentUser?.gender === 'male' 
              ? '👨 Showing women who are looking for men' 
              : '👩 Showing men who are looking for women'}
          </p>
        </div>

        {/* Profiles Grid */}
        {profiles.length > 0 ? (
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {profiles.map((profile) => (
              <div 
                key={profile.id}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Photo */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '300px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  overflow: 'hidden'
                }}>
                  {profile.photo_url ? (
                    <Image
                      src={profile.photo_url}
                      alt={profile.display_name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '5rem',
                      color: 'white'
                    }}>
                      {profile.gender === 'male' ? '👨' : '👩'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '0.5rem',
                    color: '#333'
                  }}>
                    {profile.display_name}
                    {profile.age && `, ${profile.age}`}
                  </h3>

                  {profile.location && (
                    <p style={{ 
                      color: '#666', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      📍 {profile.location}
                    </p>
                  )}

                  {profile.bio && (
                    <p style={{ 
                      color: '#666', 
                      marginBottom: '1rem',
                      lineHeight: '1.6'
                    }}>
                      {profile.bio.length > 150 
                        ? profile.bio.substring(0, 150) + '...' 
                        : profile.bio}
                    </p>
                  )}

                  {profile.disability_type && (
                    <p style={{
                      padding: '0.5rem 1rem',
                      background: '#f0f4ff',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      color: '#667eea',
                      marginBottom: '1rem'
                    }}>
                      ♿ {profile.disability_type}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem',
                    marginTop: '1.5rem'
                  }}>
                    <button
                      onClick={() => handleSkip(profile.id)}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        background: 'white',
                        color: '#666',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      Skip
                    </button>
                    <button
                      onClick={() => handleLike(profile.id)}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      💙 Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😊</div>
            <h2 style={{ marginBottom: '1rem' }}>No more profiles right now</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
              Check back later for new members, or invite your friends to join!
            </p>
            <a 
              href="/dashboard"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Back to Dashboard
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
