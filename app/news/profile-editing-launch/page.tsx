import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Profile Editing & UI Improvements Are Live',
  description: 'Major update: full profile editing and beautiful new design on Open Hearts Dating. Upload photos, update your bio, and customize your profile.',
  openGraph: {
    title: 'Profile Editing & UI Improvements Are Live',
    description: 'Full profile editing and beautiful new accessible design.',
    type: 'article',
    publishedTime: '2026-01-18T00:00:00Z',
  },
}

export default function ProfileEditingLaunchNews() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Back Link */}
      <Link 
        href="/news" 
        style={{ 
          color: '#667eea', 
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '2rem'
        }}
      >
        ← Back to News
      </Link>

      {/* Header */}
      <header style={{ marginBottom: '3rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '1rem',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <time dateTime="2026-01-18">January 18, 2026</time>
          <span>•</span>
          <span>5 min read</span>
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          🎉 Major Update: Profile Editing & UI Improvements Are Live!
        </h1>

        <p style={{ 
          fontSize: '1.25rem', 
          color: '#666',
          lineHeight: '1.6'
        }}>
          We're excited to announce a significant milestone in Open Hearts Dating's journey toward launch!
        </p>
      </header>

      {/* Feature Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        marginBottom: '3rem',
        borderRadius: '16px',
        overflow: 'hidden'
      }}>
        <Image
          src="/images/news/profile-editing-launch.jpg"
          alt="Illustration of people customizing their dating profiles with joy and excitement"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Content */}
      <div style={{ lineHeight: '1.8', color: '#333' }}>
        
        {/* Section 1 */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.75rem', 
            marginBottom: '1rem',
            color: '#667eea'
          }}>
            What's New
          </h2>

          <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            ✨ Full Profile Editing
          </h3>
          
          <p>You can now customize your profile exactly how you want it:</p>

          <ul style={{ 
            marginLeft: '1.5rem', 
            marginBottom: '1.5rem',
            lineHeight: '2'
          }}>
            <li><strong>Upload Your Photo</strong> — Show your authentic self with profile pictures</li>
            <li><strong>Update Your Bio</strong> — Tell your story in your own words</li>
            <li><strong>Edit Details</strong> — Location, interests, what you're looking for</li>
            <li><strong>Change Anytime</strong> — Your profile, your control</li>
          </ul>

          <p>
            All profile changes are saved securely to our database, and your photos are stored with 
            industry-standard security. We've built this with accessibility in mind—every field works 
            perfectly with screen readers and keyboard navigation.
          </p>

          <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🎨 Beautiful New Design
          </h3>

          <p>
            We've completely refreshed our user interface to make Open Hearts Dating more modern, 
            accessible, and enjoyable to use:
          </p>

          <ul style={{ 
            marginLeft: '1.5rem', 
            marginBottom: '1.5rem',
            lineHeight: '2'
          }}>
            <li><strong>Smoother Animations</strong> — Subtle, elegant transitions that feel professional</li>
            <li><strong>Better Contrast</strong> — Improved readability for users with visual impairments</li>
            <li><strong>Larger Touch Targets</strong> — Easier to use on mobile and for users with motor disabilities</li>
            <li><strong>Consistent Design</strong> — Every button, card, and form now follows the same beautiful style</li>
          </ul>

          <p>
            The new design respects your preferences—if you have motion sensitivity settings enabled, 
            animations automatically adjust.
          </p>
        </section>

        {/* Callout Box */}
        <div style={{
          padding: '2rem',
          background: '#f0f4ff',
          borderLeft: '4px solid #667eea',
          borderRadius: '8px',
          marginBottom: '3rem'
        }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '0.5rem',
            color: '#667eea'
          }}>
            Why This Matters
          </h3>
          <p style={{ marginBottom: 0 }}>
            These updates represent more than just new features. They're proof that we're building 
            something real, something that works, something that puts <em>you</em> first.
          </p>
        </div>

        {/* Section 2 */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.75rem', 
            marginBottom: '1rem',
            color: '#667eea'
          }}>
            What's Next
          </h2>

          <p>We're not slowing down. Here's what's coming in the next few weeks:</p>

          <ul style={{ 
            marginLeft: '1.5rem', 
            marginBottom: '1.5rem',
            lineHeight: '2'
          }}>
            <li><strong>SOS & Mutual Aid Module</strong> — Community support when you need it most</li>
            <li><strong>Enhanced Messaging</strong> — Rich media, voice messages, better accessibility</li>
            <li><strong>Success Stories Section</strong> — Real couples, real connections</li>
            <li><strong>Mobile App Beta</strong> — Native iOS and Android apps</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '2rem',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ 
            fontSize: '1.75rem', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            Try It Now
          </h2>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            Already have an account? Log in and explore your new profile editing page!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/login"
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Log In
            </Link>
            <Link 
              href="/signup"
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Sign Up
            </Link>
          </div>
        </section>

        {/* Thank You */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.75rem', 
            marginBottom: '1rem',
            color: '#667eea'
          }}>
            Thank You
          </h2>
          <p>
            To everyone who's joined our early access program, provided feedback, and believed in 
            this mission—thank you. You're not just users. You're co-builders of something that 
            will change lives.
          </p>
          <p style={{ fontWeight: 600, color: '#667eea' }}>
            We're building Open Hearts Dating <em>with</em> you, not just <em>for</em> you.
          </p>
          <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
            With love,<br />
            <strong>The Open Hearts Dating Team</strong>
          </p>
        </section>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '3rem 0' }} />

        {/* Related Links */}
        <section style={{ marginBottom: '3rem' }}>
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#666',
            marginBottom: '1rem'
          }}>
            <em>Have feedback on these updates? We'd love to hear from you!</em>
          </p>
          
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🔗 Related:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/mission" style={{ color: '#667eea' }}>
                Learn About Our Mission
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/platform-preview/verify" style={{ color: '#667eea' }}>
                Explore Verification Process
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/volunteer" style={{ color: '#667eea' }}>
                Volunteer With Us
              </Link>
            </li>
          </ul>
        </section>

        {/* Share Section */}
        <section style={{
          padding: '2rem',
          background: '#f9fafb',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h4 style={{ marginBottom: '1rem' }}>Share this update</h4>
          <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Help spread the word about accessible dating for everyone.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://twitter.com/intent/tweet?text=Check%20out%20Open%20Hearts%20Dating%20-%20the%20first%20truly%20accessible%20dating%20platform!&url=https://openheartsdating.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                background: '#1DA1F2',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              Share on Twitter
            </a>
            <a 
              href="https://www.facebook.com/sharer/sharer.php?u=https://openheartsdating.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                background: '#4267B2',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              Share on Facebook
            </a>
          </div>
        </section>

      </div>

      {/* Back to News */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link 
          href="/news"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#f3f4f6',
            color: '#667eea',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          ← Back to All News
        </Link>
      </div>
    </article>
  )
}
