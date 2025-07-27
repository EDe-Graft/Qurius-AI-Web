import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useTheme} from "@/context/useThemeContext"
import { ChatInterface } from "@/components/custom/ChatInterface"
import Admin from "@/pages/Admin"
import Login from "@/pages/Login"
import { Navigation } from "@/components/admin/Navigation"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { AuthProvider } from "@/context/AuthContext"
import { Settings } from "lucide-react"


function Home() {
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()
  const [isChatMinimized, setIsChatMinimized] = useState(false)
  let companyName = 'TechCorp Solutions';

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${defaultTheme === "dark" ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Demo content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Professional Chat Interface Demo</h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Company Website Content</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a demonstration of how the chat interface would appear when embedded in a professional company
              website. The chat widget is positioned in the bottom-right corner and can be minimized when not in use.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Key features include:</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modern, professional design that matches company branding</li>
              <li>Light and dark theme support with smooth transitions</li>
              <li>Responsive design that works on all devices</li>
              <li>ChatGPT-style message layout with user messages on the right</li>
              <li>Typing indicators and smooth animations</li>
              <li>Minimizable interface to reduce screen clutter</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Try the Chat Interface</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Click the chat button in the bottom-right corner to start a conversation. You can toggle between light and
              dark themes, minimize the chat, and experience the smooth, professional interface.
            </p>
            <div className="flex space-x-4">
              <a 
                href="/admin" 
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Settings className="h-4 w-4 mr-2" />
                View Admin Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <ChatInterface
        defaultTheme={defaultTheme}
        toggleTheme={toggleTheme}
        isMinimized={isChatMinimized}
        onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
        companyName={companyName}
        isThemeChanging={isThemeChanging}
      />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

