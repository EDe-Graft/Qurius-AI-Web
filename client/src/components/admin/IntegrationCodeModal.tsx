import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Copy, Check } from 'lucide-react';

interface IntegrationCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
}

export function IntegrationCodeModal({ isOpen, onClose, companyName }: IntegrationCodeModalProps) {
  const [copied, setCopied] = useState(false);

  const getIntegrationCode = () => {
    return `<script src="https://qurius.ai.vercel.app/embed.js" data-company="${companyName}"></script>`
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Download className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Integration Code
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Copy this code and paste it into your website's HTML
              </label>
              <div className="relative">
                <textarea
                  value={getIntegrationCode()}
                  readOnly
                  className="w-full h-32 pt-9 px-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm text-gray-900 dark:text-gray-100 resize-none"
                />
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
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                📋 Instructions
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Copy the code above</li>
                <li>• Paste it into your website's HTML, preferably before the closing &lt;/body&gt; tag</li>
                <li>• The widget will automatically appear on your website</li>
                <li>• Make sure your website is accessible via HTTPS for the widget to work properly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 