import type { Metadata } from "next"
import Image from 'next/image'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Mission — Love Without Barriers",
  description:
    "We're building Open Hearts Dating because 1.3 billion people with disabilities deserve to find love without barriers, judgment, or feeling invisible.",
  alternates: {
    canonical: '/mission',
  },
  openGraph: {
    title: 'Our Mission — Love Without Barriers',
    description: '1.3 billion people with disabilities deserve to find love without barriers.',
    url: 'https://openheartsdating.com/mission',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Open Hearts Dating Mission' }],
  },
}

export default function MissionPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Everyone Deserves to Feel Those Butterflies</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            You know that feeling when your phone buzzes and it's THEM? Your heart skips. 
            You smile without meaning to. You read the message three times.
          </p>
          <p style={{ fontSize: '1.15rem', maxWidth: '800px', margin: '1.5rem auto 0', opacity: '0.9' }}>
            Everyone deserves to feel that. <strong>Including you.</strong>
          </p>

          {/* Mission Hero Image */}
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
              src="/images/mission-community.jpg"
              alt="Large diverse community group with various disabilities gathered together outdoors"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Why We Started</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              This isn't a business plan. It's personal.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem' }}>The Question That Started Everything</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                A friend of ours, let's call him Alex, was having a rough day. He'd been on three 
                different dating apps for months. Got some matches. Even some conversations.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Then he mentioned his wheelchair in a message. Suddenly, silence. Every. Single. Time.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                He asked us: <em>"Why do I have to hide who I am just to get a chance?"</em>
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px',
              borderLeft: '4px solid #667eea',
              marginBottom: '2.5rem'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                We didn't have a good answer. So we decided to create one.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem' }}>Then We Started Listening</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                The more we talked to people, the more stories we heard:
              </p>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                <li><strong>Maria</strong> couldn't use popular apps with her screen reader. Buttons didn't work. 
                Navigation was impossible. She gave up.</li>
                <li><strong>James</strong> was tired of explaining his autism on first dates. He wanted people 
                to know upfront and be okay with it.</li>
                <li><strong>Elena</strong> faced constant ableist comments. "You're so brave!" "I could never date 
                someone like you." Like she was a charity case.</li>
                <li><strong>David</strong> just wanted to meet someone who understood chronic pain means some days 
                you can't leave the house—and that's okay.</li>
              </ul>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white', 
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0, fontWeight: '500' }}>
                These aren't "market segments" or "user personas." 
                These are real people with real hearts who deserve real love.
                <br/><br/>
                That's why we're here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>The Problem Is Bigger Than You Think</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#667eea', marginBottom: '1rem' }}>
                1.3 Billion
              </div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                That's how many people worldwide live with a disability.
              </p>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Let that sink in. 1.3 BILLION people. That's:
            </p>

            <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>16% of the global population</li>
              <li>More than the population of Europe and North America combined</li>
              <li>In the US alone: 61 million adults (about 1 in 4)</li>
            </ul>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              And most dating platforms? They're either:
            </p>

            <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Completely inaccessible (screen readers don't work, keyboard navigation broken)</li>
              <li>Technically accessible but culturally hostile</li>
              <li>Built for able-bodied people with disability as an afterthought</li>
              <li>Focused on fetishization rather than genuine connection</li>
            </ul>

            <div style={{ 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0, fontWeight: '500' }}>
                That's not a niche market. That's not a minority. 
                That's 1.3 billion people who deserve better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>What Makes Us Different</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem', marginBottom: '1rem' }}>
                🏗️ Built BY People Who Get It
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We're not a tech company that saw a "market opportunity." Our team includes people 
                with disabilities, family members of people with disabilities, and allies who deeply 
                understand this community.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem', marginBottom: '1rem' }}>
                ♿ Accessibility Isn't a Feature—It's the Foundation
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Every line of code is written with accessibility in mind. Every feature is tested with 
                screen readers, keyboard navigation, and real assistive technologies. We're not "adding 
                accessibility later"—we're building it in from day one.
              </p>

              {/* Assistive Tech Image */}
              <div style={{ 
                position: 'relative',
                width: '100%',
                maxWidth: '700px',
                height: '350px',
                margin: '1.5rem auto',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/images/assistive-keyboard.jpg"
                  alt="Person using assistive keyboard technology with specialized input devices"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem', marginBottom: '1rem' }}>
                💰 Nonprofit = No Hidden Motives
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We're a nonprofit. We're not trying to maximize profits or satisfy investors. 
                We're here to solve a real problem for real people. Core features will always be free. 
                Optional premium features help sustain the platform—but you'll never need them to find love.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem', marginBottom: '1rem' }}>
                🛡️ Safety Is Non-Negotiable
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                People with disabilities face higher rates of abuse. We know this. That's why we're 
                building strong verification, active human moderation, and clear reporting systems 
                from the start. Your safety isn't an afterthought—it's foundational.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem', marginBottom: '1rem' }}>
                🤝 Community-Driven Development
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We're building this WITH you, not just FOR you. Your feedback shapes our features. 
                Your experiences inform our decisions. This is YOUR platform—we're just building it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>How We're Building This</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We're taking a different approach. No venture capital. No rushing to launch. 
              Just sustainable, thoughtful growth funded by people who believe in the mission.
            </p>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                padding: '1.5rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Grant Writing</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: '0.9' }}>
                  Securing nonprofit grants from foundations that support disability initiatives
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💙</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Community Donations</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: '0.9' }}>
                  Direct support from people who believe in our mission
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Strategic Partners</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: '0.9' }}>
                  Organizations aligned with our mission of accessibility and inclusion
                </p>
              </div>
            </div>

            <div style={{ 
              padding: '2rem',
              background: 'rgba(102, 126, 234, 0.1)',
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                <strong>Want to help?</strong> We're looking for experienced grant writers, 
                fundraising professionals, and community partners who can help us grow sustainably. 
                <Link href="/volunteer" style={{ color: '#667eea', fontWeight: '600' }}> Join our team →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Our Values</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              <div>
                <h3 style={{ color: '#667eea', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Accessibility First
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Not as an add-on, but as the foundation of everything we build
                </p>
              </div>

              <div>
                <h3 style={{ color: '#667eea', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Radical Transparency
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Honest about our progress, our challenges, and our timeline
                </p>
              </div>

              <div>
                <h3 style={{ color: '#667eea', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Community Ownership
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Built WITH the disability community, shaped BY your voices
                </p>
              </div>

              <div>
                <h3 style={{ color: '#667eea', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Safety Above All
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Protecting our community is more important than growth or features
                </p>
              </div>

              <div>
                <h3 style={{ color: '#667eea', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  No Exploitation
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We won't profit from loneliness or manipulate people into paying
                </p>
              </div>

              <div>
                <h3 style={{ color: '#667eea', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Human Dignity
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Every person deserves respect, connection, and the chance at love
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Join Us in Building This</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              This mission is bigger than us. It's about creating something that serves 
              1.3 billion people who deserve better. Will you be part of it?
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/join" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Join Early Access 💙
              </Link>
              <Link href="/volunteer" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
