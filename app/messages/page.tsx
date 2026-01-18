'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Conversation {
  other_user_id: string
  other_user_name: string
  last_message: string
  last_message_at: string
  unread_count: number
}

export default function MessagesPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUserAndLoadConversations()
  }, [])

  const checkUserAndLoadConversations = async () => {
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

    // Load conversations
    await loadConversations(user.id)

    setLoading(false)
  }

  const loadConversations = async (userId: string) => {
    // Get all messages where user is sender or receiver
    const { data: messages } = await supabase
      .from('messages')
      .select('*')
      .or(`from_user_id.eq.${userId},to_user_id.eq.${userId}`)
      .order('created_at', { ascending: false })

    if (!messages || messages.length === 0) {
      setConversations([])
      return
    }

    // Group by conversation partner
    const convMap: Record<string, {
      other_user_id: string
      last_message: string
      last_message_at: string
      unread_count: number
    }> = {}

    messages.forEach(msg => {
      const otherUserId = msg.from_user_id === userId ? msg.to_user_id : msg.from_user_id
      
      if (!convMap[otherUserId]) {
        convMap[otherUserId] = {
          other_user_id: otherUserId,
          last_message: msg.content,
          last_message_at: msg.created_at,
          unread_count: 0
        }
      }

      // Count unread (messages TO me that are not read)
      if (msg.to_user_id === userId && !msg.read_at) {
        convMap[otherUserId].unread_count++
      }
    })

    // Get other users' profiles
    const otherUserIds = Object.keys(convMap)
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name')
      .in('id', otherUserIds)

    const profileMap: Record<string, string> = {}
    profiles?.forEach(p => {
      profileMap[p.id] = p.display_name || 'Anonymous'
    })

    // Build final conversations list
    const convList: Conversation[] = Object.values(convMap).map(c => ({
      ...c,
      other_user_name: profileMap[c.other_user_id] || 'Anonymous'
    }))

    // Sort by last message time
    convList.sort((a, b) => 
      new Date(b.last_message_at).getTime() - new Date(a.last_message_at).getTime()
    )

    setConversations(convList)
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    } else if (diffDays === 1) {
      return 'Yesterday'
    } else if (diffDays < 7) {
      return date.toLocaleDateString('en-US', { weekday: 'short' })
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading...
      </div>
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
            You need to be verified to send and receive messages.
          </p>
          <Link 
            href="/verify"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: '#667eea',
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

  return (
    <section style={{ padding: '2rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Messages</h1>
        <p style={{ color: '#666' }}>Chat with your matches</p>
      </div>

      {/* Conversations List */}
      {conversations.length === 0 ? (
        <div style={{
          padding: '4rem',
          textAlign: 'center',
          background: '#f9f9f9',
          borderRadius: '12px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
          <h2 style={{ marginBottom: '0.5rem' }}>No messages yet</h2>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            Start a conversation with one of your matches!
          </p>
          <Link
            href="/platform-preview/matches"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#667eea',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            View Matches
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {conversations.map((conv) => (
            <Link
              key={conv.other_user_id}
              href={`/messages/${conv.other_user_id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: conv.unread_count > 0 ? '#f0f4ff' : 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s'
              }}
            >
              {/* Avatar */}
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {conv.other_user_name.charAt(0).toUpperCase()}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '1rem',
                    fontWeight: conv.unread_count > 0 ? 700 : 500
                  }}>
                    {conv.other_user_name}
                  </h3>
                  <span style={{ color: '#999', fontSize: '0.8rem' }}>
                    {formatTime(conv.last_message_at)}
                  </span>
                </div>
                <p style={{ 
                  margin: '0.25rem 0 0', 
                  color: conv.unread_count > 0 ? '#333' : '#888',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: conv.unread_count > 0 ? 500 : 400
                }}>
                  {conv.last_message}
                </p>
              </div>

              {/* Unread badge */}
              {conv.unread_count > 0 && (
                <div style={{
                  background: '#667eea',
                  color: 'white',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  {conv.unread_count}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/platform-preview/matches" style={{ color: '#667eea', marginRight: '1.5rem' }}>
          My Matches
        </Link>
        <Link href="/platform-preview/dating" style={{ color: '#667eea', marginRight: '1.5rem' }}>
          Browse Profiles
        </Link>
        <Link href="/dashboard" style={{ color: '#667eea' }}>
          Dashboard
        </Link>
      </div>
    </section>
  )
}
