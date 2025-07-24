"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
