import { useState, useEffect } from "react"
import { TrendingUp, Activity, Users, MessageCircle, DollarSign } from "lucide-react"
import { AnalyticsChart } from "./AnalyticsChart"
import { CompanyService } from "@/services/companyService"

interface AnalyticsData {
  conversations: number
  queries: number
  revenue: number
  growth: number
  topCompanies: Array<{ name: string; conversations: number }>
  dailyUsage: Array<{ date: string; conversations: number }>
  industryBreakdown: Array<{ industry: string; companies: number }>
}

export function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    conversations: 0,
    queries: 0,
    revenue: 0,
    growth: 0,
    topCompanies: [],
    dailyUsage: [],
    industryBreakdown: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        setLoading(true)
        const companies = await CompanyService.getAllCompanies()
        
        // Calculate analytics from company data
        const totalConversations = companies.reduce((sum, c) => sum + (c.conversations || 0), 0)
        const totalQueries = companies.reduce((sum, c) => sum + (c.queries || 0), 0)
        const revenue = companies.length * 800 // Mock revenue calculation
        const growth = companies.length > 0 ? 12.5 : 0 // Mock growth

        // Top companies by conversations
        const topCompanies = companies
          .sort((a, b) => (b.conversations || 0) - (a.conversations || 0))
          .slice(0, 5)
          .map(c => ({ name: c.name, conversations: c.conversations || 0 }))

        // Mock daily usage data
        const dailyUsage = Array.from({ length: 7 }, (_, i) => ({
          date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
          conversations: Math.floor(Math.random() * 100) + 20
        }))

        // Industry breakdown
        const industryMap = companies.reduce((acc, company) => {
          const industry = company.industry || 'Other'
          acc[industry] = (acc[industry] || 0) + 1
          return acc
        }, {} as Record<string, number>)

        const industryBreakdown = Object.entries(industryMap).map(([industry, count]) => ({
          industry,
          companies: count
        }))

        setAnalytics({
          conversations: totalConversations,
          queries: totalQueries,
          revenue,
          growth,
          topCompanies,
          dailyUsage,
          industryBreakdown
        })
      } catch (error) {
        console.error('Error loading analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    loadAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Loading Analytics
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Calculating your business metrics...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Conversations
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {analytics.conversations.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Queries
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {analytics.queries.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Monthly Revenue
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                ${analytics.revenue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Growth Rate
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {analytics.growth}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          data={analytics.dailyUsage.map(item => ({ name: item.date, value: item.conversations }))}
          type="line"
          title="Daily Conversations"
          color="#3B82F6"
        />

        <AnalyticsChart
          data={analytics.topCompanies.map(item => ({ name: item.name, value: item.conversations }))}
          type="bar"
          title="Top Companies by Conversations"
          color="#10B981"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          data={analytics.industryBreakdown.map(item => ({ name: item.industry, value: item.companies }))}
          type="pie"
          title="Industry Distribution"
          height={300}
        />

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {analytics.topCompanies.slice(0, 3).map((company, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {company.name}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {company.conversations} conversations
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 