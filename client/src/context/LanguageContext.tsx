import React, { createContext, useContext, useState, useEffect } from 'react'
import { getTranslation } from '@/lib/translations'

export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'pt' | 'it' | 'ru' | 'ko'

export interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  isLanguageChanging: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Language display names
export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  pt: 'Português',
  it: 'Italiano',
  ru: 'Русский',
  ko: '한국어'
}

// Language flags (emoji)
export const LANGUAGE_FLAGS: Record<Language, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  zh: '🇨🇳',
  ja: '🇯🇵',
  pt: '🇵🇹',
  it: '🇮🇹',
  ru: '🇷🇺',
  ko: '🇰🇷'
}

// Default language detection
const getDefaultLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()
  
  // Map browser languages to our supported languages
  if (browserLang.startsWith('es')) return 'es'
  if (browserLang.startsWith('fr')) return 'fr'
  if (browserLang.startsWith('de')) return 'de'
  if (browserLang.startsWith('zh')) return 'zh'
  if (browserLang.startsWith('ja')) return 'ja'
  if (browserLang.startsWith('pt')) return 'pt'
  if (browserLang.startsWith('it')) return 'it'
  if (browserLang.startsWith('ru')) return 'ru'
  if (browserLang.startsWith('ko')) return 'ko'
  
  return 'en' // Default to English
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getDefaultLanguage)
  const [isLanguageChanging, setIsLanguageChanging] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('qurius_language') as Language
    if (savedLanguage && Object.keys(LANGUAGE_NAMES).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (language: Language) => {
    setIsLanguageChanging(true)
    setCurrentLanguage(language)
    localStorage.setItem('qurius_language', language)
    
    // Reset language changing state after a short delay
    setTimeout(() => {
      setIsLanguageChanging(false)
    }, 300)
  }

  // Translation function using the translation system
  const t = (key: string): string => {
    return getTranslation(currentLanguage, key)
  }

  const value = {
    currentLanguage,
    setLanguage,
    t,
    isLanguageChanging
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 