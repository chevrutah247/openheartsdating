import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Community Forum Now Live — Connect, Share, Support',
  description: 'Our community forum is now open! Join discussions, share experiences, and connect with others in the disability community.',
}

export default function ForumLaunchPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#d1fae5',
              color: '#065f46',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              NEW FEATURE
            </span>
          </div>
          <h1>Community Forum Now Live!</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Connect with others, share experiences, and find support in our new community forum — 
            built by and for people with disabilities.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {/* Hero Image */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            height: '500px',
            margin: '0 auto 3rem',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/news/forum-launch.jpg"
              alt="Diverse group of people with disabilities engaged in supportive conversation in modern accessible space"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Intro */}
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We're excited to announce that our <strong>Community Forum is now live and open to everyone!</strong> 
              This is more than just a discussion board — it's a space where people with disabilities can 
              connect, share, learn, and support each other.
            </p>

            {/* Why We Built It */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Why We Built This</h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              When we started Open Hearts Dating, we heard the same thing over and over: 
              <em>"I just want to connect with people who understand."</em>
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Yes, finding love is important. But so is finding community. So is having a place 
              where you can ask questions, share victories, vent frustrations, and just... be understood.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              That's why we built the forum. Not as an afterthought, but as a core part of what 
              Open Hearts is becoming — a complete community for people with disabilities.
            </p>

            {/* What's Inside */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>What's Inside</h2>

            <div style={{ 
              display: 'grid', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  💑 Relationships & Dating
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Share dating experiences, ask for advice, celebrate relationships. 
                  Whether it's first date tips or long-term relationship challenges — this is your space.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  🏥 Health & Medical
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Doctor recommendations, treatment experiences, rehabilitation tips. 
                  Learn from others who've been there.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  🏙️ City Life & Accessibility
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Find accessible restaurants, navigate public transport, share tips for city living. 
                  Help each other discover accessible places.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  👔 Career & Work
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Job hunting strategies, workplace rights, remote work tips. 
                  Build your career with support from the community.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary)'
              }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  💪 Motivation & Support
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Share success stories, find encouragement, support each other through challenges. 
                  You're not alone.
                </p>
              </div>

              <p style={{ fontSize: '1rem', color: '#666', fontStyle: 'italic', textAlign: 'center', marginTop: '1rem' }}>
                ...and 4 more categories covering travel, hobbies, legal rights, and general chat!
              </p>
            </div>

            {/* Built for Accessibility */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Built for Accessibility</h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Every feature of the forum was designed with accessibility in mind:
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '2rem' }}>
              <li><strong>Screen reader compatible</strong> — Full ARIA labels and semantic HTML</li>
              <li><strong>Keyboard navigation</strong> — Navigate the entire forum without a mouse</li>
              <li><strong>Clear visual hierarchy</strong> — Easy to scan and understand</li>
              <li><strong>Mobile-friendly</strong> — Works perfectly on phones and tablets</li>
              <li><strong>Tested by real users</strong> — With actual screen readers and assistive tech</li>
            </ul>

            {/* Safe & Moderated */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Safe & Moderated</h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We know that people with disabilities are often targets for harassment and abuse online. 
              That's why we're taking safety seriously:
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '2rem' }}>
              <li><strong>Active moderation</strong> — Real people reviewing reports within hours</li>
              <li><strong>AI content filtering</strong> — Automatic detection of toxic content</li>
              <li><strong>Clear community rules</strong> — Zero tolerance for hate speech and discrimination</li>
              <li><strong>Easy reporting</strong> — Report inappropriate content with one click</li>
              <li><strong>User reputation system</strong> — Helpful contributors get recognized</li>
            </ul>

            {/* Call to Action */}
            <div style={{ 
              marginTop: '3rem',
              padding: '2.5rem', 
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Ready to Join the Conversation?</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
                Create an account and start connecting with the community today.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/forum" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  Visit the Forum 🗣️
                </a>
                <a href="/signup" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  Create Account
                </a>
              </div>
            </div>

            {/* What's Next */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>What's Coming Next</h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              The forum is just the beginning. Over the coming months, we'll be adding:
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '2rem' }}>
              <li>Direct messaging between forum members</li>
              <li>Email notifications for replies to your posts</li>
              <li>Ability to follow specific topics</li>
              <li>Badges and achievements for active contributors</li>
              <li>Advanced search functionality</li>
              <li>Mobile app for iOS and Android</li>
            </ul>

            {/* Footer */}
            <div style={{ 
              marginTop: '3rem',
              padding: '2rem', 
              background: '#f9fafb', 
              borderRadius: '12px'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                <strong>Questions about the forum?</strong> Check out our <a href="/forum" style={{ color: 'var(--primary)' }}>Forum Guidelines</a> or 
                contact us at <a href="mailto:support@openheartsdating.com" style={{ color: 'var(--primary)' }}>support@openheartsdating.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <a href="/news" style={{ 
            display: 'inline-block',
            color: 'var(--primary)', 
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem'
          }}>
            ← Back to All News
          </a>
        </div>
      </section>
    </>
  )
}
