'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
    } else {
      setUser(user)
    }
    
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div style={{ 
        padding: '4rem', 
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#666'
      }}>
        Loading...
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '2rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <button 
          onClick={handleLogout} 
          className="button button-secondary"
          style={{ padding: '0.75rem 1.5rem' }}
        >
          Logout
        </button>
      </div>

      <div style={{ 
        padding: '2rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '12px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>
          Welcome to Open Hearts Dating! 💙
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>
          You're successfully logged in and ready to start your journey.
        </p>
      </div>

      <div style={{ 
        padding: '2rem', 
        background: '#f9f9f9', 
        borderRadius: '12px',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Your Account</h3>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Email:</strong> {user?.email}
        </p>
        <p style={{ fontSize: '0.85rem', color: '#666' }}>
          <strong>User ID:</strong> {user?.id}
        </p>
      </div>

      <div style={{ 
        padding: '2rem', 
        background: '#fff', 
        border: '2px dashed #667eea',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>
          Complete Your Profile
        </h3>
        <p style={{ 
          marginBottom: '1.5rem',
          color: '#666',
          lineHeight: '1.6'
        }}>
          Tell us about yourself to start connecting with others who understand your journey.
        </p>
        <button 
          className="button"
          style={{ 
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}
          onClick={() => router.push('/profile/create')}
        >
          Create Profile →
        </button>
      </div>

      <div style={{ 
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '8px'
      }}>
        <p style={{ margin: 0, color: '#856404' }}>
          <strong>Coming Soon:</strong> Matching algorithm, messaging, and more features!
        </p>
      </div>
    </div>
  )
}
