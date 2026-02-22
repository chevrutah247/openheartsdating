export function hasPlusAliasInLocalPart(email: string): boolean {
  const normalized = email.trim().toLowerCase()
  const at = normalized.indexOf('@')
  if (at <= 0) return false
  const localPart = normalized.slice(0, at)
  return localPart.includes('+')
}
