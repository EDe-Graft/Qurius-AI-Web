import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageCircle, Users, Target, Award, ArrowLeft } from "lucide-react"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
// import { useLanguage } from "@/context/LanguageContext"
import { ThemeToggle } from "@/components/custom/ThemeToggle"
import { useTheme } from "@/context/useThemeContext"
import { ChatInterface } from "@/components/custom/ChatInterface"

export function About() {
  const navigate = useNavigate()
//   const { t } = useLanguage()
  const { defaultTheme, isDark, isThemeChanging, toggleTheme } = useTheme()
  const [isChatMinimized, setIsChatMinimized] = useState(true)

  // Company data for Qurius AI
  const companyData = {
    id: 'qurius-ai-demo',
    name: 'Qurius AI',
    plan: 'pro',
    status: 'active',
    contact_email: 'support@qurius.ai',
    admin_email: 'admin@qurius.ai',
    domain: 'qurius.app',
    location: 'Tech Valley, CA',
    description: 'AI-powered customer support platform that provides intelligent chatbots for businesses.',
    industry: 'AI/Technology',
    website: 'https://qurius.app',
    enrollment_date: '2024-01-01',
    subscription_status: 'active',
    subscription_end_date: '2050-01-01',
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-18 flex justify-between items-center md:pt-18 md:pb-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate("/")}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                <span className="ml-2 text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">Qurius AI</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </button>
              <LanguageSelector />
              <ThemeToggle 
                theme={isDark ? "dark" : "light"}
                toggleTheme={toggleTheme}
                isThemeChanging={isThemeChanging}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
            About Qurius AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Empowering businesses with intelligent customer support through cutting-edge AI technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                At Qurius AI, we believe that every customer interaction should be meaningful, efficient, and satisfying. 
                Our mission is to revolutionize customer support by providing businesses with intelligent AI-powered 
                chatbots that understand context, speak multiple languages, and deliver personalized experiences.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We're committed to making advanced AI technology accessible to businesses of all sizes, 
                helping them scale their customer support while maintaining the human touch that customers value.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-lg">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To become the leading platform for AI-powered customer support, enabling businesses 
                worldwide to provide exceptional customer experiences through intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Customer-Centric
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every decision we make is guided by what's best for our customers and their end users. 
                We listen, learn, and continuously improve based on feedback.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Award className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We embrace cutting-edge technology and creative solutions to solve complex problems 
                and stay ahead of the curve in AI development.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <MessageCircle className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe in open communication, honest pricing, and clear explanations of how 
                our AI technology works to build trust with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're a passionate team of AI researchers, engineers, and customer success specialists 
              dedicated to building the future of customer support.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-lg text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Growing Team
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our diverse team brings together expertise from machine learning, natural language processing, 
              software engineering, and customer experience design.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Experience Our AI in Action
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Want to see what we're all about? Try our AI assistant right here on this page! 
              Click the chat icon to ask questions about our company, technology, or anything else.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <MessageCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Try It Now
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This chatbot uses the same AI technology we provide to our customers. 
                Ask about our features, pricing, team, or company values!
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Join thousands of businesses that trust Qurius AI to deliver exceptional customer experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/onboarding")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started Free
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg text-lg font-semibold border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-lg font-bold">Qurius AI</span>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Qurius AI. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Chat Interface */}
      <ChatInterface
        defaultTheme={defaultTheme}
        toggleTheme={toggleTheme}
        isMinimized={isChatMinimized}
        onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
        companyData={companyData}
        isThemeChanging={isThemeChanging}
      />
    </div>
  )
} 