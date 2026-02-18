import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Verification? — Open Hearts Dating',
  description: 'Learn why identity verification is essential for a safe dating environment.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function WhyVerificationPage() {
  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
        Why Verification?
      </h1>

      {/* Core Message - LOCKED TEXT from TZ */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white',
        marginBottom: '3rem'
      }}>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', margin: 0 }}>
          <strong>Verification is not about restriction.</strong>
          <br /><br />
          It is about protecting real people.
        </p>
      </div>

      <div style={{ lineHeight: '1.9', fontSize: '1.1rem' }}>
        <p>
          OpenHeartsDating connects individuals who may be emotionally, socially, 
          or physically vulnerable. To maintain a safe and respectful environment, 
          <strong> all interaction requires identity verification</strong>.
        </p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          What Does This Mean?
        </h2>

        <p>Without verification, you cannot:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <li>Send or receive messages</li>
          <li>View matches or be matched with others</li>
          <li>Participate in SOS & Mutual Aid</li>
          <li>Volunteer or offer help</li>
          <li>Publish content</li>
        </ul>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          How Verification Works
        </h2>

        <div style={{
          display: 'grid',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
            <strong>1. Register</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
              Create your account with basic information
            </p>
          </div>
          <div style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
            <strong>2. Upload ID</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
              Submit a government-issued ID document
            </p>
          </div>
          <div style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
            <strong>3. Manual Review</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
              Our trained staff reviews your submission (24-72 hours)
            </p>
          </div>
          <div style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
            <strong>4. Full Access</strong>
            <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
              Once approved, enjoy all platform features
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          Your Privacy Is Protected
        </h2>

        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <li>Documents are <strong>encrypted at rest</strong></li>
          <li>Access is <strong>logged and audited</strong></li>
          <li>Documents are <strong>never public</strong></li>
          <li>We are <strong>GDPR-compliant</strong></li>
          <li>You can request <strong>full data deletion</strong> at any time</li>
        </ul>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          Why Manual Review?
        </h2>

        <p>
          We intentionally do not use automated or AI-based verification.
          Human review ensures accuracy and allows us to handle edge cases 
          with care and empathy. This takes longer, but we believe it's worth it.
        </p>

        <div style={{
          padding: '1.5rem',
          background: '#e7f3ff',
          borderRadius: '8px',
          marginTop: '2.5rem',
          borderLeft: '4px solid var(--primary)'
        }}>
          <p style={{ margin: 0, fontWeight: 600 }}>
            Our Commitment
          </p>
          <p style={{ margin: '0.5rem 0 0' }}>
            We understand that verification can feel like a barrier. But every person 
            who passes verification makes the community safer for everyone. 
            Thank you for helping us build a space where real connections can flourish.
          </p>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a
            href="/platform-preview/verify"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            Start Verification →
          </a>
          <p style={{ marginTop: '1rem' }}>
            <a href="/platform-preview" style={{ color: 'var(--primary)' }}>← Back to Platform Preview</a>
          </p>
        </div>
      </div>
    </section>
  )
}
