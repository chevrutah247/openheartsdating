import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Forum',
  description: 'Connect, share, and support each other. A safe space for people with disabilities to discuss everything from dating to daily life.',
  alternates: {
    canonical: '/forum',
  },
  openGraph: {
    title: 'Community Forum — Open Hearts Dating',
    description: 'A safe space for people with disabilities to connect and support each other.',
    url: 'https://openheartsdating.com/forum',
  },
}

export default function ForumPage() {
  return (
    <>
      <section className="hero" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Community Forum</h1>
          <p style={{ fontSize: '1.25rem', color: 'white', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
            Connect, share, and support each other. A safe space for people with disabilities to discuss
            everything from dating to daily life.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '4rem 2rem'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>💬</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Coming Soon</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              We're building a vibrant community forum where you can share experiences,
              ask for advice, and connect with others. Topics will include relationships,
              health, accessibility, careers, travel, and more.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '3rem' }}>
              Join our newsletter to be notified when the forum launches!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/join" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Join Early Access
              </Link>
              <Link href="/news" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Read Updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
