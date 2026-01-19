import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Job Board Launches — Accessible Employment for All',
  description: 'Find accessible employment opportunities or post jobs for candidates with disabilities. Our new job board connects inclusive employers with talented candidates.',
}

export default function JobBoardLaunchPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#d1fae5',
              color: '#065f46',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              NEW FEATURE
            </span>
          </div>
          <h1>Job Board Now Live — Find Accessible Work</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Connecting people with disabilities to inclusive employers who value their abilities. 
            Find your next opportunity or post a job opening today.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {/* Hero Image */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            height: '500px',
            margin: '0 auto 3rem',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/news/job-board-launch.jpg"
              alt="Professional with disability working confidently at modern accessible workspace with laptop and assistive technology"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Intro */}
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We're thrilled to announce the launch of our <strong>Job Board</strong> — a dedicated platform 
              connecting people with disabilities to accessible employment opportunities.
            </p>

            {/* The Problem */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>The Problem We're Solving</h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Here's a sobering fact: <strong>People with disabilities face unemployment rates 2-3x higher 
              than the general population.</strong>
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Not because they lack skills. Not because they lack motivation. But because:
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '2rem' }}>
              <li>Traditional job boards aren't accessible</li>
              <li>Employers don't know how to create inclusive workplaces</li>
              <li>Candidates face discrimination in hiring processes</li>
              <li>There's no dedicated space for accessible employment opportunities</li>
            </ul>

            <div style={{ 
              padding: '2rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px',
              borderLeft: '4px solid #667eea',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', margin: 0 }}>
                <strong>We believe:</strong> Every person with a disability deserves the opportunity to contribute 
                their talents, earn a living, and build a career. That's why we built this job board.
              </p>
            </div>

            {/* How It Works */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>How It Works</h2>

            <div style={{ 
              display: 'grid', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* For Job Seekers */}
              <div style={{ 
                padding: '2rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.4rem' }}>
                  🔍 For Job Seekers
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Browse opportunities that explicitly support accessibility:
                </p>
                <ul style={{ lineHeight: '2', marginBottom: '1.5rem' }}>
                  <li><strong>Remote-first positions</strong> for those who need flexible work arrangements</li>
                  <li><strong>Accessibility features listed upfront</strong> — no surprises</li>
                  <li><strong>Inclusive employers</strong> who actively recruit people with disabilities</li>
                  <li><strong>Filter by work type</strong> — Remote, Hybrid, or On-site</li>
                  <li><strong>Post your own profile</strong> to let employers find you</li>
                </ul>
                <a href="/jobs" className="button" style={{ display: 'inline-block' }}>
                  Browse Jobs
                </a>
              </div>

              {/* For Employers */}
              <div style={{ 
                padding: '2rem', 
                background: 'white', 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.4rem' }}>
                  💼 For Employers
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Connect with talented candidates who bring unique perspectives:
                </p>
                <ul style={{ lineHeight: '2', marginBottom: '1.5rem' }}>
                  <li><strong>Post job openings</strong> with accessibility features clearly stated</li>
                  <li><strong>Access a talent pool</strong> of motivated, skilled candidates</li>
                  <li><strong>Build an inclusive team</strong> that reflects your values</li>
                  <li><strong>Show your commitment</strong> to disability inclusion</li>
                  <li><strong>Get guidance</strong> on creating accessible workplaces</li>
                </ul>
                <a href="/jobs/post-job" className="button" style={{ display: 'inline-block' }}>
                  Post a Job
                </a>
              </div>
            </div>

            {/* Key Features */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Key Features</h2>

            <div style={{ 
              display: 'grid', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px'
              }}>
                <h3 style={{ color: '#333', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  ♿ Accessibility-First
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Every job listing includes specific accessibility information: screen reader compatibility, 
                  flexible schedules, remote options, adaptive equipment provided, and more.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px'
              }}>
                <h3 style={{ color: '#333', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  🏠 Remote-Friendly
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Filter specifically for remote positions — perfect for those who need flexibility 
                  or face transportation challenges.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px'
              }}>
                <h3 style={{ color: '#333', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  💬 Two-Way Matching
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  Employers can post jobs AND job seekers can post their own profiles. 
                  Let opportunities come to you!
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '12px'
              }}>
                <h3 style={{ color: '#333', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                  ✅ Verified Employers
                </h3>
                <p style={{ margin: 0, lineHeight: '1.7' }}>
                  We verify employers to ensure they're legitimate and committed to inclusive hiring practices.
                </p>
              </div>
            </div>

            {/* Success Stories Preview */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Early Success Stories</h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Even in our beta phase, we're already seeing results:
            </p>

            <div style={{ 
              padding: '2rem', 
              background: '#fff3cd', 
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '1rem' }}>
                "I found a remote customer service position within two weeks of joining. 
                The employer already had screen reader support set up. No explaining, no justifying — 
                they just got it."
              </p>
              <p style={{ margin: 0, fontWeight: '600' }}>— Maria, New York</p>
            </div>

            <div style={{ 
              padding: '2rem', 
              background: '#fff3cd', 
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '1rem' }}>
                "As an employer, we've struggled to find diverse candidates. This job board connected us 
                with talented people we never would have reached through traditional channels."
              </p>
              <p style={{ margin: 0, fontWeight: '600' }}>— Tech Startup, San Francisco</p>
            </div>

            {/* Job Categories */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Job Categories</h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We currently feature opportunities in:
            </p>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{ padding: '1rem', background: '#f0f4ff', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💻</div>
                <strong>Technology</strong>
              </div>
              <div style={{ padding: '1rem', background: '#f0f4ff', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏥</div>
                <strong>Healthcare</strong>
              </div>
              <div style={{ padding: '1rem', background: '#f0f4ff', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                <strong>Education</strong>
              </div>
              <div style={{ padding: '1rem', background: '#f0f4ff', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📞</div>
                <strong>Customer Service</strong>
              </div>
              <div style={{ padding: '1rem', background: '#f0f4ff', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
                <strong>Design</strong>
              </div>
              <div style={{ padding: '1rem', background: '#f0f4ff', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✍️</div>
                <strong>Writing</strong>
              </div>
            </div>

            {/* Call to Action */}
            <div style={{ 
              marginTop: '3rem',
              padding: '2.5rem', 
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Ready to Find Your Next Opportunity?</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
                Whether you're looking for work or looking to hire, get started today.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/jobs" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  Browse Jobs 💼
                </a>
                <a href="/jobs/post-job" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  Post a Job
                </a>
              </div>
            </div>

            {/* What's Next */}
            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>What's Coming Next</h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              This is just the beginning. Coming soon:
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '2rem' }}>
              <li><strong>Job alerts</strong> — Get notified when new positions match your criteria</li>
              <li><strong>Resume builder</strong> — Create an accessible, professional resume</li>
              <li><strong>Interview prep resources</strong> — Tips for disclosure and accommodation requests</li>
              <li><strong>Salary insights</strong> — Know what you're worth</li>
              <li><strong>Company reviews</strong> — See what current employees say about accessibility</li>
              <li><strong>Career resources</strong> — Guides on workplace rights and accommodations</li>
            </ul>

            {/* Footer */}
            <div style={{ 
              marginTop: '3rem',
              padding: '2rem', 
              background: '#f9fafb', 
              borderRadius: '12px'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                <strong>Questions about the job board?</strong> Contact us at{' '}
                <a href="mailto:jobs@openheartsdating.com" style={{ color: '#667eea' }}>jobs@openheartsdating.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <a href="/news" style={{ 
            display: 'inline-block',
            color: '#667eea', 
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem'
          }}>
            ← Back to All News
          </a>
        </div>
      </section>
    </>
  )
}
