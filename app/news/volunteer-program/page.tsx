'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function VolunteerProgramNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <Link href="/news" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
        ← Back to News
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <time style={{ color: '#666', fontSize: '0.9rem' }}>January 13, 2026</time>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          Volunteer Program Launched! Join Our Team 🤝
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>
          Want to make a real impact? Our volunteer program is now open.
        </p>
      </header>

      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden' }}>
        <Image src="/images/early-access-celebration.jpg" alt="Team celebrating together" fill style={{ objectFit: 'cover' }} priority />
      </div>

      <div style={{ lineHeight: '1.8', color: '#333' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Open Hearts Dating is built by volunteers who believe in our mission. Join us in creating an accessible dating platform for everyone.
        </p>

        <h3 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>How You Can Help:</h3>
        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li>💻 Developers — Build features and fix bugs</li>
          <li>🎨 Designers — Create accessible, beautiful interfaces</li>
          <li>🛡️ Moderators — Keep our community safe</li>
          <li>🌍 Translators — Help us reach more people</li>
          <li>📢 Advocates — Spread the word</li>
        </ul>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Every skill helps. Whether you have 2 hours a week or 20, there's a way for you to contribute to something meaningful.
        </p>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/volunteer" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Join as Volunteer →</a>
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
