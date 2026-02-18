'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import GuestHero from './GuestHero'
import DatingFeed from './DatingFeed'
import VerificationPrompt from './VerificationPrompt'

export default function HomeContent() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
        loadProfile(session.user.id)
      } else {
        setUser(null)
        setProfile(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setLoading(false)
      return
    }

    setUser(user)
    await loadProfile(user.id)
    setLoading(false)
  }

  const loadProfile = async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    setProfile(data)
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--gray-400)' }}>
        Loading...
      </div>
    )
  }

  // Guest
  if (!user) {
    return <GuestHero />
  }

  // Logged in but no profile
  if (!profile?.display_name) {
    router.push('/profile/create')
    return null
  }

  // Not verified
  if (profile.verification_status !== 'verified') {
    return <VerificationPrompt status={profile.verification_status} />
  }

  // Verified - show dating feed
  return <DatingFeed userId={user.id} />
}
