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

// Use import.meta.env.DEV (Vite's built-in boolean) for reliable local detection.
// import.meta.env.NODE_ENV is undefined in Vite — do not use it.
const BACKEND_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : import.meta.env.VITE_BACKEND_URL || 'https://qurius-ai.onrender.com'

// localStorage key prefix for caching widget keys per company
const WIDGET_KEY_CACHE_PREFIX = 'qurius_wk_'

export function WidgetEmbed({ companyData, theme = 'dark' }: WidgetEmbedProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const widgetKeyRef = useRef<string | null>(null)
  // Guard against React StrictMode double-invocation: track whether a key
  // request is already in-flight so we never call regenerate-widget-key twice
  // in the same render cycle.
  const isLoadingRef = useRef(false)

  useEffect(() => {
    if (!companyData?.id) return

    const companyId = companyData.id // Type guard: we know id exists here

    const loadWidget = async () => {
      // Prevent concurrent calls (React StrictMode fires effects twice in dev)
      if (isLoadingRef.current) return
      isLoadingRef.current = true

      try {
        // 1. Check in-memory ref (fastest — same component lifecycle)
        // 2. Check localStorage  (survives StrictMode remounts within same session)
        // 3. Only then call the backend — which generates a *new* key and overwrites
        //    the DB hash, so we must avoid calling it more than once per session.
        const cacheKey = `${WIDGET_KEY_CACHE_PREFIX}${companyId}`
        let widgetKey: string | null =
          widgetKeyRef.current || localStorage.getItem(cacheKey)

        if (!widgetKey) {
          const response = await axios.post(
            `${BACKEND_URL}/api/companies/${companyId}/regenerate-widget-key`,
            { planType: companyData.plan || 'free' }
          )

          if (response.data?.widgetKey) {
            widgetKey = response.data.widgetKey as string
            widgetKeyRef.current = widgetKey
            // Persist so the next mount (StrictMode remount, page nav, etc.)
            // reuses the same key instead of invalidating the DB hash.
            localStorage.setItem(cacheKey, widgetKey)
          } else {
            console.error('Failed to get widget key')
            return
          }
        } else {
          // Sync back into the ref so the cleanup path can clear it if needed
          widgetKeyRef.current = widgetKey
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
      // Reset the in-flight guard so a legitimate future mount can proceed
      isLoadingRef.current = false

      if (scriptRef.current) {
        scriptRef.current.remove()
        scriptRef.current = null
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
