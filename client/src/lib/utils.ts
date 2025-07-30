import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function darkenColor(color: string, percent: number): string {
  // Convert hex to RGB
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  // Darken by reducing RGB values
  const factor = (100 - percent) / 100
  const newR = Math.round(r * factor)
  const newG = Math.round(g * factor)
  const newB = Math.round(b * factor)
  
  // Convert back to hex
  const newHex = '#' + 
    (newR < 16 ? '0' : '') + newR.toString(16) +
    (newG < 16 ? '0' : '') + newG.toString(16) +
    (newB < 16 ? '0' : '') + newB.toString(16)
  
  return newHex
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content: "Qurius AI transformed our customer support. The widget is incredibly easy to integrate and our response times have improved by 80%. Our customers love the instant, accurate answers!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateCorp",
    content: "The multi-language support is a game-changer for our global business. We've seen a 60% increase in customer satisfaction since implementing Qurius AI. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Customer Success Manager",
    company: "GrowthStart",
    content: "Setting up our FAQ system was incredibly smooth. The AI understands our business context perfectly and provides accurate, helpful responses. Our support team can focus on complex issues now.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "DataSync Inc",
    content: "The analytics dashboard gives us incredible insights into customer interactions. We've optimized our support processes based on the data, leading to better customer experiences.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Product Manager",
    company: "CloudScale",
    content: "The white-label options and custom integrations allowed us to seamlessly integrate Qurius AI into our existing platform. Our customers can't tell it's a third-party solution!",
    rating: 5,
    avatar: "https://ix-marketing.imgix.net/focalpoint.png?auto=format,compress&w=1946"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Director",
    company: "GlobalTech",
    content: "From implementation to going live took less than a week. The support team was incredibly helpful throughout the process. Qurius AI has become an essential part of our customer experience.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
]