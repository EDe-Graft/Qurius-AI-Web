import React from "react"
import { 
  Download,
  FileText,
  Settings,
  Search,
  Activity,
  Play,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  iconBgColor: string
  iconColor: string
  onClick: () => void
  disabled?: boolean
  disabledMessage?: string
  showForPlan?: 'free' | 'starter' | 'pro' | 'all'
  currentPlan?: string
}

interface QuickActionsProps {
  actions: QuickAction[]
  className?: string
  gridCols?: '1' | '2' | '3' | '4'
}

export function QuickActions({ actions, className = "", gridCols = "3" }: QuickActionsProps) {
  const getGridColsClass = () => {
    switch (gridCols) {
      case '1': return 'grid-cols-1'
      case '2': return 'grid-cols-1 md:grid-cols-2'
      case '3': return 'grid-cols-1 md:grid-cols-3'
      case '4': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      default: return 'grid-cols-1 md:grid-cols-3'
    }
  }

  const filteredActions = actions.filter(action => {
    if (action.showForPlan === 'all') return true
    if (!action.currentPlan) return true
    if (action.showForPlan === action.currentPlan) return true
    if (action.showForPlan === 'pro' && action.currentPlan === 'pro') return true
    if (action.showForPlan === 'starter' && ['starter', 'pro'].includes(action.currentPlan)) return true
    return false
  })

  return (
    <div className={`grid ${getGridColsClass()} gap-6 mb-8 animate-fade-in-up animation-delay-4000 ${className}`}>
      {filteredActions.map((action) => (
        <div key={action.id} className="flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 ${action.iconBgColor} rounded-lg flex items-center justify-center`}>
                <div className={action.iconColor}>
                  {action.icon}
                </div>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {action.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {action.description}
              </p>
            </div>
          </div>
          {action.disabled ? (
            <p className="text-xs text-gray-500 mt-2">
              {action.disabledMessage}
            </p>
          ) : (
            <Button
              onClick={action.onClick}
              className="mt-4 w-full"
              variant="outline"
            >
              {action.title}
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}

// Predefined action configurations for common use cases
export const createIntegrationAction = (
  onClick: () => void,
  companyName?: string,
  disabled = false
): QuickAction => ({
  id: 'integration',
  title: 'Integration Code',
  description: companyName 
    ? `Get your widget integration code for ${companyName}`
    : 'Get your widget integration code',
  icon: <Download className="h-5 w-5" />,
  iconBgColor: 'bg-blue-100 dark:bg-blue-900',
  iconColor: 'text-blue-600 dark:text-blue-400',
  onClick,
  disabled,
  disabledMessage: 'Select a company from the dropdown above to view their integration code',
  showForPlan: 'all'
})

export const createFAQManagementAction = (
  onClick: () => void,
  companyName?: string,
  disabled = false
): QuickAction => ({
  id: 'faq-management',
  title: 'FAQ Management',
  description: companyName 
    ? `Import and manage FAQs for ${companyName}`
    : 'Import and manage your FAQs',
  icon: <FileText className="h-5 w-5" />,
  iconBgColor: 'bg-green-100 dark:bg-green-900',
  iconColor: 'text-green-600 dark:text-green-400',
  onClick,
  disabled,
  disabledMessage: 'Select a company from the dropdown above to manage their FAQs',
  showForPlan: 'all'
})

export const createWidgetSettingsAction = (
  onClick: () => void,
  companyName?: string,
  disabled = false
): QuickAction => ({
  id: 'widget-settings',
  title: 'Widget Settings',
  description: companyName 
    ? `Customize your chat widget for ${companyName}`
    : 'Customize your chat widget',
  icon: <Settings className="h-5 w-5" />,
  iconBgColor: 'bg-purple-100 dark:bg-purple-900',
  iconColor: 'text-purple-600 dark:text-purple-400',
  onClick,
  disabled,
  disabledMessage: 'Select a company from the dropdown above to configure their widget',
  showForPlan: 'starter'
})

export const createContentProcessorAction = (
  onClick: () => void,
  companyName?: string,
  disabled = false
): QuickAction => ({
  id: 'content-processor',
  title: 'Content Processor',
  description: companyName 
    ? `Auto-generate FAQs from ${companyName}'s website or documents`
    : 'Auto-generate FAQs from your website or uploaded documents',
  icon: <Search className="h-5 w-5" />,
  iconBgColor: 'bg-blue-100 dark:bg-blue-900',
  iconColor: 'text-blue-600 dark:text-blue-400',
  onClick,
  disabled,
  disabledMessage: 'Select a company from the dropdown above to process their content',
  showForPlan: 'pro'
})

export const createLiveTestAction = (
  onClick: () => void,
  companyName?: string,
  disabled = false
): QuickAction => ({
  id: 'live-test',
  title: 'Live Test',
  description: companyName ? `Test the AI assistant for ${companyName}` : 'Test the AI assistant on a sample website',
  icon: <Play className="h-5 w-5" />,
  onClick,
  disabled,
  iconBgColor: 'bg-purple-100 dark:bg-purple-900',
  iconColor: 'text-purple-600 dark:text-purple-400',
  showForPlan: 'all'
})

export const createAutomationManagementAction = (
  onClick: () => void
): QuickAction => ({
  id: 'automation-management',
  title: 'Automation Management',
  description: 'Manage automated crawling schedules and monitor automation performance',
  icon: <Activity className="h-5 w-5" />,
  iconBgColor: 'bg-orange-100 dark:bg-orange-900',
  iconColor: 'text-orange-600 dark:text-orange-400',
  onClick,
  showForPlan: 'all'
}) 

export const createLeadManagementAction = (
  onClick: () => void,
  companyName?: string,
  disabled = false
): QuickAction => ({
  id: 'lead-management',
  title: 'Manage Leads',
  description: companyName ? `View and manage leads for ${companyName}` : 'View and manage company leads',
  icon: <MessageSquare className="h-5 w-5" />,
  iconBgColor: 'bg-green-100 dark:bg-green-900',
  iconColor: 'text-green-600 dark:text-green-400',
  onClick,
  disabled,
  disabledMessage: 'Select a company from the dropdown above to manage their leads',
  showForPlan: 'all'
}) 