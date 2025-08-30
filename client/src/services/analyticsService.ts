import axios from 'axios'

export interface WidgetAnalytics {
  totalViews: number
  totalInteractions: number
  totalMessages: number
  totalResponses: number
  uniqueSessions: number
  totalRatings: number
  positiveRatings: number
  negativeRatings: number
  averageRating: number
  contentMatchRate: number
  trueAIFallbackRate: number
  avgConfidenceScore: number
  languageChanges: number
  themeChanges: number
  dailyStats: DailyStat[]
}

export interface DailyStat {
  date: string
  views: number
  interactions: number
  messages: number
  responses: number
}



export interface FAQPerformance {
  totalQueries: number
  contentMatches: number
  trueAIFallbacks: number
  matchRate: number
  averageConfidence: number
  topFallbackReasons: Record<string, number>
  faqUsage: Array<{
    id: string
    question: string
    usageCount: number
    averageRating: number
  }>
}

export class AnalyticsService {
  static BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  // Track widget view
  static async trackWidgetView(companyName: string, companyId: string, pageUrl?: string) {
    try {
      const sessionId = this.getSessionId()
      const userAgent = navigator.userAgent
      
      await axios.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
        companyName,
        companyId,
        pageUrl: pageUrl || window.location.href,
        userAgent,
        sessionId,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      console.error('Failed to track widget view:', error)
    }
  }

