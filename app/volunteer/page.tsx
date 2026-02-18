import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer — Join Our Team',
  description: 'Help us build Open Hearts Dating. Join our team as a volunteer and make a real difference in the lives of people with disabilities seeking love.',
  alternates: {
    canonical: '/volunteer',
  },
  openGraph: {
    title: 'Volunteer With Open Hearts Dating',
    description: 'Make a real difference in the lives of people with disabilities seeking love.',
    url: 'https://openheartsdating.com/volunteer',
  },
}

export default function VolunteerPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Join Our Team 🤝</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Help us build something meaningful. Whether you have 2 hours a week or 20, 
            your skills and passion can make a real difference.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>Why Volunteer With Us?</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
              textAlign: 'left'
            }}>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💙</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#667eea' }}>Make Real Impact</h3>
                <p style={{ lineHeight: '1.7', opacity: '0.9' }}>
                  Help 1.3 billion people with disabilities find love and connection
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#667eea' }}>Grow Your Skills</h3>
                <p style={{ lineHeight: '1.7', opacity: '0.9' }}>
                  Gain experience in nonprofit tech, accessibility, and community building
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌟</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#667eea' }}>Join Something Special</h3>
                <p style={{ lineHeight: '1.7', opacity: '0.9' }}>
                  Be part of a movement that believes everyone deserves love
                </p>
              </div>

              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💼</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#667eea' }}>Path to Paid Role</h3>
                <p style={{ lineHeight: '1.7', opacity: '0.9' }}>
                  Outstanding volunteers may join our core team as we grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="content-section content-section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How You Can Help</h2>
          
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Development */}
            <div style={{ 
              marginBottom: '2.5rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                💻 Platform Development
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Help us build the actual dating platform. We need developers who care about accessibility and inclusive design.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Skills needed:</p>
              <ul style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Frontend: React, Next.js, TypeScript</li>
                <li>Backend: Node.js, PostgreSQL, API design</li>
                <li>Accessibility: WCAG standards, screen reader testing</li>
                <li>Mobile: React Native (future)</li>
              </ul>
              <p style={{ fontSize: '0.95rem', opacity: '0.8', fontStyle: 'italic' }}>
                Time commitment: 5-10 hours/week
              </p>
            </div>

            {/* Grant Writing */}
            <div style={{ 
              marginBottom: '2.5rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                📝 Grant Writing & Fundraising
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Help us secure funding through grants and fundraising campaigns. Your writing can directly fund our mission.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>What you'll do:</p>
              <ul style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Research grant opportunities for disability-focused nonprofits</li>
                <li>Write compelling grant proposals</li>
                <li>Manage grant applications and reporting</li>
                <li>Help with donor outreach and campaigns</li>
              </ul>
              <p style={{ fontSize: '0.95rem', opacity: '0.8', fontStyle: 'italic' }}>
                Time commitment: 3-8 hours/week
              </p>
            </div>

            {/* Content & Social Media */}
            <div style={{ 
              marginBottom: '2.5rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                📱 Social Media & Content Creation
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Help us spread the word and build our community. Create content that resonates and inspires.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>What you'll do:</p>
              <ul style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Manage social media accounts (Twitter, Instagram, LinkedIn, Facebook)</li>
                <li>Create engaging posts and graphics</li>
                <li>Write blog posts and articles</li>
                <li>Engage with our growing community</li>
                <li>Track analytics and growth</li>
              </ul>
              <p style={{ fontSize: '0.95rem', opacity: '0.8', fontStyle: 'italic' }}>
                Time commitment: 4-6 hours/week
              </p>
            </div>

            {/* Press & Media Relations */}
            <div style={{ 
              marginBottom: '2.5rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                📰 Press & Media Relations
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Help us get media coverage and tell our story to the world. Connect us with journalists and publications.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>What you'll do:</p>
              <ul style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Write press releases and media kits</li>
                <li>Build relationships with journalists and bloggers</li>
                <li>Pitch our story to relevant publications</li>
                <li>Coordinate interviews and features</li>
                <li>Monitor media mentions</li>
              </ul>
              <p style={{ fontSize: '0.95rem', opacity: '0.8', fontStyle: 'italic' }}>
                Time commitment: 3-5 hours/week
              </p>
            </div>

            {/* Community Management */}
            <div style={{ 
              marginBottom: '2.5rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                💬 Community Management
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Be the heart of our community. Engage with members, gather feedback, and help create a welcoming space.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>What you'll do:</p>
              <ul style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Moderate Discord/Telegram community channels</li>
                <li>Welcome new members and answer questions</li>
                <li>Collect testimonials and user feedback</li>
                <li>Organize online events and discussions</li>
                <li>Build relationships with community members</li>
              </ul>
              <p style={{ fontSize: '0.95rem', opacity: '0.8', fontStyle: 'italic' }}>
                Time commitment: 5-7 hours/week
              </p>
            </div>

            {/* Donor Relations */}
            <div style={{ 
              marginBottom: '2.5rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                🤝 Donor Relations & Outreach
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Build relationships with donors and help secure sustainable funding for our mission.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>What you'll do:</p>
              <ul style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Research potential donors and sponsors</li>
                <li>Craft personalized outreach messages</li>
                <li>Maintain donor database and communications</li>
                <li>Send thank-you notes and updates</li>
                <li>Help plan fundraising campaigns</li>
              </ul>
              <p style={{ fontSize: '0.95rem', opacity: '0.8', fontStyle: 'italic' }}>
                Time commitment: 3-5 hours/week
              </p>
            </div>

            {/* Accessibility Testing */}
            <div style={{ 
              marginBottom: '2.5rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                ♿ Accessibility Testing & Advocacy
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Use your lived experience with disability to help us build a truly accessible platform.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>What you'll do:</p>
              <ul style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Test platform with assistive technologies</li>
                <li>Provide feedback on accessibility issues</li>
                <li>Suggest improvements from user perspective</li>
                <li>Participate in beta testing</li>
                <li>Advocate for inclusive design</li>
              </ul>
              <p style={{ fontSize: '0.95rem', opacity: '0.8', fontStyle: 'italic' }}>
                Time commitment: 2-4 hours/week
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="content-section">
        <div className="container">
          <div style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>🙋 Apply to Volunteer</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: '0.8' }}>
              Tell us about yourself and how you'd like to help
            </p>

            <form>
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name"
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
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
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
                <label htmlFor="role" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Which role interests you most? *
                </label>
                <select 
                  id="role"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                >
                  <option value="">Select a role...</option>
                  <option value="development">Platform Development</option>
                  <option value="grants">Grant Writing & Fundraising</option>
                  <option value="social">Social Media & Content</option>
                  <option value="press">Press & Media Relations</option>
                  <option value="community">Community Management</option>
                  <option value="donors">Donor Relations</option>
                  <option value="accessibility">Accessibility Testing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="hours" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Hours per week you can commit *
                </label>
                <select 
                  id="hours"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                >
                  <option value="">Select hours...</option>
                  <option value="2-4">2-4 hours/week</option>
                  <option value="5-9">5-9 hours/week</option>
                  <option value="10-15">10-15 hours/week</option>
                  <option value="16+">16+ hours/week</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="experience" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Relevant skills and experience *
                </label>
                <textarea 
                  id="experience"
                  required
                  rows={5}
                  placeholder="Tell us about your background, skills, and why you want to volunteer..."
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
                <label htmlFor="motivation" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Why do you want to help Open Hearts Dating? *
                </label>
                <textarea 
                  id="motivation"
                  required
                  rows={4}
                  placeholder="What motivates you to join our mission?"
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

              <button 
                type="submit" 
                className="button"
                style={{ 
                  width: '100%', 
                  fontSize: '1.1rem',
                  padding: '1rem'
                }}
              >
                Submit Application 🚀
              </button>

              <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '1rem', opacity: '0.7' }}>
                We review applications within 5 business days
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>What Happens Next?</h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'left',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Step 1</h3>
                <p style={{ opacity: '0.9' }}>
                  We review your application (usually within 5 days)
                </p>
              </div>

              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💬</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Step 2</h3>
                <p style={{ opacity: '0.9' }}>
                  Quick video call to get to know each other
                </p>
              </div>

              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Step 3</h3>
                <p style={{ opacity: '0.9' }}>
                  Start contributing and making impact!
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
                <strong>Questions?</strong> Email us at <a href="mailto:contact@openheartsdating.com" style={{ color: '#667eea' }}>contact@openheartsdating.com</a>
                <br/>
                We're excited to have you on our team! 💙
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
