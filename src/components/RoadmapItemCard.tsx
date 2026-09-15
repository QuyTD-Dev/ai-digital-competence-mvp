import { ArrowRight, CheckCircle2, Clock3, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import type { RoadmapItem } from '../types/accounting'

const priorityStyles = {
  Cao: 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300',
  'Trung bình': 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
  'Tiếp theo': 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
}

export function RoadmapItemCard({ item, index, compact = false }: { item: RoadmapItem; index: number; compact?: boolean }) {
  return (
    <article className={`group rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-900 ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">
          <Icon name={item.icon} size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">0{index + 1}</span>
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${priorityStyles[item.priority]}`}>{item.priority}</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400"><Clock3 size={13} />{item.duration}</span>
          </div>
          <h3 className="mt-3 font-semibold tracking-tight text-slate-900 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">{item.skill}</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">{item.level}</span>
          </div>
          <p className={`flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400 ${compact ? 'mt-3' : 'mt-4 border-t border-slate-100 pt-4 dark:border-slate-800'}`}><Sparkles size={14} className="mt-0.5 shrink-0 text-teal-600" /><span><strong className="font-semibold text-slate-700 dark:text-slate-200">Vì sao AI đề xuất:</strong> {item.reason}</span></p>
        </div>
        <CheckCircle2 size={18} className="mt-1 shrink-0 text-slate-200 transition group-hover:text-teal-500 dark:text-slate-700" />
      </div>
      <div className="mt-5 flex justify-end border-t border-slate-100 pt-4 dark:border-slate-800">
        <Link to={`/dashboard/learn/${item.videoId}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300">Bắt đầu bài học <ArrowRight size={14} /></Link>
      </div>
    </article>
  )
}
