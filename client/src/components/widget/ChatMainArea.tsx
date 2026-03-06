import { useState, useRef, useEffect } from 'react'
import { MessageList } from './MessageList'
import { ChatInput } from './ChatInput'
import { faqService } from '@/services/faqService'
import { AnalyticsService } from '@/services/analyticsService'
import { TranslationService } from '@/services/translationService'
import { useTheme } from '@/context/useThemeContext'
import { useLanguage, LANGUAGE_FLAGS } from '@/context/LanguageContext'
import { Sun, Moon } from 'lucide-react'

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
  isStreaming?: boolean
  streamingContent?: string
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
  primaryColor: string
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
  onNewConversation,
  primaryColor
}: ChatMainAreaProps) {
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const streamingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { isDark, toggleTheme } = useTheme()
  const { currentLanguage, setLanguage } = useLanguage()

  const handleToggleFullscreen = () => {
    if (typeof window === 'undefined') return
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          { source: 'qurius-widget', type: 'qurius-toggle-fullscreen' },
          '*'
        )
      }
    } catch (error) {
      console.error('Failed to toggle fullscreen from widget iframe:', error)
    }
  }

  const handleCloseWidget = () => {
    if (typeof window === 'undefined') return
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          { source: 'qurius-widget', type: 'qurius-close-widget' },
          '*'
        )
      }
    } catch (error) {
      console.error('Failed to close widget from iframe:', error)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Cleanup streaming timeout on unmount
  useEffect(() => {
    return () => {
      if (streamingTimeoutRef.current) {
        clearTimeout(streamingTimeoutRef.current)
      }
    }
  }, [])

  // Update conversation in sidebar when streaming completes
  useEffect(() => {
    if (!activeConversationId) return
    
    const completedMessages = messages.filter(m => !m.isUser && !m.isStreaming)
    if (completedMessages.length > 0) {
      const lastCompletedMessage = completedMessages[completedMessages.length - 1]
      const messageIndex = messages.findIndex(m => m.id === lastCompletedMessage.id)
      const correspondingUserMessage = messageIndex > 0 ? messages[messageIndex - 1] : null
      
      if (correspondingUserMessage && correspondingUserMessage.isUser) {
        setConversations(prev =>
          prev.map(conv => {
            if (conv.id === activeConversationId) {
              return {
                ...conv,
                title: correspondingUserMessage.content.substring(0, 30) + (correspondingUserMessage.content.length > 30 ? '...' : ''),
                preview: lastCompletedMessage.content.substring(0, 50) + (lastCompletedMessage.content.length > 50 ? '...' : ''),
                timestamp: 'Just now',
                messages: messages.filter(m => m.id !== 'welcome')
              }
            }
            return conv
          })
        )
      }
    }
  }, [messages, activeConversationId, setConversations])

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

  // Simulate streaming for AI messages
  const simulateStreaming = (messageId: string, fullContent: string) => {
    const words = fullContent.split(' ')
    let currentIndex = 0
    const wordsPerChunk = 2 // Stream 2 words at a time for smoother effect
    const delayPerChunk = 30 // 30ms delay between chunks

    const streamNext = () => {
      if (currentIndex >= words.length) {
        // Streaming complete
        setMessages(prev =>
          prev.map(msg =>
            msg.id === messageId
              ? { ...msg, content: fullContent, isStreaming: false, streamingContent: undefined }
              : msg
          )
        )
        return
      }

      const nextChunk = words.slice(0, currentIndex + wordsPerChunk).join(' ')
      currentIndex += wordsPerChunk

      setMessages(prev =>
        prev.map(msg =>
          msg.id === messageId
            ? { ...msg, streamingContent: nextChunk, isStreaming: true }
            : msg
        )
      )

      streamingTimeoutRef.current = setTimeout(streamNext, delayPerChunk)
    }

    // Start streaming
    streamNext()
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
          const limitMessageId = `msg-${Date.now() + 1}`
          const limitContent = response.answer || 'Message limit reached for this month. Please upgrade your plan or wait until next month.'
          const limitMessage: Message = {
            id: limitMessageId,
            content: limitContent,
            isUser: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isStreaming: true,
            streamingContent: ''
          }
          setMessages(prev => [...prev, limitMessage])
          simulateStreaming(limitMessageId, limitContent)
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

        const messageId = `msg-${Date.now() + 1}`
        const aiMessage: Message = {
          id: messageId,
          content: translatedAnswer, // Store full content
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isStreaming: true,
          streamingContent: '' // Start with empty content for streaming
        }

        // Add message with empty streaming content
        setMessages(prev => [...prev, aiMessage])
        
        // Start streaming animation
        simulateStreaming(messageId, translatedAnswer)

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

        // Update conversation in sidebar after streaming completes
        // We'll do this in a useEffect that watches for streaming completion
        // For now, we'll update it when the message is added
      } else {
        const errorMessageId = `msg-${Date.now() + 1}`
        const errorContent = "Sorry, I couldn't find a relevant answer. Please try rephrasing your question."
        const errorMessage: Message = {
          id: errorMessageId,
          content: errorContent,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isStreaming: true,
          streamingContent: ''
        }
        setMessages(prev => [...prev, errorMessage])
        simulateStreaming(errorMessageId, errorContent)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessageId = `msg-${Date.now() + 1}`
      const errorContent = "Sorry, I encountered an error. Please try again."
      const errorMessage: Message = {
        id: errorMessageId,
        content: errorContent,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true,
        streamingContent: ''
      }
      setMessages(prev => [...prev, errorMessage])
      simulateStreaming(errorMessageId, errorContent)
    } finally {
      setIsTyping(false)
    }
  }

  const handleRatingChange = async (messageId: string, rating: 'like' | 'dislike' | null) => {
    // Find the message before updating to get its content
    const message = messages.find(m => m.id === messageId)
    if (!message || message.isUser) return

    // Update message liked state
    setMessages(prev =>
      prev.map(msg =>
        msg.id === messageId ? { ...msg, liked: rating } : msg
      )
    )

    // Track rating in analytics
    if (companyData.name && rating !== null) {
      try {
        const ratingValue = rating === 'like' ? 1 : -1
        await AnalyticsService.trackRating(
          companyData.name,
          companyData.id || '',
          ratingValue,
          message.content,
          'ai', // Default to 'ai' for now, could be enhanced to track actual source
          undefined, // feedbackText
          undefined, // faqId
          undefined // confidenceScore
        )
      } catch (error) {
        console.error('Failed to track rating:', error)
      }
    }
  }

  return (
    <section className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Header */}
      <header className={`px-3 sm:px-4 py-2.5 sm:py-3 border-b flex items-center justify-between transition-colors ${
        isDark 
          ? 'border-indigo-500/75 bg-gradient-to-r from-slate-900/96 to-slate-900/92' 
          : 'border-gray-200 bg-gradient-to-r from-white to-gray-50'
      }`} style={{ borderBottomColor: isDark ? undefined : `${primaryColor}20` }}>
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
          {/* Sidebar Toggle Button - Only show when sidebar is closed */}
          {!isSidebarOpen && (
            <button
              onClick={onToggleSidebar}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
                isDark 
                  ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Open sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold text-white flex-shrink-0 overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-emerald-500 to-indigo-500 shadow-[0_0_0_3px_rgba(15,23,42,0.9)]'
                : 'shadow-[0_0_0_2px_rgba(148,163,184,0.45)]'
            }`}
            style={
              isDark
                ? undefined
                : {
                    backgroundColor: `${primaryColor}20`,
                    borderRadius: '9999px'
                  }
            }
          >
            {companyData.logo_url ? (
              <img
                src={companyData.logo_url}
                alt={companyData.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              'Q'
            )}
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className={`text-xs sm:text-sm font-semibold truncate ${
              isDark ? 'text-slate-200' : 'text-gray-900'
            }`}>
              {companyData.name || 'Qurius AI'} Assistant
            </div>
            <div className={`text-[10px] sm:text-[11px] hidden sm:block ${
              isDark ? 'text-slate-500' : 'text-gray-500'
            }`}>
              Answers based on your docs & website.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          <div className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border text-[10px] sm:text-[11px] hidden sm:block ${
            isDark 
              ? 'border-slate-700/50 bg-slate-900/80 text-slate-400' 
              : 'border-gray-200 bg-gray-100 text-gray-600'
          }`}>
            Private
          </div>
          {/* Change language (cycles through supported languages) */}
          <button
            onClick={() => {
              const codes = Object.keys(LANGUAGE_FLAGS) as (keyof typeof LANGUAGE_FLAGS)[]
              const index = codes.indexOf(currentLanguage)
              const next = codes[(index + 1) % codes.length]
              setLanguage(next)
            }}
            className={`hidden sm:flex items-center justify-center rounded-md px-2 h-8 sm:h-9 text-[10px] sm:text-[11px] border flex-shrink-0 transition-colors ${
              isDark
                ? 'border-slate-700/60 bg-slate-900/80 text-slate-300 hover:bg-slate-800/80'
                : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
            }`}
            aria-label="Change language"
            title="Change language"
            type="button"
          >
            <span className="mr-1.5 text-base leading-none">
              {LANGUAGE_FLAGS[currentLanguage]}
            </span>
            <span className="font-medium uppercase tracking-wide">
              {currentLanguage}
            </span>
          </button>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
              isDark 
                ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
          {/* New Chat Button */}
          <button
            onClick={onNewConversation}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
              isDark 
                ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="New chat"
            title="New chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {/* Fullscreen button (desktop & mobile, same visual weight as other icon buttons) */}
          <button
            onClick={handleToggleFullscreen}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
              isDark
                ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Toggle fullscreen"
            title="Toggle fullscreen"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
          {/* Close widget */}
          <button
            onClick={handleCloseWidget}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
              isDark
                ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Close chat"
            title="Close chat"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-3 sm:py-4">
        <MessageList 
          messages={messages} 
          isTyping={isTyping} 
          companyData={companyData}
          onRatingChange={handleRatingChange}
          primaryColor={primaryColor}
        />
        <div ref={messagesEndRef} />
      </div>

      {/* Input + plan-based attribution (inside ChatInput so it sits directly under the text area) */}
      <ChatInput
        onSendMessage={handleSendMessage}
        disabled={isTyping}
        primaryColor={primaryColor}
        showAttribution={companyData.plan === 'free' || companyData.plan === 'starter'}
      />
    </section>
  )
}
