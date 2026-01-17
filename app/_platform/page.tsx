import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Verified Dating Platform',
  description:
    'A secure, verified dating platform built for people with disabilities.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PlatformHomePage() {
  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>A Dating Platform Built on Trust</h1>
      <p>Hidden development version of the platform.</p>
      <a href="/_platform/dating">Continue to Dating →</a>
    </section>
  )
}
