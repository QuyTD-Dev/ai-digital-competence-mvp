import { Check } from './Icon'
import type { CompetenceLevel } from '../types/roles'

export function LevelProgress({ levels, activeLevel = 2 }: { levels: CompetenceLevel[]; activeLevel?: number }) {
  return (
    <div className="relative">
      <div className="absolute left-6 right-6 top-6 hidden h-0.5 bg-slate-200 sm:block dark:bg-slate-800" />
      <div className="relative grid gap-4 sm:grid-cols-4 sm:gap-2">
        {levels.map((level) => {
          const isComplete = level.level < activeLevel
          const isActive = level.level === activeLevel
          return (
            <div key={level.level} className="group relative flex items-start gap-4 sm:block sm:text-center">
              <div
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-white text-sm font-bold shadow-sm transition dark:border-slate-900 ${isComplete || isActive ? 'text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'}`}
                style={isComplete || isActive ? { backgroundColor: level.color } : undefined}
              >
                {isComplete ? <Check size={18} strokeWidth={3} /> : level.level}
              </div>
              <div className="pb-1 sm:mt-4">
                <p className={`text-sm font-semibold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>Level {level.level}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">{level.shortLabel}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
