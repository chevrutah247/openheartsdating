import type { Metadata } from 'next'
import './news.css'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Latest news, updates, and announcements from Open Hearts Dating community',
}

// Здесь будут храниться новости (пока в коде, потом можно перенести в CMS)
const newsItems = [
  {
    id: 1,
    date: '2025-01-11',
    title: 'Welcome to Open Hearts Dating News',
    excerpt: 'We are excited to launch our news section where we will share updates, success stories, and important announcements from our community.',
    content: `
      <p>Welcome to the Open Hearts Dating news section! This is where we'll keep you updated on:</p>
      <ul>
        <li><strong>Platform Updates:</strong> New features and improvements</li>
        <li><strong>Success Stories:</strong> Inspiring connections from our community</li>
        <li><strong>Events:</strong> Upcoming meetups and online gatherings</li>
        <li><strong>Resources:</strong> Dating tips and accessibility guides</li>
        <li><strong>Community News:</strong> Important announcements and milestones</li>
      </ul>
      <p>Stay tuned for regular updates as we grow our inclusive dating community together!</p>
    `,
    category: 'Announcement',
  },
  {
    id: 2,
    date: '2025-01-10',
    title: 'Platform Launch: Building an Inclusive Future',
    excerpt: 'Open Hearts Dating officially launches with a mission to create meaningful connections in an accessible, safe environment.',
    content: `
      <p>Today marks an important milestone as Open Hearts Dating opens its doors to the community. Our platform was built from the ground up with accessibility and inclusivity at its core.</p>
      
      <h3>What Makes Us Different</h3>
      <p>Unlike traditional dating platforms, Open Hearts Dating prioritizes:</p>
      <ul>
        <li>Full WCAG 2.1 AA accessibility compliance</li>
        <li>Screen reader optimization throughout the platform</li>
        <li>Ethical, nonprofit approach with no hidden costs</li>
        <li>Community-driven safety features and moderation</li>
        <li>Focus on meaningful connections over superficial matching</li>
      </ul>
      
      <h3>Join Our Community</h3>
      <p>We invite you to be part of this journey. Whether you're looking for friendship, companionship, or romance, Open Hearts Dating welcomes you with open arms.</p>
    `,
    category: 'Platform',
  },
]

export default function NewsPage() {
  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p className="hero-description">
            Stay informed about the latest developments, success stories, and community announcements from Open Hearts Dating.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="news-content">
        <div className="container">
          <div className="news-grid">
            {newsItems.map((news) => (
              <article key={news.id} className="news-card">
                <div className="news-meta">
                  <span className="news-category">{news.category}</span>
                  <time dateTime={news.date} className="news-date">
                    {new Date(news.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                
                <h2 className="news-title">{news.title}</h2>
                
                <p className="news-excerpt">{news.excerpt}</p>
                
                <div 
                  className="news-content-body"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
              </article>
            ))}
          </div>

          {/* Placeholder for future news */}
          <div className="news-footer">
            <p className="text-center">
              More news coming soon! Check back regularly for updates from our community.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
