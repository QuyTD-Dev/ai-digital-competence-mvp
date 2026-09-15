import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Icon } from './Icon'
import type { Role } from '../types/roles'

export function RoleCard({ role }: { role: Role }) {
  return (
    <Link
      to={`/roles/${role.slug}`}
      className="group relative flex min-h-[238px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700"
      style={{ '--role-accent': role.accent, '--role-soft': role.accentSoft } as React.CSSProperties}
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-60 blur-2xl transition group-hover:scale-150" style={{ backgroundColor: role.accentSoft }} />
      {role.isFeatured && (
        <span className="absolute right-5 top-5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-teal-700 dark:bg-teal-950/70 dark:text-teal-300">
          Featured track
        </span>
      )}
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: role.accentSoft, color: role.accent }}>
        <Icon name={role.icon} size={23} strokeWidth={1.9} />
      </span>
      <div className="relative mt-auto pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{role.eyebrow}</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{role.name}</h3>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white dark:border-slate-700 dark:text-slate-300 dark:group-hover:border-teal-300 dark:group-hover:bg-teal-300 dark:group-hover:text-slate-950">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="mt-2 max-w-[26rem] text-sm leading-6 text-slate-500 dark:text-slate-400">{role.description}</p>
      </div>
    </Link>
  )
}
