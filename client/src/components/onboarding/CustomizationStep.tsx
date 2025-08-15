import { useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface CustomizationStepProps {
  onSubmit: (theme: any) => void
  loading: boolean
  initialTheme: {
    primaryColor: string
    backgroundColor: string
    textColor: string
  }
}

export function CustomizationStep({ onSubmit, loading, initialTheme }: CustomizationStepProps) {
  const { t } = useLanguage()
  const [theme, setTheme] = useState(initialTheme || {
    primaryColor: "#3B82F6",
    backgroundColor: "#FFFFFF",
    textColor: "#111827"
  })
  const [isDragging, setIsDragging] = useState(false)

  const defaultThemes = [
    { name: "Blue", primaryColor: "#3B82F6" },
    { name: "Green", primaryColor: "#10B981" },
    { name: "Purple", primaryColor: "#8B5CF6" },
    { name: "Orange", primaryColor: "#F59E0B" },
    { name: "Red", primaryColor: "#EF4444" },
    { name: "Teal", primaryColor: "#14B8A6" }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(theme)
  }

  const applyDefaultTheme = (defaultTheme: any) => {
    setTheme({
      ...theme,
      primaryColor: defaultTheme.primaryColor
    })
  }

  const handleColorPickerMouseDown = () => {
    setIsDragging(true)
  }

  const handleColorPickerMouseUp = () => {
    setIsDragging(false)
  }

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme({
      ...theme,
      primaryColor: e.target.value
    })
  }

  return (
    <div className="animate-fade-in-up animation-delay-2000">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
        {t('onboarding.customization')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Default Theme Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t('onboarding.chooseTheme')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {defaultThemes.map((defaultTheme, index) => (
              <button
                key={index}
                type="button"
                onClick={() => applyDefaultTheme(defaultTheme)}
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors min-h-[44px] md:min-h-[40px]"
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: defaultTheme.primaryColor }}
                  />
                  <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {defaultTheme.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('onboarding.primaryColor')}
          </label>
          <div className="relative">
            <input
              type="color"
              value={theme.primaryColor}
              onChange={handleColorPickerChange}
              onMouseDown={handleColorPickerMouseDown}
              onMouseUp={handleColorPickerMouseUp}
              onMouseLeave={handleColorPickerMouseUp}
              className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-lg cursor-crosshair transition-all duration-200 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style={{
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
            />
            {isDragging && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-lg pointer-events-none">
                <span className="text-xs text-white font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
                  Drag to select color
                </span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Drag through the color spectrum to find your perfect shade
          </p>
        </div>

        {/* Preview */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t('onboarding.preview')}
          </h3>
          <div 
            className="w-full h-64 md:h-80 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 overflow-hidden flex flex-col"
            style={{ backgroundColor: theme.backgroundColor }}
          >
            {/* Mini Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <MessageCircle className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-xs">Company Assistant</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online now</p>
                </div>
              </div>
            </div>

            {/* Mini Messages */}
            <div className="flex-1 overflow-hidden p-2 space-y-2">
              {/* AI Message */}
              <div className="flex gap-2 max-w-[90%] flex-row">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400"
                  style={{ backgroundColor: theme.backgroundColor }}
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div
                    className="inline-block max-w-[90%] px-3 py-2 rounded-2xl text-xs leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md bg-gray-100 dark:bg-gray-700"
                  >
                    Hello! How can I help you today?
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-2 max-w-[90%] mx-auto flex-row-reverse">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 space-y-1 text-right">
                  <div
                    className="inline-block max-w-[90%] px-3 py-2 rounded-2xl text-xs leading-relaxed text-white rounded-br-md"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    What are your business hours?
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-2 max-w-[90%] flex-row">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400"
                  style={{ backgroundColor: theme.backgroundColor }}
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div
                    className="inline-block max-w-[90%] px-3 py-2 rounded-2xl text-xs leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md bg-gray-100 dark:bg-gray-700"
                  >
                    We're open Monday-Friday, 9am-5pm. Is there anything specific you'd like to know?
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Input */}
            <div className="p-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div 
                  className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full px-3 text-xs text-gray-500 dark:text-gray-400 flex items-center"
                >
                  Type your message...
                </div>
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
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