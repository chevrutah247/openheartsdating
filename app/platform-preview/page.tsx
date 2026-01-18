import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Platform Preview',
  description: 'A secure, verified dating platform built for real people.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PlatformPreviewHome() {
  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Platform Preview
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
          A private preview of the next-generation Open Hearts Dating platform.
          Not indexed by search engines. Link-access only.
        </p>
      </div>

      {/* Warning Banner */}
      <div style={{
        padding: '1.5rem',
        background: '#fff3cd',
        borderRadius: '8px',
        marginBottom: '3rem',
        border: '1px solid #ffc107',
        display: 'flex',
        alignItems: 'start',
        gap: '1rem'
      }}>
        <span style={{ fontSize: '1.5rem' }}>⚠️</span>
        <div>
          <strong style={{ color: '#856404' }}>Important:</strong>
          <p style={{ margin: '0.5rem 0 0', color: '#856404' }}>
            All interactions on this platform require identity verification.
            This is not a restriction — it's protection for real people.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 style={{ marginBottom: '1.5rem' }}>Get Started</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <a href="/platform-preview/verify" style={{
          padding: '2rem',
          background: '#d4edda',
          borderRadius: '12px',
          textDecoration: 'none',
          color: '#155724',
          border: '2px solid #28a745',
          transition: 'transform 0.2s'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
          <h3 style={{ marginBottom: '0.5rem' }}>Verify Your Identity</h3>
          <p style={{ margin: 0, opacity: 0.85 }}>
            Required for all platform features
          </p>
        </a>

        <a href="/platform-preview/dating" style={{
          padding: '2rem',
          background: '#f8f9fa',
          borderRadius: '12px',
          textDecoration: 'none',
          color: '#333',
          border: '2px solid #e9ecef',
          transition: 'transform 0.2s'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💕</div>
          <h3 style={{ marginBottom: '0.5rem' }}>Dating Preview</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Browse profiles (verification required)
          </p>
        </a>
      </div>

      {/* Learn More */}
      <h2 style={{ marginBottom: '1.5rem' }}>Learn More</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        <a href="/platform-preview/why-verification" style={{
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#333'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>❓</div>
          <h4 style={{ marginBottom: '0.25rem' }}>Why Verification?</h4>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            Understand our verification process
          </p>
        </a>

        <a href="/platform-preview/safety-architecture" style={{
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#333'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🛡️</div>
          <h4 style={{ marginBottom: '0.25rem' }}>Safety Architecture</h4>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            Trust-by-design principles
          </p>
        </a>

        <a href="/platform-preview/ethics" style={{
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '8px',
          textDecoration: 'none',
          color: '#333'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚖️</div>
          <h4 style={{ marginBottom: '0.25rem' }}>Our Ethics</h4>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            Ethical matching & nonprofit model
          </p>
        </a>
      </div>

      {/* Key Principles */}
      <h2 style={{ marginBottom: '1.5rem' }}>Core Principles</h2>
      
      <div style={{
        padding: '2rem',
        background: '#f9f9f9',
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            { icon: '🔐', text: 'All interactions require verification' },
            { icon: '🆓', text: 'All core features are free' },
            { icon: '🚫', text: 'No paid prioritization in matching' },
            { icon: '🔒', text: 'Documents encrypted and never public' },
            { icon: '📋', text: 'GDPR-compliant with full deletion rights' },
            { icon: '👤', text: 'Human (not AI) verification review' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              background: 'white',
              borderRadius: '6px'
            }}>
              <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        background: '#e7f3ff',
        borderRadius: '12px',
        borderLeft: '4px solid #667eea'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Ready to Join?</h3>
        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
          Start by verifying your identity. It only takes a few minutes.
        </p>
        <a
          href="/platform-preview/verify"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#667eea',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}
        >
          Start Verification →
        </a>
      </div>

      {/* Footer Note */}
      <p style={{
        marginTop: '3rem',
        textAlign: 'center',
        color: '#999',
        fontSize: '0.9rem'
      }}>
        This preview is not linked from the main website.
        Share this link only with people you trust.
      </p>
    </section>
  )
}
