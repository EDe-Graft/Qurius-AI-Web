import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { 
  Building2, 
  Plus,
  Activity,
  Sun,
  Moon,
  LogOut,
  Globe,
  DollarSign
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCard, RatingStatCard, FAQMatchStatCard, AIFallbackStatCard, LeadStatCard } from "@/components/admin/StatCard"
import { CompanyTable } from "@/components/admin/CompanyTable"
import { CompanyModal } from "@/components/admin/CompanyModal"
import { ConfirmDialog } from "@/components/admin/ConfirmDialog"
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard"
import FAQImportModal from "@/components/admin/FAQImportModal"
import { IntegrationCodeModal } from "@/components/admin/IntegrationCodeModal"
import { CrawlerModal } from "@/components/admin/CrawlerModal"
import { FAQPreviewModal } from "@/components/admin/FAQPreviewModal"
import { FAQEditModal } from "@/components/admin/FAQEditModal"
import { NotificationCenter } from "@/components/admin/NotificationCenter"
import { LiveTestModal } from "@/components/admin/LiveTestModal"
// import { NotificationBanner } from "@/components/admin/NotificationBanner"
import AutomationManager from "@/components/admin/AutomationManager"
import { QuickActions, createIntegrationAction, createFAQManagementAction, createWidgetSettingsAction, createContentProcessorAction, createAutomationManagementAction, createLiveTestAction, createLeadManagementAction } from "@/components/admin/QuickActions"
import { useTheme } from "@/context/useThemeContext"
import { useAuth } from "@/context/AuthContext"
import { useNotifications } from "@/context/NotificationContext"
import { CompanyService, type Company } from "@/services/companyService"
import { faqService } from "@/services/faqService"
import { notificationService } from "@/services/notificationService"
import { AnalyticsService } from "@/services/analyticsService"
import { isSuperAdmin } from "@/lib/auth"
import { config } from "@/lib/config"
import axios from "axios"
import { LeadsTable } from "@/components/admin/LeadsModal"

interface QuriusAdminProps {
  user: any
}

