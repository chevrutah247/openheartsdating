'use client'

import Link from 'next/link'
import { useState } from 'react'

type JobType = 'looking' | 'offering'
type WorkType = 'remote' | 'hybrid' | 'onsite'

interface Job {
  id: string
  type: JobType
  title: string
  company?: string
  location: string
  workType: WorkType
  description: string
  salary?: string
  postedBy: string
  postedDate: string
  accessibility: string[]
  category: string
}

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<JobType>('offering')

  const mockJobs: Job[] = [
    {
      id: '1',
      type: 'offering',
      title: 'Remote Customer Support Specialist',
      company: 'TechCorp Inc',
      location: 'Remote (US)',
      workType: 'remote',
      description: 'We are looking for empathetic customer support specialists. Flexible hours, full accessibility support including screen readers and adaptive equipment.',
      salary: '$40,000 - $55,000/year',
      postedBy: 'Sarah Johnson',
      postedDate: '2 days ago',
      accessibility: ['Screen reader compatible', 'Flexible schedule', 'Adaptive equipment provided'],
      category: 'Customer Service'
    },
    {
      id: '2',
      type: 'offering',
      title: 'Web Developer (Part-time)',
      company: 'Digital Solutions',
      location: 'New York, NY',
      workType: 'hybrid',
      description: 'Part-time web developer position. Office is wheelchair accessible, flexible work-from-home options available.',
      salary: '$30/hour',
      postedBy: 'Mike Chen',
      postedDate: '5 days ago',
      accessibility: ['Wheelchair accessible office', 'Work from home options', 'Flexible hours'],
      category: 'Technology'
    },
    {
      id: '3',
      type: 'looking',
      title: 'Experienced Graphic Designer Seeking Remote Work',
      location: 'Chicago, IL',
      workType: 'remote',
      description: '5 years experience in graphic design. Proficient in Adobe Creative Suite. Looking for remote or flexible opportunities. I use voice recognition software and work well independently.',
      postedBy: 'Emma Davis',
      postedDate: '1 week ago',
      accessibility: ['Voice recognition user', 'Remote only', 'Flexible schedule needed'],
      category: 'Design'
    },
    {
      id: '4',
      type: 'offering',
      title: 'Content Writer',
      company: 'Accessibility First Media',
      location: 'Remote',
      workType: 'remote',
      description: 'We need writers who understand accessibility. Share your lived experience through compelling content. Fully remote position with flexible deadlines.',
      salary: '$25 - $40/hour (contract)',
      postedBy: 'Alex Rivera',
      postedDate: '3 days ago',
      accessibility: ['Fully remote', 'Flexible deadlines', 'Async communication'],
      category: 'Writing'
    }
  ]

  const filteredJobs = mockJobs.filter(job => job.type === activeTab)

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Job Board</h1>
          <p style={{ fontSize: '1.25rem', color: 'white', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
            Connecting people with disabilities to accessible employment opportunities
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="content-section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto 3rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💼</div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#667eea', marginBottom: '0.5rem' }}>247</div>
              <div style={{ color: '#666' }}>Active Job Listings</div>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏢</div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#667eea', marginBottom: '0.5rem' }}>156</div>
              <div style={{ color: '#666' }}>Inclusive Employers</div>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✅</div>
              <div style={{ fontSize: '2rem', fontWeight: '600', color: '#667eea', marginBottom: '0.5rem' }}>89</div>
              <div style={{ color: '#666' }}>Successful Placements</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              gap: '1rem',
              borderBottom: '2px solid #e5e7eb',
              marginBottom: '2rem'
            }}>
              <button
                onClick={() => setActiveTab('offering')}
                style={{
                  padding: '1rem 2rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === 'offering' ? '3px solid #667eea' : 'none',
                  color: activeTab === 'offering' ? '#667eea' : '#666',
                  fontWeight: activeTab === 'offering' ? '600' : 'normal',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                💼 Job Offers ({mockJobs.filter(j => j.type === 'offering').length})
              </button>
              <button
                onClick={() => setActiveTab('looking')}
                style={{
                  padding: '1rem 2rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === 'looking' ? '3px solid #667eea' : 'none',
                  color: activeTab === 'looking' ? '#667eea' : '#666',
                  fontWeight: activeTab === 'looking' ? '600' : 'normal',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                🔍 Looking for Work ({mockJobs.filter(j => j.type === 'looking').length})
              </button>
            </div>

            {/* Post Job/Resume Button */}
            <div style={{ marginBottom: '2rem', textAlign: 'right' }}>
              <a
                href={activeTab === 'offering' ? '/jobs/post-job' : '/jobs/post-resume'}
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                {activeTab === 'offering' ? '+ Post a Job' : '+ Post Resume'}
              </a>
            </div>

            {/* Jobs List */}
            <div style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  className="job-card"
                >
                  {/* Header */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                      <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>
                        {job.title}
                      </h3>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: job.workType === 'remote' ? '#d1fae5' : job.workType === 'hybrid' ? '#fef3c7' : '#e0e7ff',
                        color: job.workType === 'remote' ? '#065f46' : job.workType === 'hybrid' ? '#92400e' : '#3730a3',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}>
                        {job.workType === 'remote' ? '🏠 Remote' : job.workType === 'hybrid' ? '🔄 Hybrid' : '🏢 On-site'}
                      </span>
                    </div>

                    {job.company && (
                      <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#667eea', fontWeight: '600' }}>
                        {job.company}
                      </p>
                    )}

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#666' }}>
                      <span>📍 {job.location}</span>
                      {job.salary && <span>💰 {job.salary}</span>}
                      <span>📅 {job.postedDate}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: '#666' }}>
                    {job.description}
                  </p>

                  {/* Accessibility Features */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.9rem', color: '#667eea', marginBottom: '0.75rem', fontWeight: '600' }}>
                      ♿ Accessibility Features:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {job.accessibility.map((feature, index) => (
                        <span
                          key={index}
                          style={{
                            padding: '0.5rem 1rem',
                            background: '#f0f4ff',
                            color: '#667eea',
                            borderRadius: '6px',
                            fontSize: '0.85rem'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e5e7eb'
                  }}>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                      Posted by <strong>{job.postedBy}</strong>
                    </div>
                    <button
                      style={{
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {job.type === 'offering' ? 'Apply Now' : 'Contact'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'white',
                borderRadius: '12px'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📭</div>
                <p style={{ fontSize: '1.1rem', color: '#666' }}>
                  No {activeTab === 'offering' ? 'job offers' : 'resumes'} available yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Why Accessible Employment Matters</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              People with disabilities face unemployment rates 2-3x higher than the general population. 
              Not because of lack of skills, but because of lack of accessible opportunities. 
              We're changing that.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                <h4 style={{ marginBottom: '0.5rem' }}>For Job Seekers</h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                  Find employers who understand your needs and value your skills
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏢</div>
                <h4 style={{ marginBottom: '0.5rem' }}>For Employers</h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                  Access talented candidates and build a truly inclusive team
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
                <h4 style={{ marginBottom: '0.5rem' }}>For Everyone</h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                  Creating a more inclusive, accessible workforce benefits society
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section">
        <div className="container">
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '3rem',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
              Whether you're looking for work or looking to hire, create an account to get started.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/signup" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Create Account
              </a>
              <a href="/jobs/post-job" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Post a Job
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hover Effect */}
      <style jsx>{`
        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  )
}
