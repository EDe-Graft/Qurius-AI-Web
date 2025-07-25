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

//Chat Interface
export interface ChatInterfaceProps {
    defaultTheme: "light" | "dark"
    toggleTheme: () => void
    isMinimized?: boolean
    onToggleMinimize?: () => void
    companyName?: string
    isThemeChanging?: boolean
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
    isUser: boolean
    timestamp?: string
    onStreamingChange?: (isStreaming: boolean) => void
    skipStreaming?: boolean // Add this prop
    defaultTheme?: "light" | "dark"
    companyTheme?: CompanyTheme
  }
  

// Chat Message
export interface Message {
    content: string
    isUser: boolean
    timestamp: string
}