'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface User {
  id: string
  email: string
  display_name: string
  role: string
  verification_status: string
  created_at: string
  gender: string
  location: string
}

export default function AdminUsersPage() {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [currentProfile, setCurrentProfile] = useState<any>(null)
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    checkAdminAccess()
  }, [])

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setCurrentUser(user)

    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (!profileData || (profileData.role !== 'admin' && profileData.role !== 'moderator')) {
      router.push('/dashboard')
      return
    }

    setCurrentProfile(profileData)
    await loadUsers()
    setLoading(false)
  }

  const loadUsers = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setUsers(data)
    }
  }

  const updateUserRole = async (userId: string, newRole: string) => {
    // Only admin can change roles
    if (currentProfile?.role !== 'admin') {
      alert('Only admins can change user roles')
      return
    }

    // Can't change own role
    if (userId === currentUser?.id) {
      alert('You cannot change your own role')
      return
    }

    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId)

    if (error) {
      alert('Error updating role: ' + error.message)
    } else {
      await loadUsers()
    }
  }

  const updateVerificationStatus = async (userId: string, newStatus: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ verification_status: newStatus })
      .eq('id', userId)

    if (error) {
      alert('Error updating status: ' + error.message)
    } else {
      await loadUsers()
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesRole = filterRole === 'all' || user.role === filterRole
    const matchesStatus = filterStatus === 'all' || user.verification_status === filterStatus

    return matchesSearch && matchesRole && matchesStatus
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return { bg: '#fef3c7', color: '#92400e' }
      case 'moderator': return { bg: '#dbeafe', color: '#1e40af' }
      case 'volunteer': return { bg: '#d1fae5', color: '#065f46' }
      default: return { bg: '#f3f4f6', color: '#374151' }
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'verified': return { bg: '#d1fae5', color: '#065f46' }
      case 'pending': return { bg: '#fef3c7', color: '#92400e' }
      case 'rejected': return { bg: '#fee2e2', color: '#991b1b' }
      default: return { bg: '#f3f4f6', color: '#374151' }
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        Loading users...
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <Link href="/admin" style={{ color: '#667eea', textDecoration: 'none' }}>
            ← Back to Admin
          </Link>
          <h1 style={{ marginTop: '0.5rem', marginBottom: '0.25rem' }}>User Management</h1>
          <p style={{ color: '#666', margin: 0 }}>{users.length} total users</p>
        </div>
        
        <button
          onClick={loadUsers}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        padding: '1.5rem',
        background: '#f9f9f9',
        borderRadius: '12px'
      }}>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: '1',
            minWidth: '200px',
            padding: '0.75rem 1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '1rem'
          }}
        />

        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '1rem',
            minWidth: '150px'
          }}
        >
          <option value="all">All Roles</option>
          <option value="user">User</option>
          <option value="volunteer">Volunteer</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '1rem',
            minWidth: '150px'
          }}
        >
          <option value="all">All Statuses</option>
          <option value="verified">Verified</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Users Table */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9f9f9' }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>User</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Email</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Role</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Joined</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const roleBadge = getRoleBadgeColor(user.role || 'user')
                  const statusBadge = getStatusBadgeColor(user.verification_status)
                  const isCurrentUser = user.id === currentUser?.id

                  return (
                    <tr 
                      key={user.id} 
                      style={{ 
                        borderBottom: '1px solid #e5e7eb',
                        background: isCurrentUser ? '#f0f4ff' : 'transparent'
                      }}
                    >
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold'
                          }}>
                            {user.display_name?.charAt(0).toUpperCase() || '?'}
                          </div>
                          <div>
                            <div style={{ fontWeight: 500 }}>
                              {user.display_name || 'No name'}
                              {isCurrentUser && <span style={{ color: '#667eea', marginLeft: '0.5rem' }}>(You)</span>}
                            </div>
                            {user.location && (
                              <div style={{ fontSize: '0.85rem', color: '#666' }}>
                                📍 {user.location}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '1rem', color: '#666' }}>
                        {user.email}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        {currentProfile?.role === 'admin' && !isCurrentUser ? (
                          <select
                            value={user.role || 'user'}
                            onChange={(e) => updateUserRole(user.id, e.target.value)}
                            style={{
                              padding: '0.4rem 0.75rem',
                              borderRadius: '6px',
                              border: '1px solid #e5e7eb',
                              background: roleBadge.bg,
                              color: roleBadge.color,
                              fontWeight: 500,
                              cursor: 'pointer'
                            }}
                          >
                            <option value="user">User</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="moderator">Moderator</option>
                            <option value="admin">Admin</option>
                          </select>
                        ) : (
                          <span style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: '6px',
                            background: roleBadge.bg,
                            color: roleBadge.color,
                            fontWeight: 500,
                            textTransform: 'capitalize'
                          }}>
                            {user.role || 'user'}
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <select
                          value={user.verification_status || 'pending'}
                          onChange={(e) => updateVerificationStatus(user.id, e.target.value)}
                          style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: '6px',
                            border: '1px solid #e5e7eb',
                            background: statusBadge.bg,
                            color: statusBadge.color,
                            fontWeight: 500,
                            cursor: 'pointer'
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="verified">Verified</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td style={{ padding: '1rem', color: '#666' }}>
                        {formatDate(user.created_at)}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <Link
                          href={`/profile/${user.id}`}
                          style={{
                            padding: '0.4rem 0.75rem',
                            background: '#f3f4f6',
                            color: '#374151',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontSize: '0.9rem'
                          }}
                        >
                          View Profile
                        </Link>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f9f9f9',
        borderRadius: '12px',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div>
          <strong>Showing:</strong> {filteredUsers.length} of {users.length} users
        </div>
        <div>
          <strong>Admins:</strong> {users.filter(u => u.role === 'admin').length}
        </div>
        <div>
          <strong>Moderators:</strong> {users.filter(u => u.role === 'moderator').length}
        </div>
        <div>
          <strong>Volunteers:</strong> {users.filter(u => u.role === 'volunteer').length}
        </div>
        <div>
          <strong>Verified:</strong> {users.filter(u => u.verification_status === 'verified').length}
        </div>
      </div>
    </div>
  )
}
