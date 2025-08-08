// Theme Toggle
export interface ThemeToggleProps {
    theme: "light" | "dark"
    toggleTheme: () => void
    isThemeChanging?: boolean
}


// Company Theme
export interface CompanyTheme {
    primaryColor: string; // Only this from company
    logoUrl?: string; // Company logo URL
    // System colors for consistency
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    accentColor: string;
  }
  

// Company
export interface Company {
    id: string;
    name: string;
    domain: string;
    description: string;
    theme: string;
    embedding: number[];
}

// FAQ
export interface FAQ {
    id: string;
    company_id: string;
    question: string;
    answer: string;
    question_embedding: number[];
    answer_embedding: number[];
    tags: string[];
}

// FAQ Response interface
export interface FAQResponse {
    question: string;
    answer: string;
    source: 'faq' | 'ai' | 'limit_reached';
    faqId?: string;
    confidence?: number;
    fallbackReason?: string;
    limitReached?: boolean;
    messagesLeft?: number;
}

//Chat Interface
export interface ChatInterfaceProps {
    defaultTheme: "light" | "dark"
    toggleTheme: () => void
    isMinimized?: boolean
    onToggleMinimize?: () => void
    isThemeChanging?: boolean
    companyData?: {
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
}

// Chat Input
export interface ChatInputProps {
    onSendMessage: (message: string) => void
    isLoading?: boolean
    placeholder?: string
    defaultTheme?: "light" | "dark"
    companyTheme?: CompanyTheme
}

// Message Bubble
export interface MessageBubbleProps {
    message: string
    messageIndex: number
    liked?: 'like' | 'dislike' | null
    isUser: boolean
    timestamp?: string
    onStreamingChange?: (isStreaming: boolean) => void
    skipStreaming?: boolean // Add this prop
    isLastAiMessage?: boolean // Only stream the last AI message
    defaultTheme?: "light" | "dark"
    companyTheme?: CompanyTheme
    companyName?: string // For analytics tracking
    onRatingChange?: (rating: 'like' | 'dislike' | null) => void // Add callback for rating changes
    wasMinimized?: boolean // Add visibility state for conditional rendering
  }
  

// Chat Message
export interface Message {
    content: string
    isUser: boolean
    liked?: 'like' | 'dislike' | null
    timestamp: string
}