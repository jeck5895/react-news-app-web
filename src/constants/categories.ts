const CATEGORIES = [
  { value: "business", label: "Business" },
  { value: "entertainment", label: "Entertainment" },
  { value: "general", label: "General" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" }
] as const

type CATEGORIES = (typeof CATEGORIES)[keyof typeof CATEGORIES]

export default CATEGORIES