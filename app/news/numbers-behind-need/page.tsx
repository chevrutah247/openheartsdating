'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NumbersBehindNeedNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <Link href="/news" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>← Back to News</Link>
      <header style={{ marginBottom: '3rem' }}>
        <time style={{ color: '#666', fontSize: '0.9rem' }}>December 1, 2025</time>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1rem' }}>The Numbers Behind the Need</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>1.3 billion people with disabilities deserve better. Here is why we are building this.</p>
      </header>
      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden' }}>
        <Image src="/images/couple-walking.jpg" alt="Couple walking together" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <div style={{ lineHeight: '1.8', color: '#333' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#667eea', marginBottom: '1rem' }}>1.3 Billion People</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>That's how many people around the world live with a disability. Each one deserves to find love, connection, and belonging.</p>
        <p style={{ marginBottom: '2rem' }}>Yet existing dating platforms fail them. Poor accessibility. No understanding. No accommodations. We're here to change that.</p>
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/news" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#f3f4f6', color: '#667eea', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>← Back to All News</Link>
      </div>
    </article>
  )
}
