import { useState, useEffect } from "react"
import { 
  Activity,
  FileText,
  Settings,
  Users,
  MessageCircle,
  Eye,
  Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/admin/StatCard"
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard"
import FAQImport from "@/components/admin/FAQImport"
import { useTheme } from "@/context/useThemeContext"
import { useAuth } from "@/context/AuthContext"
import { CompanyService, type Company } from "@/services/companyService"
import { faqService } from "@/services/faqService"
import { getUserRole } from "@/lib/auth"

interface CompanyAdminProps {
  user: any
}

export function CompanyAdmin({ user }: CompanyAdminProps) {
  const { defaultTheme, toggleTheme } = useTheme()
  const { signOut } = useAuth()
  const [company, setCompany] = useState<Company | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showFAQImport, setShowFAQImport] = useState(false)

  // Get company data for this admin
  useEffect(() => {
    const loadCompany = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const userRole = getUserRole(user)
        if (userRole !== 'company_admin') {
          throw new Error('Access denied')
        }

        const companyId = user.user_metadata?.company_id
        if (!companyId) {
          throw new Error('Company ID not found')
        }

        const companyData = await CompanyService.getCompanyById(companyId)
        setCompany(companyData)
      } catch (err: any) {
        console.error('Error loading company:', err)
        setError(err.message || 'Failed to load company data')
      } finally {
        setLoading(false)
      }
    }

    loadCompany()
  }, [user])

  const [stats, setStats] = useState({
    totalViews: 0,
    totalInteractions: 0,
    totalMessages: 0,
    totalResponses: 0,
    uniqueSessions: 0,
    lastActivity: 'Never'
  })

  // Update stats when company data changes
  useEffect(() => {
    if (company?.analytics) {
      setStats({
        totalViews: company.analytics.totalViews || 0,
        totalInteractions: company.analytics.totalInteractions || 0,
        totalMessages: company.analytics.totalMessages || 0,
        totalResponses: company.analytics.totalResponses || 0,
        uniqueSessions: company.analytics.uniqueSessions || 0,
        lastActivity: company.analytics.lastActivity || 'Never'
      })
    }
  }, [company])

  const handleFAQImport = async (faqs: Array<{ question: string; answer: string }>) => {
    if (!company?.id) return

    try {
      const result = await faqService.importFAQs(company.id, faqs)
      alert(`Successfully imported ${result.count} FAQs for ${company.name}`)
      setShowFAQImport(false)
    } catch (error) {
      console.error('Error importing FAQs:', error)
      alert(`Failed to import FAQs: ${error}`)
    }
  }

  const copyIntegrationCode = () => {
    const code = `<script src="${window.location.origin}/embed.js" data-company="${company?.name}"></script>`
    navigator.clipboard.writeText(code)
    alert('Integration code copied to clipboard!')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Loading Your Dashboard
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Fetching your company data...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Error Loading Dashboard
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {error}
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      defaultTheme === "dark" ? "dark bg-gray-900" : "bg-gray-50"
    }`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 pt-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {company?.name} Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Manage your AI chat widget
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="flex items-center justify-center"
              >
                {defaultTheme === "dark" ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0012 21a9 9 0 006.354-5.646z" />
                  </svg>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                className="flex items-center justify-center text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Widget Views"
            value={stats.totalViews}
            icon={Eye}
          />
          <StatCard
            title="Total Interactions"
            value={stats.totalInteractions}
            icon={Activity}
          />
          <StatCard
            title="Messages Sent"
            value={stats.totalMessages}
            icon={MessageCircle}
          />
          <StatCard
            title="Unique Sessions"
            value={stats.uniqueSessions}
            icon={Users}
          />
        </div>

        {/* Analytics Dashboard */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Analytics Dashboard
            </h2>
          </div>
          <AnalyticsDashboard
            companyId={company?.id}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Download className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Integration Code
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get your widget integration code
                </p>
              </div>
            </div>
            <Button
              onClick={copyIntegrationCode}
              className="mt-4 w-full"
              variant="outline"
            >
              Copy Integration Code
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  FAQ Management
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Import and manage your FAQs
                </p>
              </div>
            </div>
            <Button
              onClick={() => setShowFAQImport(true)}
              className="mt-4 w-full"
              variant="outline"
            >
              Manage FAQs
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Widget Settings
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Customize your chat widget
                </p>
              </div>
            </div>
            <Button
              onClick={() => alert('Widget settings coming soon!')}
              className="mt-4 w-full"
              variant="outline"
            >
              Configure Widget
            </Button>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Company Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Company Name
              </label>
              <p className="text-gray-900 dark:text-gray-100">{company?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Plan
              </label>
              <p className="text-gray-900 dark:text-gray-100 capitalize">{company?.plan}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Contact Email
              </label>
              <p className="text-gray-900 dark:text-gray-100">{company?.contact_email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Status
              </label>
              <p className="text-gray-900 dark:text-gray-100 capitalize">{company?.status}</p>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Import Modal */}
      {showFAQImport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Manage FAQs - {company?.name}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFAQImport(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <FAQImport
                onImport={handleFAQImport}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 