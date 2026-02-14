import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Server-side Supabase client with service_role key
// ONLY use in API routes (/app/api/...), NEVER in client components
// Lazy initialization to avoid build-time errors when env vars are unavailable

let _supabaseAdmin: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
  }
  return _supabaseAdmin
}

// Backwards-compatible getter
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabaseAdmin() as any)[prop]
  },
})
