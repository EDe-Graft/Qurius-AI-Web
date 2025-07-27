import { Link, useLocation } from "react-router-dom"
import { Home, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const location = useLocation()

  return (
    <nav className="fixed top-4 left-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2">
        <div className="flex space-x-1">
          <Link
            to="/"
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/"
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            <Home className="h-4 w-4 mr-2" />
            Demo
          </Link>
          <Link
            to="/admin"
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/admin"
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            <Settings className="h-4 w-4 mr-2" />
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
} 