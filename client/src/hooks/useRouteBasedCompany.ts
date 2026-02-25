// import { useLocation } from 'react-router-dom'
import { useCompanyData } from '@/context/CompanyDataContext'

export function useRouteBasedCompany() {
//   const location = useLocation()
  const { quriusData, isDataLoading } = useCompanyData()

  // Return main Qurius company dataset
  return {
    quriusData,
    isDataLoading
  }
} 