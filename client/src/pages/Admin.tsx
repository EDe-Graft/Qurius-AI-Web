import { useState, useEffect } from "react"
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Plus,
  Settings,
  BarChart3,
  Activity,
  Sun,
  Moon,
  LogOut,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/admin/StatCard"
import { CompanyTable } from "@/components/admin/CompanyTable"
import { CompanyModal } from "@/components/admin/CompanyModal"
import { ConfirmDialog } from "@/components/admin/ConfirmDialog"
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard"
import FAQImport from "@/components/admin/FAQImport"
import { useTheme } from "@/context/useThemeContext"
import { useAuth } from "@/context/AuthContext"
import { CompanyService, type Company } from "@/services/companyService"
import { faqService } from "@/services/faqService"
import { Navigate } from "react-router-dom"

export default function Admin() {
  const { defaultTheme, toggleTheme } = useTheme()
  const { isAuthenticated, signOut } = useAuth()
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null)

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  // Load companies on component mount
  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedCompanies = await CompanyService.getAllCompanies()
        
        // Companies already come with real analytics data from backend
        setCompanies(fetchedCompanies)
      } catch (err: any) {
        console.error('Error loading companies:', err)
        setError(err.message || 'Failed to load companies')
      } finally {
        setLoading(false)
      }
    }

    loadCompanies()
  }, [])



  const [stats, setStats] = useState({
    totalCompanies: companies.length,
    activeWidgets: 0,
    monthlyRevenue: 0,
    monthlyGrowth: 0,
    revenueGrowth: 0
  })

  // Update stats when companies change
  useEffect(() => {
    const activeCompanies = companies.filter(c => c.status === 'active')
    const monthlyRevenue = companies.length * 800 // Mock revenue calculation

    setStats({
      totalCompanies: companies.length,
      activeWidgets: activeCompanies.length,
      monthlyRevenue,
      monthlyGrowth: companies.length > 0 ? 12.5 : 0, // Mock growth
      revenueGrowth: companies.length > 0 ? 8.2 : 0 // Mock growth
    })
  }, [companies])

  // Modal state
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    mode: 'view' | 'add' | 'edit'
    company: Company | null
  }>({
    isOpen: false,
    mode: 'view',
    company: null
  })

  // Confirmation dialog state
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean
    companyId: string | null
  }>({
    isOpen: false,
    companyId: null
  })

  // FAQ management state
  const [faqModal, setFaqModal] = useState<{
    isOpen: boolean
    companyId: string | null
    companyName: string
  }>({
    isOpen: false,
    companyId: null,
    companyName: ''
  })

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
        // Add new company via API
        const newCompany = await CompanyService.createCompany(company)
        setCompanies(prev => [...prev, { ...newCompany }])
      } else if (modalState.mode === 'edit' && modalState.company?.id) {
        // Update existing company via API
        const updatedCompany = await CompanyService.updateCompany(modalState.company.id, { ...company })
        setCompanies(prev => prev.map(c => 
          c.id === modalState.company?.id ? { ...updatedCompany } : c
        ))
      }
    } catch (error) {
      console.error('Error saving company:', error)
      // You could add a toast notification here
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
      const result = await faqService.importFAQs(faqModal.companyId, faqs)
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
                  Qurius-AI Admin
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Manage your chat widget service
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={handleAddCompany}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Company
              </Button>

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
            title="Total Companies"
            value={stats.totalCompanies}
            icon={Building2}
            trend={{ value: stats.monthlyGrowth, isPositive: true }}
          />
          <StatCard
            title="Active Widgets"
            value={stats.activeWidgets}
            icon={Activity}
          />
          <StatCard
            title="Monthly Revenue"
            value={`$${stats.monthlyRevenue.toLocaleString()}`}
            icon={TrendingUp}
            trend={{ value: stats.revenueGrowth, isPositive: true }}
          />
        </div>

        {/* Analytics Dashboard */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Analytics Dashboard
            </h2>
            {companies.length > 0 && (
              <select
                value={selectedCompanyId || ''}
                onChange={(e) => setSelectedCompanyId(e.target.value || null)}
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

        {/* FAQ Management */}
        {companies.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                FAQ Management
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Import and manage FAQs for your companies
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companies.map((company) => (
                  <div key={company.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        {company.name}
                      </h3>
                      <FileText className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Manage FAQs for this company
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleManageFAQs(company)}
                      className="w-full"
                    >
                      Manage FAQs
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Analytics
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  View detailed performance metrics
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  User Management
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage admin users and permissions
                </p>
              </div>
            </div>
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
                  System Settings
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Configure system preferences
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Loading Companies
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Fetching your company data...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="text-center">
              <div className="text-red-500 mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Error Loading Companies
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
        )}

        {/* Companies Table */}
        {!loading && !error && (
          <>           
            <CompanyTable
              companies={companies}
              onEdit={handleEditCompany}
              onDelete={handleDeleteCompany}
              onView={handleViewCompany}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
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
              <FAQImport
                // companyId={faqModal.companyId}
                onImport={handleFAQImport}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 