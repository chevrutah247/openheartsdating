import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Open Hearts Dating',
  description: 'Accessible dating platform for people with disabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">
              Open Hearts Dating
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/dating">Dating</Link>
              <Link href="/mission">Mission</Link>
              <Link href="/trust">Trust & Safety</Link>
              <Link href="/news">News</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href="/volunteer">Volunteer</Link>
              <Link href="/support">Support</Link>
              <Link href="/contact">Contact</Link>
              <Link href="https://gofund.me/77c6e9a3" className="button" target="_blank" rel="noopener noreferrer">
                💙 Donate
              </Link>
            </div>
          </div>
        </nav>

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
                  <Link href="/dating" style={{ color: '#9ca3af', textDecoration: 'none' }}>Dating</Link>
                  <Link href="/mission" style={{ color: '#9ca3af', textDecoration: 'none' }}>Mission</Link>
                  <Link href="/trust" style={{ color: '#9ca3af', textDecoration: 'none' }}>Trust & Safety</Link>
                  <Link href="/signup" style={{ color: '#9ca3af', textDecoration: 'none' }}>Sign Up</Link>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Community</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/news" style={{ color: '#9ca3af', textDecoration: 'none' }}>News</Link>
                  <Link href="/newsletter" style={{ color: '#9ca3af', textDecoration: 'none' }}>Newsletter</Link>
                  <Link href="/volunteer" style={{ color: '#9ca3af', textDecoration: 'none' }}>Volunteer</Link>
                  <Link href="/support" style={{ color: '#9ca3af', textDecoration: 'none' }}>Support</Link>
                </div>
              </div>

              {/* Column 4 */}
              <div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Connect</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</Link>
                  <a href="https://gofund.me/77c6e9a3" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>Donate</a>
                  <Link href="/join" style={{ color: '#9ca3af', textDecoration: 'none' }}>Join Waitlist</Link>
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
