import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageCircle, Users, Target, Award, Menu, X } from "lucide-react"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
// import { useLanguage } from "@/context/LanguageContext"
import { ThemeToggle } from "@/components/custom/ThemeToggle"
import { useTheme } from "@/context/useThemeContext"
import { ChatInterface } from "@/components/custom/ChatInterface"
import { useRouteBasedCompany } from "@/hooks/useRouteBasedCompany"
import founderImage from "@/assets/founder.png"

export function About() {
  const navigate = useNavigate()
//   const { t } = useLanguage()
  const { defaultTheme, isDark, isThemeChanging, toggleTheme } = useTheme()
  const [isChatMinimized, setIsChatMinimized] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { quriusData } = useRouteBasedCompany()

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
              {/* Navigation Links - Hidden on mobile, shown on desktop */}
              <nav className="hidden lg:flex items-center space-x-6 mr-4">
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Home
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
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  navigate("/")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
              >
                Home
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
            </div>
          </div>
        )}
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

      {/* Founder Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The visionary behind Qurius AI, passionate about revolutionizing customer support through intelligent technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Founder Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-lg">
                  <img 
                    src={founderImage} 
                    alt="Edward De-Graft Quansah - Founder & CEO of Qurius AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full shadow-md"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-400 rounded-full shadow-md"></div>
              </div>
            </div>
            
            {/* Founder Story */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Edward De-Graft Quansah
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Founder & CEO, Qurius AI
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Background & Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    A Computer Science student at William Paterson University with a GPA of 3.98, I bring expertise in AI, 
                    data mining, and full-stack development. I worked as a Software Engineer at AyaPrep Limited, 
                    where I developed a RESTful API for a mobile app, increasing user engagement by 30% and reducing latency by 40%.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Passions & Interests
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I'm passionate about leveraging AI and machine learning to solve real-world problems. I love building scalable applications that make a difference, from 
                    ShareSphere's campus sharing platform to enterprise-grade SaaS solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    The Qurius AI Vision
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Qurius AI was born from my experience building customer-facing applications and understanding the 
                    challenges small to medium-sized businesses face with support. I envisioned an intelligent chat widget that could provide 
                    instant, personalized responses while maintaining the human touch. The platform combines my expertise 
                    in React, TypeScript, and AI to deliver a solution that reduces customer setup time by 80% and 
                    provides real-time analytics for actionable insights. I'm committed to making advanced AI technology accessible to businesses of all sizes, 
                    helping them scale their customer support while maintaining the human touch that customers value.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  React/TypeScript
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                  SaaS Architecture
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                  Data Science
                </span>
              </div>
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