const COUNTRIES = [
  { value: 'us', label: 'United States of America' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'cn', label: 'China' },
  { value: 'ru', label: 'Russia' },
  { value: 'fr', label: 'France' },
  { value: 'ph', label: 'Philippines' },
  { value: 'ae', label: 'United Arab Emirates' },
  { value: 'au', label: 'Australia' },
  { value: 'ar', label: 'Argentina' },
  { value: 'kr', label: 'South Korea' },
  { value: 'id', label: 'Indonesia' }
] as const

type COUNTRIES = (typeof COUNTRIES)[keyof typeof COUNTRIES]

export default COUNTRIES
