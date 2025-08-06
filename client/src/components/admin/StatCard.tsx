import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThumbsUp, ThumbsDown, Target, Brain, MessageCircle, TrendingUp, TrendingDown, Star } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon?: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
  // New props for enhanced analytics
  type?: 'default' | 'rating' | 'percentage' | 'rate' | 'count'
  subtitle?: string
  color?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  showTrend?: boolean
  formatValue?: (value: number) => string
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  className,
  type = 'default',
  subtitle,
  color = 'default',
  showTrend = true,
  formatValue
}: StatCardProps) {
  
  // Format value based on type
  const formatDisplayValue = (val: string | number) => {
    if (typeof val === 'string') return val
    
    if (formatValue) return formatValue(val)
    
    switch (type) {
      case 'rating':
        return val > 0 ? `${val.toFixed(1)}/5` : 'No ratings'
      case 'percentage':
        return `${val.toFixed(1)}%`
      case 'rate':
        return `${val.toFixed(1)}%`
      case 'count':
        return val.toLocaleString()
      default:
        return val.toString()
    }
  }

  // Get icon color based on color prop
  const getIconColor = () => {
    switch (color) {
      case 'success':
        return 'text-green-600 dark:text-green-400'
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400'
      case 'danger':
        return 'text-red-600 dark:text-red-400'
      case 'info':
        return 'text-blue-600 dark:text-blue-400'
      default:
        return 'text-gray-400 dark:text-gray-500'
    }
  }

  // Get trend icon
  const getTrendIcon = () => {
    if (!trend) return null
    
    if (trend.isPositive) {
      return <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
    } else {
      return <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
    }
  }

  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6",
      "transition-all duration-200 hover:shadow-md",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
            {formatDisplayValue(value)}
          </p>
          {subtitle && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
          {showTrend && trend && (
            <div className="flex items-center mt-2">
              {getTrendIcon()}
              <span className={cn(
                "text-xs font-medium ml-1",
                trend.isPositive 
                  ? "text-green-600 dark:text-green-400" 
                  : "text-red-600 dark:text-red-400"
              )}>
                {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                from last month
              </span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="flex-shrink-0">
            <Icon className={cn("w-8 h-8", getIconColor())} />
          </div>
        )}
      </div>
    </div>
  )
}

// Specialized stat card components for different analytics types
export function RatingStatCard({ 
  title, 
  value, 
  positiveRatings, 
  negativeRatings, 
  totalRatings,
}: StatCardProps & {
  positiveRatings?: number
  negativeRatings?: number
  totalRatings?: number
}) {
  // Convert percentage to 5-star rating (round up)
  const getStarRating = (percentage: number) => {
    if (percentage <= 0) return 0
    if (percentage >= 100) return 5
    
    // Convert percentage to stars (20% = 1 star, 40% = 2 stars, etc.)
    const stars = Math.ceil(percentage / 20)
    return Math.min(stars, 5) // Ensure max 5 stars
  }

  const starRating = typeof value === 'number' ? getStarRating(value) : 0

  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6",
      "transition-all duration-200 hover:shadow-md"
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 mr-2">
              {starRating.toFixed(1)}
            </span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  className={cn(
                    "w-5 h-5",
                    star <= starRating 
                      ? "text-yellow-500 fill-current" 
                      : "text-gray-300 dark:text-gray-600"
                  )} 
                />
              ))}
            </div>
          </div>
          {totalRatings && totalRatings > 0 && (
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center text-green-600 dark:text-green-400">
                <ThumbsUp className="h-3 w-3 mr-1" />
                <span className="text-xs">{positiveRatings || 0}</span>
              </div>
              <div className="flex items-center text-red-600 dark:text-red-400">
                <ThumbsDown className="h-3 w-3 mr-1" />
                <span className="text-xs">{negativeRatings || 0}</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {typeof value === 'number' ? `${value.toFixed(1)}%` : value} satisfied
              </span>
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </div>
  )
}

export function FAQMatchStatCard({ 
  title, 
  value, 
  faqMatches, 
  totalQueries,
}: StatCardProps & {
  faqMatches?: number
  totalQueries?: number
}) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6",
      "transition-all duration-200 hover:shadow-md"
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
            {typeof value === 'number' ? `${value.toFixed(1)}%` : value}
          </p>
          {totalQueries && (
            <div className="flex items-center mt-2 space-x-2">
              <Target className="h-3 w-3 text-green-600 dark:text-green-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {faqMatches || 0} of {totalQueries} queries matched
              </span>
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
      </div>
    </div>
  )
}

export function AIFallbackStatCard({ 
  title, 
  value, 
  aiFallbacks, 
  totalQueries,
}: StatCardProps & {
  aiFallbacks?: number
  totalQueries?: number
}) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6",
      "transition-all duration-200 hover:shadow-md"
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
            {typeof value === 'number' ? `${value.toFixed(1)}%` : value}
          </p>
          {totalQueries && (
            <div className="flex items-center mt-2 space-x-2">
              <Brain className="h-3 w-3 text-blue-600 dark:text-blue-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {aiFallbacks || 0} of {totalQueries} queries used AI
              </span>
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </div>
  )
} 