  // Enhanced widget interaction tracking
  static async trackWidgetInteraction(
    companyName: string, 
    companyId: string,
    eventType: 'message_sent' | 'message_received' | 'widget_opened' | 'widget_closed' | 'rating_given' | 'language_changed' | 'theme_changed' | 'faq_matched' | 'ai_fallback' | 'content_matched' | 'true_ai_fallback',
    message?: string,
    response?: string,
    additionalData?: {
      rating?: number
      feedbackText?: string
      language?: string
      themeMode?: string
      faqId?: string
      aiFallbackReason?: string
      responseSource?: 'faq' | 'ai' | 'limit_reached' | 'ai_with_context'
      confidenceScore?: number
    }
  ) {
    try {
      const sessionId = this.getSessionId()
      
      await axios.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName,
        companyId,
        eventType,
        message,
        response,
        sessionId,
        timestamp: new Date().toISOString(),
        ...additionalData
      })
    } catch (error) {
      console.error('Failed to track widget interaction:', error)
    }
  }



  // Get analytics for a company
  static async getCompanyAnalytics(companyId: string, period: '7d' | '30d' | '90d' = '7d'): Promise<WidgetAnalytics> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/analytics/company/${companyId}?period=${period}`)
      return response.data
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
      throw new Error('Failed to fetch analytics')
    }
  }



  // Get FAQ performance analytics
  static async getFAQPerformance(companyId: string, period: '7d' | '30d' | '90d' = '7d'): Promise<FAQPerformance> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/analytics/faq-performance/${companyId}?period=${period}`)
      return response.data
    } catch (error) {
      console.error('Failed to fetch FAQ performance:', error)
      throw new Error('Failed to fetch FAQ performance')
    }
  }

  // Generate unique session ID
  private static getSessionId(): string {
    let sessionId = sessionStorage.getItem('qurius_session_id')
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      sessionStorage.setItem('qurius_session_id', sessionId)
    }
    return sessionId
  }

  // Track widget open
  static async trackWidgetOpen(companyName: string, companyId: string) {
    await this.trackWidgetInteraction(companyName, companyId, 'widget_opened')
  }

  // Track widget close
  static async trackWidgetClose(companyName: string, companyId: string) {
    await this.trackWidgetInteraction(companyName, companyId, 'widget_closed')
  }

  // Track message sent
  static async trackMessageSent(companyName: string, companyId: string, message: string) {
    await this.trackWidgetInteraction(companyName, companyId, 'message_sent', message)
  }

  // Track message received with source tracking
  static async trackMessageReceived(
    companyName: string, 
    companyId: string,
    response: string, 
    responseSource: 'faq' | 'ai' | 'limit_reached' | 'ai_with_context',
    faqId?: string,
    confidenceScore?: number,
    aiFallbackReason?: string
  ) {
    try {
      const sessionId = this.getSessionId()
      
      await axios.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName,
        companyId,
        eventType: 'message_received',
        response,
        responseSource,
        faqId,
        confidenceScore,
        aiFallbackReason,
        sessionId,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      console.error('Failed to track message received:', error)
    }
  }

  // Track language change
  static async trackLanguageChange(companyName: string, companyId: string, language: string) {
    await this.trackWidgetInteraction(companyName, companyId, 'language_changed', undefined, undefined, {
      language
    })
  }

  // Track theme change
  static async trackThemeChange(companyName: string, companyId: string, themeMode: 'light' | 'dark') {
    await this.trackWidgetInteraction(companyName, companyId, 'theme_changed', undefined, undefined, {
      themeMode
    })
  }

  // Track content match (new approach - when content is found)
  static async trackContentMatch(
    companyName: string, 
    companyId: string,
    faqId: string, 
    confidenceScore: number,
    contentType: 'faq' | 'content' | 'mixed' = 'mixed'
  ) {
    await this.trackWidgetInteraction(companyName, companyId, 'content_matched', undefined, undefined, {
      faqId,
      confidenceScore,
      responseSource: 'ai_with_context',
      aiFallbackReason: `high_confidence_${contentType}`
    })
  }

  // Track true AI fallback (new approach - when no content is found)
  static async trackTrueAIFallback(
    companyName: string, 
    companyId: string,
    reason: string
  ) {
    await this.trackWidgetInteraction(companyName, companyId, 'true_ai_fallback', undefined, undefined, {
      aiFallbackReason: reason,
      confidenceScore: 0,
      responseSource: 'ai'
    })
  }

  // Track FAQ match (legacy - keeping for backward compatibility)
  static async trackFAQMatch(
    companyName: string, 
    companyId: string,
    faqId: string, 
    confidenceScore: number
  ) {
    await this.trackWidgetInteraction(companyName, companyId, 'faq_matched', undefined, undefined, {
      faqId,
      confidenceScore,
      responseSource: 'faq'
    })
  }

  // Track AI fallback (legacy - keeping for backward compatibility)
  static async trackAIFallback(
    companyName: string, 
    companyId: string,
    reason: string, 
    confidenceScore?: number
  ) {
    await this.trackWidgetInteraction(companyName, companyId, 'ai_fallback', undefined, undefined, {
      aiFallbackReason: reason,
      confidenceScore,
      responseSource: 'ai'
    })
  }

  // Track user rating
  static async trackRating(
    companyName: string,
    companyId: string,
    rating: number,
    responseText: string,
    responseSource: 'faq' | 'ai' | 'limit_reached' | 'ai_with_context',
    feedbackText?: string,
    faqId?: string,
    confidenceScore?: number
  ) {
    // Use trackWidgetInteraction for ratings to keep everything in one table
    await this.trackWidgetInteraction(companyName, companyId, 'rating_given', undefined, responseText, {
      rating,
      feedbackText,
      responseSource,
      faqId,
      confidenceScore
    })
  }

  // Track lead generation
  static async trackLeadGenerated(companyName: string, companyId: string, leadData: {
    name?: string
    email?: string
    phone?: string
    sessionId?: string
    userQuestion?: string
    aiResponse?: string
  }) {
    try {
      await axios.post(`${this.BACKEND_URL}/api/analytics/lead-generated`, {
        companyName,
        companyId,
        ...leadData,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      console.error('Failed to track lead generation:', error)
    }
  }

  // Get lead analytics
  static async getLeadAnalytics(companyId: string): Promise<{
    totalLeads: number
    newLeads: number
    contactedLeads: number
    convertedLeads: number
    lostLeads: number
    conversionRate: number
    averageResponseTime: number
    leadSources: Record<string, number>
    monthlyLeads: Array<{
      month: string
      count: number
    }>
  }> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/analytics/leads/${companyId}`)
      return response.data
    } catch (error) {
      console.error('Failed to get lead analytics:', error)
      return {
        totalLeads: 0,
        newLeads: 0,
        contactedLeads: 0,
        convertedLeads: 0,
        lostLeads: 0,
        conversionRate: 0,
        averageResponseTime: 0,
        leadSources: {},
        monthlyLeads: []
      }
    }
  }
} 