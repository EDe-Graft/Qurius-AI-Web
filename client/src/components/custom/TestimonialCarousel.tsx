import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"

interface TestimonialCarouselProps {
  autoRotateInterval?: number
  showNavigationButtons?: boolean
  showDots?: boolean
  className?: string
}

export function TestimonialCarousel({
  autoRotateInterval = 5000,
  showNavigationButtons = true,
  showDots = true,
  className = ""
}: TestimonialCarouselProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isManualNavigation, setIsManualNavigation] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotation effect
  useEffect(() => {
    const startAutoRotation = () => {
      intervalRef.current = setInterval(() => {
        if (!isManualNavigation && !isTransitioning) {
          nextTestimonial()
        }
      }, autoRotateInterval)
    }

    startAutoRotation()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isManualNavigation, isTransitioning, autoRotateInterval])

  const restartAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      if (!isManualNavigation && !isTransitioning) {
        nextTestimonial()
      }
    }, autoRotateInterval)
  }

  const nextTestimonial = () => {
    if (isTransitioning) return
    
    // Restart auto-rotation counter
    restartAutoRotation()
    
    setIsTransitioning(true)
    setIsManualNavigation(true)
    
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
    
    // Reset manual navigation flag after transition
    setTimeout(() => {
      setIsTransitioning(false)
      setIsManualNavigation(false)
    }, 500)
  }

  const prevTestimonial = () => {
    if (isTransitioning) return
    
    // Restart auto-rotation counter
    restartAutoRotation()
    
    setIsTransitioning(true)
    setIsManualNavigation(true)
    
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    
    // Reset manual navigation flag after transition
    setTimeout(() => {
      setIsTransitioning(false)
      setIsManualNavigation(false)
    }, 500)
  }

  // Calculate the actual display position for dots using modulo
  const getDisplayIndex = () => {
    return currentTestimonial % TESTIMONIALS.length
  }

  return (
    <div className={`relative max-w-4xl mx-auto ${className}`}>
      {/* Navigation Buttons */}
      {showNavigationButtons && (
        <>
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Testimonials Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {/* Single testimonials array - modulo handles the loop */}
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
                {/* Rating */}
                <div className="flex items-center mb-4 text-yellow-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center mt-8 space-x-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                restartAutoRotation()
                setIsManualNavigation(true)
                setCurrentTestimonial(index)
                // Reset manual navigation flag after a short delay
                setTimeout(() => {
                  setIsManualNavigation(false)
                }, 100)
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === getDisplayIndex()
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
} 