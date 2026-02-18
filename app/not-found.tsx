import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Return to Open Hearts Dating homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <section style={{
      padding: '4rem 1.5rem',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#667eea' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.7' }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" className="button" style={{ padding: '1rem 2rem' }}>
          Go to Homepage
        </Link>
        <Link href="/news" className="button button-secondary" style={{ padding: '1rem 2rem' }}>
          Read News
        </Link>
      </div>
    </section>
  )
}
