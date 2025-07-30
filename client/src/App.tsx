import { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useTheme} from "@/context/useThemeContext"
import { ChatInterface } from "@/components/custom/ChatInterface"
import Admin from "@/pages/Admin"
import Login from "@/pages/Login"
import { Onboarding } from "@/pages/Onboarding"
import { Landing } from "@/pages/Landing"
import { PublicNavigation, AdminNavigation } from "@/components/admin/Navigation"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { AuthProvider } from "@/context/AuthContext"
import { LanguageProvider } from "@/context/LanguageContext"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

function Demo() {
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()
  const [isChatMinimized, setIsChatMinimized] = useState(false)
  const navigate = useNavigate()
  let companyName = 'PurpleSoft Inc';

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${defaultTheme === "dark" ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Demo content */}
      <div className="container mx-auto px-4 py-8">
        <div className={`max-w-4xl mx-auto mt-10 ${window.innerWidth > 500 ? "flex-col items-center justify-center" : ""}`}>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-10">Professional Chat Interface Demo</h1>
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
              <Button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Learn More
              </Button>
              <Button
                onClick={() => navigate('/onboarding')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Get Started
              </Button>
              <Button
                onClick={() => navigate('/admin')}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Settings className="h-4 w-4 mr-2" />
                View Admin Dashboard
              </Button>
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
    <LanguageProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes without authentication */}
            <Route path="/" element={
              <>
                <PublicNavigation />
                <Landing />
              </>
            } />
            <Route path="/demo" element={
              <>
                <PublicNavigation />
                <Demo />
              </>
            } />
            <Route path="/onboarding" element={
              <>
                <PublicNavigation />
                <Onboarding />
              </>
            } />
            
            {/* Admin routes with authentication */}
            <Route path="/login" element={
              <>
                <AdminNavigation />
                <Login />
              </>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <>
                  <AdminNavigation />
                  <Admin />
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  )
}

