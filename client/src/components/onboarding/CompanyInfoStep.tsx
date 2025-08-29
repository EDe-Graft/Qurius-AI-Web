import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface CompanyInfoStepProps {
  companyData: {
    name: string
    industry: string
    website: string
    email: string
    description: string
    location: string
  }
  setCompanyData: (data: any) => void
  onSubmit: (e: React.FormEvent) => void
  loading: boolean
  error: string
}

export function CompanyInfoStep({ companyData, setCompanyData, onSubmit, loading, error }: CompanyInfoStepProps) {
  const { t } = useLanguage()
  
  return (
    <div className="animate-fade-in-up animation-delay-2000">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
        {t('onboarding.companyInfo')}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 md:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm md:text-base text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('onboarding.companyName')} *
            </label>
            <input
              type="text"
              required
              value={companyData.name}
              onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 pr-2">
              {t('onboarding.industry')}
            </label>
            <select
              value={companyData.industry}
              onChange={(e) => setCompanyData({ ...companyData, industry: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
            >
              <option value="">Select industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.website')} *
          </label>
          <input
            type="url"
            required
            value={companyData.website}
            onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
            placeholder="https://yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.email')} *
          </label>
          <input
            type="email"
            required
            value={companyData.email}
            onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
            placeholder="contact@yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.location')}
          </label>
          <input
            type="text"
            value={companyData.location}
            onChange={(e) => setCompanyData({ ...companyData, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
            placeholder="e.g., New York, NY"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.description')}
          </label>
          <textarea
            value={companyData.description}
            onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base"
            placeholder="Tell us about your business..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none text-sm md:text-base min-h-[44px] md:min-h-[40px]"
          >
            {loading ? t('common.loading') : t('common.next')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
} 