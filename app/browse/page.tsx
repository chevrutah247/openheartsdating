'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import DatingFeed from '../components/DatingFeed'
import VerificationPrompt from '../components/VerificationPrompt'

export default function BrowsePage() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
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

    setUserId(user.id)
    setVerificationStatus(profile?.verification_status || null)
    setLoading(false)
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

  return <DatingFeed userId={userId!} />
}
