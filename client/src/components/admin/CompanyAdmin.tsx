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
  Palette,
  Save,
  X
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
import { toTitleCase } from "@/lib/utils"

interface CompanyAdminProps {
  user: any
}

interface WidgetTheme {
  primaryColor: string
  backgroundColor: string
  textColor: string
}

export function CompanyAdmin({ user }: CompanyAdminProps) {
  const { defaultTheme, toggleTheme } = useTheme()
  const { signOut } = useAuth()
  const [company, setCompany] = useState<Company | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showFAQImport, setShowFAQImport] = useState(false)
  const [showWidgetConfig, setShowWidgetConfig] = useState(false)
  const [widgetTheme, setWidgetTheme] = useState<WidgetTheme>({
    primaryColor: '#9810fa',
    backgroundColor: '#ffffff',
    textColor: '#000000'
  })
  const [savingTheme, setSavingTheme] = useState(false)

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

        const companyData = await CompanyService.getCompanyById('18c69d1d-89c3-432f-b7e6-cb69c67de342')
        setCompany(companyData)
        console.log("company data", companyData)
        
        // Initialize widget theme from company data
        if (companyData?.theme) {
          setWidgetTheme(companyData.theme)
        }
      } catch (err: any) {
        console.error('❌ Error loading company:', err)
        setError(err.message || 'Failed to load company data')
      } finally {
        setLoading(false)
      }
    }

    loadCompany()
  }, [])

  // Stats
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

  const handleSaveTheme = async () => {
    if (!company?.id) return

    try {
      setSavingTheme(true)
      // Update company theme
      await CompanyService.updateCompany(company.id, {
        theme: widgetTheme
      })
      
      // Update local company state
      setCompany(prev => prev ? { ...prev, theme: widgetTheme } : null)
      
      alert('Widget theme updated successfully!')
      setShowWidgetConfig(false)
    } catch (error) {
      console.error('Error saving theme:', error)
      alert(`Failed to save theme: ${error}`)
    } finally {
      setSavingTheme(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const ColorPicker = ({ 
    label, 
    color, 
    onChange 
  }: { 
    label: string
    color: string
    onChange: (color: string) => void 
  }) => (
    <div className="flex items-center space-x-3">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[120px]">
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="#000000"
        />
      </div>
    </div>
  )

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
              onClick={() => setShowWidgetConfig(true)}
              className="mt-4 w-full"
              variant="outline"
            >
              Configure Widget
            </Button>
          </div>
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

      {/* Widget Configuration Modal */}
      {showWidgetConfig && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <Palette className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Widget Theme Configuration
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowWidgetConfig(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Theme Preview */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Theme Preview
                  </h3>
                  <div 
                    className="w-full h-20 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center"
                    style={{ backgroundColor: widgetTheme.backgroundColor }}
                  >
                    <div 
                      className="px-4 py-2 rounded-lg text-sm font-medium"
                      style={{ 
                        backgroundColor: widgetTheme.primaryColor,
                        color: widgetTheme.textColor
                      }}
                    >
                      Sample Widget Button
                    </div>
                  </div>
                </div>

                {/* Color Configuration */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Color Settings
                  </h3>
                  
                  <ColorPicker
                    label="Primary Color"
                    color={widgetTheme.primaryColor}
                    onChange={(color) => setWidgetTheme(prev => ({ ...prev, primaryColor: color }))}
                  />
                  
                  <ColorPicker
                    label="Background Color"
                    color={widgetTheme.backgroundColor}
                    onChange={(color) => setWidgetTheme(prev => ({ ...prev, backgroundColor: color }))}
                  />
                  
                  <ColorPicker
                    label="Text Color"
                    color={widgetTheme.textColor}
                    onChange={(color) => setWidgetTheme(prev => ({ ...prev, textColor: color }))}
                  />
                </div>

                {/* Preset Themes */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Preset Themes
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setWidgetTheme({
                        primaryColor: '#9810fa',
                        backgroundColor: '#ffffff',
                        textColor: '#000000'
                      })}
                      className="text-xs"
                    >
                      Purple Theme
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setWidgetTheme({
                        primaryColor: '#3B82F6',
                        backgroundColor: '#ffffff',
                        textColor: '#1F2937'
                      })}
                      className="text-xs"
                    >
                      Blue Theme
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setWidgetTheme({
                        primaryColor: '#10B981',
                        backgroundColor: '#ffffff',
                        textColor: '#000000'
                      })}
                      className="text-xs"
                    >
                      Green Theme
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setWidgetTheme({
                        primaryColor: '#F59E0B',
                        backgroundColor: '#ffffff',
                        textColor: '#000000'
                      })}
                      className="text-xs"
                    >
                      Orange Theme
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    variant="outline"
                    onClick={() => setShowWidgetConfig(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveTheme}
                    disabled={savingTheme}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {savingTheme ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Saving...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Save className="h-4 w-4" />
                        <span>Save Theme</span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 