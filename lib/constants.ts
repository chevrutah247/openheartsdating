export const LOOKING_FOR_OPTIONS = [
  { value: 'dating', label: 'Dating' },
  { value: 'friendship', label: 'Friendship' },
  { value: 'experience_exchange', label: 'Experience Exchange' },
  { value: 'volunteering', label: 'Volunteering' },
]

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
]

export const DISABILITY_OPTIONS = [
  { value: 'mobility', label: 'Mobility' },
  { value: 'visual', label: 'Visual' },
  { value: 'hearing', label: 'Hearing' },
  { value: 'chronic', label: 'Chronic Illness' },
  { value: 'neurodiversity', label: 'Neurodiversity' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' },
  { value: 'none', label: 'None' },
]

export const COMMUNICATION_OPTIONS = [
  { value: 'text', label: 'Text Chat' },
  { value: 'video', label: 'Video Call' },
  { value: 'voice', label: 'Voice Call' },
  { value: 'sign_language', label: 'Sign Language' },
]

export const INTEREST_OPTIONS = [
  'Music', 'Movies', 'Reading', 'Cooking', 'Travel',
  'Art', 'Gaming', 'Sports', 'Nature', 'Photography',
  'Writing', 'Dancing', 'Technology', 'Fitness', 'Volunteering',
  'Animals', 'Crafts', 'Theater', 'Meditation', 'Gardening',
]

export function getDisabilityLabel(type: string): string {
  return DISABILITY_OPTIONS.find(o => o.value === type)?.label || type
}

export function getLookingForLabel(type: string): string {
  return LOOKING_FOR_OPTIONS.find(o => o.value === type)?.label || type
}
