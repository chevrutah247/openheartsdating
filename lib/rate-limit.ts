// Simple in-memory rate limiter
// In production, replace with Redis for multi-instance deployments

interface RateLimitEntry {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitEntry>()

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (entry.resetAt < now) {
      store.delete(key)
    }
  }
}, 5 * 60 * 1000)

export interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

export const RATE_LIMITS = {
  messages: { maxRequests: 50, windowMs: 60 * 60 * 1000 } as RateLimitConfig,    // 50/hour
  likes: { maxRequests: 30, windowMs: 60 * 60 * 1000 } as RateLimitConfig,       // 30/hour
  reports: { maxRequests: 5, windowMs: 60 * 60 * 1000 } as RateLimitConfig,      // 5/hour
  contact: { maxRequests: 3, windowMs: 60 * 60 * 1000 } as RateLimitConfig,      // 3/hour
  blocks: { maxRequests: 10, windowMs: 60 * 60 * 1000 } as RateLimitConfig,      // 10/hour
}

export function checkRateLimit(
  identifier: string,
  action: keyof typeof RATE_LIMITS
): { allowed: boolean; remaining: number; resetIn: number } {
  const config = RATE_LIMITS[action]
  const key = `${action}:${identifier}`
  const now = Date.now()

  const entry = store.get(key)

  if (!entry || entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + config.windowMs })
    return { allowed: true, remaining: config.maxRequests - 1, resetIn: config.windowMs }
  }

  if (entry.count >= config.maxRequests) {
    return { allowed: false, remaining: 0, resetIn: entry.resetAt - now }
  }

  entry.count++
  return { allowed: true, remaining: config.maxRequests - entry.count, resetIn: entry.resetAt - now }
}
