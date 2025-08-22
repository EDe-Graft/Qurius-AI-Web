import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { notificationService, type Notification } from '@/services/notificationService';

interface NotificationAction {
  label: string;
  onClick: () => void;
}

interface NotificationItem {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: NotificationAction;
  crawl_session_id?: string;
}

interface NotificationContextType {
  notifications: NotificationItem[];
  unreadCount: number;
  isLoading: boolean;
  error: string | null;
  addNotification: (notification: Omit<NotificationItem, 'id' | 'timestamp'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  loadNotifications: (companyId: string) => Promise<void>;
  loadAllNotifications: () => Promise<void>;
  refreshNotifications: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentCompanyId, setCurrentCompanyId] = useState<string | null>(null);

  // Convert database notification to UI notification
  const convertNotification = (dbNotification: Notification): NotificationItem => {
    return {
      id: dbNotification.id,
      type: dbNotification.type === 'faq_approval' ? 'info' : 
            dbNotification.type === 'crawl_completion' ? 'success' : 
            dbNotification.type === 'error' ? 'error' : 'info',
      title: dbNotification.title,
      message: dbNotification.message,
      timestamp: new Date(dbNotification.created_at),
      read: dbNotification.read_status,
      crawl_session_id: dbNotification.crawl_session_id,
      action: dbNotification.type === 'faq_approval' ? {
        label: 'Review FAQs',
        onClick: () => {
          // This will be handled by the component that uses the context
          console.log('Review FAQs clicked for session:', dbNotification.crawl_session_id);
        }
      } : undefined
    };
  };

  // Load notifications from database
  const loadNotifications = useCallback(async (companyId: string) => {
    if (!companyId) return;
    
    setIsLoading(true);
    setError(null);
    setCurrentCompanyId(companyId);

    try {
      const [dbNotifications, unreadCount] = await Promise.all([
        notificationService.getNotifications(companyId),
        notificationService.getUnreadCount(companyId)
      ]);

      const convertedNotifications = dbNotifications.map(convertNotification);
      
      setNotifications(convertedNotifications);
      setUnreadCount(unreadCount);
    } catch (err: any) {
      console.error('Failed to load notifications:', err);
      setError(err.message || 'Failed to load notifications');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load all notifications for super admin
  const loadAllNotifications = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setCurrentCompanyId(null); // Indicates super admin mode

    try {
      const [dbNotifications, unreadCount] = await Promise.all([
        notificationService.getAllNotifications(),
        notificationService.getTotalUnreadCount()
      ]);

      const convertedNotifications = dbNotifications.map(convertNotification);
      
      setNotifications(convertedNotifications);
      setUnreadCount(unreadCount);
    } catch (err: any) {
      console.error('Failed to load all notifications:', err);
      setError(err.message || 'Failed to load all notifications');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Refresh notifications
  const refreshNotifications = useCallback(async () => {
    if (currentCompanyId) {
      await loadNotifications(currentCompanyId);
    } else {
      // Super admin mode - refresh all notifications
      await loadAllNotifications();
    }
  }, [currentCompanyId, loadNotifications, loadAllNotifications]);

  // Add notification (for immediate UI feedback)
  const addNotification = useCallback((notification: Omit<NotificationItem, 'id' | 'timestamp'>) => {
    const newNotification: NotificationItem = {
      ...notification,
      id: Date.now().toString(), // Temporary ID for immediate display
      timestamp: new Date()
    };

    setNotifications(prev => [newNotification, ...prev]);
    if (!notification.read) {
      setUnreadCount(prev => prev + 1);
    }
  }, []);

  // Mark notification as read
  const markAsRead = useCallback(async (id: string) => {
    try {
      const success = await notificationService.markAsRead(id);
      if (success) {
        setNotifications(prev => 
          prev.map(notification => 
            notification.id === id 
              ? { ...notification, read: true }
              : notification
          )
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
      }
    } catch (err: any) {
      console.error('Failed to mark notification as read:', err);
    }
  }, []);

  // Mark all notifications as read
  const markAllAsRead = useCallback(async () => {
    try {
      if (currentCompanyId) {
        // Company-specific mode
        const updatedCount = await notificationService.markAllAsRead(currentCompanyId);
        if (updatedCount > 0) {
          setNotifications(prev => 
            prev.map(notification => ({ ...notification, read: true }))
          );
          setUnreadCount(0);
        }
      } else {
        // Super admin mode - mark all notifications as read
        // For now, we'll mark them as read locally since we don't have a bulk API
        setNotifications(prev => 
          prev.map(notification => ({ ...notification, read: true }))
        );
        setUnreadCount(0);
      }
    } catch (err: any) {
      console.error('Failed to mark all notifications as read:', err);
    }
  }, [currentCompanyId]);

  // Remove notification
  const removeNotification = useCallback(async (id: string) => {
    try {
      const success = await notificationService.deleteNotification(id);
      if (success) {
        setNotifications(prev => {
          const notification = prev.find(n => n.id === id);
          const newNotifications = prev.filter(n => n.id !== id);
          if (notification && !notification.read) {
            setUnreadCount(prev => Math.max(0, prev - 1));
          }
          return newNotifications;
        });
      }
    } catch (err: any) {
      console.error('Failed to remove notification:', err);
    }
  }, []);

  // Auto-refresh notifications every 30 seconds
  useEffect(() => {
    if (!currentCompanyId) return;

    const interval = setInterval(() => {
      refreshNotifications();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentCompanyId, refreshNotifications]);

  const value: NotificationContextType = {
    notifications,
    unreadCount,
    isLoading,
    error,
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    loadNotifications,
    refreshNotifications,
    loadAllNotifications
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
} 