import { User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import type { MessageBubbleProps } from "types/interfaces"
import { MarkdownRenderer } from "./MarkdownRenderer"


export function MessageBubble({ message, isUser, timestamp, onStreamingChange, skipStreaming, companyTheme, isLastAiMessage }: MessageBubbleProps) {
  const [streamText, setStreamText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
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
    // Mark as initialized after a brief moment to allow styling to settle
    const initTimer = setTimeout(() => {
      setIsInitialized(true)
    }, 500)

    return () => clearTimeout(initTimer)
  }, [])

  useEffect(() => {
    // Only simulate streaming for the last AI response, when not skipping, and after initialization
    if (!isUser && !skipStreaming && isInitialized && isLastAiMessage) {
      // Give time for components to initialize before streaming starts
      setTimeout(() => {
        simulateStream(message)
      }, 1000)
    } else if (!isUser && !skipStreaming && !isInitialized && isLastAiMessage) {
      // Set streaming state but don't start yet
      setIsStreaming(true)
      onStreamingChange?.(true)
      setStreamText("")
    } else {
      setIsStreaming(false)
      onStreamingChange?.(false)
      setStreamText("")
    }
  }, [message, isUser, skipStreaming, isInitialized, isLastAiMessage])


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
          <MarkdownRenderer 
            content={!isUser && isStreaming && !skipStreaming && isLastAiMessage ? streamText : message}
          />
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
