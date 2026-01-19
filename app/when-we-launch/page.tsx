import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'When We Launch — Development Timeline',
  description: 'Follow our journey from development to launch. Beta testing Spring 2026, public launch Summer 2026.',
}

export default function DatingPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>When We Launch</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            We're building Open Hearts Dating step by step. Here's exactly where we are 
            and when you can expect to join us.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {/* Timeline Image */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            maxWidth: '800px',
            height: '400px',
            margin: '0 auto 3rem',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/couple-walking.jpg"
              alt="Couple walking together, one in wheelchair and one with white cane, holding hands"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Current Phase */}
            <div style={{ 
              padding: '2.5rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '12px',
              marginBottom: '2rem',
              border: '2px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem' }}>🔄</div>
                <h2 style={{ color: '#667eea', fontSize: '1.8rem', margin: 0 }}>
                  Right Now (Winter 2025/2026)
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Building the foundation. Testing accessibility with real users. Gathering feedback. Making sure 
                EVERYTHING works before we open the doors.
              </p>
              <div style={{ fontSize: '1rem', opacity: '0.9' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>What we're doing:</strong></p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Designing core features with accessibility first</li>
                  <li>Building matching algorithm</li>
                  <li>Testing with screen readers and assistive tech</li>
                  <li>Creating safety and moderation systems</li>
                  <li>Growing Early Access community</li>
                </ul>
              </div>
            </div>

            {/* Spring 2026 */}
            <div style={{ 
              padding: '2.5rem',
              background: 'white',
              borderRadius: '12px',
              marginBottom: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem' }}>🔧</div>
                <h2 style={{ color: '#667eea', fontSize: '1.8rem', margin: 0 }}>
                  Spring 2026
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Beta testing with a small group. Fixing bugs. Improving accessibility based on real feedback. Ensuring 
                safety systems work. Want to be a beta tester? <a href="/join" style={{ color: '#667eea', fontWeight: '600' }}>Let us know</a>.
              </p>
              <div style={{ fontSize: '1rem', opacity: '0.9' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>What happens:</strong></p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Invite beta testers from Early Access community</li>
                  <li>Real-world testing of all features</li>
                  <li>Gather feedback and iterate quickly</li>
                  <li>Test safety features with real scenarios</li>
                  <li>Ensure accessibility works for everyone</li>
                </ul>
              </div>
            </div>

            {/* Summer 2026 */}
            <div style={{ 
              padding: '2.5rem',
              background: 'white',
              borderRadius: '12px',
              marginBottom: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem' }}>🎉</div>
                <h2 style={{ color: '#667eea', fontSize: '1.8rem', margin: 0 }}>
                  Summer 2026
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Public launch! Opening registration to everyone. Your chance to finally have a dating platform that 
                actually works for you.
              </p>
              <div style={{ fontSize: '1rem', opacity: '0.9' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>What you'll get:</strong></p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Fully accessible platform tested by real users</li>
                  <li>Safe, moderated environment</li>
                  <li>Core features free forever</li>
                  <li>Community built WITH people with disabilities</li>
                  <li>Platform that actually works for everyone</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why This Timeline */}
      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why This Timeline?</h2>
            
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We know you're waiting. We know you want this NOW. Trust us—we do too.
            </p>

            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              But here's the thing: we'd rather take the time to build something that actually works than rush out 
              something broken. You've dealt with enough platforms that don't work for you.
            </p>

            <div style={{ 
              padding: '2rem',
              background: 'rgba(102, 126, 234, 0.1)',
              borderRadius: '12px',
              marginTop: '2rem',
              borderLeft: '4px solid #667eea'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                <strong>Our promise:</strong> We'll be honest about our progress. We'll tell you when things take longer than expected. 
                We'll share both victories and challenges. And we'll build this RIGHT, even if it takes time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="content-section">
        <div className="container">
          <div style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Want to Be First to Know?</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem', opacity: '0.9' }}>
              Join our Early Access program. We'll keep you updated on our progress and give you 
              first access when we launch.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/join" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Join Early Access 💙
              </a>
              <a href="/news" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Read Our Progress
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
