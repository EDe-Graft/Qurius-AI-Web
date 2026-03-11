import { useState, useRef, useEffect } from 'react'
import { MessageList } from './MessageList'
import { ChatInput } from './ChatInput'
import { faqService } from '@/services/faqService'
import { leadService } from '@/services/leadService'
import { AnalyticsService } from '@/services/analyticsService'
import { TranslationService } from '@/services/translationService'
import { useTheme } from '@/context/useThemeContext'
import { useLanguage, LANGUAGE_FLAGS, LANGUAGE_NAMES } from '@/context/LanguageContext'
import type { Language } from '@/context/LanguageContext'
import { Sun, Moon, Globe, ChevronDown, X, UserRound } from 'lucide-react'

type CollectionMode = null | 'lead' | 'support_request'

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
  booking_url?: string
}

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: string
  liked?: 'like' | 'dislike' | null
  isStreaming?: boolean
  streamingContent?: string
  shouldOfferBooking?: boolean
  shouldOfferHuman?: boolean
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
  isFullscreen: boolean
  isMobileView?: boolean
  onClose?: () => void // Optional close handler for internal pages
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
  primaryColor,
  isFullscreen,
  isMobileView = false,
  onClose
}: ChatMainAreaProps) {
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const streamingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { isDark, toggleTheme } = useTheme()
  const { currentLanguage, setLanguage, isLanguageChanging } = useLanguage()
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [showLanguageChangeNotification, setShowLanguageChangeNotification] = useState(false)
  const previousLanguageRef = useRef<Language>(currentLanguage)
  const languageNotificationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  // Lead / support-request collection mode
  const [collectionMode, setCollectionMode] = useState<CollectionMode>(null)
  const [pendingCollectionMode, setPendingCollectionMode] = useState<CollectionMode>(null)

  // Detect language changes and show notification
  useEffect(() => {
    if (currentLanguage !== previousLanguageRef.current) {
      // Language has changed - show notification
      setShowLanguageChangeNotification(true)
      previousLanguageRef.current = currentLanguage

      // Auto-dismiss after 4 seconds
      if (languageNotificationTimeoutRef.current) {
        clearTimeout(languageNotificationTimeoutRef.current)
      }
      languageNotificationTimeoutRef.current = setTimeout(() => {
        setShowLanguageChangeNotification(false)
      }, 4000)
    }

    return () => {
      if (languageNotificationTimeoutRef.current) {
        clearTimeout(languageNotificationTimeoutRef.current)
      }
    }
  }, [currentLanguage])

  const handleLanguageChange = (language: Language) => {
    setLanguage(language)
    setIsLanguageMenuOpen(false)
    if (companyData.name) {
      AnalyticsService.trackLanguageChange(companyData.name, companyData.id || '', language)
    }
  }

  const handleDismissLanguageNotification = () => {
    setShowLanguageChangeNotification(false)
    if (languageNotificationTimeoutRef.current) {
      clearTimeout(languageNotificationTimeoutRef.current)
    }
  }

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
    // If onClose is provided (for internal pages), use it
    if (onClose) {
      onClose()
      return
    }
    
    // Otherwise, use postMessage for iframe embedding
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

  // Activate pending collection mode once all streaming has finished
  useEffect(() => {
    if (!pendingCollectionMode) return
    const isAnyStreaming = messages.some(m => m.isStreaming)
    if (!isAnyStreaming && messages.length > 0) {
      setCollectionMode(pendingCollectionMode)
      setPendingCollectionMode(null)
    }
  }, [messages, pendingCollectionMode])

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

  // Triggered when user clicks "Talk to a person?" — from footer link or AI message button
  const handleTalkToHuman = () => {
    if (collectionMode === 'support_request') return // already in mode
    const aiMessageId = `msg-${Date.now()}`
    const content = "I'll connect you with a team member! Please share your **email address or phone number** (or both) and someone will reach out to you as soon as possible. 🙋"
    const aiMessage: Message = {
      id: aiMessageId,
      content,
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true,
      streamingContent: ''
    }
    setMessages(prev => [...prev, aiMessage])
    simulateStreaming(aiMessageId, content)
    // Activate support_request mode once streaming ends
    setPendingCollectionMode('support_request')
  }

  // Handle user input when a collection mode is active
  const handleCollectionSubmit = async (content: string) => {
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    try {
      // Extract contact info from user's input
      const contactInfo = leadService.extractContactInfo(content)

      // Build conversation context from the last few messages
      const contextMessages = messages
        .filter(m => m.id !== 'welcome')
        .slice(-8)
        .map(m => `${m.isUser ? 'User' : 'AI'}: ${m.content}`)
        .join('\n')

      // Submit to backend
      await leadService.submitLead({
        companyId: companyData.id,
        companyName: companyData.name,
        name: contactInfo.name || undefined,
        email: contactInfo.email || undefined,
        phone: contactInfo.phone || undefined,
        conversationContext: contextMessages || undefined,
        sessionId: 'qurius-ai-session',
        userQuestion: content,
        type: collectionMode || 'lead'
      })

      // Generate appropriate confirmation message
      let confirmationContent: string
      if (collectionMode === 'support_request') {
        const contactDetail = contactInfo.email || contactInfo.phone
        confirmationContent = contactDetail
          ? `Thanks! A member of our team will reach out to you at **${contactDetail}** shortly. Is there anything else I can help you with in the meantime?`
          : `Thanks for reaching out! Our team will get back to you as soon as possible. Is there anything else I can help you with?`
      } else {
        confirmationContent = `Thanks for sharing your details! We'll follow up with you soon. Is there anything else I can help you with?`
      }

      const confirmationId = `msg-${Date.now() + 1}`
      const confirmationMessage: Message = {
        id: confirmationId,
        content: confirmationContent,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true,
        streamingContent: ''
      }
      setMessages(prev => [...prev, confirmationMessage])
      simulateStreaming(confirmationId, confirmationContent)
    } catch (error) {
      console.error('Error submitting contact info:', error)
      const errId = `msg-${Date.now() + 1}`
      const errContent = "Thanks! We've noted your message. A team member will be in touch soon."
      const errMessage: Message = {
        id: errId,
        content: errContent,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true,
        streamingContent: ''
      }
      setMessages(prev => [...prev, errMessage])
      simulateStreaming(errId, errContent)
    } finally {
      setIsTyping(false)
      setCollectionMode(null)
    }
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isTyping) return

    // Intercept when a collection mode is active
    if (collectionMode) {
      await handleCollectionSubmit(content)
      return
    }

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
          streamingContent: '', // Start with empty content for streaming
          shouldOfferBooking: response.shouldOfferBooking && !!companyData.booking_url,
          shouldOfferHuman: response.shouldOfferHuman && !!companyData.contact_email && collectionMode === null
        }

        // Add message with empty streaming content
        setMessages(prev => [...prev, aiMessage])
        
        // Start streaming animation
        simulateStreaming(messageId, translatedAnswer)

        // Queue lead collection mode to activate after streaming ends
        // Only available on growth/pro plans — backend also enforces this,
        // but we guard here too for belt-and-suspenders
        const isPaidPlan = companyData.plan === 'growth' || companyData.plan === 'pro'
        if (response.shouldRequestLead && collectionMode === null && isPaidPlan) {
          setPendingCollectionMode('lead')
        }

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
      <header className={`relative z-50 px-3 sm:px-4 py-2.5 sm:py-3 border-b flex items-center justify-between transition-colors ${
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
              {companyData.name || 'AI'} Assistant
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
          {/* Change language dropdown (matches main page LanguageSelector) */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              disabled={isLanguageChanging}
              className={`flex items-center px-1.5 sm:px-2 py-1 rounded-md h-8 sm:h-9 text-[10px] sm:text-[11px] border flex-shrink-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                isDark
                  ? 'border-slate-700/60 bg-slate-900/80 text-slate-300 hover:bg-slate-800/80'
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
              aria-label="Change language"
              title="Change language"
              type="button"
            >
              <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
              <span className="mr-1 text-base leading-none">
                {LANGUAGE_FLAGS[currentLanguage]}
              </span>
              <ChevronDown className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ml-0.5 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLanguageMenuOpen && (
              <>
                <div
                  className={`absolute right-0 top-full mt-1 w-48 rounded-lg border shadow-lg z-50 ${
                    isDark
                      ? 'bg-slate-900 border-slate-700'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="py-1">
                    {(Object.keys(LANGUAGE_NAMES) as Language[]).map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => handleLanguageChange(code)}
                        className={`w-full flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm text-left transition-colors ${
                          code === currentLanguage
                            ? isDark
                              ? 'bg-blue-900/20 text-blue-300'
                              : 'bg-blue-50 text-blue-700'
                            : isDark
                              ? 'text-slate-300 hover:bg-slate-800'
                              : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="mr-3 text-base">
                          {LANGUAGE_FLAGS[code]}
                        </span>
                        {LANGUAGE_NAMES[code]}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Backdrop to close dropdown */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsLanguageMenuOpen(false)}
                  onTouchStart={() => setIsLanguageMenuOpen(false)}
                />
              </>
            )}
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`relative z-50 w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 touch-manipulation ${
              isDark 
                ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            type="button"
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
          {/* New Chat Button - only visible when iframe is fullscreen */}
          {isFullscreen && (
            <button
              onClick={onNewConversation}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
                isDark 
                  ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              aria-label="New chat"
              title="New chat"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          )}
          {/* Fullscreen button (desktop only) */}
          <button
            onClick={handleToggleFullscreen}
            className={`${isMobileView ? 'hidden' : 'flex'} w-8 h-8 sm:w-9 sm:h-9 rounded-md items-center justify-center transition-colors flex-shrink-0 ${
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
            className={`relative z-50 w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors flex-shrink-0 touch-manipulation ${
              isDark
                ? 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Close chat"
            title="Close chat"
            type="button"
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
      <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-3 sm:py-4 relative">
        {/* Language Change Notification Toast */}
        {showLanguageChangeNotification && (
          <div
            className={`absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border shadow-lg transition-all duration-300 ease-out ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-200'
                : 'bg-white border-gray-200 text-gray-800'
            }`}
            style={{
              maxWidth: 'calc(100% - 2rem)',
              width: 'auto',
              minWidth: '200px'
            }}
          >
            <span className="text-base leading-none">
              {LANGUAGE_FLAGS[currentLanguage]}
            </span>
            <span className="text-xs sm:text-sm font-medium">
              Language changed to {LANGUAGE_NAMES[currentLanguage]}
            </span>
            <button
              onClick={handleDismissLanguageNotification}
              className={`ml-1 sm:ml-2 p-0.5 sm:p-1 rounded-md transition-colors flex-shrink-0 ${
                isDark
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
              }`}
              aria-label="Dismiss notification"
              type="button"
            >
              <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        )}
        <MessageList 
          messages={messages} 
          isTyping={isTyping} 
          companyData={companyData}
          onRatingChange={handleRatingChange}
          primaryColor={primaryColor}
          bookingUrl={companyData.booking_url}
          onTalkToHuman={companyData.contact_email ? handleTalkToHuman : undefined}
        />
        <div ref={messagesEndRef} />
      </div>

      {/* Collection mode banner — shown when actively collecting lead or support info */}
      {collectionMode && (
        <div className={`mx-3 sm:mx-5 mb-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center justify-between gap-2 ${
          isDark
            ? 'bg-indigo-900/30 border border-indigo-800/60 text-indigo-300'
            : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
        }`}>
          <div className="flex items-center gap-1.5">
            <UserRound className="w-3.5 h-3.5 flex-shrink-0" />
            <span>
              {collectionMode === 'support_request'
                ? 'Enter your email and our team will reach out to you.'
                : 'Please share your name, email, or phone number.'}
            </span>
          </div>
          <button
            onClick={() => setCollectionMode(null)}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Cancel"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* "Prefer to talk to a person?" footer link — always visible when not in collection mode */}
      {!collectionMode && companyData.contact_email && (
        <div className={`px-4 sm:px-6 pt-1.5 flex items-center justify-center text-[10px] sm:text-[11px] ${
          isDark ? 'text-slate-600' : 'text-gray-400'
        }`}>
          <span>Prefer to talk to a person?&nbsp;</span>
          <button
            onClick={handleTalkToHuman}
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: primaryColor }}
          >
            Connect with our team
          </button>
        </div>
      )}

      {/* Input + plan-based attribution (inside ChatInput so it sits directly under the text area) */}
      <ChatInput
        onSendMessage={handleSendMessage}
        disabled={isTyping}
        primaryColor={primaryColor}
        showAttribution={companyData.plan === 'free' || companyData.plan === 'starter'}
        placeholder={
          collectionMode === 'support_request'
            ? 'Email address or phone number...'
            : collectionMode === 'lead'
              ? 'Share your name, email, or phone...'
              : undefined
        }
      />
    </section>
  )
}
