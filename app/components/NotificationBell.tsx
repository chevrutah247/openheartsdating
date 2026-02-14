'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface NotificationItem {
  id: string
  type: string
  title: string
  body: string | null
  data: any
  read_at: string | null
  created_at: string
}

export default function NotificationBell() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadNotifications()
  }, [])

  useEffect(() => {
    if (!userId) return

    const channel = supabase
      .channel('notifications-bell')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'notifications',
        filter: `user_id=eq.${userId}`,
      }, (payload) => {
        const newNotif = payload.new as NotificationItem
        setNotifications(prev => [newNotif, ...prev].slice(0, 20))
        setUnreadCount(prev => prev + 1)
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [userId])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const loadNotifications = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    setUserId(user.id)

    const { data } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20)

    if (data) {
      setNotifications(data)
      setUnreadCount(data.filter(n => !n.read_at).length)
    }
  }

  const markAllRead = async () => {
    if (!userId || unreadCount === 0) return

    const unreadIds = notifications.filter(n => !n.read_at).map(n => n.id)
    await supabase
      .from('notifications')
      .update({ read_at: new Date().toISOString() })
      .in('id', unreadIds)

    setNotifications(prev => prev.map(n => ({ ...n, read_at: n.read_at || new Date().toISOString() })))
    setUnreadCount(0)
  }

  const getNotificationLink = (notif: NotificationItem) => {
    switch (notif.type) {
      case 'new_match': return '/platform-preview/matches'
      case 'new_message': return notif.data?.fromUserId ? `/messages/${notif.data.fromUserId}` : '/messages'
      default: return '/dashboard'
    }
  }

  const formatTime = (dateString: string) => {
    const diff = Date.now() - new Date(dateString).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return 'now'
    if (mins < 60) return `${mins}m`
    const hours = Math.floor(diff / 3600000)
    if (hours < 24) return `${hours}h`
    const days = Math.floor(diff / 86400000)
    return `${days}d`
  }

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => { setIsOpen(!isOpen); if (!isOpen) markAllRead() }}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.3rem',
          position: 'relative',
          padding: '0.25rem',
          lineHeight: 1,
        }}
        title="Notifications"
      >
        🔔
        {unreadCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#ef4444',
            color: 'white',
            fontSize: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
          }}>
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          width: '320px',
          maxHeight: '400px',
          overflowY: 'auto',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          border: '1px solid #e5e7eb',
          zIndex: 100,
          marginTop: '0.5rem',
        }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', fontWeight: '600' }}>
            Notifications
          </div>
          {notifications.length === 0 ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#999' }}>
              No notifications yet
            </div>
          ) : (
            notifications.map(notif => (
              <Link
                key={notif.id}
                href={getNotificationLink(notif)}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderBottom: '1px solid #f9fafb',
                  textDecoration: 'none',
                  color: 'inherit',
                  background: notif.read_at ? 'white' : '#f0f4ff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.9rem' }}>{notif.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#999' }}>{formatTime(notif.created_at)}</span>
                </div>
                {notif.body && (
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#666' }}>{notif.body}</p>
                )}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  )
}
