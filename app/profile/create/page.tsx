'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import {
  GENDER_OPTIONS,
  DISABILITY_OPTIONS,
  LOOKING_FOR_OPTIONS,
  COMMUNICATION_OPTIONS,
  INTEREST_OPTIONS,
} from '@/lib/constants'

const STEPS = ['Basics', 'Photo', 'About', 'Preferences']

export default function CreateProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    display_name: '',
    date_of_birth: '',
    gender: '',
    bio: '',
    location: '',
    disability_type: '',
    looking_for: '',
    interests: [] as string[],
    communication_preferences: [] as string[],
  })

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
    } else {
      setUser(user)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const toggleComm = (comm: string) => {
    setFormData(prev => ({
      ...prev,
      communication_preferences: prev.communication_preferences.includes(comm)
        ? prev.communication_preferences.filter(c => c !== comm)
        : [...prev.communication_preferences, comm],
    }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoFile(file)
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  const canProceed = () => {
    if (step === 0) return formData.display_name && formData.date_of_birth && formData.gender
    return true
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    if (!user) return

    let photo_url = null

    // Upload photo if provided
    if (photoFile) {
      const ext = photoFile.name.split('.').pop()
      const path = `${user.id}/profile.${ext}`

      const { error: uploadError } = await supabase.storage
        .from('photos')
        .upload(path, photoFile, { upsert: true })

      if (!uploadError) {
        const { data: urlData } = supabase.storage
          .from('photos')
          .getPublicUrl(path)
        photo_url = urlData.publicUrl
      }
    }

    const { error } = await supabase
      .from('profiles')
      .insert([
        {
          id: user.id,
          email: user.email,
          ...formData,
          photo_url,
        },
      ])

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/verify')
    }
  }

  if (!user) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--gray-400)' }}>
        Loading...
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '0 1.5rem' }}>
      {/* Progress */}
      <div className="wizard-progress">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`step${i < step ? ' completed' : ''}${i === step ? ' active' : ''}`}
          />
        ))}
      </div>

      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
        {STEPS[step]}
      </h1>
      <p style={{ color: 'var(--gray-500)', marginBottom: '2rem', fontSize: '0.95rem' }}>
        Step {step + 1} of {STEPS.length}
      </p>

      {/* Step 0: Basics */}
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label>Display Name *</label>
            <input
              type="text"
              name="display_name"
              value={formData.display_name}
              onChange={handleChange}
              placeholder="How should others see your name?"
              required
            />
          </div>
          <div>
            <label>Date of Birth *</label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label>Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              {GENDER_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 1: Photo */}
      {step === 1 && (
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: 'var(--radius-xl)',
              background: 'var(--gray-100)',
              margin: '0 auto 1.5rem',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {photoPreview ? (
              <img src={photoPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ fontSize: '3rem', color: 'var(--gray-300)' }}>&#128247;</span>
            )}
          </div>
          <label
            htmlFor="photo-upload"
            className="button button-secondary"
            style={{ cursor: 'pointer', display: 'inline-flex' }}
          >
            {photoFile ? 'Change Photo' : 'Upload Photo'}
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
          <p style={{ color: 'var(--gray-400)', fontSize: '0.85rem', marginTop: '1rem' }}>
            Optional — you can add a photo later
          </p>
        </div>
      )}

      {/* Step 2: About */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label>Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Tell others about yourself..."
              style={{ resize: 'vertical' }}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
            />
          </div>
          <div>
            <label>Disability Type</label>
            <select
              name="disability_type"
              value={formData.disability_type}
              onChange={handleChange}
            >
              <option value="">Select (optional)</option>
              {DISABILITY_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 3: Preferences */}
      {step === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label>Looking For</label>
            <select
              name="looking_for"
              value={formData.looking_for}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {LOOKING_FOR_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Interests</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {INTEREST_OPTIONS.map(interest => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    border: formData.interests.includes(interest) ? '2px solid var(--primary)' : '1.5px solid var(--gray-200)',
                    background: formData.interests.includes(interest) ? 'rgba(232, 96, 124, 0.1)' : 'white',
                    color: formData.interests.includes(interest) ? 'var(--primary-dark)' : 'var(--gray-600)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label>Communication Preferences</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {COMMUNICATION_OPTIONS.map(comm => (
                <button
                  key={comm.value}
                  type="button"
                  onClick={() => toggleComm(comm.value)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    border: formData.communication_preferences.includes(comm.value) ? '2px solid var(--primary)' : '1.5px solid var(--gray-200)',
                    background: formData.communication_preferences.includes(comm.value) ? 'rgba(232, 96, 124, 0.1)' : 'white',
                    color: formData.communication_preferences.includes(comm.value) ? 'var(--primary-dark)' : 'var(--gray-600)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {comm.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: 'var(--error-bg)',
          color: 'var(--error-text)',
          borderRadius: 'var(--radius-md)',
        }}>
          {error}
        </div>
      )}

      {/* Navigation buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="button button-secondary"
            style={{ flex: 1 }}
          >
            Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="button button-primary"
            style={{ flex: 1 }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="button button-primary"
            style={{ flex: 1, opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Creating...' : 'Create Profile'}
          </button>
        )}
      </div>
    </div>
  )
}
