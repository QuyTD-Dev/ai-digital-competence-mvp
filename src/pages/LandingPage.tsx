import { ArrowRight, CheckCircle2, ChevronRight, Play, Sparkles, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RoleCard } from '../components/RoleCard'
import { roles } from '../data/roles'

export function LandingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_8%,rgba(20,184,166,0.14),transparent_32%),radial-gradient(circle_at_90%_18%,rgba(99,102,241,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_16%_8%,rgba(20,184,166,0.15),transparent_32%),radial-gradient(circle_at_90%_18%,rgba(99,102,241,0.12),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800 dark:border-teal-900 dark:bg-teal-950/60 dark:text-teal-300">
              <Sparkles size={14} />
              Required Digital Competence Level for AI
            </div>
            <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">
              Biến AI thành năng lực làm việc <span className="text-teal-700 dark:text-teal-300">có thể đo lường.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg dark:text-slate-400">
              AI Readiness giúp doanh nghiệp xác định mức năng lực số cần thiết theo từng vị trí, từ đó xây dựng lộ trình học tập vừa đúng việc vừa an toàn.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/roles" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200">
                Chọn vị trí của bạn <ArrowRight size={17} />
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-700">
                <Play size={15} fill="currentColor" /> Cách nền tảng hoạt động
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-teal-600" size={16} />5 nhóm vị trí</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-teal-600" size={16} />4 mức năng lực</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-teal-600" size={16} />Lộ trình theo vai trò</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-teal-200/30 blur-3xl dark:bg-teal-500/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Role readiness snapshot</p>
                    <h2 className="mt-2 text-xl font-semibold">Kế toán · AI track</h2>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-300 text-slate-950"><Sparkles size={17} /></span>
                </div>
                <div className="mt-8 flex items-center gap-5">
                  <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#5eead4 0 62%, #1e293b 62% 100%)' }}>
                    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-slate-950">
                      <span className="text-2xl font-semibold">62%</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400">ready</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div><p className="text-xs text-slate-400">Current level</p><p className="mt-1 font-medium">Level 2 · Practitioner</p></div>
                    <div><p className="text-xs text-slate-400">Next milestone</p><p className="mt-1 font-medium text-teal-300">Workflow & control</p></div>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  {[['Đối soát dữ liệu', 78], ['Kiểm soát đầu ra AI', 54], ['Tự động hóa quy trình', 41]].map(([label, value]) => (
                    <div key={label as string}>
                      <div className="mb-1.5 flex justify-between text-xs"><span className="text-slate-300">{label}</span><span className="text-slate-400">{value}%</span></div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-teal-300" style={{ width: `${value}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between px-3 pb-1 pt-5 text-xs text-slate-500 dark:text-slate-400">
                <span>Assessment powered by role context</span><TrendingUp size={15} className="text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-slate-200/80 bg-white/70 dark:border-slate-800/80 dark:bg-slate-900/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Simple by design</p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Từ câu hỏi đúng đến hành động đúng.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">Một trải nghiệm ngắn gọn để người học và quản lý cùng nhìn thấy khoảng cách năng lực, ưu tiên và bước tiến tiếp theo.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['01', 'Chọn vai trò', 'Bắt đầu với bối cảnh công việc thay vì một bài test chung chung.'],
              ['02', 'Đánh giá', 'Đo mức sẵn sàng theo các kỹ năng AI quan trọng nhất.'],
              ['03', 'Phát triển', 'Nhận lộ trình học có thứ tự ưu tiên và bằng chứng hoàn thành.'],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <span className="text-xs font-bold tracking-[0.2em] text-teal-700 dark:text-teal-300">{number}</span>
                <h3 className="mt-8 font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Role-based readiness</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Chọn một vị trí để bắt đầu</h2>
          </div>
          <Link to="/roles" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300">Xem tất cả vị trí <ChevronRight size={16} /></Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {roles.map((role) => <RoleCard key={role.slug} role={role} />)}
        </div>
      </section>
    </>
  )
}
