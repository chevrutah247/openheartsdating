import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust & Safety — Open Hearts Dating',
  description:
    'Learn how Open Hearts Dating builds a safe, transparent, and trustworthy dating environment focused on real people, respect, and emotional well-being.',
}

export default function TrustPage() {
  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          <h1>Trust & Safety</h1>
          <p>
            Open Hearts Dating was created as a response to the growing
            frustration with deceptive, manipulative, and pay-to-emotion dating
            platforms. Trust is not an add-on for us — it is our foundation.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>What Makes Us Different</h2>
          <ul>
            <li>No bots or scripted conversations</li>
            <li>No pay-per-message or credit traps</li>
            <li>No emotional manipulation for profit</li>
            <li>Clear intentions and honest profiles</li>
          </ul>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Real People, Real Intentions</h2>
          <p>
            We do not allow AI-generated personas, paid chat operators, or
            engagement manipulation. Every profile represents a real person
            seeking a genuine connection.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Transparency Over Transactions</h2>
          <p>
            Human connection should never be turned into a financial maze.
            Open Hearts Dating is built around openness, accessibility, and
            respect — not psychological pressure.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Your Safety Matters</h2>
          <p>
            Our moderation and reporting systems are designed to protect users,
            not profits. We actively remove suspicious behavior and listen to
            community feedback.
          </p>
        </div>
      </section>
    </main>
  )
}
