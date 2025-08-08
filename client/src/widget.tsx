import React from 'react'
import { createRoot } from 'react-dom/client'
import axios, { AxiosError } from 'axios'
import { ChatInterface } from '@/components/custom/ChatInterface'
import { ThemeProvider, useTheme } from '@/context/useThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import './global.css'

// Widget interface
interface WidgetConfig {
  companyName: string
  companyId: string
  key: string
  plan: string
  theme?: 'light' | 'dark'
  position?: 'bottom-right' | 'bottom-left'
  // Add configuration for external services
  supabaseUrl?: string
  supabaseAnonKey?: string
  backendUrl?: string // Added for backend communication
  companyData?: CompanyData // Added for storing company data
}

// Company data interface
interface CompanyData {
  id: string
  name: string
  plan: string
  status: string
  theme: any
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

// Global widget instance
let widgetRoot: any = null

// Key validation functions
const validateWidgetKey = async (key: string, companyName: string, backendUrl: string) => {
  try {
    console.log('🔑 Validating widget key:', key, 'for company with name:', companyName);
    const response = await axios.get(`${backendUrl}/api/validate-key`, {
      params: { key, companyName }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    console.error('Key validation failed:', axiosError.response?.data || axiosError.message)
    return { valid: false, error: 'Validation failed' }
  }
}


// Get company data by ID
const getCompanyDataById = async (companyId: string, backendUrl: string): Promise<CompanyData> => {
  try {
    console.log('🏢 Fetching company data for ID:', companyId);
    const response = await axios.get(`${backendUrl}/api/companies/${companyId}`)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    console.error('Failed to fetch company data:', axiosError.response?.data || axiosError.message)
    throw new Error('Failed to fetch company data')
  }
}

// Verify plan authenticity
const verifyPlanAuthenticity = (scriptPlan: string, companyPlan: string): string => {
  console.log('🔍 Verifying plan authenticity:', { scriptPlan, companyPlan });
  
  // For demo key, allow any plan
  if (scriptPlan === 'free') {
    return scriptPlan
  }
  
  // Check if script plan matches company plan
  if (scriptPlan === companyPlan) {
    console.log('✅ Plan verification successful: plans match');
    return companyPlan
  } else {
    console.log('⚠️ Plan mismatch detected: using company plan as source of truth');
    console.log('Script plan:', scriptPlan, 'Company plan:', companyPlan);
    return companyPlan // Use company plan as single source of truth
  }
}

// Widget initialization with validation
const initializeWidget = async (config: WidgetConfig) => {
  const key = config.key
  const companyName = config.companyName
  const companyId = config.companyId
  const scriptPlan = config.plan
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  // Validate demo key or widget key before initializing widget
  let validationResult = await validateWidgetKey(key, companyName, backendUrl)
  
  if (!validationResult?.valid) {
    console.error('Widget key validation failed:', validationResult.error)
    return false
  }
  
  // Get company data by ID
  try {
    const companyData = await getCompanyDataById(companyId, backendUrl)
    console.log('✅ Company data fetched successfully:', companyData)
    
    // Verify plan authenticity and use company plan as source of truth
    const verifiedPlan = verifyPlanAuthenticity(scriptPlan, companyData.plan)
    
    // Store company data in config for use in widget with verified plan
    config.companyData = {
      ...companyData,
      plan: verifiedPlan // Use verified plan as single source of truth
    }
    
    console.log('✅ Widget initialization completed successfully')
    return true
  } catch (error) {
    console.error('❌ Failed to fetch company data:', error)
    return false
  }
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
      <ThemeProvider initialTheme={config.theme}>
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
      companyData={config.companyData}
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