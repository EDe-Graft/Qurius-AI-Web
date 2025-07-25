import { Moon, Sun, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ThemeToggleProps } from "types/interfaces"

// Theme Toggle
export function ThemeToggle({ theme, toggleTheme, isThemeChanging }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      disabled={isThemeChanging}
      className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isThemeChanging ? (
        <Loader2 className="h-4 w-4 text-gray-600 dark:text-gray-400 animate-spin" />
      ) : theme === "light" ? (
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      )}
      <span className="sr-only">
        {isThemeChanging ? "Changing theme..." : "Toggle theme"}
      </span>
    </Button>
  )
}
