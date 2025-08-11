import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { useTheme } from "@/context/useThemeContext"
import { supabase } from "@/lib/supabase"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false)
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false)
  
  const { signIn, isAuthenticated, authFlow } = useAuth()
  const { defaultTheme } = useTheme()
  const navigate = useNavigate()

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && authFlow === 'supabase') {
      navigate("/admin")
    }
  }, []) // Remove isAuthenticated from dependencies to prevent infinite loop

  // Don't render if already authenticated
  // if (isAuthenticated && authFlow === 'supabase') {
  //   return null
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await signIn(email, password)
      navigate("/admin")
    } catch (err: any) {
      setError(err.message || "Failed to sign in")
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setForgotPasswordLoading(true)
    setError("")

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(forgotPasswordEmail, {
        redirectTo: `${window.location.origin}/auth/callback`
      })

      if (error) {
        setError(error.message || "Failed to send reset email")
      } else {
        setForgotPasswordSuccess(true)
      }
    } catch (err: any) {
      setError(err.message || "Failed to send reset email")
    } finally {
      setForgotPasswordLoading(false)
    }
  }

  const resetForgotPassword = () => {
    setIsForgotPassword(false)
    setForgotPasswordEmail("")
    setForgotPasswordSuccess(false)
    setError("")
  }

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-200 ${
      defaultTheme === "dark" ? "dark bg-gray-900" : "bg-gray-50"
    }`}>
      <div className="max-w-md w-full space-y-6 md:space-y-8 px-4 md:px-0">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 md:h-12 md:w-12 bg-purple-600 rounded-xl flex items-center justify-center">
            <Lock className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <h2 className="mt-4 md:mt-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            {isForgotPassword ? "Reset Password" : "Welcome back"}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 px-4 md:px-0">
            {isForgotPassword 
              ? "Enter your email to receive a password reset link"
              : "Sign in to your Qurius-AI admin account"
            }
          </p>
        </div>

        {isForgotPassword ? (
          // Forgot Password Form
          <form className="mt-6 md:mt-8 space-y-4 md:space-y-6" onSubmit={handleForgotPassword}>
            <div>
              <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                </div>
                <input
                  id="forgotEmail"
                  name="forgotEmail"
                  type="email"
                  autoComplete="email"
                  required
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 md:py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm md:text-sm bg-white dark:bg-gray-800 min-h-[48px] md:min-h-[40px]"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3 md:p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                      {error}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {forgotPasswordSuccess && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-3 md:p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                      Reset email sent!
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Check your email for a password reset link.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <Button
                type="submit"
                disabled={forgotPasswordLoading || forgotPasswordSuccess}
                className="group relative w-full flex justify-center py-3 md:py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] md:min-h-[40px]"
              >
                {forgotPasswordLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending reset email...
                  </div>
                ) : forgotPasswordSuccess ? (
                  "Email Sent"
                ) : (
                  "Send Reset Email"
                )}
              </Button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={resetForgotPassword}
                className="flex items-center justify-center w-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 min-h-[44px] md:min-h-[40px]"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to sign in
              </button>
            </div>
          </form>
        ) : (
          // Regular Login Form
          <form className="mt-6 md:mt-8 space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none relative block w-full pl-10 pr-3 py-3 md:py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm md:text-sm bg-white dark:bg-gray-800 min-h-[48px] md:min-h-[40px]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full pl-10 pr-10 py-3 md:py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm md:text-sm bg-white dark:bg-gray-800 min-h-[48px] md:min-h-[40px]"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 md:h-5 md:w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    ) : (
                      <Eye className="h-4 w-4 md:h-5 md:w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3 md:p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                      {error}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            <div>
              <Button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 md:py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] md:min-h-[40px]"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>
            </div>

            <div className="text-center space-y-2">
              <button
                type="button"
                onClick={() => setIsForgotPassword(true)}
                className="text-sm text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 min-h-[44px] md:min-h-[40px]"
              >
                Forgot your password?
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Contact support
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
} 