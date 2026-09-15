import { ArrowLeft, ArrowRight, Clock3, Construction, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { LevelProgress } from '../components/LevelProgress'
import { SectionHeading } from '../components/SectionHeading'
import { accountingLevels, accountingSkills, getRole, recommendedAccountingTools } from '../data/roles'

function AccountingDetail() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(20,184,166,0.17),transparent_28%),linear-gradient(135deg,rgba(240,253,250,0.9),rgba(248,250,252,0.4))] dark:bg-[radial-gradient(circle_at_78%_12%,rgba(20,184,166,0.12),transparent_28%),linear-gradient(135deg,rgba(15,118,110,0.08),rgba(2,6,23,0.2))]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <Link to="/roles" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><ArrowLeft size={15} /> Tất cả vị trí</Link>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-teal-800 backdrop-blur dark:border-teal-900 dark:bg-slate-900/70 dark:text-teal-300"><Sparkles size={14} /> Accounting AI readiness track</div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">Năng lực số AI cần thiết cho Kế toán</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">AI đang chuyển vai trò kế toán từ xử lý thủ công sang kiểm soát, phân tích và tư vấn. Lộ trình này giúp bạn ứng dụng AI vào công việc hàng ngày mà vẫn giữ được tính chính xác, truy vết và trách nhiệm nghề nghiệp.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#assessment" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-teal-700/15 transition hover:-translate-y-0.5 hover:bg-teal-800 dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200">Bắt đầu đánh giá <ArrowRight size={17} /></a>
              <a href="#learning-path" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"><Clock3 size={16} /> Xem lộ trình học</a>
            </div>
            <Link to="/dashboard" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200">Mở dashboard học tập <ArrowRight size={15} /></Link>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[3rem] bg-teal-300/20 blur-3xl dark:bg-teal-400/10" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/85">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Readiness snapshot</span><span className="rounded-lg bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">Beta</span></div>
              <div className="mt-8 flex justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#0f766e 0 62%, #dff6f2 62% 100%)' }}>
                  <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900"><span className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">62%</span><span className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-400">ready</span></div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70"><p className="text-xs text-slate-400">Current level</p><p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-100">Level 2</p></div>
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70"><p className="text-xs text-slate-400">Next focus</p><p className="mt-2 text-sm font-semibold text-teal-700 dark:text-teal-300">Control</p></div>
              </div>
              <p className="mt-5 text-center text-xs leading-5 text-slate-400">Mức hiện tại là bản xem trước. Bắt đầu đánh giá để nhận kết quả cá nhân hóa.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="learning-path" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading eyebrow="Learning path" title="4 mức năng lực, một lộ trình rõ ràng" description="Mỗi level mô tả hành vi có thể quan sát được, giúp người học biết mình đang ở đâu và bước tiếp theo là gì." />
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/60">
          <LevelProgress levels={accountingLevels} activeLevel={2} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accountingLevels.map((level) => <div key={level.level} className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/50"><div className="flex items-center justify-between"><span className="text-sm font-bold" style={{ color: level.color }}>0{level.level}</span><span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:bg-slate-800">{level.shortLabel}</span></div><h3 className="mt-5 text-sm font-semibold leading-5 text-slate-900 dark:text-white">{level.name}</h3><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{level.description}</p><p className="mt-4 border-t border-slate-200 pt-4 text-xs font-medium leading-5 text-slate-600 dark:border-slate-800 dark:text-slate-300">Kết quả: {level.outcome}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/70 dark:border-slate-800/80 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="Accounting skill map" title="Những kỹ năng AI tạo ra khác biệt" description="Tập trung vào các năng lực hỗ trợ kiểm soát, phân tích và giảm thao tác lặp — không thay thế phán đoán nghề nghiệp." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accountingSkills.map((skill) => <div key={skill.title} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-900"><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300"><Icon name={skill.icon} size={21} /></span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:bg-slate-800 dark:text-slate-400">{skill.tag}</span></div><h3 className="mt-6 font-semibold text-slate-900 dark:text-white">{skill.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{skill.description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Recommended stack" title="Công cụ AI khuyến nghị cho Kế toán" description="Một stack khởi điểm để khám phá theo từng nhu cầu công việc. Hãy luôn kiểm tra quyền truy cập và chính sách dữ liệu trước khi dùng." /><span className="inline-flex w-fit items-center rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-slate-800 dark:text-slate-400">4 nhóm công cụ</span></div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {recommendedAccountingTools.map((tool) => <div key={tool.name} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"><Icon name={tool.icon} size={21} /></span><p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">{tool.category}</p><h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{tool.name}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{tool.description}</p><div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{tool.fit}</div></div>)}
        </div>
      </section>

      <section id="assessment" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"><div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" /><div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Next step</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Sẵn sàng biết mình đang ở đâu?</h2><p className="mt-4 text-sm leading-7 text-slate-300">Hoàn thành bài đánh giá ngắn để nhận bản đồ kỹ năng, mức năng lực hiện tại và lộ trình học tập ưu tiên cho vai trò Kế toán.</p></div><button type="button" className="inline-flex w-fit items-center gap-2 rounded-2xl bg-teal-300 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200">Bắt đầu đánh giá <ArrowRight size={17} /></button></div></div>
      </section>
    </>
  )
}

function PlaceholderDetail({ roleName, description, icon, accent }: { roleName: string; description: string; icon: Parameters<typeof Icon>[0]['name']; accent: string }) {
  return <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-28"><Link to="/roles" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><ArrowLeft size={15} /> Tất cả vị trí</Link><div className="mx-auto mt-20 max-w-2xl text-center"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl" style={{ backgroundColor: `${accent}20`, color: accent }}><Icon name={icon} size={30} /></span><div className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-300"><Construction size={14} /> Đang hoàn thiện</div><h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">Năng lực AI cho {roleName}</h1><p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400">{description}</p><div className="mx-auto mt-10 grid max-w-lg gap-3 text-left sm:grid-cols-3">{['Đánh giá theo vai trò', 'Bản đồ kỹ năng', 'Lộ trình học tập'].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"><span className="mb-3 block h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />{item}</div>)}</div><button type="button" className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">Coming soon <ArrowRight size={16} /></button></div></section>
}

export function RoleDetailPage() {
  const { slug } = useParams()
  const role = getRole(slug)

  if (!role) return <PlaceholderDetail roleName="vai trò này" description="Trang chi tiết đang được cập nhật." icon="sparkles" accent="#0f766e" />
  if (role.slug === 'accounting') return <AccountingDetail />

  return <PlaceholderDetail roleName={role.name} description={role.description} icon={role.icon} accent={role.accent} />
}
