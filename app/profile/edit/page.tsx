'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EditProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploadingPhoto, setUploadingPhoto] = useState(false)
  
  // Form fields
  const [displayName, setDisplayName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState('')
  const [disabilityType, setDisabilityType] = useState('')
  const [bio, setBio] = useState('')
  const [lookingFor, setLookingFor] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState('')

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    // Load current profile data
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileData) {
      setDisplayName(profileData.display_name || '')
      setDateOfBirth(profileData.date_of_birth || '')
      setGender(profileData.gender || '')
      setLocation(profileData.location || '')
      setDisabilityType(profileData.disability_type || '')
      setBio(profileData.bio || '')
      setLookingFor(profileData.looking_for || '')
      setProfilePhoto(profileData.profile_photo || '')
      setPhotoPreview(profileData.profile_photo || '')
    }

    setLoading(false)
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB')
        return
      }

      setPhotoFile(file)

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadPhoto = async () => {
    if (!photoFile || !user) return null

    setUploadingPhoto(true)

    try {
      // Create unique filename
      const fileExt = photoFile.name.split('.').pop()
      const fileName = `${user.id}-${Date.now()}.${fileExt}`
      const filePath = `${fileName}`

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('profile-photos')
        .upload(filePath, photoFile, {
          cacheControl: '3600',
          upsert: true
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        throw uploadError
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profile-photos')
        .getPublicUrl(filePath)

      setUploadingPhoto(false)
      return publicUrl
    } catch (error) {
      console.error('Error uploading photo:', error)
      setUploadingPhoto(false)
      alert('Failed to upload photo. Please try again.')
      return null
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) return

    // Validation
    if (!displayName.trim()) {
      alert('Display name is required')
      return
    }

    if (dateOfBirth) {
      const age = calculateAge(dateOfBirth)
      if (age < 18) {
        alert('You must be at least 18 years old')
        return
      }
    }

    setSaving(true)

    try {
      let photoUrl = profilePhoto

      // Upload new photo if selected
      if (photoFile) {
        const uploadedUrl = await uploadPhoto()
        if (uploadedUrl) {
          photoUrl = uploadedUrl
        }
      }

      // Update profile
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: displayName.trim(),
          date_of_birth: dateOfBirth || null,
          gender: gender || null,
          location: location.trim() || null,
          disability_type: disabilityType || null,
          bio: bio.trim() || null,
          looking_for: lookingFor.trim() || null,
          profile_photo: photoUrl || null
        })
        .eq('id', user.id)

      if (error) {
        console.error('Update error:', error)
        alert('Failed to update profile. Please try again.')
        setSaving(false)
        return
      }

      // Success - redirect to profile
      alert('Profile updated successfully!')
      router.push(`/profile/${user.id}`)
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
      setSaving(false)
    }
  }

  const calculateAge = (dob: string) => {
    const today = new Date()
    const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  if (loading) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1.5rem' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Edit Profile</h1>
        <Link 
          href={`/profile/${user?.id}`}
          style={{
            padding: '0.5rem 1rem',
            color: '#666',
            textDecoration: 'none',
            border: '1px solid #e5e7eb',
            borderRadius: '6px'
          }}
        >
          Cancel
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {/* Photo Upload */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <label style={{
            display: 'block',
            marginBottom: '1rem',
            fontWeight: 600,
            color: '#333',
            fontSize: '1.1rem'
          }}>
            Profile Photo
          </label>
          
          {/* Photo Preview */}
          <div style={{
            width: '150px',
            height: '150px',
            margin: '0 auto 1rem',
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Profile preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <div style={{
                fontSize: '4rem',
                color: 'white',
                fontWeight: 'bold'
              }}>
                {displayName.charAt(0).toUpperCase() || '?'}
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            id="photo-upload"
            style={{ display: 'none' }}
          />
          <label
            htmlFor="photo-upload"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#f5f5f5',
              color: '#667eea',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 500,
              border: '2px solid #667eea'
            }}
          >
            Choose Photo
          </label>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#999' }}>
            Max size: 5MB. Formats: JPG, PNG, GIF
          </p>
        </div>

        {/* Display Name */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#333'
          }}>
            Display Name *
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            maxLength={50}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
            placeholder="How should others see you?"
          />
        </div>

        {/* Date of Birth */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#333'
          }}>
            Date of Birth
          </label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
          />
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#999' }}>
            Must be 18+ to use the platform
          </p>
        </div>

        {/* Gender */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#333'
          }}>
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              boxSizing: 'border-box',
              background: 'white'
            }}
          >
            <option value="">Select gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="transgender">Transgender</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#333'
          }}>
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            maxLength={100}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
            placeholder="City, State/Country"
          />
        </div>

        {/* Disability Type */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#333'
          }}>
            Disability Type (Optional)
          </label>
          <select
            value={disabilityType}
            onChange={(e) => setDisabilityType(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              boxSizing: 'border-box',
              background: 'white'
            }}
          >
            <option value="">Select...</option>
            <option value="Physical disability">Physical disability</option>
            <option value="Visual impairment">Visual impairment</option>
            <option value="Hearing impairment">Hearing impairment</option>
            <option value="Cognitive disability">Cognitive disability</option>
            <option value="Mental health condition">Mental health condition</option>
            <option value="Chronic illness">Chronic illness</option>
            <option value="Neurodivergent">Neurodivergent</option>
            <option value="Multiple disabilities">Multiple disabilities</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#333'
          }}>
            About Me
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={500}
            rows={5}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
            placeholder="Tell others about yourself..."
          />
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#999', textAlign: 'right' }}>
            {bio.length}/500 characters
          </p>
        </div>

        {/* Looking For */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#333'
          }}>
            Looking For
          </label>
          <textarea
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            maxLength={300}
            rows={3}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
            placeholder="What kind of connection are you seeking?"
          />
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#999', textAlign: 'right' }}>
            {lookingFor.length}/300 characters
          </p>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end',
          paddingTop: '1rem',
          borderTop: '1px solid #e5e7eb'
        }}>
          <Link
            href={`/profile/${user?.id}`}
            style={{
              padding: '0.75rem 2rem',
              background: '#f5f5f5',
              color: '#666',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving || uploadingPhoto}
            style={{
              padding: '0.75rem 2rem',
              background: (saving || uploadingPhoto) ? '#ccc' : '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: (saving || uploadingPhoto) ? 'not-allowed' : 'pointer',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            {uploadingPhoto ? 'Uploading Photo...' : saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>

      {/* Help Text */}
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f0f4ff',
        borderRadius: '12px'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>Profile Tips</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666', lineHeight: '1.8' }}>
          <li>Use a clear, recent photo that shows your face</li>
          <li>Be honest and authentic in your bio</li>
          <li>Share what makes you unique</li>
          <li>Describe what you're looking for in a connection</li>
          <li>Keep your profile information up to date</li>
        </ul>
      </div>
    </div>
  )
}
