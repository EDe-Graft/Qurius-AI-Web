import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Copy, Check, RefreshCw, Monitor } from 'lucide-react';
import axios from 'axios';

// Get backend URL from environment
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface IntegrationCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  companyId: string;
  plan: string;
}

export function IntegrationCodeModal({ isOpen, onClose, companyName, companyId, plan }: IntegrationCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const [widgetKey, setWidgetKey] = useState<string | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWixUser, setIsWixUser] = useState(false);

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

  // Remove automatic Wix detection since users access this from admin page
  // Users will manually confirm if they're using Wix

  const getIntegrationCode = () => {
    if (!widgetKey) {
      return '<!-- Click "Generate New Key" to get your widget integration code -->'
    }

    if (isWixUser) {
      // Wix Iframe Embed (using iframe-embed.js)
      return `<script src="https://qurius.app/iframe-embed.js" data-company="${companyName}" data-id="${companyId}" data-key="${widgetKey}" data-plan="${plan}" data-theme="light"></script>`
    }

    // Standard embed for non-Wix users
    return `<script src="https://qurius.app/embed.js" data-company="${companyName}" data-id="${companyId}" data-key="${widgetKey}" data-plan="${plan}" data-theme="light"></script>`
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-[60]">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mt-50 flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Loading...</p>
          </div>
        </div>
      )}
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4 my-15">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Download className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Integration Code
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Generate and copy your widget integration code
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {!widgetKey ? (
              <div className="flex justify-center mb-4">
                <Button
                  onClick={regenerateKey}
                  disabled={isRegenerating}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
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
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  ⚠️ Copy this key now! For security reasons, it will not be shown again.
                </p>
              </div>
            )}

            {/* Wix User Confirmation */}
            {widgetKey && (
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                  🌐 Website Platform
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="not-wix"
                      name="platform"
                      checked={!isWixUser}
                      onChange={() => setIsWixUser(false)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="not-wix" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                      <strong>Standard Website</strong> - WordPress, Shopify, custom HTML, etc.
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="is-wix"
                      name="platform"
                      checked={isWixUser}
                      onChange={() => setIsWixUser(true)}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="is-wix" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                      <strong>Wix Website</strong> - Special integration options available
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Wix Integration Info */}
            {isWixUser && widgetKey && (
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">
                  🎯 Wix Integration Method
                </h3>
                <div className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>Iframe Embed</strong> - Uses iframe-embed.js for optimal Wix compatibility
                  </span>
                </div>
                <div className="mt-3 text-xs text-purple-700 dark:text-purple-300">
                  <p><strong>Features:</strong> Full React widget experience, hover effects, company theming, and seamless Wix integration</p>
                  <p><strong>Compatibility:</strong> Works with all Wix site types and custom domains</p>
                </div>
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
                  className="w-full h-32 pt-9 px-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm text-gray-900 dark:text-gray-100 resize-none"
                />
                {widgetKey && (
                  <Button
                    onClick={copyIntegrationCode}
                    className="absolute top-0 right-2"
                    size="sm"
                    variant="outline"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                📋 Instructions
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                {isWixUser ? (
                  <>
                    <li>• Copy the code above</li>
                    <li>• Paste it into your Wix site's Custom Code section</li>
                    <li>• Add to &lt;head&gt; or before &lt;/body&gt; tag</li>
                    <li>• The widget will automatically appear on your Wix site</li>
                    <li>• Features: hover effects, company theming, and seamless integration</li>
                    <li>• If you need to regenerate your key, any previous keys will stop working</li>
                  </>
                ) : (
                  <>
                    <li>• Copy the code above</li>
                    <li>• Paste it into your website's HTML, preferably before the closing &lt;/body&gt; tag</li>
                    <li>• The widget will automatically appear on your website</li>
                    <li>• Make sure your website is accessible via HTTPS for the widget to work properly</li>
                    <li>• If you need to regenerate your key, any previous keys will stop working</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
} 