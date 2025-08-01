import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle } from "lucide-react"

export function TestPaymentBypass() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    companyName: "Test Company Inc",
    email: "test@example.com",
    plan: "pro",
    industry: "Technology",
    website: "https://testcompany.com",
    description: "A test company for development purposes"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Step 1: Create company directly (bypassing Stripe)
      const companyResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/test/create-company`, {
        ...formData,
        theme: {
          primaryColor: "#3B82F6",
          backgroundColor: "#FFFFFF",
          textColor: "#1F2937"
        }
      })

      const companyData = companyResponse.data
      console.log('✅ Test company created:', companyData)

      // Step 2: Create admin user account
      const userResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/test/create-admin-user`, {
        email: formData.email,
        companyName: formData.companyName,
        companyId: companyData.company.id
      })

      const userData = userResponse.data
      console.log('✅ Admin user created:', userData)

      // Step 3: Send welcome email with password reset
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/test/send-welcome-email`, {
        email: formData.email,
        companyName: formData.companyName,
        planId: formData.plan
      })

      console.log('✅ Welcome email sent')

      setSuccess(true)
      
      // Store test data in sessionStorage for easy access
      sessionStorage.setItem('testCompanyData', JSON.stringify({
        companyId: companyData.company.id,
        companyName: formData.companyName,
        adminEmail: formData.email
      }))

    } catch (err: any) {
      console.error('Test payment bypass error:', err)
      setError(err.response?.data?.error || err.message || 'Failed to create test setup')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-xl">Test Setup Complete! 🎉</CardTitle>
            <CardDescription>
              Your test company and admin account have been created successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Check your email ({formData.email}) for the password reset link to access the admin dashboard.
              </AlertDescription>
            </Alert>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Company:</strong> {formData.companyName}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Plan:</strong> {formData.plan}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Admin Email:</strong> {formData.email}
              </p>
            </div>

            <div className="flex space-x-2">
              <Button 
                onClick={() => navigate('/login')}
                className="flex-1"
              >
                Go to Login
              </Button>
              <Button 
                variant="outline"
                onClick={() => setSuccess(false)}
                className="flex-1"
              >
                Create Another
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">🧪 Test Payment Bypass</CardTitle>
          <CardDescription>
            Create a test company and admin account without going through Stripe payment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Enter company name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Admin Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="admin@company.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Plan</Label>
              <select
                id="plan"
                value={formData.plan}
                onChange={(e) => handleInputChange('plan', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="free">Free</option>
                <option value="starter">Starter ($29)</option>
                <option value="pro">Pro ($99)</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                placeholder="Technology"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://company.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of the company"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                rows={3}
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? "Creating Test Setup..." : "Create Test Company & Admin"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 