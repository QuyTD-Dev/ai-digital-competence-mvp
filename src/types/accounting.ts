import type { IconName } from './roles'

export type RoadmapPriority = 'Cao' | 'Trung bình' | 'Tiếp theo'

export type RoadmapItem = {
  id: string
  title: string
  description: string
  reason: string
  duration: string
  priority: RoadmapPriority
  skill: string
  level: string
  icon: IconName
  videoId: string
}

export type ResourceItem = {
  id: string
  title: string
  kind: 'Checklist' | 'Template' | 'File mẫu' | 'Hướng dẫn'
  description: string
  skill: string
  levels: string[]
  format: string
  duration: string
  icon: IconName
}

export type AIToolRecommendation = {
  id: string
  name: string
  category: string
  description: string
  useCase: string
  difficulty: 'Cơ bản' | 'Trung cấp' | 'Nâng cao'
  levels: string[]
  skill: string
  icon: IconName
}

export type CertificateRecord = {
  id: string
  title: string
  level: string
  recipient: string
  issuedAt: string
  certificateCode: string
  progress: number
  status: 'Đã đạt' | 'Đang tiến tới'
}
