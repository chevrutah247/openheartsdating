import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dating Platform — Accessible Dating for People with Disabilities',
  description: 'Discover our accessible dating platform designed specifically for people with disabilities. Join an inclusive dating community where everyone can find meaningful relationships and connections.',
  openGraph: {
    title: 'Dating Platform — Accessible Dating for People with Disabilities',
    description: 'Discover our accessible dating platform designed specifically for people with disabilities. Join an inclusive dating community where everyone can find meaningful relationships.',
  },
}

export default function DatingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Open Hearts Dating Platform',
    applicationCategory: 'DatingApplication',
    operatingSystem: 'Web',
    description: 'Accessible dating platform for people with disabilities',
    url: 'https://openheartsdating.com/dating',
    accessibilityFeature: [
      'screenReader',
      'alternativeText',
      'keyboardNavigation',
      'highContrast',
      'textToSpeech'
    ],
    accessibilityHazard: 'none',
    accessibilityAPI: 'ARIA',
    accessibilityControl: [
      'fullKeyboardControl',
      'fullMouseControl',
      'fullTouchControl'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
            <h1>Accessible Dating Platform for People with Disabilities</h1>
            <p>
              Our dating platform is being built from the ground up with accessibility and 
              inclusion as core principles. We're creating a space where people with disabilities 
              can connect, build relationships, and find love in an environment designed 
              specifically for their needs.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Why an Accessible Dating Website Matters</h2>
            <p>
              Traditional dating platforms often overlook the needs of people with disabilities. 
              From inaccessible interfaces to lack of understanding about disability-related needs, 
              many dating websites fail to provide an inclusive experience. At Open Hearts Dating, 
              we're changing that.
            </p>
            <p>
              Our accessible dating website will feature:
            </p>
            <ul style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              <li><strong>Full Screen Reader Support:</strong> Compatible with all major screen 
              readers including JAWS, NVDA, and VoiceOver.</li>
              <li><strong>Keyboard Navigation:</strong> Complete functionality accessible via 
              keyboard only, no mouse required.</li>
              <li><strong>High Contrast Modes:</strong> Multiple color schemes and contrast 
              options for visual accessibility.</li>
              <li><strong>Text-to-Speech Integration:</strong> Built-in support for text-to-speech 
              technologies.</li>
              <li><strong>Customizable Interface:</strong> Adjustable font sizes, spacing, and 
              layout options to meet individual needs.</li>
              <li><strong>Alternative Text for All Images:</strong> Comprehensive alt text for 
              all visual content.</li>
            </ul>
          </div>
        </section>

        <section className="content-section content-section-alt">
          <div className="container">
            <h2>Inclusive Dating Features</h2>
            <p>
              Beyond accessibility, our platform will offer features designed specifically for 
              the disability dating community:
            </p>
            <ul style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              <li><strong>Disability-Aware Matching:</strong> Our matching algorithm considers 
              accessibility needs, communication preferences, and lifestyle compatibility.</li>
              <li><strong>Detailed Profile Options:</strong> Share information about your 
              accessibility needs, communication preferences, and what you're looking for in a 
              relationship.</li>
              <li><strong>Community Forums:</strong> Connect with others in the disability dating 
              community, share experiences, and build friendships.</li>
              <li><strong>Safety Features:</strong> Robust reporting and moderation systems to 
              ensure a safe and respectful environment.</li>
              <li><strong>Educational Resources:</strong> Information and support for navigating 
              dating with a disability.</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Coming Soon</h2>
            <p>
              We're working hard to build the best possible accessible dating platform. Our 
              development team, which includes people with disabilities, is ensuring that every 
              feature meets the highest standards of accessibility and usability.
            </p>
            <p>
              While we continue development, we're building our community and raising awareness 
              about the importance of inclusive dating platforms. Join us in creating a more 
              accessible and inclusive dating world.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="/contact" className="button">Stay Updated</a>
              <a href="/support" className="button button-secondary" style={{ marginLeft: '1rem' }}>
                Support Development
              </a>
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

