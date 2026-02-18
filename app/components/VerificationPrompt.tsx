import Link from 'next/link'

export default function VerificationPrompt({ status }: { status: string }) {
  const isPending = status === 'pending'

  return (
    <div className="verify-prompt">
      {isPending ? (
        <>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#9203;</div>
          <h2>Verification In Progress</h2>
          <p>
            Your documents are being reviewed. This usually takes 1-2 business days.
            We&apos;ll notify you when you&apos;re approved.
          </p>
          <Link href="/messages" className="btn-verify" style={{ background: 'var(--info)' }}>
            Check Messages
          </Link>
        </>
      ) : (
        <>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#128274;</div>
          <h2>Get Verified to Start Dating</h2>
          <p>
            To protect our community, we verify everyone.
            Upload a photo ID to unlock browsing, matching, and messaging.
          </p>
          <Link href="/verify" className="btn-verify">
            Verify Now
          </Link>
        </>
      )}
    </div>
  )
}
