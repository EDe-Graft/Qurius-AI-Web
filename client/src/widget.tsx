import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChatInterface } from './components/custom/ChatInterface'
import { ThemeProvider, useTheme } from '../context/useThemeContext'
import './global.css'

// Widget interface
interface WidgetConfig {
  companyName: string
  theme?: 'light' | 'dark'
  apiUrl?: string
  position?: 'bottom-right' | 'bottom-left'
  // Add configuration for external services
  supabaseUrl?: string
  supabaseAnonKey?: string
}

// Global widget instance
let widgetRoot: any = null

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
        <WidgetApp config={config} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

// Widget app component
function WidgetApp({ config }: { config: WidgetConfig }) {
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()
  const [isChatMinimized, setIsChatMinimized] = React.useState(true) // Start minimized
  
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
      companyName={config.companyName}
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