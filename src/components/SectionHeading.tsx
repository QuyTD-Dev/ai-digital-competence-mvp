export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">{title}</h2>
      {description && <p className="mt-3 text-base leading-7 text-slate-500 dark:text-slate-400">{description}</p>}
    </div>
  )
}
