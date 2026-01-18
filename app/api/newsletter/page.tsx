'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminNewsletterPage() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<{type: 'success' | 'error', message: string} | null>(null)
  
  const [subject, setSubject] = useState('')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [link, setLink] = useState('https://openheartsdating.com/news')

  useEffect(() => {
    checkAdminAccess()
  }, [])

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    const { data: adminData } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', user.id)
      .eq('is_active', true)
      .single()

    if (adminData) {
      setIsAdmin(true)
    }

    setLoading(false)
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!subject || !title || !excerpt) {
      setResult({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    setSending(true)
    setResult(null)

    try {
      const response = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, title, excerpt, link })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send newsletter')
      }

      setResult({ type: 'success', message: 'Newsletter sent successfully to all subscribers!' })
      setSubject('')
      setTitle('')
      setExcerpt('')
      setLink('https://openheartsdating.com/news')

    } catch (error: any) {
      setResult({ type: 'error', message: error.message })
    }

    setSending(false)
  }

  if (loading) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>
  }

  if (!isAdmin) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1 style={{ color: '#dc3545' }}>Access Denied</h1>
        <p>You do not have admin permissions.</p>
        <a href="/dashboard" style={{ color: '#667eea' }}>Back to Dashboard</a>
      </div>
    )
  }

  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>📧 Send Newsletter</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Send news updates to all newsletter subscribers
      </p>

      {result && (
        <div style={{
          padding: '1rem',
          marginBottom: '1.5rem',
          background: result.type === 'success' ? '#d4edda' : '#f8d7da',
          color: result.type === 'success' ? '#155724' : '#721c24',
          borderRadius: '8px',
          border: `1px solid ${result.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {result.message}
        </div>
      )}

      <form onSubmit={handleSend}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Email Subject *
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g., New Feature: Identity Verification is Live!"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            News Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Identity Verification System Launched"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Short Description *
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Brief description of the news (2-3 sentences)"
            rows={4}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Link to Article
          </label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://openheartsdating.com/news"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
        </div>

        {/* Preview */}
        <div style={{
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>Preview</h3>
          <div style={{
            padding: '1.5rem',
            background: 'white',
            borderRadius: '8px',
            border: '1px solid #eee'
          }}>
            <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Subject: {subject || '(enter subject)'}
            </p>
            <h4 style={{ marginBottom: '0.5rem' }}>{title || '(enter title)'}</h4>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              {excerpt || '(enter description)'}
            </p>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#667eea',
              color: 'white',
              borderRadius: '6px',
              fontSize: '0.9rem'
            }}>
              Read Full Article →
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={sending}
          style={{
            width: '100%',
            padding: '1rem',
            background: sending ? '#ccc' : '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: sending ? 'not-allowed' : 'pointer'
          }}
        >
          {sending ? 'Sending...' : 'Send to All Subscribers'}
        </button>
      </form>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/admin/verification" style={{ color: '#667eea', marginRight: '1rem' }}>
          ← Verification Queue
        </a>
        <a href="/dashboard" style={{ color: '#667eea' }}>
          Dashboard
        </a>
      </div>
    </section>
  )
}
