import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageCircle, Zap, Shield, Users, ArrowRight, Star, CheckCircle, Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/useThemeContext"

export function Landing() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const { defaultTheme, toggleTheme, isThemeChanging } = useTheme()

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "AI-Powered Chat",
      description: "Intelligent conversations that understand your business and help customers instantly."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Set up your widget in minutes with our simple integration process."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Your customers get instant help, even when you're offline."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      text: "Our customer support requests dropped by 60% after implementing Qurius AI. Amazing ROI!",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "HealthPlus Medical",
      text: "The widget seamlessly integrates with our website and provides instant medical information.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "EduTech Innovations",
      text: "Students love the instant help feature. It's like having a tutor available 24/7.",
      rating: 5
    }
  ]

  const handleGetStarted = () => {
    navigate("/onboarding")
  }

  const handlePlanSelection = (plan: string) => {
    // Store the selected plan in sessionStorage for the onboarding flow
    sessionStorage.setItem('selectedPlan', plan)
    navigate("/onboarding")
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would capture leads
    console.log("Email captured:", email)
    setEmail("")
    alert("Thanks! We'll be in touch soon.")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                Qurius AI
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                disabled={isThemeChanging}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 mr-2 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                title="Toggle theme"
              >
                {defaultTheme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => window.open("https://qurius-ai.vercel.app/demo", "_blank")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Demo
              </button>
              <button
                onClick={() => navigate("/login")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Login
              </button>
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Transform Your Website with
            <span className="text-blue-600"> AI Chat</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Add intelligent customer support to your website in minutes. 
            Let AI handle common questions while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => window.open("https://qurius-ai.vercel.app/demo", "_blank")}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose Qurius AI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to enhance your customer experience and boost your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Loved by Businesses Worldwide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See what our customers have to say about Qurius AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. Start free, upgrade when you're ready.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-600 flex flex-col justify-between">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Free</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">$0</div>
                <p className="text-gray-600 dark:text-gray-400">2-week trial</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  1,000 messages/month
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Basic customization
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Standard FAQ templates
                </li>
              </ul>
              <button
                onClick={() => handlePlanSelection('free')}
                className="w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Get Started Free
              </button>
            </div>

            {/* Starter Plan */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg border-2 border-blue-500 relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Starter</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">$29</div>
                <p className="text-gray-600 dark:text-gray-400">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  10,000 messages/month
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Advanced customization
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Analytics dashboard
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Custom FAQ import
                </li>
              </ul>
              <button
                onClick={() => handlePlanSelection('starter')}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-600 flex flex-col justify-between">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Pro</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">$99</div>
                <p className="text-gray-600 dark:text-gray-400">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Unlimited messages
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  24/7 phone support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  API access
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <button
                onClick={() => handlePlanSelection('pro')}
                className="w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using Qurius AI to improve their customer support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </button>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 mr-2 rounded-lg border-2 border-white text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                required
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Updates
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Qurius AI</span>
              </div>
              <p className="text-gray-400">
                Transform your website with intelligent AI chat support.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integration</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Qurius AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 