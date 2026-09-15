import type { IconName } from './roles'

export type FrameworkArea = {
  code: string
  name: string
  description: string
  icon: IconName
}

export type LegalReference = {
  id: string
  shortTitle: string
  fullTitle: string
  issuer: string
  date: string
  badge: 'Khung quốc tế' | 'Văn bản pháp lý VN' | 'Chính sách'
  icon: IconName
  summary: string
  relevance: string
  details: string[]
  url: string
  status: string
}
