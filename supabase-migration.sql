-- ============================================
-- OpenHeartsDating: Database Migration
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================

-- 1. REPORTS TABLE (user complaints)
CREATE TABLE IF NOT EXISTS reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reporter_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  reported_user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  admin_notes TEXT,
  reviewed_by UUID REFERENCES profiles(id),
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT no_self_report CHECK (reporter_id != reported_user_id)
);

CREATE INDEX IF NOT EXISTS idx_reports_status ON reports(status);
CREATE INDEX IF NOT EXISTS idx_reports_reported_user ON reports(reported_user_id);

-- 2. BLOCKS TABLE (user blocks)
CREATE TABLE IF NOT EXISTS blocks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blocker_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  blocked_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(blocker_id, blocked_id),
  CONSTRAINT no_self_block CHECK (blocker_id != blocked_id)
);

CREATE INDEX IF NOT EXISTS idx_blocks_blocker ON blocks(blocker_id);
CREATE INDEX IF NOT EXISTS idx_blocks_blocked ON blocks(blocked_id);

-- 3. NOTIFICATIONS TABLE
CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT,
  data JSONB,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_unread ON notifications(user_id) WHERE read_at IS NULL;

-- 4. ADMIN ACTIONS LOG
CREATE TABLE IF NOT EXISTS admin_actions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id UUID NOT NULL REFERENCES profiles(id),
  target_user_id UUID NOT NULL REFERENCES profiles(id),
  action_type TEXT NOT NULL,
  reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_admin_actions_target ON admin_actions(target_user_id);

-- 5. ADD NEW COLUMNS TO PROFILES
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS account_status TEXT DEFAULT 'active';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS suspension_reason TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS suspension_until TIMESTAMPTZ;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ;

-- 6. ADD CONSTRAINTS
ALTER TABLE profiles ADD CONSTRAINT IF NOT EXISTS bio_length CHECK (char_length(bio) <= 1000);
ALTER TABLE profiles ADD CONSTRAINT IF NOT EXISTS name_length CHECK (char_length(display_name) <= 50);
ALTER TABLE messages ADD CONSTRAINT IF NOT EXISTS message_length CHECK (char_length(content) <= 2000);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE verification_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_actions ENABLE ROW LEVEL SECURITY;

-- PROFILES
CREATE POLICY "profiles_select" ON profiles FOR SELECT
  USING (true); -- Public profiles readable (filtered by app logic)

CREATE POLICY "profiles_insert" ON profiles FOR INSERT
  WITH CHECK (id = auth.uid());

CREATE POLICY "profiles_update" ON profiles FOR UPDATE
  USING (id = auth.uid());

-- MESSAGES
CREATE POLICY "messages_select" ON messages FOR SELECT
  USING (from_user_id = auth.uid() OR to_user_id = auth.uid());

CREATE POLICY "messages_insert" ON messages FOR INSERT
  WITH CHECK (from_user_id = auth.uid());

CREATE POLICY "messages_update" ON messages FOR UPDATE
  USING (to_user_id = auth.uid());

-- LIKES
CREATE POLICY "likes_select" ON likes FOR SELECT
  USING (from_user_id = auth.uid() OR to_user_id = auth.uid());

CREATE POLICY "likes_insert" ON likes FOR INSERT
  WITH CHECK (from_user_id = auth.uid());

CREATE POLICY "likes_delete" ON likes FOR DELETE
  USING (from_user_id = auth.uid());

-- MATCHES
CREATE POLICY "matches_select" ON matches FOR SELECT
  USING (user1_id = auth.uid() OR user2_id = auth.uid());

CREATE POLICY "matches_insert" ON matches FOR INSERT
  WITH CHECK (user1_id = auth.uid() OR user2_id = auth.uid());

-- REPORTS
CREATE POLICY "reports_select" ON reports FOR SELECT
  USING (reporter_id = auth.uid());

CREATE POLICY "reports_insert" ON reports FOR INSERT
  WITH CHECK (reporter_id = auth.uid());

-- BLOCKS
CREATE POLICY "blocks_select" ON blocks FOR SELECT
  USING (blocker_id = auth.uid());

CREATE POLICY "blocks_insert" ON blocks FOR INSERT
  WITH CHECK (blocker_id = auth.uid());

CREATE POLICY "blocks_delete" ON blocks FOR DELETE
  USING (blocker_id = auth.uid());

-- NOTIFICATIONS
CREATE POLICY "notifications_select" ON notifications FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "notifications_update" ON notifications FOR UPDATE
  USING (user_id = auth.uid());

-- VERIFICATION DOCUMENTS
CREATE POLICY "verification_select" ON verification_documents FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "verification_insert" ON verification_documents FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- ADMIN ACTIONS (read-only for target user)
CREATE POLICY "admin_actions_select" ON admin_actions FOR SELECT
  USING (target_user_id = auth.uid());
