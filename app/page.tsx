import type { Metadata } from 'next'
import Image from 'next/image'
import Testimonials from './components/Testimonials'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Building Love Without Barriers',
  description: 'We are building an inclusive, accessible dating platform for people with disabilities. Join us in creating a space where everyone can find meaningful connections.',
  openGraph: {
    title: 'Open Hearts Dating — Building Love Without Barriers',
    description: 'A nonprofit dating platform built by and for people with disabilities. Currently in development - be part of the journey.',
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO - Warm & Honest */}
      <section className="hero">
        <div className="container">
          <h1>You Deserve Love. We're Building the Place Where It Can Happen.</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
            Hi! We're Open Hearts Dating—a small team who believes everyone with a disability 
            deserves to find connection without barriers, without judgment, without feeling invisible.
          </p>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: '0.9' }}>
            <strong>We're still building our platform</strong>, but we already know one thing: 
            we want to build it WITH you, not just FOR you.
          </p>

          {/* Hero Image */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            height: '400px',
            margin: '2rem auto',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/hero-couples.jpg"
              alt="Diverse couples with disabilities in loving embrace outdoors in golden hour"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#journey" className="button">Join Our Journey</a>
            <a href="#story" className="button button-secondary">Why We Started</a>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR COMMUNITY - NEW SECTION */}
      <section className="content-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            More Than Dating
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: '700px', 
            margin: '0 auto 3rem' 
          }}>
            We're building a complete community for people with disabilities—
            not just dating, but support, resources, and opportunities.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Dating Card */}
            <a href="/dating" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} className="community-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💑</div>
              <h3 style={{ color: '#667eea', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                Dating
              </h3>
              <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                Find meaningful connections with people who understand your journey
              </p>
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.5rem 1rem', 
                background: '#fff3cd', 
                borderRadius: '6px',
                fontSize: '0.85rem',
                color: '#856404'
              }}>
                Coming Spring 2026
              </div>
            </a>

            {/* Forum Card */}
            <a href="/forum" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} className="community-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🗣️</div>
              <h3 style={{ color: '#667eea', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                Community Forum
              </h3>
              <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                Share experiences, get advice, and connect with others in our community
              </p>
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.5rem 1rem', 
                background: '#d1fae5', 
                borderRadius: '6px',
                fontSize: '0.85rem',
                color: '#065f46',
                fontWeight: '600'
              }}>
                Available Now! →
              </div>
            </a>

            {/* Jobs Card */}
            <a href="/jobs" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} className="community-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ color: '#667eea', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                Job Board
              </h3>
              <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                Find accessible employment opportunities that value your abilities
              </p>
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.5rem 1rem', 
                background: '#d1fae5', 
                borderRadius: '6px',
                fontSize: '0.85rem',
                color: '#065f46',
                fontWeight: '600'
              }}>
                Available Now! →
              </div>
            </a>

            {/* Messages Card */}
            <a href="/messages" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} className="community-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💬</div>
              <h3 style={{ color: '#667eea', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                Messages
              </h3>
              <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                Chat with your matches in real-time with accessible messaging
              </p>
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.5rem 1rem', 
                background: '#fff3cd', 
                borderRadius: '6px',
                fontSize: '0.85rem',
                color: '#856404'
              }}>
                Coming Spring 2026
              </div>
            </a>
          </div>

          {/* Hover effect CSS */}
          <style jsx>{`
            .community-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 8px 16px rgba(0,0,0,0.15);
            }
          `}</style>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section id="story" className="content-section content-section-alt">
        <div className="container">
          <h2>Why We're Here</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Our friend Alex once said: <em>"I'm tired of explaining my disability on the first date. 
              I just want someone who already knows and doesn't care."</em>
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Maria couldn't use popular dating apps with her screen reader. 
              The buttons didn't work. The navigation was impossible. She gave up trying.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Dmitry got matches, but after mentioning his wheelchair, people would ghost him. 
              Every. Single. Time.
            </p>
            
            <div style={{ 
              marginTop: '2rem', 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px',
              borderLeft: '4px solid #667eea'
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0 }}>
                <strong>We realized:</strong> The problem isn't that people with disabilities 
                can't find love. The problem is that the tools don't work for them. 
                So we're building new ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section id="journey" className="content-section">
        <div className="container">
          <h2>What We're Building</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
                <h3 style={{ marginBottom: '1rem' }}>Actually Accessible</h3>
                <p style={{ lineHeight: '1.7', color: '#666' }}>
                  Full screen reader support. Keyboard navigation. Clear contrast. 
                  Works with assistive tech. Tested by real users.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
                <h3 style={{ marginBottom: '1rem' }}>Safe & Moderated</h3>
                <p style={{ lineHeight: '1.7', color: '#666' }}>
                  Identity verification. Active moderation. Report tools. 
                  We take safety seriously because vulnerable people need it most.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💙</div>
                <h3 style={{ marginBottom: '1rem' }}>Built With You</h3>
                <p style={{ lineHeight: '1.7', color: '#666' }}>
                  We're testing with real users. Gathering feedback. 
                  Making changes. This platform belongs to the community.
                </p>
              </div>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>When Can You Join?</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Beta testing starts <strong>Spring 2026</strong>. 
                Full public launch <strong>Summer 2026</strong>.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/join" className="button">Join Early Access</a>
                <a href="/when-we-launch" className="button button-secondary">See Timeline</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="content-section content-section-alt">
        <div className="container">
          <h2>What People Are Saying</h2>
          <Testimonials />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="content-section">
        <div className="container">
          <div style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Be Part of This?</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem', opacity: '0.9' }}>
              Join our Early Access program. Help us build this right. 
              Be first to know when we launch.
            </p>
            <a href="/join" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Join Early Access Program 💙
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
