import type { Metadata } from 'next'
import './news.css'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Latest news, updates, and announcements from Open Hearts Dating community',
}

// Здесь будут храниться новости (пока в коде, потом можно перенести в CMS)
const newsItems = [
  {
    id: 4,
    date: '2025-01-12',
    title: 'We Rewrote Our Story—Because It Was Always About You',
    excerpt: 'We listened to your feedback and completely transformed our website. Less business talk, more heart. Because this was never about money—it was always about people.',
    content: `
      <p>If you visited our site yesterday, you might notice something different today. Everything has changed. And we want to tell you why.</p>
      
      <h3>We Heard You</h3>
      <p>Some of you reached out and said, honestly: "Your site sounds like you're trying to attract investors, not people looking for love."</p>
      
      <p>You were right. And it hurt to hear—but in a good way. The kind of hurt that makes you realize you've lost sight of what matters.</p>
      
      <h3>What Changed</h3>
      <p>We went back to basics. We asked ourselves: <em>Why are we really doing this?</em></p>
      
      <p>Not for the "$8.4 billion market gap." Not to "disrupt the industry." Not to impress investors with metrics and projections.</p>
      
      <p>We're doing this because our friend Alex got ghosted after mentioning his wheelchair. Because Maria couldn't use dating apps with her screen reader. Because 1.3 billion people deserve to feel those butterflies when someone special messages them.</p>
      
      <p>So we rewrote everything. Every page. Every word. Here's what's different:</p>
      
      <ul>
        <li><strong>Home page:</strong> Instead of "trust crisis" and "market opportunities," we talk about YOU deserving love. Because you do.</li>
        <li><strong>Mission page:</strong> Instead of competitive advantages, we share why we started—real stories from real people who felt invisible.</li>
        <li><strong>Dating page:</strong> Instead of technical specs, we painted a picture of how it will FEEL to use our platform. Like coming home.</li>
      </ul>
      
      <h3>The Honest Truth</h3>
      <p>We're still building. We don't have a magic launch date. We're not even fully funded yet.</p>
      
      <p>But we're being honest about that now. Because you deserve honesty more than you deserve marketing hype.</p>
      
      <p>This platform is being built <strong>with you</strong>, not just <em>for you</em>. Your voice matters. Your experience matters. Your feedback literally changed our entire website in 24 hours—that's how much you matter.</p>
      
      <h3>What This Means Going Forward</h3>
      <p>We promise to keep this human. Keep this real. When we make mistakes, we'll own them. When we need help, we'll ask for it. When we don't know something, we'll say so.</p>
      
      <p>This isn't a startup trying to get rich. This is a community trying to help people find love. There's a difference, and we're going to honor that difference every single day.</p>
      
      <h3>Thank You</h3>
      <p>To everyone who gave us feedback—thank you. You made us better. You reminded us why we're here.</p>
      
      <p>To everyone reading this—welcome. This is your community. Help us build it right.</p>
      
      <p style="margin-top: 2rem; font-style: italic;">With love and humility,<br/>The Open Hearts Dating Team</p>
    `,
    category: 'Announcement',
  },
  {
    id: 3,
    date: '2025-01-11',
    title: 'News Section Now Live - Stay Connected with Our Community',
    excerpt: 'We have launched our dedicated news section to keep you updated on platform improvements, success stories, and community events.',
    content: `
      <p>We're thrilled to announce the launch of our dedicated news section! This new addition to Open Hearts Dating is your central hub for staying informed about everything happening in our community.</p>
      
      <h3>What You'll Find Here</h3>
      <p>Our news section will regularly feature:</p>
      <ul>
        <li><strong>Platform Updates:</strong> Learn about new features and improvements as we continuously enhance your experience</li>
        <li><strong>Success Stories:</strong> Be inspired by real connections made through our platform</li>
        <li><strong>Community Events:</strong> Stay informed about virtual meetups, webinars, and gatherings</li>
        <li><strong>Dating Resources:</strong> Access helpful tips, guides, and advice for meaningful connections</li>
        <li><strong>Important Announcements:</strong> Be the first to know about significant developments and milestones</li>
      </ul>
      
      <h3>Why This Matters</h3>
      <p>Transparency and communication are core values at Open Hearts Dating. This news section demonstrates our commitment to keeping you informed about how we're growing and improving. We believe an engaged, well-informed community is a stronger community.</p>
      
      <h3>Stay Updated</h3>
      <p>Check back regularly for new posts, or bookmark this page to never miss an update. We're committed to posting fresh content multiple times per month, ensuring you're always in the loop about what's happening at Open Hearts Dating.</p>
      
      <p>Thank you for being part of our journey toward creating a more inclusive, accessible dating experience for everyone!</p>
    `,
    category: 'Platform',
  },
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
