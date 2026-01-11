import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Mission — Addressing the $8.4B Accessibility Gap in Dating",
  description:
    "Open Hearts Dating is building the first truly accessible dating platform. Serving 1.3 billion people with disabilities while solving the industry trust crisis.",
}

export default function MissionPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Our Mission: Making Dating Accessible for Everyone</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            We are building the first dating platform designed from the ground up 
            for accessibility—serving <strong>1.3 billion people with disabilities</strong> while 
            addressing the trust crisis affecting the entire $3.2B online dating industry.
          </p>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>The Problem We Are Solving</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              The online dating industry has two massive, interconnected problems:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ 
                padding: '2rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#e91e63', marginTop: 0 }}>Problem #1: Accessibility Gap</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e91e63' }}>$8.4B</div>
                <p style={{ marginBottom: '1rem' }}><strong>Underserved Market</strong></p>
                <ul style={{ lineHeight: '1.8', fontSize: '0.95rem', textAlign: 'left' }}>
                  <li><strong>1.3 billion</strong> people with disabilities globally (WHO)</li>
                  <li><strong>61 million</strong> adults with disabilities in US alone (CDC)</li>
                  <li><strong>Zero</strong> major platforms prioritize accessibility</li>
                  <li><strong>26%</strong> of US adults have a disability</li>
                </ul>
              </div>

              <div style={{ 
                padding: '2rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#e91e63', marginTop: 0 }}>Problem #2: Trust Crisis</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e91e63' }}>200M+</div>
                <p style={{ marginBottom: '1rem' }}><strong>Users Seeking Alternatives</strong></p>
                <ul style={{ lineHeight: '1.8', fontSize: '0.95rem', textAlign: 'left' }}>
                  <li><strong>79-80%</strong> report swipe fatigue</li>
                  <li><strong>75%+</strong> complain about scammers</li>
                  <li><strong>1.4M</strong> users abandoned apps (UK 2023-24)</li>
                  <li><strong>Manipulative</strong> dark patterns everywhere</li>
                </ul>
              </div>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'rgba(233, 30, 99, 0.1)', 
              borderRadius: '12px',
              borderLeft: '4px solid #e91e63'
            }}>
              <p style={{ margin: 0, fontSize: '1.1rem' }}>
                <strong>Our Opportunity:</strong> Build a platform that solves BOTH problems—
                accessibility for an underserved 1.3B person market + trust-first approach 
                for 200M+ users seeking ethical alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Our Vision</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              A world where dating platforms put people before profits—
              where accessibility is standard, not an afterthought, and where 
              trust is the foundation, not a marketing claim.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ color: '#e91e63' }}>What Success Looks Like</h3>
              
              <div style={{ marginTop: '2rem' }}>
                <p><strong>Year 1-2: Prove the Model</strong></p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Launch MVP with core accessibility features (WCAG 2.1 AA compliant)</li>
                  <li>Reach 10,000+ active users in disability community</li>
                  <li>Establish trust & safety framework that outperforms incumbents</li>
                  <li>Document measurable impact: connections formed, relationships built</li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <p><strong>Year 3-5: Scale Impact</strong></p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Expand to 500,000+ users across US, EU, Israel, and other markets</li>
                  <li>Partner with disability advocacy organizations globally</li>
                  <li>Become the trusted brand for accessible dating</li>
                  <li>Influence industry standards—force competitors to improve accessibility</li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <p><strong>Long-term: Transform the Industry</strong></p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Serve millions across the 1.3B person market</li>
                  <li>Prove nonprofit model can compete with for-profit platforms</li>
                  <li>Set new standards for trust, safety, and accessibility in online dating</li>
                  <li>Expand model to other underserved communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Why We Will Win</h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>1. First-Mover in Accessible Dating</h3>
              <p>
                No major platform prioritizes accessibility. We are not retrofitting—
                we are building it in from day one. This gives us a 5-10 year head start 
                on competitors who would need to rebuild their entire tech stack.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>2. Regulatory Tailwinds</h3>
              <p>
                EU Accessibility Act (2025), ADA enforcement in US, global accessibility 
                standards tightening. We are compliant from launch while competitors face 
                expensive retrofits and potential lawsuits.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>3. Community Co-Creation</h3>
              <p>
                Built WITH people with disabilities, not just FOR them. Our advisory board, 
                testing pool, and early community includes people with lived experience. 
                This creates authentic product-market fit competitors cannot fake.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#e91e63' }}>4. Trust as Competitive Moat</h3>
              <p>
                In a market where trust has collapsed, being the verifiably safe alternative 
                is a massive advantage. Nonprofit structure = aligned incentives. Users know 
                we are not manipulating them for profit.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#e91e63' }}>5. Underserved Market + Mainstream Appeal</h3>
              <p>
                We start with disability community (1.3B people, $8.4B market gap) but 
                our trust-first approach appeals to EVERYONE tired of toxic platforms. 
                The 1.4M users who left UK dating apps are our addressable market too.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Our Values</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '2rem auto'
          }}>
            <div>
              <h3 style={{ color: '#e91e63' }}>🎯 Mission First</h3>
              <p>Every decision prioritizes user wellbeing over revenue. Nonprofit structure ensures this.</p>
            </div>
            
            <div>
              <h3 style={{ color: '#e91e63' }}>♿ Accessibility Always</h3>
              <p>Not an add-on or afterthought. The foundation of everything we build.</p>
            </div>
            
            <div>
              <h3 style={{ color: '#e91e63' }}>🛡️ Safety by Design</h3>
              <p>Human moderation, verification, zero tolerance for scams and manipulation.</p>
            </div>
            
            <div>
              <h3 style={{ color: '#e91e63' }}>💎 Radical Transparency</h3>
              <p>Open about challenges, finances, decision-making. Users are stakeholders.</p>
            </div>
            
            <div>
              <h3 style={{ color: '#e91e63' }}>🤝 Community Ownership</h3>
              <p>Built with our users, especially those with disabilities. Co-creation, not extraction.</p>
            </div>
            
            <div>
              <h3 style={{ color: '#e91e63' }}>🌍 Long-term Impact</h3>
              <p>No exit strategy. Building for decades, not quarters. Sustainable, ethical growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Join Our Mission</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Whether you are an investor, partner, advisor, or supporter—
            help us build the dating platform the world needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/support" className="button">Investment Opportunities</Link>
            <Link href="/contact" className="button button-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}