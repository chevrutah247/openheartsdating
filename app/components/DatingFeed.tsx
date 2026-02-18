'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import ProfileCard from './ProfileCard'
import Link from 'next/link'

interface Profile {
  id: string
  display_name: string
  age: number
  location: string
  bio: string
  disability_type: string
  looking_for: string
  interests: string[]
  communication_preferences: string[]
  verification_status: string
  photo_url: string | null
}

export default function DatingFeed({ userId }: { userId: string }) {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [likedUsers, setLikedUsers] = useState<Set<string>>(new Set())
  const [blockedUsers, setBlockedUsers] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [matchModal, setMatchModal] = useState<string | null>(null)
  const [filter, setFilter] = useState({
    lookingFor: 'all',
    location: '',
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    // Load likes, blocks, and profiles in parallel
    const [likesRes, blocksRes, profilesRes] = await Promise.all([
      supabase.from('likes').select('to_user_id').eq('from_user_id', userId),
      supabase.from('blocked_users').select('blocked_user_id').eq('user_id', userId),
      supabase
        .from('profiles')
        .select('*')
        .eq('verification_status', 'verified')
        .neq('id', userId)
        .order('created_at', { ascending: false }),
    ])

    if (likesRes.data) {
      setLikedUsers(new Set(likesRes.data.map(l => l.to_user_id)))
    }
    if (blocksRes.data) {
      setBlockedUsers(new Set(blocksRes.data.map(b => b.blocked_user_id)))
    }
    if (profilesRes.data) {
      setProfiles(profilesRes.data)
    }

    setLoading(false)
  }

  const handleLike = async (toUserId: string) => {
    const { error } = await supabase
      .from('likes')
      .insert([{ from_user_id: userId, to_user_id: toUserId }])

    if (error) return

    setLikedUsers(prev => new Set([...prev, toUserId]))

    // Check for mutual like
    const { data: mutualLike } = await supabase
      .from('likes')
      .select('id')
      .eq('from_user_id', toUserId)
      .eq('to_user_id', userId)
      .single()

    if (mutualLike) {
      const user1 = userId < toUserId ? userId : toUserId
      const user2 = userId < toUserId ? toUserId : userId

      await supabase
        .from('matches')
        .insert([{ user1_id: user1, user2_id: user2 }])

      const matchedProfile = profiles.find(p => p.id === toUserId)
      setMatchModal(matchedProfile?.display_name || 'Someone')
    }
  }

  const handleUnlike = async (toUserId: string) => {
    await supabase
      .from('likes')
      .delete()
      .eq('from_user_id', userId)
      .eq('to_user_id', toUserId)

    setLikedUsers(prev => {
      const newSet = new Set(prev)
      newSet.delete(toUserId)
      return newSet
    })
  }

  const filteredProfiles = profiles.filter(p => {
    if (blockedUsers.has(p.id)) return false
    if (filter.lookingFor !== 'all' && p.looking_for !== filter.lookingFor) return false
    if (filter.location && !p.location?.toLowerCase().includes(filter.location.toLowerCase())) return false
    return true
  })

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--gray-400)' }}>
        Loading profiles...
      </div>
    )
  }

  return (
    <div className="feed-container">
      {/* Filters */}
      <div className="feed-filters">
        <select
          value={filter.lookingFor}
          onChange={(e) => setFilter({ ...filter, lookingFor: e.target.value })}
          aria-label="Filter by looking for"
        >
          <option value="all">All</option>
          <option value="dating">Dating</option>
          <option value="friendship">Friendship</option>
          <option value="experience_exchange">Experience Exchange</option>
        </select>
        <input
          type="text"
          placeholder="City or country..."
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
          aria-label="Filter by location"
        />
      </div>

      {/* Profiles */}
      {filteredProfiles.length === 0 ? (
        <div className="feed-empty">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#128269;</div>
          <h2>No profiles found</h2>
          <p>Try adjusting your filters or check back later</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredProfiles.map((p) => (
            <ProfileCard
              key={p.id}
              profile={p}
              liked={likedUsers.has(p.id)}
              onLike={() => handleLike(p.id)}
              onUnlike={() => handleUnlike(p.id)}
            />
          ))}
        </div>
      )}

      {/* Match modal */}
      {matchModal && (
        <div className="match-modal-overlay" onClick={() => setMatchModal(null)}>
          <div className="match-modal" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#10084;&#65039;</div>
            <h2>It&apos;s a Match!</h2>
            <p style={{ color: 'var(--gray-500)', margin: '0.5rem 0 1.5rem' }}>
              You and {matchModal} liked each other!
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setMatchModal(null)}
                className="button button-secondary"
                style={{ flex: 1 }}
              >
                Keep Browsing
              </button>
              <Link
                href="/messages"
                className="button button-primary"
                style={{ flex: 1 }}
              >
                Message
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
