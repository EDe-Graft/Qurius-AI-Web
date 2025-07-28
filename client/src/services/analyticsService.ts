import axios from 'axios'

export interface WidgetAnalytics {
  totalViews: number
  totalInteractions: number
  totalMessages: number
  totalResponses: number
  uniqueSessions: number
  dailyStats: DailyStat[]
}

export interface DailyStat {
  date: string
  views: number
  interactions: number
  messages: number
}

export class AnalyticsService {
  static BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  // Track widget view
  static async trackWidgetView(companyName: string, pageUrl?: string) {
    try {
      const sessionId = this.getSessionId()
      const userAgent = navigator.userAgent
      
      await axios.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
        companyName,
        pageUrl: pageUrl || window.location.href,
        userAgent,
        sessionId,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      console.error('Failed to track widget view:', error)
    }
  }

  // Track widget interaction
  static async trackWidgetInteraction(
    companyName: string, 
    eventType: 'message_sent' | 'message_received' | 'widget_opened' | 'widget_closed',
    message?: string,
    response?: string
  ) {
    try {
      const sessionId = this.getSessionId()
      
      await axios.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName,
        eventType,
        message,
        response,
        sessionId,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      console.error('Failed to track widget interaction:', error)
    }
  }

  // Get analytics for a company
  static async getCompanyAnalytics(companyId: string, period: '7d' | '30d' | '90d' = '7d'): Promise<WidgetAnalytics> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/analytics/company/${companyId}?period=${period}`)
      console.log('Analytics data for company:', companyId, response.data)
      return response.data
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
      throw new Error('Failed to fetch analytics')
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
  static async trackWidgetOpen(companyName: string) {
    await this.trackWidgetInteraction(companyName, 'widget_opened')
  }

  // Track widget close
  static async trackWidgetClose(companyName: string) {
    await this.trackWidgetInteraction(companyName, 'widget_closed')
  }

  // Track message sent
  static async trackMessageSent(companyName: string, message: string) {
    await this.trackWidgetInteraction(companyName, 'message_sent', message)
  }

  // Track message received
  static async trackMessageReceived(companyName: string, response: string) {
    await this.trackWidgetInteraction(companyName, 'message_received', undefined, response)
  }
} 