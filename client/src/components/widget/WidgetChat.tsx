import { useEffect, useState } from 'react'
import { ChatSidebar } from '@/components/widget/ChatSidebar'
import { ChatMainArea } from '@/components/widget/ChatMainArea'
import { ThemeProvider } from '@/context/useThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'

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

interface WidgetChatProps {
  companyData: CompanyData
  theme?: 'light' | 'dark'
  isMinimized?: boolean
  onToggleMinimize?: () => void // Kept for API compatibility, but handled by parent
}

export function WidgetChat({ 
  companyData, 
  theme = 'dark',
  isMinimized = false,
  onToggleMinimize
}: WidgetChatProps) {
  const [primaryColor, setPrimaryColor] = useState<string>('#6366f1') // Default indigo
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [isFullscreen, setIsFullscreen] = useState(false)
  // Sidebar open by default on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 // md breakpoint
    }
    return true
  })

  // Extract primary color from theme
  useEffect(() => {
    if (companyData?.theme) {
      const themeData = typeof companyData.theme === 'string' 
        ? JSON.parse(companyData.theme) 
        : companyData.theme
      setPrimaryColor(themeData?.primaryColor || '#6366f1')
    }
  }, [companyData])

  // Initialize with welcome message
  useEffect(() => {
    if (companyData && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        content: `Hi! I'm your ${companyData.name || 'Qurius AI'} assistant. I can answer questions about your product, pricing, onboarding, and more. What would you like to know?`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([welcomeMessage])
    }
  }, [companyData])

  const handleNewConversation = () => {
    const newId = `conv-${Date.now()}`
    const newConversation: Conversation = {
      id: newId,
      title: 'New Conversation',
      preview: 'Start a new conversation...',
      timestamp: 'Just now',
      messages: []
    }
    setConversations(prev => [newConversation, ...prev])
    setActiveConversationId(newId)
    setMessages([])
  }

  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id)
    const conversation = conversations.find(c => c.id === id)
    if (conversation) {
      setMessages(conversation.messages)
    }
    // Close sidebar on mobile after selecting conversation
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }
  }

  // Handle minimize toggle
  useEffect(() => {
    if (isMinimized) {
      setIsFullscreen(false)
    }
  }, [isMinimized])

  if (!companyData) {
    return null
  }

  // If minimized, show minimized button (handled by parent)
  if (isMinimized) {
    return null
  }

  return (
    <ThemeProvider initialTheme={theme}>
      <LanguageProvider>
        <div
          className="fixed bottom-0 right-0 w-full h-full md:w-[420px] md:h-[600px] flex overflow-hidden rounded-t-2xl md:rounded-2xl shadow-2xl z-50"
          style={{
            background:
              theme === 'dark'
                ? 'linear-gradient(to bottom right, rgb(15 23 42), rgb(2 6 23), rgb(0 0 0))'
                : 'linear-gradient(to bottom right, rgb(249 250 251), rgb(255 255 255), rgb(243 244 246))'
          }}
        >
          <div
            className={`flex flex-1 w-full h-full backdrop-blur-sm overflow-hidden ${
              theme === 'dark' ? 'bg-slate-900/90' : 'bg-white/90'
            }`}
          >
            <ChatSidebar
              conversations={conversations}
              activeConversationId={activeConversationId}
              onSelectConversation={handleSelectConversation}
              onNewConversation={handleNewConversation}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              primaryColor={primaryColor}
            />
            <ChatMainArea
              companyData={companyData}
              messages={messages}
              setMessages={setMessages}
              activeConversationId={activeConversationId}
              conversations={conversations}
              setConversations={setConversations}
              isSidebarOpen={isSidebarOpen}
              onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
              onNewConversation={handleNewConversation}
              primaryColor={primaryColor}
              isFullscreen={isFullscreen}
              onClose={onToggleMinimize}
            />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
