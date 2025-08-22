import axios from 'axios';

interface SubscriptionData {
  email: string;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  source?: string;
}

interface SubscriptionResponse {
  success: boolean;
  message: string;
  subscription?: {
    id: string;
    email: string;
    status: string;
    subscribed_at: string;
  };
}

class SubscriptionService {
  private BACKEND_URL: string;

  constructor() {
    this.BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  }

  /**
   * Validate email format
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Subscribe an email to the newsletter
   */
  async subscribeEmail(subscriptionData: SubscriptionData): Promise<SubscriptionResponse> {
    try {
      // Validate email format
      if (!this.validateEmail(subscriptionData.email)) {
        return {
          success: false,
          message: 'Please enter a valid email address.'
        };
      }

      const response = await axios.post(`${this.BACKEND_URL}/api/subscriptions/subscribe`, subscriptionData);
      
      return response.data;
    } catch (error: any) {
      console.error('Error subscribing email:', error);
      
      // Handle specific error cases
      if (error.response?.status === 409) {
        return {
          success: false,
          message: 'This email is already subscribed to our newsletter.'
        };
      } else if (error.response?.status === 400) {
        return {
          success: false,
          message: error.response.data.message || 'Invalid email address.'
        };
      } else if (error.response?.status === 500) {
        return {
          success: false,
          message: 'Server error. Please try again later.'
        };
      } else {
        return {
          success: false,
          message: 'Network error. Please check your connection and try again.'
        };
      }
    }
  }

  /**
   * Unsubscribe an email from the newsletter
   */
  async unsubscribeEmail(email: string): Promise<SubscriptionResponse> {
    try {
      const response = await axios.post(`${this.BACKEND_URL}/api/subscriptions/unsubscribe`, { email });
      
      return response.data;
    } catch (error: any) {
      console.error('Error unsubscribing email:', error);
      
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to unsubscribe. Please try again.'
      };
    }
  }

  /**
   * Get subscription status for an email
   */
  async getSubscriptionStatus(email: string): Promise<SubscriptionResponse> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/subscriptions/status/${encodeURIComponent(email)}`);
      
      return response.data;
    } catch (error: any) {
      console.error('Error getting subscription status:', error);
      
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to check subscription status.'
      };
    }
  }
}

export const subscriptionService = new SubscriptionService();
export default subscriptionService; 