import { useState } from "react"
import { CheckCircle, ArrowRight, Settings, Palette, MessageCircle, CreditCard } from "lucide-react"
import { CompanyService } from "@/services/companyService"
import { useLanguage } from "@/context/LanguageContext"
import { PricingCard } from "@/components/custom/PricingCard"
import React from "react"
import axios from "axios"

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
  const { t } = useLanguage()

  // Get selected plan from sessionStorage on component mount
  React.useEffect(() => {
    const plan = sessionStorage.getItem('selectedPlan') || 'free'
    setSelectedPlan(plan)
  }, [])

  const steps: OnboardingStep[] = [
    {
      id: "company-info",
      title: t('onboarding.companyInfo'),
      description: "Tell us about your business",
      icon: <Settings className="h-5 w-5 md:h-6 md:w-6" />,
      completed: false
    },
    {
      id: "customization",
      title: t('onboarding.customization'),
      description: "Customize your chat widget",
      icon: <Palette className="h-5 w-5 md:h-6 md:w-6" />,
      completed: false
    },
    {
      id: "payment",
      title: t('onboarding.payment'),
      description: "Choose your billing plan",
      icon: <CreditCard className="h-5 w-5 md:h-6 md:w-6" />,
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <CompanyInfoStep companyData={companyData} setCompanyData={setCompanyData} onSubmit={handleCompanyInfoSubmit} loading={loading} error={error} />
      case 1:
        return <CustomizationStep onSubmit={handleCustomizationSubmit} loading={loading} initialTheme={themeData} />
      case 2:
        return <PaymentStep selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} companyData={companyData} themeData={themeData} onComplete={handleCompleteSetup} />
      default:
        return null
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-6 md:py-8 px-4 sm:px-6 lg:px-4 pt-15">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 mt-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {t('onboarding.welcome')}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 px-4 md:px-0">
            Set up your AI chat widget in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-6 md:mb-8">
          {/* Step Icons with Connecting Lines */}
          <div className="flex items-start justify-between mb-4 md:mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 shrink-0 ${
                    index <= currentStep 
                      ? "border-blue-600 bg-blue-600 text-white" 
                      : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                    ) : (
                      <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
                        {step.icon}
                      </div>
                    )}
                  </div>
                  
                  {/* Connecting line to next step */}
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-1 md:mx-2 mt-2 ${
                      index < currentStep ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                    }`} />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Step Titles and Descriptions */}
          <div className="flex justify-around gap-2 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col justify-between text-center min-h-[3rem] ">
                <h3 className={`text-xs md:text-sm font-medium mb-2 leading-tight ${
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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-8">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          {currentStep < steps.length && (
            <div className="flex justify-between mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={goToPreviousStep}
                disabled={currentStep === 0}
                className="flex items-center px-3 md:px-4 py-2 text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] md:min-h-[40px]"
              >
                ← {t('common.previous')}
              </button>
              
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
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
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
        {t('onboarding.companyInfo')}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 md:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm md:text-base text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('onboarding.companyName')} *
            </label>
            <input
              type="text"
              required
              value={companyData.name}
              onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
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
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
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
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
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
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
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
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
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
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base"
            placeholder="Tell us about your business..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base min-h-[44px] md:min-h-[40px]"
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
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
        {t('onboarding.customization')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors min-h-[44px] md:min-h-[40px]"
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: defaultTheme.primaryColor }}
                  />
                  <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {defaultTheme.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
            className="w-full h-24 md:h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center"
            style={{ backgroundColor: theme.backgroundColor }}
          >
            <div className="text-center">
              <MessageCircle 
                className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2" 
                style={{ color: theme.primaryColor }}
              />
              <p style={{ color: theme.textColor }} className="text-xs md:text-sm">
                Chat Widget Preview
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base min-h-[44px] md:min-h-[40px]"
          >
            {loading ? t('common.loading') : t('common.next')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

function PaymentStep({ selectedPlan, setSelectedPlan, companyData, themeData, onComplete }: {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  companyData: { 
    name: string; 
    email: string; 
    industry: string;
    website: string;
    description: string;
    location: string;
  };
  themeData: { primaryColor: string; backgroundColor: string; textColor: string; };
  onComplete: () => void;
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
        // Free plan - complete setup directly
        await onComplete()
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
      
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payments/create-checkout-session`, {
        companyName: companyData.name,
        customerEmail: companyData.email,
        planId: plan,
        theme: themeData,
        // Pass all company data as metadata
        location: companyData.location,
        industry: companyData.industry,
        website: companyData.website,
        description: companyData.description
      })
      
      const { url } = response.data
      
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
      <h2 className="text-xl md:text-2xl text-center font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
        {t('onboarding.choosePlan')}
      </h2>

      {error && (
        <div className="mb-4 p-3 md:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm md:text-base text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
            t('plans.multiLanguageSupport'),
            t('plans.advancedAnalytics'),
            t('plans.apiAccess'),
            t('plans.customIntegrations'),
            t('plans.translatedFaqTemplates'),
            t('plans.phoneSupport'),
            t('plans.whiteLabelOptions'),
            t('plans.autoLanguageDetection'),
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