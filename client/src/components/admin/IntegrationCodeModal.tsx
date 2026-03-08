import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Copy, Check, RefreshCw } from 'lucide-react';
import axios from 'axios';
import { CompanyService } from '@/services/companyService';

// Get backend URL from environment
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface IntegrationCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyId: string;
  plan: string;
}

export function IntegrationCodeModal({ isOpen, onClose, companyId, plan }: IntegrationCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const [widgetKey, setWidgetKey] = useState<string | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [primaryColor, setPrimaryColor] = useState<string>('#6366f1'); // Default indigo

  // Handle click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  // Fetch company data to get primaryColor
  useEffect(() => {
    const fetchCompanyData = async () => {
      if (isOpen && companyId) {
        try {
          const company = await CompanyService.getCompanyById(companyId);
          if (company?.theme?.primaryColor) {
            setPrimaryColor(company.theme.primaryColor);
          }
        } catch (error) {
          console.error('Failed to fetch company data:', error);
        }
      }
    };

    fetchCompanyData();
  }, [isOpen, companyId]);

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

  const getIntegrationCode = () => {
    if (!widgetKey) {
      return '<!-- Click "Generate New Key" to get your widget integration code -->'
    }

    // All websites now use the iframe embed method
    return `<script src="https://qurius.app/widget-iframe-embed.js" data-id="${companyId}" data-key="${widgetKey}" data-plan="${plan}" data-theme="dark" data-primary-color="${primaryColor}"></script>`
  }

  const copyIntegrationCode = async () => {
    try {
      await navigator.clipboard.writeText(getIntegrationCode())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      alert('Failed to copy to clipboard. Please copy manually.')
    }
  }

  const regenerateKey = async () => {
    try {
      setIsRegenerating(true);
      const response = await axios.post(`${BACKEND_URL}/api/companies/${companyId}/regenerate-widget-key`, {
        planType: plan
      });
      if (response.data.success) {
        setWidgetKey(response.data.widgetKey);
      } else {
        throw new Error(response.data.error || 'Failed to generate key');
      }
    } catch (error) {
      console.error('Failed to regenerate key:', error);
      alert('Failed to generate new key. Please try again.');
    } finally {
      setIsRegenerating(false);
    }
  };

  // Reset widget key when modal is closed
  const handleClose = () => {
    setWidgetKey(null);
    onClose();
  };

  if (!isOpen) return null;

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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl mx-auto my-20 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start sm:items-center gap-3">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Integration Code
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Generate and copy your widget integration code
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-gray-400 hover:text-red-500 flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-4">
              {!widgetKey ? (
                <div className="flex justify-center mb-4">
                  <Button
                    onClick={regenerateKey}
                    disabled={isRegenerating}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  >
                    {isRegenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      'Generate New Key'
                    )}
                  </Button>
                </div>
              ) : (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 sm:p-4 mb-4">
                  <p className="text-xs sm:text-sm text-yellow-800 dark:text-yellow-200">
                    ⚠️ Copy this key now! For security reasons, it will not be shown again.
                  </p>
                </div>
              )}


              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {widgetKey ? 'Copy this code and paste it into your website\'s HTML' : 'Generate a new widget key to get your integration code'}
                </label>
                <div className="relative">
                  <textarea
                    value={getIntegrationCode()}
                    readOnly
                    className="w-full h-24 sm:h-32 pt-9 px-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-xs sm:text-sm text-gray-900 dark:text-gray-100 resize-none"
                  />
                  {widgetKey && (
                    <Button
                      onClick={copyIntegrationCode}
                      className="absolute top-1 right-1 sm:top-2 sm:right-2"
                      size="sm"
                      variant="outline"
                    >
                      {copied ? (
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                      ) : (
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
                <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                  📋 Instructions
                </h3>
                <ul className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Copy the code above</li>
                  <li>• Paste it into your website's HTML, preferably before the closing &lt;/body&gt; tag</li>
                  <li>• The widget will automatically appear on your website</li>
                  <li>• Make sure your website is accessible via HTTPS for the widget to work properly</li>
                  <li>• If you need to regenerate your key, any previous keys will stop working</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 