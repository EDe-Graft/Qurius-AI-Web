import type { Language } from '@/context/LanguageContext'
import axios from 'axios'
import { config } from '@/lib/config'

// Language codes mapping for Google Translate API
const LANGUAGE_CODES: Record<Language, string> = {
  en: 'en',
  es: 'es',
  fr: 'fr',
  de: 'de',
  zh: 'zh',
  ja: 'ja',
  pt: 'pt',
  it: 'it',
  ru: 'ru',
  ko: 'ko'
}

// Google Translate API endpoint (using the free tier)
const GOOGLE_TRANSLATE_API = 'https://translation.googleapis.com/language/translate/v2'

// Simple fallback translations for development (when no API key is available)
const FALLBACK_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': 'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.',
    'Sorry, something went wrong. Please try again.': 'Sorry, something went wrong. Please try again.'
  },
  es: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': 'Lo siento, pero no tengo información específica sobre eso. Por favor, contacte a nuestro equipo de soporte para obtener ayuda.',
    'Sorry, something went wrong. Please try again.': 'Lo siento, algo salió mal. Por favor, inténtalo de nuevo.'
  },
  fr: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': 'Je m\'excuse, mais je n\'ai pas d\'informations spécifiques à ce sujet. Veuillez contacter notre équipe de support pour obtenir de l\'aide.',
    'Sorry, something went wrong. Please try again.': 'Désolé, quelque chose s\'est mal passé. Veuillez réessayer.'
  },
  de: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': 'Es tut mir leid, aber ich habe keine spezifischen Informationen dazu. Bitte kontaktieren Sie unser Support-Team für Hilfe.',
    'Sorry, something went wrong. Please try again.': 'Entschuldigung, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
  },
  zh: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': '抱歉，我没有关于此事的特定信息。请联系我们的支持团队寻求帮助。',
    'Sorry, something went wrong. Please try again.': '抱歉，出现了一些问题。请再试一次。'
  },
  ja: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': '申し訳ございませんが、それについての具体的な情報がありません。サポートチームにお問い合わせください。',
    'Sorry, something went wrong. Please try again.': '申し訳ございませんが、問題が発生しました。もう一度お試しください。'
  },
  pt: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': 'Peço desculpas, mas não tenho informações específicas sobre isso. Entre em contato com nossa equipe de suporte para obter ajuda.',
    'Sorry, something went wrong. Please try again.': 'Desculpe, algo deu errado. Por favor, tente novamente.'
  },
  it: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': 'Mi scuso, ma non ho informazioni specifiche su questo. Contattate il nostro team di supporto per assistenza.',
    'Sorry, something went wrong. Please try again.': 'Mi dispiace, qualcosa è andato storto. Per favore riprova.'
  },
  ru: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': 'Извините, но у меня нет конкретной информации об этом. Пожалуйста, свяжитесь с нашей службой поддержки для получения помощи.',
    'Sorry, something went wrong. Please try again.': 'Извините, что-то пошло не так. Пожалуйста, попробуйте еще раз.'
  },
  ko: {
    'I apologize, but I don\'t have specific information about that. Please contact our support team for assistance.': '죄송하지만 그에 대한 구체적인 정보가 없습니다. 도움이 필요하시면 지원팀에 문의해 주세요.',
    'Sorry, something went wrong. Please try again.': '죄송합니다. 문제가 발생했습니다. 다시 시도해 주세요.'
  }
}

export class TranslationService {
  private static apiKey: string | null = null
  private static apiKeyPromise: Promise<string | null> | null = null

  /**
   * Fetch API key from backend
   */
  private static async fetchApiKey(): Promise<string | null> {
    if (this.apiKeyPromise) {
      return this.apiKeyPromise
    }

    this.apiKeyPromise = (async () => {
      try {
        console.log('🔑 Fetching API key from backend...')
        const response = await axios.get(`${config.backendUrl}/api/translate/api-key`)
        const apiKey = response.data.apiKey
        console.log('✅ API key fetched successfully')
        this.apiKey = apiKey
        return apiKey
      } catch (error) {
        console.warn('⚠️ Failed to fetch Google Translate API key from backend:', error)
        console.log('🔄 Falling back to fallback translations...')
        return null
      }
    })()

    return this.apiKeyPromise
  }

  /**
   * Get API key (cached or fetched from backend)
   */
  private static async getApiKey(): Promise<string | null> {
    if (this.apiKey) {
      return this.apiKey
    }
    return await this.fetchApiKey()
  }

  /**
   * Detect the language of the input text
   */
  static async detectLanguage(text: string): Promise<string> {
    const apiKey = await this.getApiKey()
    
    if (!apiKey) {
      console.warn('Google Translate API key not available, assuming English')
      return 'en'
    }

    try {
      const response = await fetch(`${GOOGLE_TRANSLATE_API}/detect?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text
        })
      })

      if (!response.ok) {
        throw new Error(`Translation API error: ${response.status}`)
      }

      const data = await response.json()
      return data.data.detections[0][0].language
    } catch (error) {
      console.error('Error detecting language:', error)
      return 'en' // Fallback to English
    }
  }

  /**
   * Translate text from source language to target language
   */
  static async translate(text: string, targetLang: Language, sourceLang?: string): Promise<string> {
    // If target language is English, return original text
    if (targetLang === 'en') {
      return text
    }

    const apiKey = await this.getApiKey()

    // If no API key, use fallback translations
    if (!apiKey) {
      console.warn('Google Translate API key not available, using fallback translations')
      const fallbackTranslations = FALLBACK_TRANSLATIONS[targetLang]
      return fallbackTranslations[text] || text
    }

    try {
      const response = await fetch(`${GOOGLE_TRANSLATE_API}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: LANGUAGE_CODES[targetLang],
          source: sourceLang || 'en'
        })
      })

      if (!response.ok) {
        throw new Error(`Translation API error: ${response.status}`)
      }

      const data = await response.json()
      return data.data.translations[0].translatedText
    } catch (error) {
      console.error('Error translating text:', error)
      // Fallback to fallback translations
      const fallbackTranslations = FALLBACK_TRANSLATIONS[targetLang]
      return fallbackTranslations[text] || text
    }
  }

  /**
   * Translate user input to English for AI processing
   */
  static async translateToEnglish(text: string): Promise<string> {
    const detectedLang = await this.detectLanguage(text)
    
    if (detectedLang === 'en') {
      return text // Already in English
    }

    return await this.translate(text, 'en', detectedLang)
  }

  /**
   * Translate AI response to user's language
   */
  static async translateToUserLanguage(text: string, userLanguage: Language): Promise<string> {
    return await this.translate(text, userLanguage, 'en')
  }
} 