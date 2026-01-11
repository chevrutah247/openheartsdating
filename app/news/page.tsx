import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project News — Open Hearts Dating',
  description: 'Follow our progress as we build an accessible dating platform for people with disabilities. Updates, milestones, and community stories.',
}

export default function NewsPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Project News & Updates</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Follow our journey as we build a safe, accessible dating platform for everyone.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* NEWS ITEM 1 */}
            <article style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid #e0e0e0' }}>
              <time style={{ color: '#666', fontSize: '0.9rem' }}>January 2026</time>
              <h2 style={{ marginTop: '0.5rem', color: '#e91e63' }}>Website Launch: A New Beginning</h2>
              <p>
                We are excited to announce the launch of our website! This is the first step 
                in our mission to create an accessible, safe, and welcoming dating platform 
                for people with disabilities.
              </p>
              <p>
                Right now, we are in the early stages—gathering feedback, building our community, 
                and planning the platform that will serve you. Your voice matters, and we want 
                to hear from you.
              </p>
              <p>
                <strong>What is next:</strong> We are working on the core platform features, 
                including full accessibility compliance, safety systems, and user-friendly design. 
                Stay tuned!
              </p>
            </article>

            {/* NEWS ITEM 2 - Example for future */}
            <article style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid #e0e0e0', opacity: 0.6 }}>
              <time style={{ color: '#666', fontSize: '0.9rem' }}>Coming Soon</time>
              <h2 style={{ marginTop: '0.5rem', color: '#999' }}>Community Feedback Sessions</h2>
              <p style={{ color: '#666' }}>
                We will be hosting online sessions to hear directly from you—what features 
                matter most, what concerns you have, and how we can build the platform together.
              </p>
            </article>

            {/* Placeholder for more news */}
            <div style={{ 
              padding: '2rem', 
              background: 'rgba(233, 30, 99, 0.05)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontSize: '1.1rem' }}>
                📬 Want to stay updated? <a href="/contact" style={{ color: '#e91e63', fontWeight: 'bold' }}>Get in touch</a> to join our mailing list!
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}