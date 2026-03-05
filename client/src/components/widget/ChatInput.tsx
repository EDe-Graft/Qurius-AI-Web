import { useState, useRef, useEffect } from 'react'
import { Paperclip, RotateCcw } from 'lucide-react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 72)}px`
    }
  }, [input])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSendMessage(input.trim())
      setInput('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-t border-indigo-500/75 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col gap-1 sm:gap-1.5">
      <form onSubmit={handleSubmit} className="flex items-end gap-2 sm:gap-2.5">
        <div className="flex-1 rounded-full bg-slate-900/88 border border-slate-800/90 flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            disabled={disabled}
            rows={1}
            className="flex-1 resize-none bg-transparent border-none outline-none px-1 sm:px-1.5 py-0.5 sm:py-1 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 max-h-[72px] overflow-y-auto"
          />
          <div className="flex items-center gap-1 sm:gap-1.5 pl-0.5 sm:pl-1">
            <button
              type="button"
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-800/90 bg-slate-900/90 flex items-center justify-center text-slate-500 hover:bg-indigo-500/50 hover:border-indigo-500/90 hover:text-slate-200 transition-all hover:-translate-y-px"
              title="Upload file"
            >
              <Paperclip className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            <button
              type="button"
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-800/90 bg-slate-900/90 flex items-center justify-center text-slate-500 hover:bg-indigo-500/50 hover:border-indigo-500/90 hover:text-slate-200 transition-all hover:-translate-y-px"
              title="Regenerate"
            >
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:-translate-y-px shadow-[0_10px_30px_rgba(99,102,241,0.45)] hover:shadow-[0_12px_35px_rgba(99,102,241,0.55)] flex items-center gap-1 sm:gap-1.5 flex-shrink-0"
        >
          <span className="hidden sm:inline">Send</span>
          <span>➤</span>
        </button>
      </form>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2 text-[10px] sm:text-[11px] text-slate-600">
        <span className="hidden sm:inline">Qurius AI may make mistakes. Please verify important information.</span>
        <span className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px]">
          <kbd className="px-0.5 sm:px-1 py-0.5 rounded bg-slate-900/90 border border-slate-800/90 text-[9px] sm:text-[10px] text-slate-500">
            Shift
          </kbd>
          <span>+</span>
          <kbd className="px-0.5 sm:px-1 py-0.5 rounded bg-slate-900/90 border border-slate-800/90 text-[9px] sm:text-[10px] text-slate-500">
            Enter
          </kbd>
          <span className="hidden sm:inline">for newline</span>
        </span>
      </div>
    </div>
  )
}
