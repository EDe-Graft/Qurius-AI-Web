import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { Users, Target, Award, MessageCircle } from "lucide-react"
import { ChatInterface } from "@/components/custom/ChatInterface"
import { useRouteBasedCompany } from "@/hooks/useRouteBasedCompany"
import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { useTheme } from "@/context/useThemeContext"
import founderImage from "@/assets/founder.png"

export function About() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { defaultTheme, isThemeChanging, toggleTheme } = useTheme()
  const [isChatMinimized, setIsChatMinimized] = useState(true)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const { quriusData, isDataLoading } = useRouteBasedCompany()

  useEffect(() => {
    // Simulate page loading time and wait for company data
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 900)

    return () => clearTimeout(timer)
  }, [isDataLoading])

  const handleGetStarted = () => {
    navigate("/onboarding")
  }

  // Loading screen
  if (isPageLoading || isDataLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 animate-fade-in-up animation-delay-2000">
      {/* Navigation */}
      <Navigation 
      currentPage="about" 
      showGetStarted={true}
      getStartedText={t('common.getStarted')}
      onGetStarted={handleGetStarted}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
                {t('about.mission')}
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {t('about.missionDescription1')}
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.missionDescription2')}
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-lg">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {t('about.vision')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.visionDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t('about.values')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('about.valuesDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {t('about.customerCentric')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.customerCentricDescription')}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Award className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {t('about.innovation')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.innovationDescription')}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <MessageCircle className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {t('about.transparency')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.transparencyDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t('about.meetFounder')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('about.meetFounderDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Founder Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-lg">
                  <img 
                    src={founderImage} 
                    alt="Edward De-Graft Quansah - Founder & CEO of Qurius AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full shadow-md"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-400 rounded-full shadow-md"></div>
              </div>
            </div>
            
            {/* Founder Story */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {t('about.founderName')}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {t('about.founderTitle')}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {t('about.backgroundExperience')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('about.backgroundDescription')}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {t('about.passionsInterests')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('about.passionsDescription')}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {t('about.quriusVision')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                    {t('about.quriusVisionDescription')}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {t('about.skillAI')}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  {t('about.skillFullStack')}
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  {t('about.skillReact')}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                  {t('about.skillSaaS')}
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                  {t('about.skillDataScience')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t('about.ourTeam')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('about.ourTeamDescription')}
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-lg text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {t('about.growingTeam')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {t('about.growingTeamDescription')}
            </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('about.joinTeam')}
              </button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t('about.experienceAI')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t('about.experienceAIDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <MessageCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {t('about.tryItNow')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.tryItNowDescription')}
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t('about.readyToStart')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {t('about.readyToStartDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/onboarding")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {t('about.getStartedFree')}
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg text-lg font-semibold border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {t('about.contactUs')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer showFullFooter={false} />
    </div>

    {/* Chat Interface - Rendered at root level */}
    {quriusData ? (
      <ChatInterface
        defaultTheme={defaultTheme}
        toggleTheme={toggleTheme}
        isMinimized={isChatMinimized}
        onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
        companyData={quriusData}
        isThemeChanging={isThemeChanging}
      />
    ) : null}
  </>
  )
} 