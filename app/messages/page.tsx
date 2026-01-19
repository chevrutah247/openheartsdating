'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Match {
  id: string
  matched_user: {
    id: string
    display_name: string
    photo_url: string | null
    gender: string
  }
  last_message: {
    content: string
    created_at: string
    sender_id: string
  } | null
  unread_count: number
}

interface Message {
  id: string
  sender_id: string
  content: string
  created_at: string
  read: boolean
}

export default function MessagesPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [matches, setMatches] = useState<Match[]>([])
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    loadMatches()
    loadCurrentUser()
  }, [])

  useEffect(() => {
    if (selectedMatch) {
      loadMessages(selectedMatch)
      // Подписаться на новые сообщения в реальном времени
      const channel = supabase
        .channel('messages')
        .on('postgres_changes', {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `chat_id=eq.${selectedMatch}`
        }, (payload) => {
          setMessages(prev => [...prev, payload.new as Message])
        })
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [selectedMatch])

  async function loadCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setCurrentUser(profile)
  }

  async function loadMatches() {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Получить все матчи пользователя
      // TODO: Нужна таблица matches или chats
      // Пока используем упрощенную логику через likes
      
      const { data: userLikes } = await supabase
        .from('likes')
        .select('liked_id')
        .eq('liker_id', user.id)

      const { data: receivedLikes } = await supabase
        .from('likes')
        .select('liker_id')
        .eq('liked_id', user.id)

      // Найти взаимные лайки (матчи)
      const userLikedIds = userLikes?.map(l => l.liked_id) || []
      const receivedLikedIds = receivedLikes?.map(l => l.liker_id) || []
      const matchedIds = userLikedIds.filter(id => receivedLikedIds.includes(id))

      if (matchedIds.length > 0) {
        const { data: matchedProfiles } = await supabase
          .from('profiles')
          .select('id, display_name, photo_url, gender')
          .in('id', matchedIds)

        // TODO: Загрузить последние сообщения и количество непрочитанных
        setMatches(matchedProfiles?.map(profile => ({
          id: profile.id,
          matched_user: profile,
          last_message: null,
          unread_count: 0
        })) || [])
      }

    } catch (error) {
      console.error('Error loading matches:', error)
    } finally {
      setLoading(false)
    }
  }

  async function loadMessages(matchId: string) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // TODO: Загрузить сообщения из таблицы messages
      // Пока используем заглушку
      setMessages([])

    } catch (error) {
      console.error('Error loading messages:', error)
    }
  }

  async function sendMessage() {
    if (!newMessage.trim() || !selectedMatch) return

    try {
      setSending(true)
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // TODO: Отправить сообщение в таблицу messages
      const message = {
        id: Date.now().toString(),
        sender_id: user.id,
        content: newMessage,
        created_at: new Date().toISOString(),
        read: false
      }

      setMessages(prev => [...prev, message])
      setNewMessage('')

    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setSending(false)
    }
  }

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <p>Loading messages...</p>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      background: '#f9fafb'
    }}>
      {/* Sidebar - List of Matches */}
      <div style={{
        width: '350px',
        background: 'white',
        borderRight: '1px solid #e5e7eb',
        overflowY: 'auto'
      }}>
        <div style={{ 
          padding: '1.5rem',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{ margin: 0 }}>Messages</h2>
          <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
            {matches.length} {matches.length === 1 ? 'match' : 'matches'}
          </p>
        </div>

        {matches.length === 0 ? (
          <div style={{ 
            padding: '3rem 1.5rem',
            textAlign: 'center',
            color: '#666'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
            <p>No matches yet</p>
            <a 
              href="/dating"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              Find Matches
            </a>
          </div>
        ) : (
          <div>
            {matches.map((match) => (
              <div
                key={match.id}
                onClick={() => setSelectedMatch(match.id)}
                style={{
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  background: selectedMatch === match.id ? '#f0f4ff' : 'white',
                  transition: 'background 0.2s'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    {match.matched_user.photo_url ? (
                      <img 
                        src={match.matched_user.photo_url} 
                        alt={match.matched_user.display_name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      match.matched_user.gender === 'male' ? '👨' : '👩'
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.25rem'
                    }}>
                      <h4 style={{ 
                        margin: 0, 
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        {match.matched_user.display_name}
                      </h4>
                      {match.unread_count > 0 && (
                        <div style={{
                          background: '#667eea',
                          color: 'white',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          {match.unread_count}
                        </div>
                      )}
                    </div>
                    {match.last_message && (
                      <p style={{ 
                        margin: 0,
                        color: '#666',
                        fontSize: '0.875rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {match.last_message.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {selectedMatch ? (
          <>
            {/* Chat Header */}
            <div style={{
              padding: '1.5rem',
              background: 'white',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {(() => {
                const match = matches.find(m => m.id === selectedMatch)
                return match ? (
                  <>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      {match.matched_user.photo_url ? (
                        <img 
                          src={match.matched_user.photo_url} 
                          alt={match.matched_user.display_name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        match.matched_user.gender === 'male' ? '👨' : '👩'
                      )}
                    </div>
                    <h3 style={{ margin: 0 }}>{match.matched_user.display_name}</h3>
                  </>
                ) : null
              })()}
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.5rem',
              background: '#f9fafb'
            }}>
              {messages.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '3rem',
                  color: '#666'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
                  <p>Say hi to start the conversation!</p>
                </div>
              ) : (
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      style={{
                        display: 'flex',
                        justifyContent: message.sender_id === currentUser?.id ? 'flex-end' : 'flex-start',
                        marginBottom: '1rem'
                      }}
                    >
                      <div
                        style={{
                          maxWidth: '70%',
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          background: message.sender_id === currentUser?.id 
                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            : 'white',
                          color: message.sender_id === currentUser?.id ? 'white' : '#333',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}
                      >
                        <p style={{ margin: 0 }}>{message.content}</p>
                        <p style={{ 
                          margin: '0.5rem 0 0 0', 
                          fontSize: '0.75rem', 
                          opacity: 0.7 
                        }}>
                          {new Date(message.created_at).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Message Input */}
            <div style={{
              padding: '1.5rem',
              background: 'white',
              borderTop: '1px solid #e5e7eb'
            }}>
              <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto',
                display: 'flex',
                gap: '1rem'
              }}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  disabled={sending}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '24px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={sending || !newMessage.trim()}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: sending || !newMessage.trim() 
                      ? '#9ca3af' 
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: sending || !newMessage.trim() ? 'not-allowed' : 'pointer'
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💬</div>
              <p>Select a match to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
