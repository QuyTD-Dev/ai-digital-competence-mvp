import { Award, CheckCircle2, ShieldCheck } from 'lucide-react'
import type { CertificateRecord } from '../types/accounting'

export function CertificatePreview({ certificate }: { certificate: CertificateRecord }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-teal-200 bg-gradient-to-br from-white via-teal-50/70 to-indigo-50/70 p-1 shadow-soft dark:border-teal-900/70 dark:from-slate-900 dark:via-teal-950/40 dark:to-indigo-950/40">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-6 sm:p-10 dark:border-slate-700/70 dark:bg-slate-950/70">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="relative text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300"><ShieldCheck size={15} /> AI Readiness Academy</div>
          <Award className="mx-auto mt-7 text-amber-500" size={42} strokeWidth={1.5} />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Certificate of completion</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-white">{certificate.title}</h2>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Chứng nhận năng lực số AI dành cho vị trí Kế toán</p>
          <p className="mt-8 text-xs uppercase tracking-[0.16em] text-slate-400">Trao tặng cho</p>
          <p className="mt-2 text-2xl font-semibold text-teal-800 dark:text-teal-200">{certificate.recipient}</p>
          <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-left dark:border-slate-800"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Level</p><p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{certificate.level}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Ngày cấp</p><p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{certificate.issuedAt}</p></div></div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400"><CheckCircle2 size={14} className="text-teal-600" /> Mã chứng chỉ: {certificate.certificateCode}</div>
        </div>
      </div>
    </div>
  )
}
