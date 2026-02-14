// Shared TypeScript types for OpenHeartsDating

export interface Profile {
  id: string
  display_name: string
  email: string
  date_of_birth: string
  gender: string
  bio: string
  location: string
  disability_type: string
  looking_for: string
  interests: string[]
  communication_preferences: string[]
  profile_photo: string | null
  verification_status: 'pending' | 'verified' | 'rejected'
  role: 'user' | 'volunteer' | 'moderator' | 'admin'
  account_status: 'active' | 'warned' | 'suspended' | 'banned'
  suspension_reason: string | null
  suspension_until: string | null
  created_at: string
  updated_at: string | null
}

export interface Message {
  id: string
  from_user_id: string
  to_user_id: string
  content: string
  read_at: string | null
  created_at: string
}

export interface Report {
  id: string
  reporter_id: string
  reported_user_id: string
  reason: string
  description: string | null
  status: 'pending' | 'reviewed' | 'action_taken' | 'dismissed'
  admin_notes: string | null
  reviewed_by: string | null
  reviewed_at: string | null
  created_at: string
}

export interface Block {
  id: string
  blocker_id: string
  blocked_id: string
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  type: 'new_match' | 'new_message' | 'account_warning' | 'account_suspended' | 'verification_approved' | 'verification_rejected'
  title: string
  body: string | null
  data: Record<string, any> | null
  read_at: string | null
  created_at: string
}

export interface AdminAction {
  id: string
  admin_id: string
  target_user_id: string
  action_type: 'warn' | 'suspend' | 'ban' | 'unsuspend' | 'unban' | 'dismiss_report'
  reason: string | null
  created_at: string
}

export interface Conversation {
  otherUserId: string
  otherUserName: string
  otherUserPhoto: string | null
  otherUserVerified: boolean
  lastMessage: string
  lastMessageAt: string
  unreadCount: number
}

export const REPORT_REASONS = [
  { value: 'harassment', label: 'Harassment' },
  { value: 'spam', label: 'Spam' },
  { value: 'fake_profile', label: 'Fake Profile' },
  { value: 'inappropriate_content', label: 'Inappropriate Content' },
  { value: 'scam', label: 'Scam / Fraud' },
  { value: 'other', label: 'Other' },
] as const
