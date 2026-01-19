import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none'
        }}>
          Open Hearts Dating
        </Link>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link href="/mission" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.2s'
          }} className="nav-link">
            Mission
          </Link>
          
          <Link href="/dating" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.2s'
          }} className="nav-link">
            💑 Dating
          </Link>

          <Link href="/forum" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.2s'
          }} className="nav-link">
            🗣️ Forum
          </Link>

          <Link href="/jobs" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.2s'
          }} className="nav-link">
            💼 Jobs
          </Link>

          <Link href="/messages" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.2s'
          }} className="nav-link">
            💬 Messages
          </Link>

          <Link href="/when-we-launch" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.2s'
          }} className="nav-link">
            Timeline
          </Link>

          <Link href="/join" style={{
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'transform 0.2s'
          }} className="button-join">
            Join Early Access
          </Link>
        </nav>

        {/* Mobile menu toggle - можно добавить позже */}
      </div>

      {/* Hover effects */}
      <style jsx>{`
        .nav-link:hover {
          color: #667eea;
        }
        .button-join:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </header>
  )
}
