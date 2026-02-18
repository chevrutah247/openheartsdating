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
          color: 'var(--primary)',
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
        {/* Opening Scenario */}
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--primary)', marginBottom: '2rem' }}>
          Imagine this:
        </p>

        <p>
          You download a dating app. You're excited, hopeful. But your screen reader doesn't work. 
          Buttons aren't labeled. Navigation is impossible. You give up.
        </p>

        <p>
          Or worse — you actually match with someone. Things are going great. Then you mention your 
          disability. They ghost you. Again.
        </p>

        <p style={{ 
          fontSize: '1.3rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '2rem'
        }}>
          This happens every single day to 1.3 billion people with disabilities worldwide.
        </p>

        {/* Why We're Building */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Why We're Building Open Hearts Dating
        </h2>

        <p>
          We're not building another dating app. We're creating the first truly accessible dating platform where:
        </p>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            ✅ <strong>Every feature is tested by real users with disabilities</strong>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            ✅ <strong>Screen readers actually work</strong> — because we build WITH people, not just FOR them
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            ✅ <strong>Safety comes first</strong> — verification, moderation, protection
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            ✅ <strong>It's nonprofit</strong> — we don't profit from loneliness
          </li>
        </ul>

        {/* More Than Dating */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          More Than Dating
        </h2>

        <p>
          Open Hearts isn't just a dating app. It's a complete support ecosystem:
        </p>

        <div style={{ 
          display: 'grid',
          gap: '1rem',
          margin: '1.5rem 0 2rem'
        }}>
          <div style={{ 
            padding: '1.25rem',
            background: '#f9fafb',
            borderRadius: '8px',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>💬 Community Forum</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
              Where people share experiences and support each other
            </p>
          </div>

          <div style={{ 
            padding: '1.25rem',
            background: '#f9fafb',
            borderRadius: '8px',
            borderLeft: '4px solid #10b981'
          }}>
            <strong style={{ color: '#10b981', fontSize: '1.1rem' }}>💼 Job Board</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
              Accessible employment for people with disabilities
            </p>
          </div>

          <div style={{ 
            padding: '1.25rem',
            background: '#f9fafb',
            borderRadius: '8px',
            borderLeft: '4px solid #ec4899'
          }}>
            <strong style={{ color: '#ec4899', fontSize: '1.1rem' }}>💙 Dating</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
              Where everyone can find love without barriers
            </p>
          </div>
        </div>

        {/* Where Your Money Goes */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Where Your Money Goes
        </h2>

        <div style={{ 
          overflowX: 'auto',
          marginBottom: '2rem'
        }}>
          <table style={{ 
            width: '100%',
            borderCollapse: 'collapse',
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb', color: 'var(--primary)', fontWeight: '600' }}>Category</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb', color: 'var(--primary)', fontWeight: '600' }}>%</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb', color: 'var(--primary)', fontWeight: '600' }}>What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Development</strong></td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', color: 'var(--primary)', fontWeight: '600' }}>40%</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', color: '#666' }}>Building accessible features</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Testing</strong></td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', color: 'var(--primary)', fontWeight: '600' }}>25%</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', color: '#666' }}>Paying testers with disabilities</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}><strong>Safety</strong></td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', color: 'var(--primary)', fontWeight: '600' }}>20%</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', color: '#666' }}>Moderation and user protection</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}><strong>Mobile Apps</strong></td>
                <td style={{ padding: '1rem', color: 'var(--primary)', fontWeight: '600' }}>15%</td>
                <td style={{ padding: '1rem', color: '#666' }}>iOS and Android versions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ 
          fontSize: '1.1rem',
          fontWeight: '500',
          padding: '1.5rem',
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '8px',
          margin: '2rem 0'
        }}>
          Every dollar goes to the platform. We don't pay ourselves salaries. This is a project by the community, 
          for the community.
        </p>

        {/* Funding Goals */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          We need $27,400 to launch Phase 1:
        </h2>

        <div style={{ 
          background: '#f9fafb',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          border: '2px solid var(--primary)'
        }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
            💻 $18,000 — MVP Development + AI + Accessible UX/UI
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: '#666', lineHeight: '1.8' }}>
            <li>Voice navigation</li>
            <li>High-contrast mode</li>
            <li>Large-text interface</li>
            <li>Secure chat</li>
            <li>AI-based psychological matching</li>
            <li>Development by an experienced Ukrainian team offering a discounted nonprofit rate</li>
          </ul>
        </div>

        <div style={{ 
          background: '#f9fafb',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          border: '2px solid #10b981'
        }}>
          <h3 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.3rem' }}>
            ⚖️ $7,000 — Legal Protection
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: '#666', lineHeight: '1.8' }}>
            <li>Accessibility compliance</li>
            <li>Legal standards and policies</li>
            <li>Liability protections</li>
            <li>Safety and verification procedures</li>
          </ul>
        </div>

        <div style={{ 
          background: '#f9fafb',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          border: '2px solid #f59e0b'
        }}>
          <h3 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.3rem' }}>
            📋 $2,400 — Nonprofit Setup
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: '#666', lineHeight: '1.8' }}>
            <li>501(c)(3) registration</li>
            <li>Accounting</li>
            <li>Compliance</li>
            <li>Transparent reporting structure</li>
          </ul>
        </div>

        {/* Why This Matters */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
          Why This Matters to Me
        </h2>

        <p style={{ 
          fontSize: '1.15rem',
          lineHeight: '1.8',
          padding: '2rem',
          background: '#f9fafb',
          borderRadius: '12px',
          borderLeft: '4px solid var(--primary)',
          fontStyle: 'italic'
        }}>
          For over 25 years, I've led charitable projects and worked alongside people who face barriers 
          every day. I've seen firsthand how isolation affects people with disabilities — not just physically, 
          but emotionally. They don't just need ramps and screen readers. They need connection. They need love. 
          That's why I'm building this.
        </p>

        {/* Call to Action */}
        <h2 style={{ fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1rem', color: '#1f2937' }}>
          How You Can Help
        </h2>

        <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem', fontSize: '1.1rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>💙 Donate</strong> — every amount matters
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>📢 Share</strong> — tell your friends and family
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>🧪 Become a tester</strong> — help us make the platform better
          </li>
        </ul>

        <div style={{ 
          background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
          padding: '2.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '2rem 0',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
            Everyone deserves love without barriers.
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.95 }}>
            Join us in building something that changes lives
          </p>
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://gofund.me/03630f97"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{
                display: 'inline-block',
                background: 'white',
                color: 'var(--primary)',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem'
              }}
            >
              Donate on GoFundMe 💙
            </a>
            <a 
              href="https://openheartsdating.com"
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
              Visit OpenHeartsDating.com
            </a>
          </div>
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
              href="https://gofund.me/03630f97"
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
