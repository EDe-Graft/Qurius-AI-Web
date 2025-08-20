import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import axios from 'axios'

interface QuickQuestion {
  id: string
  question: string
  answer: string
  popularity_count: number
}

interface QuickQuestionsProps {
  companyId: string
  companyName?: string
  onQuestionClick: (question: string) => void
  companyTheme?: any
  isVisible: boolean
}

export function QuickQuestions({ 
  companyId, 
  onQuestionClick, 
  companyTheme,
  isVisible 
}: QuickQuestionsProps) {
  const [questions, setQuestions] = useState<QuickQuestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasLoaded, setHasLoaded] = useState(false)

  const fetchPopularQuestions = async () => {
    if (!companyId) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000'
        : 'https://qurius.app'
      
      const response = await axios.get(`${apiUrl}/api/companies/${companyId}/popular-faqs?limit=5`)
      
      const data = response.data
      
      // If no questions returned or less than 3, use fallback questions based on company context
      if (!data || data.length === 0 || data.length < 3) {
        const fallbackQuestions = getFallbackQuestions()
        setQuestions(fallbackQuestions)
      } else {
        setQuestions(data)
      }
    } catch (err) {
      console.error('Error fetching popular questions:', err)
      // Use fallback questions on error
      const fallbackQuestions = getFallbackQuestions()
      setQuestions(fallbackQuestions)
    } finally {
      setIsLoading(false)
    }
  }

  // Get fallback questions based on company context
  const getFallbackQuestions = (): QuickQuestion[] => {
    const isQuriusAI = companyId === '2bdad203-31da-403f-90d1-049a28d7adfc' // Qurius AI company ID
    const isPurpleSoft = companyId === 'cf97eacc-8346-4f8b-ba8a-4c3e286030ab' // PurpleSoft demo ID
    
    if (isQuriusAI) {
      return [
        { id: 'fallback-1', question: 'What is Qurius AI?', answer: '', popularity_count: 10 },
        { id: 'fallback-2', question: 'Getting started?', answer: '', popularity_count: 10 },
        { id: 'fallback-3', question: 'Pricing plans?', answer: '', popularity_count: 10 },
        { id: 'fallback-4', question: 'Multi-language support?', answer: '', popularity_count: 10 },
        // { id: 'fallback-5', question: 'Widget customization?', answer: '', popularity_count: 0 }
      ]
    } else if (isPurpleSoft) {
      return [
        { id: 'fallback-1', question: 'Services offered?', answer: '', popularity_count: 10 },
        { id: 'fallback-2', question: 'Contact support?', answer: '', popularity_count: 10 },
        { id: 'fallback-3', question: 'Business hours?', answer: '', popularity_count: 10 },
        // { id: 'fallback-4', question: 'Do you have a free trial?', answer: '', popularity_count: 0 },
        // { id: 'fallback-5', question: 'Where are you located?', answer: '', popularity_count: 0 }
      ]
    } else {
      // Generic fallback questions
      return [
        { id: 'fallback-1', question: 'Contact support?', answer: '', popularity_count: 10 },
        { id: 'fallback-2', question: 'Services offered?', answer: '', popularity_count: 10 },
        { id: 'fallback-3', question: 'Getting started?', answer: '', popularity_count: 10 },
        // { id: 'fallback-4', question: 'Business hours?', answer: '', popularity_count: 10 },
        // { id: 'fallback-5', question: 'Do you offer support?', answer: '', popularity_count: 10 }
      ]
    }
  }

  useEffect(() => {
    if (isVisible && companyId && !hasLoaded) {
      fetchPopularQuestions()
      setHasLoaded(true)
    }
  }, [isVisible, companyId, hasLoaded])

  // Reset when company changes
  useEffect(() => {
    setHasLoaded(false)
    setQuestions([])
    setError(null)
  }, [companyId])

  const handleQuestionClick = (question: string) => {
    onQuestionClick(question)
  }

  if (!isVisible) {
    return null
  }

  if (isLoading) {
    return (
      <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (error || questions.length === 0) {
    return null
  }

  return (
    <div 
      className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: companyTheme?.backgroundColor ? `${companyTheme.backgroundColor}CC` : undefined,
        borderColor: companyTheme?.borderColor || '#E5E7EB'
      }}
    >
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {questions.map((item, index) => (
          <button
            key={item.id || index}
            onClick={() => handleQuestionClick(item.question)}
            className={cn(
              "inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-md sm:rounded-lg",
              "transition-all duration-200 hover:scale-105 active:scale-95",
              "border shadow-sm",
              "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1",
              "text-gray-700 dark:text-gray-300",
              "hover:bg-white dark:hover:bg-gray-700",
              "touch-manipulation"
            )}
            style={{
              borderColor: companyTheme?.borderColor || '#D1D5DB',
              backgroundColor: companyTheme?.backgroundColor ? `${companyTheme.backgroundColor}80` : undefined,
              color: companyTheme?.textColor || '#374151',
            }}
            onMouseEnter={(e) => {
              if (companyTheme?.primaryColor && window.innerWidth > 768) {
                e.currentTarget.style.borderColor = companyTheme.primaryColor
                e.currentTarget.style.backgroundColor = `${companyTheme.primaryColor}10`
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.borderColor = companyTheme?.borderColor || '#D1D5DB'
                e.currentTarget.style.backgroundColor = companyTheme?.backgroundColor ? `${companyTheme.backgroundColor}80` : 'transparent'
              }
            }}
          >
            <span className="truncate max-w-[100px] xs:max-w-[120px] sm:max-w-[140px] md:max-w-[160px] leading-tight">
              {item.question}
            </span>
            <ChevronRight 
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0 transition-transform duration-200" 
              style={{ color: companyTheme?.primaryColor || '#6B7280' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
} 