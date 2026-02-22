const DEFAULT_MIN_AGE = 18
const DEFAULT_MAX_AGE = 100

function toInt(value: string | undefined, fallback: number) {
  if (!value) return fallback
  const parsed = Number.parseInt(value, 10)
  return Number.isFinite(parsed) ? parsed : fallback
}

export const MIN_REGISTRATION_AGE = toInt(process.env.NEXT_PUBLIC_MIN_REG_AGE, DEFAULT_MIN_AGE)
export const MAX_REGISTRATION_AGE = Math.max(
  MIN_REGISTRATION_AGE + 1,
  toInt(process.env.NEXT_PUBLIC_MAX_REG_AGE, DEFAULT_MAX_AGE)
)

function formatLocalISO(date: Date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function getBirthDateBounds(now = new Date()) {
  const latest = new Date(now)
  latest.setFullYear(latest.getFullYear() - MIN_REGISTRATION_AGE)

  const earliest = new Date(now)
  earliest.setFullYear(earliest.getFullYear() - MAX_REGISTRATION_AGE)

  return {
    min: formatLocalISO(earliest),
    max: formatLocalISO(latest),
  }
}

export function isValidBirthDate(value: string, now = new Date()) {
  const bounds = getBirthDateBounds(now)
  return value >= bounds.min && value <= bounds.max
}

export function getBirthYearOptions(now = new Date()) {
  const currentYear = now.getFullYear()
  const maxYear = currentYear - MIN_REGISTRATION_AGE
  const minYear = currentYear - MAX_REGISTRATION_AGE
  const years: number[] = []

  for (let year = maxYear; year >= minYear; year -= 1) {
    years.push(year)
  }

  return years
}
