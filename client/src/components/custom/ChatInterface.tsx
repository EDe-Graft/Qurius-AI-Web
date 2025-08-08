import React, { useState, useEffect, useRef } from "react"
import { MessageBubble } from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"
import { ChatInput } from "../ui/ChatInput"
import { useLanguage } from "@/context/LanguageContext"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
import { Minimize2, Loader2, ChevronDown, Sun, Moon } from "lucide-react"
import { MessageCircle } from "lucide-react"
import { AnalyticsService } from "@/services/analyticsService"
import { ThemeService } from "@/services/themeService"
import { TranslationService } from "@/services/translationService"
import type { ChatInterfaceProps, Message, CompanyTheme } from "types/interfaces"
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
  companyName,
  plan,
  isThemeChanging
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const { t, currentLanguage } = useLanguage()

  // Company Theme
  const [companyTheme, setCompanyTheme] = useState<CompanyTheme | null>(null)
  const isDark = defaultTheme === 'dark'

  // Loading state for theme and company data
  const [isLoading, setIsLoading] = useState(true)

  // Animation state for smooth transition
  const [isVisible, setIsVisible] = useState(false)

  // Compute the translated welcome message
  const getWelcomeMessage = () => interpolate(t('chat.welcomeWithCompany'), { company: companyName || 'AI' })

  // Initialize messages with computed welcome message
  const [messages, setMessages] = useState<Message[]>([])

  // Update welcome message when language or company name changes
  useEffect(() => {
    if (!messages[0]?.isUser) {
      setMessages([
        {
          content: getWelcomeMessage(),
          isUser: false,
          liked: null,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
    }
  }, [t, companyName])

  const [isTyping, setIsTyping] = useState(false)
  const [userScrolled, setUserScrolled] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(true)
  const [wasMinimized, setWasMinimized] = useState(false) // Add this state
 
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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


  //Auto scroll to bottom when chat is opened
  // useEffect(() => {
  //   if (!isMinimized) {
  //     // Don't scroll immediately - wait for chat to be visible
  //     // scrollToBottom() will be called after chat becomes visible
  //   }
  // }, [isMinimized])

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

  // Get company theme
  useEffect(() => {
    if (companyName) {
      setIsLoading(true)
      ThemeService.getCompanyTheme(companyName, isDark)
        .then((theme) => {
          setCompanyTheme(theme)
          // Add 1-second delay for spinning animation
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
        })
        .catch((error) => {
          console.error('Failed to load company theme:', error)
          // Still set loading to false after delay even if theme fails
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
        })
    } else {
      // If no company name, still show loading animation
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [companyName, isDark])

  // Track widget view when component mounts
  useEffect(() => {
    if (companyName) {
      AnalyticsService.trackWidgetView(companyName)
    }
  }, [companyName])

  // Track widget open/close
  useEffect(() => {
    if (companyName) {
      if (isMinimized) {
        AnalyticsService.trackWidgetClose(companyName)
      } else {
        AnalyticsService.trackWidgetOpen(companyName)
      }
    }
  }, [isMinimized, companyName])

  // Handle visibility animation when chat is opened
  useEffect(() => {
    if (!isMinimized) {
      // Start invisible
      setIsVisible(false)
      
      // After 500ms, make it visible with smooth transition and scroll to bottom
      const timer = setTimeout(() => {
        setIsVisible(true)
        // Scroll to bottom after chat is visible and ready
        setTimeout(() => {
          scrollToBottom()
        }, 100) // Small delay to ensure DOM is ready
      }, 500)
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
      }, 25) // Scroll every 25ms during streaming
      
      return () => clearInterval(interval)
    }
  }, [isStreaming, userScrolled])


  // function buildMessagesForAPI(messages: Array<Message>) {
  //   const systemPrompt = {
  //     role: 'system',
  //     content: `Format your response using these Markdown rules:\n1. **Bold** text with **double asterisks**\n2. *Italic* text with *single asterisks*\n3. Links with [visible text](url)\n4. Lists with - or * bullets\n5. Headers with # symbols\n6. Code blocks with \`\`\`\n7. Use markdown to format your response.\n8. Keep responses concise and mobile-friendly.\n9. Consider the user's theme and style when responding .`
  //   };
  //   // Skip the first message (initial AI greeting) and convert to API format
  //   const history = messages.slice(1).map(m => ({
  //     role: m.isUser ? 'user' : 'assistant',
  //     content: m.content
  //   }));
  //   return [systemPrompt, ...history];

  //   //call the function
  //   // setMessages((prev) => [...prev, userMessage]) //add new user message
  //   // // Build API messages with the current user message included
  //   // const updatedMessages = [...messages, userMessage]
  //   // const apiMessages = buildMessagesForAPI(updatedMessages) //build message history for api. exclude first message
  // }

  const handleSendMessage = async (content: string) => {
    console.log('🚀 Starting message processing:', content)
    
    const userMessage: Message = {
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setIsTyping(true)
    setMessages((prev) => [...prev, userMessage])

    // Track message sent
    if (companyName) {
      AnalyticsService.trackMessageSent(companyName, content)
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
      // Get AI response in English
      const result = await faqService.getFAQAnswer(companyName || '', translatedInput)
      // console.log('✅ FAQ result:', result)
      // console.log('🔍 Result type:', typeof result, 'Truthy:', !!result)
      
      if (result) {
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
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, aiMessage])
        setWasMinimized(false)
        
        // Track message received with correct source
        if (companyName) {
          AnalyticsService.trackMessageReceived(companyName, translatedResponse, result.source)
        }
      } else {
        console.log('⚠️ No response found from server')
        setMessages((prev) => [
          ...prev,
          {
            content: 'Sorry, I encountered an error. Please try again.',
            isUser: false,
            liked: null,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }
        ])
      }
    } catch (error) {
      console.error('❌ Error in handleSendMessage:', error)
      console.error('❌ Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : 'Unknown'
      })
      
      setMessages((prev) => [
        ...prev,
        {
          content: 'Sorry, something went wrong. Please try again.',
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
      ])
    } finally {
      console.log('🏁 Finishing message processing')
      setIsTyping(false)
    }
  }

  // Generate hover color from primary color
  const hoverColor = companyTheme?.primaryColor ? darkenColor(companyTheme.primaryColor, 20) : undefined;

  if (isMinimized) {
    return (
      <div
        className={isLoading ? "animate-spin" : "animate-bounce"}
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 50,
          maxWidth: '400px',
          maxHeight: '600px',
        }}
      >
        <button
          onClick={onToggleMinimize}
          className="text-white p-4 rounded-full shadow-lg transition-colors"
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
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
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
        zIndex: 50,
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
            {companyTheme?.logoUrl ? (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center`}>
                <img src={companyTheme?.logoUrl} alt="Company Logo" className="w-7 h-7" />
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
          {plan === 'pro' && (
            <LanguageSelector 
              variant="dropdown" 
              className="scale-65" 
              companyName={companyName}
            />
          )}
          {plan !== 'free' && (
          <button
            onClick={
              () => {
                toggleTheme()
                //track theme change after toggle
                if (companyName) {
                  AnalyticsService.trackThemeChange(companyName, defaultTheme)
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
              onToggleMinimize?.()
              setWasMinimized(true)
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
        <div className="py-4">
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
                skipStreaming={wasMinimized && !message.isUser} // Pass this prop to MessageBubble
                isLastAiMessage={isLastAiMessage} // Stream last AI messages
                companyTheme={companyTheme || undefined} // Pass this prop to MessageBubble
                companyName={companyName} // Pass company name for analytics
                onRatingChange={(rating) => handleRatingChange(index, rating)} // Pass the new handler with message index
                wasMinimized={wasMinimized} // Pass visibility state to MessageBubble
              />
            );
          })}
          {isTyping && <TypingIndicator companyTheme={companyTheme} />}
        </div>
        <div ref={messagesEndRef} />
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
      />
    </div>
  )
}
