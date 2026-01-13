import type { Metadata } from 'next'

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
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#journey" className="button">Join Our Journey</a>
            <a href="#story" className="button button-secondary">Why We Started</a>
          </div>
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
                <strong>We saw the problem. And we decided to fix it.</strong>
                <br/><br/>
                Not because we saw a "market opportunity." Because our friends deserve better. 
                Because YOU deserve better. Because 1.3 billion people with disabilities around 
                the world shouldn't feel invisible when searching for love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section className="content-section">
        <div className="container">
          <h2>What We're Building</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            A dating platform that treats you like a human being, not a statistic. 
            Where accessibility isn't an afterthought—it's the foundation.
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>💙 A Place Where You Can Be Yourself</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Your disability isn't a secret you hide until the "right moment." It's part of your story. 
                Here, everyone already knows—and they're here anyway. Because they see YOU, not your diagnosis.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>♿ Actually Accessible, From Day One</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Screen readers? They work perfectly. Keyboard navigation? Built in from the start. 
                We're not "adding accessibility later"—we're building with it from the very first line of code. 
                Because you shouldn't have to fight with technology just to find someone special.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>🛡️ Safe and Protected</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We know people with disabilities face higher rates of online abuse. That's not okay. 
                We're building strong verification, active human moderation, and clear reporting tools. 
                Your safety isn't a feature—it's our promise.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>💰 Free. Because Love Shouldn't Cost Money.</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We're a nonprofit. We're not here to extract money from lonely people. 
                All core features will be free. Forever. No hidden fees, no pay-to-win, no manipulation.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>🤝 Built WITH You</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We're not building in a vacuum. We want to hear from YOU. What do you need? 
                What frustrated you on other platforms? What would make this feel like home?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST ABOUT WHERE WE ARE */}
      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Let's Be Honest: We're Not Ready Yet</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We could pretend everything's ready and rush to launch. But that wouldn't be honest—and 
              you deserve honesty.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem',
              marginTop: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h4 style={{ color: '#22c55e', marginBottom: '0.5rem' }}>✅ What We Have</h4>
                <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                  <li>Clear vision and mission</li>
                  <li>Design and planning done</li>
                  <li>This website to share our journey</li>
                  <li>Commitment to doing it right</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>🔄 What We're Building</h4>
                <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                  <li>The actual platform</li>
                  <li>Accessibility features</li>
                  <li>Safety systems</li>
                  <li>Testing with real users</li>
                </ul>
              </div>
            </div>

            <div style={{ 
              marginTop: '2rem', 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0 }}>
                <strong>Our Timeline (Best Guess):</strong><br/>
                🔄 Beta Testing: Spring 2025<br/>
                🎉 Public Launch: Summer 2025
              </p>
              <p style={{ fontSize: '0.95rem', marginTop: '1rem', opacity: '0.8' }}>
                (These dates might change—we're not rushing. You deserve quality.)
              </p>
            </div>

            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginTop: '2rem' }}>
              This will take time. But it's worth it. Because you're worth it.
            </p>
          </div>
        </div>
      </section>

      {/* YOU'RE NOT ALONE */}
      <section className="content-section">
        <div className="container">
          <h2>You're Not Alone</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#667eea', marginBottom: '1rem' }}>
              1.3 Billion
            </div>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              That's how many people around the world live with a disability.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              It's not just a number. It's:
            </p>
            <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                💙 Elena, who dreams of someone who'll hold her hand on hard days
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                💙 Marcus, who wants to share his love of music with someone special
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                💙 Sophie, who believes somewhere out there is someone who loves her laugh
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                💙 And you. With your dreams, fears, and hope that love is possible
              </p>
            </div>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginTop: '2rem', fontWeight: '500' }}>
              Each of these 1.3 billion people has a beating heart. Including yours.
            </p>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS FORM - NEW! */}
      <section className="content-section content-section-alt">
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
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              🎉 Join Early Access
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem', opacity: '0.9' }}>
              Be among the first to join when we launch. Get updates on our progress 
              and exclusive early access to the platform.
            </p>

            {/* Mailerlite Newsletter Form */}
            <div className="ml-embedded" data-form="XyQWBM" suppressHydrationWarning></div>

            <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '1.5rem' }}>
              No spam, ever. Unsubscribe anytime.
            </p>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(102, 126, 234, 0.1)',
              borderRadius: '8px',
              marginTop: '2rem'
            }}>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                <strong>🏆 First 100 people get Founder status!</strong><br/>
                Special badge, priority features, and eternal gratitude 😊
              </p>
            </div>

            <a 
              href="/join" 
              style={{ 
                display: 'inline-block',
                marginTop: '1.5rem',
                color: '#667eea',
                textDecoration: 'underline',
                fontSize: '0.95rem'
              }}
            >
              Want more involvement? See all Early Access options →
            </a>
          </div>
        </div>
      </section>

      {/* JOIN THE JOURNEY */}
      <section id="journey" className="content-section">
        <div className="container">
          <h2>Be Part of the Story</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            We're not just building a platform. We're creating a movement of people who believe 
            everyone deserves love—no exceptions.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{ 
              padding: '2rem', 
              background: 'white', 
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.3rem' }}>📧 Get Early Access</h3>
              <p style={{ lineHeight: '1.7' }}>
                Be among the first to join when we launch. Get updates on our progress and 
                a chance to beta test.
              </p>
              <a href="/join" className="button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Sign Up for Updates
              </a>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white', 
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.3rem' }}>💬 Share Your Story</h3>
              <p style={{ lineHeight: '1.7' }}>
                Tell us about your experiences with dating platforms. What worked? What didn't? 
                Your input shapes what we build.
              </p>
              <a href="/contact" className="button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Share Feedback
              </a>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white', 
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.3rem' }}>📢 Spread the Word</h3>
              <p style={{ lineHeight: '1.7' }}>
                Know someone who'd benefit from this? Share our mission. The more people know, 
                the stronger our community becomes.
              </p>
              <a href="/mission" className="button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Learn More
              </a>
            </div>
          </div>

          <div style={{ 
            maxWidth: '700px', 
            margin: '3rem auto 0',
            padding: '2rem',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0 }}>
              <strong>Your love story starts here. Not when we launch—right now.</strong>
              <br/><br/>
              By joining us today, you become part of something bigger: a community that believes 
              disability doesn't define your worth, and that everyone deserves to feel those butterflies 
              when their phone buzzes with a message from someone special.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT OUR MISSION */}
      <section className="content-section">
        <div className="container">
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(102, 126, 234, 0.2)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              💙 Help Us Build This
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem', opacity: '0.9' }}>
              We're a nonprofit building Open Hearts Dating for people, not profit. 
              Every donation helps us create a truly accessible platform where everyone can find love.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Our Goal</h3>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                  Fund development, accessibility testing, and safe launch
                </p>
              </div>
              
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>100% Nonprofit</h3>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                  Every dollar goes directly to building the platform
                </p>
              </div>
              
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Donor Recognition</h3>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                  Special thanks on our Supporters page
                </p>
              </div>
            </div>

            <a
              href="https://gofund.me/2ce8664b"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                fontSize: '1.2rem',
                padding: '1rem 2.5rem',
                marginBottom: '1rem'
              }}
            >
              💙 Support Us on GoFundMe
            </a>
            
            <p style={{ fontSize: '0.9rem', opacity: '0.7', marginTop: '1rem' }}>
              Can't donate? Share our mission with someone who can! 🙏
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="content-section content-section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Begin?</h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            We won't promise love at first sight. We won't promise a "perfect match" in 5 minutes.
          </p>
          <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            But we promise a place where you'll be seen as YOU. Where your story matters. 
            Where vulnerability is okay. Where love is possible.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="/join" className="button">Yes, I'm Ready</a>
            <a href="/mission" className="button button-secondary">I Have Questions</a>
          </div>
        </div>
      </section>
    </>
  )
}
