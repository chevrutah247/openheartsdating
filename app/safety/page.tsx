import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safety Architecture — Open Hearts Dating',
  description: 'Learn about our Trust-by-Design safety architecture.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SafetyArchitecturePage() {
  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
        Safety Architecture
      </h1>

      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        Our platform is built on a <strong>Trust-by-Design</strong> principle.
        Safety is not an add-on — it's the foundation.
      </p>

      {/* Core Rule */}
      <div style={{
        padding: '2rem',
        background: '#fff3cd',
        borderRadius: '12px',
        marginBottom: '3rem',
        border: '2px solid #ffc107'
      }}>
        <h2 style={{ color: '#856404', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          ❗ Core Rule
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#856404', margin: 0, fontWeight: 600 }}>
          No interaction between users is possible without verification.
        </p>
      </div>

      {/* What This Includes */}
      <h2 style={{ marginBottom: '1.5rem', color: '#667eea' }}>What This Includes</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        {[
          { icon: '💬', text: 'Messaging' },
          { icon: '💕', text: 'Matching' },
          { icon: '🆘', text: 'SOS Participation' },
          { icon: '🤝', text: 'Volunteering' },
          { icon: '📝', text: 'Content Publishing' },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '1.5rem',
            background: '#f9f9f9',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
            <p style={{ margin: 0, fontWeight: 600 }}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* User Roles */}
      <h2 style={{ marginBottom: '1.5rem', color: '#667eea' }}>User Roles & Permissions</h2>
      
      <div style={{ marginBottom: '3rem' }}>
        {/* Guest */}
        <div style={{
          padding: '1.5rem',
          background: '#f8f9fa',
          borderRadius: '8px',
          marginBottom: '1rem',
          borderLeft: '4px solid #6c757d'
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>👤 Guest (Unauthenticated)</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666' }}>
            <li>View public informational pages</li>
            <li>No interaction, no profiles, no data access</li>
          </ul>
        </div>

        {/* Registered */}
        <div style={{
          padding: '1.5rem',
          background: '#fff3cd',
          borderRadius: '8px',
          marginBottom: '1rem',
          borderLeft: '4px solid #ffc107'
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>📝 Registered (Unverified)</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#856404' }}>
            <li>Create profile</li>
            <li>View own dashboard</li>
            <li><strong>Blocked from all interactions</strong></li>
            <li>Prompted to verify</li>
          </ul>
        </div>

        {/* Verified */}
        <div style={{
          padding: '1.5rem',
          background: '#d4edda',
          borderRadius: '8px',
          marginBottom: '1rem',
          borderLeft: '4px solid #28a745'
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>✅ Verified User</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#155724' }}>
            <li>Dating & matching</li>
            <li>Messaging</li>
            <li>Create SOS requests</li>
            <li>Respond to SOS</li>
            <li>Donate</li>
          </ul>
        </div>

        {/* Volunteer */}
        <div style={{
          padding: '1.5rem',
          background: '#e7f3ff',
          borderRadius: '8px',
          marginBottom: '1rem',
          borderLeft: '4px solid #667eea'
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>🤝 Verified Volunteer</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#1a365d' }}>
            <li>All Verified User permissions</li>
            <li>Manual approval required</li>
            <li>Can offer help in SOS module</li>
          </ul>
        </div>

        {/* Trusted */}
        <div style={{
          padding: '1.5rem',
          background: '#f3e5f5',
          borderRadius: '8px',
          marginBottom: '1rem',
          borderLeft: '4px solid #9c27b0'
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>⭐ Trusted User</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#4a148c' }}>
            <li>Content publishing (news, stories)</li>
            <li>Granted manually</li>
            <li>Requires verification + admin approval</li>
          </ul>
        </div>
      </div>

      {/* Data Protection */}
      <h2 style={{ marginBottom: '1.5rem', color: '#667eea' }}>Data Protection</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        {[
          { icon: '🔐', title: 'Encrypted', desc: 'All sensitive data encrypted at rest' },
          { icon: '👥', title: 'Role-based', desc: 'Admin access is role-based' },
          { icon: '📋', title: 'Logged', desc: 'All access is logged and auditable' },
          { icon: '🗑️', title: 'Deletable', desc: 'Full data deletion on request' },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '1.5rem',
            background: '#f9f9f9',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
            <h4 style={{ margin: '0 0 0.25rem' }}>{item.title}</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Escalation Flow */}
      <h2 style={{ marginBottom: '1.5rem', color: '#667eea' }}>Abuse Escalation Flow</h2>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '3rem',
        padding: '2rem',
        background: '#f9f9f9',
        borderRadius: '12px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>⚠️</div>
          <p style={{ margin: '0.5rem 0 0', fontWeight: 600 }}>Warning</p>
        </div>
        <div style={{ fontSize: '1.5rem', color: '#999' }}>→</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>⏸️</div>
          <p style={{ margin: '0.5rem 0 0', fontWeight: 600 }}>Temp Block</p>
        </div>
        <div style={{ fontSize: '1.5rem', color: '#999' }}>→</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>🚫</div>
          <p style={{ margin: '0.5rem 0 0', fontWeight: 600 }}>Permanent Ban</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a
          href="/platform-preview/why-verification"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#667eea',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Why Verification? →
        </a>
        <p style={{ marginTop: '1rem' }}>
          <a href="/platform-preview" style={{ color: '#667eea' }}>← Back to Platform Preview</a>
        </p>
      </div>
    </section>
  )
}
