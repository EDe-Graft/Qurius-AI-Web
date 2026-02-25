import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { CompanyService, type Company } from '@/services/companyService'
import axios from 'axios'

// Company data interface - using the same interface as CompanyService but with required plan and status
interface CompanyData extends Omit<Company, 'plan' | 'status'> {
  plan: string
  status: string
}

// Company data context interface
interface CompanyDataContextType {
  quriusData: CompanyData | null
  isDataLoading: boolean
  error: string | null
}

// Create context
const CompanyDataContext = createContext<CompanyDataContextType | undefined>(undefined)

// Company data provider props
interface CompanyDataProviderProps {
  children: ReactNode
}

// Company data provider component
export function CompanyDataProvider({ children }: CompanyDataProviderProps) {
  const [quriusData, setQuriusData] = useState<CompanyData | null>(null)
  const [isDataLoading, setIsDataLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize company data once on mount
  useEffect(() => {
    const initializeCompanyData = async () => {
      setIsDataLoading(true)
      setError(null)

      try {
        console.log('🔄 Fetching company data from API...')

        // First, get the demo company IDs from backend
        const backendUrl = window.location.hostname === 'qurius.app' ? 'https://qurius-ai.onrender.com' : 'http://localhost:3000'
        const companyIdsResponse = await axios.get(`${backendUrl}/api/demo/company-ids`)
        const { quriusCompanyId } = companyIdsResponse.data

        console.log('🔑 Retrieved company IDs from backend')

        // Fetch Qurius AI company data
        const quriusResponse = await CompanyService.getCompanyById(quriusCompanyId)
        setQuriusData(quriusResponse as CompanyData)
        console.log('✅ Qurius AI data fetched successfully:', quriusResponse.name)

        console.log('✅ Company data initialization completed')
      } catch (error) {
        console.error('❌ Error initializing company data:', error)
        setError('Failed to load company data')
        
        // Set fallback data if API fails completely (using hardcoded IDs as last resort)
        const fallbackQuriusId = '2bdad203-31da-403f-90d1-049a28d7adfc'
        
        setQuriusData({
          id: fallbackQuriusId,
          name: 'Qurius AI',
          plan: 'pro',
          status: 'active',
          theme: {
            primaryColor: "#3B82F6",
            backgroundColor: "#FFFFFF",
            textColor: "#1F2937"
          },
          contact_email: 'support@qurius.ai',
          admin_email: 'admin@qurius.ai',
          domain: 'qurius.app',
          location: 'Tech Valley, CA',
          description: 'AI-powered customer support platform that provides intelligent chatbots for businesses.',
          industry: 'AI/Technology',
          website: 'https://qurius.app',
          logo_url: '',
          enrollment_date: '2024-01-01',
          subscription_status: 'active',
          subscription_end_date: '2050-01-01',
        })
      } finally {
        setIsDataLoading(false)
      }
    }

    initializeCompanyData()
  }, [])

  // Context value
  const contextValue: CompanyDataContextType = {
    quriusData,
    isDataLoading,
    error
  }

  return (
    <CompanyDataContext.Provider value={contextValue}>
      {children}
    </CompanyDataContext.Provider>
  )
}

// Custom hook to use company data context
export function useCompanyData() {
  const context = useContext(CompanyDataContext)
  if (context === undefined) {
    throw new Error('useCompanyData must be used within a CompanyDataProvider')
  }
  return context
} 