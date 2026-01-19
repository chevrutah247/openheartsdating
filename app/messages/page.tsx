'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function MessagesPage() {
  const router = useRouter()

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9fafb',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        background: 'white',
        padding: '3rem 2rem',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>💬</div>
        <h1 style={{ marginBottom: '1rem', color: '#667eea' }}>Messages Coming Soon!</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
          Real-time messaging with your matches will be available in our Spring 2026 launch.
        </p>
        
        <div style={{
          padding: '1.5rem',
          background: '#f0f4ff',
          borderRadius: '12px',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>What's Coming:</h4>
          <ul style={{ lineHeight: '2', color: '#666' }}>
            <li>✅ Real-time chat with matches</li>
            <li>✅ Read receipts and typing indicators</li>
            <li>✅ Photo and file sharing</li>
            <li>✅ Accessibility-optimized messaging</li>
            <li>✅ Report and block features</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="/dating"
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
            Find Matches
          </a>
          <a 
            href="/dashboard"
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
            Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
