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

// Helper function to convert text to proper Title Case
export function toTitleCase(text: string) {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

