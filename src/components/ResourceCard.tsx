import { ArrowRight, Clock3 } from 'lucide-react'
import { Icon } from './Icon'
import type { AIToolRecommendation, ResourceItem } from '../types/accounting'

export function ResourceCard({ resource }: { resource: ResourceItem }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-900">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"><Icon name={resource.icon} size={20} /></span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:bg-slate-800 dark:text-slate-300">{resource.kind}</span>
      </div>
      <h3 className="mt-5 font-semibold tracking-tight text-slate-900 dark:text-white">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{resource.description}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400"><span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">{resource.skill}</span>{resource.levels.slice(0, 2).map((level) => <span key={level} className="rounded-full bg-teal-50 px-2.5 py-1 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">{level}</span>)}</div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400 dark:border-slate-800"><span>{resource.format}</span><span className="inline-flex items-center gap-1"><Clock3 size={13} />{resource.duration}</span></div>
      <button type="button" className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300">Xem tài nguyên <ArrowRight size={14} /></button>
    </article>
  )
}

const difficultyStyles = {
  'Cơ bản': 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300',
  'Trung cấp': 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
  'Nâng cao': 'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300',
}

export function AIToolCard({ tool }: { tool: AIToolRecommendation }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-900">
      <div className="flex items-start justify-between gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-teal-300 dark:bg-teal-300 dark:text-slate-950"><Icon name={tool.icon} size={20} /></span><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${difficultyStyles[tool.difficulty]}`}>{tool.difficulty}</span></div>
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">{tool.category}</p>
      <h3 className="mt-2 font-semibold tracking-tight text-slate-900 dark:text-white">{tool.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{tool.description}</p>
      <div className="mt-5 rounded-2xl bg-slate-50 p-3.5 dark:bg-slate-800/70"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Use case Kế toán</p><p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-300">{tool.useCase}</p></div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400"><span>{tool.skill}</span><span>{tool.levels.join(' · ')}</span></div>
    </article>
  )
}
