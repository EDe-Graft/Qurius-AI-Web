import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface PricingCardProps {
  plan: 'free' | 'starter' | 'pro'
  price: string
  features: string[]
  buttonText?: string
  onSelect: (plan: string) => void
  isPopular?: boolean
}

export function PricingCard({
  plan,
  price,
  features,
  buttonText,
  onSelect,
  isPopular = false
}: PricingCardProps) {
  const { t } = useLanguage()

  const getButtonClass = () => {
    switch (plan) {
      case 'free':
        return "w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-500 transition-colors"
      case 'starter':
        return "w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-500 transition-colors"
      case 'pro':
        return "w-full bg-green-600 dark:bg-green-600 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-lg font-medium hover:bg-green-500 dark:hover:bg-green-500 transition-colors"
      default:
        return "w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-500 transition-colors"
    }
  }

  const getPlanTitle = () => {
    switch (plan) {
      case 'free':
        return t('plans.free')
      case 'starter':
        return t('plans.starter')
      case 'pro':
        return t('plans.pro')
      default:
        return plan
    }
  }

  return (
    <div className={`bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-600 flex flex-col justify-between ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
      {isPopular && (
        <div className="text-center mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {getPlanTitle()}
        </h3>
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {price}
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {t('plans.perMonth')}
        </p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => onSelect(plan)}
        className={getButtonClass()}
      >
        {buttonText || t('common.getStarted')}
      </button>
    </div>
  )
} 