'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface ReportWithProfiles {
  id: string
  reporter_id: string
  reported_user_id: string
  reason: string
  description: string | null
  status: string
  admin_notes: string | null
  reviewed_by: string | null
  reviewed_at: string | null
  created_at: string
  reporter_name?: string
  reported_name?: string
  reported_email?: string
  previous_reports_count?: number
}

type FilterStatus = 'pending' | 'reviewed' | 'action_taken' | 'dismissed' | 'all'
type AdminActionType = 'dismiss' | 'warn' | 'suspend' | 'ban'

export default function AdminReportsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [reports, setReports] = useState<ReportWithProfiles[]>([])
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('pending')
  const [selectedReport, setSelectedReport] = useState<ReportWithProfiles | null>(null)
  const [adminNotes, setAdminNotes] = useState('')
  const [suspendDays, setSuspendDays] = useState(7)
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    checkAccessAndLoad()
  }, [])

  useEffect(() => {
    if (isAdmin) loadReports()
  }, [filterStatus, isAdmin])

  const checkAccessAndLoad = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/login'); return }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || (profile.role !== 'admin' && profile.role !== 'moderator')) {
      router.push('/dashboard')
      return
    }

    setIsAdmin(true)
    setLoading(false)
  }

  const loadReports = async () => {
    let query = supabase
      .from('reports')
      .select('*')
      .order('created_at', { ascending: false })

    if (filterStatus !== 'all') {
      query = query.eq('status', filterStatus)
    }

    const { data } = await query

    if (!data) { setReports([]); return }

    // Enrich with profile names
    const userIds = [...new Set([
      ...data.map(r => r.reporter_id),
      ...data.map(r => r.reported_user_id)
    ])]

    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name, email')
      .in('id', userIds)

    const profileMap = new Map(profiles?.map(p => [p.id, p]) || [])

    // Get report counts per reported user
    const reportedUserIds = [...new Set(data.map(r => r.reported_user_id))]
    const reportCounts: Record<string, number> = {}
    for (const userId of reportedUserIds) {
      const { count } = await supabase
        .from('reports')
        .select('*', { count: 'exact', head: true })
        .eq('reported_user_id', userId)
      reportCounts[userId] = count || 0
    }

    const enriched: ReportWithProfiles[] = data.map(r => ({
      ...r,
      reporter_name: profileMap.get(r.reporter_id)?.display_name || 'Unknown',
      reported_name: profileMap.get(r.reported_user_id)?.display_name || 'Unknown',
      reported_email: profileMap.get(r.reported_user_id)?.email || '',
      previous_reports_count: reportCounts[r.reported_user_id] || 0,
    }))

    setReports(enriched)
  }

  const handleAction = async (action: AdminActionType) => {
    if (!selectedReport) return
    setActionLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // Update report status
    const newStatus = action === 'dismiss' ? 'dismissed' : 'action_taken'
    await supabase
      .from('reports')
      .update({
        status: newStatus,
        admin_notes: adminNotes || null,
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
      })
      .eq('id', selectedReport.id)

    if (action !== 'dismiss') {
      // Create admin action record
      await supabase.from('admin_actions').insert({
        admin_id: user.id,
        target_user_id: selectedReport.reported_user_id,
        action_type: action,
        reason: adminNotes || `Report: ${selectedReport.reason}`,
      })

      // Update user's account status
      const updateData: Record<string, any> = {}
      if (action === 'warn') {
        updateData.account_status = 'warned'
      } else if (action === 'suspend') {
        updateData.account_status = 'suspended'
        updateData.suspension_reason = adminNotes || selectedReport.reason
        updateData.suspension_until = new Date(Date.now() + suspendDays * 86400000).toISOString()
      } else if (action === 'ban') {
        updateData.account_status = 'banned'
        updateData.suspension_reason = adminNotes || selectedReport.reason
      }

      await supabase
        .from('profiles')
        .update(updateData)
        .eq('id', selectedReport.reported_user_id)

      // Send notification email
      if (selectedReport.reported_email) {
        await fetch('/api/send-verification-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: selectedReport.reported_email,
            type: 'rejected',
            reason: action === 'warn'
              ? `Warning: ${adminNotes || 'Your behavior has been reported by other users.'}`
              : action === 'suspend'
              ? `Account suspended for ${suspendDays} days: ${adminNotes || selectedReport.reason}`
              : `Account permanently banned: ${adminNotes || selectedReport.reason}`,
          }),
        })
      }
    }

    setSelectedReport(null)
    setAdminNotes('')
    setActionLoading(false)
    loadReports()
  }

  const reasonLabel = (reason: string) => {
    const labels: Record<string, string> = {
      harassment: 'Harassment',
      spam: 'Spam',
      fake_profile: 'Fake Profile',
      inappropriate_content: 'Inappropriate Content',
      scam: 'Scam / Fraud',
      other: 'Other',
    }
    return labels[reason] || reason
  }

  const statusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: '#f59e0b',
      reviewed: '#3b82f6',
      action_taken: '#ef4444',
      dismissed: '#6b7280',
    }
    return colors[status] || '#666'
  }

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>

  const filters: { label: string; value: FilterStatus }[] = [
    { label: 'Pending', value: 'pending' },
    { label: 'Action Taken', value: 'action_taken' },
    { label: 'Dismissed', value: 'dismissed' },
    { label: 'All', value: 'all' },
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0 }}>Reports</h1>
        <Link href="/admin" style={{ color: '#667eea', textDecoration: 'none' }}>← Back to Admin</Link>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilterStatus(f.value)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '20px',
              border: 'none',
              background: filterStatus === f.value ? '#667eea' : '#f3f4f6',
              color: filterStatus === f.value ? 'white' : '#666',
              cursor: 'pointer',
              fontWeight: filterStatus === f.value ? '600' : 'normal',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Reports List */}
        <div style={{ flex: 1 }}>
          {reports.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#f9fafb', borderRadius: '12px' }}>
              <p style={{ color: '#666' }}>No reports found.</p>
            </div>
          ) : (
            reports.map(report => (
              <div
                key={report.id}
                onClick={() => { setSelectedReport(report); setAdminNotes('') }}
                style={{
                  padding: '1rem 1.5rem',
                  background: selectedReport?.id === report.id ? '#f0f4ff' : 'white',
                  border: selectedReport?.id === report.id ? '2px solid #667eea' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  marginBottom: '0.75rem',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    background: `${statusColor(report.status)}20`,
                    color: statusColor(report.status),
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                  }}>
                    {report.status.toUpperCase()}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>
                    {new Date(report.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p style={{ margin: '0.25rem 0', fontWeight: '600' }}>
                  {report.reported_name}
                  {(report.previous_reports_count || 0) > 1 && (
                    <span style={{ color: '#ef4444', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                      ({report.previous_reports_count} total reports)
                    </span>
                  )}
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  {reasonLabel(report.reason)} — by {report.reporter_name}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        {selectedReport && (
          <div style={{
            width: '400px',
            flexShrink: 0,
            padding: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            position: 'sticky',
            top: '2rem',
            alignSelf: 'flex-start',
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Report Details</h3>

            <div style={{ marginBottom: '1rem' }}>
              <strong>Reported User:</strong>{' '}
              <Link href={`/profile/${selectedReport.reported_user_id}`} target="_blank" style={{ color: '#667eea' }}>
                {selectedReport.reported_name}
              </Link>
              {(selectedReport.previous_reports_count || 0) > 1 && (
                <span style={{ color: '#ef4444', fontSize: '0.85rem', display: 'block' }}>
                  {selectedReport.previous_reports_count} total reports against this user
                </span>
              )}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <strong>Reporter:</strong> {selectedReport.reporter_name}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <strong>Reason:</strong>{' '}
              <span style={{ padding: '0.2rem 0.5rem', background: '#fef3c7', borderRadius: '4px' }}>
                {reasonLabel(selectedReport.reason)}
              </span>
            </div>

            {selectedReport.description && (
              <div style={{ marginBottom: '1rem' }}>
                <strong>Description:</strong>
                <p style={{ margin: '0.25rem 0', background: '#f9fafb', padding: '0.75rem', borderRadius: '6px', fontSize: '0.9rem' }}>
                  {selectedReport.description}
                </p>
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <strong>Date:</strong> {new Date(selectedReport.created_at).toLocaleString()}
            </div>

            {selectedReport.status === 'pending' && (
              <>
                <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Admin Notes
                  </label>
                  <textarea
                    value={adminNotes}
                    onChange={e => setAdminNotes(e.target.value)}
                    rows={3}
                    placeholder="Notes about this report..."
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.9rem', resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleAction('dismiss')}
                    disabled={actionLoading}
                    style={{ padding: '0.6rem', background: '#f3f4f6', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}
                  >
                    Dismiss Report
                  </button>
                  <button
                    onClick={() => handleAction('warn')}
                    disabled={actionLoading}
                    style={{ padding: '0.6rem', background: '#fef3c7', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#92400e' }}
                  >
                    Warn User
                  </button>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <button
                      onClick={() => handleAction('suspend')}
                      disabled={actionLoading}
                      style={{ flex: 1, padding: '0.6rem', background: '#fed7aa', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#9a3412' }}
                    >
                      Suspend
                    </button>
                    <select
                      value={suspendDays}
                      onChange={e => setSuspendDays(Number(e.target.value))}
                      style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                    >
                      <option value={1}>1 day</option>
                      <option value={3}>3 days</option>
                      <option value={7}>7 days</option>
                      <option value={14}>14 days</option>
                      <option value={30}>30 days</option>
                    </select>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm('PERMANENT BAN — are you sure?')) handleAction('ban')
                    }}
                    disabled={actionLoading}
                    style={{ padding: '0.6rem', background: '#fecaca', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#991b1b' }}
                  >
                    Permanent Ban
                  </button>
                </div>
              </>
            )}

            {selectedReport.admin_notes && selectedReport.status !== 'pending' && (
              <div style={{ marginTop: '1rem' }}>
                <strong>Admin Notes:</strong>
                <p style={{ margin: '0.25rem 0', background: '#f9fafb', padding: '0.75rem', borderRadius: '6px', fontSize: '0.9rem' }}>
                  {selectedReport.admin_notes}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
