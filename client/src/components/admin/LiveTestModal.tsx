import { useState, useEffect } from 'react'
import { X, Play, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ChatInterface } from '@/components/custom/ChatInterface'
import { useTheme } from '@/context/useThemeContext'

interface Company {
  id?: string
  name: string
  domain?: string
  website?: string
  contact_email?: string
  admin_email?: string
  location?: string
  industry?: string
  description?: string
  theme?: any
  plan?: string
  widget_key_hash?: string
  status?: string
}

interface LiveTestModalProps {
  isOpen: boolean
  onClose: () => void
  companies: Company[]
  selectedCompanyId?: string
}

export function LiveTestModal({ isOpen, onClose, companies, selectedCompanyId }: LiveTestModalProps) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [isChatMinimized, setIsChatMinimized] = useState(true)
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()

  useEffect(() => {
    if (isOpen && companies.length > 0) {
      const company = selectedCompanyId 
        ? companies.find(c => c.id === selectedCompanyId) 
        : companies[0]
      setSelectedCompany(company || companies[0])
    }
  }, [isOpen, companies, selectedCompanyId])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleCompanyChange = (companyId: string) => {
    const company = companies.find(c => c.id === companyId)
    setSelectedCompany(company || null)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-1 sm:p-4">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-7xl h-[95vh] sm:h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-6 border-b border-gray-200 dark:border-gray-700 space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <Play className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
                Live Test Environment
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Test your AI assistant on a sample website
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-3">
            <div className="flex items-center space-x-2">
              <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Company:
              </label>
              <select
                value={selectedCompany?.id || ''}
                onChange={(e) => handleCompanyChange(e.target.value)}
                className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-xs sm:text-sm min-w-0"
              >
                {companies.map((company) => (
                  <option key={company.id || ''} value={company.id || ''}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 p-0"
            >
              {defaultTheme === "dark" ? (
                <Sun className="h-3 w-3 sm:h-4 sm:w-4" />
              ) : (
                <Moon className="h-3 w-3 sm:h-4 sm:w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-red-500 dark:hover:bg-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Test Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 px-3 py-2">
          <p className="text-xs sm:text-sm text-yellow-800 dark:text-yellow-200 text-center font-medium">
            🧪 Live Test Environment - This is a simulated website for testing AI assistants
          </p>
        </div>

        {/* Live Test Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            {/* Demo content similar to Demo.tsx */}
            <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 animate-fade-in-up animation-delay-2000">
              <div className="max-w-4xl mx-auto mt-4 sm:mt-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 mt-4 sm:mt-10 px-2 sm:px-0">
                  Professional Chat Interface Demo
                </h1>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8 mx-1 sm:mx-2 md:mx-0">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 md:mb-4">
                    Company Website Content
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    This is a demonstration of how the chat interface would appear when embedded in a professional company website. 
                    It is shown here with {selectedCompany?.name || 'Sample Company'}. The chat widget is positioned in the bottom-right corner 
                    and can be minimized when not in use.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4">
                    Key features include:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2 pl-2 md:pl-0">
                    <li>Modern, professional design that matches company branding</li>
                    <li>Light and dark theme support with smooth transitions</li>
                    <li>Responsive design that works on all devices</li>
                    <li>ChatGPT-style message layout with user messages on the right</li>
                    <li>Typing indicators and smooth animations</li>
                    <li>Minimizable interface to reduce screen clutter</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 md:p-6 mx-1 sm:mx-2 md:mx-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 md:mb-4">
                    Try the Chat Interface
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    Click the chat button in the bottom-right corner to start a conversation. You can toggle between light and dark themes, 
                    minimize the chat, and experience the smooth, professional interface.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm sm:text-base">
                      Current Test Company: {selectedCompany?.name || 'Sample Company'}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">
                      Website: {selectedCompany?.website || 'N/A'} | 
                      Email: {selectedCompany?.contact_email || selectedCompany?.admin_email || 'N/A'} | 
                      Plan: {selectedCompany?.plan || 'free'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        {selectedCompany && (
          <ChatInterface
            key={selectedCompany.id || 'default'} // Force re-render when company changes
            defaultTheme={defaultTheme}
            toggleTheme={toggleTheme}
            isMinimized={isChatMinimized}
            onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
            companyData={{
              ...selectedCompany,
              plan: selectedCompany.plan || 'free',
              status: selectedCompany.status || 'active'
            }}
            isThemeChanging={isThemeChanging}
          />
        )}
      </div>
    </div>
  )
} 