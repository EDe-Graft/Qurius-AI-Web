import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@/context/useThemeContext"
import { useLanguage } from "@/context/LanguageContext"
import { ChatInterface } from "@/components/custom/ChatInterface"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Demo() {
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()
  const { t } = useLanguage()
  const [isChatMinimized, setIsChatMinimized] = useState(true)
  const navigate = useNavigate()
  let companyName = 'PurpleSoft Inc';
  let plan = 'pro';

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${defaultTheme === "dark" ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Demo content */}
      <div className="container mx-auto px-4 py-8">
        <div className={`max-w-4xl mx-auto mt-10 ${window.innerWidth > 500 ? "flex-col items-center justify-center" : ""}`}>
          <h1 className="text-4xl md:text-4xl text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-10 px-4 md:px-0">
            {t('demo.title') || 'Professional Chat Interface Demo'}
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6 mb-6 md:mb-8 mx-2 md:mx-0">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              {t('demo.companyWebsiteTitle') || 'Company Website Content'}
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed">
              {t('demo.companyWebsiteDescription') || 'This is a demonstration of how the chat interface would appear when embedded in a professional company website. The chat widget is positioned in the bottom-right corner and can be minimized when not in use.'}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
              {t('demo.keyFeaturesTitle') || 'Key features include:'}
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2 pl-2 md:pl-0">
              <li>{t('demo.feature1') || 'Modern, professional design that matches company branding'}</li>
              <li>{t('demo.feature2') || 'Light and dark theme support with smooth transitions'}</li>
              <li>{t('demo.feature3') || 'Responsive design that works on all devices'}</li>
              <li>{t('demo.feature4') || 'ChatGPT-style message layout with user messages on the right'}</li>
              <li>{t('demo.feature5') || 'Typing indicators and smooth animations'}</li>
              <li>{t('demo.feature6') || 'Minimizable interface to reduce screen clutter'}</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6 mx-2 md:mx-0">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              {t('demo.tryChatTitle') || 'Try the Chat Interface'}
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {t('demo.tryChatDescription') || 'Click the chat button in the bottom-right corner to start a conversation. You can toggle between light and dark themes, minimize the chat, and experience the smooth, professional interface.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base py-2 md:py-2 px-4 md:px-4 h-auto md:h-10 min-h-[44px] md:min-h-[40px]"
              >
                {t('demo.learnMoreButton') || 'Learn More'}
              </Button>
              <Button
                onClick={() => navigate('/onboarding')}
                className="bg-green-600 hover:bg-green-700 text-white text-sm md:text-base py-2 md:py-2 px-4 md:px-4 h-auto md:h-10 min-h-[44px] md:min-h-[40px]"
              >
                {t('demo.getStartedButton') || 'Get Started'}
              </Button>
              <Button
                onClick={() => navigate('/admin')}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-base py-2 md:py-2 px-4 md:px-4 h-auto md:h-10 min-h-[44px] md:min-h-[40px]"
              >
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{t('demo.viewAdminButton') || 'View Admin Dashboard'}</span>
                <span className="sm:hidden">Admin</span>
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
        plan={plan}
        isThemeChanging={isThemeChanging}
      />
    </div>
  )
} 