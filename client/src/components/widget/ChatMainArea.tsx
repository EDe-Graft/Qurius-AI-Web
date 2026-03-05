import { useState, useRef, useEffect } from 'react'
import { MessageList } from './MessageList'
import { ChatInput } from './ChatInput'
import { faqService } from '@/services/faqService'
import { AnalyticsService } from '@/services/analyticsService'
import { TranslationService } from '@/services/translationService'

// CompanyData interface
interface CompanyData {
  id: string
  name: string
  plan: string
  status: string
  theme?: any
  contact_email?: string
  admin_email?: string
  logo_url?: string
  domain?: string
  location?: string
  description?: string
  industry?: string
  website?: string
  enrollment_date?: string
  subscription_status?: string
  subscription_end_date?: string
}

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: string
  liked?: 'like' | 'dislike' | null
}

interface Conversation {
  id: string
  title: string
  preview: string
  timestamp: string
  messages: Message[]
}

interface ChatMainAreaProps {
  companyData: CompanyData
  messages: Message[]
  setMessages: (messages: Message[] | ((prev: Message[]) => Message[])) => void
  activeConversationId: string | null
  conversations: Conversation[]
  setConversations: (convs: Conversation[] | ((prev: Conversation[]) => Conversation[])) => void
  isSidebarOpen: boolean
  onToggleSidebar: () => void
  onNewConversation: () => void
}

export function ChatMainArea({
  companyData,
  messages,
  setMessages,
  activeConversationId,
//   conversations,
  setConversations,
  isSidebarOpen,
  onToggleSidebar,
  onNewConversation
}: ChatMainAreaProps) {
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const buildMessagesForAPI = (currentMessages: Message[], currentUserMessage: string) => {
    const history = currentMessages
      .filter(m => m.id !== 'welcome')
      .map(m => ({
        role: m.isUser ? 'user' as const : 'assistant' as const,
        content: m.content
      }))
    
    return [
      ...history,
      {
        role: 'user' as const,
        content: currentUserMessage
      }
    ]
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isTyping) return

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Track message sent
    if (companyData.name) {
      AnalyticsService.trackMessageSent(companyData.name, companyData.id || '', content)
    }

    try {
      // Translate to English if needed
      let translatedInput = content
      try {
        translatedInput = await TranslationService.translateToEnglish(content)
      } catch (error) {
        console.warn('Translation failed, using original:', error)
      }

      // Build conversation context
      const conversationHistory = buildMessagesForAPI(messages, translatedInput)

      // Get AI response
      const response = await faqService.getAnswer(translatedInput, conversationHistory, companyData)

      if (response) {
        // Check for limit reached
        if (response.source === 'limit_reached' || response.limitReached) {
          const limitMessage: Message = {
            id: `msg-${Date.now() + 1}`,
            content: response.answer || 'Message limit reached for this month. Please upgrade your plan or wait until next month.',
            isUser: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
          setMessages(prev => [...prev, limitMessage])
          return
        }

        // Translate response back to user language if needed
        let translatedAnswer = response.answer
        try {
          // You can add language detection here if needed
          // For now, we'll use the answer as-is
        } catch (error) {
          console.warn('Response translation failed:', error)
        }

        const aiMessage: Message = {
          id: `msg-${Date.now() + 1}`,
          content: translatedAnswer,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages(prev => [...prev, aiMessage])

        // Track message received
        if (companyData.name) {
          AnalyticsService.trackMessageReceived(
            companyData.name,
            companyData.id || '',
            translatedAnswer,
            response.source || 'ai',
            response.faqId,
            response.confidence
          )
        }

        // Update conversation in sidebar if active
        if (activeConversationId) {
          setConversations(prev =>
            prev.map(conv => {
              if (conv.id === activeConversationId) {
                const updatedMessages = [...messages, userMessage, aiMessage]
                return {
                  ...conv,
                  title: content.substring(0, 30) + (content.length > 30 ? '...' : ''),
                  preview: translatedAnswer.substring(0, 50) + (translatedAnswer.length > 50 ? '...' : ''),
                  timestamp: 'Just now',
                  messages: updatedMessages
                }
              }
              return conv
            })
          )
        }
      } else {
        const errorMessage: Message = {
          id: `msg-${Date.now() + 1}`,
          content: "Sorry, I couldn't find a relevant answer. Please try rephrasing your question.",
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        setMessages(prev => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        content: "Sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <section className="flex-1 flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black transition-all duration-300 ease-in-out">
      {/* Header */}
      <header className="px-3 sm:px-4 py-2.5 sm:py-3 border-b border-indigo-500/75 flex items-center justify-between bg-gradient-to-r from-slate-900/96 to-slate-900/92">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
          {/* Sidebar Toggle Button - Only show when sidebar is closed */}
          {!isSidebarOpen && (
            <button
              onClick={onToggleSidebar}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md hover:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors flex-shrink-0"
              aria-label="Open sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-indigo-500 flex items-center justify-center text-xs sm:text-sm font-semibold text-white shadow-[0_0_0_3px_rgba(15,23,42,0.9)] flex-shrink-0">
            Q
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
              {companyData.name || 'Qurius AI'} Assistant
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 hidden sm:block">
              Answers based on your docs & website.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-indigo-500/70 bg-indigo-500/14 text-[10px] sm:text-[11px] text-indigo-200 flex items-center gap-0.5 sm:gap-1">
            <span>⚡</span>
            <span className="hidden sm:inline">AI‑powered</span>
          </div>
          <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-slate-700/50 bg-slate-900/80 text-[10px] sm:text-[11px] text-slate-400 hidden sm:block">
            Private
          </div>
          {/* New Chat Button */}
          <button
            onClick={onNewConversation}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-md hover:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors flex-shrink-0"
            aria-label="New chat"
            title="New chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-3 sm:py-4">
        <MessageList messages={messages} isTyping={isTyping} />
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </section>
  )
}
