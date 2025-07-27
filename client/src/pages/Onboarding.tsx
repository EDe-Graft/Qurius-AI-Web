import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import { CheckCircle, ArrowRight, Copy, Code, Settings, Palette, MessageCircle } from "lucide-react"
import { CompanyService } from "@/services/companyService"

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  completed: boolean
}

export function Onboarding() {
//   const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [companyData, setCompanyData] = useState({
    name: "",
    industry: "",
    website: "",
    email: "",
    description: "",
    location: "",
    id: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const steps: OnboardingStep[] = [
    {
      id: "company-info",
      title: "Company Information",
      description: "Tell us about your business",
      icon: <Settings className="h-5 w-5" />,
      completed: false
    },
    {
      id: "customization",
      title: "Widget Customization",
      description: "Customize your chat widget",
      icon: <Palette className="h-5 w-5" />,
      completed: false
    },
    {
      id: "integration",
      title: "Integration",
      description: "Add the widget to your website",
      icon: <Code className="h-5 w-5" />,
      completed: false
    },
    {
      id: "complete",
      title: "Complete Setup",
      description: "Test and launch your widget",
      icon: <CheckCircle className="h-5 w-5" />,
      completed: false
    }
  ]

  const handleCompanyInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const newCompany = await CompanyService.createCompany({
        ...companyData,
        theme: {
          primaryColor: "#3B82F6",
          backgroundColor: "#FFFFFF",
          textColor: "#1F2937"
        },
        logo_url: "",
        created_at: new Date().toISOString()
      })

      setCompanyData(prev => ({ ...prev, id: newCompany.id || "" }))
      setCurrentStep(1)
    } catch (err: any) {
      setError(err.message || "Failed to create company")
    } finally {
      setLoading(false)
    }
  }

  const handleCustomizationSubmit = async (theme: any) => {
    setLoading(true)
    try {
      await CompanyService.updateCompany(companyData.id!, {
        theme
      })
      setCurrentStep(2)
    } catch (err: any) {
      setError(err.message || "Failed to update theme")
    } finally {
      setLoading(false)
    }
  }

  const copyIntegrationCode = () => {
    const code = `<script src="https://qurius-ai.vercel.app/embed.js"></script>
<script>
  window.QuriusChatWidget.init({
    companyName: "${companyData.name}",
    position: "bottom-right"
  });
</script>`
    
    navigator.clipboard.writeText(code)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <CompanyInfoStep companyData={companyData} setCompanyData={setCompanyData} onSubmit={handleCompanyInfoSubmit} loading={loading} error={error} />
      case 1:
        return <CustomizationStep onSubmit={handleCustomizationSubmit} loading={loading} />
      case 2:
        return <IntegrationStep companyName={companyData.name} onCopy={copyIntegrationCode} />
      case 3:
        return <CompleteStep companyName={companyData.name} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Welcome to Qurius AI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Set up your AI chat widget in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index <= currentStep 
                    ? "border-blue-600 bg-blue-600 text-white" 
                    : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                }`}>
                  {index < currentStep ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    index < currentStep ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center flex-1">
                <h3 className={`text-sm font-medium ${
                  index <= currentStep 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-500 dark:text-gray-400"
                }`}>
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          {renderStepContent()}
        </div>
      </div>
    </div>
  )
}

// Step Components
function CompanyInfoStep({ companyData, setCompanyData, onSubmit, loading, error }: any) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Company Information
      </h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              required
              value={companyData.name}
              onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 pr-2">
              Industry
            </label>
            <select
              value={companyData.industry}
              onChange={(e) => setCompanyData({ ...companyData, industry: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="">Select industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Website URL
          </label>
          <input
            type="url"
            value={companyData.website}
            onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="https://yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Contact Email *
          </label>
          <input
            type="email"
            required
            value={companyData.email}
            onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="contact@yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Location
          </label>
          <input
            type="text"
            value={companyData.location}
            onChange={(e) => setCompanyData({ ...companyData, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="e.g., New York, NY"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={companyData.description}
            onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            placeholder="Tell us about your business..."
          />
        </div>



        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

function CustomizationStep({ onSubmit, loading }: any) {
  const [theme, setTheme] = useState({
    primaryColor: "#3B82F6",
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937"
  })

  const defaultThemes = [
    { name: "Blue", primaryColor: "#3B82F6", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Green", primaryColor: "#10B981", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Purple", primaryColor: "#8B5CF6", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Orange", primaryColor: "#F59E0B", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Red", primaryColor: "#EF4444", backgroundColor: "#FFFFFF", textColor: "#1F2937" },
    { name: "Teal", primaryColor: "#14B8A6", backgroundColor: "#FFFFFF", textColor: "#1F2937" }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(theme)
  }

  const applyDefaultTheme = (defaultTheme: any) => {
    setTheme({
      primaryColor: defaultTheme.primaryColor,
      backgroundColor: defaultTheme.backgroundColor,
      textColor: defaultTheme.textColor
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Customize Your Widget
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Default Theme Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Choose a Theme
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {defaultThemes.map((defaultTheme, index) => (
              <button
                key={index}
                type="button"
                onClick={() => applyDefaultTheme(defaultTheme)}
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: defaultTheme.primaryColor }}
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {defaultTheme.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Primary Color
            </label>
            <input
              type="color"
              value={theme.primaryColor}
              onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
              className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Background Color
            </label>
            <input
              type="color"
              value={theme.backgroundColor}
              onChange={(e) => setTheme({ ...theme, backgroundColor: e.target.value })}
              className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Text Color
            </label>
            <input
              type="color"
              value={theme.textColor}
              onChange={(e) => setTheme({ ...theme, textColor: e.target.value })}
              className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Preview
          </h3>
          <div 
            className="w-full h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center"
            style={{ backgroundColor: theme.backgroundColor }}
          >
            <div className="text-center">
              <MessageCircle 
                className="h-8 w-8 mx-auto mb-2" 
                style={{ color: theme.primaryColor }}
              />
              <p style={{ color: theme.textColor }} className="text-sm">
                Chat Widget Preview
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

function IntegrationStep({ companyName, onCopy }: any) {
  const integrationCode = `<script src="https://qurius-ai.vercel.app/embed.js"></script>
