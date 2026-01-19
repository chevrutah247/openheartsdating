'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function WelcomeNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <Link href="/news" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>← Back to News</Link>
      <header style={{ marginBottom: '3rem' }}>
        <time style={{ color: '#666', fontSize: '0.9rem' }}>November 15, 2025</time>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1rem' }}>Welcome to Open Hearts Dating</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>Building something different. Our mission to create an accessible dating platform for everyone.</p>
      </header>
      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden' }}>
        <Image src="/images/dating-app-phone.jpg" alt="Dating app on phone" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <div style={{ lineHeight: '1.8', color: '#333' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Welcome to Open Hearts Dating. We're building something different — a dating platform where accessibility isn't an afterthought, where safety is paramount, and where everyone belongs.</p>
        <p style={{ marginBottom: '2rem' }}>This is just the beginning of our journey. Join us in building a platform that changes lives.</p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/mission" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Read Our Mission →</a>
        </div>
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/news" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#f3f4f6', color: '#667eea', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>← Back to All News</Link>
      </div>
    </article>
  )
}
