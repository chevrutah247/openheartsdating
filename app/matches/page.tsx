'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import VerificationPrompt from '../components/VerificationPrompt'

interface Match {
  id: string
  created_at: string
  other_user: {
    id: string
    display_name: string
    age: number
    location: string
    bio: string
    looking_for: string
    photo_url: string | null
  }
}

export default function MatchesPage() {
  const router = useRouter()
  const [matches, setMatches] = useState<Match[]>([])
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUserAndLoadMatches()
  }, [])

  const checkUserAndLoadMatches = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/login')
      return
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('verification_status')
      .eq('id', user.id)
      .single()

    setVerificationStatus(profile?.verification_status || null)

    if (profile?.verification_status !== 'verified') {
      setLoading(false)
      return
    }

    await loadMatches(user.id)
    setLoading(false)
  }

  const loadMatches = async (userId: string) => {
    const { data: matches1 } = await supabase
      .from('matches')
      .select('id, created_at, user2_id')
      .eq('user1_id', userId)

    const { data: matches2 } = await supabase
      .from('matches')
      .select('id, created_at, user1_id')
      .eq('user2_id', userId)

    const otherUserIds: string[] = []
    const matchMap: Record<string, { id: string; created_at: string }> = {}

    if (matches1) {
      matches1.forEach(m => {
        otherUserIds.push(m.user2_id)
        matchMap[m.user2_id] = { id: m.id, created_at: m.created_at }
      })
    }

    if (matches2) {
      matches2.forEach(m => {
        otherUserIds.push(m.user1_id)
        matchMap[m.user1_id] = { id: m.id, created_at: m.created_at }
      })
    }

    if (otherUserIds.length === 0) {
      setMatches([])
      return
    }

    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name, age, location, bio, looking_for, photo_url')
      .in('id', otherUserIds)

    if (profiles) {
      const matchesWithProfiles = profiles.map(p => ({
        id: matchMap[p.id].id,
        created_at: matchMap[p.id].created_at,
        other_user: p,
      }))

      matchesWithProfiles.sort((a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )

      setMatches(matchesWithProfiles)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--gray-400)' }}>
        Loading...
      </div>
    )
  }

  if (verificationStatus !== 'verified') {
    return <VerificationPrompt status={verificationStatus || 'unverified'} />
  }

  return (
    <section style={{ padding: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Matches</h1>
      <p style={{ color: 'var(--gray-500)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        {matches.length} {matches.length === 1 ? 'match' : 'matches'}
      </p>

      {matches.length === 0 ? (
        <div className="feed-empty">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#128149;</div>
          <h2>No matches yet</h2>
          <p style={{ marginBottom: '1.5rem' }}>Keep browsing — when someone likes you back, they appear here!</p>
          <Link href="/browse" className="button button-primary">
            Browse Profiles
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {matches.map((match) => {
            const initial = match.other_user.display_name?.charAt(0).toUpperCase() || '?'
            return (
              <div
                key={match.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <div className="avatar large" style={{ width: 56, height: 56, fontSize: '1.3rem' }}>
                  {match.other_user.photo_url ? (
                    <img src={match.other_user.photo_url} alt="" />
                  ) : (
                    initial
                  )}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600 }}>
                    {match.other_user.display_name || 'Anonymous'}
                  </div>
                  <p style={{ margin: 0, color: 'var(--gray-500)', fontSize: '0.85rem' }}>
                    {match.other_user.age ? `${match.other_user.age}` : ''}
                    {match.other_user.location ? ` · ${match.other_user.location}` : ''}
                    {' · '}{formatDate(match.created_at)}
                  </p>
                </div>

                <Link
                  href={`/messages/${match.other_user.id}`}
                  className="button button-primary button-small"
                >
                  Message
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
