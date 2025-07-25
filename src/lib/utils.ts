import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function darkenColor(hexColor: string, percent: number = 20): string {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Parse RGB values
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Darken by reducing each component
  const darkenAmount = percent / 100;
  const newR = Math.max(0, Math.floor(r * (1 - darkenAmount)));
  const newG = Math.max(0, Math.floor(g * (1 - darkenAmount)));
  const newB = Math.max(0, Math.floor(b * (1 - darkenAmount)));
  
  // Convert back to hex
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
}