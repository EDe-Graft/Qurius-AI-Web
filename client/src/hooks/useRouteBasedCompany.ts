// import { useLocation } from 'react-router-dom'
import { useCompanyData } from '@/context/CompanyDataContext'

export function useRouteBasedCompany() {
//   const location = useLocation()
  const { quriusData, purpleSoftData, isLoading } = useCompanyData()

  // Return both datasets - pages can choose which one to use
  return {
    quriusData,
    purpleSoftData,
    isLoading
  }
} 