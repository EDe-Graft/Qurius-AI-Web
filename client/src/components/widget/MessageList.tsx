import { MessageBubble } from './MessageBubble'
import { User } from 'lucide-react'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: string
  liked?: 'like' | 'dislike' | null
}

interface CompanyData {
  id: string
  name: string
  logo_url?: string
}

interface MessageListProps {
  messages: Message[]
  isTyping: boolean
  companyData: CompanyData
}

export function MessageList({ messages, isTyping, companyData }: MessageListProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      {/* System Banner */}
      {messages.length === 1 && (
        <div className="mx-auto mb-1 sm:mb-2 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 text-[10px] sm:text-[11px] text-slate-500 inline-flex items-center gap-1 sm:gap-1.5">
          <span>✨</span>
          <span>
            <strong className="text-slate-400 font-medium">Pro tip:</strong> <span className="hidden sm:inline">Ask one focused question at a time for best results.</span><span className="sm:hidden">Ask one question at a time.</span>
          </span>
        </div>
      )}

      {/* Messages */}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-2 sm:gap-2.5 items-start max-w-[85%] sm:max-w-[80%] ${
            message.isUser ? 'self-end flex-row-reverse' : 'self-start'
          }`}
        >
          <div
            className={`w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-semibold text-white flex-shrink-0 overflow-hidden ${
              message.isUser
                ? 'bg-gradient-to-br from-emerald-500 to-sky-400'
                : 'bg-gradient-to-br from-indigo-500 to-sky-400'
            }`}
          >
            {message.isUser ? (
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            ) : companyData.logo_url ? (
              <img 
                src={companyData.logo_url} 
                alt={companyData.name || 'Company logo'} 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to 'Q' if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.textContent = 'Q'
                    parent.style.display = 'flex'
                  }
                }}
              />
            ) : (
              'Q'
            )}
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <div
              className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border ${
                message.isUser
                  ? 'bg-indigo-600 border-indigo-500/80 text-slate-50'
                  : 'bg-slate-900/95 border-slate-800/80 text-slate-200'
              }`}
            >
              <MessageBubble
                content={message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
                liked={message.liked}
              />
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-600 px-0.5 sm:px-1">
              {message.isUser ? 'You' : 'AI'} · {message.timestamp}
            </p>
          </div>
        </div>
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex gap-2 sm:gap-2.5 items-start self-start max-w-[85%] sm:max-w-[80%]">
          <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-[10px] sm:text-xs font-semibold text-white flex-shrink-0 overflow-hidden">
            {companyData.logo_url ? (
              <img 
                src={companyData.logo_url} 
                alt={companyData.name || 'Company logo'} 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to 'Q' if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.textContent = 'Q'
                    parent.style.display = 'flex'
                  }
                }}
              />
            ) : (
              'Q'
            )}
          </div>
          <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-900/95 border border-slate-800/80">
            <div className="flex gap-0.5 sm:gap-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
