import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'
import { CrawlerInterface } from '@/components/admin/CrawlerInterface'

interface CrawlerModalProps {
  isOpen: boolean
  onClose: () => void
  companyId: string
  companyName: string
}

export function CrawlerModal({ isOpen, onClose, companyId, companyName }: CrawlerModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Handle click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // const handleEnter = (e: KeyboardEvent) => {
    //   if (e.key === 'Enter') {
    //     // You can add specific Enter key functionality here
    //     // For now, we'll just prevent default behavior
    //     e.preventDefault();
    //   }
    // };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // document.addEventListener('keydown', handleEnter);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        // document.removeEventListener('keydown', handleEnter);
      };
    }
  }, [isOpen, onClose]);

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
      
      <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-50 p-2 sm:p-4 overflow-y-auto" onClick={handleBackdropClick}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-4xl mx-auto my-10 sm:my-18 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Content Processor - {companyName}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Crawl websites or upload documents to automatically generate FAQs
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:text-red-500 flex-shrink-0"
              >
                ✕
              </Button>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <CrawlerInterface
              companyId={companyId}
              companyName={companyName}
            />
          </div>
        </div>
      </div>
    </>
  )
} 