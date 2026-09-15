import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import type { LearningSuggestion } from '../types/roles'

export function LearningSuggestionCard({ suggestion }: { suggestion: LearningSuggestion }) {
  const action = suggestion.videoId ? <Link to={`/dashboard/learn/${suggestion.videoId}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300">{suggestion.actionLabel} <ArrowRight size={14} /></Link> : <button type="button" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300">{suggestion.actionLabel} <ArrowRight size={14} /></button>
  return <article className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-900"><div className="flex items-start justify-between gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300"><Icon name={suggestion.icon} size={19} /></span><span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">AI gợi ý</span></div><h3 className="mt-5 font-semibold text-slate-900 dark:text-white">{suggestion.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{suggestion.description}</p><p className="mt-4 text-xs font-medium text-slate-400">{suggestion.reason}</p><div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">{action}</div></article>
}
