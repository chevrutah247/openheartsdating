import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Involved — Investors, Partners & Supporters',
  description: 'Join Open Hearts Dating in addressing the $8.4B accessibility gap. Seeking mission-aligned investors, strategic partners, and community supporters.',
  openGraph: {
    title: 'Get Involved — Investment & Partnership Opportunities',
    description: 'Help us rebuild trust in online dating. Addressing a $8.4B market gap with a nonprofit, trust-first approach.',
  },
}

export default function SupportPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Join Us in Rebuilding Trust in Online Dating</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            We're seeking mission-aligned investors, strategic partners, and passionate 
            supporters to help us address both the <strong>$8.4B accessibility gap</strong> and 
            the industry-wide trust crisis affecting 200+ million users globally.
          </p>
        </div>
      </section>

      {/* FOR INVESTORS */}
      <section className="content-section">
        <div className="container">
          <h2>For Impact Investors</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Open Hearts Dating represents a rare opportunity: a scalable social enterprise 
              addressing a massive underserved market while solving systemic industry problems.
            </p>

            <div style={{ 
              background: 'rgba(233, 30, 99, 0.05)', 
              padding: '2rem', 
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginTop: 0, color: '#e91e63' }}>The Opportunity</h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '2rem',
                marginTop: '1.5rem'
              }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e91e63' }}>1.3B</div>
                  <p style={{ margin: 0 }}>People with disabilities globally</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e91e63' }}>$8.4B</div>
                  <p style={{ margin: 0 }}>Accessibility market gap</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e91e63' }}>200M+</div>
                  <p style={{ margin: 0 }}>Monthly dating app users seeking alternatives</p>
                </div>
              </div>
            </div>

            <h3>Why Now?</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Market Inflection Point:</strong> 1.4M users abandoned dating apps in UK alone (2023-2024). The "Great Deceleration" signals demand for trust-first alternatives.</li>
              <li><strong>Regulatory Tailwinds:</strong> Increasing scrutiny on dark patterns, data privacy, and accessibility compliance (WCAG, ADA, EU Accessibility Act).</li>
              <li><strong>Underserved Segment:</strong> 1.3 billion people with disabilities face additional barriers in an already broken system—yet no major platform prioritizes accessibility.</li>
              <li><strong>Trust Crisis:</strong> 79-80% of users report swipe fatigue. 75%+ complain about scammers. Users want transparency and safety over manipulation.</li>
            </ul>

            <h3>What We're Building</h3>
            <p>
              A nonprofit dating platform that prioritizes <strong>people over profits</strong>—with 
              robust accessibility, transparent monetization, human moderation, and community-first design.
            </p>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f8f8', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0 }}>Investment Use of Funds</h4>
              <ul style={{ lineHeight: '1.8', marginBottom: 0 }}>
                <li>Platform development (accessible design, safety features, matching algorithms)</li>
                <li>User research and accessibility testing with disability community</li>
                <li>Human moderation and trust & safety infrastructure</li>
                <li>Marketing and community growth</li>
                <li>Legal, compliance, and nonprofit operations</li>
              </ul>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="/contact" className="button" style={{ marginRight: '1rem' }}>Request Investment Deck</a>
              <a href="/trust" className="button button-secondary">Read Our Trust & Safety Approach</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOR PARTNERS */}
      <section className="content-section content-section-alt">
        <div className="container">
          <h2>For Strategic Partners</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem' }}>
              We're seeking partnerships with organizations that share our commitment to 
              accessibility, trust, and ethical technology.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h3>Partner Types We're Seeking:</h3>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: '#e91e63' }}>🏥 Healthcare & Accessibility Organizations</h4>
                <p>
                  Disability advocacy groups, accessibility consultants, assistive technology 
                  providers. Help us ensure our platform meets real needs of the community.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: '#e91e63' }}>🛡️ Trust & Safety Technology</h4>
                <p>
                  Background check providers (like Garbo), identity verification, AI moderation 
                  tools that don't compromise privacy. Help us build the safest platform possible.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: '#e91e63' }}>🎓 Research Institutions</h4>
                <p>
                  Universities studying online dating, accessibility, trust in digital platforms. 
                  Partner on research that advances the field.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: '#e91e63' }}>💼 Corporate Social Responsibility</h4>
                <p>
                  Tech companies, accessibility-focused brands. Align your CSR initiatives with 
                  a measurable social impact project.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="/contact" className="button">Explore Partnership Opportunities</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOR SUPPORTERS */}
      <section className="content-section">
        <div className="container">
          <h2>For Community Supporters</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem' }}>
              Not an investor or corporate partner? You can still make a huge impact.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div>
                <h3 style={{ color: '#e91e63' }}>Volunteer</h3>
                <p>Web developers, accessibility testers, UX researchers, content creators, community builders.</p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Development & testing</li>
                  <li>Accessibility auditing</li>
                  <li>Content creation</li>
                  <li>Community outreach</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: '#e91e63' }}>Advise</h3>
                <p>Share your expertise in dating apps, accessibility, nonprofit operations, trust & safety.</p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Product strategy</li>
                  <li>Accessibility guidance</li>
                  <li>Legal & compliance</li>
                  <li>Community building</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: '#e91e63' }}>Spread the Word</h3>
                <p>Help us build awareness about the need for ethical, accessible dating platforms.</p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Share our mission</li>
                  <li>Connect us with partners</li>
                  <li>Provide feedback</li>
                  <li>Join our community</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="/contact" className="button">Get Involved</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NONPROFIT */}
      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Why Nonprofit Structure?</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              We chose a nonprofit model deliberately. Dating platforms that prioritize 
              profits over people have created the current crisis of trust.
            </p>

            <div style={{ lineHeight: '1.8' }}>
              <p>
                <strong>✅ Mission-Aligned Incentives:</strong> Success = user wellbeing and 
                meaningful connections, not maximizing time-on-app or subscription revenue.
              </p>
              <p>
                <strong>✅ Transparency:</strong> Nonprofits face higher accountability standards. 
                We're committed to open reporting on impact, finances, and decision-making.
              </p>
              <p>
                <strong>✅ Community Ownership:</strong> Users aren't products to monetize—they're 
                stakeholders we serve. Advisory boards include people with disabilities.
              </p>
              <p>
                <strong>✅ Long-Term Thinking:</strong> No pressure for rapid growth or exit. 
                We can build sustainable, ethical systems that put people first.
              </p>
            </div>

            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              background: 'rgba(233, 30, 99, 0.1)', 
              borderRadius: '8px',
              borderLeft: '4px solid #e91e63'
            }}>
              <p style={{ margin: 0, fontSize: '1.05rem' }}>
                <strong>Note for investors:</strong> While we're structured as a nonprofit, 
                we're exploring social enterprise models (L3C, benefit corporation) that allow 
                mission-aligned returns while maintaining our core values. Contact us to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Make an Impact?</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Whether you're an investor, partner, or supporter—we'd love to hear from you.
          </p>
          <a href="/contact" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}