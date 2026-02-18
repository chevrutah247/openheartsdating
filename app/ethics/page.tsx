import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Ethics — Open Hearts Dating',
  description: 'The ethical principles that guide Open Hearts Dating.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function EthicsPage() {
  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
        Our Ethics
      </h1>

      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        OpenHeartsDating is built on a foundation of ethical principles that guide 
        every decision we make.
      </p>

      {/* Core Values */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {[
          { icon: '🎯', title: 'Dignity', desc: 'Every person deserves respect and consideration' },
          { icon: '🛡️', title: 'Safety', desc: 'Protection from harm is non-negotiable' },
          { icon: '🔍', title: 'Transparency', desc: 'Honest about how we operate' },
          { icon: '💙', title: 'Long-term Intent', desc: 'Building for meaningful connections' },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
            borderRadius: '12px',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Ethical Matching */}
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Ethical Matching</h2>
      
      <div style={{
        padding: '2rem',
        background: '#f9f9f9',
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Our matching algorithm is designed with ethical safeguards:
        </p>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{
            padding: '1rem',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🚫</span>
            <div>
              <strong>No Isolation Bubbles</strong>
              <p style={{ margin: '0.25rem 0 0', color: '#666', fontSize: '0.95rem' }}>
                We don't trap you in echo chambers
              </p>
            </div>
          </div>

          <div style={{
            padding: '1rem',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🌈</span>
            <div>
              <strong>Periodic Diversity Exposure</strong>
              <p style={{ margin: '0.25rem 0 0', color: '#666', fontSize: '0.95rem' }}>
                You'll see a variety of people, not just the "obvious" matches
              </p>
            </div>
          </div>

          <div style={{
            padding: '1rem',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>💰</span>
            <div>
              <strong>No Paid Prioritization</strong>
              <p style={{ margin: '0.25rem 0 0', color: '#666', fontSize: '0.95rem' }}>
                Money cannot buy visibility or ranking
              </p>
            </div>
          </div>

          <div style={{
            padding: '1rem',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🏅</span>
            <div>
              <strong>No Badge-Based Ranking</strong>
              <p style={{ margin: '0.25rem 0 0', color: '#666', fontSize: '0.95rem' }}>
                Donor badges are symbolic only — no algorithmic advantages
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Model */}
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Financial Model</h2>
      
      <div style={{
        padding: '2rem',
        background: '#e7f3ff',
        borderRadius: '12px',
        marginBottom: '3rem',
        borderLeft: '4px solid var(--primary)'
      }}>
        <p style={{ fontSize: '1.15rem', marginBottom: '1rem', fontWeight: 600 }}>
          All core functionality is free.
        </p>
        <p style={{ margin: 0, lineHeight: '1.8' }}>
          Financial sustainability is achieved via voluntary community support, not paywalls.
          We will never lock essential dating features behind payment.
          Donations are appreciated but never required for full access.
        </p>
      </div>

      {/* Nonprofit Status */}
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Nonprofit Commitment</h2>
      
      <div style={{
        padding: '2rem',
        background: '#f9f9f9',
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          OpenHeartsDating is structured as a nonprofit organization. This means:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li>No investors demanding growth at any cost</li>
          <li>No pressure to maximize engagement through manipulation</li>
          <li>No selling user data to third parties</li>
          <li>All surplus goes back into improving the platform</li>
          <li>Community interests always come first</li>
        </ul>
      </div>

      {/* What We Don't Do */}
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>What We Will Never Do</h2>
      
      <div style={{
        display: 'grid',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        {[
          'Sell or share your data with advertisers',
          'Use dark patterns to manipulate behavior',
          'Create artificial scarcity ("only 3 likes left!")',
          'Punish users for not paying',
          'Hide matches to force upgrades',
          'Use psychological tricks to increase "engagement"',
        ].map((item, i) => (
          <div key={i} style={{
            padding: '1rem',
            background: '#f8d7da',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#721c24'
          }}>
            <span style={{ fontSize: '1.2rem' }}>❌</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
        borderRadius: '12px',
        textAlign: 'center',
        color: 'white',
        marginTop: '3rem'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Ready to Join an Ethical Platform?</h3>
        <p style={{ marginBottom: '1.5rem', opacity: 0.95 }}>
          We believe dating apps can be different. Better. More human.
        </p>
        <a
          href="/platform-preview/verify"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'white',
            color: 'var(--primary)',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Get Verified & Start →
        </a>
      </div>

      <p style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/platform-preview" style={{ color: 'var(--primary)' }}>← Back to Platform Preview</a>
      </p>
    </section>
  )
}
