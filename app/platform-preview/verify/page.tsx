'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'



export default function VerifyPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  
  const [documentType, setDocumentType] = useState('id_card')
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    checkUserAndProfile()
  }, [])

  const checkUserAndProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profile) {
      setProfile(profile)
    }

    setLoading(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      
      // Check file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setMessage('File size must be less than 10MB')
        return
      }

      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
      if (!allowedTypes.includes(selectedFile.type)) {
        setMessage('Only JPEG, PNG, WebP and PDF files are allowed')
        return
      }

      setFile(selectedFile)
      setMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file || !user) {
      setMessage('Please select a file to upload')
      return
    }

    setUploading(true)
    setMessage('')

    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}/${Date.now()}.${fileExt}`

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('verification-documents')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        throw uploadError
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('verification-documents')
        .getPublicUrl(fileName)

      // Create verification document record
      const { error: dbError } = await supabase
        .from('verification_documents')
        .insert([
          {
            user_id: user.id,
            document_type: documentType,
            document_url: publicUrl,
          }
        ])

      if (dbError) {
        throw dbError
      }

      // Update profile verification status
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          verification_status: 'pending',
          verification_submitted_at: new Date().toISOString()
        })
        .eq('id', user.id)

      if (profileError) {
        throw profileError
      }

      setSuccess(true)
      setProfile({ ...profile, verification_status: 'pending' })

    } catch (error: any) {
      setMessage(error.message || 'Upload failed. Please try again.')
    }

    setUploading(false)
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  // Already verified
  if (profile?.verification_status === 'verified') {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          padding: '3rem',
          background: '#d4edda',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #c3e6cb'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          <h1 style={{ color: '#155724', marginBottom: '1rem' }}>You Are Verified!</h1>
          <p style={{ color: '#155724', fontSize: '1.1rem' }}>
            Your identity has been verified. You now have full access to all platform features.
          </p>
          <a 
            href="/browse"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              padding: '1rem 2rem',
              background: '#28a745',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Start Dating →
          </a>
        </div>
      </section>
    )
  }

  // Verification pending
  if (profile?.verification_status === 'pending') {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          padding: '3rem',
          background: '#fff3cd',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #ffc107'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⏳</div>
          <h1 style={{ color: '#856404', marginBottom: '1rem' }}>Verification In Progress</h1>
          <p style={{ color: '#856404', fontSize: '1.1rem', marginBottom: '1rem' }}>
            Your documents have been submitted and are being reviewed.
          </p>
          <p style={{ color: '#856404' }}>
            <strong>Typical review time:</strong> 24–72 hours
          </p>
          <p style={{ color: '#856404', marginTop: '1rem', fontSize: '0.95rem' }}>
            We'll notify you by email once the review is complete.
          </p>
        </div>
      </section>
    )
  }

  // Verification rejected
  if (profile?.verification_status === 'rejected') {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          padding: '2rem',
          background: '#f8d7da',
          borderRadius: '12px',
          marginBottom: '2rem',
          border: '1px solid #f5c6cb'
        }}>
          <h2 style={{ color: '#721c24', marginBottom: '1rem' }}>Verification Not Approved</h2>
          <p style={{ color: '#721c24' }}>
            {profile.verification_rejection_reason || 'Your previous submission could not be verified. Please try again with a clearer document.'}
          </p>
        </div>
        
        {/* Show upload form again */}
        {renderUploadForm()}
      </section>
    )
  }

  // Default: Show upload form
  return renderUploadForm()

  function renderUploadForm() {
    return (
      <section style={{ padding: '4rem 1.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Identity Verification</h1>
        
        {/* Important Notice */}
        <div style={{
          padding: '1.5rem',
          background: '#e7f3ff',
          borderRadius: '8px',
          borderLeft: '4px solid var(--primary)',
          marginBottom: '2rem'
        }}>
          <p style={{ margin: 0, fontWeight: 600, color: '#1a365d', marginBottom: '0.5rem' }}>
            Why Verification?
          </p>
          <p style={{ margin: 0, color: '#2c5282', lineHeight: '1.6' }}>
            Verification is not about restriction. It is about protecting real people.
            OpenHeartsDating connects individuals who may be emotionally, socially, or physically vulnerable.
            To maintain a safe and respectful environment, all interaction requires identity verification.
          </p>
        </div>

        {success ? (
          <div style={{
            padding: '2rem',
            background: '#d4edda',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid #c3e6cb'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄✅</div>
            <h2 style={{ color: '#155724', marginBottom: '1rem' }}>Documents Submitted!</h2>
            <p style={{ color: '#155724' }}>
              Your verification documents have been submitted successfully.
              We will review them within 24–72 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Document Type */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Document Type *
              </label>
              <select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              >
                <option value="id_card">National ID Card</option>
                <option value="passport">Passport</option>
                <option value="drivers_license">Driver's License</option>
                <option value="other">Other Government ID</option>
              </select>
            </div>

            {/* File Upload */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Upload Document *
              </label>
              <div style={{
                border: '2px dashed #ddd',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                background: '#fafafa',
                cursor: 'pointer'
              }}>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  id="document-upload"
                />
                <label htmlFor="document-upload" style={{ cursor: 'pointer' }}>
                  {file ? (
                    <div>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                      <p style={{ fontWeight: 600, color: '#333' }}>{file.name}</p>
                      <p style={{ color: '#666', fontSize: '0.9rem' }}>
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <p style={{ color: 'var(--primary)', marginTop: '0.5rem' }}>Click to change file</p>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📤</div>
                      <p style={{ fontWeight: 600, color: '#333' }}>Click to upload</p>
                      <p style={{ color: '#666', fontSize: '0.9rem' }}>
                        JPEG, PNG, WebP or PDF (max 10MB)
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Requirements */}
            <div style={{
              padding: '1rem',
              background: '#f9f9f9',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Document Requirements:</p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666', lineHeight: '1.8' }}>
                <li>Must be a valid government-issued ID</li>
                <li>Photo must be clear and readable</li>
                <li>All four corners must be visible</li>
                <li>No blurry or edited images</li>
                <li>Document must not be expired</li>
              </ul>
            </div>

            {/* Privacy Notice */}
            <div style={{
              padding: '1rem',
              background: '#fff3cd',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem'
            }}>
              <p style={{ margin: 0 }}>
                <strong>🔒 Privacy:</strong> Your documents are encrypted and stored securely.
                They are only viewed by trained verification staff and are never shared publicly.
                You may request deletion at any time.
              </p>
            </div>

            {message && (
              <div style={{
                padding: '0.75rem',
                marginBottom: '1rem',
                background: '#f8d7da',
                color: '#721c24',
                borderRadius: '6px',
                border: '1px solid #f5c6cb'
              }}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={uploading || !file}
              style={{
                width: '100%',
                padding: '1rem',
                background: uploading || !file ? '#ccc' : 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: uploading || !file ? 'not-allowed' : 'pointer'
              }}
            >
              {uploading ? 'Uploading...' : 'Submit for Verification'}
            </button>

            <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#666' }}>
              <a href="/platform-preview" style={{ color: 'var(--primary)' }}>← Back to Platform Preview</a>
            </p>
          </form>
        )}
      </section>
    )
  }
}
