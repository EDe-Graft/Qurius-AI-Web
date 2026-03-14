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

export function WidgetEmbed({ companyData, theme = 'dark' }: WidgetEmbedProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  // Guard against React StrictMode's double-invocation of effects in dev:
  // StrictMode mounts → unmounts → remounts, firing useEffect twice.
  // Without this guard two GET /widget-key requests fire simultaneously.
  const isLoadingRef = useRef(false)

  useEffect(() => {
    if (!companyData?.id) return

    const companyId = companyData.id

    const loadWidget = async () => {
      if (isLoadingRef.current) return
      isLoadingRef.current = true

      try {
        // Fetch the existing widget key — does NOT regenerate it.
        // Using regenerate-widget-key here would overwrite the DB hash and
        // immediately invalidate the key already embedded in the customer's
        // website script tag. The read-only endpoint avoids that entirely.
        const response = await axios.get(
          `${BACKEND_URL}/api/companies/${companyId}/widget-key`
        )

        const widgetKey = response.data?.widgetKey as string | undefined
        if (!widgetKey) {
          console.error('Failed to get widget key')
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

        // Remove existing script if present (e.g. hot-reload or company switch)
        const existingScript = document.querySelector('script[data-qurius-widget-embed]')
        if (existingScript) {
          existingScript.remove()
        }

        // Create and inject script tag exactly as a customer would
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
      } catch (error) {
        console.error('Failed to load widget:', error)
      }
    }

    loadWidget()

    // Cleanup on unmount — remove the injected script and widget DOM nodes so
    // the next mount starts cleanly (important for LiveTestModal open/close).
    return () => {
      isLoadingRef.current = false // reset guard so future mounts can proceed

      if (scriptRef.current) {
        scriptRef.current.remove()
        scriptRef.current = null
      }
      const container = document.getElementById('qurius-widget-iframe-container')
      if (container) container.remove()

      const launcher = document.getElementById('qurius-widget-launcher')
      if (launcher) launcher.remove()
    }
  }, [companyData?.id, companyData?.plan, theme])

  // This component renders nothing — it only injects the embed script.
  return null
}
