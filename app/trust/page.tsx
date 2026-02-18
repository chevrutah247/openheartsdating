import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust & Safety — Our Competitive Advantage',
  description: 'The dating app industry faces a trust crisis. 75%+ scammer complaints, fake profiles everywhere. Open Hearts Dating is building the safe alternative with verified profiles.',
  alternates: {
    canonical: '/trust',
  },
  openGraph: {
    title: 'Trust & Safety — Open Hearts Dating',
    description: 'Building the safest dating platform with verified profiles and active moderation.',
    url: 'https://openheartsdating.com/trust',
  },
}

export default function TrustPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Trust & Safety: Not a Feature—Our Foundation</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            While major dating platforms prioritize engagement over safety, we are taking 
            the opposite approach. In a market where 75%+ of users report scammer 
            complaints, trust is not optional—it is our competitive advantage.
          </p>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>The Global Trust Crisis in Online Dating</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Across every major market, users report the same problems: scams, bots, 
            manipulation, and platforms that protect profits over people.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#e91e63', marginTop: 0 }}>🇺🇸 United States</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e91e63' }}>53.3M</div>
              <p>Users by 2025 (Statista)</p>
            </div>
            
            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#e91e63', marginTop: 0 }}>🇪🇺 Europe</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e91e63' }}>1.4M</div>
              <p>Users left apps (UK 2023-24)</p>
            </div>
            
            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#e91e63', marginTop: 0 }}>🌍 Global</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e91e63' }}>200M+</div>
              <p>Monthly dating app users</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Our Trust & Safety Framework</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ color: '#e91e63' }}>🚫 Zero Tolerance for Bots & Fake Profiles</h3>
            <p>Multi-layer verification, behavioral analysis, photo verification, community reporting.</p>
            
            <h3 style={{ color: '#e91e63', marginTop: '2rem' }}>🛡️ Proactive Scam Prevention</h3>
            <p>Background checks, financial request detection, education, rapid response team.</p>
            
            <h3 style={{ color: '#e91e63', marginTop: '2rem' }}>🔒 Privacy & Data Protection</h3>
            <p>GDPR/CCPA compliant. No data selling. Transparent permissions. User control.</p>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Building the Safest Dating Platform</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
            Trust is not a feature we will add later. It is the foundation—
            and our competitive advantage in a broken market.
          </p>
          <a href="/contact" className="button">Discuss Our Approach</a>
        </div>
      </section>
    </>
  )
}