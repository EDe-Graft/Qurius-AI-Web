import { User, Bot, ThumbsUp, ThumbsDown, Copy, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import type { MessageBubbleProps } from "types/interfaces"
import { MarkdownRenderer } from "./MarkdownRenderer"
import { AnalyticsService } from "@/services/analyticsService"

// User Message Bubble Component
function UserMessageBubble({ message, timestamp, companyTheme }: {
  message: string
  timestamp?: string
  companyTheme?: any
}) {
  return (
    <div className="flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row-reverse">
      {/* Avatar */}
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: companyTheme?.primaryColor }}
      >
        <User className="w-4 h-4" />
      </div>

      {/* Message Content */}
      <div className="flex-1 space-y-2 text-right">
        <div
          className="inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-white rounded-br-md"
          style={{ backgroundColor: companyTheme?.primaryColor }}
        >
          <MarkdownRenderer content={message} />
        </div>
        
        {/* Timestamp */}
        {timestamp && (
          <div className="text-xs text-gray-500 dark:text-gray-400 px-2 text-right">
            {timestamp}
          </div>
        )}
      </div>
    </div>
  )
}

// AI Message Bubble Component
function AIMessageBubble({ 
  message, 
  messageIndex, 
  liked, 
  timestamp, 
  onStreamingChange, 
  skipStreaming, 
  companyTheme, 
  isLastAiMessage, 
  companyName, 
  companyId,
  onRatingChange, 
  onStreamingComplete
}: {
  message: string
  messageIndex: number
  liked: 'like' | 'dislike' | null | undefined
  timestamp?: string
  onStreamingChange?: (streaming: boolean) => void
  skipStreaming?: boolean
  companyTheme?: any
  isLastAiMessage?: boolean
  companyName?: string
  companyId?: string
  onRatingChange?: (rating: 'like' | 'dislike' | null) => void
  onStreamingComplete?: (messageIndex: number) => void
}) {
  const [streamText, setStreamText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [feedbackText, setFeedbackText] = useState("")
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  
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
          onStreamingComplete?.(messageIndex) // Notify parent that streaming is complete
        }

        await new Promise(resolve => setTimeout(resolve, 100))
    }
  }
  
  // Set initialized to true on mount
  useEffect(() => {
      setIsInitialized(true)
  }, [])

  useEffect(() => {
    // Only simulate streaming for the last AI response, when not skipping, and after initialization
    if (isInitialized && isLastAiMessage && !skipStreaming) {
      // Give time for components to initialize before streaming starts
      setTimeout(() => {
        simulateStream(message)
      }, 100)
    } else if (!skipStreaming && !isInitialized && isLastAiMessage) {
      // Set streaming state but don't start yet
      setIsStreaming(true)
      onStreamingChange?.(true)
      setStreamText("")
    } else {
      setIsStreaming(false)
      onStreamingChange?.(false)
      setStreamText("")
    }
  }, [message, skipStreaming, isInitialized, isLastAiMessage])

  const handleRating = async (rating: number) => {
    if (!companyName) return
    
    try {
      if (rating === -1) {
        // Show feedback modal for negative rating
        setShowFeedbackModal(true)
      } else {
        // Submit positive rating immediately
        await AnalyticsService.trackRating(
          companyName,
          companyId || 'unknown',
          rating,
          message,
          'ai', // Assuming AI response for now
          undefined,
          undefined,
          0.8 // Default confidence
        )
      }
    } catch (error) {
      console.error('Failed to submit rating:', error)
    }
  }

  const handleSubmitFeedback = async () => {
    if (!companyName) return
    
    setIsSubmittingFeedback(true)
    try {
      await AnalyticsService.trackRating(
        companyName,
        companyId || 'unknown',
        -1, // Negative rating
        message,
        'ai', // Assuming AI response for now
        feedbackText,
        undefined,
        0.8 // Default confidence
      )
      setShowFeedbackModal(false)
      setFeedbackText("")
    } catch (error) {
      console.error('Failed to submit feedback:', error)
    } finally {
      setIsSubmittingFeedback(false)
    }
  }

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (error) {
      console.error('Failed to copy message:', error)
    }
  }

  return (
    <>
      <div className="flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row">
        {/* Avatar */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400"
          style={{ backgroundColor: companyTheme?.backgroundColor }}
        >
          <Bot className="w-4 h-4" />
        </div>

        {/* Message Content */}
        {(isInitialized) && (
          <div className="flex-1 space-y-2 text-left">
            <div
              className="inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md"
              style={{ backgroundColor: companyTheme?.backgroundColor }}
            >
              <MarkdownRenderer 
                content={isStreaming && !skipStreaming && isLastAiMessage ? streamText : message}
              />
            </div>
            
            {/* Feedback buttons for AI messages */}
            {!isStreaming && (
              <div className="flex items-center gap-2 mt-1">
                {messageIndex !== 0 && (
                  <>
                <button
                  onClick={
                    () => {
                      console.log('Current liked status:', liked)
                      const newRating = liked !== "like" ? "like" : null
                      console.log('New rating:', newRating)
                      onRatingChange?.(newRating)
                      handleRating(newRating === "like" ? 1 : 0)
                    }
                  }
                  className="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  title="Like this response"
                >
                  <ThumbsUp className={cn('w-3 h-3 text-gray-500 hover:text-green-500', liked === "like" ? "text-green-500" : "text-gray-500")} />
                </button>
                
                <button
                  onClick={
                    () => {
                      console.log('Current liked status:', liked)
                      const newRating = liked !== "dislike" ? "dislike" : null
                      console.log('New rating:', newRating)
                      onRatingChange?.(newRating)
                      handleRating(newRating === "dislike" ? -1 : 0)
                    }
                  }
                  className="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  title="Dislike this response"
                >
                  <ThumbsDown className={cn('w-3 h-3 text-gray-500 hover:text-red-500', liked === "dislike" ? "text-red-500" : "text-gray-500")} />
                </button>
                
                <button
                  onClick={handleCopyMessage}
                  className="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  title="Copy message"
                >
                  <Copy className="w-3 h-3 text-gray-500 hover:text-blue-500" />
                </button>
                </>
                )}
                
                {copySuccess && (
                  <span className="text-xs text-green-500 ml-1">Copied!</span>
                )}

                {/* timestamp */}
                {timestamp && (
                  <div 
                    className="text-xs text-gray-500 dark:text-gray-400 px-2 text-right"
                  >
                    {timestamp}
                  </div>
                )}
                
              </div>
            )}
            
            
          </div>
        )}
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Help us improve
              </h3>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              What could we have done better? (Optional)
            </p>
            
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Your feedback helps us improve..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              rows={3}
            />
            
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFeedback}
                disabled={isSubmittingFeedback}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmittingFeedback ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Main MessageBubble Component - now acts as a router
export function MessageBubble({ message, messageIndex, liked, isUser, timestamp, onStreamingChange, skipStreaming, companyTheme, isLastAiMessage, companyName, companyId, onRatingChange, onStreamingComplete }: MessageBubbleProps) {
  if (isUser) {
    return (
      <UserMessageBubble 
        message={message}
        timestamp={timestamp}
        companyTheme={companyTheme}
      />
    )
  } else {
    return (
      <AIMessageBubble 
        message={message}
        messageIndex={messageIndex}
        liked={liked || null}
        timestamp={timestamp}
        onStreamingChange={onStreamingChange}
        skipStreaming={skipStreaming}
        companyTheme={companyTheme}
        isLastAiMessage={isLastAiMessage}
        companyName={companyName}
        companyId={companyId}
        onRatingChange={onRatingChange}
        onStreamingComplete={onStreamingComplete}
      />
    )
  }
}