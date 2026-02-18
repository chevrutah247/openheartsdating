'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const SAMPLE_PROFILES = [
  { id: 1, name: 'Sarah', age: 28, location: 'New York', bio: 'Artist and coffee lover. I use a wheelchair and it has never stopped me from exploring the world.', looking_for: 'Dating', photo: '/images/samples/face-1.jpg' },
  { id: 2, name: 'James', age: 32, location: 'London', bio: 'Software engineer. Deaf since birth — fluent in ASL and BSL. Love hiking and board games.', looking_for: 'Dating', photo: '/images/samples/face-2.jpg' },
  { id: 3, name: 'Emily', age: 26, location: 'Toronto', bio: 'Teacher with low vision. Passionate about books, cooking, and meaningful conversations.', looking_for: 'Dating', photo: '/images/samples/face-3.jpg' },
  { id: 4, name: 'Michael', age: 35, location: 'Chicago', bio: 'Living with MS. Sports fan, amateur chef, and full-time optimist.', looking_for: 'Friendship', photo: '/images/samples/face-4.jpg' },
  { id: 5, name: 'Aisha', age: 24, location: 'Dubai', bio: 'Graphic designer with cerebral palsy. I create beautiful things and I am looking for a beautiful connection.', looking_for: 'Dating', photo: '/images/samples/face-5.jpg' },
  { id: 6, name: 'Daniel', age: 29, location: 'Sydney', bio: 'Musician and songwriter. Autism is my superpower — deep focus, perfect pitch.', looking_for: 'Dating', photo: '/images/samples/face-6.jpg' },
  { id: 7, name: 'Olivia', age: 31, location: 'Berlin', bio: 'Psychologist. Chronic pain warrior. Looking for someone who gets the good days and the bad.', looking_for: 'Dating', photo: '/images/samples/face-7.jpg' },
  { id: 8, name: 'David', age: 27, location: 'Paris', bio: 'Photographer with a prosthetic leg. Travel addict. Life is an adventure.', looking_for: 'Dating', photo: '/images/samples/face-8.jpg' },
  { id: 9, name: 'Sophia', age: 30, location: 'Barcelona', bio: 'Yoga instructor who is blind. I see the world differently — and it is beautiful.', looking_for: 'Dating', photo: '/images/samples/face-9.jpg' },
  { id: 10, name: 'Ryan', age: 33, location: 'Boston', bio: 'Writer and podcast host. ADHD brain that never stops. Looking for my person.', looking_for: 'Dating', photo: '/images/samples/face-10.jpg' },
  { id: 11, name: 'Luna', age: 25, location: 'Los Angeles', bio: 'Film student with epilepsy. Dreamer, storyteller, and cat mom.', looking_for: 'Dating', photo: '/images/samples/face-11.jpg' },
  { id: 12, name: 'Alex', age: 34, location: 'Amsterdam', bio: 'Data scientist. Hard of hearing. Fluent in 3 languages and still learning.', looking_for: 'Dating', photo: '/images/samples/face-12.jpg' },
  { id: 13, name: 'Isabella', age: 27, location: 'Miami', bio: 'Marine biologist with fibromyalgia. Ocean lover. Spoon theory is my daily planner.', looking_for: 'Friendship', photo: '/images/samples/face-13.jpg' },
  { id: 14, name: 'Nathan', age: 30, location: 'Seattle', bio: 'Game developer. Wheelchair user since 18. Building virtual worlds, looking for a real connection.', looking_for: 'Dating', photo: '/images/samples/face-14.jpg' },
  { id: 15, name: 'Chloe', age: 23, location: 'Melbourne', bio: 'Nursing student with Type 1 diabetes. Foodie, dancer, and eternal optimist.', looking_for: 'Dating', photo: '/images/samples/face-15.jpg' },
  { id: 16, name: 'Marcus', age: 36, location: 'Cape Town', bio: 'Entrepreneur. Amputee and proud. Running marathons, running a business, running out of excuses not to date.', looking_for: 'Dating', photo: '/images/samples/face-16.jpg' },
  { id: 17, name: 'Priya', age: 28, location: 'Mumbai', bio: 'UX designer with dyslexia. Making the digital world accessible, one interface at a time.', looking_for: 'Dating', photo: '/images/samples/face-17.jpg' },
  { id: 18, name: 'Tom', age: 31, location: 'Dublin', bio: 'Comedian with Tourette syndrome. Yes, it makes my sets more interesting. Love dogs and rainy days.', looking_for: 'Dating', photo: '/images/samples/face-18.jpg' },
  { id: 19, name: 'Maya', age: 29, location: 'Stockholm', bio: 'Environmental scientist. Partially sighted. Nature heals everything — let us go for a walk.', looking_for: 'Dating', photo: '/images/samples/face-19.jpg' },
  { id: 20, name: 'Chris', age: 26, location: 'Vancouver', bio: 'Physical therapist with scoliosis. Ironic? Maybe. Empathetic? Definitely.', looking_for: 'Friendship', photo: '/images/samples/face-20.jpg' },
]

export default function GuestHero() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/profile/create`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/profile/create')
    }
  }

  return (
    <>
      <section className="hero-guest">
        <h1>Find Someone Who Gets It</h1>
        <p className="subtitle">
          The first dating platform built for people with disabilities.
          Free, safe, and actually accessible.
        </p>

        <div className="signup-form">
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              aria-label="Password"
            />
            {error && (
              <p style={{ color: 'var(--error)', fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
                {error}
              </p>
            )}
            <button type="submit" disabled={loading}>
              {loading ? 'Creating Account...' : 'Join Free'}
            </button>
          </form>
          <p style={{ margin: '1rem 0 0', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </section>

      {/* Sample profiles preview */}
      <section style={{ padding: '0 1rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
          People Already Here
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--gray-500)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Join and start connecting today
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
        }}>
          {SAMPLE_PROFILES.map((profile) => (
            <div
              key={profile.id}
              className="profile-card"
              onClick={() => router.push('/signup')}
              style={{ cursor: 'pointer' }}
            >
              <div className="profile-card-photo" style={{ height: 280 }}>
                <Image
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.age}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 240px"
                />
                <div className="profile-card-overlay">
                  <h3>{profile.name}, {profile.age}</h3>
                  <p>{profile.location}</p>
                </div>
              </div>
              <div className="profile-card-body">
                <p className="bio">{profile.bio.length > 100 ? profile.bio.substring(0, 100) + '...' : profile.bio}</p>
                <div className="profile-card-tags">
                  <span className="profile-card-tag looking-for">{profile.looking_for}</span>
                </div>
              </div>
              <div className="profile-card-actions">
                <span className="btn-view" style={{ flex: 1, textAlign: 'center', display: 'block' }}>
                  Sign up to connect
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section style={{ padding: '2rem 1rem 4rem', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="hero-guest">
            <div className="value-props">
              <div className="value-prop">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#9829;</div>
                <h3>No Barriers</h3>
                <p>Designed so disability is understood, not explained on the first date.</p>
              </div>
              <div className="value-prop">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#9733;</div>
                <h3>100% Accessible</h3>
                <p>Screen reader support, keyboard navigation, high contrast. Tested by real users.</p>
              </div>
              <div className="value-prop">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#10003;</div>
                <h3>Verified & Safe</h3>
                <p>Identity verification, active moderation, and robust safety tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