<script>
  window.QuriusChatWidget.init({
    data-company: "${companyName}",
    data-theme: "light", //'light' or 'dark'
  });
</script>`

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Add Widget to Your Website
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            Integration Code
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Copy and paste this code into your website's HTML, just before the closing &lt;/body&gt; tag.
          </p>
          
          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-800 dark:text-gray-200">{integrationCode}</code>
            </pre>
            <button
              onClick={onCopy}
              className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
            📋 Instructions
          </h4>
          <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>1. Copy the code above</li>
            <li>2. Open your website's HTML file</li>
            <li>3. Paste the code before the &lt;/body&gt; tag</li>
            <li>4. Save and upload your website</li>
            <li>5. Test the widget on your live site</li>
          </ol>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => window.location.href = "/admin"}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Complete Setup
            <CheckCircle className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function CompleteStep({ companyName }: any) {
  return (
    <div className="text-center">
      <div className="mb-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Setup Complete!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Your AI chat widget is ready to use.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
        <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">
          🎉 Welcome to Qurius AI!
        </h3>
        <p className="text-green-800 dark:text-green-200 text-sm">
          Your company "{companyName}" has been successfully registered. 
          The chat widget is now active and ready to help your customers.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => window.location.href = "/admin"}
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Dashboard
        </button>
        
        <button
          onClick={() => window.open("https://qurius-ai.vercel.app/test-widget.html", "_blank")}
          className="w-full md:w-auto px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Test Widget
        </button>
      </div>
    </div>
  )
} 