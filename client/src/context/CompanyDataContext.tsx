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
  purpleSoftData: CompanyData | null
  isLoading: boolean
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
  const [purpleSoftData, setPurpleSoftData] = useState<CompanyData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize company data once on mount
  useEffect(() => {
    const initializeCompanyData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        console.log('🔄 Fetching company data from API...')

        // First, get the demo company IDs from backend
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        const companyIdsResponse = await axios.get(`${backendUrl}/api/demo/company-ids`)
        const { quriusCompanyId, purpleSoftCompanyId } = companyIdsResponse.data

        console.log('🔑 Retrieved company IDs from backend')

        // Fetch both company datasets in parallel using the retrieved IDs
        const [quriusResponse, purpleSoftResponse] = await Promise.allSettled([
          CompanyService.getCompanyById(quriusCompanyId),
          CompanyService.getCompanyById(purpleSoftCompanyId)
        ])

        // Handle Qurius AI data
        if (quriusResponse.status === 'fulfilled') {
          setQuriusData(quriusResponse.value as CompanyData)
          console.log('✅ Qurius AI data fetched successfully:', quriusResponse.value.name)
        } else {
          console.error('❌ Failed to fetch Qurius AI data:', quriusResponse.reason)
          // Set fallback data for Qurius AI
          setQuriusData({
            id: quriusCompanyId || '2bdad203-31da-403f-90d1-049a28d7adfc',
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
        }

        // Handle PurpleSoft Inc data
        if (purpleSoftResponse.status === 'fulfilled') {
          setPurpleSoftData(purpleSoftResponse.value as CompanyData)
          console.log('✅ PurpleSoft Inc data fetched successfully:', purpleSoftResponse.value.name)
        } else {
          console.error('❌ Failed to fetch PurpleSoft Inc data:', purpleSoftResponse.reason)
          // Set fallback data for PurpleSoft Inc
          setPurpleSoftData({
            id: purpleSoftCompanyId || 'cf97eacc-8346-4f8b-ba8a-4c3e286030ab',
            name: 'PurpleSoft Inc',
            plan: 'pro',
            status: 'active',
            theme: {
              primaryColor: "#8B5CF6",
              backgroundColor: "#FFFFFF",
              textColor: "#1F2937"
            },
            contact_email: 'contact@purplesoft.com',
            admin_email: 'admin@purplesoft.com',
            domain: 'purplesoft.com',
            location: 'New York, NY',
            description: 'PurpleSoft Inc is a software development company that specializes in building custom software solutions for businesses.',
            industry: 'Software Development',
            website: 'https://purplesoft.com',
            logo_url: '',
            enrollment_date: '2021-01-01',
            subscription_status: 'active',
            subscription_end_date: '2025-01-01',
          })
        }

        console.log('✅ Company data initialization completed')
      } catch (error) {
        console.error('❌ Error initializing company data:', error)
        setError('Failed to load company data')
        
        // Set fallback data if API fails completely (using hardcoded IDs as last resort)
        const fallbackQuriusId = '2bdad203-31da-403f-90d1-049a28d7adfc'
        const fallbackPurpleSoftId = 'cf97eacc-8346-4f8b-ba8a-4c3e286030ab'
        
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
        
        setPurpleSoftData({
          id: fallbackPurpleSoftId,
          name: 'PurpleSoft Inc',
          plan: 'pro',
          status: 'active',
          theme: {
            primaryColor: "#8B5CF6",
            backgroundColor: "#FFFFFF",
            textColor: "#1F2937"
          },
          contact_email: 'contact@purplesoft.com',
          admin_email: 'admin@purplesoft.com',
          domain: 'purplesoft.com',
          location: 'New York, NY',
          description: 'PurpleSoft Inc is a software development company that specializes in building custom software solutions for businesses.',
          industry: 'Software Development',
          website: 'https://purplesoft.com',
          logo_url: '',
          enrollment_date: '2021-01-01',
          subscription_status: 'active',
          subscription_end_date: '2025-01-01',
        })
      } finally {
        setIsLoading(false)
      }
    }

    initializeCompanyData()
  }, [])

  // Context value
  const contextValue: CompanyDataContextType = {
    quriusData,
    purpleSoftData,
    isLoading,
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