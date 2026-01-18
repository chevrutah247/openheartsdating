import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Latest news and updates from Open Hearts Dating.',
}

export default function NewsPage() {
  const news = [
    {
      id: 8,
      date: 'January 17, 2026',
      title: 'Identity Verification System Launched 🔐',
      excerpt: 'Your safety is our priority. We've launched a comprehensive identity verification system to ensure every connection is genuine.',
      image: '/images/verification-launch.jpg',
      imageAlt: 'Shield icon representing security and trust in online dating',
      content: `Today marks a major milestone for Open Hearts Dating: we're launching our identity verification system to make our platform safer for everyone.`
    },
    {
      id: 7,
      date: 'January 16, 2026',
      title: 'Profiles Are Live! Create Yours Today 🎉',
      excerpt: 'Your journey to meaningful connection starts now. Create your profile and let others see the real you.',
      image: '/images/profile-creation-live.jpg',
      imageAlt: 'Person creating their dating profile on laptop',
      content: `We're thrilled to announce: Profile creation is now live! After months of development and careful consideration of accessibility needs, you can now create your complete dating profile on Open Hearts Dating.`
    },
    {
      id: 6,
      date: 'January 13, 2026',
      title: 'Volunteer Program Launched! Join Our Team 🤝',
      excerpt: 'Want to make a real impact? Our volunteer program is now open.',
      image: '/images/early-access-celebration.jpg',
      imageAlt: 'Team celebrating together',
    },
    {
      id: 5,
      date: 'January 12, 2026',
      title: 'Early Access Is Open! 🎉',
      excerpt: 'Join our Early Access program today.',
      image: '/images/mission-community.jpg',
      imageAlt: 'Community gathering',
    },
    {
      id: 4,
      date: 'December 28, 2025',
      title: 'Why Accessibility Matters',
      excerpt: 'Accessibility is our foundation.',
      image: '/images/accessibility-work.jpg',
      imageAlt: 'Person using assistive technology',
    },
    {
      id: 3,
      date: 'December 15, 2025',
      title: 'Building in Public',
      excerpt: 'Transparency in development.',
      image: '/images/team-working.jpg',
      imageAlt: 'Team collaborating',
    },
    {
      id: 2,
      date: 'December 1, 2025',
      title: 'The Numbers Behind the Need',
      excerpt: '1.3 billion people deserve better.',
      image: '/images/couple-walking.jpg',
      imageAlt: 'Couple walking together',
    },
    {
      id: 1,
      date: 'November 15, 2025',
      title: 'Welcome to Open Hearts Dating',
      excerpt: 'Building something different.',
      image: '/images/dating-app-phone.jpg',
      imageAlt: 'Dating app on phone',
    }
  ]

  const getFullContent = (id: number) => {
    switch(id) {
      case 8:
        return (
          <div>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Today marks a major milestone for Open Hearts Dating: we're launching our identity verification system to make our platform safer for everyone.
            </p>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              Why Verification Matters:
            </h3>

            <p style={{ marginBottom: '1.5rem' }}>
              Open Hearts Dating connects individuals who may be emotionally, socially, or physically vulnerable. Unlike other dating platforms that treat safety as an afterthought, we believe verification is essential—not optional.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🛡️ Protection From Fake Profiles</h4>
              <p>Every verified user has submitted a government-issued ID. This dramatically reduces catfishing, scams, and fake accounts that plague other platforms.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✅ Trust At First Sight</h4>
              <p>Verified profiles display a badge so you know immediately that the person you're talking to is real. No more wondering if someone is who they claim to be.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🔒 Your Privacy Protected</h4>
              <p>Your documents are encrypted, reviewed only by trained staff, and never shared. You can request deletion at any time.</p>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              How It Works:
            </h3>

            <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li><strong>Upload your ID</strong> — Passport, driver's license, or national ID card</li>
              <li><strong>Quick review</strong> — Our team verifies within 24-72 hours</li>
              <li><strong>Get verified</strong> — Receive your verification badge</li>
              <li><strong>Connect safely</strong> — Start meeting real, verified people</li>
            </ol>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              Accepted Documents:
            </h3>

            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>🪪 National ID Card</li>
              <li>🛂 Passport</li>
              <li>🚗 Driver's License</li>
              <li>📄 Other Government-Issued ID</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              Our Commitment:
            </h3>

            <p style={{ marginBottom: '1.5rem' }}>
              We understand that sharing personal documents requires trust. Here's our promise to you:
            </p>

            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li><strong>Encryption</strong> — All documents are encrypted at rest and in transit</li>
              <li><strong>Limited access</strong> — Only trained verification staff can view documents</li>
              <li><strong>No sharing</strong> — We never sell or share your information</li>
              <li><strong>Right to delete</strong> — Request deletion of your documents anytime</li>
            </ul>

            <p style={{ fontSize: '1.15rem', fontStyle: 'italic', padding: '1.5rem', background: '#f0f4ff', borderRadius: '8px', marginTop: '2rem' }}>
              "Verification is not about restriction. It's about protecting real people who deserve real connections."
            </p>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="/verify" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Get Verified Now →
              </a>
            </div>
          </div>
        )
      case 7:
        return (
          <div>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              After months of development and careful consideration of accessibility needs, you can now create your complete dating profile on Open Hearts Dating.
            </p>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              What You Can Do Now:
            </h3>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✨ Tell Your Story</h4>
              <p>Share who you are through a personalized profile. Include your interests, what makes you unique, and what you're looking for in a connection.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📍 Show Your Location</h4>
              <p>Let others know where you're based. Whether you're looking for someone nearby or open to long-distance connections, you're in control.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>♿ Optional Disability Information</h4>
              <p>Share details about your disability type if you're comfortable. This helps us provide better accessibility features and can help you connect with others who understand your experiences.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🎭 Be Authentic</h4>
              <p>Choose how you want to present yourself. Use your real name or a display name—whatever makes you feel comfortable and safe.</p>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              Why This Matters:
            </h3>

            <p style={{ marginBottom: '1.5rem' }}>
              Most dating platforms treat profiles as an afterthought. We built ours from the ground up with accessibility in mind:
            </p>

            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li><strong>Screen reader optimized</strong> - Every field has clear labels and descriptions</li>
              <li><strong>Keyboard navigation</strong> - No mouse needed</li>
              <li><strong>High contrast mode</strong> - Easy to read for everyone</li>
              <li><strong>Voice input supported</strong> - Type or speak your bio</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              What's Coming Next:
            </h3>

            <p style={{ marginBottom: '1rem' }}>
              This is just the beginning! In the coming weeks, we'll be adding:
            </p>

            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>📸 Photo upload (with AI alt-text generation)</li>
              <li>🎨 Customizable profile themes</li>
              <li>🔍 Profile visibility controls</li>
              <li>💬 Profile questions for better matching</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
              Create Your Profile Today:
            </h3>

            <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Log in to your account</li>
              <li>Click "Create Profile" on your dashboard</li>
              <li>Fill out your information (takes 5 minutes)</li>
              <li>Start connecting with others!</li>
            </ol>

            <p style={{ fontSize: '1.15rem', fontStyle: 'italic', padding: '1.5rem', background: '#f0f4ff', borderRadius: '8px', marginTop: '2rem' }}>
              We can't wait to see the amazing community you build together. Every profile created brings us one step closer to a world where everyone can find love without barriers.
            </p>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="/signup" className="button" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Create Your Profile →
              </a>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Follow our journey as we build Open Hearts Dating.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {news.map((article) => (
              <article 
                key={article.id}
                style={{ 
                  marginBottom: '4rem',
                  paddingBottom: '3rem',
                  borderBottom: article.id !== 1 ? '1px solid #e5e7eb' : 'none'
                }}
              >
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  height: '400px',
                  marginBottom: '2rem',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={article.id === 8}
                  />
                </div>

                <div style={{ fontSize: '0.95rem', color: '#667eea', marginBottom: '0.5rem', fontWeight: '600' }}>
                  {article.date}
                </div>
                
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  {article.title}
                </h2>
                
                <p style={{ fontSize: '1.15rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                  {article.excerpt}
                </p>

                {(article.id === 8 || article.id === 7) && (
                  <div style={{ marginTop: '2rem', color: '#333', lineHeight: '1.8' }}>
                    {getFullContent(article.id)}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div style={{
            maxWidth: '900px',
            margin: '4rem auto 0',
            padding: '3rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
              Join our community and start connecting with others who understand your story.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/join" className="button" style={{ 
                background: 'white', 
                color: '#667eea',
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}>
                Join Early Access
              </a>
              <a href="/volunteer" className="button button-secondary" style={{ 
                background: 'transparent',
                border: '2px solid white',
                color: 'white',
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}>
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
