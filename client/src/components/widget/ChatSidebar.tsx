import { useState } from 'react'
import { Search } from 'lucide-react'

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
}

export function ChatSidebar({
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewConversation,
  isOpen,
  onClose
}: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')

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
        className={`fixed md:relative inset-y-0 left-0 z-50 border-r border-slate-800 bg-gradient-to-b from-slate-950 to-slate-950 flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen 
            ? 'translate-x-0 w-[280px] min-w-[240px] max-w-[320px]' 
            : '-translate-x-full md:translate-x-0 w-0 md:w-0 min-w-0 max-w-0 md:border-r-0'
        }`}
      >
        {/* Header */}
        <div className="p-4 pb-3 border-b border-slate-800/70 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-400">
              Conversations
            </h2>
            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-md hover:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors flex-shrink-0"
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-slate-500">
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
          className="w-full bg-slate-900/80 rounded-full border border-slate-800/90 px-3 py-1.5 pl-7 text-xs text-slate-200 placeholder:text-slate-600 outline-none focus:border-slate-700 focus:bg-slate-900"
        />
        <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-600 pointer-events-none" />
      </div>

      {/* Section Label */}
      <div className="px-4 pb-1.5 pt-1">
        <p className="text-[11px] uppercase tracking-wider text-slate-600">Recent</p>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto px-1.5 pb-2">
        {filteredConversations.length === 0 ? (
          <div className="px-3 py-8 text-center">
            <p className="text-xs text-slate-600">No conversations yet</p>
            <button
              onClick={onNewConversation}
              className="mt-3 px-3 py-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
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
                    ? 'bg-gradient-to-r from-indigo-500/50 to-slate-900/95 border border-indigo-500/70 shadow-[0_0_0_1px_rgba(99,102,241,0.7)]'
                    : 'hover:bg-slate-900/90 hover:-translate-y-px'
                }`}
              >
                <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
                  Q
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-baseline gap-1.5">
                    <p className="text-xs font-medium text-slate-200 truncate">
                      {conv.title}
                    </p>
                    <span className="text-[11px] text-slate-600 flex-shrink-0">
                      {conv.timestamp}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 truncate">
                    {conv.preview}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3.5 pt-2.5 border-t border-indigo-500/60 bg-gradient-to-r from-slate-900/96 to-slate-900/90 flex items-center justify-between gap-2 text-xs text-slate-500">
        <span className="opacity-90">Powered by Qurius AI</span>
        <a
          href="https://qurius.app"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
        >
          Learn more →
        </a>
      </div>
    </aside>
    </>
  )
}
