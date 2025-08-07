import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageCircle, Zap, Shield, Globe } from "lucide-react"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
import { useLanguage } from "@/context/LanguageContext"
import { TestimonialCarousel } from "@/components/custom/TestimonialCarousel"
import { PricingCard } from "@/components/custom/PricingCard"
import { ThemeToggle } from "@/components/custom/ThemeToggle"
import { useTheme } from "@/context/useThemeContext"

export function Landing() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const { t } = useLanguage()
  const { isDark, isThemeChanging, toggleTheme } = useTheme()

  const handleGetStarted = () => {
    navigate("/onboarding")
  }

  const handlePlanSelection = (plan: string) => {
    // For now, just navigate to onboarding
    // In a real app, you might want to pre-select the plan
    console.log("Plan selected:", plan)
    navigate("/onboarding")
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log("Email submitted:", email)
    setEmail("")
    // Show success message
    alert("Thank you for subscribing!")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-18 flex justify-between items-center md:pt-18 md:pb-4">
            <div className="flex items-center">
              <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              {/* <img src="/logo.png" alt="Qurius AI" className="h-10 w-10" /> */}
              <span className="ml-2 text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">Qurius AI</span>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <LanguageSelector />
              <ThemeToggle 
                theme={isDark ? "dark" : "light"}
                toggleTheme={toggleTheme}
                isThemeChanging={isThemeChanging}
              />
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base min-h-[44px] md:min-h-[40px]"
              >
                <span className="hidden sm:inline">{t('common.getStarted')}</span>
                <span className="sm:hidden">Start</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6 px-2 md:px-0">
            {t('landing.heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed">
            {t('landing.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors min-h-[48px] md:min-h-[44px]"
            >
              {t('common.getStarted')}
            </button>
            <button
              onClick={() => navigate("/demo")}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors min-h-[48px] md:min-h-[44px]"
            >
              {t('landing.viewDemo')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              {t('landing.featuresTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4 md:px-0">
              {t('landing.featuresSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center px-4 md:px-0">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('landing.feature1Title')}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('landing.feature1Description')}
              </p>
            </div>
            
            <div className="text-center px-4 md:px-0">
              <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('landing.feature2Title')}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('landing.feature2Description')}
              </p>
            </div>
            
            <div className="text-center px-4 md:px-0">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Globe className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('landing.feature3Title')}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('landing.feature3Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              {t('landing.pricingTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4 md:px-0">
              {t('landing.pricingSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4 md:px-0">
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
                t('plans.translatedFaqTemplates')
              ]}
              onSelect={handlePlanSelection}
              isPopular={true}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4 md:px-0">
              Trusted by businesses worldwide to enhance their customer experience
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            {t('landing.ctaTitle')}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
            {t('landing.ctaSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-200 min-h-[48px] md:min-h-[44px] w-full sm:w-auto"
            >
              {t('landing.startFreeTrial')}
            </button>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('landing.emailPlaceholder')}
                className="px-4 py-3 rounded-lg border-2 border-white text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 min-h-[48px] md:min-h-[44px] text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors min-h-[48px] md:min-h-[44px] text-sm md:text-base transform hover:scale-105"
              >
                {t('landing.getUpdates')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center mb-3 md:mb-4">
                <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                <span className="ml-2 text-lg md:text-xl font-bold">Qurius AI</span>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {t('landing.footerDescription')}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerProduct')}</h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.features')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.pricing')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.documentation')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerCompany')}</h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.about')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.blog')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.careers')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerSupport')}</h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.helpCenter')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.contact')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('landing.status')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
            <p>&copy; {new Date().getFullYear()} Qurius AI. {t('landing.allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 