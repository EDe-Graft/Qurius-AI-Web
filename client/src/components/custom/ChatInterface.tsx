import React, { useState, useEffect, useRef } from "react"
import { MessageBubble } from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"
import { ChatInput } from "./ChatInput"
import { useLanguage } from "@/context/LanguageContext"
import { LanguageSelector } from "@/components/custom/LanguageSelector"
import { Minimize2, Loader2, ChevronDown, Sun, Moon } from "lucide-react"
import { MessageCircle } from "lucide-react"
import { AnalyticsService } from "@/services/analyticsService"
import { ThemeService } from "@/services/themeService"
import { TranslationService } from "@/services/translationService"
import type { ChatInterfaceProps, Message, CompanyTheme } from "../../../types/interfaces"
import { faqService } from "@/services/faqService"
import { cn, darkenColor } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { interpolate } from '@/lib/translations'


// Chat Interface
export function ChatInterface({
  defaultTheme,
  toggleTheme,
  isMinimized,
  onToggleMinimize,
  isThemeChanging,
  companyData,
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const { t, currentLanguage } = useLanguage()

  // Company Theme - use company data if available, otherwise fetch
  const [companyTheme, setCompanyTheme] = useState<CompanyTheme | null>(null)
  const isDark = defaultTheme === 'dark'

  // Loading state for theme and company data (initial load only)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [hasBeenInitialized, setHasBeenInitialized] = useState(false)

  // Animation state for smooth transition
  const [isVisible, setIsVisible] = useState(false)

  // destructure company data
  const { name: companyName, plan: verifiedPlan, logo_url: logoUrl, id: companyId } = companyData || {}

  // Compute the translated welcome message
  const getWelcomeMessage = () => {
    return interpolate(t('chat.welcomeWithCompany'), { companyName: companyName || 'AI' })
  }

  // Initialize messages with computed welcome message
  const [messages, setMessages] = useState<Message[]>([])

  const [isTyping, setIsTyping] = useState(false)
  const [userScrolled, setUserScrolled] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(true)
  const [savedScrollPosition, setSavedScrollPosition] = useState<number>(0)


  // Add this function inside your ChatInterface component
  const restoreScrollPosition = () => {
    if (messagesContainerRef.current && savedScrollPosition > 0) {
      // Restore scroll position without animation
      messagesContainerRef.current.scrollTop = savedScrollPosition
    }
  }

  // Modify the existing scrollToBottom function to remove animation
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      // Use direct scrollTop manipulation for instant scrolling (no animation)
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }


  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const isAtBottomNow = scrollHeight - scrollTop - clientHeight < 10 // 10px threshold
      
      setIsAtBottom(isAtBottomNow)
      
      // If user scrolls up while streaming, disable auto-scroll
      if (isStreaming && !isAtBottomNow) {
        setUserScrolled(true)
      }
      
      // If user scrolls back to bottom, re-enable auto-scroll
      if (isAtBottomNow) {
        setUserScrolled(false)
      }
    }
  }

  const handleStreamingChange = (streaming: boolean) => {
    setIsStreaming(streaming)
    // Reset user scroll state when streaming starts
    if (streaming) {
      setUserScrolled(false)
    }
  }

  const handleRatingChange = (messageIndex: number, rating: 'like' | 'dislike' | null) => {
    setMessages(prev => prev.map((message, index) => 
      index === messageIndex 
        ? { ...message, liked: rating }
        : message
    ))
  }

  // const handleClearChat = () => {
  //   // Keep only the welcome message
  //   setMessages([
  //     {
  //       content: getWelcomeMessage(),
  //       isUser: false,
  //       liked: null,
  //       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  //     },
  //   ])
  // }


  // Test translation service on mount (DISABLED to avoid API errors)
  // useEffect(() => {
  //   const testServices = async () => {
  //     try {
  //       console.log('🧪 Testing translation service...')
  //       const testResult = await TranslationService.translateToEnglish('Hello world')
  //       console.log('✅ Translation service test result:', testResult)
  //     } catch (error) {
  //       console.error('❌ Service test failed:', error)
  //     }
  //   }
  //   
  //   testServices()
  // }, [])


  // Reset conversation when language changes (fresh start in new language)
  useEffect(() => {      
      const welcomeMessage = {
        content: getWelcomeMessage(),
        isUser: false,
        liked: null,
        isMessageStreamed: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      
      // Reset to only the welcome message in the new language
      setMessages([welcomeMessage])
      
      // Track language change event
      if (companyName) {
        AnalyticsService.trackLanguageChange(companyName, companyId || '', currentLanguage)
      }
  }, [currentLanguage]) // Reset when language changes

  // Get company theme
  useEffect(() => {
    if (companyName) {
      setIsInitialLoading(true)
      //get company theme from service
      console.log('🔄 Fetching company theme via service...')
      ThemeService.getCompanyTheme(companyName, companyId || '', isDark)
        .then((theme) => {
          setCompanyTheme(theme)
          setTimeout(() => {
            setIsInitialLoading(false)
            setHasBeenInitialized(true)
          }, 100)
        })
        .catch((error) => {
          console.error('Failed to load company theme:', error)
          setTimeout(() => {
            setIsInitialLoading(false)
            setHasBeenInitialized(true)
          }, 100)
        })
      
    } else {
      // If no company name, still show loading animation
      setTimeout(() => {
        setIsInitialLoading(false)
        setHasBeenInitialized(true)
      }, 100)
    }
  }, [companyName, isDark, companyData])

  // Track widget view when component mounts
  useEffect(() => {
    if (companyName) {
    AnalyticsService.trackWidgetView(companyName, companyId || '')
    }
  }, [companyName])

  // Track widget open/close
  useEffect(() => {
    if (companyName) {
      if (isMinimized) {
          AnalyticsService.trackWidgetClose(companyName, companyId || '')
      } else {
        AnalyticsService.trackWidgetOpen(companyName, companyId || '')
      }
    }
  }, [isMinimized, companyName])

  // Handle visibility animation when chat is opened
  useEffect(() => {
    if (!isMinimized) {
      // Start invisible
      setIsVisible(false)
      
      // After 300ms, make it visible with smooth transition and scroll to saved position
      const timer = setTimeout(() => {
        setIsVisible(true)
        // Scroll to bottom after chat is visible and ready
        setTimeout(() => {
          restoreScrollPosition() // restore scroll position
        }, 100) // delay to ensure DOM is ready
      }, 300)
      return () => clearTimeout(timer)
    } else {
      // When minimized, hide immediately
      setIsVisible(false)
    }
  }, [isMinimized])


  // Auto-scroll during streaming if user hasn't scrolled
  useEffect(() => {
    if (isStreaming && !userScrolled) {
      const interval = setInterval(() => {
        scrollToBottom()
      }, 50) // Scroll every 50ms during streaming - more efficient
      
      return () => clearInterval(interval)
    }
  }, [isStreaming, userScrolled])


    // Build messages array for API with current user message included
  const buildMessagesForAPI = (currentMessages: Message[], currentUserMessage: string) => {
    // Skip the first message (initial AI greeting) and convert to API format
    const history = currentMessages.slice(1).map(m => ({
      role: m.isUser ? 'user' : 'assistant',
      content: m.content
    }));
    
    // Add the current user message to the conversation
    const conversationHistory = [
      ...history,
      {
        role: 'user' as const,
        content: currentUserMessage
      }
    ];
    
    console.log('🔧 Built conversation with current message:', {
      historyLength: history.length,
      currentMessage: currentUserMessage.substring(0, 50) + '...',
      totalMessages: conversationHistory.length
    });
    
    return conversationHistory;
  };

  // Handle send message
  const handleSendMessage = async (content: string) => {
    console.log('🚀 Starting message processing:', content)

    const userMessage: Message = {
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMessageStreamed: true,
    }
    setIsTyping(true)
    setMessages((prev) => [...prev, userMessage])
    
    // Scroll to bottom after user message is added to state
    setTimeout(() => {
      scrollToBottom()
    }, 0)

    // Track message sent
    if (companyName) {
      AnalyticsService.trackMessageSent(companyName, companyId || '', content)
    }

    try {
      console.log('🔄 Translating user input to English...')
      // Translate user input to English for AI processing
      let translatedInput = content
      try {
        translatedInput = await TranslationService.translateToEnglish(content)
        // console.log('✅ Translated input:', translatedInput)
      } catch (translationError) {
        console.warn('⚠️ Translation failed, using original input:', translationError)
        translatedInput = content // Use original input if translation fails
      }
      
      console.log('🤖 Getting FAQ answer...')
      
      // Build messages array for API with current user message included
      const conversationMessages = buildMessagesForAPI(messages, translatedInput)
      
      console.log('📝 Conversation context:', conversationMessages.length, 'messages')
      
      // Get AI response in English with conversation context
      const result = await faqService.getAnswer(translatedInput, conversationMessages, companyData)
      // console.log('✅ FAQ result:', result)
      
      if (result) {
        // Check if this is a limit reached response
        if (result.source === 'limit_reached' || result.limitReached) {
          console.log('⚠️ Message limit reached, showing limit message')
          
          // Create a more informative limit message
          let limitMessageContent = result.answer || `Message limit for ${companyName} reached for this month. Please contact customer support with any questions.`;
          
          // Add upgrade information if available
          // if (verifiedPlan && verifiedPlan !== 'pro') {
          //   limitMessageContent += `\n\n💡 **Upgrade your plan** to get more messages per month.`;
          // }
          
          const limitMessage: Message = {
            content: limitMessageContent,
            isUser: false,
            liked: null,
            isMessageStreamed: false,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }
          setMessages((prev) => [...prev, limitMessage])
          // Don't reset wasMinimized here as it affects message display
          
          // Track limit reached event
          if (companyName) {
            AnalyticsService.trackMessageReceived(companyName, companyId || '', limitMessage.content, 'limit_reached')
          }
          return
        }
        
        console.log('🔄 Translating response to user language...')
        // Translate response to user's language
        let translatedResponse = result.answer
        try {
          translatedResponse = await TranslationService.translateToUserLanguage(result.answer, currentLanguage)
          // console.log('✅ Translated response:', translatedResponse)
        } catch (translationError) {
          console.warn('⚠️ Response translation failed, using original:', translationError)
          translatedResponse = result.answer // Use original response if translation fails
        }
        
        const aiMessage: Message = {
          content: translatedResponse,
          isUser: false,
          liked: null,
          isMessageStreamed: false,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, aiMessage])
        // Don't reset wasMinimized here as it affects message display
        
        // Track message received with correct source
        if (companyName) {
          AnalyticsService.trackMessageReceived(companyName, companyId || '', translatedResponse, result.source)
        }
        
        // Log remaining messages if available
        if (result.messagesLeft !== undefined) {
          console.log(`📊 Messages remaining: ${result.messagesLeft}`);
          // setRemainingMessages(result.messagesLeft); // Removed as per edit hint
        } else {
          // setRemainingMessages(null); // Removed as per edit hint
        }
      } else {
        console.log('⚠️ No response found from server')
        setMessages((prev) => [
          ...prev,
          {
            content: 'Sorry, I encountered an error. Please try again.',
            isUser: false,
            liked: null,
            isMessageStreamed: false,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }
        ])
      }
    } catch (error: any) {
      console.error('❌ Error in handleSendMessage:', error)
      console.error('❌ Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : 'Unknown',
        response: error.response?.data,
        status: error.response?.status
      })
      
      // Provide more specific error messages based on the error type
      let errorMessage = 'Sorry, something went wrong. Please try again.';
      
      if (error.response?.status === 401) {
        errorMessage = 'Authentication error. Please refresh the page and try again.';
      } else if (error.response?.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
      } else if (error.response?.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      } else if (error.code === 'NETWORK_ERROR' || error.code === 'ECONNABORTED') {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message?.includes('timeout')) {
        errorMessage = 'Request timed out. Please try again.';
      }
      
      setMessages((prev) => [
        ...prev,
        {
          content: errorMessage,
          isUser: false,
          isMessageStreamed: false,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
      ])
    } finally {
      console.log('🏁 Finishing message processing')
      setIsTyping(false)
    }
  }

  const handleStreamingComplete = (messageIndex: number) => {
    //after streaming is complete, reset user scroll state
    setUserScrolled(true)

    setMessages(prev => prev.map((message, index) => 
      index === messageIndex 
        ? { ...message, isMessageStreamed: true }
        : message
    ))
  }

  // Generate hover color from primary color
  const hoverColor = companyTheme?.primaryColor ? darkenColor(companyTheme.primaryColor, 20) : undefined;

  if (isMinimized) {
    return (
      <div
        className={isInitialLoading && !hasBeenInitialized ? "animate-spin" : "animate-bounce"}
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 9999,
          maxWidth: '400px',
          maxHeight: '600px',
        }}
      >
        <div className="relative group">
          <button
            onClick={onToggleMinimize}
            className={`text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl`}
            style={{
              backgroundColor: companyTheme?.primaryColor || '#007bff',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (hoverColor) {
                e.currentTarget.style.backgroundColor = hoverColor;
              }
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = companyTheme?.primaryColor || '#007bff';
            }}
          >
            
            {isInitialLoading && !hasBeenInitialized ? (
              <div className="w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <MessageCircle className="h-7 w-7" />
            )}
          </button>
          
          {/* Powered by tooltip for free plans */}
          {verifiedPlan === 'free' && (
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                Powered by{' '}
                <a 
                  href="https://qurius.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 underline pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  Qurius AI
                </a>
              </div>
              {/* Arrow pointing down */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Don't render the chat interface if it's not visible yet
  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        "border border-gray-200 dark:border-gray-700",
        "rounded-lg shadow-2xl flex flex-col overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "relative", // Add relative positioning for spinner overlay
        "bg-white dark:bg-gray-900",
        // Add opacity transition for smooth appearance
        "transition-opacity duration-500 ease-in-out",
        "opacity-100"
      )}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '400px',
        maxHeight: '600px',
        boxSizing: 'border-box',
        position: 'fixed',
        bottom: `${window.innerWidth > 768 ? '1rem' : '0'}`,
        right: `${window.innerWidth > 768 ? '1rem' : '50%'}`,
        transform: `${window.innerWidth > 768 ? 'none' : 'translateX(50%)'}`,
        zIndex: 9999,
        borderColor: companyTheme?.borderColor || '#E5E7EB',
        backgroundColor: companyTheme?.backgroundColor || '#FFFFFF',
      }}
    >
      {/* Theme Change Spinner Overlay */}
      {isThemeChanging && (
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg"
          style={{ backgroundColor: companyTheme?.backgroundColor + 'CC' }} // Add transparency
        >
          <div className="flex flex-col items-center gap-3">
            <Loader2 
              className="w-12 h-12 animate-spin"
              style={{ color: companyTheme?.primaryColor }}
            />
            <p 
              className="text-sm font-medium"
              style={{ color: companyTheme?.textColor }}
            >
              Updating theme...
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center gap-3">
            {logoUrl ? (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center`}>
                <img src={logoUrl} alt="Company Logo" className="w-7 h-7" />
              </div>
            ) : (
              // Default logo
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: companyTheme?.primaryColor }}>
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
            )}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{companyName} Assistant</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Online now</p>
          </div>
        </div>
        <div className="flex justify-end gap-1">
          {/* Clear Chat Button - Only show when there are more than 1 message */}
          {/* {messages.length > 1 && (
            <button
              onClick={handleClearChat}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
              title="Clear chat"
            >
              <Trash2 className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition-colors" />
            </button>
          )} */}
          {verifiedPlan === 'pro' && (
            <LanguageSelector 
              variant="dropdown" 
              className="scale-65" 
              companyName={companyName}
              companyId={companyId || ''}
            />
          )}
          {verifiedPlan !== 'free' && (
          <button
            onClick={
              () => {
                toggleTheme()
                //track theme change after toggle
                if (companyName) {
                  AnalyticsService.trackThemeChange(companyName, companyId || '', defaultTheme)
                }
              }
            }
            disabled={isThemeChanging}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            {defaultTheme === "dark" ? <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" /> : <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />}
          </button>
          )}
          <button
            onClick={() => {
              //save scroll position when minimizing
              if (messagesContainerRef.current) {
                setSavedScrollPosition(messagesContainerRef.current.scrollTop)
              }
              onToggleMinimize?.()
            }}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Minimize2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto bg-white dark:bg-gray-900"
        onScroll={handleScroll}
      >
        <div className="py-4 pb-8">
          {messages.map((message, index) => {
            // Check if this is the last AI message (for streaming)
            const isLastAiMessage = !message.isUser && index === messages.length - 1;
            
            return (
              <MessageBubble
                key={`${index}-${message.content.substring(0, 20)}`}
                message={message.content}
                messageIndex={index}
                liked={message.liked}
                isUser={message.isUser}
                timestamp={message.timestamp}
                onStreamingChange={!message.isUser ? handleStreamingChange : undefined}
                skipStreaming={message.isMessageStreamed === true} // Pass this prop to MessageBubble
                isLastAiMessage={isLastAiMessage} // Stream last AI messages
                companyName={companyName} // Pass company name for analytics
                companyId={companyId || ''} // Pass company ID for analytics
                companyTheme={companyTheme || undefined} // Pass this prop to MessageBubble
                onRatingChange={(rating) => handleRatingChange(index, rating)} // Pass the new handler with message index
                onStreamingComplete={handleStreamingComplete} // Pass the new handler
              />
            );
          })}
          {isTyping && <TypingIndicator companyTheme={companyTheme} />}
        </div>
        <div ref={messagesEndRef} className="h-2" />
      </div>

      {/* Floating Scroll to Bottom Button */}
      {!isAtBottom && !isStreaming && (
        <div className="absolute bottom-27 right-4 z-10">
          <Button
            onClick={scrollToBottom}
            size="sm"
            className="h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              backgroundColor: companyTheme?.primaryColor,
              '--hover-bg-color': hoverColor,
            } as React.CSSProperties & { '--hover-bg-color': string }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (hoverColor) {
                e.currentTarget.style.backgroundColor = hoverColor;
              }
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (companyTheme?.primaryColor) {
                e.currentTarget.style.backgroundColor = companyTheme.primaryColor;
              }
            }}
            onFocus={(e: React.FocusEvent<HTMLButtonElement>) => {
              if (hoverColor) {
                e.currentTarget.style.backgroundColor = hoverColor;
              }
            }}
            onBlur={(e: React.FocusEvent<HTMLButtonElement>) => {
              if (companyTheme?.primaryColor) {
                e.currentTarget.style.backgroundColor = companyTheme.primaryColor;
              }
            }}
          >
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Scroll to bottom</span>
          </Button>
        </div>
      )}

      {/* Input */}
      <ChatInput
        onSendMessage={handleSendMessage}
        isLoading={isTyping}
        placeholder={`Ask ${companyName} anything...`}
        defaultTheme={defaultTheme}
        companyTheme={companyTheme || undefined}
        verifiedPlan={verifiedPlan}
      />
    </div>
  )
}
