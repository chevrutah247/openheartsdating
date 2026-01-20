import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help Us Build Love Without Barriers — Open Hearts Dating',
  description: 'Support our GoFundMe campaign to build an accessible dating platform for 1.3 billion people with disabilities. Every donation brings us closer to launch.',
  openGraph: {
    title: 'Help Us Build Love Without Barriers',
    description: 'Support our mission to create an accessible dating platform for everyone',
    type: 'article',
    publishedTime: '2026-01-19T00:00:00Z',
  }
}

export default function GoFundMeCampaignPage() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Header */}
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ 
          display: 'inline-block',
          background: 'rgba(102, 126, 234, 0.1)',
          color: '#667eea',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>
          💙 Fundraising Campaign
        </div>
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          lineHeight: '1.2',
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          Help Us Build Love Without Barriers
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '1.5rem'
        }}>
          Support our GoFundMe campaign to create the first truly accessible dating platform for people with disabilities
        </p>

        <div style={{ 
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid #e5e7eb',
          flexWrap: 'wrap'
        }}>
          <time style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
            January 19, 2026
          </time>
          <span style={{ color: '#e5e7eb' }}>•</span>
          <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
            5 min read
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ 
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#374151'
      }}>
        {/* Opening */}
        <p style={{ fontSize: '1.3rem', fontWeight: '500', color: '#1f2937', marginBottom: '2rem' }}>
          Today, we're launching our GoFundMe campaign to build something that should have existed years ago: 
          a dating platform that actually works for people with disabilities.
        </p>

        {/* The Problem */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          The Problem We're Solving
        </h2>

        <p>
          1.3 billion people worldwide live with disabilities. Yet when it comes to dating apps, they face 
          a simple but painful reality: these platforms weren't built for them.
        </p>

        <p>
          Screen readers fail to read buttons. Keyboard navigation doesn't work. Images lack descriptions. 
          And even when someone manages to match with someone, they're often ghosted after disclosing 
          their disability.
        </p>

        <p style={{ 
          padding: '1.5rem',
          background: '#fef3c7',
          borderLeft: '4px solid #f59e0b',
          borderRadius: '4px',
          margin: '2rem 0'
        }}>
          <strong>The statistics are stark:</strong> People with disabilities are significantly less likely 
          to be in relationships, not because they don't want love, but because the tools available to find 
          it simply don't work for them.
        </p>

        {/* Our Solution */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          What We're Building
        </h2>

        <p>
          Open Hearts Dating is different from the start. We're building a platform that's:
        </p>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Actually accessible:</strong> Every feature tested with real assistive technology by real users
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Community-driven:</strong> Built with input from people with disabilities, not just for them
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Nonprofit:</strong> We succeed when you find love, not when you keep swiping
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>More than dating:</strong> Community forum, job board, and resources
          </li>
        </ul>

        {/* Campaign Details */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Our Fundraising Goals
        </h2>

        <div style={{ 
          background: '#f9fafb',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
            🎯 Goal 1: $15,000 — Beta Launch
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: '#666' }}>
            <li>Complete core dating features</li>
            <li>Launch beta testing program with real users</li>
            <li>6 months of hosting and infrastructure</li>
            <li>Basic moderation and safety systems</li>
          </ul>
        </div>

        <div style={{ 
          background: '#f9fafb',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
            🚀 Goal 2: $35,000 — Public Launch
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: '#666' }}>
            <li>Full public launch to everyone</li>
            <li>iOS and Android mobile apps</li>
            <li>Advanced matching algorithm</li>
            <li>12 months operating costs</li>
            <li>Professional accessibility audit</li>
          </ul>
        </div>

        <div style={{ 
          background: '#f9fafb',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>
            🌟 Goal 3: $75,000 — Scale & Grow
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: '#666' }}>
            <li>Multilingual support (10+ languages)</li>
            <li>Video chat features with accessibility controls</li>
            <li>Advanced safety and verification features</li>
            <li>Community events and in-person meetups</li>
            <li>Scholarship program for premium features</li>
          </ul>
        </div>

        {/* Where Money Goes */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Where Your Money Goes
        </h2>

        <p>
          100% of donations go directly to building and running the platform:
        </p>

        <div style={{ 
          display: 'grid',
          gap: '1rem',
          margin: '1.5rem 0'
        }}>
          <div style={{ 
            padding: '1.25rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}>
            <strong style={{ color: '#667eea' }}>💻 40% Development & Hosting</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1rem', color: '#666' }}>
              Servers, databases, CDN, security, and infrastructure
            </p>
          </div>

          <div style={{ 
            padding: '1.25rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}>
            <strong style={{ color: '#667eea' }}>♿ 25% Accessibility Testing</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1rem', color: '#666' }}>
              Paying real users to test with screen readers, keyboards, and assistive tech
            </p>
          </div>

          <div style={{ 
            padding: '1.25rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}>
            <strong style={{ color: '#667eea' }}>🛡️ 20% Safety & Moderation</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1rem', color: '#666' }}>
              Verification systems, moderation tools, and community safety
            </p>
          </div>

          <div style={{ 
            padding: '1.25rem',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}>
            <strong style={{ color: '#667eea' }}>📱 15% Mobile Apps</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1rem', color: '#666' }}>
              iOS and Android development with full accessibility
            </p>
          </div>
        </div>

        {/* Why Nonprofit */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Why We're Nonprofit
        </h2>

        <p>
          Most dating apps are owned by two giant corporations (Match Group and Bumble) that prioritize 
          profit over people. Their business model requires keeping you single and swiping — the longer 
          you use the app, the more money they make.
        </p>

        <p style={{ 
          fontSize: '1.2rem',
          fontWeight: '500',
          color: '#667eea',
          padding: '1.5rem',
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '8px',
          margin: '2rem 0'
        }}>
          We're different. We succeed when you find love. That's why we're building this as a nonprofit — 
          mission first, money second.
        </p>

        {/* Call to Action */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          How You Can Help
        </h2>

        <p>
          Every donation, no matter the size, brings us closer to launch. Whether you give $5 or $500, 
          you're helping create a platform where 1.3 billion people can find love without barriers.
        </p>

        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '2.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '2rem 0',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>
            Support Our Campaign
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.95 }}>
            Help us build something that changes lives
          </p>
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://gofund.me/11dc5cf78"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#667eea',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem'
              }}
            >
              Donate on GoFundMe 💙
            </a>
            <Link 
              href="/donate"
              className="button"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem'
              }}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Alternative Ways to Help */}
        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Can't Donate? You Can Still Help
        </h3>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Share our campaign</strong> on social media with friends and family
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Join our <Link href="/volunteer" style={{ color: '#667eea' }}>volunteer program</Link></strong> and 
            help us build features
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Sign up for <Link href="/join" style={{ color: '#667eea' }}>early access</Link></strong> and 
            be among the first to try the platform
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Spread the word</strong> — tell someone who might benefit from this platform
          </li>
        </ul>

        {/* Transparency */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Our Commitment to Transparency
        </h2>

        <p>
          As a nonprofit, we're committed to being completely transparent about how we use donations:
        </p>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            Monthly financial reports shared with our community
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            Public development roadmap showing what we're building
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            Regular updates on campaign progress and milestones
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            Open communication with donors about challenges and successes
          </li>
        </ul>

        {/* Closing */}
        <div style={{ 
          padding: '2rem',
          background: '#f9fafb',
          borderRadius: '12px',
          margin: '2rem 0'
        }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: 0 }}>
            <strong>Everyone deserves love.</strong> Everyone deserves a platform that works for them. 
            Everyone deserves to feel seen, valued, and connected.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '1rem', marginBottom: 0 }}>
            Help us make this a reality. <a href="https://gofund.me/11dc5cf78" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', fontWeight: '600' }}>Support our campaign today.</a>
          </p>
        </div>

        {/* Footer CTA */}
        <div style={{ 
          textAlign: 'center',
          padding: '2rem 0',
          borderTop: '1px solid #e5e7eb',
          marginTop: '3rem'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666' }}>
            Ready to support our mission?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://gofund.me/11dc5cf78"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
            >
              Donate Now 💙
            </a>
            <Link 
              href="/news"
              className="button button-secondary"
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
            >
              ← Back to News
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
