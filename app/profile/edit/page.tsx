'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { splitDisplayName, validateFirstAndLastName } from '@/lib/name-validation'
import { ALLOWED_PROFILE_PHOTO_TYPES, MAX_PROFILE_PHOTO_SIZE, PROFILE_PHOTO_BUCKET } from '@/lib/profile-photo'
import { GENDER_OPTIONS } from '@/lib/constants'

const LOOKING_FOR_OPTIONS = [
  { value: 'dating', label: 'Dating' },
  { value: 'friendship', label: 'Friendship' },
  { value: 'experience_exchange', label: 'Experience Exchange' },
  { value: 'volunteering', label: 'Volunteering' },
]

const ALLOWED_GENDERS = new Set(GENDER_OPTIONS.map((o) => o.value))

const COMMUNICATION_OPTIONS = [
  { value: 'text', label: 'Text Chat' },
  { value: 'voice', label: 'Voice Call' },
  { value: 'video', label: 'Video Call' },
  { value: 'sign_language', label: 'Sign Language' },
]

export default function EditProfilePage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploadingPhoto, setUploadingPhoto] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('error')
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
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
    profile_photo: '' as string | null,
  })

  const [interests, setInterests] = useState<string[]>([])
  const [interestInput, setInterestInput] = useState('')
  const [communicationPrefs, setCommunicationPrefs] = useState<string[]>([])

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }
    setUser(user)

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (error || !profile) {
      router.push('/profile/create')
      return
    }

    setFormData({
      display_name: profile.display_name || '',
      date_of_birth: profile.date_of_birth || '',
      gender: ALLOWED_GENDERS.has(profile.gender || '') ? profile.gender : '',
      bio: profile.bio || '',
      location: profile.location || '',
      disability_type: profile.disability_type || '',
      looking_for: profile.looking_for || '',
      profile_photo: profile.profile_photo || null,
    })
    setInterests(profile.interests || [])
    setCommunicationPrefs(profile.communication_preferences || [])
    setPhotoPreview(profile.profile_photo || null)
    const parsed = splitDisplayName(profile.display_name || '')
    setFirstName(parsed.firstName)
    setLastName(parsed.lastName)
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user) return

    // Validate
    if (!ALLOWED_PROFILE_PHOTO_TYPES.includes(file.type)) {
      setMessage('Please upload a JPEG, PNG, or WebP image.')
      setMessageType('error')
      return
    }
    if (file.size > MAX_PROFILE_PHOTO_SIZE) {
      setMessage('Image must be under 5MB.')
      setMessageType('error')
      return
    }

    setUploadingPhoto(true)
    setMessage('')

    const ext = file.name.split('.').pop()
    const filePath = `${user.id}/avatar.${ext}`

    const { error: uploadError } = await supabase.storage
      .from(PROFILE_PHOTO_BUCKET)
      .upload(filePath, file, { upsert: true, cacheControl: '3600' })

    if (uploadError) {
      setMessage('Failed to upload photo: ' + uploadError.message)
      setMessageType('error')
      setUploadingPhoto(false)
      return
    }

    const { data: { publicUrl } } = supabase.storage
      .from(PROFILE_PHOTO_BUCKET)
      .getPublicUrl(filePath)

    // Add cache-bust to force refresh
    const photoUrl = `${publicUrl}?t=${Date.now()}`
    setFormData(prev => ({ ...prev, profile_photo: photoUrl }))
    setPhotoPreview(photoUrl)
    setUploadingPhoto(false)
  }

  const handleRemovePhoto = () => {
    setFormData((prev) => ({ ...prev, profile_photo: null }))
    setPhotoPreview(null)
    setMessage('Photo removed. Click "Save Changes" to apply.')
    setMessageType('success')
  }

  const addInterest = () => {
    const trimmed = interestInput.trim()
    if (trimmed && interests.length < 10 && !interests.includes(trimmed)) {
      setInterests([...interests, trimmed])
      setInterestInput('')
    }
  }

  const removeInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest))
  }

  const toggleCommunicationPref = (pref: string) => {
    setCommunicationPrefs(prev =>
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setSaving(true)
    setMessage('')
    const nameValidation = validateFirstAndLastName(firstName, lastName)
    if (!nameValidation.valid) {
      setMessage(nameValidation.error || 'Enter a valid first and last name.')
      setMessageType('error')
      setSaving(false)
      return
    }

    if (!ALLOWED_GENDERS.has(formData.gender)) {
      setMessage('Please choose Male or Female.')
      setMessageType('error')
      setSaving(false)
      return
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: nameValidation.fullName,
        gender: formData.gender,
        bio: formData.bio,
        location: formData.location,
        disability_type: formData.disability_type,
        looking_for: formData.looking_for,
        interests,
        communication_preferences: communicationPrefs,
        profile_photo: formData.profile_photo,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)

    if (error) {
      setMessage(error.message)
      setMessageType('error')
    } else {
      setMessage('Profile updated successfully!')
      setMessageType('success')
    }
    setSaving(false)
  }

  if (loading) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
  }

  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Edit Profile</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Update your profile information.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Photo */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div
            onClick={() => fileInputRef.current?.click()}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              background: photoPreview
                ? `url(${photoPreview}) center/cover no-repeat`
                : 'linear-gradient(135deg, var(--primary) 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '3px solid #e5e7eb',
              color: 'white',
              fontSize: photoPreview ? '0' : '2.5rem',
              fontWeight: 'bold',
            }}
          >
            {!photoPreview && ((firstName || formData.display_name)?.charAt(0).toUpperCase() || '?')}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handlePhotoUpload}
            style={{ display: 'none' }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadingPhoto}
            style={{
              padding: '0.5rem 1rem',
              background: 'transparent',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            {uploadingPhoto ? 'Uploading...' : 'Change Photo'}
          </button>
          {photoPreview && (
            <button
              type="button"
              onClick={handleRemovePhoto}
              style={{
                marginLeft: '0.5rem',
                padding: '0.5rem 1rem',
                background: '#fff',
                border: '1px solid #ef4444',
                color: '#ef4444',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Remove Photo
            </button>
          )}
        </div>

        {/* First + Last Name */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            First Name *
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            maxLength={50}
            placeholder="First name"
            autoComplete="given-name"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Last Name *
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            maxLength={50}
            placeholder="Last name"
            autoComplete="family-name"
            style={inputStyle}
          />
          <small style={{ color: '#666', fontSize: '0.85rem' }}>
            Use letters only (hyphen and apostrophe are allowed).
          </small>
        </div>

        {/* Date of Birth (read-only) */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Date of Birth
          </label>
          <input
            type="date"
            value={formData.date_of_birth}
            disabled
            style={{ ...inputStyle, background: '#f5f5f5', color: '#999' }}
          />
          <small style={{ color: '#999', fontSize: '0.85rem' }}>
            Date of birth cannot be changed
          </small>
        </div>

        {/* Gender */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Gender *
          </label>
          <select name="gender" value={formData.gender} onChange={handleChange} required style={inputStyle}>
            <option value="">Select gender</option>
            {GENDER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, Country"
            style={inputStyle}
          />
        </div>

        {/* Disability Type */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Disability Type (Optional)
          </label>
          <input
            type="text"
            name="disability_type"
            value={formData.disability_type}
            onChange={handleChange}
            placeholder="e.g., Visual impairment, Mobility, Hearing, etc."
            style={inputStyle}
          />
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Bio *
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            rows={5}
            maxLength={1000}
            placeholder="Tell us about yourself..."
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <small style={{ color: '#666', fontSize: '0.85rem' }}>
            {formData.bio.length}/1000
          </small>
        </div>

        {/* Looking For */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Looking For
          </label>
          <select name="looking_for" value={formData.looking_for} onChange={handleChange} style={inputStyle}>
            <option value="">Select what you're looking for</option>
            {LOOKING_FOR_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Interests (Tags) */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Interests ({interests.length}/10)
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input
              type="text"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addInterest()
                }
              }}
              placeholder="Type and press Enter"
              maxLength={30}
              style={{ ...inputStyle, flex: 1 }}
            />
            <button
              type="button"
              onClick={addInterest}
              disabled={interests.length >= 10}
              style={{
                padding: '0.75rem 1rem',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Add
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {interests.map(interest => (
              <span
                key={interest}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.4rem 0.8rem',
                  background: '#f0f4ff',
                  color: 'var(--primary)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                }}
              >
                {interest}
                <button
                  type="button"
                  onClick={() => removeInterest(interest)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary)',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    lineHeight: 1,
                    padding: 0,
                  }}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Communication Preferences */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Communication Preferences
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {COMMUNICATION_OPTIONS.map(opt => (
              <label
                key={opt.value}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  border: communicationPrefs.includes(opt.value) ? '2px solid var(--primary)' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: communicationPrefs.includes(opt.value) ? '#f0f4ff' : 'white',
                }}
              >
                <input
                  type="checkbox"
                  checked={communicationPrefs.includes(opt.value)}
                  onChange={() => toggleCommunicationPref(opt.value)}
                  style={{ display: 'none' }}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div style={{
            padding: '0.75rem',
            marginBottom: '1rem',
            background: messageType === 'success' ? '#d1fae5' : '#f8d7da',
            color: messageType === 'success' ? '#065f46' : '#721c24',
            borderRadius: '6px',
            border: `1px solid ${messageType === 'success' ? '#a7f3d0' : '#f5c6cb'}`,
          }}>
            {message}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={saving}
          className="button"
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            opacity: saving ? 0.6 : 1,
          }}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>

        {/* Links */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link href="/" style={{ color: 'var(--primary)' }}>Dashboard</Link>
          <Link href="/profile/blocked" style={{ color: '#666' }}>Blocked Users</Link>
        </div>
      </form>
    </div>
  )
}
