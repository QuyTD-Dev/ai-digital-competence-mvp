import { ArrowLeft, CircleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8"><CircleAlert className="mx-auto text-teal-600" size={38} /><h1 className="mt-6 text-4xl font-semibold text-slate-900 dark:text-white">Trang không tồn tại</h1><p className="mt-4 text-slate-500 dark:text-slate-400">Có thể đường dẫn đã thay đổi. Hãy quay lại trang chọn vị trí để tiếp tục.</p><Link to="/roles" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white dark:bg-teal-300 dark:text-slate-950"><ArrowLeft size={16} /> Chọn vị trí</Link></section>
}
