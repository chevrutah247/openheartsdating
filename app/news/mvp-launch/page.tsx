'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function MVPLaunchNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Back Link */}
      <Link 
        href="/news" 
        style={{ 
          color: '#667eea', 
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '2rem'
        }}
      >
        ← Back to News
      </Link>

      {/* Header */}
      <header style={{ marginBottom: '3rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '1rem',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <time dateTime="2026-01-18">January 18, 2026</time>
          <span>•</span>
          <span>8 min read</span>
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Platform MVP Is Live! 🚀
        </h1>

        <p style={{ 
          fontSize: '1.25rem', 
          color: '#666',
          lineHeight: '1.6'
        }}>
          Our core dating features are now available. This is just the beginning — help us grow into something bigger.
        </p>
      </header>

      {/* Feature Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        marginBottom: '3rem',
        borderRadius: '16px',
        overflow: 'hidden'
      }}>
        <Image
          src="/images/mvp-launch.jpg"
          alt="Seedling growing, symbolizing new beginnings and growth potential"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Content */}
      <div style={{ lineHeight: '1.8', color: '#333' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          Today we are excited to announce that the Minimum Viable Product (MVP) of Open Hearts Dating is officially live! This is a major milestone — but it is just the beginning.
        </p>

        <div style={{ 
          padding: '1.5rem', 
          background: '#fff3cd', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          border: '1px solid #ffc107'
        }}>
          <h4 style={{ color: '#856404', marginBottom: '0.5rem', fontSize: '1.1rem' }}>⚠️ Important Note</h4>
          <p style={{ color: '#856404', margin: 0 }}>
            This is a <strong>Minimum Viable Product</strong> — a functional foundation with core features. 
            The full vision of Open Hearts Dating is much bigger, and we need your help to get there.
          </p>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
          What Is Available Now:
        </h3>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ User Registration & Login</h4>
          <p>Create your account securely and access the platform.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Identity Verification</h4>
          <p>Upload your ID to get verified and unlock all features. Only verified users can interact — this keeps everyone safe.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Profile Creation</h4>
          <p>Build your profile with your story, location, interests, and optional accessibility information.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Browse Profiles</h4>
          <p>Discover other verified members and find people who share your values and experiences.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Likes & Matching</h4>
          <p>Like profiles you are interested in. When someone likes you back — it is a match!</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Messaging</h4>
          <p>Chat with your matches in real-time. Only matched users can message each other — no unwanted contacts.</p>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
          What Is Coming Next:
        </h3>

        <p style={{ marginBottom: '1rem' }}>
          The full version of Open Hearts Dating will include:
        </p>

        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>📸 Photo uploads with AI-generated alt text for accessibility</li>
          <li>🆘 SOS & Mutual Aid module for community support</li>
          <li>🛡️ Admin panel for moderation and safety</li>
          <li>💳 PayPal donations integration</li>
          <li>🔍 Advanced search and filtering</li>
          <li>📱 Mobile apps (iOS & Android)</li>
          <li>🌍 Multi-language support</li>
          <li>♿ Enhanced accessibility features</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
          We Need Your Help:
        </h3>

        <p style={{ marginBottom: '1.5rem' }}>
          Open Hearts Dating is a <strong>nonprofit project</strong>. We do not have venture capital or big investors. 
          We are building this because we believe everyone deserves love and connection — regardless of ability.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          To build the full version, we need:
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>👥 Interested People</h4>
          <p>Sign up, create your profile, invite friends. The more people join, the more valuable the platform becomes for everyone.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🤝 Volunteers</h4>
          <p>Developers, designers, moderators, translators — every skill helps. Join our volunteer team!</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>💜 Supporters</h4>
          <p>Financial support helps us pay for servers, security, and development. Every donation makes a difference.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📢 Advocates</h4>
          <p>Share our mission with your network. Tell people about Open Hearts Dating. Help us reach those who need this platform.</p>
        </div>

        <p style={{ fontSize: '1.15rem', fontStyle: 'italic', padding: '1.5rem', background: '#f0f4ff', borderRadius: '8px', marginTop: '2rem' }}>
          This MVP is a seed. With your support, it can grow into something that changes lives. 
          Together, we can build a dating platform where everyone belongs.
        </p>

        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/signup" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Join Now →
          </a>
          <a href="/volunteer" className="button button-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Volunteer
          </a>
          <a href="/support" className="button button-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Support Us
          </a>
        </div>
      </div>

      {/* Back to News */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link 
          href="/news"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#f3f4f6',
            color: '#667eea',
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
