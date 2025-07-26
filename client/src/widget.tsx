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
  const [isChatMinimized, setIsChatMinimized] = React.useState(false)
  
  return (
    <ChatInterface
      defaultTheme={defaultTheme}
      toggleTheme={toggleTheme}
      isMinimized={isChatMinimized}
      onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
      companyName={config.companyName}
      isThemeChanging={isThemeChanging}
    />
  )
}

// Expose to global scope
if (typeof window !== 'undefined') {
  (window as any).QuriusChatWidget = {
    init: initWidget
  }
}

export { initWidget } 