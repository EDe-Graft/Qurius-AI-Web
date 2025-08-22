import { useState, useEffect } from 'react';
import { AlertTriangle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  type?: 'danger' | 'warning' | 'info'
}

export function ConfirmDialog({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = 'danger'
}: ConfirmDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Handle click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Scroll to top when modal opens with loading screen
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Hide loading screen after scroll animation completes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust timing as needed
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null

  const getIcon = () => {
    switch (type) {
      case 'danger':
        return <Trash2 className="h-6 w-6 text-red-600" />
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-yellow-600" />
      default:
        return <AlertTriangle className="h-6 w-6 text-blue-600" />
    }
  }

  const getButtonStyle = () => {
    switch (type) {
      case 'danger':
        return "bg-red-600 hover:bg-red-700 text-white"
      case 'warning':
        return "bg-yellow-600 hover:bg-yellow-700 text-white"
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white"
    }
  }

  return (
    <>
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-[60]">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mt-50 flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Loading...</p>
          </div>
        </div>
      )}
      
      <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-[60] p-2 sm:p-4" onClick={handleBackdropClick}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto my-20 sm:my-8">
          {/* Header */}
          <div className="flex items-center space-x-3 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            {getIcon()}
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {message}
            </p>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-3 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              {cancelText}
            </Button>
            <Button
              onClick={() => {
                onConfirm()
                onClose()
              }}
              className={`w-full sm:w-auto ${getButtonStyle()}`}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
} 