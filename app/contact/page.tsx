import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with Open Hearts Dating',
  description: 'Contact Open Hearts Dating to learn more, get involved, ask questions, or provide feedback. We\'d love to hear from you and welcome your input as we build our accessible dating platform.',
  openGraph: {
    title: 'Contact Us — Get in Touch with Open Hearts Dating',
    description: 'Contact Open Hearts Dating to learn more, get involved, ask questions, or provide feedback.',
  },
}

export default function ContactPage() {
  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <header className="header" role="banner">
        <div className="header-content">
          <div className="logo">Open Hearts Dating</div>
          <nav aria-label="Main navigation">
            <ul className="nav">
              <li><a href="/">Home</a></li>
              <li><a href="/dating">Dating</a></li>
              <li><a href="/mission">Mission</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="main" role="main">
        <section className="hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Whether you have questions, want to get involved, 
              provide feedback, or simply learn more about Open Hearts Dating, please don't 
              hesitate to reach out.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Get in Touch</h2>
            <p>
              At Open Hearts Dating, we value open communication and community input. Your 
              feedback, questions, and ideas help shape our platform and ensure we're meeting 
              the needs of the disability dating community.
            </p>
            
            <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
              <h3>General Inquiries</h3>
              <p>
                For general questions, information requests, or to learn more about Open Hearts 
                Dating, please reach out through the contact methods below. We aim to respond 
                to all inquiries within 2-3 business days.
              </p>

              <h3>Volunteer Opportunities</h3>
              <p>
                Interested in volunteering? We're always looking for dedicated individuals to 
                help with development, community outreach, content creation, and more. Please 
                let us know about your skills, interests, and availability.
              </p>

              <h3>Partnership Inquiries</h3>
              <p>
                If you represent an organization, business, or community group interested in 
                partnering with Open Hearts Dating, we'd love to explore collaboration 
                opportunities. Please reach out to discuss how we can work together.
              </p>

              <h3>Media and Press</h3>
              <p>
                For media inquiries, interview requests, or press-related questions, please 
                contact us with details about your request and deadline. We're happy to share 
                our story and mission with interested media outlets.
              </p>

              <h3>Feedback and Suggestions</h3>
              <p>
                Your feedback is invaluable to us. If you have suggestions for our platform, 
                ideas for features, or concerns you'd like to share, please don't hesitate to 
                reach out. We're committed to building a platform that truly serves our 
                community, and your input helps us do that.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section content-section-alt">
          <div className="container">
            <h2>Contact Information</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p>
                <strong>Email:</strong> Please use the contact form below or email us directly 
                at <a href="mailto:info@openheartsdating.com">info@openheartsdating.com</a>
              </p>
              <p>
                <strong>Website:</strong> <a href="https://openheartsdating.com">openheartsdating.com</a>
              </p>
              <p>
                <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 
                business days. For urgent matters, please indicate this in your message.
              </p>
            </div>

            <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', backgroundColor: 'var(--color-background)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Contact Form</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                <em>Note: Contact form functionality will be implemented in a future phase. 
                For now, please email us directly at info@openheartsdating.com or use the 
                contact methods above.</em>
              </p>
              <p>
                In the meantime, you can reach out to us via email with:
              </p>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Your name and contact information</li>
                <li>The nature of your inquiry</li>
                <li>Any relevant details or questions</li>
                <li>How you'd like us to respond</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Stay Connected</h2>
            <p>
              While we're in the early stages of development, we're working on building our 
              online presence and community. Social media links and newsletter signup will be 
              available soon. For now, please check back regularly or contact us to be added 
              to our update list.
            </p>
            <p>
              We're excited to build this community with you and look forward to hearing from you!
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="/support" className="button">Learn How to Support Us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <nav aria-label="Footer navigation">
            <ul className="footer-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/dating">Dating</a></li>
              <li><a href="/mission">Mission</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Open Hearts Dating. All rights reserved. 
            A nonprofit organization dedicated to inclusive dating.
          </p>
        </div>
      </footer>
    </>
  )
}

