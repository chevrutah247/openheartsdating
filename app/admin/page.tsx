'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Stats {
  totalUsers: number
  verifiedUsers: number
  pendingVerification: number
  totalMatches: number
  totalMessages: number
}

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    verifiedUsers: 0,
    pendingVerification: 0,
    totalMatches: 0,
    totalMessages: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAdminAccess()
  }, [])

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    // Get user profile and check role
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (!profileData || (profileData.role !== 'admin' && profileData.role !== 'moderator')) {
      router.push('/dashboard')
      return
    }

    setProfile(profileData)

    // Load stats
    await loadStats()

    setLoading(false)
  }

  const loadStats = async () => {
    // Total users
    const { count: totalUsers } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })

    // Verified users
    const { count: verifiedUsers } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .eq('verification_status', 'verified')

    // Pending verification
    const { count: pendingVerification } = await supabase
      .from('verification_documents')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending')

    // Total matches
    const { count: totalMatches } = await supabase
      .from('matches')
      .select('*', { count: 'exact', head: true })

    // Total messages
    const { count: totalMessages } = await supabase
      .from('messages')
      .select('*', { count: 'exact', head: true })

    setStats({
      totalUsers: totalUsers || 0,
      verifiedUsers: verifiedUsers || 0,
      pendingVerification: pendingVerification || 0,
      totalMatches: totalMatches || 0,
      totalMessages: totalMessages || 0
    })
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading admin panel...
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Admin Panel</h1>
        <p style={{ color: '#666' }}>
          Welcome, {profile?.display_name || 'Admin'} 
          <span style={{ 
            marginLeft: '0.5rem',
            padding: '0.2rem 0.5rem',
            background: '#fef3c7',
            color: '#92400e',
            borderRadius: '4px',
            fontSize: '0.85rem'
          }}>
            {profile?.role}
          </span>
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          padding: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea' }}>
            {stats.totalUsers}
          </div>
          <div style={{ color: '#666' }}>Total Users</div>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>
            {stats.verifiedUsers}
          </div>
          <div style={{ color: '#666' }}>Verified Users</div>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b' }}>
            {stats.pendingVerification}
          </div>
          <div style={{ color: '#666' }}>Pending Verification</div>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ec4899' }}>
            {stats.totalMatches}
          </div>
          <div style={{ color: '#666' }}>Total Matches</div>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
            {stats.totalMessages}
          </div>
          <div style={{ color: '#666' }}>Total Messages</div>
        </div>
      </div>

      {/* Admin Sections */}
      <h2 style={{ marginBottom: '1.5rem' }}>Management</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {/* Users Management */}
        <Link href="/admin/users" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            padding: '2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '2px solid transparent',
            transition: 'border-color 0.2s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Users</h3>
            <p style={{ color: '#666', margin: 0 }}>
              View all users, change roles, manage accounts
            </p>
          </div>
        </Link>

        {/* Verification Queue */}
        <Link href="/admin/verification" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            padding: '2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '2px solid transparent',
            transition: 'border-color 0.2s',
            cursor: 'pointer',
            position: 'relative'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
          >
            {stats.pendingVerification > 0 && (
              <span style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#ef4444',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
                {stats.pendingVerification} pending
              </span>
            )}
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔐</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Verification</h3>
            <p style={{ color: '#666', margin: 0 }}>
              Review documents, approve or reject verification requests
            </p>
          </div>
        </Link>

        {/* Newsletter */}
        <Link href="/admin/newsletter" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            padding: '2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '2px solid transparent',
            transition: 'border-color 0.2s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📧</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Newsletter</h3>
            <p style={{ color: '#666', margin: 0 }}>
              Manage subscribers and send newsletters
            </p>
          </div>
        </Link>

        {/* Reports */}
        <Link href="/admin/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            padding: '2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '2px solid transparent',
            transition: 'border-color 0.2s',
            cursor: 'pointer',
            position: 'relative'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = '#ef4444'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚨</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Reports</h3>
            <p style={{ color: '#666', margin: 0 }}>
              Review user reports, warn/suspend/ban users
            </p>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Quick Actions</h2>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link 
          href="/admin/users"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#667eea',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          View All Users
        </Link>
        
        <Link 
          href="/admin/verification"
          style={{
            padding: '0.75rem 1.5rem',
            background: stats.pendingVerification > 0 ? '#f59e0b' : '#e5e7eb',
            color: stats.pendingVerification > 0 ? 'white' : '#666',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          Review Verifications ({stats.pendingVerification})
        </Link>

        <button
          onClick={loadStats}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'white',
            color: '#667eea',
            border: '1px solid #667eea',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Refresh Stats
        </button>
      </div>
    </div>
  )
}
