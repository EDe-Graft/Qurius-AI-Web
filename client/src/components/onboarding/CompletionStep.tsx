import { CheckCircle } from "lucide-react"

interface CompletionStepProps {
  companyData: {
    name: string
    industry: string
    website: string
    email: string
    description: string
    location: string
  }
  onNavigateToAdmin: () => void
}

export function CompletionStep({ companyData, onNavigateToAdmin }: CompletionStepProps) {
  return (
    <div className="animate-fade-in-up animation-delay-2000 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Welcome to Qurius AI! 🎉
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          Your company <strong>{companyData.name}</strong> has been successfully created.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          What's Next?
        </h3>
        <div className="space-y-3 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Access Your Admin Dashboard</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Manage your chat widget, view analytics, and customize settings</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">2</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Add Your FAQs</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Import or manually add frequently asked questions for your AI assistant</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">3</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Integrate the Widget</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Get your integration code and add the chat widget to your website</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={onNavigateToAdmin}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
        >
          Go to Admin Dashboard
        </button>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          You'll receive a welcome email with login instructions shortly.
        </p>
      </div>
    </div>
  )
} 