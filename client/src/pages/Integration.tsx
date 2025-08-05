import { useState, useEffect } from "react"
import { CheckCircle, Copy, AlertCircle } from "lucide-react"
// import { useLanguage } from "@/context/LanguageContext"

export function Integration() {
//   const { t } = useLanguage()
  const [paymentStatus, setPaymentStatus] = useState<{
    type: 'success' | 'canceled' | null;
    sessionId?: string;
  }>({ type: null })
  const [copySuccess, setCopySuccess] = useState(false)
  const [companyName, setCompanyName] = useState("")

  useEffect(() => {
    // Read URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const success = urlParams.get('success')
    const canceled = urlParams.get('canceled')
    const sessionId = urlParams.get('session_id')

    if (success === 'true') {
      setPaymentStatus({ type: 'success', sessionId: sessionId || undefined })
      // Get company name from sessionStorage
      const storedCompanyName = sessionStorage.getItem('companyName') || 'Your Company'
      setCompanyName(storedCompanyName)
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname)
    } else if (canceled === 'true') {
      setPaymentStatus({ type: 'canceled' })
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const copyIntegrationCode = async () => {
    const code = `<script src="https://qurius-ai.vercel.app/embed.js" data-company="${companyName}" data-theme="light"></script>`
    
    try {
      await navigator.clipboard.writeText(code)
      setCopySuccess(true)
      
      setTimeout(() => {
        setCopySuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      
      setCopySuccess(true)
      setTimeout(() => {
        setCopySuccess(false)
      }, 3000)
    }
  }

  // Show payment success message
  if (paymentStatus.type === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto py-6 md:py-8 px-4 sm:px-6 lg:px-8 pt-15">
          <div className="text-center mb-6 md:mb-8">
            <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Payment Successful! 🎉
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 px-4 md:px-0">
              Your subscription is now active. Here's how to integrate your AI chat widget.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-8">
            <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-sm md:text-base text-green-800 dark:text-green-200 font-medium">
                  Payment Successful! Your subscription is now active.
                </span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 md:mb-3">
                  Integration Code
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                  Copy and paste this code into your website's HTML, just before the closing &lt;/body&gt; tag.
                </p>
                
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-700 p-3 md:p-4 rounded-lg overflow-x-auto text-xs md:text-sm">
                    <code className="text-gray-800 dark:text-gray-200">
                      {`<script src="https://qurius-ai.vercel.app/embed.js" data-company="${companyName}" data-theme="light"></script>`}
                    </code>
                  </pre>
                  <button
                    onClick={copyIntegrationCode}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 min-h-[44px] md:min-h-[40px]"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                
                {copySuccess && (
                  <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                      <span className="text-sm text-green-800 dark:text-green-200">
                        Code copied to clipboard successfully!
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 md:p-4">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-sm md:text-base">
                  📋 Instructions
                </h4>
                <ol className="text-xs md:text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>1. Copy the code above</li>
                  <li>2. Open your website's HTML file</li>
                  <li>3. Paste the code before the &lt;/body&gt; tag</li>
                  <li>4. Save and upload your website</li>
                  <li>5. Test the widget on your live site</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <button
                  onClick={() => window.location.href = "/admin"}
                  className="w-full sm:w-auto px-4 md:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm md:text-base min-h-[48px] md:min-h-[44px]"
                >
                  Go to Dashboard
                </button>
                
                <button
                  onClick={() => window.open("https://qurius-ai.vercel.app/demo", "_blank")}
                  className="w-full sm:w-auto px-4 md:px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm md:text-base min-h-[48px] md:min-h-[44px]"
                >
                  Test Widget
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show payment cancellation message
  if (paymentStatus.type === 'canceled') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto py-6 md:py-8 px-4 sm:px-6 lg:px-8 pt-15">
          <div className="text-center mb-6 md:mb-8">
            <AlertCircle className="h-12 w-12 md:h-16 md:w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Payment Cancelled
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 px-4 md:px-0">
              Your payment was cancelled. You can try again or continue with the free plan.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-8">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
              <h3 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2 text-sm md:text-base">
                ⚠️ Payment Not Completed
              </h3>
              <p className="text-yellow-800 dark:text-yellow-200 text-xs md:text-sm">
                Your payment was cancelled. You can try the payment again or continue with limited features on the free plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = "/onboarding"}
                className="w-full sm:w-auto px-4 md:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm md:text-base min-h-[48px] md:min-h-[44px]"
              >
                Try Payment Again
              </button>
              
              <button
                onClick={() => window.location.href = "/admin"}
                className="w-full sm:w-auto px-4 md:px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm md:text-base min-h-[48px] md:min-h-[44px]"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default state (no payment status)
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-6 md:py-8 px-4 sm:px-6 lg:px-8 pt-15">
        <div className="text-center mb-6 md:mb-8">
          <AlertCircle className="h-12 w-12 md:h-16 md:w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Integration Page
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-3 md:mb-4 px-4 md:px-0">
            This page handles payment success and cancellation redirects from Stripe.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 px-4 md:px-0">
            If you're seeing this page, you may have visited it directly without completing a payment.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-8">
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              To get started with your AI chat widget, please complete the onboarding process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = "/onboarding"}
                className="w-full sm:w-auto px-4 md:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm md:text-base min-h-[48px] md:min-h-[44px]"
              >
                Start Onboarding
              </button>
              
              <button
                onClick={() => window.location.href = "/"}
                className="w-full sm:w-auto px-4 md:px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm md:text-base min-h-[48px] md:min-h-[44px]"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 