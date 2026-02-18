import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Newsletter — Stay Updated',
  description: 'Subscribe to our newsletter and get the latest updates about Open Hearts Dating. Platform updates, dating tips, success stories, and community events.',
  alternates: {
    canonical: '/newsletter',
  },
  openGraph: {
    title: 'Subscribe to Open Hearts Dating Newsletter',
    description: 'Get the latest updates about accessible dating delivered to your inbox.',
    url: 'https://openheartsdating.com/newsletter',
  },
}

export default function NewsletterPage() {
  return (
    <>
      {/* MailerLite Universal Script */}
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2031376');
        `}
      </Script>

      <section className="hero">
        <div className="container">
          <h1>Stay Updated 💌</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Get the latest news, features, and stories about Open Hearts Dating delivered to your inbox.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            
            {/* What You'll Get */}
            <div style={{ 
              marginBottom: '3rem',
              padding: '2rem',
              background: '#f9fafb',
              borderRadius: '12px'
            }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                What You'll Get
              </h2>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <span style={{ fontSize: '1.5rem' }}>📰</span>
                  <div>
                    <strong>Platform Updates</strong>
                    <p style={{ margin: '0.25rem 0 0', color: '#666' }}>
                      Be the first to know about new features and improvements
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <span style={{ fontSize: '1.5rem' }}>💡</span>
                  <div>
                    <strong>Dating Tips</strong>
                    <p style={{ margin: '0.25rem 0 0', color: '#666' }}>
                      Advice for meaningful connections and accessible dating
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <span style={{ fontSize: '1.5rem' }}>❤️</span>
                  <div>
                    <strong>Success Stories</strong>
                    <p style={{ margin: '0.25rem 0 0', color: '#666' }}>
                      Inspiring stories from our community members
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <span style={{ fontSize: '1.5rem' }}>🎉</span>
                  <div>
                    <strong>Community Events</strong>
                    <p style={{ margin: '0.25rem 0 0', color: '#666' }}>
                      Virtual meetups, Q&As, and special announcements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Form */}
            <div style={{
              padding: '3rem 2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              marginBottom: '3rem'
            }}>
              <h2 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1rem',
                textAlign: 'center',
                color: 'var(--primary)'
              }}>
                Subscribe to Our Newsletter
              </h2>
              <p style={{ 
                textAlign: 'center', 
                color: '#666',
                marginBottom: '2rem',
                fontSize: '1.1rem'
              }}>
                Join our community and never miss an update!
              </p>

              {/* MailerLite Embedded Form */}
              <div className="ml-embedded" data-form="nIiPAl"></div>
            </div>

            {/* Privacy Note */}
            <div style={{
              padding: '1.5rem',
              background: '#f0f4ff',
              borderRadius: '8px',
              borderLeft: '4px solid var(--primary)',
              marginBottom: '2rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>
                <strong>🔒 Your privacy matters:</strong> We'll never share your email address. 
                You can unsubscribe anytime with one click. We typically send 1-2 emails per month.
              </p>
            </div>

            {/* Additional CTAs */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '3rem'
            }}>
              <a href="/news" style={{
                padding: '1rem',
                background: '#f9fafb',
                borderRadius: '8px',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#333',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📰</div>
                <strong>Read News</strong>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Latest updates
                </p>
              </a>

              <a href="/join" style={{
                padding: '1rem',
                background: '#f9fafb',
                borderRadius: '8px',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#333',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</div>
                <strong>Join Platform</strong>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Early access
                </p>
              </a>

              <a href="/volunteer" style={{
                padding: '1rem',
                background: '#f9fafb',
                borderRadius: '8px',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#333',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤝</div>
                <strong>Volunteer</strong>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Help us build
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
