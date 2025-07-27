import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Vite config for building the chat widget as a standalone library
export default defineConfig({
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
    'process.env.NODE_ENV': '"production"',
    // Set environment variables to default values to prevent errors
    'import.meta.env.VITE_BACKEND_URL': '"https://qurius-ai.onrender.com"',
    'import.meta.env.VITE_SUPABASE_PROJECT_URL': '"https://demo.supabase.co"',
    'import.meta.env.VITE_SUPABASE_ANON_KEY': '"demo-key"',
    'import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY': '"demo-service-key"',
    'import.meta.env.VITE_OPEN_ROUTER_API_KEY': '"demo-openrouter-key"',
    'import.meta.env.VITE_JINA_API_KEY': '"demo-jina-key"'
  }
}) 