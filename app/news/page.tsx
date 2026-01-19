'use client'

import Link from 'next/link'

export default function NewsPage() {
  const news = [
    {
      id: 12,
      date: 'January 19, 2026',
      title: '💼 Job Board Launches — Accessible Employment for All',
      excerpt: 'Find accessible employment opportunities or post jobs for candidates with disabilities. Our new job board connects inclusive employers with talented candidates.',
      slug: 'job-board-launch',
      image: '/images/news/job-board-launch.jpg'
    },
    {
      id: 11,
      date: 'January 19, 2026',
      title: '🗣️ Community Forum Now Live!',
      excerpt: 'Connect, share, and support each other in our new community forum built by and for people with disabilities.',
      slug: 'forum-launch',
      image: '/images/news/forum-launch.jpg'
    },
    {
      id: 10,
      date: 'January 18, 2026',
      title: '🎉 Major Update: Profile Editing & UI Improvements Are Live!',
      excerpt: "We're excited to announce profile editing, photo uploads, and a completely refreshed user interface. Read about all the improvements.",
      slug: 'profile-editing-launch',
      image: '/images/news/profile-editing-launch.jpg'
    },
    {
      id: 9,
      date: 'January 18, 2026',
      title: 'Platform MVP Is Live! 🚀',
      excerpt: 'Our core dating features are now available. This is just the beginning — help us grow into something bigger.',
      slug: 'mvp-launch',
      image: '/images/mvp-launch.jpg'
    },
    {
      id: 8,
      date: 'January 17, 2026',
      title: 'Identity Verification System Launched 🔐',
      excerpt: "Your safety is our priority. We've launched a comprehensive identity verification system to ensure every connection is genuine.",
      slug: 'verification-launch',
      image: '/images/verification-launch.jpg'
    },
    {
      id: 7,
      date: 'January 16, 2026',
      title: 'Profiles Are Live! Create Yours Today 🎉',
      excerpt: 'Your journey to meaningful connection starts now. Create your profile and let others see the real you.',
      slug: 'profiles-launch',
      image: '/images/profile-creation-live.jpg'
    },
    {
      id: 6,
      date: 'January 13, 2026',
      title: 'Volunteer Program Launched! Join Our Team 🤝',
      excerpt: 'Want to make a real impact? Our volunteer program is now open. Join us in building something meaningful.',
      slug: 'volunteer-program',
      image: '/images/early-access-celebration.jpg'
    },
    {
      id: 5,
      date: 'January 12, 2026',
      title: 'Early Access Is Open! 🎉',
      excerpt: 'Join our Early Access program today and be among the first to experience Open Hearts Dating.',
      slug: 'early-access-open',
      image: '/images/mission-community.jpg'
    },
    {
      id: 4,
      date: 'December 28, 2025',
      title: 'Why Accessibility Matters',
      excerpt: 'Accessibility is our foundation. Learn why we built Open Hearts Dating with accessibility first.',
      slug: 'why-accessibility',
      image: '/images/accessibility-work.jpg'
    },
    {
      id: 3,
      date: 'December 15, 2025',
      title: 'Building in Public',
      excerpt: 'Transparency in development. Follow our journey as we build Open Hearts Dating openly.',
      slug: 'building-in-public',
      image: '/images/team-working.jpg'
    },
    {
      id: 2,
      date: 'December 1, 2025',
      title: 'The Numbers Behind the Need',
      excerpt: '1.3 billion people with disabilities deserve better. Here is why we are building this.',
      slug: 'numbers-behind-need',
      image: '/images/couple-walking.jpg'
    },
    {
      id: 1,
      date: 'November 15, 2025',
      title: 'Welcome to Open Hearts Dating',
      excerpt: 'Building something different. Our mission to create an accessible dating platform for everyone.',
      slug: 'welcome',
      image: '/images/dating-app-phone.jpg'
    }
  ]

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
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {news.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                style={{
                  display: 'block',
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}
                className="news-card"
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  overflow: 'hidden'
                }}>
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <time style={{ 
                    display: 'block',
                    color: '#667eea', 
                    fontSize: '0.875rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {article.date}
                  </time>
                  
                  <h2 style={{ 
                    fontSize: '1.25rem', 
                    marginBottom: '0.75rem',
                    color: '#333',
                    lineHeight: '1.3'
                  }}>
                    {article.title}
                  </h2>
                  
                  <p style={{ 
                    color: '#666', 
                    margin: 0,
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {article.excerpt}
                  </p>

                  <div style={{
                    marginTop: '1rem',
                    color: '#667eea',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Read more →
                  </div>
                </div>
              </Link>
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

      {/* Add hover effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .news-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
          }
        `
      }} />
    </>
  )
}
