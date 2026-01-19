'use client'

import { useRouter } from 'next/navigation'

export default function EditProfile() {
  const router = useRouter()

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem 1rem',
      background: '#f9fafb'
    }}>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto',
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>👤</div>
        <h1 style={{ marginBottom: '1rem', color: '#667eea' }}>Profile Editing Coming Soon!</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
          Complete profile customization will be available in our Spring 2026 launch.
        </p>
        
        <div style={{
          padding: '1.5rem',
          background: '#f0f4ff',
          borderRadius: '12px',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>What You'll Be Able to Edit:</h4>
          <ul style={{ lineHeight: '2', color: '#666' }}>
            <li>✅ Profile photo upload</li>
            <li>✅ Personal bio and description</li>
            <li>✅ Location and preferences</li>
            <li>✅ Accessibility information</li>
            <li>✅ Interests and hobbies</li>
            <li>✅ Privacy settings</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="/dashboard"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Back to Dashboard
          </a>
          <a 
            href="/join"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'white',
              color: '#667eea',
              border: '2px solid #667eea',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Join Early Access
          </a>
        </div>
      </div>
    </div>
  )
}
