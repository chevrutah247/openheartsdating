import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from './components/Navigation'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Inclusive Dating for People with Disabilities',
  description: 'The first accessible dating platform built for people with disabilities. Find love without barriers. Verified, safe, and 100% accessible. Join our nonprofit community today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <Navigation />

        {children}

        <footer style={{
          background: '#1f2937',
          color: 'white',
          padding: '3rem 0 2rem',
          marginTop: '4rem'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {/* Column 1 */}
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Open Hearts Dating</h3>
                <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                  Building an accessible dating platform for everyone.
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Platform</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/platform-preview/dating" style={{ color: '#9ca3af', textDecoration: 'none' }}>Browse Profiles</Link>
                  <Link href="/platform-preview/matches" style={{ color: '#9ca3af', textDecoration: 'none' }}>Matches</Link>
                  <Link href="/messages" style={{ color: '#9ca3af', textDecoration: 'none' }}>Messages</Link>
                  <Link href="/dashboard" style={{ color: '#9ca3af', textDecoration: 'none' }}>Dashboard</Link>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Community</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/news" style={{ color: '#9ca3af', textDecoration: 'none' }}>News</Link>
                  <Link href="/mission" style={{ color: '#9ca3af', textDecoration: 'none' }}>Mission</Link>
                  <Link href="/volunteer" style={{ color: '#9ca3af', textDecoration: 'none' }}>Volunteer</Link>
                  <Link href="/support" style={{ color: '#9ca3af', textDecoration: 'none' }}>Support</Link>
                </div>
              </div>

              {/* Column 4 */}
              <div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Connect</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</Link>
                  <a href="https://gofund.me/03630f97" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>Donate</a>
                  <Link href="/signup" style={{ color: '#9ca3af', textDecoration: 'none' }}>Sign Up</Link>
                  <Link href="/login" style={{ color: '#9ca3af', textDecoration: 'none' }}>Login</Link>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div style={{
              padding: '2rem',
              background: '#374151',
              borderRadius: '8px',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Stay Updated 💌</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
                Get the latest news and updates delivered to your inbox
              </p>
              <Link href="/newsletter" className="button" style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem'
              }}>
                Subscribe to Newsletter
              </Link>
            </div>

            <div style={{
              paddingTop: '2rem',
              borderTop: '1px solid #374151',
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: '0.9rem'
            }}>
              <p>© 2026 Open Hearts Dating. Built with 💙 for everyone.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
