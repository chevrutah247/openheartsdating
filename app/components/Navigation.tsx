'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
      if (session?.user) {
        loadProfile(session.user.id)
      } else {
        setProfile(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    if (user) {
      await loadProfile(user.id)
    }
    setLoading(false)
  }

  const loadProfile = async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('display_name, role, verification_status')
      .eq('id', userId)
      .single()
    
    setProfile(data)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
    router.push('/')
  }

  const isAdmin = profile?.role === 'admin' || profile?.role === 'moderator'
  const isVerified = profile?.verification_status === 'verified'

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Open Hearts Dating
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          {/* Public links */}
          <Link href="/">Home</Link>
          <Link href="/mission">Mission</Link>
          <Link href="/news">News</Link>
          
          {loading ? (
            <span style={{ color: '#999' }}>...</span>
          ) : user ? (
            <>
              {/* Logged in user links */}
              <Link href="/dashboard">Dashboard</Link>
              {isVerified && (
                <>
                  <Link href="/platform-preview/dating">Browse</Link>
                  <Link href="/platform-preview/matches">Matches</Link>
                  <Link href="/messages">Messages</Link>
                </>
              )}
              {isAdmin && (
                <Link href="/admin" style={{ color: '#f59e0b' }}>Admin</Link>
              )}
              <div className="nav-user-menu">
                <span style={{ 
                  color: '#667eea', 
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {isVerified && <span title="Verified">✅</span>}
                  {profile?.display_name || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'transparent',
                    border: '1px solid #e5e7eb',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Guest links */}
              <Link href="/trust">Trust & Safety</Link>
              <Link href="/volunteer">Volunteer</Link>
              <Link href="/support">Support</Link>
              <Link href="/login" className="nav-login">Login</Link>
              <Link href="/signup" className="button button-small">Sign Up</Link>
            </>
          )}
          
          <Link 
            href="https://gofund.me/03630f97" 
            className="button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            💙 Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/mission" onClick={() => setMobileMenuOpen(false)}>Mission</Link>
          <Link href="/news" onClick={() => setMobileMenuOpen(false)}>News</Link>
          
          {user ? (
            <>
              <div className="mobile-nav-divider" />
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
              {isVerified && (
                <>
                  <Link href="/platform-preview/dating" onClick={() => setMobileMenuOpen(false)}>Browse Profiles</Link>
                  <Link href="/platform-preview/matches" onClick={() => setMobileMenuOpen(false)}>My Matches</Link>
                  <Link href="/messages" onClick={() => setMobileMenuOpen(false)}>Messages</Link>
                </>
              )}
              {isAdmin && (
                <Link href="/admin" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f59e0b' }}>
                  Admin Panel
                </Link>
              )}
              <div className="mobile-nav-divider" />
              <button onClick={handleLogout} className="mobile-logout-btn">
                Logout ({profile?.display_name || 'User'})
              </button>
            </>
          ) : (
            <>
              <Link href="/trust" onClick={() => setMobileMenuOpen(false)}>Trust & Safety</Link>
              <Link href="/volunteer" onClick={() => setMobileMenuOpen(false)}>Volunteer</Link>
              <Link href="/support" onClick={() => setMobileMenuOpen(false)}>Support</Link>
              <div className="mobile-nav-divider" />
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
            </>
          )}
          
          <div className="mobile-nav-divider" />
          <Link 
            href="https://gofund.me/03630f97" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            💙 Donate
          </Link>
        </div>
      )}
    </nav>
  )
}
