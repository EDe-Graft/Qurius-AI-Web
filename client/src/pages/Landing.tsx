import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Zap, Shield, Globe, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { TestimonialCarousel } from "@/components/custom/TestimonialCarousel"
import { PricingCard } from "@/components/custom/PricingCard"
import { ChatInterface } from "@/components/custom/ChatInterface"
import { useRouteBasedCompany } from "@/hooks/useRouteBasedCompany"
import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { useTheme } from "@/context/useThemeContext"
import { subscriptionService } from "@/services/subscriptionService"

export function Landing() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isChatMinimized, setIsChatMinimized] = useState(true)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState("")
  const [subscriptionError, setSubscriptionError] = useState("")
  const { t } = useLanguage()
  const { defaultTheme, isThemeChanging, toggleTheme } = useTheme()
  const { quriusData, isDataLoading } = useRouteBasedCompany()

  useEffect(() => {
    // Only set page loading to false when company data is fully loaded
    if (!isDataLoading) {
      const timer = setTimeout(() => {
        setIsPageLoading(false)
      }, 900) // Reduced delay since we're already waiting for data

      return () => clearTimeout(timer)
    }
  }, [isDataLoading])

  const handleGetStarted = () => {
    navigate("/onboarding")
  }

  const handlePlanSelection = (plan: string) => {
    // For now, just navigate to onboarding
    // In a real app, you might want to pre-select the plan
    console.log("Plan selected:", plan)
    navigate("/onboarding")
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous messages
    setSubscriptionMessage("")
    setSubscriptionError("")
    
    // Validate email
    if (!email.trim()) {
      setSubscriptionError("Please enter your email address.")
      return
    }

    setIsSubscribing(true)
    
    try {
      const result = await subscriptionService.subscribeEmail({
        email: email.trim(),
        source: 'landing_page'
      })
      
      if (result.success) {
        setSubscriptionMessage(result.message)
        setEmail("")
        // Clear success message after 5 seconds
        setTimeout(() => setSubscriptionMessage(""), 5000)
      } else {
        setSubscriptionError(result.message)
        // Clear error message after 5 seconds
        setTimeout(() => setSubscriptionError(""), 5000)
      }
    } catch (error) {
      console.error("Error subscribing email:", error)
      setSubscriptionError("Failed to subscribe. Please try again later.")
      // Clear error message after 5 seconds
      setTimeout(() => setSubscriptionError(""), 5000)
    } finally {
      setIsSubscribing(false)
    }
  }

  const handleVideoLoad = () => {
    setIsVideoLoading(false)
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
      case 'installation':
        scrollToSection('video-section')
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

  // Loading screen
  if (isPageLoading || isDataLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <Navigation 
        currentPage="home"
        showGetStarted={true}
        getStartedText={t('common.getStarted')}
        onGetStarted={handleGetStarted}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6 px-2 md:px-0 animate-fade-in-up">
            {t('landing.heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed animate-fade-in-up animation-delay-200">
            {t('landing.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0 animate-fade-in-up animation-delay-400">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 min-h-[48px] md:min-h-[44px] shadow-lg hover:shadow-xl"
            >
              {t('common.getStarted')}
            </button>
            <button
              onClick={() => navigate("/demo")}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 min-h-[48px] md:min-h-[44px] shadow-lg hover:shadow-xl"
            >
              {t('landing.viewDemo')}
            </button>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="video-section" className="py-12 md:py-20 bg-white dark:bg-gray-900 animate-fade-in-up animation-delay-1000">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              See Qurius AI in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4 md:px-0 max-w-3xl mx-auto">
              Watch our demo showing how easy it is to add a personalized AI assistant to your SaaS product and marketing site. 
              See the installation process and discover how Qurius AI provides 24/7 product guidance, customer intelligence, and analytics.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Loom Video Embed */}
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              {/* Video Loading Animation */}
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Loading demo video...</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Please wait while we prepare your demo</p>
                  </div>
                </div>
              )}
              
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe 
                  src="https://www.loom.com/embed/d510742d4cdf42bf9a3ecda35bbd1c39?sid=aa168369-76bd-4e7c-a2fa-05bb92551023" 
                  frameBorder="0" 
                  allowFullScreen 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Qurius AI Demo Video"
                  onLoad={handleVideoLoad}
                  className={isVideoLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}
                ></iframe>
              </div>
            </div>
            
            {/* Video Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12">
              <div className="text-center hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-100">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transform transition-all duration-300 shadow-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  2-Minute Setup
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Simple installation process with intelligent knowledge management
                </p>
              </div>
              
              <div className="text-center hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-200">
                <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transform transition-all duration-300 shadow-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Instant Benefits
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  See immediate improvements in customer intelligence and analytics
                </p>
              </div>
              
              <div className="text-center hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-300">
                <div className="bg-purple-100 dark:bg-purple-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transform transition-all duration-300 shadow-lg">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Multi-Language
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Support customers in their preferred language automatically
                </p>
              </div>
            </div>
            
            {/* CTA Below Video */}
            <div className="text-center mt-8 md:mt-12">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg max-w-2xl mx-auto">
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4">
                  💡 <strong>Ready to transform your customer experience? </strong> 
                  Get started with Qurius AI today and see the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleGetStarted}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 transition-colors"
                  >
                    Start Free Trial
                  </button>
                  <button
                    onClick={() => navigate("/demo")}
                    className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 transition-colors"
                  >
                    Try Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-12 md:py-20 animate-fade-in-up animation-delay-1200">
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
            <div className="text-center px-4 md:px-0 hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-100">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 hover:scale-110 transform transition-all duration-300 shadow-lg">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('landing.feature1Title')}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('landing.feature1Description')}
              </p>
            </div>
            
            <div className="text-center px-4 md:px-0 hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-200">
              <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 hover:scale-110 transform transition-all duration-300 shadow-lg">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t('landing.feature2Title')}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('landing.feature2Description')}
              </p>
            </div>
            
            <div className="text-center px-4 md:px-0 hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-300">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 hover:scale-110 transform transition-all duration-300 shadow-lg">
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
      <section id="pricing-section" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 animate-fade-in-up animation-delay-1400">
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
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900 animate-fade-in-up animation-delay-1600">
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
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 animate-fade-in-up animation-delay-1800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
              Try Our AI Right Now
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4 md:px-0">
              Experience the power of Qurius AI's intelligent knowledge management and analytics firsthand. Click the chat icon to ask any questions!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-100 hover:shadow-lg">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Ask About Features
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                "What languages do you support?" or "How does web crawling work?"
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-200 hover:shadow-lg">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Check Pricing
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                "What are your pricing plans?" or "Do you have a free trial?"
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center hover:scale-105 transform transition-all duration-300 animate-fade-in-up animation-delay-300 hover:shadow-lg">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4 animate-pulse" />
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
                💡 <strong>This AI Assistant is powered by Qurius AI!</strong> It's the same intelligent knowledge management and analytics technology we provide to our customers. 
                Try asking any question to see our AI in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-blue-600 dark:bg-gray-800 animate-fade-in-up animation-delay-1800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            {t('landing.ctaTitle')}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
            {t('landing.ctaSubtitle')}
          </p>
          
          {/* Subscription Messages */}
          {subscriptionMessage && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
              <p className="text-green-800 dark:text-green-200 text-sm md:text-base font-medium">
                ✅ {subscriptionMessage}
              </p>
            </div>
          )}
          
          {subscriptionError && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
              <p className="text-red-800 dark:text-red-200 text-sm md:text-base font-medium">
                ❌ {subscriptionError}
              </p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
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
                className="px-4 py-3 rounded-lg border-2 border-white text-white placeholder-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 min-h-[48px] md:min-h-[44px] text-sm md:text-base bg-transparent"
                required
                disabled={isSubscribing}
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className={`px-6 py-3 rounded-lg font-semibold min-h-[48px] md:min-h-[44px] text-sm md:text-base transform transition-all duration-200 ${
                  isSubscribing 
                    ? 'bg-blue-500 text-white cursor-not-allowed' 
                    : 'bg-blue-700 text-white hover:bg-blue-800 hover:scale-105'
                }`}
              >
                {isSubscribing ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  t('landing.getUpdates')
                )}
              </button>
            </form>
          </div>
          
          {/* Privacy Notice */}
          <p className="text-blue-200 text-xs mt-4 max-w-2xl mx-auto">
            By subscribing, you agree to receive updates about Qurius AI. We respect your privacy and will never share your email with third parties. 
            You can unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer onFooterLinkClick={handleFooterLinkClick} showFullFooter={true} />

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