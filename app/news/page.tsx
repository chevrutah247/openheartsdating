import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News & Updates — Open Hearts Dating',
  description: 'Latest news, updates, and announcements from Open Hearts Dating. Stay informed about our progress building an accessible dating platform.',
}

const newsArticles = [
  {
    id: 14,
    slug: 'gofundme-campaign',
    title: 'Help Us Build Love Without Barriers',
    excerpt: 'Support our GoFundMe campaign to create the first truly accessible dating platform for 1.3 billion people with disabilities.',
    date: 'January 19, 2026',
    category: 'Fundraising',
    emoji: '💙',
    color: '#667eea'
  },
  {
    id: 13,
    slug: 'gofundme-launch',
    title: 'Support Our Mission: GoFundMe Campaign Live',
    excerpt: 'Our nonprofit fundraising campaign is now live. Help us build an accessible dating platform for everyone.',
    date: 'January 18, 2026',
    category: 'Fundraising',
    emoji: '💙',
    color: '#667eea'
  },
  {
    id: 12,
    slug: 'job-board-launch',
    title: 'Introducing Our Job Board',
    excerpt: 'Find inclusive employment opportunities with our new accessible job board, connecting talented individuals with disability-friendly employers.',
    date: 'January 17, 2026',
    category: 'Product Launch',
    emoji: '💼',
    color: '#10b981'
  },
  {
    id: 11,
    slug: 'forum-launch',
    title: 'Community Forum Now Live',
    excerpt: 'Connect, share, and support each other in our new accessible community forum. More than just dating — building real connections.',
    date: 'January 16, 2026',
    category: 'Product Launch',
    emoji: '💬',
    color: '#10b981'
  },
  {
    id: 10,
    slug: 'binary-gender-update',
    title: 'Important Update on Gender Options',
    excerpt: 'Addressing our recent mistake and our commitment to true inclusivity for all gender identities.',
    date: 'January 15, 2026',
    category: 'Community',
    emoji: '🏳️‍🌈',
    color: '#f59e0b'
  },
  {
    id: 9,
    slug: 'messages-redesign',
    title: 'New Messages Experience',
    excerpt: 'Our messaging system gets a major upgrade with improved accessibility, better organization, and enhanced privacy features.',
    date: 'January 14, 2026',
    category: 'Product Update',
    emoji: '💬',
    color: '#3b82f6'
  },
  {
    id: 8,
    slug: 'profile-editing',
    title: 'Enhanced Profile Editing',
    excerpt: 'New profile editing features make it easier than ever to express yourself authentically while maintaining full accessibility.',
    date: 'January 13, 2026',
    category: 'Product Update',
    emoji: '✏️',
    color: '#3b82f6'
  },
  {
    id: 7,
    slug: 'seo-improvements',
    title: 'Making Open Hearts More Discoverable',
    excerpt: 'Behind-the-scenes improvements to help more people find our platform and join our inclusive community.',
    date: 'January 12, 2026',
    category: 'Platform',
    emoji: '🔍',
    color: '#8b5cf6'
  },
  {
    id: 6,
    slug: 'design-system',
    title: 'A Fresh New Look',
    excerpt: 'Introducing our refined design system: more accessible, more beautiful, and more inclusive than ever.',
    date: 'January 11, 2026',
    category: 'Design',
    emoji: '🎨',
    color: '#ec4899'
  },
  {
    id: 5,
    slug: 'homepage-launch',
    title: 'Welcome to Our New Homepage',
    excerpt: 'Experience our redesigned homepage built with accessibility at its core. Clear, welcoming, and easy to navigate.',
    date: 'January 10, 2026',
    category: 'Product Launch',
    emoji: '🏠',
    color: '#10b981'
  },
  {
    id: 4,
    slug: 'database-update',
    title: 'Stronger Foundations',
    excerpt: 'Major database improvements ensure faster performance, better security, and room to grow as our community expands.',
    date: 'January 9, 2026',
    category: 'Platform',
    emoji: '🗄️',
    color: '#8b5cf6'
  },
  {
    id: 3,
    slug: 'navigation-redesign',
    title: 'Smoother Navigation Experience',
    excerpt: 'Our navigation just got smarter with improved accessibility, better mobile support, and intuitive user flows.',
    date: 'January 8, 2026',
    category: 'Product Update',
    emoji: '🧭',
    color: '#3b82f6'
  },
  {
    id: 2,
    slug: 'beta-testing',
    title: 'Beta Testing Program Opens',
    excerpt: 'Be among the first to try Open Hearts Dating. Join our beta program and help shape the future of accessible online dating.',
    date: 'January 5, 2026',
    category: 'Community',
    emoji: '🧪',
    color: '#f59e0b'
  },
  {
    id: 1,
    slug: 'welcome',
    title: 'Welcome to Open Hearts Dating',
    excerpt: 'Introducing the first truly accessible dating platform built for people with disabilities. Love without barriers starts here.',
    date: 'January 1, 2026',
    category: 'Announcement',
    emoji: '💙',
    color: '#667eea'
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Stay up to date with the latest from Open Hearts Dating
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="content-section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="card"
                style={{
                  textDecoration: 'none',
                  border: '1px solid #f3f4f6'
                }}
              >
                {/* Category Badge */}
                <div style={{
                  display: 'inline-block',
                  background: `${article.color}15`,
                  color: article.color,
                  padding: '0.4rem 0.8rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {article.emoji} {article.category}
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.75rem',
                  color: '#1f2937',
                  lineHeight: '1.3'
                }}>
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p style={{
                  color: '#6b7280',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {article.excerpt}
                </p>

                {/* Date */}
                <time style={{
                  fontSize: '0.9rem',
                  color: '#9ca3af'
                }}>
                  {article.date}
                </time>
              </Link>
            ))}
          </div>

          {/* Stay Updated CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
              Never Miss an Update
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95 }}>
              Subscribe to our newsletter for the latest news and platform updates
            </p>
            <Link
              href="/newsletter"
              className="button"
              style={{
                background: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '700'
              }}
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
