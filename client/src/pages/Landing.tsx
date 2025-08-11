import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageCircle, Zap, Shield, Globe, Menu, X } from "lucide-react"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
import { useLanguage } from "@/context/LanguageContext"
import { TestimonialCarousel } from "@/components/custom/TestimonialCarousel"
import { PricingCard } from "@/components/custom/PricingCard"
import { ThemeToggle } from "@/components/custom/ThemeToggle"
import { useTheme } from "@/context/useThemeContext"
import { ChatInterface } from "@/components/custom/ChatInterface"
import { useRouteBasedCompany } from "@/hooks/useRouteBasedCompany"

export function Landing() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isChatMinimized, setIsChatMinimized] = useState(true)
  const { t } = useLanguage()
  const { defaultTheme, isDark, isThemeChanging, toggleTheme } = useTheme()
  const { quriusData } = useRouteBasedCompany()

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

  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle footer link clicks
  const handleFooterLinkClick = (link: string) => {
    switch (link) {
      case 'features':
        scrollToSection('features-section')
        break
      case 'pricing':
        scrollToSection('pricing-section')
        break
      case 'documentation':
        navigate('/admin')
        break
      case 'about':
        navigate('/about')
        break
      case 'contact':
        navigate('/contact')
        break
      default:
        // For links that need new pages, show alert for now
        alert(`${link} page will be available soon!`)
    }
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
              {/* Navigation Links - Hidden on mobile, shown on desktop */}
              <nav className="hidden lg:flex items-center space-x-6 mr-4">
                <button
                  onClick={() => navigate("/about")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Contact
                </button>
                <button
                  onClick={() => navigate("/demo")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Demo
                </button>
              </nav>
              
              <LanguageSelector />
              <ThemeToggle 
                theme={isDark ? "dark" : "light"}
                toggleTheme={toggleTheme}
                isThemeChanging={isThemeChanging}
              />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              
              <button
                onClick={handleGetStarted}
                className="hidden sm:flex bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base min-h-[44px] md:min-h-[40px] items-center"
              >
                <span className="hidden sm:inline">{t('common.getStarted')}</span>
                <span className="sm:hidden">Start</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  navigate("/about")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/contact")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  navigate("/demo")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
              >
                Demo
              </button>
              <button
                onClick={() => {
                  handleGetStarted()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                {t('common.getStarted')}
              </button>
            </div>
          </div>
        )}
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
      <section id="features-section" className="py-12 md:py-20">
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
      <section id="pricing-section" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
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
              price="$59"
              features={[
                t('plans.unlimitedMessages'),
                t('plans.multiLanguageSupport'),
                t('plans.advancedAnalytics'),
                t('plans.customWebCrawling'),
                t('plans.apiAccess'),
                t('plans.customIntegrations'),
                t('plans.whiteLabelOptions'),
                t('plans.phoneSupport'),
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

      {/* Interactive Demo Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              Try Our AI Right Now
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4 md:px-0">
              Experience the power of Qurius AI firsthand. Click the chat icon to ask any questions!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Ask About Features
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                "What languages do you support?" or "How does web crawling work?"
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Check Pricing
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                "What are your pricing plans?" or "Do you have a free trial?"
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Learn More
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                "How do I get started?" or "What integrations do you offer?"
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                💡 <strong>This chatbot is powered by Qurius AI!</strong> It's the same technology we provide to our customers. 
                Try asking any question to see our AI in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-blue-600 dark:bg-gray-800">
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
                className="px-4 py-3 rounded-lg border-2 border-white text-white placeholder-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 min-h-[48px] md:min-h-[44px] text-sm md:text-base"
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
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('features')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.features')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('pricing')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.pricing')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('documentation')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.documentation')}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerCompany')}</h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('about')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.about')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('blog')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.blog')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('careers')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.careers')}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerSupport')}</h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('help')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.helpCenter')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('contact')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.contact')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLinkClick('status')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t('landing.status')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
            <p>&copy; {new Date().getFullYear()} Qurius AI. {t('landing.allRightsReserved')}</p>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      {quriusData && (
        <ChatInterface
          defaultTheme={defaultTheme}
          toggleTheme={toggleTheme}
          isMinimized={isChatMinimized}
          onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
          companyData={quriusData}
          isThemeChanging={isThemeChanging}
        />
      )}
    </div>
  )
} 