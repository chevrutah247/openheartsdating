import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Open Hearts Dating',
  description:
    'Contact Open Hearts Dating with questions, feedback, partnership ideas, or safety concerns. We believe in transparency, trust, and open communication.',
  openGraph: {
    title: 'Contact Open Hearts Dating',
    description:
      'Get in touch with Open Hearts Dating. We welcome questions, feedback, partnerships, and community support.',
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Contact Open Hearts Dating</h1>
          <p>
            Open Hearts Dating is built on trust, transparency, and respect.
            If you have questions, concerns, feedback, or ideas — we want to hear from you.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Why Reach Out?</h2>
          <p>
            We are creating a safe, ethical, and inclusive dating platform for people with disabilities.
            Unlike many existing dating platforms, we are intentionally avoiding manipulative mechanics,
            hidden fees, fake interactions, and pressure-based monetization.
          </p>

          <p>
            Your voice matters. Honest feedback — including criticism — helps us build something better.
          </p>

          <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <h3>General Questions</h3>
            <p>
              Have a question about our mission, how the platform works, or what's coming next?
              We're happy to explain openly and clearly.
            </p>

            <h3>Trust & Safety Concerns</h3>
            <p>
              If you are worried about scams, fake profiles, misuse of personal data, or unethical behavior
              on dating platforms in general — we take these concerns seriously.
            </p>
            <p>
              Open Hearts Dating is designed with safety-first principles and human moderation in mind.
              If you want to discuss safety ideas or raise concerns, please contact us.
            </p>

            <h3>Volunteers & Contributors</h3>
            <p>
              We welcome volunteers, advisors, developers, designers, accessibility experts,
              and community advocates who want to help build something meaningful.
            </p>

            <h3>Partnerships & Organizations</h3>
            <p>
              If you represent a nonprofit, disability organization, community group,
              or ethical business — we're open to thoughtful partnerships.
            </p>

            <h3>Investors & Supporters</h3>
            <p>
              Open Hearts Dating is at an early stage. If you're interested in supporting
              a transparent, values-driven platform focused on long-term impact rather than quick profit,
              we welcome the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Contact Information</h2>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@openheartsdating.com">
                contact@openheartsdating.com
              </a>
            </p>

            <p>
              <strong>Website:</strong>{' '}
              <a href="https://openheartsdating.com">
                https://openheartsdating.com
              </a>
            </p>

            <p>
              <strong>Response Time:</strong> We aim to respond within 2–3 business days.
              Thoughtful replies matter more to us than automated messages.
            </p>
          </div>

          <div
            style={{
              maxWidth: '800px',
              margin: '2rem auto',
              padding: '2rem',
              backgroundColor: 'var(--color-background)',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
            }}
          >
            <h3>Contact Form (Coming Soon)</h3>
            <p>
              <em>
                We are intentionally launching step by step.
                A secure contact form will be added once moderation and privacy safeguards are fully ready.
              </em>
            </p>
            <p>
              For now, please email us directly. When writing, feel free to include:
            </p>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Your name (or preferred alias)</li>
              <li>The reason you're reaching out</li>
              <li>Any relevant background or context</li>
              <li>Whether you'd like a reply</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Our Commitment</h2>
          <p>
            We believe dating platforms should respect human dignity,
            emotional vulnerability, and accessibility.
            We are building Open Hearts Dating slowly and responsibly — and publicly.
          </p>
          <p>
            Thank you for being part of this conversation.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <a href="/mission" className="button">
              Read Our Mission
            </a>
          </div>
        </div>
      </section>
    </>
  )
}