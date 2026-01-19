'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ProfilesLaunchNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <Link href="/news" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
        ← Back to News
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <time style={{ color: '#666', fontSize: '0.9rem' }}>January 16, 2026</time>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          Profiles Are Live! Create Yours Today 🎉
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>
          Your journey to meaningful connection starts now. Create your profile and let others see the real you.
        </p>
      </header>

      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden' }}>
        <Image src="/images/profile-creation-live.jpg" alt="Person creating their dating profile" fill style={{ objectFit: 'cover' }} priority />
      </div>

      <div style={{ lineHeight: '1.8', color: '#333' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          After months of development, profile creation is now live! Build your complete dating profile and start connecting with others who understand your journey.
        </p>

        <h3 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>What You Can Do:</h3>
        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li>✨ Tell your story with a personalized bio</li>
          <li>📍 Share your location preferences</li>
          <li>♿ Optionally include disability information</li>
          <li>🎭 Be authentic and comfortable</li>
        </ul>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/signup" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Create Your Profile →</a>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/news" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#f3f4f6', color: '#667eea', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          ← Back to All News
        </Link>
      </div>
    </article>
  )
}