export function QuriusAdmin({ user }: QuriusAdminProps) {
  const navigate = useNavigate()
  const { defaultTheme, toggleTheme } = useTheme()
  const { signOut } = useAuth()
  const { 
    loadAllNotifications, 
    // unreadCount, 
    showFAQPreview, 
    selectedSessionId, 
    closeFAQPreview 
  } = useNotifications()
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null)

  // FAQ preview data state
  const [faqPreviewData, setFaqPreviewData] = useState<any>(null)
  // const [showNotificationBanner, setShowNotificationBanner] = useState(false)
  const [showAutomationManager, setShowAutomationManager] = useState(false)
  const [showLiveTest, setShowLiveTest] = useState(false)
  const [showLeadsManagement, setShowLeadsManagement] = useState(false)

  // Enhanced analytics state
  const [systemAnalytics, setSystemAnalytics] = useState<{
    totalCompanies: number
    activeWidgets: number
    monthlyRevenue: number
    monthlyGrowth: number
    revenueGrowth: number
    totalRatings: number
    averageRating: number
    totalContentMatches: number
    totalTrueAIFallbacks: number
    averageContentMatchRate: number
    averageTrueAIFallbackRate: number
    totalLeads: number
    newLeads: number
    contactedLeads: number
    convertedLeads: number
    averageConversionRate: number
  }>({
    totalCompanies: 0,
    activeWidgets: 0,
    monthlyRevenue: 0,
    monthlyGrowth: 0,
    revenueGrowth: 0,
    totalRatings: 0,
    averageRating: 0,
    totalContentMatches: 0,
    totalTrueAIFallbacks: 0,
    averageContentMatchRate: 0,
    averageTrueAIFallbackRate: 0,
    totalLeads: 0,
    newLeads: 0,
    contactedLeads: 0,
    convertedLeads: 0,
    averageConversionRate: 0
  })

  // Selected company for Quick Actions
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

  // Modal states
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    mode: 'view' | 'add' | 'edit'
    company: Company | null
  }>({
    isOpen: false,
    mode: 'view',
    company: null
  })

  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean
    companyId: string | null
  }>({
    isOpen: false,
    companyId: null
  })

  const [faqModal, setFaqModal] = useState<{
    isOpen: boolean
    companyId: string | null
    companyName: string
  }>({
    isOpen: false,
    companyId: null,
    companyName: ''
  })

  const [integrationModal, setIntegrationModal] = useState<{
    isOpen: boolean
    companyName: string
    plan: string
    companyId: string
  }>({
    isOpen: false,
    companyName: '',
    plan: '',
    companyId: ''
  })


  const [showCrawler, setShowCrawler] = useState(false)
  const [faqModalLoading, setFaqModalLoading] = useState(false)

  // FAQ Edit modal state
  const [showFAQEdit, setShowFAQEdit] = useState(false)

  // Handle click outside FAQ modal to close
  const handleFAQModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeFAQModal();
    }
  };

  // Handle escape key to close FAQ modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && faqModal.isOpen) {
        closeFAQModal();
      }
    };

    if (faqModal.isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [faqModal.isOpen]);

  // Scroll to top when FAQ modal opens with loading screen
  useEffect(() => {
    if (faqModal.isOpen) {
      setFaqModalLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Hide loading screen after scroll animation completes
      const timer = setTimeout(() => {
        setFaqModalLoading(false);
      }, 1000); // Adjust timing as needed
      
      return () => clearTimeout(timer);
    }
  }, [faqModal.isOpen]);

  // Load FAQ data when modal opens from notification
  useEffect(() => {
    const loadFAQPreviewData = async () => {
      if (showFAQPreview && selectedSessionId && !faqPreviewData) {
        try {
          console.log('Loading FAQ data for session:', selectedSessionId)
          
          // Use notificationService to fetch crawl session data
          const sessionData = await notificationService.getCrawlSessionData(selectedSessionId)
          console.log('Session data received:', sessionData)
          
          if (sessionData.ai_generated_faqs && sessionData.ai_generated_faqs.length > 0) {
            setFaqPreviewData({
              faqs: sessionData.ai_generated_faqs,
              companyName: sessionData.company_name || 'Unknown Company',
              sessionId: selectedSessionId
            })
            console.log('FAQ data loaded successfully:', sessionData.ai_generated_faqs.length, 'FAQs')
          } else {
            console.warn('No AI-generated FAQs found in session')
            closeFAQPreview()
          }
        } catch (error) {
          console.error('Failed to load FAQ preview data:', error)
          closeFAQPreview()
        }
      }
    }

    loadFAQPreviewData()
  }, [showFAQPreview, selectedSessionId, faqPreviewData, closeFAQPreview])

  // Verify super admin access
  useEffect(() => {
    if (!isSuperAdmin(user)) {
      setError('Access denied. Super admin privileges required.')
      setLoading(false)
      return
    }

    const loadCompanies = async () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedCompanies = await CompanyService.getAllCompanies()
        setCompanies(fetchedCompanies)
        
        // Calculate system-wide analytics
        await calculateSystemAnalytics(fetchedCompanies)
        
        // Load notifications for all companies (super admin can see all)
        await loadAllNotifications()
        
        // Show notification banner if there are unread notifications
        // if (unreadCount > 0) {
        //   setShowNotificationBanner(true)
        // }
      } catch (err: any) {
        console.error('Error loading companies:', err)
        setError(err.message || 'Failed to load companies')
      } finally {
        setLoading(false)
      }
    }

    loadCompanies()
  }, [])

  // Calculate system-wide analytics
  const calculateSystemAnalytics = async (companies: Company[]) => {
    try {
      let totalRatings = 0
      let totalRatingSum = 0
      let totalContentMatches = 0
      let totalTrueAIFallbacks = 0
      let totalQueries = 0
      let totalLeads = 0
      let newLeads = 0
      let contactedLeads = 0
      let convertedLeads = 0
      // Removed: let totalConversionSum = 0

      // Get analytics for each company
      for (const company of companies) {
        if (company.id) {
          try {
            const [analytics, faqPerformance, leadAnalytics] = await Promise.all([
              AnalyticsService.getCompanyAnalytics(company.id, '7d'),
              AnalyticsService.getFAQPerformance(company.id, '7d'),
              AnalyticsService.getLeadAnalytics(company.id)
            ])

            totalRatings += analytics.totalRatings || 0
            totalRatingSum += (analytics.averageRating || 0) * (analytics.totalRatings || 0)
            totalContentMatches += analytics.contentMatchRate ? Math.round((analytics.contentMatchRate / 100) * (faqPerformance.totalQueries || 0)) : 0
            totalTrueAIFallbacks += analytics.trueAIFallbackRate ? Math.round((analytics.trueAIFallbackRate / 100) * (faqPerformance.totalQueries || 0)) : 0
            totalQueries += faqPerformance.totalQueries || 0

            // Lead analytics
            totalLeads += leadAnalytics.totalLeads || 0
            newLeads += leadAnalytics.newLeads || 0
            contactedLeads += leadAnalytics.contactedLeads || 0
            convertedLeads += leadAnalytics.convertedLeads || 0
            // Removed: totalConversionSum += leadAnalytics.conversionRate || 0
          } catch (error) {
            console.error(`Failed to load analytics for company ${company.id}:`, error)
          }
        }
      }

      const activeCompanies = companies.filter(c => c.status === 'active')
      const monthlyRevenue = companies.reduce((total, company) => {
        const planRevenue = company.plan === 'pro' ? 99 : company.plan === 'growth' ? 59 : company.plan === 'starter' ? 29 : 0
        return total + planRevenue
      }, 0)

      setSystemAnalytics({
        totalCompanies: companies.length,
        activeWidgets: activeCompanies.length,
        monthlyRevenue,
        monthlyGrowth: companies.length > 0 ? 12.5 : 0,
        revenueGrowth: companies.length > 0 ? 8.2 : 0,
        totalRatings,
        averageRating: totalRatings > 0 ? totalRatingSum / totalRatings : 0,
        totalContentMatches,
        totalTrueAIFallbacks,
        averageContentMatchRate: totalQueries > 0 ? (totalContentMatches / totalQueries) * 100 : 0,
        averageTrueAIFallbackRate: totalQueries > 0 ? (totalTrueAIFallbacks / totalQueries) * 100 : 0,
        totalLeads,
        newLeads,
        contactedLeads,
        convertedLeads,
        averageConversionRate: totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0
      })

    } catch (error) {
      console.error('Failed to calculate system analytics:', error)
    }
  }

  const handleAddCompany = () => {
    setModalState({
      isOpen: true,
      mode: 'add',
      company: null
    })
  }

  const handleEditCompany = (company: Company) => {
    setModalState({
      isOpen: true,
      mode: 'edit',
      company: company
    })
  }

  const handleDeleteCompany = (companyId: string) => {
    setConfirmDialog({
      isOpen: true,
      companyId: companyId
    })
  }

  const handleViewCompany = (company: Company) => {
    setModalState({
      isOpen: true,
      mode: 'view',
      company: company
    })
  }

  const handleSaveCompany = async (company: Company) => {
    try {
      if (modalState.mode === 'add') {
        const newCompany = await CompanyService.createCompany(company)
        setCompanies(prev => [...prev, { ...newCompany }])
      } else if (modalState.mode === 'edit' && modalState.company?.id) {
        const updatedCompany = await CompanyService.updateCompany(modalState.company.id, { ...company })
        setCompanies(prev => prev.map(c => 
          c.id === modalState.company?.id ? { ...updatedCompany } : c
        ))
      }
    } catch (error) {
      console.error('Error saving company:', error)
      alert(`Failed to ${modalState.mode === 'add' ? 'create' : 'update'} company: ${error}`)
    }
  }

  const handleConfirmDelete = async () => {
    if (confirmDialog.companyId) {
      try {
        await CompanyService.deleteCompany(confirmDialog.companyId)
        setCompanies(prev => prev.filter(c => c.id !== confirmDialog.companyId))
      } catch (error) {
        console.error('Error deleting company:', error)
        alert(`Failed to delete company: ${error}`)
      }
    }
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      mode: 'view',
      company: null
    })
  }

  const closeConfirmDialog = () => {
    setConfirmDialog({
      isOpen: false,
      companyId: null
    })
  }

  // FAQ management handlers
  const handleManageFAQs = (company: Company) => {
    setFaqModal({
      isOpen: true,
      companyId: company.id || null,
      companyName: company.name
    })
  }

  const handleFAQImport = async (faqs: Array<{ question: string; answer: string }>) => {
    if (!faqModal.companyId) return

    try {
      const result = await faqService.importFAQs(faqModal.companyId, faqModal.companyName, faqs)
      alert(`Successfully imported ${result.count} FAQs for ${faqModal.companyName}`)
      setFaqModal({ isOpen: false, companyId: null, companyName: '' })
    } catch (error) {
      console.error('Error importing FAQs:', error)
      alert(`Failed to import FAQs: ${error}`)
    }
  }

  const closeFAQModal = () => {
    setFaqModal({ isOpen: false, companyId: null, companyName: '' })
  }

  // Handle opening FAQ edit modal
  const handleFAQEdit = () => {
    setShowFAQEdit(true)
  }

  // Handle FAQ updates from edit modal
  const handleFAQsUpdated = () => {
    // Refresh analytics or any other data that might be affected
    if (selectedCompany?.id) {
      // Reload system analytics to reflect updated FAQ performance
      const loadSystemAnalytics = async () => {
        try {
          await calculateSystemAnalytics(companies)
        } catch (error) {
          console.error('Failed to reload system analytics after FAQ update:', error)
        }
      }
      loadSystemAnalytics()
    }
  }

  const handleSaveApprovedFAQs = async (approvedFAQs: Array<{ question: string; answer: string }>) => {
    if (!selectedSessionId) return

    try {
      const response = await axios.post(`${config.backendUrl}/api/crawler/save-faqs`, {
        sessionId: selectedSessionId,
        approvedFAQs
      })

      const result = response.data
      alert(`Successfully saved ${result.savedFAQs?.length || 0} approved FAQs`)
      closeFAQPreview()
      
      // Refresh notifications for all companies
      await loadAllNotifications()
    } catch (error) {
      console.error('Error saving approved FAQs:', error)
      alert(`Failed to save FAQs: ${error}`)
    }
  }

  // Integration code handlers
  const handleViewIntegrationCode = (company: Company) => {
    setIntegrationModal({
      isOpen: true,
      companyName: company.name,
      plan: company.plan || '',
      companyId: company.id || ''
    })
  }

  const closeIntegrationModal = () => {
    setIntegrationModal({ isOpen: false, companyName: '', plan: '', companyId: '' })
  }

  // Widget settings handlers
  const handleConfigureWidget = (company: Company) => {
    navigate(`/admin/widget-settings/${company.id}`)
  }


  // Quick Actions handlers for selected company
  const handleQuickActionFAQ = () => {
    if (selectedCompany) {
      handleManageFAQs(selectedCompany)
    }
  }

  const handleQuickActionIntegration = () => {
    if (selectedCompany) {
      handleViewIntegrationCode(selectedCompany)
    }
  }

  const handleQuickActionWidget = () => {
    if (selectedCompany) {
      handleConfigureWidget(selectedCompany)
    }
  }

  const handleQuickActionCrawler = () => {
    if (selectedCompany) {
      setShowCrawler(true)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Loading Super Admin Dashboard
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Fetching system data...
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
            Access Denied
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {error}
          </p>
          <Button
            onClick={() => signOut()}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Sign Out
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
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 pt-15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            {/* Top row - Title and icon buttons */}
            <div className="flex justify-between items-start mb-4 lg:mb-0 animate-fade-in-up animation-delay-2000">
              <div className="flex-shrink-0 min-w-0 flex-1 pr-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Qurius-AI Super Admin
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Manage all companies and system-wide analytics
                </p>
              </div>
              
              {/* Icon buttons - always visible */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <NotificationCenter />
                
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

            {/* Bottom row - Add Company button */}
            <div className="flex justify-start lg:justify-end">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
                onClick={handleAddCompany}
              >
                <Plus className="h-4 w-4 mr-2" />
                <span className="sm:inline">Add Company</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-0">
        {/* System Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up animation-delay-4000">
          <StatCard
            title="Total Companies"
            value={systemAnalytics.totalCompanies}
            icon={Building2}
            trend={{ value: systemAnalytics.monthlyGrowth, isPositive: true }}
            type="count"
          />
          <StatCard
            title="Active Widgets"
            value={systemAnalytics.activeWidgets}
            icon={Activity}
            type="count"
          />
          <StatCard
            title="Monthly Revenue"
            value={`$${systemAnalytics.monthlyRevenue.toLocaleString()}`}
            icon={DollarSign}
            trend={{ value: systemAnalytics.revenueGrowth, isPositive: true }}
          />
          <StatCard
            title="System Health"
            value="100%"
            icon={Globe}
            color="success"
          />
        </div>

        {/* Enhanced System Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up animation-delay-4000">
          <RatingStatCard
            title="System Rating"
            value={systemAnalytics.averageRating}
            positiveRatings={Math.round(systemAnalytics.totalRatings * 0.7)} // Estimate
            negativeRatings={Math.round(systemAnalytics.totalRatings * 0.3)} // Estimate
            totalRatings={systemAnalytics.totalRatings}
            color={systemAnalytics.averageRating >= 4 ? 'success' : systemAnalytics.averageRating >= 3 ? 'warning' : 'danger'}
          />
          <FAQMatchStatCard
            title="Avg Content Match Rate"
            value={systemAnalytics.averageContentMatchRate}
            faqMatches={systemAnalytics.totalContentMatches}
            totalQueries={systemAnalytics.totalContentMatches + systemAnalytics.totalTrueAIFallbacks}
            color={systemAnalytics.averageContentMatchRate >= 70 ? 'success' : systemAnalytics.averageContentMatchRate >= 50 ? 'warning' : 'danger'}
          />
          <AIFallbackStatCard
            title="Avg True AI Fallback Rate"
            value={systemAnalytics.averageTrueAIFallbackRate}
            aiFallbacks={systemAnalytics.totalTrueAIFallbacks}
            totalQueries={systemAnalytics.totalContentMatches + systemAnalytics.totalTrueAIFallbacks}
            color={systemAnalytics.averageTrueAIFallbackRate <= 30 ? 'success' : systemAnalytics.averageTrueAIFallbackRate <= 50 ? 'warning' : 'danger'}
          />
          <LeadStatCard
            totalLeads={systemAnalytics.totalLeads}
            newLeads={systemAnalytics.newLeads}
            contactedLeads={systemAnalytics.contactedLeads}
            convertedLeads={systemAnalytics.convertedLeads}
            conversionRate={systemAnalytics.averageConversionRate}
          />
        </div>

        {/* Analytics Dashboard */}
        <div className="mb-8 animate-fade-in-up animation-delay-4000">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              System Analytics
            </h2>
            {companies.length > 0 && (
              <select
                value={selectedCompanyId || ''}
                onChange={(e) => {
                  const companyId = e.target.value || null
                  setSelectedCompanyId(companyId)
                  // Set selected company for Quick Actions
                  if (companyId) {
                    const company = companies.find(c => c.id === companyId)
                    setSelectedCompany(company || null)
                  } else {
                    setSelectedCompany(null)
                  }
                }}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="">All Companies</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <AnalyticsDashboard
            companyId={selectedCompanyId}
          />
        </div>

        {/* Quick Actions */}
        <QuickActions
          actions={[
            createIntegrationAction(
              handleQuickActionIntegration,
              selectedCompany?.name,
              !selectedCompany
            ),
            createFAQManagementAction(
              handleQuickActionFAQ,
              selectedCompany?.name,
              !selectedCompany
            ),
            createLeadManagementAction(
              () => setShowLeadsManagement(true),
              selectedCompany?.name,
              !selectedCompany
            ),
            createWidgetSettingsAction(
              handleQuickActionWidget,
              selectedCompany?.name,
              !selectedCompany
            ),
            createContentProcessorAction(
              handleQuickActionCrawler,
              selectedCompany?.name,
              !selectedCompany
            ),
            createAutomationManagementAction(
              () => setShowAutomationManager(true)
            ),
            createLiveTestAction(
              () => setShowLiveTest(true)
            )
          ]}
          gridCols="4"
        />

        {/* Companies Table */}
        {!loading && !error && (
          <>           
            <CompanyTable
              companies={companies}
              onEdit={handleEditCompany}
              onDelete={handleDeleteCompany}
              onView={handleViewCompany}
              onManageFAQs={handleManageFAQs}
              onViewIntegrationCode={handleViewIntegrationCode}
              onConfigureWidget={handleConfigureWidget}
            />
          </>
        )}
      </main>

      {/* Company Modal */}
      <CompanyModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        company={modalState.company}
        mode={modalState.mode}
        onSave={handleSaveCompany}
        onDelete={handleDeleteCompany}
      />

      {/* Confirmation Dialog */}
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        onClose={closeConfirmDialog}
        onConfirm={handleConfirmDelete}
        title="Delete Company"
        message="Are you sure you want to delete this company? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        type="danger"
      />

      {/* FAQ Import Modal */}
      {faqModal.isOpen && faqModal.companyId && (
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
                  Manage FAQs - {faqModal.companyName}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeFAQModal}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <FAQImportModal
                onImport={handleFAQImport}
                onEditExisting={handleFAQEdit}
                showEditButton={true}
              />
            </div>
          </div>
        </div>
      </>
      )}

      {/* FAQ Edit Modal */}
      <FAQEditModal
        isOpen={showFAQEdit}
        onClose={() => setShowFAQEdit(false)}
        companyId={selectedCompany?.id || ''}
        companyName={selectedCompany?.name || ''}
        onFAQsUpdated={handleFAQsUpdated}
      />

      {/* Integration Code Modal */}
      <IntegrationCodeModal
        isOpen={integrationModal.isOpen}
        onClose={closeIntegrationModal}
        companyName={integrationModal.companyName}
        companyId={integrationModal.companyId}
        plan={integrationModal.plan}
      />

      {/* Widget Settings Modal */}

      {/* Crawler Modal */}
      {selectedCompany && (
        <CrawlerModal
          isOpen={showCrawler}
          onClose={() => setShowCrawler(false)}
          companyId={selectedCompany.id || ''}
          companyName={selectedCompany.name || ''}
        />
      )}

      {/* Notification Banner */}
      {/* {showNotificationBanner && unreadCount > 0 && (
        <NotificationBanner
          message={`You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`}
          actionLabel="View All"
          onAction={() => setShowNotificationBanner(false)}
          onDismiss={() => setShowNotificationBanner(false)}
          type="info"
          autoDismiss={false}
        />
      )} */}

      {/* FAQ Preview Modal for Notifications */}
      {showFAQPreview && selectedSessionId && (
        <FAQPreviewModal
          isOpen={showFAQPreview}
          generatedFAQs={faqPreviewData?.faqs || []}
          companyName={faqPreviewData?.companyName || 'Unknown Company'}
          onSaveApproved={handleSaveApprovedFAQs}
          onClose={() => {
            closeFAQPreview()
            setFaqPreviewData(null)
          }}
        />
      )}

      {/* Automation Manager Modal */}
      {showAutomationManager && (
        <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-7xl w-full mx-4 my-15 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Automation Management
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAutomationManager(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <AutomationManager />
            </div>
          </div>
        </div>
      )}

      {/* Live Test Modal */}
      <LiveTestModal
        isOpen={showLiveTest}
        onClose={() => setShowLiveTest(false)}
        companies={companies}
        selectedCompanyId={selectedCompanyId || undefined}
      />

      {/* Leads Management Modal */}
      {showLeadsManagement && selectedCompany && (
        <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-7xl w-full mx-4 my-15 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Lead Management - {selectedCompany.name}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLeadsManagement(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <LeadsTable 
                companyId={selectedCompany.id || ''} 
                companyName={selectedCompany.name || ''} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 