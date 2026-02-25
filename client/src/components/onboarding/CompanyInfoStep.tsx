import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useEffect, useRef } from "react"

// Google Maps JavaScript API global (provided by the loaded script)
declare const google: any

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
  onFieldChange?: () => void
}

export function CompanyInfoStep({ companyData, setCompanyData, onSubmit, loading, error, onFieldChange }: CompanyInfoStepProps) {
  const { t } = useLanguage()
  const locationInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // Initialize Google Places Autocomplete on the location input
    const initializeAutocomplete = () => {
      if (!locationInputRef.current || typeof google === "undefined" || !google.maps?.places) {
        return
      }

      const autocomplete = new google.maps.places.Autocomplete(locationInputRef.current, {
        // You can tweak this: '(cities)', 'geocode', etc.
        types: ["geocode"]
      })

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace()
        const formatted =
          place.formatted_address ||
          (Array.isArray(place.address_components)
            ? place.address_components.map((c: any) => c.long_name).join(", ")
            : place.name)

        if (formatted) {
          setCompanyData((prev: typeof companyData) => ({
            ...prev,
            location: formatted
          }))
        }
      })
    }

    const existingScript = document.getElementById("google-maps-script") as HTMLScriptElement | null

    if (existingScript) {
      // Script already present; if Google is ready, init immediately, else wait for load
      if (typeof google !== "undefined" && google.maps?.places) {
        initializeAutocomplete()
      } else {
        existingScript.addEventListener("load", initializeAutocomplete)
      }
      return
    }

    // Load Google Maps JavaScript API with Places library
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if (!apiKey) {
      console.warn("[Qurius AI] Missing VITE_GOOGLE_MAPS_API_KEY; location autocomplete will be disabled.")
      return
    }

    const script = document.createElement("script")
    script.id = "google-maps-script"
    script.async = true
    script.defer = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`
    script.onload = initializeAutocomplete
    document.head.appendChild(script)

    return () => {
      script.onload = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
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
              {t('onboarding.companyName')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={companyData.name}
              onChange={(e) => {
                setCompanyData({ ...companyData, name: e.target.value })
                onFieldChange?.()
              }}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 pr-2">
              {t('onboarding.industry')} <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={companyData.industry}
              onChange={(e) => {
                setCompanyData({ ...companyData, industry: e.target.value })
                onFieldChange?.()
              }}
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
            {t('onboarding.website')} <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            required
            value={companyData.website}
            onChange={(e) => {
              setCompanyData({ ...companyData, website: e.target.value })
              onFieldChange?.()
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
            placeholder="https://yourcompany.com or www.yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={companyData.email}
            onChange={(e) => {
              setCompanyData({ ...companyData, email: e.target.value })
              onFieldChange?.()
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 text-sm md:text-base min-h-[44px] md:min-h-[40px]"
            placeholder="contact@yourcompany.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.location')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            ref={locationInputRef}
            value={companyData.location}
            onChange={(e) => {
              setCompanyData({ ...companyData, location: e.target.value })
              onFieldChange?.()
            }}
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
            onChange={(e) => {
              setCompanyData({ ...companyData, description: e.target.value })
              onFieldChange?.()
            }}
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