import { FormEvent, useState } from 'react'
import { Bot, ChevronRight, Send, Sparkles, UserRound, X } from 'lucide-react'
import { accountingChatMessages } from '../data/roles'

type Message = { id: string; role: 'assistant' | 'user'; text: string; time: string }

const suggestedPrompts = ['Giải thích Level 2', 'AI có thể giúp đối soát thế nào?', 'Checklist an toàn dữ liệu']

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>(accountingChatMessages)

  const sendMessage = (event?: FormEvent, prompt?: string) => {
    event?.preventDefault()
    const text = (prompt ?? input).trim()
    if (!text) return

    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: 'user', text, time: 'now' }])
    setInput('')
    window.setTimeout(() => {
      setMessages((current) => [...current, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: 'Tôi gợi ý bắt đầu từ dữ liệu giả lập, xác định tiêu chí kiểm tra và giữ người chịu trách nhiệm ở bước phê duyệt cuối.',
        time: 'now',
      }])
    }, 550)
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white dark:bg-teal-950">
            <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-300 text-slate-950"><Bot size={18} /></span><div><p className="text-sm font-semibold">AI Assistant</p><p className="text-[11px] text-slate-400">Accounting learning coach</p></div></div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Đóng AI Assistant"><X size={17} /></button>
          </div>
          <div className="max-h-80 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-2.5 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${message.role === 'user' ? 'bg-slate-100 text-slate-500 dark:bg-slate-800' : 'bg-teal-50 text-teal-700 dark:bg-teal-950/70 dark:text-teal-300'}`}><>{message.role === 'user' ? <UserRound size={14} /> : <Sparkles size={14} />}</></span>
                <div className={`max-w-[82%] ${message.role === 'user' ? 'text-right' : ''}`}><div className={`inline-block rounded-2xl px-3.5 py-3 text-sm leading-5 ${message.role === 'user' ? 'rounded-tr-sm bg-slate-900 text-white dark:bg-teal-300 dark:text-slate-950' : 'rounded-tl-sm bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>{message.text}</div><p className="mt-1 text-[10px] text-slate-400">{message.time}</p></div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 px-4 py-3 dark:border-slate-800">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">{suggestedPrompts.map((prompt) => <button key={prompt} type="button" onClick={() => sendMessage(undefined, prompt)} className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-medium text-slate-500 transition hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-teal-700 dark:hover:text-teal-300">{prompt}</button>)}</div>
            <form onSubmit={sendMessage} className="flex items-center gap-2 rounded-2xl bg-slate-100 p-1.5 dark:bg-slate-800"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Hỏi về bài học..." className="min-w-0 flex-1 bg-transparent px-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white" /><button type="submit" className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white transition hover:bg-teal-800 dark:bg-teal-300 dark:text-slate-950" aria-label="Gửi tin nhắn"><Send size={15} /></button></form>
          </div>
        </div>
      )}
      <button type="button" onClick={() => setIsOpen((current) => !current)} className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200" aria-expanded={isOpen} aria-label="Mở AI Assistant"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-300 text-slate-950 dark:bg-slate-950 dark:text-teal-300"><Sparkles size={13} /></span>{isOpen ? 'Đóng Assistant' : 'Hỏi AI'}<ChevronRight size={15} className={isOpen ? 'rotate-90 transition' : 'transition'} /></button>
    </>
  )
}
