import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@/context/useThemeContext"
import { useLanguage } from "@/context/LanguageContext"
import { ChatInterface } from "@/components/custom/ChatInterface"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Demo() {
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()
  const { t } = useLanguage()
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-10">
            {t('demo.title') || 'Professional Chat Interface Demo'}
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t('demo.companyWebsiteTitle') || 'Company Website Content'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('demo.companyWebsiteDescription') || 'This is a demonstration of how the chat interface would appear when embedded in a professional company website. The chat widget is positioned in the bottom-right corner and can be minimized when not in use.'}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('demo.keyFeaturesTitle') || 'Key features include:'}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>{t('demo.feature1') || 'Modern, professional design that matches company branding'}</li>
              <li>{t('demo.feature2') || 'Light and dark theme support with smooth transitions'}</li>
              <li>{t('demo.feature3') || 'Responsive design that works on all devices'}</li>
              <li>{t('demo.feature4') || 'ChatGPT-style message layout with user messages on the right'}</li>
              <li>{t('demo.feature5') || 'Typing indicators and smooth animations'}</li>
              <li>{t('demo.feature6') || 'Minimizable interface to reduce screen clutter'}</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t('demo.tryChatTitle') || 'Try the Chat Interface'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('demo.tryChatDescription') || 'Click the chat button in the bottom-right corner to start a conversation. You can toggle between light and dark themes, minimize the chat, and experience the smooth, professional interface.'}
            </p>
            <div className="flex space-x-4">
              <Button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {t('demo.learnMoreButton') || 'Learn More'}
              </Button>
              <Button
                onClick={() => navigate('/onboarding')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {t('demo.getStartedButton') || 'Get Started'}
              </Button>
              <Button
                onClick={() => navigate('/admin')}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Settings className="h-4 w-4 mr-2" />
                {t('demo.viewAdminButton') || 'View Admin Dashboard'}
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