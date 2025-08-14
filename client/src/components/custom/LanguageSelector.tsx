import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage, LANGUAGE_NAMES, LANGUAGE_FLAGS, type Language } from '@/context/LanguageContext'
import { AnalyticsService } from '@/services/analyticsService'

interface LanguageSelectorProps {
  className?: string
  variant?: 'dropdown' | 'buttons'
  companyName?: string
}

export function LanguageSelector({ className = '', variant = 'dropdown', companyName }: LanguageSelectorProps) {
  const { currentLanguage, setLanguage, isLanguageChanging } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (language: Language) => {
    setLanguage(language)
    setIsOpen(false)
    if (companyName) {
      AnalyticsService.trackLanguageChange(companyName, language)
    }
  }

  if (variant === 'buttons') {
    return (
      <div className={`flex flex-wrap gap-1 ${className}`}>
        {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
          <button
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            disabled={isLanguageChanging}
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentLanguage === code
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            } ${isLanguageChanging ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="mr-2">{LANGUAGE_FLAGS[code as Language]}</span>
            {name}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLanguageChanging}
        className="flex items-center px-1 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Globe className="h-4 w-4 mr-1" />
        <span className="mr-1">{LANGUAGE_FLAGS[currentLanguage]}</span>
        {/* {LANGUAGE_NAMES[currentLanguage]} */}
        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="py-1">
            {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as Language)}
                className={`w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  currentLanguage === code
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="mr-3">{LANGUAGE_FLAGS[code as Language]}</span>
                {name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 