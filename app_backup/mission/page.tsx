import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Mission — Love Without Barriers",
  description:
    "We're building Open Hearts Dating because 1.3 billion people with disabilities deserve to find love without barriers, judgment, or feeling invisible.",
}

export default function MissionPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Everyone Deserves to Feel Those Butterflies</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            You know that feeling when your phone buzzes and it's THEM? Your heart skips. 
            You smile without meaning to. You read the message three times.
          </p>
          <p style={{ fontSize: '1.15rem', maxWidth: '800px', margin: '1.5rem auto 0', opacity: '0.9' }}>
            Everyone deserves to feel that. <strong>Including you.</strong>
          </p>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Why We Started</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              This isn't a business plan. It's personal.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem' }}>The Question That Started Everything</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                A friend of ours, let's call him Alex, was having a rough day. He'd been on three 
                different dating apps for months. Got some matches. Even some conversations.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Then he mentioned his wheelchair in a message. Suddenly, silence. Every. Single. Time.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                He asked us: <em>"Why do I have to hide who I am just to get a chance?"</em>
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px',
              borderLeft: '4px solid #667eea',
              marginBottom: '2.5rem'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                We didn't have a good answer. So we decided to create one.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea', fontSize: '1.4rem' }}>Then We Started Listening</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                The more we talked to people, the more stories we heard:
              </p>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                <li><strong>Maria</strong> couldn't use popular apps with her screen reader. Buttons didn't work. 
                Navigation was impossible. She gave up.</li>
                <li><strong>James</strong> was tired of explaining his autism on first dates. He wanted people 
                to know upfront and be okay with it.</li>
                <li><strong>Elena</strong> faced constant ableist comments. "You're so brave!" "I could never date 
                someone like you." Like she was a charity case.</li>
                <li><strong>David</strong> just wanted to meet someone who understood chronic pain means some days 
                you can't leave the house—and that's okay.</li>
              </ul>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white', 
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0, fontWeight: '500' }}>
                These aren't "market segments" or "user personas." 
                These are real people with real hearts who deserve real love.
                <br/><br/>
                That's why we're here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>The Problem Is Bigger Than You Think</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#667eea' }}>1.3 Billion</div>
              <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                people worldwide live with a disability
              </p>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              That's more than the entire population of the United States, Russia, and Germany combined.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              But here's what that number really means:
            </p>

            <div style={{ 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.05)', 
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1rem' }}>
                💙 1.3 billion people who want to hold someone's hand<br/>
                💙 1.3 billion people who dream about their first kiss<br/>
                💙 1.3 billion people who hope someone will text "thinking of you"<br/>
                💙 1.3 billion people with beating hearts and full of love to give
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ color: '#667eea' }}>But Current Dating Platforms Fail Them</h3>
              
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: '#667eea', fontSize: '1.2rem' }}>They're Not Accessible</h4>
                  <p style={{ lineHeight: '1.8' }}>
                    Try using Tinder with a screen reader. Try swiping with limited mobility. 
                    Try reading tiny text with low vision. Most people with disabilities simply 
                    CAN'T use mainstream dating apps—even if they want to.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: '#667eea', fontSize: '1.2rem' }}>They're Unsafe</h4>
                  <p style={{ lineHeight: '1.8' }}>
                    People with disabilities face higher rates of online harassment and abuse. 
                    Yet platforms do the bare minimum to protect them. Profit matters more than safety.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: '#667eea', fontSize: '1.2rem' }}>They're Designed to Manipulate</h4>
                  <p style={{ lineHeight: '1.8' }}>
                    Endless swiping. Pay-to-win features. Fake likes to keep you hooked. 
                    These platforms make money by keeping you lonely—not by helping you find love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Our Solution: Build Something Different</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem', textAlign: 'center' }}>
              We're not trying to "disrupt" the dating industry. 
              We're trying to rebuild it with care, dignity, and accessibility at the core.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea' }}>🏗️ Built Accessible From Day One</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Not "we'll add accessibility later." Not "good enough for most people." 
                Every feature, every button, every page—built to work perfectly with screen readers, 
                keyboard navigation, and assistive technologies. Because you shouldn't have to fight 
                your tools to find love.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea' }}>💰 Nonprofit = No Ulterior Motives</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                We're not here to maximize profit. We're here to maximize connections. 
                That means no pay-per-message traps, no artificial scarcity, no psychological 
                manipulation. Core features are free. Forever. Because finding love shouldn't 
                require a credit card.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea' }}>🛡️ Your Safety Is Our Promise</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Real human moderators, not just algorithms. Verification systems that work. 
                Clear reporting tools. Zero tolerance for harassment, scams, or ableist behavior. 
                We know people with disabilities are more vulnerable online—so we're building 
                protection into every layer.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea' }}>🤝 Built WITH You, Not Just FOR You</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                We're not "experts" deciding what you need. We're listening to people with 
                disabilities, learning from their experiences, and co-creating this platform together. 
                Your voice shapes what we build. Always.
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ color: '#667eea' }}>💕 Designed for Real Connections</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                No mindless swiping. Detailed profiles where you can share your real story. 
                Matching based on values and interests, not just photos. Tools for meaningful 
                conversations, not quick hookups. We're building for people who want something real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>What We Believe</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', fontStyle: 'italic' }}>
              These aren't just values we put on a website. These are the principles we use 
              to make every decision, every day.
            </p>

            <div style={{ 
              display: 'grid', 
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0 }}>💙 Everyone Deserves Love</h3>
                <p style={{ lineHeight: '1.8', margin: 0 }}>
                  Not "despite" their disability. Not as a charitable act. Simply because they're human. 
                  Your worth isn't defined by your body or mind—it's inherent.
                </p>
              </div>
              
              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0 }}>♿ Accessibility Is a Right, Not a Feature</h3>
                <p style={{ lineHeight: '1.8', margin: 0 }}>
                  You shouldn't have to beg for websites to work. You shouldn't have to struggle 
                  with tools that exclude you. Accessibility isn't something we "add"—it's the foundation 
                  of everything we build.
                </p>
              </div>
              
              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0 }}>🤝 We're All in This Together</h3>
                <p style={{ lineHeight: '1.8', margin: 0 }}>
                  This isn't "us" building for "them." We're a community. Your stories, your feedback, 
                  your lived experience—that's what makes this platform real. We're co-creating something 
                  that belongs to all of us.
                </p>
              </div>
              
              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0 }}>🌱 We're Playing the Long Game</h3>
                <p style={{ lineHeight: '1.8', margin: 0 }}>
                  We're not trying to get rich quick or sell to the highest bidder. We're building 
                  something that will still be here in 10, 20, 50 years. Because love doesn't have 
                  an expiration date—and neither should platforms that facilitate it.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginTop: 0 }}>💎 Honesty Over Hype</h3>
                <p style={{ lineHeight: '1.8', margin: 0 }}>
                  We won't promise you a perfect match in 5 minutes. We won't claim to "fix" loneliness 
                  with an algorithm. Dating is hard. Finding the right person takes time. We'll be honest 
                  about that—and support you through the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Where We're Going</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              We're honest about where we are: we're still building. But here's where we're headed.
            </p>

            <div style={{ 
              padding: '2rem', 
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>Short Term: Get It Right</h3>
              <p style={{ lineHeight: '1.8' }}>
                We're not rushing to launch. We're taking the time to build something that actually 
                works—especially for people with disabilities. That means:
              </p>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Extensive accessibility testing with real users</li>
                <li>Building safety features that actually protect people</li>
                <li>Creating a community culture of respect and inclusion</li>
                <li>Learning from early adopters and making improvements</li>
              </ul>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>Medium Term: Grow the Community</h3>
              <p style={{ lineHeight: '1.8' }}>
                Once we've proven that our approach works, we want to grow—carefully and thoughtfully. 
                Our goal isn't to be the biggest platform. It's to be the BEST platform for people 
                with disabilities. That means:
              </p>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Expanding to more countries and languages</li>
                <li>Partnering with disability advocacy organizations</li>
                <li>Adding features our community actually wants</li>
                <li>Staying true to our nonprofit mission as we scale</li>
              </ul>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>Long Term: Change the Industry</h3>
              <p style={{ lineHeight: '1.8' }}>
                Our biggest dream? To force the entire dating industry to do better. When we prove 
                that accessibility works, that nonprofit models can succeed, that putting people first 
                is both possible and sustainable—other platforms will have to follow. That means:
              </p>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Setting new standards for accessibility in online dating</li>
                <li>Showing that ethical platforms can thrive</li>
                <li>Inspiring others to build with inclusion at the core</li>
                <li>Making the internet a more accessible place, period</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Be Part of Something Bigger</h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            This isn't just about a dating platform. It's about building a world where everyone—
            regardless of ability—has the chance to experience love, connection, and belonging.
          </p>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            You can be part of this movement. Whether you're someone looking for love, 
            someone who wants to help us build, or someone who simply believes everyone 
            deserves dignity and respect.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/contact" className="button">Join Our Journey</Link>
            <Link href="/news" className="button button-secondary">Follow Our Progress</Link>
          </div>
          
          <div style={{ 
            maxWidth: '600px', 
            margin: '3rem auto 0',
            padding: '2rem',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '12px'
          }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0, fontStyle: 'italic' }}>
              "Love is not a finite resource. There's enough for everyone. 
              We just need to remove the barriers that keep people from finding it."
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: '0.8' }}>
              — The Open Hearts Dating Team
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
