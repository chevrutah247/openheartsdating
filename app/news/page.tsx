import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Latest news and updates from Open Hearts Dating.',
}

export default function NewsPage() {
  const news = [
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
                    priority={article.id === 6}
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
