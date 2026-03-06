import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChatSidebar } from '@/components/widget/ChatSidebar'
import { ChatMainArea } from '@/components/widget/ChatMainArea'
import { ThemeProvider } from '@/context/useThemeContext'
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

export function WidgetIframePage() {
  const [searchParams] = useSearchParams()
  const companyId = searchParams.get('companyId') || ''
//   const companyName = searchParams.get('companyName') || ''
  const plan = searchParams.get('plan') || 'starter'
  const theme = (searchParams.get('theme') || 'dark') as 'light' | 'dark'
  const key = searchParams.get('key') || ''

  const [companyData, setCompanyData] = useState<CompanyData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isValid, setIsValid] = useState(false)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  // Sidebar open by default on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 // md breakpoint
    }
    return true
  })

  const BACKEND_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://qurius-ai.onrender.com'

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
        <div className="h-screen w-screen flex bg-gradient-to-br from-slate-900 via-slate-950 to-black overflow-hidden">
          <div className="flex flex-1 w-full h-full bg-slate-900/90 backdrop-blur-sm overflow-hidden">
            <ChatSidebar
              conversations={conversations}
              activeConversationId={activeConversationId}
              onSelectConversation={handleSelectConversation}
              onNewConversation={handleNewConversation}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
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
            />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
