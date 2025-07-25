import { User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import type { MessageBubbleProps } from "types/interfaces"


export function MessageBubble({ message, isUser, timestamp, onStreamingChange, skipStreaming, companyTheme }: MessageBubbleProps) {
  const [streamText, setStreamText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  
  const simulateStream = async (text: string) => {
    const words = text.split(" ")
    let currentText = ""
    setIsStreaming(true)
    onStreamingChange?.(true)
    setStreamText("")
    
    for (let i = 0; i < words.length; i++) {
        currentText += words[i] + " "
        setStreamText(currentText.trim())
        
        // If this is the last word, mark streaming as complete
        if (i === words.length - 1) {
          setIsStreaming(false)
          onStreamingChange?.(false)
        }

        await new Promise(resolve => setTimeout(resolve, 100))
    }
  }
  
  useEffect(() => {
    // Only simulate streaming for AI responses and when not skipping
    if (!isUser && !skipStreaming) {
      simulateStream(message)
    } else {
      setIsStreaming(false)
      onStreamingChange?.(false)
      setStreamText("")
    }
  }, [message, isUser, skipStreaming])


  return (
    <div className={cn("flex gap-3 max-w-[98%] mx-auto px-4 py-6", isUser ? "flex-row-reverse" : "flex-row")}>
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isUser ? "text-white" :  "text-gray-600 dark:text-gray-400",
        )}
        style={{ backgroundColor: isUser ? companyTheme?.primaryColor : companyTheme?.backgroundColor }}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>

      {/* Message Content */}
      <div className={cn("flex-1 space-y-2", isUser ? "text-right" : "text-left")}>
        <div
          className={cn(
            "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
            isUser
              ? "text-white rounded-br-md"
              : "text-gray-900 dark:text-gray-100 rounded-bl-md",
          )}
          style={{ backgroundColor: isUser ? companyTheme?.primaryColor : companyTheme?.backgroundColor }}
        >
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown
              components={{
                // Custom styling for markdown elements
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="text-sm">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                code: ({ children }) => (
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
                    {children}
                  </pre>
                ),
                h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                a: ({ children, href }) => (
                  <a href={href} className="text-blue-500 hover:text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {!isUser && isStreaming && !skipStreaming ? streamText : message}
            </ReactMarkdown>
          </div>
        </div>
        {timestamp && (
          <div 
            className={cn("text-xs text-gray-500 dark:text-gray-400 px-2", isUser ? "text-right" : "text-left")}
          >
            {timestamp}
          </div>
        )}
      </div>
    </div>
  )
}
