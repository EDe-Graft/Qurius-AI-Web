import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface PricingCardProps {
  plan: 'free' | 'starter' | 'growth' | 'pro'
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

  // Show only the most important features (first 6) and add "many more features"
  const displayFeatures = features.slice(0, 4)
  if (features.length > 4) {
    displayFeatures.push("Many more features...")
  }

  const getButtonClass = () => {
    switch (plan) {
      case 'free':
        return "w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-500 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      case 'starter':
        return "w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      case 'growth':
        return "w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-500 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      case 'pro':
        return "w-full bg-green-600 dark:bg-green-600 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-lg font-medium hover:bg-green-500 dark:hover:bg-green-500 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      default:
        return "w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
    }
  }

  const getPlanTitle = () => {
    switch (plan) {
      case 'free':
        return t('plans.free')
      case 'starter':
        return t('plans.starter')
      case 'growth':
        return t('plans.growth')
      case 'pro':
        return t('plans.pro')
      default:
        return plan
    }
  }

  return (
    <div className={`bg-white dark:bg-gray-700 rounded-xl ${isPopular ? 'p-[22px] scale-[0.99]' : 'p-6'} shadow-sm border border-gray-200 dark:border-gray-600 flex flex-col h-full ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>      
      <div className="text-center mb-6">
        <div className="relative">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {getPlanTitle()}
          </h3>
          {isPopular && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
              Most Popular
            </span>
          )}
        </div>
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {price}
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {t('plans.perMonth')}
        </p>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {displayFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => onSelect(plan)}
        className={`${getButtonClass()} mt-auto`}
      >
        {buttonText || t('common.getStarted')}
      </button>
    </div>
  )
} 