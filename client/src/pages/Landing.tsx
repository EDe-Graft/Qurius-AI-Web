import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Zap,
  MessageCircle,
  Brain,
  TrendingUp,
  DollarSign,
  Clock,
  Languages,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/useThemeContext'
import { TestimonialCarousel } from '@/components/custom/TestimonialCarousel'
import { PricingCard } from '@/components/custom/PricingCard'
import { WidgetEmbed } from '@/components/widget/WidgetEmbed'
import { Navigation } from '@/components/custom/Navigation'
import { Footer } from '@/components/custom/Footer'
import { useRouteBasedCompany } from '@/hooks/useRouteBasedCompany'
import { subscriptionService } from '@/services/subscriptionService'

export function Landing() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState('')
  const [subscriptionError, setSubscriptionError] = useState('')
  const { t } = useLanguage()
  const { defaultTheme } = useTheme()
  const { quriusData, isDataLoading } = useRouteBasedCompany()

  useEffect(() => {
    // Only set page loading to false when company data is fully loaded
    if (!isDataLoading) {
      const timer = setTimeout(() => {
        setIsPageLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isDataLoading])

  const handleGetStarted = () => {
    navigate('/onboarding')
  }

  const handlePlanSelection = (plan: string) => {
    console.log('Plan selected:', plan)
    navigate('/onboarding')
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscriptionMessage('')
    setSubscriptionError('')

    if (!email.trim()) {
      setSubscriptionError('Please enter your email address.')
      return
    }

    setIsSubscribing(true)

    try {
      const result = await subscriptionService.subscribeEmail({
        email: email.trim(),
        source: 'landing_page',
      })

      if (result.success) {
        setSubscriptionMessage(result.message)
        setEmail('')
        setTimeout(() => setSubscriptionMessage(''), 5000)
      } else {
        setSubscriptionError(result.message)
        setTimeout(() => setSubscriptionError(''), 5000)
      }
    } catch (error) {
      console.error('Error subscribing email:', error)
      setSubscriptionError('Failed to subscribe. Please try again later.')
      setTimeout(() => setSubscriptionError(''), 5000)
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
        console.log(`Footer link clicked: ${link}`)
    }
  }

  // Loading screen
  if (isPageLoading || isDataLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation
        currentPage="home"
        showGetStarted={true}
        getStartedText={t('common.getStarted')}
        onGetStarted={handleGetStarted}
      />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 opacity-40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-200" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-full animate-fade-in-up">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Introducing Qurius AI
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
            {t('landing.heroTitle')}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            {t('landing.heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-300">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group inline-flex items-center justify-center min-h-[48px]"
            >
              {t('common.getStarted')}
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/demo')}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              {t('landing.viewDemo')}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>Personalized SaaS Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span>2-Minute Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="video-section" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See It In Action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Watch how Qurius AI transforms your customer experience with intelligent, real-time
              support.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto animate-fade-in-up animation-delay-100">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-blue-200 dark:border-blue-800">
              <div className="relative bg-gray-100 dark:bg-gray-800 aspect-video flex items-center justify-center">
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 z-10">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">Loading video...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://www.loom.com/embed/d510742d4cdf42bf9a3ecda35bbd1c39?sid=aa168369-76bd-4e7c-a2fa-05bb92551023"
                  frameBorder="0"
                  allowFullScreen
                  className={`w-full h-full ${isVideoLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
                  title="Qurius AI Demo"
                  onLoad={handleVideoLoad}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Zap,
                  title: '2-Minute Setup',
                  description: 'Simple installation with intelligent knowledge management',
                },
                {
                  icon: DollarSign,
                  title: 'Instant Sales Insights',
                  description: 'See improvements in customer intelligence and ROI immediately',
                },
                {
                  icon: Languages,
                  title: 'Multi-Language',
                  description: 'Support customers in their preferred language automatically',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Below Video */}
            <div className="text-center mt-12">
              <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                    <strong>Take your SaaS to the next level with Qurius AI!</strong>
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  Get started today and see the difference in your customer experience, sales and
                  ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleGetStarted}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Start Free Trial
                  </button>
                  <button
                    onClick={() => navigate('/demo')}
                    className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
      <section id="features-section" className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('landing.featuresTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('landing.featuresSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                bgLight: 'bg-blue-100',
                bgDark: 'dark:bg-blue-900/30',
                textLight: 'text-blue-600',
                textDark: 'dark:text-blue-400',
                title: t('landing.feature1Title'),
                description: t('landing.feature1Description'),
              },
              {
                icon: TrendingUp,
                bgLight: 'bg-blue-100',
                bgDark: 'dark:bg-blue-900/30',
                textLight: 'text-blue-600',
                textDark: 'dark:text-blue-400',
                title: t('landing.feature2Title'),
                description: t('landing.feature2Description'),
              },
              {
                icon: Clock,
                bgLight: 'bg-emerald-100',
                bgDark: 'dark:bg-emerald-900/30',
                textLight: 'text-emerald-600',
                textDark: 'dark:text-emerald-400',
                title: t('landing.feature3Title'),
                description: t('landing.feature3Description'),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgLight} ${feature.bgDark} mb-6`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.textLight} ${feature.textDark}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('landing.pricingTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('landing.pricingSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="animate-fade-in-up animation-delay-100">
              <PricingCard
                plan="free"
                price="$0"
                features={[
                  '500 messages/month',
                  t('plans.basicCustomization'),
                  t('plans.emailSupport'),
                  t('plans.standardFaqTemplates'),
                ]}
                onSelect={handlePlanSelection}
              />
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <PricingCard
                plan="starter"
                price="$29"
                features={[
                  '10,000 messages/month',
                  'Advanced customization',
                  'Live AI testing',
                  'Core analytics dashboard',
                  'Custom FAQ import',
                ]}
                onSelect={handlePlanSelection}
              />
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <PricingCard
                plan="growth"
                price="$59"
                features={[
                  '50,000 messages/month',
                  'Advanced analytics',
                  'Multi-language support',
                  'Lead generation',
                  'Limited web crawling (up to 100 pages per crawl)',
                ]}
                onSelect={handlePlanSelection}
                isPopular={true}
              />
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <PricingCard
                plan="pro"
                price="$99"
                features={[
                  'Unlimited messages',
                  'Unlimited web crawling',
                  'Advanced analytics',
                  'White-label options',
                  'Custom integrations',
                  'Lead generation',
                  'Live AI testing'
                ]}
                onSelect={handlePlanSelection}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Industry Leaders
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See what our customers have to say about Qurius AI
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Try Our AI Right Now
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the power of Qurius AI's intelligent support. Click the chat icon below to
              ask questions!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: 'Ask About Features',
                example: '"What languages do you support?"',
              },
              {
                icon: DollarSign,
                title: 'Check Pricing',
                example: '"What are your pricing plans?"',
              },
              {
                icon: Brain,
                title: 'Learn More',
                example: '"How do I get started?"',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-pulse" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            {t('landing.ctaTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
            {t('landing.ctaSubtitle')}
          </p>

          {subscriptionMessage && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg animate-fade-in-up">
              <p className="text-green-800 dark:text-green-200 text-sm md:text-base font-medium">
                ✓ {subscriptionMessage}
              </p>
            </div>
          )}

          {subscriptionError && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg animate-fade-in-up">
              <p className="text-red-800 dark:text-red-200 text-sm md:text-base font-medium">
                ✕ {subscriptionError}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up animation-delay-200">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              {t('landing.startFreeTrial')}
            </button>

            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('landing.emailPlaceholder')}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base flex-1 min-h-[48px]"
                required
                disabled={isSubscribing}
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transform transition-all duration-200 min-h-[48px] ${
                  isSubscribing
                    ? 'bg-blue-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                }`}
              >
                {isSubscribing ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Subscribing...
                  </div>
                ) : (
                  t('landing.getUpdates')
                )}
              </button>
            </form>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
            By subscribing, you agree to receive updates about Qurius AI. We respect your privacy
            and will never share your email with third parties. You can unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer onFooterLinkClick={handleFooterLinkClick} showFullFooter={true} />

      {/* Widget Embed - Uses the same script as external websites */}
      {quriusData && (
        <WidgetEmbed
          companyData={quriusData}
          theme={defaultTheme}
        />
      )}
    </div>
  )
}