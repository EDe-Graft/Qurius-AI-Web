import type React from "react"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn, darkenColor } from "@/lib/utils"
import type { ChatInputProps } from "types/interfaces"

// Chat Input
export function ChatInput({ onSendMessage, isLoading = false, placeholder = "Type your message...", companyTheme }: ChatInputProps) {
  const [message, setMessage] = useState("")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  // Generate hover color from primary color
  const hoverColor = companyTheme?.primaryColor ? darkenColor(companyTheme.primaryColor, 20) : undefined;

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            className={cn(
              "min-h-[60px] max-h-[200px] resize-none pr-12 py-3",
              "border-gray-300 dark:border-gray-600",
              "bg-white dark:bg-gray-800",
              "text-gray-900 dark:text-gray-100",
              "placeholder:text-gray-500 dark:placeholder:text-gray-400",
              "focus:ring-2 focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}

            onFocus={(e) => {
              if (companyTheme?.primaryColor) {
                e.target.style.boxShadow = `0 0 0 2px ${companyTheme.primaryColor}`;
              }
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = '';
            }}
            rows={1}
          />
          <Button
            type="submit"
            size="sm"
            disabled={!message.trim() || isLoading}
            className={cn(
              "absolute right-1 bottom-2 h-8 w-8 p-0",
              "disabled:bg-gray-300 dark:disabled:bg-gray-600",
              "transition-all duration-200 ease-in-out",
              "hover:scale-105 focus:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
            )}
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
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 text-white" />}
            <span className="sr-only">Send message</span>
          </Button>
        </form>
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
          Press Enter to send, Shift + Enter for new line
        </div>
      </div>
    </div>
  )
}
