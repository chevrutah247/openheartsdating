import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Early Access — Be Among the First',
  description: 'Join Open Hearts Dating Early Access Program. Help us build the dating platform you deserve. Be notified first when we launch.',
}

export default function JoinPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Be Part of Something Special 💙</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            We're building Open Hearts Dating WITH you, not just FOR you. 
            Join our Early Access Program and help shape the future of inclusive dating.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Choose Your Level of Involvement</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', opacity: '0.9' }}>
              Whether you want updates, hands-on testing, or to help build the community—there's a place for you.
            </p>

            {/* Three Levels */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              
              {/* Level 1: Newsletter */}
              <div style={{ 
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Newsletter Subscriber
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem', minHeight: '80px' }}>
                  Stay informed with bi-weekly updates on our progress. Be the first to know when we launch.
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>You'll get:</p>
                  <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                    <li>Progress updates every 2 weeks</li>
                    <li>First notification when we launch</li>
                    <li>Priority registration access</li>
                  </ul>
                </div>

                <a 
                  href="#newsletter-form" 
                  className="button"
                  style={{ display: 'block', textAlign: 'center', width: '100%' }}
                >
                  Stay Informed
                </a>
              </div>

              {/* Level 2: Beta Tester */}
              <div style={{ 
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid #667eea',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#667eea',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  POPULAR
                </div>
                
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧪</div>
                <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Beta Tester
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem', minHeight: '80px' }}>
                  Help us test and improve the platform. Your feedback directly shapes what we build.
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Everything above, plus:</p>
                  <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                    <li>Exclusive beta testing invitation</li>
                    <li>Influence platform features</li>
                    <li>Special "Founder" badge at launch</li>
                    <li>Direct feedback channel to team</li>
                  </ul>
                </div>

                <a 
                  href="#beta-form" 
                  className="button"
                  style={{ display: 'block', textAlign: 'center', width: '100%' }}
                >
                  Become a Beta Tester
                </a>
              </div>

              {/* Level 3: Community Builder */}
              <div style={{ 
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Community Builder
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem', minHeight: '80px' }}>
                  Join the inner circle. Help us build not just a platform, but a movement.
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Everything above, plus:</p>
                  <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                    <li>Join our Discord/Telegram community</li>
                    <li>Participate in polls & decisions</li>
                    <li>Help shape community guidelines</li>
                    <li>Monthly video calls with team</li>
                  </ul>
                </div>

                <a 
                  href="#community-form" 
                  className="button"
                  style={{ display: 'block', textAlign: 'center', width: '100%' }}
                >
                  Join the Movement
                </a>
              </div>
            </div>

            {/* Special Offer */}
            <div style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '12px',
              borderLeft: '4px solid #667eea',
              marginBottom: '4rem',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                🎁 Founder's Circle (First 100 People!)
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
                The first 100 people to join at any level will receive:
              </p>
              <ul style={{ 
                fontSize: '1.05rem', 
                lineHeight: '1.9', 
                maxWidth: '600px', 
                margin: '1rem auto',
                textAlign: 'left',
                display: 'inline-block'
              }}>
                <li>🏆 Exclusive "Founder" badge in your profile</li>
                <li>🎨 Custom profile theme options</li>
                <li>💬 Direct line to founders</li>
                <li>📜 Listed on our "Community Founders" page (optional)</li>
              </ul>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', opacity: '0.8', marginTop: '1rem' }}>
                <strong>23 spots remaining</strong> (updated daily)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            
            {/* Newsletter Form */}
            <div id="newsletter-form" style={{ 
              padding: '3rem 2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              marginBottom: '3rem'
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>📧 Newsletter Signup</h2>
              <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: '0.8' }}>
                Stay informed with bi-weekly updates
              </p>
              
              {/* Mailerlite Embedded Form будет здесь */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email-newsletter" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email-newsletter"
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name-newsletter" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  First Name (optional)
                </label>
                <input 
                  type="text" 
                  id="name-newsletter"
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="button"
                style={{ width: '100%', fontSize: '1.1rem' }}
              >
                Keep Me Updated
              </button>

              <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '1rem', opacity: '0.7' }}>
                No spam, ever. Unsubscribe anytime. We respect your inbox.
              </p>
            </div>

            {/* Beta Tester Form */}
            <div id="beta-form" style={{ 
              padding: '3rem 2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              marginBottom: '3rem',
              border: '2px solid #667eea'
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>🧪 Beta Tester Signup</h2>
              <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: '0.8' }}>
                Help us test and improve the platform
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email-beta" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email-beta"
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name-beta" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  First Name *
                </label>
                <input 
                  type="text" 
                  id="name-beta"
                  placeholder="Your name"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="disability-beta" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Type of Disability (optional, helps us test better)
                </label>
                <select 
                  id="disability-beta"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                >
                  <option value="">Prefer not to say</option>
                  <option value="visual">Visual/Blind/Low Vision</option>
                  <option value="hearing">Deaf/Hard of Hearing</option>
                  <option value="motor">Motor/Physical</option>
                  <option value="cognitive">Cognitive/Learning</option>
                  <option value="chronic">Chronic Illness/Pain</option>
                  <option value="mental">Mental Health</option>
                  <option value="multiple">Multiple</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="assistive-beta" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Assistive Technologies You Use (optional)
                </label>
                <input 
                  type="text" 
                  id="assistive-beta"
                  placeholder="e.g., JAWS, NVDA, VoiceOver, Dragon..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="button"
                style={{ width: '100%', fontSize: '1.1rem' }}
              >
                Join Beta Testing
              </button>

              <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '1rem', opacity: '0.7' }}>
                We'll contact you when beta testing begins (Spring 2025)
              </p>
            </div>

            {/* Community Builder Form */}
            <div id="community-form" style={{ 
              padding: '3rem 2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>🤝 Community Builder Signup</h2>
              <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: '0.8' }}>
                Join the inner circle and help build the movement
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email-community" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email-community"
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name-community" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name-community"
                  placeholder="Your full name"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="why-community" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Why do you want to help build this community? *
                </label>
                <textarea 
                  id="why-community"
                  placeholder="Tell us your story..."
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="skills-community" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Skills You Can Contribute (optional)
                </label>
                <input 
                  type="text" 
                  id="skills-community"
                  placeholder="e.g., community moderation, content creation, accessibility testing..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="button"
                style={{ width: '100%', fontSize: '1.1rem' }}
              >
                Join as Community Builder
              </button>

              <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '1rem', opacity: '0.7' }}>
                We'll review applications and invite you to our community channels
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>Why Join Now?</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Shape the Platform</h3>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                  Your feedback directly influences what we build
                </p>
              </div>

              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚡</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>First Access</h3>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                  Be among the first to use the platform when we launch
                </p>
              </div>

              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏆</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Founder Status</h3>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                  Special recognition for being here from the start
                </p>
              </div>

              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💙</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Build Community</h3>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                  Connect with like-minded people before launch
                </p>
              </div>
            </div>

            <div style={{
              padding: '2rem',
              background: 'rgba(102, 126, 234, 0.1)',
              borderRadius: '12px',
              marginTop: '3rem'
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0 }}>
                <strong>Remember:</strong> This isn't just about joining a platform. 
                It's about being part of a movement to make dating accessible and inclusive for everyone.
                <br/><br/>
                Your voice matters. Your experience matters. You matter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
