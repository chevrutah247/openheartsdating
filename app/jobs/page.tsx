import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessible Job Board',
  description: 'Connecting people with disabilities to accessible employment opportunities. Find inclusive employers who value your skills and abilities.',
  alternates: {
    canonical: '/jobs',
  },
  openGraph: {
    title: 'Accessible Job Board — Open Hearts Dating',
    description: 'Find inclusive employers who value your skills.',
    url: 'https://openheartsdating.com/jobs',
  },
}

export default function JobsPage() {
  return (
    <>
      <section className="hero" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Job Board</h1>
          <p style={{ fontSize: '1.25rem', color: 'white', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
            Connecting people with disabilities to accessible employment opportunities
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
            <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>💼</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Coming Soon</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              We're building an inclusive job board connecting talented individuals
              with disability-friendly employers. Post jobs, find remote work,
              and discover companies that truly value accessibility.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#667eea', fontWeight: '600', marginBottom: '3rem' }}>
              Sign up to be notified when the job board goes live!
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
