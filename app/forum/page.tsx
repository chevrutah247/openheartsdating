'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Category {
  id: string
  name: string
  description: string
  icon: string
  threadCount: number
  postCount: number
  lastActivity: {
    threadTitle: string
    author: string
    time: string
  } | null
}

export default function ForumPage() {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Relationships & Dating',
      description: 'Share your dating experiences, ask for advice, and celebrate love',
      icon: '💑',
      threadCount: 45,
      postCount: 328,
      lastActivity: {
        threadTitle: 'First date tips for wheelchair users',
        author: 'Sarah',
        time: '2 hours ago'
      }
    },
    {
      id: '2',
      name: 'Health & Medical',
      description: 'Doctor recommendations, treatments, rehabilitation experiences',
      icon: '🏥',
      threadCount: 67,
      postCount: 512,
      lastActivity: {
        threadTitle: 'Finding accessible physical therapy',
        author: 'Michael',
        time: '5 hours ago'
      }
    },
    {
      id: '3',
      name: 'City Life & Accessibility',
      description: 'Accessible places, transportation, city navigation tips',
      icon: '🏙️',
      threadCount: 89,
      postCount: 645,
      lastActivity: {
        threadTitle: 'Best accessible restaurants in NYC',
        author: 'Emma',
        time: '1 hour ago'
      }
    },
    {
      id: '4',
      name: 'Career & Work',
      description: 'Job hunting, workplace rights, remote work, success stories',
      icon: '👔',
      threadCount: 34,
      postCount: 187,
      lastActivity: {
        threadTitle: 'Working from home tips',
        author: 'David',
        time: '3 hours ago'
      }
    },
    {
      id: '5',
      name: 'Rights & Benefits',
      description: 'Legal questions, benefits, fighting discrimination',
      icon: '🛡️',
      threadCount: 56,
      postCount: 423,
      lastActivity: {
        threadTitle: 'How to apply for disability benefits',
        author: 'Lisa',
        time: '4 hours ago'
      }
    },
    {
      id: '6',
      name: 'Travel & Adventures',
      description: 'Accessible destinations, travel tips, accommodations',
      icon: '🌍',
      threadCount: 28,
      postCount: 156,
      lastActivity: {
        threadTitle: 'Accessible hotels in Paris',
        author: 'Alex',
        time: '6 hours ago'
      }
    },
    {
      id: '7',
      name: 'Hobbies & Creativity',
      description: 'Sports, art, music, photography, crafts',
      icon: '🎨',
      threadCount: 41,
      postCount: 298,
      lastActivity: {
        threadTitle: 'Adaptive sports near you',
        author: 'Ryan',
        time: '30 minutes ago'
      }
    },
    {
      id: '8',
      name: 'Motivation & Support',
      description: 'Success stories, fighting depression, mutual support',
      icon: '💪',
      threadCount: 78,
      postCount: 892,
      lastActivity: {
        threadTitle: 'How I learned to love myself',
        author: 'Maria',
        time: '1 hour ago'
      }
    },
    {
      id: '9',
      name: 'General Chat',
      description: 'Casual conversations, humor, memes, off-topic',
      icon: '💬',
      threadCount: 124,
      postCount: 1543,
      lastActivity: {
        threadTitle: 'What are you doing this weekend?',
        author: 'Chris',
        time: '10 minutes ago'
      }
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Community Forum</h1>
          <p style={{ fontSize: '1.25rem', color: 'white', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
            Connect, share, and support each other. A safe space for people with disabilities to discuss 
            everything from dating to daily life.
          </p>
        </div>
      </section>

      {/* Forum Rules Banner */}
      <section className="content-section">
        <div className="container">
          <div style={{
            background: '#fff3cd',
            border: '2px solid #ffc107',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#856404', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📜 Forum Rules
            </h3>
            <ul style={{ color: '#856404', marginBottom: 0, lineHeight: '1.8' }}>
              <li>Be respectful to everyone — no insults, discrimination, or hate speech</li>
              <li>Keep discussions constructive and on-topic</li>
              <li>No spam, advertising, or self-promotion</li>
              <li>Respect privacy — don't share others' personal information</li>
              <li>If you see something inappropriate, report it to moderators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#667eea' }}>562</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>Total Threads</div>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💬</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#667eea' }}>4,984</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>Total Posts</div>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#667eea' }}>1,234</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>Active Members</div>
              </div>
            </div>

            {/* Categories List */}
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/forum/${category.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '1rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                className="forum-category-card"
                >
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    {/* Icon */}
                    <div style={{
                      fontSize: '3rem',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                      borderRadius: '12px',
                      flexShrink: 0
                    }}>
                      {category.icon}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        margin: '0 0 0.5rem 0',
                        color: '#333',
                        fontSize: '1.3rem'
                      }}>
                        {category.name}
                      </h3>
                      <p style={{ 
                        margin: '0 0 1rem 0',
                        color: '#666',
                        lineHeight: '1.6'
                      }}>
                        {category.description}
                      </p>

                      <div style={{ 
                        display: 'flex', 
                        gap: '2rem',
                        fontSize: '0.9rem',
                        color: '#666'
                      }}>
                        <span>📝 {category.threadCount} threads</span>
                        <span>💬 {category.postCount} posts</span>
                      </div>

                      {category.lastActivity && (
                        <div style={{
                          marginTop: '1rem',
                          padding: '0.75rem',
                          background: '#f9fafb',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          color: '#666'
                        }}>
                          <strong>Latest:</strong> {category.lastActivity.threadTitle}
                          <div style={{ marginTop: '0.25rem', fontSize: '0.85rem', opacity: 0.8 }}>
                            by {category.lastActivity.author} • {category.lastActivity.time}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section content-section-alt">
        <div className="container">
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Join the Conversation?</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
              Create an account to start posting, or just browse as a guest.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/signup" className="button" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Create Account
              </a>
              <a href="/login" className="button button-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Log In
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hover Effect */}
      <style jsx>{`
        .forum-category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  )
}
