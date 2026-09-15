import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { to: '/', label: 'Tổng quan', end: true },
  { to: '/roles', label: 'Chọn vị trí' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/assessment', label: 'Đánh giá' },
  { to: '/roadmap', label: 'Lộ trình AI' },
  { to: '/certificate', label: 'Chứng chỉ' },
  { to: '/resources', label: 'Tài nguyên' },
  { to: '/framework', label: 'Cơ sở pháp lý' },
]

export function AppShell({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <header className="relative z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="group flex items-center gap-3" aria-label="AI Readiness trang chủ">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-teal-300 shadow-lg shadow-slate-900/10 transition group-hover:scale-105 dark:bg-teal-300 dark:text-slate-950">
              <Sparkles size={19} strokeWidth={2.4} />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight text-slate-900 dark:text-white">AI Readiness</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Workforce platform</span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden items-center gap-4 text-sm font-medium text-slate-500 2xl:flex dark:text-slate-400">
              {navItems.map((item) => <NavLink key={item.to} end={item.end} className={({ isActive }) => `transition hover:text-slate-900 dark:hover:text-white ${isActive ? 'text-slate-900 dark:text-white' : ''}`} to={item.to}>{item.label}</NavLink>)}
            </nav>
            <button type="button" onClick={() => setIsMenuOpen((current) => !current)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-teal-300 hover:text-teal-700 2xl:hidden dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-800 dark:hover:text-teal-300" aria-expanded={isMenuOpen} aria-label="Mở menu điều hướng">{isMenuOpen ? <X size={17} /> : <Menu size={17} />}<span className="hidden sm:inline">Menu</span></button>
            <ThemeToggle />
            <Link
              to="/roles"
              className="hidden items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-teal-700 sm:flex dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200"
            >
              Bắt đầu <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        {isMenuOpen && <div className="border-t border-slate-200/80 bg-white/95 px-5 py-4 backdrop-blur-xl 2xl:hidden dark:border-slate-800/80 dark:bg-slate-950/95"><nav className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2 lg:grid-cols-4">{navItems.map((item) => <NavLink key={item.to} end={item.end} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'}`} to={item.to}>{item.label}</NavLink>)}</nav></div>}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200/80 bg-white/60 dark:border-slate-800/80 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 dark:text-slate-400">
          <p>© 2025 AI Readiness. MVP concept for enterprise learning.</p>
          <p className="text-xs">Đánh giá • Học tập • Ứng dụng có trách nhiệm</p>
        </div>
      </footer>
    </div>
  )
}
