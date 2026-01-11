import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Rebuilding Trust in Online Dating',
  description: 'A nonprofit dating platform addressing the $8.4B accessibility gap. No bots, no manipulation, no barriers—just real connections for people with disabilities.',
  openGraph: {
    title: 'Open Hearts Dating — Rebuilding Trust in Online Dating',
   description: 'Addressing the industry crisis: 79% of users report swipe fatigue, scams plague major platforms. We are building the ethical alternative.',
  },
}

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Open Hearts Dating',
    url: 'https://openheartsdating.com',
    logo: 'https://openheartsdating.com/logo.png',
    description: 'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities.',
    foundingDate: '2024',
    nonprofitStatus: 'NonprofitType',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO - Problem Statement */}
      <section className="hero">
        <div className="container">
          <h1>The Dating App Industry Has a Trust Problem. We're Fixing It.</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            79% of Gen Z and Millennials report "swipe fatigue." Scammers plague major platforms. 
            1.4M users left dating apps in the UK alone (2023-2024). Meanwhile, <strong>1.3 billion 
            people with disabilities</strong> face additional barriers in an already broken system.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#solution" className="button">See Our Solution</a>
            <a href="/contact" className="button button-secondary">Contact for Investment</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="content-section content-section-alt">
        <div className="container">
          <h2>The Industry Crisis</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Current dating platforms prioritize profit over people. The result? A trust collapse.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e91e63' }}>79-80%</div>
              <p><strong>Swipe Fatigue</strong><br/>Users exhausted by endless swiping and ghosting</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e91e63' }}>75%+</div>
              <p><strong>Scammer Complaints</strong><br/>Fake profiles, bots, and financial scams dominate</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e91e63' }}>1.4M</div>
              <p><strong>Users Left Apps</strong><br/>UK market alone (2023-2024)</p>
            </div>
          </div>

          <div style={{ 
            marginTop: '3rem', 
            padding: '2rem', 
            background: 'rgba(233, 30, 99, 0.1)', 
            borderRadius: '12px',
            borderLeft: '4px solid #e91e63'
          }}>
            <h3 style={{ marginTop: 0 }}>What Users Actually Say:</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>"Tinder has turned into a company that just takes money without delivering" (2026 review)</li>
              <li>"Nothing but scammers... they make no effort to fix the issue" (Bumble, Dec 2025)</li>
              <li>"Apps are turning people into commodities, not community members"</li>
              <li>"Pay-to-win manipulation and hidden fees everywhere"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section id="solution" className="content-section">
        <div className="container">
          <h2>Open Hearts Dating: The Trust-First Alternative</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem' }}>
            We're building a dating platform on principles the industry has abandoned: 
            <strong> transparency, safety, and human dignity.</strong>
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>🚫 No Bots, No Manipulation</h3>
              <p>
                Every profile represents a real person. No AI-generated personas, no paid chat operators, 
                no engagement manipulation. Human moderation, not algorithms designed to keep you swiping.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>💎 Transparent Monetization</h3>
              <p>
                No pay-per-message traps. No hidden fees. No artificial scarcity to force upgrades. 
                As a nonprofit, our only goal is connection—not extracting maximum revenue per user.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>♿ Accessibility by Design</h3>
              <p>
                WCAG 2.1 AA compliant from day one. Screen reader compatible, keyboard navigation, 
                customizable interfaces. Built WITH people with disabilities, not just FOR them.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>🛡️ Safety First, Always</h3>
              <p>
                Robust verification systems. Active moderation that protects users, not profits. 
                Clear reporting mechanisms. Background check integration (like Match's Garbo partnership).
              </p>
            </div>

            <div>
              <h3 style={{ color: '#e91e63' }}>🤝 Community Over Commodification</h3>
              <p>
                Slow dating. Quality over quantity. Belonging over endless swiping. 
                Users aren't metrics—they're people deserving respect and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section className="content-section content-section-alt">
        <div className="container">
          <h2>The Market Opportunity</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem' 
          }}>
            <div>
              <h3 style={{ color: '#e91e63' }}>1.3 Billion</h3>
              <p>People with disabilities worldwide (WHO)</p>
            </div>
            <div>
              <h3 style={{ color: '#e91e63' }}>$8.4 Billion</h3>
              <p>Accessible dating market gap (underserved segment)</p>
            </div>
            <div>
              <h3 style={{ color: '#e91e63' }}>53.3 Million</h3>
              <p>Projected US online dating users by 2025 (Statista)</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              The "Great Deceleration" of 2024-2025 signals a market inflection point. 
              Users are abandoning toxic platforms and seeking <strong>trust-first alternatives</strong>. 
              Open Hearts Dating addresses both the accessibility gap AND the industry-wide trust crisis.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="content-section">
        <div className="container">
          <h2>Our Founding Principles</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>1. Nonprofit Structure</strong> — Mission over margins. Every decision prioritizes user wellbeing.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>2. Radical Transparency</strong> — Open about challenges, monetization, and development roadmap.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>3. Community Co-Creation</strong> — Built WITH our users, especially those with lived disability experience.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>4. No Dark Patterns</strong> — No psychological manipulation, artificial scarcity, or deceptive practices.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>5. Safety = Table Stakes</strong> — Human moderation, verification, and user protection are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section content-section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Join Us in Rebuilding Trust</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            We're seeking mission-aligned investors, advisors, and partners who believe 
            dating platforms can—and should—put people before profits.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="button">Get in Touch</a>
            <a href="/trust" className="button button-secondary">Read Our Trust & Safety Approach</a>
          </div>
        </div>
      </section>
    </>
  )
}