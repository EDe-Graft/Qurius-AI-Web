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
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'dist/widget',
    emptyOutDir: true
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}) 