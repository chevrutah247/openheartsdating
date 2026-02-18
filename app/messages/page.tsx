'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Conversation } from '@/lib/types'

export default function MessagesPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadConversations()
  }, [])

  useEffect(() => {
    if (!user) return

    // Real-time subscription for new messages
    const channel = supabase
      .channel('messages-hub')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
      }, (payload) => {
        const msg = payload.new as any
        if (msg.to_user_id === user.id || msg.from_user_id === user.id) {
          // Reload conversations when new message arrives
          loadConversationData(user.id)
        }
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user])

  const loadConversations = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }
    setUser(user)

    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(profileData)

    if (profileData?.verification_status !== 'verified') {
      setLoading(false)
      return
    }

    await loadConversationData(user.id)
    setLoading(false)
  }

  const loadConversationData = async (userId: string) => {
    // Get all matches
    const { data: matches } = await supabase
      .from('matches')
      .select('*')
      .or(`user1_id.eq.${userId},user2_id.eq.${userId}`)

    if (!matches || matches.length === 0) {
      setConversations([])
      return
    }

    // Get blocked users
    const { data: blocks } = await supabase
      .from('blocks')
      .select('blocker_id, blocked_id')
      .or(`blocker_id.eq.${userId},blocked_id.eq.${userId}`)

    const blockedIds = new Set(
      (blocks || []).map(b => b.blocker_id === userId ? b.blocked_id : b.blocker_id)
    )

    // Build conversations
    const convs: Conversation[] = []

    for (const match of matches) {
      const otherUserId = match.user1_id === userId ? match.user2_id : match.user1_id

      // Skip blocked users
      if (blockedIds.has(otherUserId)) continue

      // Get other user profile
      const { data: otherProfile } = await supabase
        .from('profiles')
        .select('display_name, profile_photo, verification_status')
        .eq('id', otherUserId)
        .single()

      if (!otherProfile) continue

      // Get latest message
      const { data: lastMsgs } = await supabase
        .from('messages')
        .select('*')
        .or(`and(from_user_id.eq.${userId},to_user_id.eq.${otherUserId}),and(from_user_id.eq.${otherUserId},to_user_id.eq.${userId})`)
        .order('created_at', { ascending: false })
        .limit(1)

      const lastMsg = lastMsgs?.[0]

      // Get unread count
      const { count: unreadCount } = await supabase
        .from('messages')
        .select('*', { count: 'exact', head: true })
        .eq('from_user_id', otherUserId)
        .eq('to_user_id', userId)
        .is('read_at', null)

      convs.push({
        otherUserId,
        otherUserName: otherProfile.display_name || 'Anonymous',
        otherUserPhoto: otherProfile.profile_photo || null,
        otherUserVerified: otherProfile.verification_status === 'verified',
        lastMessage: lastMsg?.content || '',
        lastMessageAt: lastMsg?.created_at || match.created_at || '',
        unreadCount: unreadCount || 0,
      })
    }

    // Sort: conversations with messages first (newest), then no-message matches
    convs.sort((a, b) => {
      if (!a.lastMessage && b.lastMessage) return 1
      if (a.lastMessage && !b.lastMessage) return -1
      return new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
    })

    setConversations(convs)
  }

  const formatTime = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const mins = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (mins < 1) return 'now'
    if (mins < 60) return `${mins}m`
    if (hours < 24) return `${hours}h`
    if (days < 7) return `${days}d`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  if (loading) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>
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
            You need to be verified to access messages.
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
              fontWeight: 600,
            }}
          >
            Get Verified Now
          </Link>
        </div>
      </section>
    )
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', minHeight: '100vh', background: '#f9fafb' }}>
      {/* Header */}
      <div style={{
        padding: '1.5rem',
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Messages</h1>
        <Link
          href="/matches"
          style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem' }}
        >
          My Matches
        </Link>
      </div>

      {/* Conversations */}
      {conversations.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
        }}>
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>💬</div>
          <h2 style={{ marginBottom: '1rem', color: '#333' }}>No Conversations Yet</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            Match with someone to start chatting!
          </p>
          <Link
            href="/browse"
            className="button"
            style={{ display: 'inline-block', padding: '1rem 2rem' }}
          >
            Browse Profiles
          </Link>
        </div>
      ) : (
        <div>
          {conversations.map(conv => (
            <Link
              key={conv.otherUserId}
              href={`/messages/${conv.otherUserId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.5rem',
                background: conv.unreadCount > 0 ? '#f0f4ff' : 'white',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}>
                {/* Avatar */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  background: conv.otherUserPhoto
                    ? `url(${conv.otherUserPhoto}) center/cover no-repeat`
                    : 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: conv.otherUserPhoto ? '0' : '1.2rem',
                }}>
                  {!conv.otherUserPhoto && conv.otherUserName.charAt(0).toUpperCase()}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{
                      fontWeight: conv.unreadCount > 0 ? '700' : '600',
                      fontSize: '1rem',
                      color: '#333',
                    }}>
                      {conv.otherUserName}
                      {conv.otherUserVerified && <span style={{ marginLeft: '0.3rem' }} title="Verified">✅</span>}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#999', flexShrink: 0 }}>
                      {formatTime(conv.lastMessageAt)}
                    </span>
                  </div>
                  <p style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    color: conv.unreadCount > 0 ? '#333' : '#888',
                    fontWeight: conv.unreadCount > 0 ? '500' : 'normal',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {conv.lastMessage || '👋 Say hello!'}
                  </p>
                </div>

                {/* Unread badge */}
                {conv.unreadCount > 0 && (
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    flexShrink: 0,
                  }}>
                    {conv.unreadCount > 9 ? '9+' : conv.unreadCount}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
