import type { Metadata } from 'next'
import Image from 'next/image'
import Testimonials from './components/Testimonials'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Building Love Without Barriers',
  description: 'An inclusive, accessible dating platform for people with disabilities. Find meaningful connections with people who understand your journey. Free, safe, and 100% accessible.',
  alternates: {
    canonical: 'https://openheartsdating.com',
  },
  openGraph: {
    title: 'Open Hearts Dating — Building Love Without Barriers',
    description: 'A nonprofit dating platform built by and for people with disabilities. Free, safe, and 100% accessible.',
    url: 'https://openheartsdating.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Hearts Dating — Building Love Without Barriers',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>You Deserve Love. We Built the Place Where It Can Happen.</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
            Open Hearts Dating is an inclusive dating platform for people with disabilities.
            Find meaningful connections with people who understand your journey—
            without barriers, without judgment, without feeling invisible.
          </p>

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
            <a href="/signup" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Join Now — It's Free
            </a>
            <a href="/login" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Sign In
            </a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Everything You Need
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            A complete community for people with disabilities—
            dating, messaging, and support.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <a href="/platform-preview/dating" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💑</div>
              <h3 style={{ color: '#667eea', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                Browse Profiles
              </h3>
              <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                Find meaningful connections with people who understand your journey
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
                Start Browsing →
              </div>
            </a>

            <a href="/platform-preview/matches" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💕</div>
              <h3 style={{ color: '#667eea', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                My Matches
              </h3>
              <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                See who liked you back and start a conversation
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
                View Matches →
              </div>
            </a>

            <a href="/messages" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
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
                background: '#d1fae5',
                borderRadius: '6px',
                fontSize: '0.85rem',
                color: '#065f46',
                fontWeight: '600'
              }}>
                Open Messages →
              </div>
            </a>

            <a href="/contact" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📬</div>
              <h3 style={{ color: '#667eea', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
                Contact Us
              </h3>
              <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                Questions, feedback, partnerships, or safety concerns
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
                Get in Touch →
              </div>
            </a>
          </div>
        </div>
      </section>

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
                So we built new ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>What Makes Us Different</h2>
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
                  Identity verification. Active moderation. Report and block tools.
                  We take safety seriously because vulnerable people need it most.
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💙</div>
                <h3 style={{ marginBottom: '1rem' }}>100% Free & Nonprofit</h3>
                <p style={{ lineHeight: '1.7', color: '#666' }}>
                  No hidden fees. No premium tiers. No manipulative tactics.
                  Every feature is free because love shouldn't cost money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>What People Are Saying</h2>
          <Testimonials />
        </div>
      </section>

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
            <h2 style={{ marginBottom: '1rem' }}>Ready to Find Your Person?</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem', opacity: '0.9' }}>
              Create your free profile in minutes. Start browsing, matching, and messaging today.
            </p>
            <a href="/signup" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Create Free Account
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
