'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

interface Message {
  id: string
  from_user_id: string
  to_user_id: string
  content: string
  read_at: string | null
  created_at: string
}

interface OtherUser {
  id: string
  display_name: string
  date_of_birth: string
  location: string
  profile_photo: string | null
}

export default function ChatPage() {
  const router = useRouter()
  const params = useParams()
  const otherUserId = params.userId as string
  
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [otherUser, setOtherUser] = useState<OtherUser | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [isMatched, setIsMatched] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [reportReason, setReportReason] = useState('')
  const [reportDescription, setReportDescription] = useState('')
  const [reportSending, setReportSending] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    checkUserAndLoadChat()
  }, [otherUserId])

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (!user || !isMatched) return

    // Subscribe to new messages (realtime)
    const channel = supabase
      .channel('messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `from_user_id=eq.${otherUserId}`
        },
        (payload) => {
          const newMsg = payload.new as Message
          if (newMsg.to_user_id === user.id) {
            setMessages(prev => [...prev, newMsg])
            // Mark as read
            markAsRead(newMsg.id)
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user, otherUserId, isMatched])

  const checkUserAndLoadChat = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    // Get user profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(profileData)

    // Check if verified
    if (profileData?.verification_status !== 'verified') {
      setLoading(false)
      return
    }

    // Check if matched with this user
    const { data: match } = await supabase
      .from('matches')
      .select('id')
      .or(`and(user1_id.eq.${user.id},user2_id.eq.${otherUserId}),and(user1_id.eq.${otherUserId},user2_id.eq.${user.id})`)
      .single()

    if (!match) {
      setIsMatched(false)
      setLoading(false)
      return
    }

    setIsMatched(true)

    // Check if blocked
    const { data: block } = await supabase
      .from('blocks')
      .select('id')
      .or(`and(blocker_id.eq.${user.id},blocked_id.eq.${otherUserId}),and(blocker_id.eq.${otherUserId},blocked_id.eq.${user.id})`)
      .limit(1)

    if (block && block.length > 0) {
      setIsBlocked(true)
      setLoading(false)
      return
    }

    // Load other user's profile
    const { data: otherProfile } = await supabase
      .from('profiles')
      .select('id, display_name, date_of_birth, location, profile_photo')
      .eq('id', otherUserId)
      .single()

    setOtherUser(otherProfile)

    // Load messages
    await loadMessages(user.id)

    setLoading(false)

    // Focus input
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const loadMessages = async (userId: string) => {
    const { data: msgs } = await supabase
      .from('messages')
      .select('*')
      .or(
        `and(from_user_id.eq.${userId},to_user_id.eq.${otherUserId}),and(from_user_id.eq.${otherUserId},to_user_id.eq.${userId})`
      )
      .order('created_at', { ascending: true })

    if (msgs) {
      setMessages(msgs)
      
      // Mark unread messages as read
      const unreadIds = msgs
        .filter(m => m.to_user_id === userId && !m.read_at)
        .map(m => m.id)
      
      if (unreadIds.length > 0) {
        await supabase
          .from('messages')
          .update({ read_at: new Date().toISOString() })
          .in('id', unreadIds)
      }
    }
  }

  const markAsRead = async (messageId: string) => {
    await supabase
      .from('messages')
      .update({ read_at: new Date().toISOString() })
      .eq('id', messageId)
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const trimmed = newMessage.trim()
    if (!trimmed || !user || sending) return
    if (trimmed.length > 2000) {
      alert('Message is too long (max 2000 characters).')
      return
    }

    setSending(true)

    const { data, error } = await supabase
      .from('messages')
      .insert({
        from_user_id: user.id,
        to_user_id: otherUserId,
        content: trimmed
      })
      .select()
      .single()

    if (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } else if (data) {
      setMessages(prev => [...prev, data])
      setNewMessage('')
    }

    setSending(false)
    inputRef.current?.focus()
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDateHeader = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
    }
  }

  // Group messages by date
  const groupedMessages: { date: string; messages: Message[] }[] = []
  let currentDate = ''
  
  messages.forEach(msg => {
    const msgDate = new Date(msg.created_at).toDateString()
    if (msgDate !== currentDate) {
      currentDate = msgDate
      groupedMessages.push({ date: msg.created_at, messages: [msg] })
    } else {
      groupedMessages[groupedMessages.length - 1].messages.push(msg)
    }
  })

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  const handleBlock = async () => {
    if (!user || !confirm('Are you sure you want to block this user? This will remove your match and messages.')) return

    await supabase.from('blocks').insert({ blocker_id: user.id, blocked_id: otherUserId })
    // Remove match and likes
    await supabase.from('matches').delete().or(`and(user1_id.eq.${user.id},user2_id.eq.${otherUserId}),and(user1_id.eq.${otherUserId},user2_id.eq.${user.id})`)
    await supabase.from('likes').delete().or(`and(from_user_id.eq.${user.id},to_user_id.eq.${otherUserId}),and(from_user_id.eq.${otherUserId},to_user_id.eq.${user.id})`)
    router.push('/messages')
  }

  const handleReport = async () => {
    if (!user || !reportReason) return
    setReportSending(true)

    await supabase.from('reports').insert({
      reporter_id: user.id,
      reported_user_id: otherUserId,
      reason: reportReason,
      description: reportDescription || null,
    })

    setReportSending(false)
    setShowReportModal(false)
    setReportReason('')
    setReportDescription('')
    alert('Report submitted. Thank you for helping keep our community safe.')
  }

  // Blocked
  if (isBlocked) {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ padding: '3rem', background: '#f3f4f6', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚫</div>
          <h1 style={{ color: '#333', marginBottom: '1rem' }}>Conversation Unavailable</h1>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            This conversation is no longer available.
          </p>
          <Link href="/messages" style={{ display: 'inline-block', padding: '1rem 2rem', background: 'var(--primary)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
            Back to Messages
          </Link>
        </div>
      </section>
    )
  }

  // Not verified
  if (profile?.verification_status !== 'verified') {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          padding: '3rem',
          background: '#fff3cd',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #ffc107'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔐</div>
          <h1 style={{ color: '#856404', marginBottom: '1rem' }}>Verification Required</h1>
          <p style={{ color: '#856404', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            You need to be verified to send messages.
          </p>
          <Link 
            href="/verify"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Get Verified Now
          </Link>
        </div>
      </section>
    )
  }

  // Not matched
  if (!isMatched) {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          padding: '3rem',
          background: '#f8d7da',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #f5c6cb'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💔</div>
          <h1 style={{ color: '#721c24', marginBottom: '1rem' }}>Not a Match</h1>
          <p style={{ color: '#721c24', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            You can only message people you have matched with.
          </p>
          <Link 
            href="/browse"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Browse Profiles
          </Link>
        </div>
      </section>
    )
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      maxWidth: '700px',
      margin: '0 auto',
      background: '#f9f9f9'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem 1.5rem',
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <Link 
          href="/messages"
          style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '1.5rem',
            lineHeight: 1
          }}
        >
          ←
        </Link>
        
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          {otherUser?.display_name?.charAt(0).toUpperCase() || '?'}
        </div>
        
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: '1.1rem' }}>
            {otherUser?.display_name || 'Anonymous'}
          </h2>
          <p style={{ margin: 0, color: '#888', fontSize: '0.85rem' }}>
            {otherUser?.location || ''}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Link
            href={`/profile/${otherUserId}`}
            style={{
              padding: '0.4rem 0.8rem',
              background: '#f5f5f5',
              color: '#333',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.85rem'
            }}
          >
            Profile
          </Link>
          <button
            onClick={() => setShowReportModal(true)}
            style={{
              padding: '0.4rem 0.6rem',
              background: 'transparent',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              color: '#f59e0b',
            }}
            title="Report"
          >
            ⚠️
          </button>
          <button
            onClick={handleBlock}
            style={{
              padding: '0.4rem 0.6rem',
              background: 'transparent',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              color: '#ef4444',
            }}
            title="Block"
          >
            🚫
          </button>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
        }}>
          <div style={{
            background: 'white', borderRadius: '12px', padding: '2rem',
            maxWidth: '450px', width: '100%',
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Report User</h3>
            <select
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', marginBottom: '1rem', fontSize: '1rem' }}
            >
              <option value="">Select reason...</option>
              <option value="harassment">Harassment</option>
              <option value="spam">Spam</option>
              <option value="fake_profile">Fake Profile</option>
              <option value="inappropriate_content">Inappropriate Content</option>
              <option value="scam">Scam / Fraud</option>
              <option value="other">Other</option>
            </select>
            <textarea
              value={reportDescription}
              onChange={(e) => setReportDescription(e.target.value)}
              placeholder="Additional details (optional)"
              rows={3}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', marginBottom: '1rem', fontSize: '1rem', resize: 'vertical' }}
            />
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => { setShowReportModal(false); setReportReason(''); setReportDescription('') }}
                style={{ padding: '0.6rem 1.2rem', background: '#f5f5f5', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                onClick={handleReport}
                disabled={!reportReason || reportSending}
                style={{
                  padding: '0.6rem 1.2rem', background: reportReason ? '#ef4444' : '#ccc',
                  color: 'white', border: 'none', borderRadius: '6px', cursor: reportReason ? 'pointer' : 'not-allowed', fontWeight: 600
                }}
              >
                {reportSending ? 'Sending...' : 'Submit Report'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem 1.5rem'
      }}>
        {messages.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            color: '#888'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
            <p>No messages yet. Say hello!</p>
          </div>
        ) : (
          groupedMessages.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Date header */}
              <div style={{
                textAlign: 'center',
                margin: '1.5rem 0 1rem',
                color: '#888',
                fontSize: '0.85rem'
              }}>
                {formatDateHeader(group.date)}
              </div>
              
              {/* Messages in this group */}
              {group.messages.map((msg) => {
                const isMe = msg.from_user_id === user?.id
                return (
                  <div
                    key={msg.id}
                    style={{
                      display: 'flex',
                      justifyContent: isMe ? 'flex-end' : 'flex-start',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <div style={{
                      maxWidth: '75%',
                      padding: '0.75rem 1rem',
                      borderRadius: isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      background: isMe ? 'var(--primary)' : 'white',
                      color: isMe ? 'white' : '#333',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}>
                      <p style={{ margin: 0, wordBreak: 'break-word' }}>
                        {msg.content}
                      </p>
                      <p style={{ 
                        margin: '0.5rem 0 0', 
                        fontSize: '0.7rem', 
                        opacity: 0.7,
                        textAlign: 'right'
                      }}>
                        {formatTime(msg.created_at)}
                        {isMe && msg.read_at && ' ✓✓'}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form 
        onSubmit={sendMessage}
        style={{
          display: 'flex',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          background: 'white',
          borderTop: '1px solid #e5e7eb'
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '0.75rem 1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '24px',
            fontSize: '1rem',
            outline: 'none'
          }}
          disabled={sending}
        />
        <button
          type="submit"
          disabled={!newMessage.trim() || sending}
          style={{
            padding: '0.75rem 1.5rem',
            background: newMessage.trim() && !sending ? 'var(--primary)' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '24px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: newMessage.trim() && !sending ? 'pointer' : 'not-allowed'
          }}
        >
          {sending ? '...' : 'Send'}
        </button>
      </form>
    </div>
  )
}
