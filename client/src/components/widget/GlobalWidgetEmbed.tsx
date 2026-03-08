import { useCompanyData } from '@/context/CompanyDataContext'
import { useTheme } from '@/context/useThemeContext'
import { useLocation } from 'react-router-dom'
import { WidgetEmbed } from './WidgetEmbed'

/**
 * Global widget embed that persists across navigation
 * Only shows on public pages (not admin/widget-iframe routes)
 */
export function GlobalWidgetEmbed() {
  const { quriusData } = useCompanyData()
  const { defaultTheme } = useTheme()
  const location = useLocation()

  // Don't show widget on admin routes or widget iframe route
  const isAdminRoute = location.pathname.startsWith('/admin') || 
                       location.pathname.startsWith('/login') ||
                       location.pathname === '/widget-iframe'

  if (isAdminRoute || !quriusData) {
    return null
  }

  return (
    <WidgetEmbed
      companyData={quriusData}
      theme={defaultTheme}
    />
  )
}
