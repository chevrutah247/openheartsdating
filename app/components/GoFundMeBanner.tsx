'use client'

import { useState } from 'react'

export default function GoFundMeBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.75rem 1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1
      }}>
        <span style={{ fontSize: '1.5rem' }}>💙</span>
        <p style={{ 
          margin: 0, 
          fontSize: '0.95rem',
          fontWeight: '500'
        }}>
          Help us build an accessible dating platform for everyone
        </p>
        <a 
          href="https://www.paypal.com/ncp/payment/LY67CR4F29BKN"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'white',
            color: '#667eea',
            padding: '0.5rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'transform 0.2s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Donate via PayPal 💙
        </a>
      </div>
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.25rem 0.5rem',
          lineHeight: 1,
          opacity: 0.8,
          transition: 'opacity 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
        aria-label="Close banner"
      >
        ×
      </button>
    </div>
  )
}
