import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Identity Verification System Launched — Safe Dating',
  description: 'Your safety is our priority. We launched a comprehensive identity verification system to ensure every connection on Open Hearts Dating is genuine.',
  openGraph: {
    title: 'Identity Verification System Launched',
    description: 'Comprehensive identity verification to ensure every connection is genuine.',
    type: 'article',
    publishedTime: '2026-01-17T00:00:00Z',
  },
}

export default function VerificationLaunchNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <Link 
        href="/news" 
        style={{ 
          color: 'var(--primary)', 
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '2rem'
        }}
      >
        ← Back to News
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '1rem',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <time dateTime="2026-01-17">January 17, 2026</time>
          <span>•</span>
          <span>6 min read</span>
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Identity Verification System Launched 🔐
        </h1>

        <p style={{ 
          fontSize: '1.25rem', 
          color: '#666',
          lineHeight: '1.6'
        }}>
          Your safety is our priority. We've launched a comprehensive identity verification system to ensure every connection is genuine.
        </p>
      </header>

      <div style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        marginBottom: '3rem',
        borderRadius: '16px',
        overflow: 'hidden'
      }}>
        <Image
          src="/images/verification-launch.jpg"
          alt="Shield icon representing security and trust in online dating"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div style={{ lineHeight: '1.8', color: '#333' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          Today marks a major milestone for Open Hearts Dating: we are launching our identity verification system to make our platform safer for everyone.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          Why Verification Matters:
        </h3>

        <p style={{ marginBottom: '1.5rem' }}>
          Open Hearts Dating connects individuals who may be emotionally, socially, or physically vulnerable. Unlike other dating platforms that treat safety as an afterthought, we believe verification is essential—not optional.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🛡️ Protection From Fake Profiles</h4>
          <p>Every verified user has submitted a government-issued ID. This dramatically reduces catfishing, scams, and fake accounts that plague other platforms.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Trust At First Sight</h4>
          <p>Verified profiles display a badge so you know immediately that the person you are talking to is real. No more wondering if someone is who they claim to be.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🔒 Your Privacy Protected</h4>
          <p>Your documents are encrypted, reviewed only by trained staff, and never shared. You can request deletion at any time.</p>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          How It Works:
        </h3>

        <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>Upload your ID</strong> — Passport, driver license, or national ID card</li>
          <li><strong>Quick review</strong> — Our team verifies within 24-72 hours</li>
          <li><strong>Get verified</strong> — Receive your verification badge</li>
          <li><strong>Connect safely</strong> — Start meeting real, verified people</li>
        </ol>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          Accepted Documents:
        </h3>

        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>🪪 National ID Card</li>
          <li>🛂 Passport</li>
          <li>🚗 Driver License</li>
          <li>📄 Other Government-Issued ID</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          Our Commitment:
        </h3>

        <p style={{ marginBottom: '1.5rem' }}>
          We understand that sharing personal documents requires trust. Here is our promise to you:
        </p>

        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>Encryption</strong> — All documents are encrypted at rest and in transit</li>
          <li><strong>Limited access</strong> — Only trained verification staff can view documents</li>
          <li><strong>No sharing</strong> — We never sell or share your information</li>
          <li><strong>Right to delete</strong> — Request deletion of your documents anytime</li>
        </ul>

        <p style={{ fontSize: '1.15rem', fontStyle: 'italic', padding: '1.5rem', background: '#f0f4ff', borderRadius: '8px', marginTop: '2rem' }}>
          Verification is not about restriction. It is about protecting real people who deserve real connections.
        </p>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/platform-preview/verify" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Get Verified Now →
          </a>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link 
          href="/news"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#f3f4f6',
            color: 'var(--primary)',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          ← Back to All News
        </Link>
      </div>
    </article>
  )
}
