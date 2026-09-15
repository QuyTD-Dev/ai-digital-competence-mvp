import { ArrowLeft, ArrowRight, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RoleCard } from '../components/RoleCard'
import { roles } from '../data/roles'

export function RoleSelectionPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><ArrowLeft size={15} /> Trang chủ</Link>
      <div className="mt-10 max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"><Compass size={14} className="text-teal-600" /> Role selection</span>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl dark:text-white">Bạn muốn nâng cao năng lực AI cho vị trí nào?</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400">Chọn bối cảnh gần nhất với công việc của bạn. Nền tảng sẽ đề xuất mức năng lực cần thiết, kỹ năng ưu tiên và lộ trình phát triển tương ứng.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {roles.map((role) => <RoleCard key={role.slug} role={role} />)}
      </div>
      <div className="mt-12 flex items-center gap-2 text-sm text-slate-400"><span>Chưa chắc nên chọn gì?</span><span>Hãy bắt đầu với vai trò có nhiều điểm giao nhất với trách nhiệm hàng ngày.</span><ArrowRight size={15} /></div>
    </section>
  )
}
