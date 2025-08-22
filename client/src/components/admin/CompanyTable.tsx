// import { useState } from "react"
import { Edit, Trash2, Eye, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Company {
  id?: string
  name: string
  domain?: string
  location?: string
  description: string
  theme: {
    primaryColor: string
    backgroundColor: string
    textColor: string
  }
  industry: string
  website: string
  contact_email?: string
  admin_email?: string // Required to match service interface
  logo_url: string
  enrollment_date?: string
  status?: 'active' | 'inactive' | 'suspended'
  conversations?: number
  queries?: number
  lastActive?: string
  analytics?: {
    totalViews: number
    totalInteractions: number
    totalMessages: number
    totalResponses: number
    uniqueSessions: number
    lastActivity: string | null
  }
}

interface CompanyTableProps {
  companies: Company[]
  onEdit: (company: Company) => void
  onDelete: (companyId: string) => void
  onView: (company: Company) => void
  onManageFAQs?: (company: Company) => void
  onViewIntegrationCode?: (company: Company) => void
  onConfigureWidget?: (company: Company) => void
}

export function CompanyTable({ companies, onEdit, onDelete, onView }: CompanyTableProps) {
  const getStatusColor = (status: Company['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
      case 'suspended':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getStatusText = (status: Company['status']) => {
    switch (status) {
      case 'active':
        return 'Active'
      case 'inactive':
        return 'Inactive'
      case 'suspended':
        return 'Suspended'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
          Companies
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
          Manage your client companies and their widget configurations
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Company
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                Domain
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                Activity
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                Last Active
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 text-right text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {companies.map((company, index) => (
              <tr 
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
              >
                <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                  <div className="flex items-center min-w-0">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                      style={{ backgroundColor: company.theme.primaryColor }}
                    >
                      {company.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3 min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate max-w-[140px] sm:max-w-none">
                        {company.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                  <div className="text-sm text-gray-900 dark:text-gray-100 truncate max-w-[200px]">
                    {company.domain || 'N/A'}
                  </div>
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                  <span className={cn(
                    "inline-flex px-2 py-1 text-[11px] sm:text-xs font-medium rounded-full",
                    getStatusColor(company.status || 'inactive')
                  )}>
                    {getStatusText(company.status || 'inactive')}
                  </span>
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                  <div className="text-sm text-gray-900 dark:text-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        {Number(company.analytics?.totalViews || 0).toLocaleString()} views
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-green-600 dark:text-green-400">
                        {Number(company.analytics?.totalInteractions || 0).toLocaleString()} interactions
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {company.analytics?.lastActivity || 'Never'}
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-1 sm:space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onView(company)}
                      className="h-8 w-8 p-0 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200 group"
                    >
                      <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(company)}
                      className="h-8 w-8 p-0 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200 group"
                    >
                      <Edit className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => company.id && onDelete(company.id)}
                      className="h-8 w-8 p-0 hover:bg-red-100 dark:hover:bg-red-900"
                    >
                      <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {companies.length === 0 && (
        <div className="text-center py-10 sm:py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-3 sm:mb-4">
            <MoreHorizontal className="h-10 w-10 sm:h-12 sm:w-12 mx-auto" />
          </div>
          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 mb-1 sm:mb-2">
            No companies yet
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Get started by adding your first company
          </p>
        </div>
      )}
    </div>
  )
} 