import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Platform — Dating Without Barriers',
  description: 'We are building a dating platform where you can truly be yourself. Accessible, safe, and designed for real connections—not endless swiping.',
  openGraph: {
    title: 'The Platform — Dating Without Barriers',
    description: 'A place where your disability is just part of your story, not an obstacle. Coming soon.',
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

      <section className="hero">
        <div className="container">
          <h1>Imagine a Place Where You Can Just... Be You</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
            No hiding. No explaining. No apologizing for who you are.
          </p>
          <p style={{ fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', opacity: '0.9', lineHeight: '1.6' }}>
            We're building that place. A dating platform where your disability is just part of your 
            story—not an obstacle to overcome. Where technology actually works for you. Where 
            people see YOU first.
          </p>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>What We're Building</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Close your eyes for a moment. Imagine opening a dating app and everything just... works. 
              The buttons make sense. The screen reader doesn't stumble. The text is readable. 
              The navigation is intuitive.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Now imagine your profile. You've mentioned your disability right there in the first line. 
              And you know what? People are still messaging you. Because they're here FOR this community. 
              They already understand. They already accept. They're curious about YOU—your hobbies, 
              your humor, your dreams.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', fontWeight: '500' }}>
              That's what we're building. Not just a platform—a home.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>How It Will Feel to Use Open Hearts</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>🏠 Like Coming Home</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                From the moment you sign up, you'll feel it: this place was made for you. Not adapted 
                for you. Not retrofitted. Built from the ground up with your needs at the center.
              </p>
              <div style={{ 
                marginTop: '1rem', 
                padding: '1.5rem', 
                background: 'rgba(102, 126, 234, 0.1)', 
                borderRadius: '8px',
                borderLeft: '4px solid #667eea'
              }}>
                <p style={{ margin: 0, fontStyle: 'italic', lineHeight: '1.7' }}>
                  "I cried the first time I used it. Not because it was emotional—because it just 
                  <em>worked</em>. Every button. Every link. Everything made sense with my screen reader. 
                  I didn't realize how much I'd been fighting technology until I didn't have to anymore."
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: '0.8' }}>
                  — Beta tester feedback we're working toward
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>💬 Real Conversations, Not Just Swipes</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                No endless swiping through faces. Instead, you'll read profiles—real profiles where 
                people share their stories. You'll send thoughtful messages, not just "hey." You'll 
                have time to think, to be intentional, to connect with people who actually interest you.
              </p>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', marginTop: '1rem' }}>
                <li>Detailed profiles with space for your real story</li>
                <li>Matching based on values, interests, and compatibility—not just photos</li>
                <li>Tools for meaningful conversation, not rapid-fire messaging</li>
                <li>No pressure to respond instantly or maintain "streaks"</li>
              </ul>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>🛡️ Actually Safe</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                You won't be alone. Real human moderators review reports—people who understand that 
                disability-related harassment is real and unacceptable. One-click blocking. Clear 
                reporting tools. Verification that actually works. Zero tolerance for ableism, 
                harassment, or scams.
              </p>
              <div style={{ 
                marginTop: '1rem', 
                padding: '1.5rem', 
                background: 'rgba(102, 126, 234, 0.1)', 
                borderRadius: '8px'
              }}>
                <p style={{ margin: 0, fontWeight: '500' }}>
                  You deserve to feel safe while looking for love. That's not negotiable.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>♿ Technology That Works WITH You</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                We're not just "WCAG compliant" (though we are). We're building features you'll 
                actually want to use:
              </p>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}>
                <div style={{ 
                  padding: '1.5rem', 
                  background: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ color: '#667eea', fontSize: '1.1rem', marginTop: 0 }}>For Blind/Low Vision Users</h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '1.2rem', margin: 0 }}>
                    <li>Perfect screen reader support (JAWS, NVDA, VoiceOver)</li>
                    <li>Every image has meaningful descriptions</li>
                    <li>Audio descriptions for video content</li>
                    <li>High contrast and customizable color modes</li>
                  </ul>
                </div>

                <div style={{ 
                  padding: '1.5rem', 
                  background: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ color: '#667eea', fontSize: '1.1rem', marginTop: 0 }}>For Motor Disabilities</h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '1.2rem', margin: 0 }}>
                    <li>Full keyboard navigation—no mouse needed</li>
                    <li>Voice control compatible</li>
                    <li>Large, easy-to-click targets</li>
                    <li>No time limits on forms</li>
                  </ul>
                </div>

                <div style={{ 
                  padding: '1.5rem', 
                  background: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ color: '#667eea', fontSize: '1.1rem', marginTop: 0 }}>For Cognitive Disabilities</h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '1.2rem', margin: 0 }}>
                    <li>Clear, simple language</li>
                    <li>Consistent navigation and design</li>
                    <li>No overwhelming animations</li>
                    <li>Adjustable reading speed</li>
                  </ul>
                </div>

                <div style={{ 
                  padding: '1.5rem', 
                  background: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ color: '#667eea', fontSize: '1.1rem', marginTop: 0 }}>For Deaf/Hard of Hearing</h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '1.2rem', margin: 0 }}>
                    <li>Captions for all audio content</li>
                    <li>Visual alerts instead of sounds</li>
                    <li>Text-based communication prioritized</li>
                    <li>Sign language video support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem' }}>💰 Free. Because It Should Be.</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Core features will be free. Forever. Creating a profile? Free. Browsing matches? Free. 
                Sending messages? Free. We're a nonprofit—we exist for you, not for profit.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                No "pay to see who liked you." No artificial limits. No psychological manipulation 
                to extract money from lonely people. Just honest, accessible tools to help you 
                connect with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>What Makes Us Different</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              You've probably used other dating apps. Maybe they frustrated you. Maybe they felt 
              impossible. Maybe you gave up. We get it. Here's how we're different:
            </p>

            <div style={{ 
              display: 'grid', 
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0, fontSize: '1.2rem' }}>
                  ❌ Other Apps: "We added accessibility features!"
                </h3>
                <h3 style={{ color: '#22c55e', marginTop: '0.5rem', fontSize: '1.2rem' }}>
                  ✅ Open Hearts: Accessibility IS the foundation
                </h3>
                <p style={{ margin: '1rem 0 0', lineHeight: '1.7' }}>
                  We're not retrofitting. Every single feature is built accessible from day one. 
                  Because you shouldn't have to wait for us to "add" accessibility later.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0, fontSize: '1.2rem' }}>
                  ❌ Other Apps: "Swipe right to like!"
                </h3>
                <h3 style={{ color: '#22c55e', marginTop: '0.5rem', fontSize: '1.2rem' }}>
                  ✅ Open Hearts: Read profiles, send real messages
                </h3>
                <p style={{ margin: '1rem 0 0', lineHeight: '1.7' }}>
                  No mindless swiping. No reducing people to a photo. Thoughtful profiles and 
                  meaningful conversations from the start.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0, fontSize: '1.2rem' }}>
                  ❌ Other Apps: "Pay $29.99/month to see your matches!"
                </h3>
                <h3 style={{ color: '#22c55e', marginTop: '0.5rem', fontSize: '1.2rem' }}>
                  ✅ Open Hearts: Core features are free, always
                </h3>
                <p style={{ margin: '1rem 0 0', lineHeight: '1.7' }}>
                  We're nonprofit. Love shouldn't cost money. No paywalls, no manipulation, 
                  no psychological tricks.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0, fontSize: '1.2rem' }}>
                  ❌ Other Apps: "Disability? Better hide that until later..."
                </h3>
                <h3 style={{ color: '#22c55e', marginTop: '0.5rem', fontSize: '1.2rem' }}>
                  ✅ Open Hearts: Be open from the start—everyone here gets it
                </h3>
                <p style={{ margin: '1rem 0 0', lineHeight: '1.7' }}>
                  Your disability isn't a secret to reveal. It's part of your story. Everyone 
                  here either has a disability or is comfortable with it. No surprises, no ghosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>We Need Your Voice</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Here's the truth: we can't build the perfect platform without you.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We have ideas. We have plans. We have good intentions. But YOU have the lived experience. 
              You know what frustrates you about current apps. You know what features would actually help. 
              You know what accessibility really means in practice, not just in theory.
            </p>
            
            <div style={{ 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>Help Us Build This Right</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We want to hear from you:
              </p>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <li>What has frustrated you about other dating apps?</li>
                <li>What accessibility features do you absolutely need?</li>
                <li>What would make you feel safe and comfortable?</li>
                <li>What's missing from current platforms?</li>
                <li>What would your ideal dating experience look like?</li>
              </ul>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                Your feedback doesn't just help us—it shapes what we build. You're not just a user. 
                You're a co-creator.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>The Timeline (Honest Version)</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We could rush. We could launch something half-baked and "improve it later." 
              But that's not good enough for you. Here's our actual plan:
            </p>

            <div style={{ 
              padding: '2rem', 
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>🔄 Right Now (Winter 2025)</h3>
              <p style={{ lineHeight: '1.8', margin: 0 }}>
                Building the foundation. Testing accessibility with real users. Gathering feedback. 
                Making sure EVERYTHING works before we open the doors.
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>🧪 Spring 2025</h3>
              <p style={{ lineHeight: '1.8', margin: 0 }}>
                Beta testing with a small group. Fixing bugs. Improving accessibility based on 
                real feedback. Ensuring safety systems work. Want to be a beta tester? 
                <a href="/contact" style={{ color: '#667eea', marginLeft: '0.3rem' }}>Let us know</a>.
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>🎉 Summer 2025</h3>
              <p style={{ lineHeight: '1.8', margin: 0 }}>
                Public launch! Opening registration to everyone. Your chance to finally have a 
                dating platform that actually works for you.
              </p>
            </div>

            <p style={{ fontSize: '0.95rem', marginTop: '2rem', fontStyle: 'italic', opacity: '0.8' }}>
              * These dates are our best guess. If we need more time to get it right, we'll take it. 
              You deserve quality, not speed.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Be Among the First</h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            Want to be notified when we launch? Interested in beta testing? 
            Have feedback to share? We want to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="/contact" className="button">Get Early Access</a>
            <a href="/mission" className="button button-secondary">Learn More About Our Mission</a>
          </div>
          
          <div style={{ 
            maxWidth: '650px', 
            margin: '3rem auto 0',
            padding: '2rem',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '12px'
          }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
              <strong>Remember:</strong> You're not waiting for a product. 
              You're helping build a community. And that community starts now.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
