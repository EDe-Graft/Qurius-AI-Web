import { useState } from "react"
import { CheckCircle, ArrowRight, Copy, Code, Settings, Palette, MessageCircle, CreditCard, AlertCircle } from "lucide-react"
import { CompanyService } from "@/services/companyService"
import { useLanguage } from "@/context/LanguageContext"
import { PricingCard } from "@/components/custom/PricingCard"
import React from "react"

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  completed: boolean
}

export function Onboarding() {
//   const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState<string>('free')
  const [companyData, setCompanyData] = useState({
    name: "",
    industry: "",
    website: "",
    email: "",
    description: "",
    location: "",
    id: ""
  })
  const [themeData, setThemeData] = useState({
    primaryColor: "#3B82F6",
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937"
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copySuccess, setCopySuccess] = useState(false)
  const { t } = useLanguage()

  // Get selected plan from sessionStorage on component mount
  React.useEffect(() => {
    const plan = sessionStorage.getItem('selectedPlan') || 'free'
    setSelectedPlan(plan)

    // Check URL parameters for payment status
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const canceled = urlParams.get('canceled');

    if (success === 'true') {
      // Clear URL parameters after reading them
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (canceled === 'true') {
      // Clear URL parameters after reading them
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [])

  const steps: OnboardingStep[] = [
    {
      id: "company-info",
      title: t('onboarding.companyInfo'),
      description: "Tell us about your business",
      icon: <Settings className="h-6 w-6" />,
      completed: false
    },
    {
      id: "customization",
      title: t('onboarding.customization'),
      description: "Customize your chat widget",
      icon: <Palette className="h-6 w-6" />,
      completed: false
    },
    {
      id: "payment",
      title: t('onboarding.payment'),
      description: "Choose your billing plan",
      icon: <CreditCard className="h-6 w-6" />,
      completed: false
    },
    {
      id: "integration",
      title: t('onboarding.integration'),
      description: "Add the widget to your website",
      icon: <Code className="h-6 w-6" />,
      completed: false
    }
  ]

  const handleCompanyInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store company name in sessionStorage for payment flow
    sessionStorage.setItem('companyName', companyData.name)
    setCurrentStep(1)
  }

  const handleCustomizationSubmit = (theme: any) => {
    setThemeData(theme)
    setCurrentStep(2)
  }

  const handleCompleteSetup = async () => {
    setLoading(true)
    setError("")

    try {
      const newCompany = await CompanyService.createCompany({
        ...companyData,
        theme: themeData,
        logo_url: "",
        created_at: new Date().toISOString(),
        plan: selectedPlan // Add the selected plan to company data
      })

      // Store plan information for payment processing
      sessionStorage.setItem('selectedPlan', selectedPlan)
      sessionStorage.setItem('companyId', newCompany.id || "")
      sessionStorage.setItem('customerEmail', companyData.email) // Add customer email to sessionStorage

      setCompanyData(prev => ({ ...prev, id: newCompany.id || "" }))
      setCurrentStep(3) // Move to complete step
    } catch (err: any) {
      setError(err.message || "Failed to create company")
    } finally {
      setLoading(false)
    }
  }

  const copyIntegrationCode = async () => {
    const code = `
    <script src="https://qurius-ai.vercel.app/embed.js" data-company="${companyData.name}" data-theme="light"></script>`
    
    try {
      await navigator.clipboard.writeText(code)
      setCopySuccess(true)
      
      // Reset success message after 3 seconds
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <CompanyInfoStep companyData={companyData} setCompanyData={setCompanyData} onSubmit={handleCompanyInfoSubmit} loading={loading} error={error} />
      case 1:
        return <CustomizationStep onSubmit={handleCustomizationSubmit} loading={loading} initialTheme={themeData} />
      case 2:
        return <PaymentStep selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setCurrentStep={setCurrentStep} companyData={companyData} themeData={themeData} />
      case 3:
        return <IntegrationStep companyName={companyData.name} onCopy={copyIntegrationCode} onComplete={handleCompleteSetup} loading={loading} error={error} copySuccess={copySuccess} />
      default:
        return null
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // const goToNextStep = () => {
  //   if (currentStep < steps.length - 1) {
  //     setCurrentStep(currentStep + 1)
  //   }
  // }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pt-15">
        {/* Header */}
        <div className="text-center mb-8 mt-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {t('onboarding.welcome')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Set up your AI chat widget in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          {/* Step Icons with Connecting Lines */}
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    index <= currentStep 
                      ? "border-blue-600 bg-blue-600 text-white" 
                      : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <div className="flex items-center justify-center h-6 w-6">
                        {step.icon}
                      </div>
                    )}
                  </div>
                  
                  {/* Connecting line to next step */}
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 mt-2 ${
                      index < currentStep ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                    }`} />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Step Titles and Descriptions */}
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 text-center px-2">
                <h3 className={`text-sm font-medium mb-1 ${
                  index <= currentStep 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-500 dark:text-gray-400"
                }`}>
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={goToPreviousStep}
                disabled={currentStep === 0}
                className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← {t('common.previous')}
              </button>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {t('common.step')} {currentStep + 1} of {steps.length}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Step Components
function CompanyInfoStep({ companyData, setCompanyData, onSubmit, loading, error }: any) {
  const { t } = useLanguage()
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {t('onboarding.companyInfo')}
      </h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('onboarding.companyName')} *
            </label>
            <input
              type="text"
              required
              value={companyData.name}
              onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 pr-2">
              {t('onboarding.industry')}
            </label>
            <select
              value={companyData.industry}
              onChange={(e) => setCompanyData({ ...companyData, industry: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="">Select industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.website')}
          </label>
          <input
            type="url"
            value={companyData.website}
            onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="https://yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.email')} *
          </label>
          <input
            type="email"
            required
            value={companyData.email}
            onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="contact@yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.location')}
          </label>
          <input
            type="text"
            value={companyData.location}
            onChange={(e) => setCompanyData({ ...companyData, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="e.g., New York, NY"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.description')}
          </label>
          <textarea
            value={companyData.description}
            onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="Tell us about your business..."
          />
        </div>



        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t('common.loading') : t('common.next')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

function CustomizationStep({ onSubmit, loading, initialTheme }: any) {
  const { t } = useLanguage()
  const [theme, setTheme] = useState(initialTheme || {
    primaryColor: "#3B82F6",
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937"
  })

  const defaultThemes = [
    { name: "Blue", primaryColor: "#3B82F6", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Green", primaryColor: "#10B981", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Purple", primaryColor: "#8B5CF6", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Orange", primaryColor: "#F59E0B", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Red", primaryColor: "#EF4444", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Teal", primaryColor: "#14B8A6", backgroundColor: "#FFFFFF", textColor: "#1F2937" }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(theme)
  }

  const applyDefaultTheme = (defaultTheme: any) => {
    setTheme({
      primaryColor: defaultTheme.primaryColor,
      backgroundColor: defaultTheme.backgroundColor,
      textColor: defaultTheme.textColor
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {t('onboarding.customization')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Default Theme Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t('onboarding.chooseTheme')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {defaultThemes.map((defaultTheme, index) => (
              <button
                key={index}
                type="button"
                onClick={() => applyDefaultTheme(defaultTheme)}
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: defaultTheme.primaryColor }}
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {defaultTheme.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('onboarding.primaryColor')}
            </label>
            <input
              type="color"
              value={theme.primaryColor}
              onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
              className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('onboarding.backgroundColor')}
            </label>
            <input
              type="color"
              value={theme.backgroundColor}
              onChange={(e) => setTheme({ ...theme, backgroundColor: e.target.value })}
              className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('onboarding.textColor')}
            </label>
            <input
              type="color"
              value={theme.textColor}
              onChange={(e) => setTheme({ ...theme, textColor: e.target.value })}
              className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t('onboarding.preview')}
          </h3>
          <div 
            className="w-full h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center"
            style={{ backgroundColor: theme.backgroundColor }}
          >
            <div className="text-center">
              <MessageCircle 
                className="h-8 w-8 mx-auto mb-2" 
                style={{ color: theme.primaryColor }}
              />
              <p style={{ color: theme.textColor }} className="text-sm">
                Chat Widget Preview
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t('common.loading') : t('common.next')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

function PaymentStep({ selectedPlan, setSelectedPlan, setCurrentStep, companyData, themeData }: {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  setCurrentStep: (step: number) => void;
  companyData: { 
    name: string; 
    email: string; 
    industry: string;
    website: string;
    description: string;
    location: string;
  };
  themeData: { primaryColor: string; backgroundColor: string; textColor: string; };
}) {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  console.log('selectedPlan', selectedPlan, loading)
  const handlePlanSelection = async (plan: string) => {
    setLoading(true)
    setError("")
    
    try {
      setSelectedPlan(plan)
      sessionStorage.setItem('selectedPlan', plan)
      
      if (plan === 'free') {
        // Free plan - no payment needed, go directly to integration
        setCurrentStep(3) // Go to IntegrationStep
        return
      }
      
      // For paid plans, store company data in sessionStorage and redirect to payment
      // Company will be created only after successful payment
      sessionStorage.setItem('pendingCompanyData', JSON.stringify({
        name: companyData.name,
        industry: companyData.industry,
        website: companyData.website,
        email: companyData.email,
        description: companyData.description,
        location: companyData.location,
        theme: themeData,
        plan: plan
      }))
      
      console.log('💳 Triggering payment for plan:', plan)
      console.log('💳 Company data stored in sessionStorage')
      
      const response = await fetch(`${process.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api/payments/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: companyData.name,
          customerEmail: companyData.email,
          planId: 'test'
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Payment setup failed')
      }
      
      const { url } = await response.json()
      
      // Redirect to Stripe checkout
      window.location.href = url
      
    } catch (err: any) {
      console.error('Payment error:', err)
      setError(err.message || 'Payment setup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-gray-100 mb-6">
        {t('onboarding.choosePlan')}
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <PricingCard
          plan="free"
          price="$0"
          features={[
            "500 messages/month",
            t('plans.basicCustomization'),
            t('plans.emailSupport'),
            t('plans.standardFaqTemplates')
          ]}
          onSelect={handlePlanSelection}
        />

        {/* Starter Plan */}
        <PricingCard
          plan="starter"
          price="$29"
          features={[
            "10,000 messages/month",
            t('plans.basicCustomization'),
            t('plans.prioritySupport'),
            t('plans.analyticsDashboard'),
            t('plans.customFaqImport')
          ]}
          onSelect={handlePlanSelection}
        />

        {/* Pro Plan */}
        <PricingCard
          plan="pro"
          price="$99"
          features={[
            t('plans.unlimitedMessages'),
            t('plans.whiteLabelOptions'),
            t('plans.phoneSupport'),
            t('plans.advancedAnalytics'),
            t('plans.apiAccess'),
            t('plans.customIntegrations'),
            t('plans.multiLanguageSupport'),
            t('plans.autoLanguageDetection'),
            t('plans.translatedFaqTemplates'),
            t('plans.languageSpecificCustomization'),
            t('plans.multiLanguageAnalytics'),
            t('plans.customLanguageSupport')
          ]}
          onSelect={handlePlanSelection}
          isPopular={true}
        />
      </div>
    </div>
  )
}

function IntegrationStep({ companyName, onCopy, onComplete, loading, error, copySuccess }: any) {
  // const { t } = useLanguage()
  const selectedPlan = sessionStorage.getItem('selectedPlan') || 'free'
  const [paymentStatus, setPaymentStatus] = useState<{
    type: 'success' | 'canceled' | null;
    sessionId?: string;
  }>({ type: null });

  // Check for payment status on component mount
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const canceled = urlParams.get('canceled');

    if (success === 'true') {
      setPaymentStatus({ type: 'success', sessionId: undefined });
      // Clear URL parameters after reading them
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (canceled === 'true') {
      setPaymentStatus({ type: 'canceled' });
      // Clear URL parameters after reading them
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [])

  // For free plans, show integration immediately
  // For paid plans, only show after successful payment
  const shouldShowIntegration = selectedPlan === 'free' || paymentStatus.type === 'success'
  console.log('shouldShowIntegration', shouldShowIntegration)

  if (selectedPlan !== 'free' && paymentStatus.type !== 'success') {
    return (
      <div className="text-center">
        <div className="mb-6">
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Payment Required
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please complete your payment to access the integration code.
          </p>
        </div>

        {paymentStatus.type === 'canceled' && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <h3 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
              ⚠️ Payment Cancelled
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Your payment was cancelled. Please try again to access the integration code.
            </p>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={() => window.location.href = "/onboarding"}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Return to Payment
          </button>
        </div>
      </div>
    )
  }

  const integrationCode = `<script src="https://qurius-ai.vercel.app/embed.js" data-company="${companyName}" data-theme="light"></script>`

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Add Widget to Your Website
      </h2>

      {paymentStatus.type === 'success' && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-green-800 dark:text-green-200 font-medium">
              Payment Successful! Your subscription is now active.
            </span>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            Integration Code
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Copy and paste this code into your website's HTML, just before the closing &lt;/body&gt; tag.
          </p>
          
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-800 dark:text-gray-200">{integrationCode}</code>
            </pre>
            <button
              onClick={onCopy}
              className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
          
          {/* Copy Success Notification */}
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

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
            📋 Instructions
          </h4>
          <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>1. Copy the code above</li>
            <li>2. Open your website's HTML file</li>
            <li>3. Paste the code before the &lt;/body&gt; tag</li>
            <li>4. Save and upload your website</li>
            <li>5. Test the widget on your live site</li>
          </ol>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onComplete}
            disabled={loading}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Company..." : "Complete Setup"}
            <CheckCircle className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
} 