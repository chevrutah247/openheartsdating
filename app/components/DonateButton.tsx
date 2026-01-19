'use client'

export default function DonateButton({ 
  size = 'medium',
  style = 'primary'
}: { 
  size?: 'small' | 'medium' | 'large'
  style?: 'primary' | 'secondary' | 'header'
}) {
  
  const sizeStyles = {
    small: { padding: '0.5rem 1rem', fontSize: '0.9rem' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    large: { padding: '1rem 2rem', fontSize: '1.1rem' }
  }

  const styleTypes = {
    primary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none'
    },
    secondary: {
      background: 'white',
      color: '#667eea',
      border: '2px solid #667eea'
    },
    header: {
      background: '#22c55e',
      color: 'white',
      border: 'none'
    }
  }

  return (
    <a
      href="https://gofund.me/03630f97"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...sizeStyles[size],
        ...styleTypes[style],
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      💙 Support Our Mission
    </a>
  )
}
