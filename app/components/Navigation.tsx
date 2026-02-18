'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import NotificationBell from './NotificationBell'

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Add/remove bottom-bar body class for logged-in users
  useEffect(() => {
    if (user && profile) {
      document.body.classList.add('has-bottom-bar')
    } else {
      document.body.classList.remove('has-bottom-bar')
    }
    return () => document.body.classList.remove('has-bottom-bar')
  }, [user, profile])

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
      .select('display_name, role, verification_status, photo_url')
      .eq('id', userId)
      .single()

    setProfile(data)
  }

  const handleLogout = async () => {
    setDropdownOpen(false)
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
    router.push('/')
  }

  const isAdmin = profile?.role === 'admin' || profile?.role === 'moderator'
  const isVerified = profile?.verification_status === 'verified'
  const initial = profile?.display_name?.charAt(0).toUpperCase() || '?'

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            Open Hearts
          </Link>

          {loading ? (
            <div style={{ width: 80 }} />
          ) : user ? (
            <>
              {/* Desktop nav - logged in */}
              <div className="nav-links desktop-nav">
                <Link href="/" style={{ color: isActive('/') ? 'var(--primary)' : undefined }}>
                  Home
                </Link>
                {isVerified && (
                  <>
                    <Link href="/browse" style={{ color: isActive('/browse') ? 'var(--primary)' : undefined }}>
                      Browse
                    </Link>
                    <Link href="/matches" style={{ color: isActive('/matches') ? 'var(--primary)' : undefined }}>
                      Matches
                    </Link>
                    <Link href="/messages" style={{ color: isActive('/messages') || pathname.startsWith('/messages/') ? 'var(--primary)' : undefined }}>
                      Messages
                    </Link>
                  </>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <NotificationBell />

                {/* Avatar dropdown */}
                <div className="nav-dropdown" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="avatar"
                    aria-label="Account menu"
                    style={{ cursor: 'pointer', border: dropdownOpen ? '2px solid var(--primary)' : '2px solid transparent' }}
                  >
                    {profile?.photo_url ? (
                      <img src={profile.photo_url} alt="" />
                    ) : (
                      initial
                    )}
                  </button>

                  {dropdownOpen && (
                    <div className="nav-dropdown-menu">
                      <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--gray-100)' }}>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                          {profile?.display_name || 'User'}
                        </div>
                        {isVerified && (
                          <span style={{ fontSize: '0.8rem', color: 'var(--success)' }}>Verified</span>
                        )}
                      </div>
                      <Link href={`/profile/${user.id}`} onClick={() => setDropdownOpen(false)}>
                        My Profile
                      </Link>
                      <Link href="/profile/edit" onClick={() => setDropdownOpen(false)}>
                        Edit Profile
                      </Link>
                      <Link href="/profile/blocked" onClick={() => setDropdownOpen(false)}>
                        Blocked Users
                      </Link>
                      {isAdmin && (
                        <>
                          <div className="divider" />
                          <Link href="/admin" onClick={() => setDropdownOpen(false)} style={{ color: 'var(--warning)' }}>
                            Admin Panel
                          </Link>
                        </>
                      )}
                      <div className="divider" />
                      <button onClick={handleLogout}>
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile top bar - logged in: just logo + bell + avatar (no hamburger) */}
            </>
          ) : (
            <>
              {/* Guest nav */}
              <div className="nav-links desktop-nav">
                <Link href="/login" style={{ fontWeight: 500 }}>Log In</Link>
                <Link href="/signup" className="button button-primary button-small">
                  Sign Up
                </Link>
              </div>

              {/* Mobile guest */}
              <div className="mobile-guest-nav" style={{ display: 'none' }}>
                <Link href="/login" style={{ fontWeight: 500, color: 'var(--gray-700)', fontSize: '0.95rem' }}>
                  Log In
                </Link>
                <Link href="/signup" className="button button-primary button-small">
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Bottom Tab Bar for logged-in mobile users */}
      {user && profile && <BottomTabBar pathname={pathname} isVerified={isVerified} userId={user.id} />}
    </>
  )
}

function BottomTabBar({ pathname, isVerified, userId }: { pathname: string; isVerified: boolean; userId: string }) {
  const tabs = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    ...(isVerified ? [
      {
        href: '/browse',
        label: 'Browse',
        active: pathname === '/browse',
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        ),
      },
      {
        href: '/matches',
        label: 'Matches',
        active: pathname === '/matches',
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ),
      },
      {
        href: '/messages',
        label: 'Messages',
        active: pathname === '/messages' || pathname.startsWith('/messages/'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
      },
    ] : []),
    {
      href: `/profile/${userId}`,
      label: 'Profile',
      active: pathname === `/profile/${userId}` || pathname === '/profile/edit',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ]

  return (
    <nav className="bottom-tab-bar" aria-label="Main navigation">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`bottom-tab${tab.active ? ' active' : ''}`}
          aria-current={tab.active ? 'page' : undefined}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  )
}
