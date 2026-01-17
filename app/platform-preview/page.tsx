import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Platform Preview',
  description: 'A secure, verified dating platform built for real people.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PlatformPreviewHome() {
  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
        Platform Preview
      </h1>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
        This is a private preview of the next-generation Open Hearts Dating platform.
        It is not indexed by search engines and not linked from public navigation.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
        <strong>All interactions will require identity verification.</strong>
        This preview exists to safely build and test the platform before public launch.
      </p>

      <a
        href="/platform-preview/dating"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: '#667eea',
          color: 'white',
          borderRadius: '8px',
          fontSize: '1.1rem',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Go to Dating Preview →
      </a>
    </section>
  )
}
