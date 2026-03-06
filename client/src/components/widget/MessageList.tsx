import { useState } from 'react'
import { MessageBubble } from './MessageBubble'
import { User, Copy, ThumbsUp, ThumbsDown, Check } from 'lucide-react'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: string
  liked?: 'like' | 'dislike' | null
  isStreaming?: boolean
  streamingContent?: string
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
  onRatingChange?: (messageId: string, rating: 'like' | 'dislike' | null) => void
}

export function MessageList({ messages, isTyping, companyData, onRatingChange }: MessageListProps) {
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)

  const handleCopy = async (messageId: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedMessageId(messageId)
      setTimeout(() => setCopiedMessageId(null), 2000)
    } catch (error) {
      console.error('Failed to copy message:', error)
    }
  }

  const handleRating = (messageId: string, rating: 'like' | 'dislike' | null) => {
    onRatingChange?.(messageId, rating)
  }

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
                content={message.isStreaming && message.streamingContent !== undefined 
                  ? message.streamingContent 
                  : message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
                liked={message.liked}
              />
            </div>
            {/* Feedback buttons for AI messages - only show when streaming is complete */}
            {!message.isUser && !message.isStreaming && (
              <div className="flex items-center gap-1.5 px-0.5 sm:px-1">
                <button
                  onClick={() => handleRating(message.id, message.liked === 'like' ? null : 'like')}
                  className={`p-1 rounded-md transition-colors ${
                    message.liked === 'like'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-slate-500 hover:text-emerald-400 hover:bg-slate-800/50'
                  }`}
                  title="Thumbs up"
                >
                  <ThumbsUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => handleRating(message.id, message.liked === 'dislike' ? null : 'dislike')}
                  className={`p-1 rounded-md transition-colors ${
                    message.liked === 'dislike'
                      ? 'bg-red-500/20 text-red-400'
                      : 'text-slate-500 hover:text-red-400 hover:bg-slate-800/50'
                  }`}
                  title="Thumbs down"
                >
                  <ThumbsDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => handleCopy(message.id, message.content)}
                  className={`p-1 rounded-md transition-colors ${
                    copiedMessageId === message.id
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'text-slate-500 hover:text-indigo-400 hover:bg-slate-800/50'
                  }`}
                  title="Copy message"
                >
                  {copiedMessageId === message.id ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>
            )}
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
