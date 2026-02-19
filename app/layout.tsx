import './globals.css'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import Navigation from './components/Navigation'
import StructuredData from './components/StructuredData'
import AccessibilityWidget from './components/AccessibilityWidget'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E8607C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://openheartsdating.com'),
  title: {
    default: 'Open Hearts Dating — Inclusive Dating for People with Disabilities',
    template: '%s | Open Hearts Dating',
  },
  description: 'The first accessible dating platform built for people with disabilities. Find love without barriers. Verified, safe, and 100% accessible. Join our nonprofit community today.',
  keywords: [
    'accessible dating',
    'disability dating',
    'inclusive dating app',
    'dating for people with disabilities',
    'accessible dating platform',
    'disability friendly dating',
    'nonprofit dating app',
    'safe dating platform',
    'screen reader dating app',
    'WCAG dating',
    'wheelchair dating',
    'blind dating app accessible',
    'deaf dating app',
    'chronic illness dating',
  ],
  authors: [{ name: 'Open Hearts Dating', url: 'https://openheartsdating.com' }],
  creator: 'Open Hearts Dating',
  publisher: 'Open Hearts Dating',
  alternates: {
    canonical: 'https://openheartsdating.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://openheartsdating.com',
    siteName: 'Open Hearts Dating',
    title: 'Open Hearts Dating — Inclusive Dating for People with Disabilities',
    description: 'The first accessible dating platform built for people with disabilities. Find love without barriers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Hearts Dating — Building Love Without Barriers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Hearts Dating — Inclusive Dating for People with Disabilities',
    description: 'The first accessible dating platform built for people with disabilities. Find love without barriers.',
    images: ['/og-image.jpg'],
    creator: '@openheartsdating',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
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
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <AccessibilityWidget />

        <footer role="contentinfo" style={{
          background: '#1f2937',
          color: 'white',
          padding: '2.5rem 0 1.5rem',
          marginTop: '3rem'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h4 style={{ marginBottom: '0.75rem', fontSize: '1rem', color: 'white' }}>Open Hearts Dating</h4>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                  Accessible dating for everyone.
                </p>
              </div>

              <nav aria-label="Platform links">
                <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: '#d1d5db' }}>Platform</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <Link href="/browse" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Browse</Link>
                  <Link href="/matches" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Matches</Link>
                  <Link href="/messages" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Messages</Link>
                </div>
              </nav>

              <nav aria-label="Info links">
                <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: '#d1d5db' }}>About</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <Link href="/mission" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Mission</Link>
                  <Link href="/news" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>News</Link>
                  <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
                  <Link href="/trust" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Safety</Link>
                </div>
              </nav>

              <nav aria-label="Support links">
                <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: '#d1d5db' }}>Support</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <Link href="/donate" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Donate</Link>
                  <Link href="/volunteer" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Volunteer</Link>
                  <Link href="/support" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Help</Link>
                </div>
              </nav>
            </div>

            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid #374151',
              textAlign: 'center',
              color: '#6b7280',
              fontSize: '0.85rem'
            }}>
              <p style={{ margin: 0 }}>&copy; 2026 Open Hearts Dating. Free, safe, accessible.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
