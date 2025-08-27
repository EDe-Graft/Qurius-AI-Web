import axios from 'axios';
import { config } from '@/lib/config';

export interface Notification {
  id: string;
  company_id: string;
  company_name: string;
  type: 'faq_approval' | 'crawl_completion' | 'error' | 'info';
  title: string;
  message: string;
  crawl_session_id?: string;
  read_status: boolean;
  read_by_super_admin?: boolean;
  read_by_company?: boolean;
  action_data?: any;
  created_at: string;
}

export interface CreateNotificationData {
  company_id: string;
  company_name: string;
  type: 'faq_approval' | 'crawl_completion' | 'error' | 'info';
  title: string;
  message: string;
  crawl_session_id?: string;
  action_data?: any;
}

class NotificationService {
  private BACKEND_URL = config.backendUrl;

  // Get notifications for a company
  async getNotifications(companyId: string, limit = 50, offset = 0): Promise<Notification[]> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/notifications/${companyId}`, {
        params: { limit, offset }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  }

  // Get all notifications for super admin
  async getAllNotifications(limit = 50, offset = 0): Promise<Notification[]> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/notifications/all`, {
        params: { limit, offset }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching all notifications:', error);
      throw error;
    }
  }

  // Get total unread count for super admin
  async getTotalUnreadCount(): Promise<number> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/notifications/all/unread-count`);
      return response.data.count;
    } catch (error) {
      console.error('Error fetching total unread count:', error);
      return 0;
    }
  }

  // Get unread notifications count
  async getUnreadCount(companyId: string): Promise<number> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/notifications/${companyId}/unread-count`);
      return response.data.count;
    } catch (error) {
      console.error('Error fetching unread count:', error);
      return 0;
    }
  }

  // Mark notification as read
  async markAsRead(notificationId: string, userType: 'super_admin' | 'company' = 'company'): Promise<boolean> {
    try {
      const response = await axios.put(`${this.BACKEND_URL}/api/notifications/${notificationId}/read`, {
        userType
      });
      return response.data.success;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      return false;
    }
  }

  // Mark all notifications as read for a company
  async markAllAsRead(companyId: string, userType: 'super_admin' | 'company' = 'company'): Promise<number> {
    try {
      const response = await axios.put(`${this.BACKEND_URL}/api/notifications/${companyId}/mark-all-read`, {
        userType
      });
      return response.data.updated_count;
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
      return 0;
    }
  }

  // Delete notification
  async deleteNotification(notificationId: string): Promise<boolean> {
    try {
      const response = await axios.delete(`${this.BACKEND_URL}/api/notifications/${notificationId}`);
      return response.data.success;
    } catch (error) {
      console.error('Error deleting notification:', error);
      return false;
    }
  }

  // Create notification (for service use)
  async createNotification(data: CreateNotificationData): Promise<Notification> {
    try {
      const response = await axios.post(`${this.BACKEND_URL}/api/notifications`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating notification:', error);
      throw error;
    }
  }

  // Get crawl session data for FAQ approval
  async getCrawlSessionData(sessionId: string): Promise<any> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/crawler/session/${sessionId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching crawl session data:', error);
      throw error;
    }
  }
}

export const notificationService = new NotificationService(); 