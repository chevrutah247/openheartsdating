'use client'

import { useState } from 'react'

const SUBJECT_OPTIONS = [
  'General Question',
  'Trust & Safety Concern',
  'Partnership Inquiry',
  'Volunteer Interest',
  'Bug Report',
  'Feedback',
  'Other',
]

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, honeypot }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong')
        setStatus('error')
        return
      }

      setStatus('sent')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch {
      setErrorMsg('Failed to send message. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div style={{
        padding: '2rem',
        background: '#f0fdf4',
        borderRadius: '12px',
        border: '1px solid #bbf7d0',
        textAlign: 'center',
      }}>
        <h3 style={{ color: '#16a34a', marginBottom: '0.5rem' }}>Message Sent!</h3>
        <p style={{ color: '#333' }}>
          Thank you for reaching out. We'll get back to you within 2–3 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1.5rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.95rem',
          }}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.4rem',
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#333',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Honeypot — hidden from real users */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={e => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-name" style={labelStyle}>Your Name</label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="John Doe"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Email Address</label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="john@example.com"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
        <select
          id="contact-subject"
          required
          value={subject}
          onChange={e => setSubject(e.target.value)}
          style={{ ...inputStyle, appearance: 'auto' }}
        >
          <option value="">Select a topic...</option>
          {SUBJECT_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea
          id="contact-message"
          required
          rows={6}
          minLength={20}
          maxLength={5000}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Please describe your question or concern in detail..."
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <span style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.25rem', display: 'block' }}>
          {message.length}/5000 characters (minimum 20)
        </span>
      </div>

      {errorMsg && (
        <div style={{
          padding: '0.75rem 1rem',
          background: '#fef2f2',
          border: '1px solid #fca5a5',
          borderRadius: '8px',
          color: '#dc2626',
          fontSize: '0.9rem',
        }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="button"
        style={{
          width: '100%',
          padding: '0.85rem',
          fontSize: '1rem',
          opacity: status === 'sending' ? 0.7 : 1,
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
