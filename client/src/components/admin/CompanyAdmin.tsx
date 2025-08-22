import { useState, useEffect } from "react"
import { 
  Activity,
  FileText,
  Settings,
  Users,
  MessageCircle,
  Eye,
  Download,
  LogOut,
  Sun,
  Moon,
  Building2,
  Globe,
  Mail,
  Calendar,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCard, RatingStatCard, FAQMatchStatCard, AIFallbackStatCard } from "@/components/admin/StatCard"
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard"
import FAQImportModal from "@/components/admin/FAQImportModal"
import { IntegrationCodeModal } from "@/components/admin/IntegrationCodeModal"
import { WidgetSettingsModal } from "@/components/admin/WidgetSettingsModal"
import { CrawlerModal } from "@/components/admin/CrawlerModal"
import { useTheme } from "@/context/useThemeContext"
import { useAuth } from "@/context/AuthContext"
import { CompanyService, type Company } from "@/services/companyService"
import { faqService } from "@/services/faqService"
import { AnalyticsService, type WidgetAnalytics, type FAQPerformance } from "@/services/analyticsService"
import { getUserRole } from "@/lib/auth"
import { toTitleCase } from "@/lib/utils"

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
  const [showWidgetConfig, setShowWidgetConfig] = useState(false)
  const [showIntegrationCode, setShowIntegrationCode] = useState(false)
  const [showCrawler, setShowCrawler] = useState(false)
  const [faqModalLoading, setFaqModalLoading] = useState(false)

  // Handle click outside FAQ modal to close
  const handleFAQModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowFAQImport(false);
    }
  };

  // Handle escape key to close FAQ modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showFAQImport) {
        setShowFAQImport(false);
      }
    };

    if (showFAQImport) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showFAQImport]);

  // Scroll to top when FAQ modal opens with loading screen
  useEffect(() => {
    if (showFAQImport) {
      setFaqModalLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Hide loading screen after scroll animation completes
      const timer = setTimeout(() => {
        setFaqModalLoading(false);
      }, 1000); // Adjust timing as needed
      
      return () => clearTimeout(timer);
    }
  }, [showFAQImport]);

  // Enhanced analytics state
  const [analytics, setAnalytics] = useState<WidgetAnalytics | null>(null)

  const [faqPerformance, setFaqPerformance] = useState<FAQPerformance | null>(null)
  const [analyticsLoading, setAnalyticsLoading] = useState(false)

  // Get company data for this admin
  useEffect(() => {
    const loadCompany = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const userRole = getUserRole(user)
        if (userRole !== 'company_admin' && userRole !== 'super_admin') {
          throw new Error('Access denied')
        }
        
        // Get company ID from user metadata
        const companyId = user?.user_metadata?.company_id
        if (!companyId) {
          console.error('❌ Company ID not found in user metadata')
          throw new Error('Company ID not found. Please contact support.')
        }

        const companyData = await CompanyService.getCompanyById(companyId)
        setCompany(companyData)
        // console.log("company data", companyData)
      } catch (err: any) {
        console.error('❌ Error loading company:', err)
        setError(err.message || 'Failed to load company data')
      } finally {
        setLoading(false)
      }
    }

    loadCompany()
  }, [])

  // Load enhanced analytics when company is available
  useEffect(() => {
    const loadAnalytics = async () => {
      if (!company?.id) return

      try {
        setAnalyticsLoading(true)
        
        // Load all analytics data in parallel
        const [analyticsData, faqData] = await Promise.all([
          AnalyticsService.getCompanyAnalytics(company.id, '7d'),
          AnalyticsService.getFAQPerformance(company.id, '7d')
        ])

        setAnalytics(analyticsData)
        // Ratings data is now included in the main analytics
        setFaqPerformance(faqData)
      } catch (error) {
        console.error('Failed to load analytics:', error)
      } finally {
        setAnalyticsLoading(false)
      }
    }

    loadAnalytics()
  }, [company?.id])

  const handleFAQImport = async (faqs: Array<{ question: string; answer: string }>) => {
    if (!company?.id) return

    try {
      const result = await faqService.importFAQs(company.id, company.name, faqs)
      alert(`Successfully imported ${result.count} FAQs for ${company.name}`)
      setShowFAQImport(false)
    } catch (error) {
      console.error('Error importing FAQs:', error)
      alert(`Failed to import FAQs: ${error}`)
    }
  }

  const handleThemeUpdate = (newTheme: any) => {
    setCompany(prev => prev ? { ...prev, theme: newTheme } : null)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center animate-fade-in-up animation-delay-2000">
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center animate-fade-in-up animation-delay-2000">
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
    } animate-fade-in-up animation-delay-2000`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 pt-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            {/* Company title and icon buttons */}
            <div className="flex justify-between items-start">
              <div className="flex-shrink-0 min-w-0 flex-1 pr-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  {company?.name} Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Manage your AI chat widget
                </p>
              </div>
              
              {/* Icon buttons - always visible */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="flex items-center justify-center"
                >
                  {defaultTheme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={signOut}
                  className="flex items-center justify-center text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Widget Views"
            value={analytics?.totalViews || 0}
            icon={Eye}
            type="count"
          />
          <StatCard
            title="Total Interactions"
            value={analytics?.totalInteractions || 0}
            icon={Activity}
            type="count"
          />
          <StatCard
            title="Messages Sent"
            value={analytics?.totalMessages || 0}
            icon={MessageCircle}
            type="count"
          />
          <StatCard
            title="Unique Sessions"
            value={analytics?.uniqueSessions || 0}
            icon={Users}
            type="count"
          />
        </div>

        {/* Enhanced Analytics Cards */}
        {analytics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <RatingStatCard
              title="Average Rating"
              value={analytics.averageRating || 0}
              positiveRatings={analytics.positiveRatings}
              negativeRatings={analytics.negativeRatings}
              totalRatings={analytics.totalRatings}
              color={analytics.averageRating >= 4 ? 'success' : analytics.averageRating >= 3 ? 'warning' : 'danger'}
            />
            <FAQMatchStatCard
              title="FAQ Match Rate"
              value={analytics.faqMatchRate || 0}
              faqMatches={faqPerformance?.faqMatches}
              totalQueries={faqPerformance?.totalQueries}
              color={analytics.faqMatchRate >= 70 ? 'success' : analytics.faqMatchRate >= 50 ? 'warning' : 'danger'}
            />
            <AIFallbackStatCard
              title="AI Fallback Rate"
              value={analytics.aiFallbackRate || 0}
              aiFallbacks={faqPerformance?.aiFallbacks}
              totalQueries={faqPerformance?.totalQueries}
              color={analytics.aiFallbackRate <= 30 ? 'success' : analytics.aiFallbackRate <= 50 ? 'warning' : 'danger'}
            />
            <StatCard
              title="Language Changes"
              value={analytics.languageChanges || 0}
              icon={Globe}
              type="count"
              color="info"
            />
          </div>
        )}

        {/* Analytics Dashboard for non-free users */}
        {company?.plan !== 'free' && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Analytics Dashboard
            </h2>
            {analyticsLoading && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                Loading analytics...
              </div>
            )}
          </div>
          <AnalyticsDashboard
            companyId={company?.id}
          />
          </div>
        )}

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
              onClick={() => setShowIntegrationCode(true)}
              className="mt-4 w-full"
              variant="outline"
            >
              View Integration Code
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

          {/* Widget Settings for non-free users */}
          {company?.plan !== 'free' && (
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
              onClick={() => setShowWidgetConfig(true)}
              className="mt-4 w-full"
              variant="outline"
            >
              Configure Widget
            </Button>
          </div>
          )}

          {/* Website Crawler for pro users */}
          {company?.plan === 'pro' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Content Processor
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Auto-generate FAQs from your website or uploaded documents
                </p>
              </div>
            </div>
            <Button
              onClick={() => setShowCrawler(true)}
              className="mt-4 w-full"
              variant="outline"
            >
              Process Content
            </Button>
          </div>
          )}
        </div>

        {/* Company Information */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Company Information
          </h2>
          
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Building2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company Name
                </label>
                <p className="text-gray-900 dark:text-gray-100 font-medium">{company?.name || 'Company Name'}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Domain
                </label>
                <p className="text-gray-900 dark:text-gray-100">{company?.domain || 'Not set'}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Plan
                </label>
                <p className="text-gray-900 dark:text-gray-100 capitalize">{company?.plan}</p>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <Mail className="h-4 w-4 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Admin Email
                </label>
                <p className="text-gray-900 dark:text-gray-100">{company?.admin_email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Mail className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contact Email
                </label>
                <p className="text-gray-900 dark:text-gray-100">{company?.contact_email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Website
                </label>
                <p className="text-gray-900 dark:text-gray-100">{company?.website || 'Not set'}</p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Industry
              </label>
              <p className="text-gray-900 dark:text-gray-100">{company?.industry || 'Not specified'}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Location
              </label>
              <p className="text-gray-900 dark:text-gray-100">{company?.location || 'Not specified'}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Status
              </label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                company?.status === 'active' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {toTitleCase(company?.status || '')}
              </span>
            </div>
          </div>

          {/* Description */}
          {company?.description && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                {company.description}
              </p>
            </div>
          )}

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Enrollment Date
              </label>
              <p className="text-gray-900 dark:text-gray-100">
                {company?.enrollment_date ? formatDate(company.enrollment_date) : 'Not set'}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Active
              </label>
              <p className="text-gray-900 dark:text-gray-100">
                {company?.last_active ? formatDate(company.last_active) : 'Never'}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Import Modal */}
      {showFAQImport && (
        <>
          {/* Loading overlay */}
          {faqModalLoading && (
            <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-[60]">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mt-50 flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Loading...</p>
              </div>
            </div>
          )}
          
          <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={handleFAQModalBackdropClick}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4 my-15 max-h-[90vh] overflow-y-auto">
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
              <FAQImportModal
                onImport={handleFAQImport}
              />
            </div>
          </div>
        </div>
      </>
      )}

      {/* Integration Code Modal */}
      <IntegrationCodeModal
        isOpen={showIntegrationCode}
        onClose={() => setShowIntegrationCode(false)}
        companyName={company?.name || ''}
        companyId={company?.id || ''}
        plan={company?.plan || ''}
      />

      {/* Widget Settings Modal */}
      <WidgetSettingsModal
        isOpen={showWidgetConfig}
        onClose={() => setShowWidgetConfig(false)}
        companyId={company?.id || ''}
        initialTheme={company?.theme || {
          primaryColor: '#9810fa',
          backgroundColor: '#ffffff',
          textColor: '#000000'
        }}
        onThemeUpdate={handleThemeUpdate}
      />

      {/* Crawler Modal */}
      <CrawlerModal
        isOpen={showCrawler}
        onClose={() => setShowCrawler(false)}
        companyId={company?.id || ''}
        companyName={company?.name || ''}
      />
    </div>
  )
} 