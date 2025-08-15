import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { PricingCard } from "@/components/custom/PricingCard"
import axios from "axios"

interface PaymentStepProps {
  selectedPlan: string
  setSelectedPlan: (plan: string) => void
  companyData: { 
    name: string
    email: string
    industry: string
    website: string
    description: string
    location: string
  }
  themeData: { 
    primaryColor: string
    backgroundColor: string
    textColor: string
  }
  onComplete: () => void
}

export function PaymentStep({ selectedPlan, setSelectedPlan, companyData, themeData, onComplete }: PaymentStepProps) {
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
    <div className="animate-fade-in-up animation-delay-2000">
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