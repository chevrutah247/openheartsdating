import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dating Preview — Open Hearts Dating',
  description: 'Preview of the dating experience. Verification is required before any interaction.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatingPreviewPage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
        Dating — Private Preview
      </h1>

      <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
        This is a secure preview of the Open Hearts Dating experience.
        <strong> All interactions require completed identity verification.</strong>
      </p>

      <section style={{ background: '#f5f7ff', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
        <h2>Why verification is required</h2>
        <ul style={{ lineHeight: '1.9' }}>
          <li>To protect people with disabilities from scams and abuse</li>
          <li>To ensure real humans, not bots or fake profiles</li>
          <li>To create a respectful and safe dating environment</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>What verified users will be able to do</h2>
        <ul style={{ lineHeight: '1.9' }}>
          <li>Create a dating profile</li>
          <li>Browse compatible profiles</li>
          <li>Send and receive messages</li>
          <li>Participate in community features</li>
        </ul>
      </section>

      <section style={{ background: '#fff3f3', padding: '2rem', borderRadius: '12px' }}>
        <h2>Not available without verification</h2>
        <ul style={{ lineHeight: '1.9' }}>
          <li>Messaging</li>
          <li>Matching</li>
          <li>Volunteer assistance</li>
          <li>Support requests</li>
        </ul>
      </section>

      <p style={{ marginTop: '3rem', fontSize: '1rem', opacity: '0.8' }}>
        This preview is not indexed by search engines and is accessible only by direct link.
      </p>
    </main>
  )
}
