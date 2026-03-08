import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
  BookOpen, 
  Code, 
  Settings, 
  MessageCircle, 
  Globe, 
  BarChart3, 
  Zap, 
  Shield, 
  FileText,
  ChevronRight,
  ChevronDown,
  Copy,
  Check
} from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"

interface DocSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export function Docs() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const CodeBlock = ({ code, title }: { code: string; title?: string }) => (
    <div className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden my-4">
      {title && (
        <div className="bg-gray-800 dark:bg-gray-700 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-300 border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className="p-3 sm:p-4 text-xs sm:text-sm text-gray-100 overflow-x-auto">
          <code className="whitespace-pre-wrap break-words">{code}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(code, title || code)}
          className="absolute top-2 right-2 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors rounded"
          aria-label="Copy code"
        >
          {copiedCode === (title || code) ? <Check size={14} className="sm:w-4 sm:h-4" /> : <Copy size={14} className="sm:w-4 sm:h-4" />}
        </button>
      </div>
    </div>
  )

  const docSections: DocSection[] = [
    {
      id: "overview",
      title: "Overview",
      icon: <BookOpen className="h-5 w-5" />,
      content: (
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
              Welcome to Qurius AI Documentation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              Qurius AI is an AI website assistant for SaaS products that helps you provide instant, accurate answers 
              to customer questions across your app and marketing site. The assistant connects to your docs, help center, 
              and product pages and combines advanced natural language processing with powerful FAQ and knowledge management 
              to deliver exceptional self‑serve experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🚀 Key Features
              </h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>• AI-powered intelligent responses</li>
                <li>• Multi-language support (10+ languages and counting)</li>
                <li>• Customizable AI assistant interface</li>
                <li>• Advanced analytics dashboard</li>
                <li>• Superior FAQ management system</li>
                <li>• Web crawling & document processing</li>
                <li>• White-label solutions</li>
                <li>• API access for integrations</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                💡 Quick Start
              </h3>
              <ol className="text-green-800 dark:text-green-200 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>1. Sign up for a free account</li>
                <li>2. Complete the onboarding process</li>
                <li>3. Add your FAQs or crawl your docs and website</li>
                <li>4. Customize your AI assistant</li>
                <li>5. Embed the assistant in your product or on your website</li>
                <li>6. Monitor performance via analytics</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "features",
      title: "Features",
      icon: <Zap className="h-5 w-5" />,
      content: (
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              Platform Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Intelligent AI Assistant
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Customizable AI assistant interface with AI-powered responses, typing indicators, 
                  and seamless integration with your SaaS product and website design.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Multi-Language Support
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Automatic language detection and support for 100+ languages, 
                  ensuring global accessibility for your customers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Advanced Analytics
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Comprehensive analytics dashboard with conversation insights, 
                  performance metrics, and customer behavior analysis.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    FAQ Management
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Easy-to-use FAQ editor with AI-powered content generation, 
                  import/export capabilities, and smart categorization.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Security & Privacy
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Enterprise-grade security with data encryption, GDPR compliance, 
                  and secure API endpoints for data protection.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    API & Integrations
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  RESTful API for custom integrations, webhook support, 
                  and seamless connection with your existing tools and platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "setup",
      title: "Setup & Installation",
      icon: <Settings className="h-5 w-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Getting Started
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                1. Account Setup
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Visit <a href="/onboarding" className="text-blue-600 hover:underline">our onboarding page</a></li>
                  <li>Enter your company information and website URL</li>
                  <li>Choose your subscription plan (Free, Starter, or Pro)</li>
                  <li>Complete the payment process (if applicable)</li>
                  <li>Verify your email address</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                2. Assistant Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Add the Qurius AI assistant to your SaaS product or marketing site with a simple JavaScript snippet:
              </p>
              
              <CodeBlock 
                code={`<!-- Add this script right before the closing </body> tag -->

<script
  src="https://qurius.app/widget-iframe-embed.js"
  data-id="your-company-id"
  data-key="your-public-api-key"
  data-plan="pro"
  data-theme="dark"
  data-primary-color="#6366f1"
></script>
`}
                title="Assistant Integration Code"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                3. Configuration Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Assistant Positioning</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• bottom-right (default)</li>
                    <li>• bottom-left</li>
                    <li>• top-right</li>
                    <li>• top-left</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Theme Customization</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Primary color</li>
                    <li>• Background color</li>
                    <li>• Text color</li>
                    <li>• Border radius</li>
                    <li>• Font family</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "api",
      title: "API Reference",
      icon: <Code className="h-5 w-5" />,
      content: (
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              API Documentation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Qurius AI currently exposes most functionality through the embedded AI assistant and admin dashboard. 
              A comprehensive public REST API for deeper integrations (Pro access only) is planned; the draft design below 
              is subject to change as the platform evolves.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                Authentication
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                All API requests require authentication using your API key in the Authorization header:
              </p>
              <CodeBlock 
                code={`Authorization: Bearer YOUR_API_KEY`}
                title="Authentication Header"
              />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                Base URL (Planned)
              </h3>
              <CodeBlock 
                code={`https://qurius.app/api/v1`}
                title="API Base URL (Draft)"
              />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                Core Endpoints (Draft)
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm sm:text-base">
                    Send Message
                  </h4>
                  <CodeBlock 
                    code={`POST /chat/message
{
  "companyId": "your-company-id",
  "message": "Hello, how can I help you?",
  "sessionId": "optional-session-id",
  "language": "en"
}`}
                    title="Send Message Request"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm sm:text-base">
                    Get FAQs
                  </h4>
                  <CodeBlock 
                    code={`GET /companies/{companyId}/faqs?limit=50&offset=0&source=all`}
                    title="Get FAQs Request"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm sm:text-base">
                    Create FAQ
                  </h4>
                  <CodeBlock 
                    code={`POST /companies/{companyId}/faqs
{
  "question": "What are your business hours?",
  "answer": "We are open Monday-Friday, 9am-5pm EST.",
  "source": "manual"
}`}
                    title="Create FAQ Request"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                Response Format (Example)
              </h3>
              <CodeBlock 
                code={`{
  "success": true,
  "data": {
    "message": "AI response here",
    "confidence": 0.95,
    "source": "faq",
    "faqId": "optional-faq-id"
  },
  "metadata": {
    "responseTime": 150,
    "tokensUsed": 45
  }
}`}
                title="Standard Response Format"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "faq-management",
      title: "FAQ Management",
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Managing Your FAQs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Learn how to create, organize, and optimize your FAQ content for the best customer experience.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Creating FAQs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Manual Entry</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Add FAQs one by one through the admin interface
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Bulk Import</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Import FAQs from CSV files or spreadsheets
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">AI Generation</h4>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    Generate FAQs from your website content using our highly advanced web crawler.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                FAQ Best Practices
              </h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
                  💡 Tips for Better FAQs
                </h4>
                <ul className="text-yellow-800 dark:text-yellow-200 space-y-2">
                  <li>• <strong>Be specific:</strong> Address common customer pain points</li>
                  <li>• <strong>Use natural language:</strong> Write as customers would ask</li>
                  <li>• <strong>Keep answers concise:</strong> Aim for 2-3 sentences</li>
                  <li>• <strong>Include action items:</strong> Tell customers what to do next</li>
                  <li>• <strong>Update regularly:</strong> Keep content current and relevant</li>
                  <li>• <strong>Test responses:</strong> Verify AI understanding of your FAQs</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                FAQ Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We provide industry-specific FAQ templates to help you get started quickly:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['E-commerce', 'Healthcare', 'Education', 'Legal', 'Real Estate', 'Travel', 'Finance', 'Entertainment', 'Restaurant', 'Automotive', 'Technology', 'Other'].map((industry) => (
                  <div key={industry} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "analytics",
      title: "Analytics & Insights",
      icon: <BarChart3 className="h-5 w-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Understanding Your Data
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Track performance, understand customer behavior, and optimize your AI assistant with comprehensive analytics.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Key Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Conversation Metrics</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Total conversations</li>
                      <li>• Average response time</li>
                      <li>• Conversation duration</li>
                      <li>• Messages per conversation</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">FAQ Performance</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Most used FAQs</li>
                      <li>• FAQ success rate</li>
                      <li>• Popular questions</li>
                      <li>• Unanswered queries</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">User Insights</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• User satisfaction scores</li>
                      <li>• Peak usage times</li>
                      <li>• Geographic distribution</li>
                      <li>• Device preferences</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Business Impact</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Support ticket reduction</li>
                      <li>• Customer satisfaction</li>
                      <li>• Response time improvement</li>
                      <li>• Cost savings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Dashboard Features
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  📊 Analytics Dashboard
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                    <li>• Real-time conversation monitoring</li>
                    <li>• Performance trend analysis</li>
                    <li>• Custom date range filtering</li>
                    <li>• Export capabilities (CSV, PDF)</li>
                  </ul>
                  <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                    <li>• Automated reporting</li>
                    <li>• Alert notifications</li>
                    <li>• Comparative analytics</li>
                    <li>• ROI calculations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Common Issues & Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Find solutions to common problems and learn how to optimize your Qurius AI implementation.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Assistant Embed Issues
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Assistant not appearing
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Check if the script is loaded in the page head</li>
                    <li>• Verify your company ID is correct</li>
                    <li>• Check browser console for JavaScript errors</li>
                    <li>• Ensure your account is active and not suspended</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Assistant styling issues
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Check CSS conflicts with your website</li>
                    <li>• Verify theme configuration</li>
                    <li>• Test on different browsers</li>
                    <li>• Clear browser cache</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                AI Response Issues
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Poor response quality
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Review and improve your FAQ content</li>
                    <li>• Add more specific questions and answers</li>
                    <li>• Check FAQ confidence scores</li>
                    <li>• Consider adding more context to answers</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    No responses to questions
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Verify FAQs are published and active</li>
                    <li>• Check if questions match your FAQ content</li>
                    <li>• Review AI model configuration</li>
                    <li>• Contact support if issues persist</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Performance Optimization
              </h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">
                  🚀 Optimization Tips
                </h4>
                <ul className="text-green-800 dark:text-green-200 space-y-2">
                  <li>• <strong>Regular FAQ updates:</strong> Keep content fresh and relevant</li>
                  <li>• <strong>Monitor analytics:</strong> Identify and address common issues</li>
                  <li>• <strong>Test responses:</strong> Regularly test with real customer questions</li>
                  <li>• <strong>Optimize loading:</strong> Ensure the assistant script loads quickly</li>
                  <li>• <strong>Mobile optimization:</strong> Test on mobile devices</li>
                  <li>• <strong>Language optimization:</strong> Optimize for your target languages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const handleGetStarted = () => {
    navigate("/onboarding")
  }

  const handleFooterLinkClick = (link: string) => {
    switch (link) {
      case 'features':
        setActiveSection('features')
        break
      case 'pricing':
        navigate('/#pricing-section')
        break
      case 'about':
        navigate('/about')
        break
      case 'contact':
        navigate('/contact')
        break
      default:
        alert(`${link} page will be available soon!`)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <Navigation 
        currentPage="docs"
        showGetStarted={true}
        getStartedText={t('common.getStarted')}
        onGetStarted={handleGetStarted}
      />

      {/* Header */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
              Qurius AI Documentation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Complete guide to setting up, configuring, and optimizing your Qurius AI assistant for your SaaS product.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
            {/* Sidebar Navigation - Mobile Optimized */}
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-8">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                  Documentation
                </h2>
                <nav className="space-y-1 sm:space-y-2">
                  {docSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center justify-between p-2 sm:p-3 rounded-lg text-left transition-colors text-sm sm:text-base ${
                        activeSection === section.id
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                          {section.icon}
                        </div>
                        <span className="ml-2 sm:ml-3 font-medium truncate">{section.title}</span>
                      </div>
                      {activeSection === section.id ? (
                        <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Quick Actions - Mobile Optimized */}
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 text-sm sm:text-base">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={handleGetStarted}
                      className="w-full bg-blue-600 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </button>
                    <a
                      href="/demo"
                      className="block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center"
                    >
                      Try Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Mobile Optimized */}
            <div className="lg:w-3/4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
                {docSections.find(section => section.id === activeSection)?.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onFooterLinkClick={handleFooterLinkClick} showFullFooter={true} />
    </div>
  )
} 