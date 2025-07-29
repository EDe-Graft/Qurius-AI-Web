import { Link, useLocation } from "react-router-dom"
import { Home, User2, LogIn, LogOut, Computer } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"

// Public navigation without authentication
export function PublicNavigation() {
  const location = useLocation()

  return (
    <nav className="fixed top-4 left-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-1">
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
            Home
          </Link>
          <Link
            to="/demo"
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/demo"
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            <Computer className="h-4 w-4 mr-2" />
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
            <User2 className="h-4 w-4 mr-2" />
            Admin
          </Link>
          <Link
            to="/login"
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/login"
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Admin navigation with authentication
export function AdminNavigation() {
  const location = useLocation()
  const { isAuthenticated, signOut } = useAuth()

  return (
    <nav className="fixed top-4 left-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-1">
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
            Home
          </Link>
          <Link
            to="/demo"
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/demo"
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            <Computer className="h-4 w-4 mr-2" />
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
            <User2 className="h-4 w-4 mr-2" />
            Admin
          </Link>
          
          {isAuthenticated ? (
            <button
              onClick={signOut}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === "/login"
                  ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

// Default export for backward compatibility
export function Navigation() {
  return <PublicNavigation />
} 