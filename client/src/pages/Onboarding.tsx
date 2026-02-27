import { useState, useEffect } from "react"
import { CheckCircle, Settings, Palette, CreditCard } from "lucide-react"
import { CompanyService } from "@/services/companyService"
import { useLanguage } from "@/context/LanguageContext"
import React from "react"
import { useNavigate } from "react-router-dom"
import { CompanyInfoStep } from "@/components/onboarding/CompanyInfoStep"
import { CustomizationStep } from "@/components/onboarding/CustomizationStep"
import { PaymentStep } from "@/components/onboarding/PaymentStep"
import { CompletionStep } from "@/components/onboarding/CompletionStep"
import axios from "axios"

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  completed: boolean
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'

export function Onboarding() {
  const navigate = useNavigate()
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
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [isSetupLoading, setIsSetupLoading] = useState(false)
  const { t } = useLanguage()

  const validateCompanyInfo = () => {
    const errors: string[] = []

    const trimmedName = companyData.name.trim()
    const trimmedEmail = companyData.email.trim()
    const trimmedIndustry = companyData.industry.trim()
    const trimmedLocation = companyData.location.trim()
    let trimmedWebsite = companyData.website.trim()

    if (!trimmedName) {
      errors.push('Company name is required.')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmedEmail) {
      errors.push('Email is required.')
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.push('Please enter a valid email address.')
    }

    if (!trimmedWebsite) {
      errors.push('Website URL is required.')
    } else {
      if (!/^https?:\/\//i.test(trimmedWebsite)) {
        trimmedWebsite = `https://${trimmedWebsite}`
      }
      try {
        const url = new URL(trimmedWebsite)
        trimmedWebsite = url.toString()
      } catch {
        errors.push('Please enter a valid website URL (e.g., https://example.com).')
      }
    }

    if (!trimmedIndustry) {
      errors.push('Industry is required.')
    }

    if (!trimmedLocation) {
      errors.push('Location is required.')
    }

    if (errors.length > 0) {
      setError(errors.join(' '))
      return null
    }

    // If valid, normalize the companyData copy we’ll store
    return {
      ...companyData,
      name: trimmedName,
      email: trimmedEmail,
      website: trimmedWebsite,
      industry: trimmedIndustry,
      location: trimmedLocation
    }
  }

  useEffect(() => {
    // Simulate page loading time
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

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
      description: "Customize your AI assistant experience",
      icon: <Palette className="h-5 w-5 md:h-6 md:w-6" />,
      completed: false
    },
    {
      id: "payment",
      title: t('onboarding.payment'),
      description: "Choose your billing plan",
      icon: <CreditCard className="h-5 w-5 md:h-6 md:w-6" />,
      completed: false
    },
    {
      id: "completion",
      title: "Setup Complete",
      description: "Welcome to Qurius AI",
      icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />,
      completed: false
    }
  ]

  const handleCompanyInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const normalized = validateCompanyInfo()
    if (!normalized) {
      // Validation failed; error message already set
      return
    }

    try {
      setLoading(true)

      const response = await axios.post(`${BACKEND_URL}/api/companies/validate-onboarding`, normalized, {
        headers: { "Content-Type": "application/json" }
      })

      if (response.data?.success) {
        const validatedCompany = response.data.company || normalized

        // Persist normalized + backend-validated values
        setCompanyData(validatedCompany)

        // Store company name in sessionStorage for payment flow
        sessionStorage.setItem('companyName', validatedCompany.name)
        setCurrentStep(1)
      } else {
        setError(response.data?.error || "Failed to validate company information.")
      }
    } catch (err: any) {
      const message =
        err.response?.data?.error ||
        err.message ||
        "Failed to validate company information."
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const handleCustomizationSubmit = (theme: any) => {
    setThemeData(theme)
    setCurrentStep(2)
  }

  const handleCompleteSetup = async () => {
    setLoading(true)
    setIsSetupLoading(true)
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
      
      // Add a small delay to show the loading animation
      setTimeout(() => {
        setIsSetupLoading(false)
        setCurrentStep(3) // Move to complete step
      }, 1500)
      
    } catch (err: any) {
      setError(err.message || "Failed to create company")
      setIsSetupLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
          return (
            <CompanyInfoStep
              companyData={companyData}
              setCompanyData={setCompanyData}
              onSubmit={handleCompanyInfoSubmit}
              loading={loading}
              error={error}
              onFieldChange={() => setError("")}
            />
          )
      case 1:
        return <CustomizationStep onSubmit={handleCustomizationSubmit} loading={loading} initialTheme={themeData} />
      case 2:
        return <PaymentStep selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} companyData={companyData} themeData={themeData} onComplete={handleCompleteSetup} />
      case 3:
        return <CompletionStep companyData={companyData} onNavigateToAdmin={() => navigate('/admin')} />
      default:
        return null
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }


  // Loading screen
  if (isPageLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  // Setup loading animation
  if (isSetupLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Setting up your AI assistant...
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base mb-4">
            We're configuring your personalized AI Assistant with your company information and preferences.
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    )
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
            Set up your Assistant in just a few steps
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
          {currentStep < steps.length - 1 && (
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

 