import { useState, useRef, useEffect } from 'react'
import { Paperclip, RotateCcw } from 'lucide-react'
import { useTheme } from '@/context/useThemeContext'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
  primaryColor: string
  showAttribution?: boolean
}

export function ChatInput({ onSendMessage, disabled, primaryColor, showAttribution }: ChatInputProps) {
  const [input, setInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { isDark } = useTheme()

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
    <div className={`px-4 sm:px-6 py-2.5 sm:py-3 border-t flex flex-col gap-1 sm:gap-1.5 transition-colors ${
      isDark 
        ? 'border-indigo-500/75 bg-gradient-to-b from-slate-900 to-slate-950' 
        : 'border-gray-200 bg-gradient-to-b from-white to-gray-50'
    }`} style={!isDark ? { borderTopColor: `${primaryColor}30` } : {}}>
      <form onSubmit={handleSubmit} className="flex items-end gap-2 sm:gap-2.5">
        <div 
          className={`flex-1 rounded-full flex items-start px-1.5 sm:px-2 py-0.5 sm:py-1 transition-all overflow-hidden ${
            isDark 
              ? 'bg-slate-900/88 border' 
              : 'bg-gray-100/90 border'
          } ${isFocused ? 'ring-2 ring-offset-0' : ''}`}
          style={isFocused ? { 
            borderColor: primaryColor,
            boxShadow: `0 0 0 2px ${primaryColor}40`
          } : {
            borderColor: isDark ? 'rgb(30 41 59 / 0.9)' : 'rgb(229 231 235)'
          }}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask anything..."
            disabled={disabled}
            rows={1}
            className={`flex-1 resize-none bg-transparent border-none outline-none px-1 sm:px-1.5 py-0.5 sm:py-1 text-xs sm:text-sm max-h-[72px] overflow-y-auto min-h-[20px] ${
              isDark 
                ? 'text-slate-200 placeholder:text-slate-400' 
                : 'text-gray-900 placeholder:text-gray-400'
            }`}
            style={{
              maxHeight: '72px',
              overflowY: 'auto'
            }}
          />
          <div className="flex items-center gap-1 sm:gap-1.5 pl-0.5 sm:pl-1">
            <button
              type="button"
              className={`hidden w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all hover:-translate-y-px ${
                isDark 
                  ? 'border-slate-800/90 bg-slate-900/90 text-slate-500 hover:bg-indigo-500/50 hover:border-indigo-500/90 hover:text-slate-200' 
                  : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100'
              }`}
              style={!isDark ? {
                '--hover-color': primaryColor
              } as React.CSSProperties : {}}
              title="Upload file"
            >
              <Paperclip className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            <button
              type="button"
              className={`hidden w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all hover:-translate-y-px ${
                isDark 
                  ? 'border-slate-800/90 bg-slate-900/90 text-slate-500 hover:bg-indigo-500/50 hover:border-indigo-500/90 hover:text-slate-200' 
                  : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100'
              }`}
              title="Regenerate"
            >
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:-translate-y-px flex items-center gap-1 sm:gap-1.5 flex-shrink-0"
          style={{
            background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}dd)`,
            boxShadow: `0 10px 30px ${primaryColor}45`,
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              e.currentTarget.style.boxShadow = `0 12px 35px ${primaryColor}55`
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 10px 30px ${primaryColor}45`
          }}
        >
          <span className="hidden sm:inline">Send</span>
          <span>➤</span>
        </button>
      </form>
      {/* Warning text above shortcuts/attribution */}
      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-[10px] sm:text-[11px] ${
          isDark ? 'text-slate-600' : 'text-gray-500'
        }`}
      >
        <span className="hidden sm:inline">
          Qurius AI may make mistakes. Please verify important information.
        </span>
      </div>

      {/* Bottom row: attribution (left) + Shift+Enter label (right) */}
      <div
        className={`mt-0.5 flex items-center text-[10px] sm:text-[11px] ${
          isDark ? 'text-slate-600' : 'text-gray-500'
        } ${showAttribution ? 'justify-between' : 'justify-end'}`}
      >
        {showAttribution && (
          <span>
            Powered by{' '}
            <a
              href="https://qurius.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline transition-all"
              style={{ color: primaryColor }}
            >
              Qurius AI
            </a>
          </span>
        )}
        <span className="hidden sm:flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px]">
          <span>Press</span>
          <kbd
            className={`px-0.5 sm:px-1 py-0.5 rounded border text-[9px] sm:text-[10px] ${
              isDark
                ? 'bg-slate-900/90 border-slate-800/90 text-slate-500'
                : 'bg-gray-100 border-gray-300 text-gray-600'
            }`}
          >
            Shift
          </kbd>
          <span>+</span>
          <kbd
            className={`px-0.5 sm:px-1 py-0.5 rounded border text-[9px] sm:text-[10px] ${
              isDark
                ? 'bg-slate-900/90 border-slate-800/90 text-slate-500'
                : 'bg-gray-100 border-gray-300 text-gray-600'
            }`}
          >
            Enter
          </kbd>
          <span>for new line</span>
        </span>
      </div>
    </div>
  )
}
