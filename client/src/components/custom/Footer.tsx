import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import quriusLogo from "@/assets/logo.png"

interface FooterProps {
  onFooterLinkClick?: (link: string) => void
  showFullFooter?: boolean
}

export function Footer({ onFooterLinkClick, showFullFooter = true }: FooterProps) {
  const { t } = useLanguage()
  // Default footer link handler
  const handleFooterLinkClick = (link: string) => {
    if (onFooterLinkClick) {
      onFooterLinkClick(link)
    } else {
      // Default behavior for simple footer
      console.log(`Footer link clicked: ${link}`)
    }
  }

  // Simple footer for pages like Contact and About
  if (!showFullFooter) {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-lg font-bold">Qurius AI</span>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Qurius AI. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }

  // Full footer for Landing page
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <button
              className="flex items-center hover:opacity-80 transition-opacity cursor-pointer mb-2.5" 
              //navigate to top of the page when logo is clicked
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-400" /> */}
              <img src={quriusLogo} alt="Qurius AI" className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Qurius AI</span>
            </button>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              {t('landing.footerDescription')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerProduct')}</h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('features')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.features')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('pricing')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.pricing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('installation')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.installation')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerCompany')}</h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.blog')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('careers')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.careers')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('landing.footerSupport')}</h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('help')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.helpCenter')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.contact')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('status')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('landing.status')}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
          <p>&copy; {new Date().getFullYear()} Qurius AI. {t('landing.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
} 