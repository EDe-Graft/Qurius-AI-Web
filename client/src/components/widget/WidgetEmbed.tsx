import { useEffect, useRef } from 'react'
import axios from 'axios'

interface CompanyData {
  id?: string
  name: string
  plan: string
  theme?: any
}

interface WidgetEmbedProps {
  companyData: CompanyData
  theme?: 'light' | 'dark'
}

const BACKEND_URL = import.meta.env.NODE_ENV === 'development' ? 'http://localhost:3000' : import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'

export function WidgetEmbed({ companyData, theme = 'dark' }: WidgetEmbedProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const widgetKeyRef = useRef<string | null>(null)

  useEffect(() => {
    if (!companyData?.id) return

    const companyId = companyData.id // Type guard: we know id exists here

    const loadWidget = async () => {
      try {
        // Get or generate widget key
        let widgetKey = widgetKeyRef.current
        
        if (!widgetKey) {
          // Try to get existing widget key by regenerating (this will return existing if present)
          const response = await axios.post(
            `${BACKEND_URL}/api/companies/${companyId}/regenerate-widget-key`,
            { planType: companyData.plan || 'free' }
          )
          
          if (response.data?.widgetKey) {
            widgetKey = response.data.widgetKey
            widgetKeyRef.current = widgetKey
          } else {
            console.error('Failed to get widget key')
            return
          }
        }

        if (!widgetKey) {
          console.error('Widget key is required')
          return
        }

        // Extract primary color from theme
        let primaryColor = '#6366f1' // Default indigo
        if (companyData?.theme) {
          const themeData = typeof companyData.theme === 'string' 
            ? JSON.parse(companyData.theme) 
            : companyData.theme
          primaryColor = themeData?.primaryColor || '#6366f1'
        }

        // Remove existing script if present
        const existingScript = document.querySelector('script[data-qurius-widget-embed]')
        if (existingScript) {
          existingScript.remove()
        }

        // Create and inject script tag
        const script = document.createElement('script')
        script.src = import.meta.env.DEV 
          ? 'http://localhost:5173/widget-iframe-embed.js'
          : 'https://qurius.app/widget-iframe-embed.js'
        script.setAttribute('data-id', companyId)
        script.setAttribute('data-key', widgetKey)
        script.setAttribute('data-plan', companyData.plan || 'free')
        script.setAttribute('data-theme', theme)
        script.setAttribute('data-primary-color', primaryColor)
        script.setAttribute('data-qurius-widget-embed', 'true')
        script.async = true

        document.body.appendChild(script)
        scriptRef.current = script

        return () => {
          // Cleanup: remove script and widget container
          if (scriptRef.current) {
            scriptRef.current.remove()
            scriptRef.current = null
          }
          
          // Remove widget container if it exists
          const container = document.getElementById('qurius-widget-iframe-container')
          if (container) {
            container.remove()
          }
          
          const launcher = document.getElementById('qurius-widget-launcher')
          if (launcher) {
            launcher.remove()
          }
        }
      } catch (error) {
        console.error('Failed to load widget:', error)
      }
    }

    loadWidget()

    // Cleanup on unmount
    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove()
      }
      const container = document.getElementById('qurius-widget-iframe-container')
      if (container) {
        container.remove()
      }
      const launcher = document.getElementById('qurius-widget-launcher')
      if (launcher) {
        launcher.remove()
      }
    }
  }, [companyData?.id, companyData?.plan, theme])

  // This component doesn't render anything - it just injects the script
  return null
}
