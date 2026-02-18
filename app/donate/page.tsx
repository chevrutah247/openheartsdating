import type { Metadata } from 'next'
import GoFundMeWidget from '../components/GoFundMeWidget'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Donate — Support Our Mission',
  description: 'Help us build an accessible dating platform for 1.3 billion people with disabilities. Every donation makes a difference. 100% goes to development.',
  alternates: {
    canonical: '/donate',
  },
  openGraph: {
    title: 'Support Open Hearts Dating',
    description: 'Help us build an accessible dating platform for 1.3 billion people with disabilities.',
    url: 'https://openheartsdating.com/donate',
  },
}

export default function DonatePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Support Open Hearts Dating 💙</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Help us build an accessible dating platform for 1.3 billion people with disabilities.
            Every donation makes a real difference.
          </p>
        </div>
      </section>

      {/* GoFundMe Widget */}
      <section className="content-section">
        <div className="container">
          <GoFundMeWidget />
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Where Your Money Goes
            </h2>
            
            <p style={{ 
              fontSize: '1.1rem', 
              textAlign: 'center',
              marginBottom: '2rem',
              color: '#666'
            }}>
              100% of donations go directly to building and running the platform.
            </p>

            <div style={{ 
              display: 'grid', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                  💻 Development & Hosting (40%)
                </h3>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.7' }}>
                  Server costs, database hosting, CDN for fast loading, backup systems, 
                  security infrastructure, and developer tools.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                  ♿ Accessibility Testing (25%)
                </h3>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.7' }}>
                  Paying real users with disabilities to test every feature. Screen reader users, 
                  keyboard-only users, people with motor impairments — we test with everyone.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                  🛡️ Safety & Moderation (20%)
                </h3>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.7' }}>
                  Identity verification systems, content moderation tools, AI filtering, 
                  and training for human moderators to keep the community safe.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                  📱 Mobile Apps (15%)
                </h3>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.7' }}>
                  iOS and Android app development, app store fees, push notifications, 
                  and mobile-specific accessibility features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Can't Donate? Here's How Else You Can Help
            </h2>

            <div style={{ 
              display: 'grid', 
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '8px'
              }}>
                <strong style={{ fontSize: '1.1rem' }}>📢 Spread the word</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
                  Share our campaign on social media — every share helps us reach more people
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '8px'
              }}>
                <strong style={{ fontSize: '1.1rem' }}>🤝 Volunteer</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
                  Join our <Link href="/volunteer" style={{ color: 'var(--primary)' }}>volunteer program</Link> and 
                  help us build the platform
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '8px'
              }}>
                <strong style={{ fontSize: '1.1rem' }}>🧪 Beta test</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
                  Sign up for <Link href="/join" style={{ color: 'var(--primary)' }}>early access</Link> and 
                  help us improve with your feedback
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '8px'
              }}>
                <strong style={{ fontSize: '1.1rem' }}>💬 Give feedback</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
                  Tell us what you need from the platform — your input shapes what we build
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thank You */}
      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Thank You 💙</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
              Whether you donate $5 or $500, share our campaign, or just believe in what we're building — 
              <strong> thank you.</strong> You're helping create a world where everyone can find love, 
              regardless of their abilities.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
