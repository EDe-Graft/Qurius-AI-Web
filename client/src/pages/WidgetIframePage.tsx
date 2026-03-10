import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChatSidebar } from '@/components/widget/ChatSidebar'
import { ChatMainArea } from '@/components/widget/ChatMainArea'
import { ThemeProvider, useTheme } from '@/context/useThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import axios from 'axios'

// CompanyData interface matching widget.tsx
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

// Overlay to hide theme transition race conditions
function ThemeLoadingOverlay() {
  const { isThemeChanging } = useTheme()

  if (!isThemeChanging) return null

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-slate-200/90">Updating theme…</p>
      </div>
    </div>
  )
}

export function WidgetIframePage() {
  const [searchParams] = useSearchParams()
  const companyId = searchParams.get('companyId') || ''
//   const companyName = searchParams.get('companyName') || ''
  const plan = searchParams.get('plan') || 'starter'
  const theme = (searchParams.get('theme') || 'dark') as 'light' | 'dark'
  const key = searchParams.get('key') || ''

  const [companyData, setCompanyData] = useState<CompanyData | null>(null)
  const [primaryColor, setPrimaryColor] = useState<string>('#6366f1') // Default indigo
  const [isLoading, setIsLoading] = useState(true)
  const [isValid, setIsValid] = useState(false)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  // Sidebar open by default on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 // md breakpoint
    }
    return true
  })

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL === 'development' ? 'http://localhost:3000' : 'https://qurius-ai.onrender.com'

  // Validate widget key and fetch company data
  useEffect(() => {
    const initialize = async () => {
      if (!companyId || !key) {
        console.error('Missing companyId or key')
        setIsLoading(false)
        return
      }

      try {
        // Validate key
        const validationResponse = await axios.get(`${BACKEND_URL}/api/validate-key`, {
          params: { key, companyId }
        })

        if (!validationResponse.data?.valid) {
          console.error('Invalid widget key')
          setIsLoading(false)
          return
        }

        // Fetch company data
        const companyResponse = await axios.get(`${BACKEND_URL}/api/companies/${companyId}`)
        const company = companyResponse.data

        // Extract primary color from theme
        let extractedPrimaryColor = '#6366f1' // Default indigo
        if (company?.theme) {
          // Handle both parsed and unparsed theme
          const theme = typeof company.theme === 'string' 
            ? JSON.parse(company.theme) 
            : company.theme
          extractedPrimaryColor = theme?.primaryColor || '#6366f1'
        }

        setPrimaryColor(extractedPrimaryColor)
        setCompanyData({
          ...company,
          plan: plan // Use plan from query params
        })
        setIsValid(true)

        // Initialize with welcome message
        const welcomeMessage: Message = {
          id: 'welcome',
          content: `Hi! I'm your ${company.name || 'Qurius AI'} assistant. I can answer questions about your product, pricing, onboarding, and more. What would you like to know?`,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        setMessages([welcomeMessage])
      } catch (error) {
        console.error('Failed to initialize widget:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initialize()
  }, [companyId, key, plan])

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

  // Listen for fullscreen state messages from the parent embed container
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event || !event.data) return
      const data = event.data as any

      if (
        data &&
        data.source === 'qurius-embed' &&
        (data.type === 'qurius-fullscreen-changed' || typeof data.isFullscreen === 'boolean')
      ) {
        setIsFullscreen(data.isFullscreen)
        if (typeof data.isMobile === 'boolean') {
          setIsMobileView(data.isMobile)
        }
      }
    }

    window.addEventListener('message', handleMessage)
    
    // Request initial fullscreen state from parent
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        { source: 'qurius-widget', type: 'qurius-request-fullscreen-state' },
        '*'
      )
    }
    
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isValid || !companyData) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-950">
        <div className="text-center text-slate-400">
          <p>Unable to load widget. Please check your configuration.</p>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider initialTheme={theme}>
      <LanguageProvider>
        <div
          className="relative h-screen w-screen flex overflow-hidden"
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
              isMobileView={isMobileView}
            />
          </div>
          <ThemeLoadingOverlay />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
