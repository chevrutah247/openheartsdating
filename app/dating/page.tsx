'use client'

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
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    // Redirect to login if not authenticated
    // TODO: Check authentication
    setLoading(false)
  }, [])

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
            Connecting people who understand your journey
          </p>
        </div>

        {/* Coming Soon Message */}
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🚀</div>
          <h2 style={{ marginBottom: '1rem', color: '#667eea' }}>Coming Soon!</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
            We're working hard to bring you the best matching experience. 
            The full dating features will be available in our Spring 2026 launch.
          </p>
          
          <div style={{
            padding: '1.5rem',
            background: '#f0f4ff',
            borderRadius: '12px',
            marginBottom: '2rem',
            textAlign: 'left'
          }}>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>What's Coming:</h4>
            <ul style={{ lineHeight: '2', color: '#666' }}>
              <li>✅ Browse profiles by gender, location, and interests</li>
              <li>✅ Smart matching algorithm</li>
              <li>✅ Like & match with people</li>
              <li>✅ Real-time messaging</li>
              <li>✅ Safe, moderated environment</li>
              <li>✅ Fully accessible for all users</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/join"
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
              Join Early Access
            </a>
            <a 
              href="/when-we-launch"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              See Timeline
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
