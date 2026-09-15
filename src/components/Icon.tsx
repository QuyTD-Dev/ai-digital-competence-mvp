import type { LucideProps } from 'lucide-react'
import {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Bot,
  Calculator,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Globe2,
  Handshake,
  Landmark,
  LockKeyhole,
  Megaphone,
  MessageCircle,
  Moon,
  ScanSearch,
  Scale,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../types/roles'

const iconMap: Record<IconName, LucideIcon> = {
  badge: BadgeCheck,
  'book-open': BookOpen,
  globe: Globe2,
  landmark: Landmark,
  scale: Scale,
  users: Users,
  megaphone: Megaphone,
  handshake: Handshake,
  calculator: Calculator,
  sparkles: Sparkles,
  shield: ShieldCheck,
  chart: BarChart3,
  database: Activity,
  'file-check': FileCheck2,
  bot: Bot,
  workflow: Workflow,
  scan: ScanSearch,
  message: MessageCircle,
  target: Target,
  brain: Sparkles,
  lock: LockKeyhole,
}

export type IconProps = LucideProps & { name: IconName }

export function Icon({ name, ...props }: IconProps) {
  const Component = iconMap[name]
  return <Component aria-hidden="true" {...props} />
}

export { Check, CheckCircle2, ChevronRight, Moon, Sun }
