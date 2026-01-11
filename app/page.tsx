import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Inclusive Dating Platform for People with Disabilities',
  description: 'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities. Join our accessible dating community and find meaningful relationships. Full platform coming soon.',
  openGraph: {
    title: 'Open Hearts Dating — Inclusive Dating Platform for People with Disabilities',
    description: 'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities. Join our accessible dating community and find meaningful relationships.',
  },
}

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Open Hearts Dating',
    url: 'https://openheartsdating.com',
    logo: 'https://openheartsdating.com/logo.png',
    description: 'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities.',
    foundingDate: '2024',
    nonprofitStatus: 'NonprofitType',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    sameAs: [
      // Add social media links when available
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero">
        <div className="container">
          <h1>Open Hearts Dating — Inclusive Dating Platform for People with Disabilities</h1>
          <p>
            Welcome to Open Hearts Dating, a nonprofit initiative dedicated to creating an 
            accessible and inclusive dating platform for people with disabilities. We believe 
            everyone deserves the opportunity to find meaningful connections and build 
            lasting relationships.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/dating" className="button">Learn About Our Platform</a>
            <a href="/support" className="button button-secondary">Get Involved</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>About Open Hearts Dating</h2>
          <p>
            Open Hearts Dating is a nonprofit organization committed to breaking down barriers 
            in the dating world for people with disabilities. Our mission is to provide a safe, 
            accessible, and inclusive dating platform where everyone can connect, build 
            relationships, and find love.
          </p>
          <p>
            As an inclusive dating platform, we understand the unique challenges that people 
            with disabilities face when seeking romantic connections. Traditional dating websites 
            often lack the accessibility features and understanding needed to serve our community 
            effectively. That's why we're building a platform designed specifically with 
            accessibility and inclusion at its core.
          </p>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Our Focus: Dating and Relationships</h2>
          <p>
            At Open Hearts Dating, our primary focus is creating a comprehensive dating platform 
            that serves people with disabilities. We're developing features that prioritize:
          </p>
          <ul style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <li><strong>Accessible Dating Website:</strong> Our platform will be fully accessible, 
            meeting WCAG 2.1 AA standards and compatible with screen readers, voice navigation, 
            and other assistive technologies.</li>
            <li><strong>Inclusive Matching:</strong> We're building matching algorithms that 
            consider the unique needs and preferences of our community members.</li>
            <li><strong>Safe and Supportive Environment:</strong> Our platform will have robust 
            safety features and community guidelines to ensure a positive experience for all users.</li>
            <li><strong>Community Support:</strong> Beyond dating, we're fostering a supportive 
            community where members can connect, share experiences, and support one another.</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Platform Coming Soon</h2>
          <p>
            We're currently in the development phase of our full dating platform. While we work 
            to build the best possible accessible dating experience, we're also building our 
            community and raising awareness about the importance of inclusive dating platforms.
          </p>
          <p>
            As a nonprofit dating platform, we rely on the support of volunteers, donors, and 
            community members who share our vision. If you're interested in getting involved, 
            whether throug