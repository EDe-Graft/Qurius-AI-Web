import React from 'react'
import { createRoot } from 'react-dom/client'
import axios, { AxiosError } from 'axios'
import { ChatInterface } from '@/components/custom/ChatInterface'
import { ThemeProvider, useTheme } from '@/context/useThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import './global.css'

// Widget interface
interface WidgetConfig {
  company: string
  key: string
  plan: string
  theme?: 'light' | 'dark'
  position?: 'bottom-right' | 'bottom-left'
  // Add configuration for external services
  supabaseUrl?: string
  supabaseAnonKey?: string
  backendUrl?: string // Added for backend communication
}

// Global widget instance
let widgetRoot: any = null

// Key validation functions
const validateWidgetKey = async (key: string, company: string, backendUrl: string) => {
  try {
    console.log('🔑 Validating widget key:', key, 'for company with name:', company);
    const response = await axios.get(`${backendUrl}/api/validate-key`, {
      params: { key, company }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    console.error('Key validation failed:', axiosError.response?.data || axiosError.message)
    return { valid: false, error: 'Validation failed' }
  }
}

const validateDemoKey = async (key: string, backendUrl: string) => {
  try {
    console.log('🔑 Validating demo key:', key);
    const response = await axios.get(`${backendUrl}/api/validate-demo-key`, {
      params: { key }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    console.error('Demo key validation failed:', axiosError.response?.data || axiosError.message)
    return { valid: false, error: 'Demo validation failed' }
  }
}

// Widget initialization with validation
const initializeWidget = async (config: WidgetConfig) => {
  const key = config.key
  const company = config.company
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  // Validate key before initializing widget
  let validationResult
  if (key === 'demo-2025-healthplus') {
    validationResult = await validateDemoKey(key, backendUrl)
  } else {
    validationResult = await validateWidgetKey(key, company, backendUrl)
  }
  
  if (!validationResult.valid) {
    console.error('Widget key validation failed:', validationResult.error)
    return false
  }
  
  // Initialize widget with validated config
  console.log('✅ Widget key validated successfully')
  return true
}

// Initialize widget
function initWidget(container: HTMLElement, config: WidgetConfig) {
  // Clean up existing widget
  if (widgetRoot) {
    widgetRoot.unmount()
  }
  
  // Create React root
  widgetRoot = createRoot(container)
  
  // Render widget
  widgetRoot.render(
    <React.StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <WidgetApp config={config} />
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

// Widget app component
function WidgetApp({ config }: { config: WidgetConfig }) {
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()
  const [isChatMinimized, setIsChatMinimized] = React.useState(true) // Start minimized
  const [isValid, setIsValid] = React.useState(false)

  // Initialize widget and validate key on mount
  React.useEffect(() => {
    initializeWidget(config).then(setIsValid)
  }, [config])
  
  // Don't render if key is invalid
  if (!isValid) {
    return null
  }

  const handleToggleMinimize = () => {
    const newMinimizedState = !isChatMinimized
    setIsChatMinimized(newMinimizedState)
    
    // When minimized, show the chat button again
    if (newMinimizedState) {
      // Widget is minimized, chat button should be visible
      console.log('Widget minimized, chat button should be visible')
    } else {
      // Widget is expanded, chat button should be hidden
      console.log('Widget expanded, chat button should be hidden')
    }
  }
  
  return (
    <ChatInterface
      defaultTheme={defaultTheme}
      toggleTheme={toggleTheme}
      isMinimized={isChatMinimized}
      onToggleMinimize={handleToggleMinimize}
      companyName={config.company}
      isThemeChanging={isThemeChanging}
    />
  )
}

// Create the widget object
const QuriusChatWidget = {
  init: initWidget
}

// Expose to global scope - FIXED: Use the same pattern as vanilla widget
if (typeof window !== 'undefined') {
  (window as any).QuriusChatWidget = QuriusChatWidget
}

// Export for UMD - FIXED: Export the object directly
export default QuriusChatWidget 