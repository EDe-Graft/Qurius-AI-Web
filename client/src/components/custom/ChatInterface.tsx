import { useState, useRef, useEffect } from "react"
import { MessageBubble } from "./MessageBubble"
import { ChatInput } from "../ui/ChatInput"
import TypingIndicator from "./TypingIndicator"
import { ThemeToggle } from "./ThemeToggle"
import { MessageCircle, Minimize2, ChevronDown, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn, darkenColor } from "@/lib/utils"
import { FAQService } from "../../../services/faqService"
import { ThemeService } from "../../../services/themeService"
import type { ChatInterfaceProps, Message, CompanyTheme } from "types/interfaces"


// Chat Interface
export function ChatInterface({
  defaultTheme,
  toggleTheme,
  isMinimized = false,
  onToggleMinimize,
  companyName = "Assistant",
  isThemeChanging = false,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: `Hello! I'm your ${companyName} assistant. How can I help you today?`,
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [userScrolled, setUserScrolled] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(true)
  const [wasMinimized, setWasMinimized] = useState(false) // Add this state
 
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Company Theme
  const [companyTheme, setCompanyTheme] = useState<CompanyTheme | null>(null)
  const isDark = defaultTheme === 'dark'

  // Get company theme
  useEffect(() => {
    if (companyName) {
      ThemeService.getCompanyTheme(companyName, isDark)
        .then(setCompanyTheme);
    }
  }, [companyName, isDark])

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


  // Auto-scroll during streaming if user hasn't scrolled
  useEffect(() => {
    if (isStreaming && !userScrolled) {
      const interval = setInterval(() => {
        scrollToBottom()
      }, 100) // Scroll every 100ms during streaming
      
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

  // Track minimization changes
  useEffect(() => {
    if (isMinimized) {
      setWasMinimized(true)
    } else {
      scrollToBottom()
    }
  }, [isMinimized])

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setIsTyping(true)
    setMessages((prev) => [...prev, userMessage])

    try {
      const result = await FAQService.getAnswer(content, companyName)
      const aiMessage: Message = {
        content: result.answer,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiMessage])
      setWasMinimized(false) // Reset when new message is added
    } catch (error) {
      console.error('Error getting response:', error)
      setMessages((prev) => [
        ...prev,
        {
          content: 'Sorry, something went wrong. Please try again.',
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
      ])
    } finally {
      setIsTyping(false)
    }
  }

  // Generate hover color from primary color
  const hoverColor = companyTheme?.primaryColor ? darkenColor(companyTheme.primaryColor, 20) : undefined;

  if (isMinimized) {
    return (
      <div 
        className="absolute bottom-4 right-4 z-50"
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          zIndex: 50,
          maxWidth: '400px',
          maxHeight: '600px',
        }}
      >
        <Button
          onClick={onToggleMinimize}
          className="h-14 w-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ 
            backgroundColor: companyTheme?.primaryColor,
            '--hover-bg-color': hoverColor,
          } as React.CSSProperties & { '--hover-bg-color': string }}
          onMouseEnter={(e) => {
            if (hoverColor) {
              e.currentTarget.style.backgroundColor = hoverColor;
            }
          }}
          onMouseLeave={(e) => {
            if (companyTheme?.primaryColor) {
              e.currentTarget.style.backgroundColor = companyTheme.primaryColor;
            }
          }}
          onFocus={(e) => {
            if (hoverColor) {
              e.currentTarget.style.backgroundColor = hoverColor;
            }
          }}
          onBlur={(e) => {
            if (companyTheme?.primaryColor) {
              e.currentTarget.style.backgroundColor = companyTheme.primaryColor;
            }
          }}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "border border-gray-200 dark:border-gray-700",
        "rounded-lg shadow-2xl flex flex-col overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "relative", // Add relative positioning for spinner overlay
        "bg-white dark:bg-gray-900",
      )}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '400px',
        maxHeight: '600px',
        boxSizing: 'border-box',
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
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
        <div className="flex items-center gap-1">
          <ThemeToggle theme={defaultTheme} toggleTheme={toggleTheme} isThemeChanging={isThemeChanging} />
          {onToggleMinimize && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleMinimize}
              className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Minimize2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="sr-only">Minimize chat</span>
            </Button>
          )}
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
                key={index}
                message={message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
                onStreamingChange={!message.isUser ? handleStreamingChange : undefined}
                skipStreaming={wasMinimized && !message.isUser} // Pass this prop to MessageBubble
                isLastAiMessage={isLastAiMessage} // Only stream the last AI message
                companyTheme={companyTheme || undefined} // Pass this prop to MessageBubble
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
            onMouseEnter={(e) => {
              if (hoverColor) {
                e.currentTarget.style.backgroundColor = hoverColor;
              }
            }}
            onMouseLeave={(e) => {
              if (companyTheme?.primaryColor) {
                e.currentTarget.style.backgroundColor = companyTheme.primaryColor;
              }
            }}
            onFocus={(e) => {
              if (hoverColor) {
                e.currentTarget.style.backgroundColor = hoverColor;
              }
            }}
            onBlur={(e) => {
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
