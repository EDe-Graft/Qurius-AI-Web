import { useState, useEffect } from 'react';
import { X, Bell, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NotificationBannerProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  type?: 'info' | 'success' | 'warning' | 'error';
  autoDismiss?: boolean;
  dismissDelay?: number;
}

export function NotificationBanner({
  message,
  actionLabel,
  onAction,
  onDismiss,
  type = 'info',
  autoDismiss = false,
  dismissDelay = 5000
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, dismissDelay);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissDelay, onDismiss]);

  if (!isVisible) return null;

  const getBannerStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />;
      case 'warning':
        return <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 dark:text-yellow-400" />;
      case 'error':
        return <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400" />;
      default:
        return <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-[70] border-b ${getBannerStyles()}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Mobile: Stacked layout */}
          <div className="flex-1 min-w-0 sm:hidden">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 mt-0.5">
                {getIcon()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 dark:text-gray-100 leading-tight">
                  {message}
                </p>
                {actionLabel && onAction && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onAction}
                    className="mt-1 h-6 text-xs px-2"
                  >
                    {actionLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="hidden sm:flex items-center gap-3 flex-1">
            {getIcon()}
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {message}
            </p>
          </div>

          {/* Action buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            {actionLabel && onAction && (
              <Button
                variant="outline"
                size="sm"
                onClick={onAction}
                className="text-xs"
              >
                {actionLabel}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-6 w-6 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Dismiss button - Mobile only */}
          <div className="flex-shrink-0 sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-6 w-6 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 