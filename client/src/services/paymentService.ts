import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001'

export interface PaymentPlan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
}

export interface SubscriptionData {
  companyId: string
  planId: string
  customerEmail: string
  companyName: string
}

export interface SubscriptionStatus {
  plan: string
  subscription_status: string
  subscription_end_date?: string
  stripe_subscription?: any
}

export class PaymentService {
  static async createCheckoutSession(subscriptionData: SubscriptionData) {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/payments/create-checkout-session`, subscriptionData)
      return response.data
    } catch (error) {
      console.error('Error creating checkout session:', error)
      throw error
    }
  }

  static async createCustomerPortalSession(companyId: string) {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/payments/create-portal-session`, { companyId })
      return response.data
    } catch (error) {
      console.error('Error creating portal session:', error)
      throw error
    }
  }

  static async getSubscriptionStatus(companyId: string): Promise<SubscriptionStatus> {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/payments/subscription-status/${companyId}`)
      return response.data
    } catch (error) {
      console.error('Error getting subscription status:', error)
      throw error
    }
  }

  static getPlanDetails(planId: string): PaymentPlan | null {
    const plans: Record<string, PaymentPlan> = {
      'free': {
        id: 'free',
        name: 'Free Plan',
        price: 0,
        interval: 'month',
        features: [
          '1,000 messages/month',
          'Basic customization',
          'Email support',
          'Standard FAQ templates'
        ]
      },
      'starter': {
        id: 'starter',
        name: 'Starter Plan',
        price: 29,
        interval: 'month',
        features: [
          '10,000 messages/month',
          'Advanced customization',
          'Priority support',
          'Analytics dashboard',
          'Custom FAQ import'
        ]
      },
      'pro': {
        id: 'pro',
        name: 'Pro Plan',
        price: 99,
        interval: 'month',
        features: [
          'Unlimited messages',
          'White-label options',
          '24/7 phone support',
          'Advanced analytics',
          'API access',
          'Custom integrations'
        ]
      }
    }

    return plans[planId] || null
  }

  static async redirectToCheckout(subscriptionData: SubscriptionData) {
    try {
      const { url } = await this.createCheckoutSession(subscriptionData)
      window.location.href = url
    } catch (error) {
      console.error('Error redirecting to checkout:', error)
      throw error
    }
  }

  static async redirectToCustomerPortal(companyId: string) {
    try {
      const { url } = await this.createCustomerPortalSession(companyId)
      window.location.href = url
    } catch (error) {
      console.error('Error redirecting to customer portal:', error)
      throw error
    }
  }

  static isPlanActive(subscriptionStatus: SubscriptionStatus): boolean {
    return subscriptionStatus.subscription_status === 'active' || 
           subscriptionStatus.plan === 'free'
  }

  static getPlanDisplayName(planId: string): string {
    const plan = this.getPlanDetails(planId)
    return plan ? plan.name : 'Unknown Plan'
  }

  static getPlanPrice(planId: string): number {
    const plan = this.getPlanDetails(planId)
    return plan ? plan.price : 0
  }

  static getPlanFeatures(planId: string): string[] {
    const plan = this.getPlanDetails(planId)
    return plan ? plan.features : []
  }
} 