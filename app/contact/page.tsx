import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Open Hearts Dating with questions, feedback, partnership ideas, or safety concerns. We believe in transparency, trust, and open communication.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Open Hearts Dating',
    description:
      'Get in touch with Open Hearts Dating. We welcome questions, feedback, partnerships, and community support.',
    url: 'https://openheartsdating.com/contact',
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
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Other Ways to Reach Us</h2>

            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@openheartsdating.com">
                contact@openheartsdating.com
              </a>
            </p>

            <p>
              <strong>Response Time:</strong> We aim to respond within 2–3 business days.
              Thoughtful replies matter more to us than automated messages.
            </p>

            <h3 style={{ marginTop: '2rem' }}>What Can You Reach Out About?</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>General Questions</strong> — about our mission, the platform, or what's coming next</li>
              <li><strong>Trust & Safety</strong> — concerns about scams, fake profiles, or unethical behavior</li>
              <li><strong>Volunteering</strong> — developers, designers, accessibility experts, community advocates</li>
              <li><strong>Partnerships</strong> — nonprofits, disability organizations, community groups</li>
              <li><strong>Investors & Supporters</strong> — if you're interested in supporting an ethical platform</li>
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
