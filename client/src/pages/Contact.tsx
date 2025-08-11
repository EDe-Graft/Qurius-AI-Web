import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageCircle, Mail, Phone, MapPin, Send, Menu, X } from "lucide-react"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
// import { useLanguage } from "@/context/LanguageContext"
import { ThemeToggle } from "@/components/custom/ThemeToggle"
import { useTheme } from "@/context/useThemeContext"
import { ChatInterface } from "@/components/custom/ChatInterface"
import { useRouteBasedCompany } from "@/hooks/useRouteBasedCompany"

export function Contact() {
  const navigate = useNavigate()
//   const { t } = useLanguage()    // TODO: Add translation
  const { defaultTheme, isDark, isThemeChanging, toggleTheme } = useTheme()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isChatMinimized, setIsChatMinimized] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { quriusData } = useRouteBasedCompany()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    })
    
    setIsSubmitting(false)
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
              {/* Navigation Links - Hidden on mobile, shown on desktop */}
              <nav className="hidden lg:flex items-center space-x-6 mr-4">
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  About
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
                  navigate("/about")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2"
              >
                About
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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Get in touch with our team. We're here to help you succeed with AI-powered customer support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Get in touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      For general inquiries and support
                    </p>
                    <a
                      href="mailto:support@qurius.ai"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      support@qurius.ai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Call Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Monday to Friday, 9AM to 6PM EST
                    </p>
                    <a
                      href="tel:+1-973-986-9907"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      +1 (973) 986-9907
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 AI Innovation Drive<br />
                      Tech Valley, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Response Times
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Sales inquiries: Within 2 hours</li>
                  <li>• Technical support: Within 4 hours</li>
                  <li>• General questions: Within 24 hours</li>
                  <li>• Partnership requests: Within 48 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Try Our AI Assistant
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Have questions? Chat with our AI assistant to see Qurius AI in action! 
            Click the chat icon in the bottom right to experience our product firsthand.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Experience the Power of AI
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This chatbot is powered by the same technology we provide to our customers. 
              Ask about our features, pricing, or any questions you have about Qurius AI!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Join thousands of businesses using Qurius AI to enhance their customer support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigate("/demo")}
              className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg text-lg font-semibold border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              View Demo
            </button>
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