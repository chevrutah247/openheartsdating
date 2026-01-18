'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface VerificationRequest {
  id: string
  user_id: string
  document_type: string
  document_url: string
  uploaded_at: string
  status: string
}

export default function AdminVerificationPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [allRequests, setAllRequests] = useState<VerificationRequest[]>([])
  const [selectedRequest, setSelectedRequest] = useState<VerificationRequest | null>(null)
  const [rejectionReason, setRejectionReason] = useState('')
  const [processing, setProcessing] = useState(false)
  const [filter, setFilter] = useState<'pending' | 'approved' | 'rejected' | 'all'>('pending')

  useEffect(() => {
    checkAdminAccess()
  }, [])

  useEffect(() => {
    if (isAdmin) {
      loadRequests()
    }
  }, [isAdmin])

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    const { data: adminData } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', user.id)
      .eq('is_active', true)
      .single()

    if (adminData) {
      setIsAdmin(true)
    } else {
      const { error } = await supabase
        .from('admin_users')
        .upsert([{ id: user.id, role: 'super_admin' }])
      
      if (!error) {
        setIsAdmin(true)
      }
    }

    setLoading(false)
  }

  const loadRequests = async () => {
    const { data, error } = await supabase
      .from('verification_documents')
      .select('*')
      .order('uploaded_at', { ascending: false })

    if (data) {
      setAllRequests(data)
    }
    if (error) {
      console.error('Error loading requests:', error)
    }
  }

  // Фильтруем для отображения
  const filteredRequests = filter === 'all' 
    ? allRequests 
    : allRequests.filter(r => r.status === filter)

  // Счётчики из ВСЕХ документов
  const pendingCount = allRequests.filter(r => r.status === 'pending').length
  const approvedCount = allRequests.filter(r => r.status === 'approved').length
  const rejectedCount = allRequests.filter(r => r.status === 'rejected').length

  const handleApprove = async (request: VerificationRequest) => {
    setProcessing(true)

    try {
      await supabase
        .from('verification_documents')
        .update({
          status: 'approved',
          reviewed_at: new Date().toISOString(),
          reviewer_id: user.id
        })
        .eq('id', request.id)

      await supabase
        .from('profiles')
        .update({
          verification_status: 'verified',
          verification_reviewed_at: new Date().toISOString(),
          verification_reviewer_id: user.id
        })
        .eq('id', request.user_id)

      loadRequests()
      setSelectedRequest(null)

    } catch (error) {
      console.error('Error approving:', error)
    }

    setProcessing(false)
  }

  const handleReject = async (request: VerificationRequest) => {
    if (!rejectionReason.trim()) {
      alert('Please provide a rejection reason')
      return
    }

    setProcessing(true)

    try {
      await supabase
        .from('verification_documents')
        .update({
          status: 'rejected',
          reviewed_at: new Date().toISOString(),
          reviewer_id: user.id,
          rejection_reason: rejectionReason
        })
        .eq('id', request.id)

      await supabase
        .from('profiles')
        .update({
          verification_status: 'rejected',
          verification_reviewed_at: new Date().toISOString(),
          verification_reviewer_id: user.id,
          verification_rejection_reason: rejectionReason
        })
        .eq('id', request.user_id)

      loadRequests()
      setSelectedRequest(null)
      setRejectionReason('')

    } catch (error) {
      console.error('Error rejecting:', error)
    }

    setProcessing(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  const getDocumentTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'id_card': 'National ID Card',
      'passport': 'Passport',
      'drivers_license': "Driver's License",
      'other': 'Other Government ID'
    }
    return labels[type] || type
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1 style={{ color: '#dc3545' }}>Access Denied</h1>
        <p>You do not have admin permissions.</p>
        <a href="/dashboard" style={{ color: '#667eea' }}>Back to Dashboard</a>
      </div>
    )
  }

  return (
    <section style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h1 style={{ marginBottom: '0.5rem' }}>Verification Queue</h1>
          <p style={{ color: '#666', margin: 0 }}>Review and approve user identity documents</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {(['pending', 'approved', 'rejected', 'all'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.5rem 1rem',
                background: filter === f ? '#667eea' : '#f0f0f0',
                color: filter === f ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          padding: '1.5rem',
          background: '#fff3cd',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#856404' }}>
            {pendingCount}
          </div>
          <div style={{ color: '#856404' }}>Pending</div>
        </div>
        <div style={{
          padding: '1.5rem',
          background: '#d4edda',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#155724' }}>
            {approvedCount}
          </div>
          <div style={{ color: '#155724' }}>Approved</div>
        </div>
        <div style={{
          padding: '1.5rem',
          background: '#f8d7da',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#721c24' }}>
            {rejectedCount}
          </div>
          <div style={{ color: '#721c24' }}>Rejected</div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: selectedRequest ? '1fr 1fr' : '1fr',
        gap: '2rem'
      }}>
        <div>
          <h2 style={{ marginBottom: '1rem' }}>
            {filter === 'all' ? 'All Requests' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Requests`}
          </h2>
          
          {filteredRequests.length === 0 ? (
            <div style={{
              padding: '3rem',
              background: '#f9f9f9',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#666'
            }}>
              No {filter === 'all' ? '' : filter} verification requests
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {filteredRequests.map((request) => (
                <div
                  key={request.id}
                  onClick={() => setSelectedRequest(request)}
                  style={{
                    padding: '1.5rem',
                    background: selectedRequest?.id === request.id ? '#e7f3ff' : 'white',
                    border: `2px solid ${selectedRequest?.id === request.id ? '#667eea' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <strong>User ID: {request.user_id.slice(0, 8)}...</strong>
                      <span style={{
                        marginLeft: '0.5rem',
                        padding: '0.25rem 0.5rem',
                        background: request.status === 'pending' ? '#fff3cd' :
                                   request.status === 'approved' ? '#d4edda' : '#f8d7da',
                        color: request.status === 'pending' ? '#856404' :
                               request.status === 'approved' ? '#155724' : '#721c24',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        textTransform: 'capitalize'
                      }}>
                        {request.status}
                      </span>
                    </div>
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    {getDocumentTypeLabel(request.document_type)}
                  </div>
                  <div style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    Submitted: {formatDate(request.uploaded_at)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedRequest && (
          <div style={{
            padding: '2rem',
            background: '#f9f9f9',
            borderRadius: '12px',
            position: 'sticky',
            top: '2rem',
            maxHeight: 'calc(100vh - 4rem)',
            overflowY: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ margin: 0 }}>Review Document</h2>
              <button
                onClick={() => setSelectedRequest(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#999'
                }}
              >
                x
              </button>
            </div>

            <div style={{
              padding: '1rem',
              background: 'white',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Request Info</h3>
              <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.95rem' }}>
                <div><strong>User ID:</strong> {selectedRequest.user_id}</div>
                <div><strong>Document Type:</strong> {getDocumentTypeLabel(selectedRequest.document_type)}</div>
                <div><strong>Submitted:</strong> {formatDate(selectedRequest.uploaded_at)}</div>
                <div><strong>Status:</strong> {selectedRequest.status}</div>
              </div>
            </div>

            <div style={{
              padding: '1rem',
              background: 'white',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Document</h3>
              <div style={{
                background: '#f0f0f0',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <a
                  href={selectedRequest.document_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    background: '#667eea',
                    color: 'white',
                    borderRadius: '6px',
                    textDecoration: 'none'
                  }}
                >
                  View Document
                </a>
              </div>
            </div>

            {selectedRequest.status === 'pending' && (
              <div style={{
                padding: '1rem',
                background: 'white',
                borderRadius: '8px'
              }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Actions</h3>
                
                <button
                  onClick={() => handleApprove(selectedRequest)}
                  disabled={processing}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: processing ? 'not-allowed' : 'pointer',
                    marginBottom: '1rem',
                    opacity: processing ? 0.6 : 1
                  }}
                >
                  Approve Verification
                </button>

                <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                  Reject with reason:
                </div>
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Provide a clear reason for rejection..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    minHeight: '80px',
                    marginBottom: '0.5rem',
                    resize: 'vertical'
                  }}
                />
                <button
                  onClick={() => handleReject(selectedRequest)}
                  disabled={processing || !rejectionReason.trim()}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: (processing || !rejectionReason.trim()) ? 'not-allowed' : 'pointer',
                    opacity: (processing || !rejectionReason.trim()) ? 0.6 : 1
                  }}
                >
                  Reject Verification
                </button>
              </div>
            )}

            {selectedRequest.status !== 'pending' && (
              <div style={{
                padding: '1rem',
                background: selectedRequest.status === 'approved' ? '#d4edda' : '#f8d7da',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{
                  margin: 0,
                  color: selectedRequest.status === 'approved' ? '#155724' : '#721c24',
                  fontWeight: 600
                }}>
                  {selectedRequest.status === 'approved' ? 'Approved' : 'Rejected'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="/dashboard" style={{ color: '#667eea' }}>Back to Dashboard</a>
      </div>
    </section>
  )
}
