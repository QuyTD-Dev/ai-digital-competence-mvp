export type RoleSlug = 'ceo' | 'hr' | 'marketing' | 'sales-crm' | 'accounting'

export type IconName =
  | 'badge'
  | 'book-open'
  | 'globe'
  | 'landmark'
  | 'scale'
  | 'users'
  | 'megaphone'
  | 'handshake'
  | 'calculator'
  | 'sparkles'
  | 'shield'
  | 'chart'
  | 'database'
  | 'file-check'
  | 'bot'
  | 'workflow'
  | 'scan'
  | 'message'
  | 'target'
  | 'brain'
  | 'lock'

export type Role = {
  slug: RoleSlug
  name: string
  eyebrow: string
  description: string
  icon: IconName
  accent: string
  accentSoft: string
  isFeatured?: boolean
}

export type CompetenceLevel = {
  level: number
  name: string
  shortLabel: string
  description: string
  outcome: string
  color: string
}

export type Skill = {
  title: string
  description: string
  icon: IconName
  tag: string
}

export type AITool = {
  name: string
  category: string
  description: string
  icon: IconName
  fit: string
}

export type VideoLesson = {
  id: string
  title: string
  module: string
  duration: string
  description: string
  icon: IconName
  accent: string
  completed?: boolean
}

export type LearningSuggestion = {
  title: string
  description: string
  reason: string
  icon: IconName
  actionLabel: string
  videoId?: string
}

export type AssessmentQuestion = {
  id: string
  skill: string
  question: string
  scenario?: string
  options: string[]
  correctIndex: number
  explanation: string
}
