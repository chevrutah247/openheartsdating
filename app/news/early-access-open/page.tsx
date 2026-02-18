import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Early Access Is Open — Join Open Hearts Dating',
  description: 'Join our Early Access program today and be among the first to experience Open Hearts Dating, an accessible dating platform for people with disabilities.',
  openGraph: {
    title: 'Early Access Is Open!',
    description: 'Be among the first to experience Open Hearts Dating.',
    type: 'article',
    publishedTime: '2026-01-12T00:00:00Z',
  },
}

export default function EarlyAccessNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <Link href="/news" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>← Back to News</Link>
      <header style={{ marginBottom: '3rem' }}>
        <time style={{ color: '#666', fontSize: '0.9rem' }}>January 12, 2026</time>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1rem' }}>Early Access Is Open! 🎉</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>Join our Early Access program today and be among the first to experience Open Hearts Dating.</p>
      </header>
      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden' }}>
        <Image src="/images/mission-community.jpg" alt="Community gathering" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <div style={{ lineHeight: '1.8', color: '#333' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Be part of building something special. Early Access members get exclusive benefits and help shape the future of Open Hearts Dating.</p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/join" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Join Early Access →</a>
        </div>
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/news" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#f3f4f6', color: '#667eea', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>← Back to All News</Link>
      </div>
    </article>
  )
}
