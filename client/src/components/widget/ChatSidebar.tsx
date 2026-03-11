import { useState } from 'react'
import { Search } from 'lucide-react'
import { useTheme } from '@/context/useThemeContext'

interface Conversation {
  id: string
  title: string
  preview: string
  timestamp: string
}

interface ChatSidebarProps {
  conversations: Conversation[]
  activeConversationId: string | null
  onSelectConversation: (id: string) => void
  onNewConversation: () => void
  isOpen: boolean
  onClose: () => void
  primaryColor: string
}

export function ChatSidebar({
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewConversation,
  isOpen,
  onClose,
  primaryColor
}: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const { isDark } = useTheme()

  const filteredConversations = conversations.filter(conv =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.preview.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 border-r flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
          isDark 
            ? 'border-slate-800 bg-gradient-to-b from-slate-950 to-slate-950' 
            : 'border-gray-200 bg-gradient-to-b from-white to-gray-50'
        } ${
          isOpen 
            ? 'translate-x-0 w-[280px] min-w-[240px] max-w-[320px]' 
            : '-translate-x-full md:translate-x-0 w-0 md:w-0 min-w-0 max-w-0 md:border-r-0'
        }`}
      >
        {/* Header */}
        <div className={`p-4 pb-3 border-b flex flex-col gap-2 ${
          isDark ? 'border-slate-800/70' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between gap-2">
            <h2 className={`text-sm font-semibold tracking-wider uppercase ${
              isDark ? 'text-slate-400' : 'text-gray-600'
            }`}>
              Conversations
            </h2>
            <button
              onClick={onClose}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
                isDark 
                  ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className={`text-xs ${
            isDark ? 'text-slate-500' : 'text-gray-500'
          }`}>
            Pick a previous conversation or start a new one.
          </p>
        </div>

      {/* Search */}
      <div className="p-4 pb-2.5 relative">
        <input
          type="text"
          placeholder="Search conversations"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full rounded-full border px-3 py-1.5 pl-7 text-xs outline-none transition-colors ${
            isDark 
              ? 'bg-slate-900/80 border-slate-800/90 text-slate-200 placeholder:text-slate-600 focus:border-slate-700 focus:bg-slate-900' 
              : 'bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 focus:bg-white'
          }`}
          style={{
            '--focus-ring': primaryColor
          } as React.CSSProperties}
          onFocus={(e) => {
            e.target.style.borderColor = primaryColor
          }}
          onBlur={(e) => {
            e.target.style.borderColor = ''
          }}
        />
        <Search className={`absolute left-7 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none ${
          isDark ? 'text-slate-600' : 'text-gray-400'
        }`} />
      </div>

      {/* Section Label */}
      <div className="px-4 pb-1.5 pt-1">
        <p className={`text-[11px] uppercase tracking-wider ${
          isDark ? 'text-slate-600' : 'text-gray-500'
        }`}>Recent</p>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto px-1.5 pb-2">
        {filteredConversations.length === 0 ? (
          <div className="px-3 py-8 text-center">
            <p className={`text-xs ${
              isDark ? 'text-slate-600' : 'text-gray-500'
            }`}>No conversations yet</p>
            <button
              onClick={onNewConversation}
              className="mt-3 px-3 py-1.5 text-xs font-medium transition-colors"
              style={{
                color: primaryColor
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
            >
              Start new conversation
            </button>
          </div>
        ) : (
          <div className="space-y-0.5">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => onSelectConversation(conv.id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all ${
                  activeConversationId === conv.id
                    ? isDark
                      ? 'border shadow-[0_0_0_1px]'
                      : 'border shadow-[0_0_0_1px]'
                    : isDark
                      ? 'hover:bg-slate-900/90 hover:-translate-y-px'
                      : 'hover:bg-gray-100 hover:-translate-y-px'
                }`}
                style={activeConversationId === conv.id ? {
                  background: isDark 
                    ? `linear-gradient(to right, ${primaryColor}30, ${isDark ? 'rgb(15 23 42)' : 'rgb(249 250 251)'})`
                    : `linear-gradient(to right, ${primaryColor}15, rgb(249 250 251))`,
                  borderColor: `${primaryColor}70`,
                  boxShadow: `0 0 0 1px ${primaryColor}70`
                } : {}}
              >
                <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
                  Q
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-baseline gap-1.5">
                    <p className={`text-xs font-medium truncate ${
                      isDark ? 'text-slate-200' : 'text-gray-900'
                    }`}>
                      {conv.title}
                    </p>
                    <span className={`text-[11px] flex-shrink-0 ${
                      isDark ? 'text-slate-600' : 'text-gray-500'
                    }`}>
                      {conv.timestamp}
                    </span>
                  </div>
                  <p className={`mt-0.5 text-xs truncate ${
                    isDark ? 'text-slate-500' : 'text-gray-600'
                  }`}>
                    {conv.preview}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* New Conversation Button */}
      <div className={`px-3 py-2.5 border-t ${
        isDark ? 'border-slate-800/70' : 'border-gray-200'
      }`}>
        <button
          onClick={onNewConversation}
          className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
            isDark
              ? 'border-slate-700/60 hover:border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800/60'
              : 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-100'
          }`}
          style={{ borderColor: `${primaryColor}50` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = primaryColor
            e.currentTarget.style.color = primaryColor
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `${primaryColor}50`
            e.currentTarget.style.color = ''
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Start new conversation
        </button>
      </div>

      {/* Footer */}
      <div className={`p-3.5 pt-2.5 border-t flex items-center justify-between gap-2 text-xs ${
        isDark 
          ? 'border-indigo-500/60 bg-gradient-to-r from-slate-900/96 to-slate-900/90 text-slate-500' 
          : 'border-gray-200 bg-gradient-to-r from-white to-gray-50 text-gray-600'
      }`} style={!isDark ? { borderTopColor: `${primaryColor}40` } : {}}>
        <span className="opacity-90">Powered by Qurius AI</span>
        <a
          href="https://qurius.app"
          target="_blank"
          rel="noreferrer"
          className="font-medium transition-colors"
          style={{
            color: primaryColor
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          Learn more →
        </a>
      </div>
    </aside>
    </>
  )
}
