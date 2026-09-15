import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, CircleHelp, RotateCcw, Sparkles, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { accountingAssessmentQuestions } from '../data/roles'

type AssessmentLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

const levelDescriptions: Record<AssessmentLevel, string> = {
  Beginner: 'Bạn nên củng cố nền tảng AI, dữ liệu và cách kiểm tra đầu ra trước khi áp dụng vào nghiệp vụ.',
  Intermediate: 'Bạn đã có nền tảng tốt và nên tập trung vào đối soát, phân tích và workflow có kiểm soát.',
  Advanced: 'Bạn có thể tiến tới thiết kế quy trình, đo lường rủi ro và hỗ trợ đồng đội triển khai AI.',
  Expert: 'Bạn đang ở nhóm có thể dẫn dắt chiến lược AI, governance và chuyển đổi quy trình cấp phòng ban.',
}

function getLevel(score: number): AssessmentLevel {
  if (score <= 2) return 'Beginner'
  if (score <= 4) return 'Intermediate'
  if (score <= 6) return 'Advanced'
  return 'Expert'
}

export function AssessmentPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const question = accountingAssessmentQuestions[step]
  const answeredCount = Object.keys(answers).length
  const score = accountingAssessmentQuestions.reduce((total, item) => total + (answers[item.id] === item.correctIndex ? 1 : 0), 0)
  const level = getLevel(score)

  const skillStats = useMemo(() => {
    const stats = accountingAssessmentQuestions.reduce<Record<string, { skill: string; correct: number; total: number }>>((result, item) => {
      const current = result[item.skill] ?? { skill: item.skill, correct: 0, total: 0 }
      current.total += 1
      if (answers[item.id] === item.correctIndex) current.correct += 1
      result[item.skill] = current
      return result
    }, {})
    return Object.values(stats).sort((a, b) => (b.correct / b.total) - (a.correct / a.total))
  }, [answers])

  const strengths = skillStats.filter((item) => item.correct > 0).slice(0, 3)
  const gaps = [...skillStats].filter((item) => item.correct < item.total).sort((a, b) => (a.correct / a.total) - (b.correct / b.total)).slice(0, 3)

  const chooseAnswer = (optionIndex: number) => {
    setAnswers((current) => ({ ...current, [question.id]: optionIndex }))
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4"><Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><ArrowLeft size={15} /> Dashboard học tập</Link><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300"><Sparkles size={14} /> AI assessment result</span></div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-soft sm:p-10"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" /><div className="relative text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Kết quả sơ bộ</p><div className="mx-auto mt-8 flex h-48 w-48 items-center justify-center rounded-full" style={{ background: `conic-gradient(#5eead4 0 ${Math.round((score / accountingAssessmentQuestions.length) * 100)}%, #1e293b ${Math.round((score / accountingAssessmentQuestions.length) * 100)}% 100%)` }}><div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-slate-950"><span className="text-4xl font-semibold">{score}/{accountingAssessmentQuestions.length}</span><span className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{Math.round((score / accountingAssessmentQuestions.length) * 100)}% đúng</span></div></div><div className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-300 px-3.5 py-2 text-sm font-bold text-slate-950"><Target size={16} /> Level đề xuất: {level}</div><p className="mt-5 text-sm leading-7 text-slate-300">{levelDescriptions[level]}</p><button type="button" onClick={reset} className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-teal-300 transition hover:text-white"><RotateCcw size={14} /> Làm lại bài đánh giá</button></div></div>
          <div><div className="rounded-3xl border border-teal-200 bg-teal-50/70 p-6 dark:border-teal-900/70 dark:bg-teal-950/30"><div className="flex items-center gap-2 text-sm font-semibold text-teal-800 dark:text-teal-200"><BrainCircuit size={18} /> AI đã đọc kết quả của bạn</div><p className="mt-3 text-sm leading-7 text-teal-950/80 dark:text-teal-100/80">Kết quả được dùng để ưu tiên nội dung học. Đây là gợi ý phát triển, không phải chứng nhận năng lực nghề nghiệp hay kết luận pháp lý.</p></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"><TrendingUp size={17} className="text-teal-600" /> Điểm mạnh</div><div className="mt-4 space-y-3">{strengths.map((item) => <div key={item.skill} className="flex items-center justify-between gap-3 text-xs"><span className="text-slate-500 dark:text-slate-400">{item.skill}</span><span className="rounded-full bg-teal-50 px-2 py-1 font-bold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">{item.correct}/{item.total}</span></div>)}</div></div><div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"><Target size={17} className="text-amber-500" /> Cần ưu tiên</div><div className="mt-4 space-y-3">{gaps.length > 0 ? gaps.map((item) => <div key={item.skill} className="flex items-center justify-between gap-3 text-xs"><span className="text-slate-500 dark:text-slate-400">{item.skill}</span><span className="rounded-full bg-amber-50 px-2 py-1 font-bold text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">{item.correct}/{item.total}</span></div>) : <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">Không có khoảng trống đáng kể trong các nhóm kỹ năng đã đánh giá.</p>}</div></div></div><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link to="/roadmap" className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 dark:bg-teal-300 dark:text-slate-950">Xem lộ trình học được AI gợi ý <ArrowRight size={16} /></Link><Link to="/certificate" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-200">Xem chứng chỉ <ArrowRight size={16} /></Link></div></div>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4"><Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"><ArrowLeft size={15} /> Dashboard học tập</Link><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300"><CircleHelp size={14} /> 8 câu hỏi · Kế toán</span></div>
      <div className="mt-10 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">AI Skill Assessment</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">Đánh giá năng lực AI cho Kế toán</h1><p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400">Trả lời các câu hỏi nghiệp vụ và tình huống thực tế để nhận level đề xuất cùng những kỹ năng nên ưu tiên tiếp theo.</p></div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center justify-between text-xs text-slate-400"><span>Câu hỏi {step + 1} / {accountingAssessmentQuestions.length}</span><span>{answeredCount}/{accountingAssessmentQuestions.length} đã trả lời</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-teal-600 transition-all duration-300 dark:bg-teal-300" style={{ width: `${((step + 1) / accountingAssessmentQuestions.length) * 100}%` }} /></div><div className="mt-8 flex flex-wrap items-center gap-2"><span className="rounded-full bg-teal-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">{question.skill}</span>{question.scenario && <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">Tình huống</span>}</div>{question.scenario && <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">{question.scenario}</p>}<h2 className="mt-6 text-xl font-semibold leading-8 text-slate-900 dark:text-white">{question.question}</h2><div className="mt-7 space-y-3">{question.options.map((option, index) => { const isSelected = answers[question.id] === index; return <button key={option} type="button" onClick={() => chooseAnswer(index)} className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left text-sm leading-6 transition ${isSelected ? 'border-teal-500 bg-teal-50 text-teal-950 shadow-sm dark:border-teal-400 dark:bg-teal-950/40 dark:text-teal-100' : 'border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-teal-50/30 dark:border-slate-800 dark:text-slate-300 dark:hover:border-teal-900'}`}><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 text-slate-400 dark:border-slate-600'}`}>{String.fromCharCode(65 + index)}</span><span>{option}</span></button> })}</div><div className="mt-8 flex flex-col-reverse justify-between gap-3 sm:flex-row"><button type="button" disabled={step === 0} onClick={() => setStep((current) => current - 1)} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-500 transition disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-800 dark:text-slate-400"><ArrowLeft size={15} /> Câu trước</button>{step === accountingAssessmentQuestions.length - 1 ? <button type="button" disabled={answeredCount < accountingAssessmentQuestions.length} onClick={() => setIsSubmitted(true)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-teal-300 dark:text-slate-950">Nộp bài & xem kết quả <CheckCircle2 size={16} /></button> : <button type="button" disabled={answers[question.id] === undefined} onClick={() => setStep((current) => current + 1)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-teal-300 dark:text-slate-950">Câu tiếp theo <ArrowRight size={16} /></button>}</div>{step === accountingAssessmentQuestions.length - 1 && answeredCount < accountingAssessmentQuestions.length && <p className="mt-4 text-right text-xs text-amber-600 dark:text-amber-300">Còn thiếu {accountingAssessmentQuestions.length - answeredCount} câu trả lời.</p>}</div>
        <aside className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"><BrainCircuit size={18} className="text-teal-600" /> Bản đồ bài đánh giá</div><p className="mt-2 text-xs leading-5 text-slate-400">Bạn có thể quay lại câu đã làm để điều chỉnh câu trả lời.</p><div className="mt-5 grid grid-cols-4 gap-2">{accountingAssessmentQuestions.map((item, index) => <button key={item.id} type="button" onClick={() => setStep(index)} className={`flex h-10 items-center justify-center rounded-xl text-xs font-bold transition ${step === index ? 'bg-slate-950 text-white dark:bg-teal-300 dark:text-slate-950' : answers[item.id] !== undefined ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300' : 'bg-slate-100 text-slate-400 dark:bg-slate-800'}`}>{index + 1}</button>)}</div><div className="mt-6 space-y-3 border-t border-slate-100 pt-5 dark:border-slate-800"><div className="flex items-center justify-between text-xs"><span className="text-slate-400">Tiến độ trả lời</span><strong className="text-slate-700 dark:text-slate-200">{Math.round((answeredCount / accountingAssessmentQuestions.length) * 100)}%</strong></div><div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-teal-600 dark:bg-teal-300" style={{ width: `${(answeredCount / accountingAssessmentQuestions.length) * 100}%` }} /></div><p className="flex items-start gap-2 text-xs leading-5 text-slate-400"><Sparkles size={14} className="mt-0.5 shrink-0 text-teal-600" /> AI sẽ gợi ý lộ trình từ các kỹ năng có điểm thấp và mục tiêu Level 3.</p></div></aside>
      </div>
    </section>
  )
}
