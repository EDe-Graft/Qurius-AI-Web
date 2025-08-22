import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// Vite config for building the chat widget as a standalone library
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  // Determine backend URL based on environment
  const getBackendUrl = () => {
    // Priority: VITE_BACKEND_URL env var > NODE_ENV > default
    if (env.VITE_BACKEND_URL) {
      return env.VITE_BACKEND_URL
    }
    
    // Fallback based on NODE_ENV
    switch (env.NODE_ENV) {
      case 'production':
        return 'https://qurius-ai.onrender.com' // Your production API URL
      case 'staging':
        return 'https://qurius-ai.onrender.com' // Your staging API URL
      case 'development':
        return 'http://localhost:3000'
      default:
        return 'https://qurius-ai.onrender.com'
    }
  }

  const backendUrl = getBackendUrl()
  console.log(`🔧 Building widget with backend URL: ${backendUrl}`)

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/widget.tsx'),
        name: 'QuriusChatWidget',
        fileName: 'chat-widget',
        formats: ['umd', 'es']
      },
      rollupOptions: {
        // Bundle React and ReactDOM inside the widget
        external: [],
        output: {
          globals: {},
          // Ensure UMD properly assigns to window
          extend: true,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') {
              return 'chat-widget.css'
            }
            return assetInfo.name || 'asset'
          }
        }
      },
      outDir: 'dist/widget',
      emptyOutDir: true
    },
    define: {
      'process.env.NODE_ENV': `"${env.NODE_ENV || 'development'}"`,
      // Set environment variables dynamically
      'import.meta.env.VITE_BACKEND_URL': `"${backendUrl}"`,
      'import.meta.env.VITE_SUPABASE_PROJECT_URL': `"${env.VITE_SUPABASE_PROJECT_URL || 'https://demo.supabase.co'}"`,
      'import.meta.env.VITE_SUPABASE_ANON_KEY': `"${env.VITE_SUPABASE_ANON_KEY || 'demo-key'}"`,
      'import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY': `"${env.VITE_SUPABASE_SERVICE_ROLE_KEY || 'demo-service-key'}"`,
      'import.meta.env.VITE_OPEN_ROUTER_API_KEY': `"${env.VITE_OPEN_ROUTER_API_KEY || 'demo-openrouter-key'}"`,
      'import.meta.env.VITE_JINA_API_KEY': `"${env.VITE_JINA_API_KEY || 'demo-jina-key'}"`
    }
  }
}) 