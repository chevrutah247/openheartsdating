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
import { validateFirstAndLastName } from '@/lib/name-validation'
import { ALLOWED_PROFILE_PHOTO_TYPES, MAX_PROFILE_PHOTO_SIZE, PROFILE_PHOTO_BUCKET } from '@/lib/profile-photo'
import {
  MIN_REGISTRATION_AGE,
  MAX_REGISTRATION_AGE,
  getBirthDateBounds,
  getBirthYearOptions,
  isValidBirthDate,
} from '@/lib/age-policy'

const STEPS = ['Basics', 'Photo', 'About', 'Preferences']

const MONTH_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 1)

export default function CreateProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const birthDateBounds = getBirthDateBounds()
  const yearOptions = getBirthYearOptions()
  const [birthYear, setBirthYear] = useState('')
  const [birthMonth, setBirthMonth] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

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

  const getDaysInMonth = (year: string, month: string) => {
    if (!year || !month) return 31
    return new Date(Number(year), Number(month), 0).getDate()
  }

  const syncBirthDate = (year: string, month: string, day: string) => {
    if (!year || !month || !day) {
      setFormData((prev) => ({ ...prev, date_of_birth: '' }))
      return
    }

    const date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    setFormData((prev) => ({ ...prev, date_of_birth: date }))
  }

  const handleBirthYearChange = (value: string) => {
    setBirthYear(value)
    const maxDay = getDaysInMonth(value, birthMonth)
    const nextDay = birthDay && Number(birthDay) > maxDay ? '' : birthDay
    setBirthDay(nextDay)
    syncBirthDate(value, birthMonth, nextDay)
  }

  const handleBirthMonthChange = (value: string) => {
    setBirthMonth(value)
    const maxDay = getDaysInMonth(birthYear, value)
    const nextDay = birthDay && Number(birthDay) > maxDay ? '' : birthDay
    setBirthDay(nextDay)
    syncBirthDate(birthYear, value, nextDay)
  }

  const handleBirthDayChange = (value: string) => {
    setBirthDay(value)
    syncBirthDate(birthYear, birthMonth, value)
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
      if (!ALLOWED_PROFILE_PHOTO_TYPES.includes(file.type)) {
        setError('Please upload a JPEG, PNG, or WebP image.')
        return
      }
      if (file.size > MAX_PROFILE_PHOTO_SIZE) {
        setError('Image must be under 5MB.')
        return
      }
      setError('')
      setPhotoFile(file)
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  const canProceed = () => {
    const nameValidation = validateFirstAndLastName(firstName, lastName)
    if (step === 0) {
      return Boolean(
        nameValidation.valid &&
        formData.date_of_birth &&
        formData.gender &&
        isValidBirthDate(formData.date_of_birth)
      )
    }
    return true
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    if (!user) {
      setError('Session expired. Please sign in again.')
      setLoading(false)
      return
    }

    const nameValidation = validateFirstAndLastName(firstName, lastName)
    if (!nameValidation.valid) {
      setError(nameValidation.error || 'Enter a valid first and last name.')
      setLoading(false)
      return
    }

    if (!isValidBirthDate(formData.date_of_birth)) {
      setError(`Date of birth is invalid. Age must be between ${MIN_REGISTRATION_AGE} and ${MAX_REGISTRATION_AGE}.`)
      setLoading(false)
      return
    }

    let photoUrl = null

    // Upload photo if provided
    if (photoFile) {
      const ext = photoFile.name.split('.').pop()
      const path = `${user.id}/avatar.${ext}`

      const { error: uploadError } = await supabase.storage
        .from(PROFILE_PHOTO_BUCKET)
        .upload(path, photoFile, { upsert: true })

      if (uploadError) {
        setError(`Failed to upload photo: ${uploadError.message}`)
        setLoading(false)
        return
      }

      const { data: urlData } = supabase.storage
        .from(PROFILE_PHOTO_BUCKET)
        .getPublicUrl(path)
      photoUrl = urlData.publicUrl
    }

    const { error } = await supabase
      .from('profiles')
      .insert([
        {
          id: user.id,
          email: user.email,
          ...formData,
          display_name: nameValidation.fullName,
          profile_photo: photoUrl,
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
            <label>First Name *</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <label>Last Name *</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              autoComplete="family-name"
              required
            />
            <small style={{ display: 'block', marginTop: '0.5rem', color: 'var(--gray-500)' }}>
              Use letters only (hyphen and apostrophe are allowed).
            </small>
          </div>
          <div>
            <label>Date of Birth *</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '0.5rem' }}>
              <select value={birthYear} onChange={(e) => handleBirthYearChange(e.target.value)} required>
                <option value="">Year</option>
                {yearOptions.map((year) => (
                  <option key={year} value={String(year)}>
                    {year}
                  </option>
                ))}
              </select>
              <select value={birthMonth} onChange={(e) => handleBirthMonthChange(e.target.value)} required disabled={!birthYear}>
                <option value="">Month</option>
                {MONTH_OPTIONS.map((month) => (
                  <option key={month} value={String(month)}>
                    {month}
                  </option>
                ))}
              </select>
              <select value={birthDay} onChange={(e) => handleBirthDayChange(e.target.value)} required disabled={!birthYear || !birthMonth}>
                <option value="">Day</option>
                {Array.from({ length: getDaysInMonth(birthYear, birthMonth) }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={String(day)}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <small style={{ display: 'block', marginTop: '0.5rem', color: 'var(--gray-500)' }}>
              Age must be between {MIN_REGISTRATION_AGE} and {MAX_REGISTRATION_AGE}. Allowed birth date range: {birthDateBounds.min} to {birthDateBounds.max}.
            </small>
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
