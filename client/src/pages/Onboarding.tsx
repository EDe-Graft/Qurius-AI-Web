import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import { CheckCircle, ArrowRight, Copy, Code, Settings, Palette, MessageCircle, CreditCard, AlertCircle } from "lucide-react"
import { CompanyService } from "@/services/companyService"
import { PaymentService } from "@/services/paymentService"
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

  // Check for success/failure URL parameters
  const [paymentStatus, setPaymentStatus] = useState<{
    type: 'success' | 'canceled' | null;
    sessionId?: string;
  }>({ type: null });

  // Get selected plan from sessionStorage on component mount
  React.useEffect(() => {
    const plan = sessionStorage.getItem('selectedPlan') || 'free'
    setSelectedPlan(plan)

    // Check URL parameters for payment status
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const canceled = urlParams.get('canceled');
    const sessionId = urlParams.get('session_id');

    if (success === 'true') {
      setPaymentStatus({ type: 'success', sessionId: sessionId || undefined });
      // Clear URL parameters after reading them
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (canceled === 'true') {
      setPaymentStatus({ type: 'canceled' });
      // Clear URL parameters after reading them
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [])

  const steps: OnboardingStep[] = [
    {
      id: "company-info",
      title: "Company Information",
      description: "Tell us about your business",
      icon: <Settings className="h-5 w-5" />,
      completed: false
    },
    {
      id: "customization",
      title: "Widget Customization",
      description: "Customize your chat widget",
      icon: <Palette className="h-5 w-5" />,
      completed: false
    },
    {
      id: "payment",
      title: "Payment Setup",
      description: "Choose your billing plan",
      icon: <CreditCard className="h-5 w-5" />,
      completed: false
    },
    {
      id: "integration",
      title: "Integration",
      description: "Add the widget to your website",
      icon: <Code className="h-5 w-5" />,
      completed: false
    },
    {
      id: "complete",
      title: "Complete Setup",
      description: "Test and launch your widget",
      icon: <CheckCircle className="h-5 w-5" />,
      completed: false
    }
  ]

  const handleCompanyInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
      setCurrentStep(4) // Move to complete step
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
        return <PaymentStep selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} onComplete={handleCompleteSetup} loading={loading} error={error} setCurrentStep={setCurrentStep} />
      case 3:
        return <IntegrationStep companyName={companyData.name} onCopy={copyIntegrationCode} onComplete={handleCompleteSetup} loading={loading} error={error} copySuccess={copySuccess} />
      case 4:
        return <CompleteStep companyName={companyData.name} paymentStatus={paymentStatus} />
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
            Welcome to Qurius AI
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
                      <div className="h-6 w-6">
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
                ← Previous
              </button>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Step {currentStep + 1} of {steps.length}
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
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Company Information
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
              Company Name *
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
              Industry
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
            Website URL
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
            Contact Email *
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
            Location
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
            Description
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
            {loading ? "Creating..." : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

function CustomizationStep({ onSubmit, loading, initialTheme }: any) {
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
        Customize Your Widget
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Default Theme Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Choose a Theme
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
              Primary Color
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
              Background Color
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
              Text Color
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
            Preview
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
            {loading ? "Saving..." : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

function PaymentStep({ selectedPlan, setSelectedPlan, loading, error, setCurrentStep }: {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  onComplete: () => void;
  loading: boolean;
  error: string;
  setCurrentStep: (step: number) => void;
}) {
  const plans = [
    { 
      id: 'free', 
      name: 'Free', 
      price: '$0', 
      features: [
        '1,000 messages/month',
        'Basic customization',
        'Email support',
        'Standard FAQ templates'
      ] 
    },
    { 
      id: 'starter', 
      name: 'Starter', 
      price: '$29/month', 
      features: [
        '10,000 messages/month',
        'Advanced customization',
        'Priority support',
        'Analytics dashboard',
        'Custom FAQ import'
      ] 
    },
    { 
      id: 'pro', 
      name: 'Pro', 
      price: '$99/month', 
      features: [
        'Unlimited messages',
        'White-label options',
        '24/7 phone support',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ] 
    }
  ]

  // const selectedPlanDetails = plans.find(p => p.id === selectedPlan)

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Choose Your Billing Plan
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col justify-between p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ${
              selectedPlan === plan.id
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                : "hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {plan.price}
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSelectedPlan(plan.id)
                // Save plan to sessionStorage
                sessionStorage.setItem('selectedPlan', plan.id)
                console.log('💳 PaymentStep: Selected plan:', plan.id)
                console.log('💳 PaymentStep: Saved to sessionStorage:', sessionStorage.getItem('selectedPlan'))
                // Advance to next step instead of completing setup
                setCurrentStep(3) // Go to IntegrationStep
              }}
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Select Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntegrationStep({ companyName, onCopy, onComplete, loading, error, copySuccess }: any) {
  const integrationCode = `<script src="https://qurius-ai.vercel.app/embed.js" data-company="${companyName}" data-theme="light"></script>`

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Add Widget to Your Website
      </h2>

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

function CompleteStep({ companyName, paymentStatus }: any) {
  const selectedPlan = sessionStorage.getItem('selectedPlan') || 'free'
  const companyId = sessionStorage.getItem('companyId') || ''
  const customerEmail = sessionStorage.getItem('customerEmail') || ''
  
  // Debug: Log the plan values
  console.log('🔍 CompleteStep Debug:')
  console.log('selectedPlan from sessionStorage:', selectedPlan)
  console.log('companyId:', companyId)
  console.log('customerEmail:', customerEmail)
  console.log('selectedPlan !== "free":', selectedPlan !== 'free')

  const handlePayment = async () => {
    if (selectedPlan === 'free') {
      // Free plan - no payment needed
      return
    }

    try {
      await PaymentService.redirectToCheckout({
        companyId,
        planId: selectedPlan,
        customerEmail,
        companyName
      })
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment setup failed. Please try again.')
    }
  }

  // Show payment success message
  if (paymentStatus.type === 'success') {
    return (
      <div className="text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Payment Successful! 🎉
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Your subscription has been activated successfully.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
          <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">
            ✅ Payment Completed
          </h3>
          <p className="text-green-800 dark:text-green-200 text-sm">
            Your payment has been processed successfully. Your subscription is now active and all features are unlocked.
            {paymentStatus.sessionId && (
              <span className="block mt-2 text-xs">
                Session ID: {paymentStatus.sessionId}
              </span>
            )}
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.location.href = "/admin"}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go to Dashboard
          </button>
          
          <button
            onClick={() => window.open("https://qurius-ai.vercel.app/demo", "_blank")}
            className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Test Widget
          </button>
        </div>
      </div>
    )
  }

  // Show payment cancellation message
  if (paymentStatus.type === 'canceled') {
    return (
      <div className="text-center">
        <div className="mb-6">
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Payment Cancelled
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Your payment was cancelled. You can try again or continue with the free plan.
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
          <h3 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
            ⚠️ Payment Not Completed
          </h3>
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            Your payment was cancelled. You can try the payment again or continue with limited features on the free plan.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.location.href = "/admin"}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go to Dashboard
          </button>
          
          <button
            onClick={() => window.open("https://qurius-ai.vercel.app/demo", "_blank")}
            className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Test Widget
          </button>

          {selectedPlan !== 'free' && (
            <button
              onClick={handlePayment}
              className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Try Payment Again
            </button>
          )}
        </div>
      </div>
    )
  }

  // Default complete step (no payment status)
  return (
    <div className="text-center">
      <div className="mb-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Setup Complete!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Your AI chat widget is ready to use.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
        <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">
          🎉 Welcome to Qurius AI!
        </h3>
        <p className="text-green-800 dark:text-green-200 text-sm">
          Your company "{companyName}" has been successfully registered. 
          The chat widget is now active and ready to help your customers.
        </p>
      </div>

      {selectedPlan !== 'free' && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
            💳 Complete Your Subscription
          </h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
            You've selected the <strong>{PaymentService.getPlanDisplayName(selectedPlan)}</strong> ({PaymentService.getPlanPrice(selectedPlan) > 0 ? `$${PaymentService.getPlanPrice(selectedPlan)}/month` : 'Free'}). 
            Complete your payment to unlock all features and start using your AI chat widget.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Plan Features:</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              {PaymentService.getPlanFeatures(selectedPlan).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={() => window.location.href = "/admin"}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Dashboard
        </button>
        
        <button
          onClick={() => window.open("https://qurius-ai.vercel.app/demo", "_blank")}
          className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Test Widget
        </button>

        {selectedPlan !== 'free' && (
          <button
            onClick={handlePayment}
            className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 font-medium"
          >
            💳 Complete Payment
          </button>
        )}
      </div>
    </div>
  )
} 