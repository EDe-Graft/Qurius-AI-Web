import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageCircle, Menu, X } from "lucide-react"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
import { ThemeToggle } from "@/components/custom/ThemeToggle"
import { useTheme } from "@/context/useThemeContext"
import quriusLogo from "@/assets/logo.png"

interface NavigationProps {
  showGetStarted?: boolean
  getStartedText?: string
  onGetStarted?: () => void
  currentPage?: 'home' | 'about' | 'contact' | 'demo'
}

export function Navigation({ 
  showGetStarted = false, 
  getStartedText = "Get Started",
  onGetStarted,
  currentPage = 'home'
}: NavigationProps) {
  const navigate = useNavigate()
  const { isDark, isThemeChanging, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted()
    } else {
      navigate("/onboarding")
    }
  }

  const handleNavigation = (page: string) => {
    setIsMobileMenuOpen(false)
    switch (page) {
      case 'home':
        navigate("/")
        break
      case 'about':
        navigate("/about")
        break
      case 'contact':
        navigate("/contact")
        break
      case 'demo':
        navigate("/demo")
        break
      default:
        break
    }
  }

  const getNavigationLinks = () => {
    switch (currentPage) {
      case 'home':
        return [
          { label: 'About', page: 'about' },
          { label: 'Contact', page: 'contact' },
          { label: 'Demo', page: 'demo' }
        ]
      case 'about':
        return [
          { label: 'Home', page: 'home' },
          { label: 'Contact', page: 'contact' },
          { label: 'Demo', page: 'demo' }
        ]
      case 'contact':
        return [
          { label: 'Home', page: 'home' },
          { label: 'About', page: 'about' },
          { label: 'Demo', page: 'demo' }
        ]
      default:
        return [
          { label: 'Home', page: 'home' },
          { label: 'About', page: 'about' },
          { label: 'Contact', page: 'contact' }
        ]
    }
  }

  const navigationLinks = getNavigationLinks()

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-18 flex justify-between items-center md:pt-18 md:pb-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              {/* <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-600" /> */}
              {quriusLogo ? (
                <img src={quriusLogo} alt="Qurius AI Logo" className="h-10 w-10 md:h-12 md:w-12" />
              ) : (
                <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              )}
              <div className="ml-3 flex flex-col gap-1">
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Qurius AI
                </span>
                <span className="text-xs md:text-xs italic text-gray-300 leading-tight">
                  Your Website. Smarter.
                </span>
              </div>
            </button>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Navigation Links - Hidden on mobile, shown on desktop */}
            <nav className="hidden lg:flex items-center space-x-6 mr-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavigation(link.page)}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            
            <LanguageSelector />
            <ThemeToggle 
              theme={isDark ? "dark" : "light"}
              toggleTheme={toggleTheme}
              isThemeChanging={isThemeChanging}
            />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            
            {showGetStarted && (
              <button
                onClick={handleGetStarted}
                className="hidden sm:flex bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base min-h-[44px] md:min-h-[40px] items-center"
              >
                <span className="hidden sm:inline">{getStartedText}</span>
                <span className="sm:hidden">Start</span>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {navigationLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavigation(link.page)}
                className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            {showGetStarted && (
              <button
                onClick={() => {
                  handleGetStarted()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                {getStartedText}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
} 