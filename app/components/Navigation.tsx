'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import NotificationBell from './NotificationBell'

type NavItem = {
  href: string
  label: string
}

const GUEST_PRIMARY: NavItem[] = [
  { href: '/mission', label: 'Mission' },
  { href: '/platform-preview', label: 'Platform' },
  { href: '/trust', label: 'Safety' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

const EXPLORE_LINKS: NavItem[] = [
  { href: '/forum', label: 'Forum' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/donate', label: 'Donate' },
  { href: '/support', label: 'Support' },
]

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const exploreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    checkUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
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
      const target = e.target as Node

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDropdownOpen(false)
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setMobileMenuOpen(false)
      }

      if (exploreRef.current && !exploreRef.current.contains(target)) {
        setExploreOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setExploreOpen(false)
  }, [pathname])

  useEffect(() => {
    if (user && profile) {
      document.body.classList.add('has-bottom-bar')
    } else {
      document.body.classList.remove('has-bottom-bar')
    }
    return () => document.body.classList.remove('has-bottom-bar')
  }, [user, profile])

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
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
    setMobileMenuOpen(false)
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
    router.push('/')
  }

  const isAdmin = profile?.role === 'admin' || profile?.role === 'moderator'
  const isVerified = profile?.verification_status === 'verified'
  const initial = profile?.display_name?.charAt(0).toUpperCase() || '?'

  const isActive = (path: string) => {
    if (path === '/messages') return pathname === '/messages' || pathname.startsWith('/messages/')
    return pathname === path
  }

  const memberPrimary: NavItem[] = isVerified
    ? [
        { href: '/', label: 'Home' },
        { href: '/browse', label: 'Browse' },
        { href: '/matches', label: 'Matches' },
        { href: '/messages', label: 'Messages' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/verify', label: 'Verify' },
        { href: '/trust', label: 'Safety' },
        { href: '/support', label: 'Support' },
      ]

  const renderMainLinks = (links: NavItem[]) => (
    <div className="nav-primary">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`nav-pill ${isActive(item.href) ? 'active' : ''}`}
          aria-current={isActive(item.href) ? 'page' : undefined}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )

  return (
    <>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container nav-shell">
          <Link href="/" className="logo" aria-label="Open Hearts home">
            Open Hearts
          </Link>

          {loading ? (
            <div style={{ width: 120 }} />
          ) : (
            <>
              <div className="nav-desktop desktop-nav">
                {user ? renderMainLinks(memberPrimary) : renderMainLinks(GUEST_PRIMARY)}

                <div className="nav-more" ref={exploreRef}>
                  <button
                    className={`nav-pill nav-more-btn ${exploreOpen ? 'active' : ''}`}
                    type="button"
                    aria-expanded={exploreOpen}
                    aria-haspopup="menu"
                    onClick={() => setExploreOpen((prev) => !prev)}
                  >
                    Explore
                  </button>

                  {exploreOpen && (
                    <div className="nav-more-menu" role="menu" aria-label="Explore links">
                      {EXPLORE_LINKS.map((item) => (
                        <Link key={item.href} href={item.href} role="menuitem" className="nav-more-link">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="nav-right-actions" ref={mobileMenuRef}>
                <button
                  type="button"
                  className="mobile-menu-btn"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-expanded={mobileMenuOpen}
                  aria-label="Open menu"
                >
                  <span />
                  <span />
                  <span />
                </button>

                {user ? (
                  <>
                    {!isVerified && (
                      <Link href="/verify" className="nav-verify-cta desktop-nav">
                        Complete Verify
                      </Link>
                    )}
                    <NotificationBell />

                    <div className="nav-dropdown" ref={dropdownRef}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="avatar"
                        aria-label="Account menu"
                        aria-expanded={dropdownOpen}
                        style={{
                          cursor: 'pointer',
                          border: dropdownOpen ? '2px solid var(--primary)' : '2px solid transparent',
                        }}
                      >
                        {profile?.photo_url ? <img src={profile.photo_url} alt="" /> : initial}
                      </button>

                      {dropdownOpen && (
                        <div className="nav-dropdown-menu">
                          <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--gray-100)' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{profile?.display_name || 'User'}</div>
                            {isVerified && <span style={{ fontSize: '0.8rem', color: 'var(--success)' }}>Verified</span>}
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
                          {!isVerified && (
                            <Link href="/verify" onClick={() => setDropdownOpen(false)}>
                              Verify Account
                            </Link>
                          )}
                          {isAdmin && (
                            <>
                              <div className="divider" />
                              <Link href="/admin" onClick={() => setDropdownOpen(false)} style={{ color: 'var(--warning)' }}>
                                Admin Panel
                              </Link>
                            </>
                          )}
                          <div className="divider" />
                          <button onClick={handleLogout}>Log Out</button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Link href="/login" className="nav-login-link">
                        Log In
                      </Link>
                      <Link href="/signup" className="button button-primary button-small nav-signup-btn">
                        Join Free
                      </Link>
                    </div>
                  </>
                )}

                {mobileMenuOpen && (
                  <div className="mobile-nav-menu" role="menu" aria-label="Mobile navigation">
                    <div className="mobile-nav-group">
                      <p className="mobile-nav-title">Main</p>
                      {(user ? memberPrimary : GUEST_PRIMARY).map((item) => (
                        <Link key={item.href} href={item.href} role="menuitem" className="mobile-nav-link">
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    <div className="mobile-nav-group">
                      <p className="mobile-nav-title">Explore</p>
                      {EXPLORE_LINKS.map((item) => (
                        <Link key={item.href} href={item.href} role="menuitem" className="mobile-nav-link">
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {!user ? (
                      <div className="mobile-nav-auth">
                        <Link href="/login" className="mobile-nav-link">
                          Log In
                        </Link>
                        <Link href="/signup" className="button button-primary button-small" style={{ width: '100%' }}>
                          Join Free
                        </Link>
                      </div>
                    ) : (
                      <div className="mobile-nav-auth">
                        <Link href={`/profile/${user.id}`} className="mobile-nav-link">
                          My Profile
                        </Link>
                        <Link href="/profile/edit" className="mobile-nav-link">
                          Edit Profile
                        </Link>
                        <button className="mobile-logout-btn" onClick={handleLogout}>
                          Log Out
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </nav>

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
    ...(isVerified
      ? [
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
        ]
      : [
          {
            href: '/verify',
            label: 'Verify',
            active: pathname === '/verify',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ),
          },
        ]),
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
        <Link key={tab.href} href={tab.href} className={`bottom-tab${tab.active ? ' active' : ''}`} aria-current={tab.active ? 'page' : undefined}>
          {tab.icon}
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  )
}
