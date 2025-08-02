import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { isSuperAdmin, isCompanyAdmin } from "@/lib/auth"
import { QuriusAdmin } from "@/components/admin/QuriusAdmin"
import { CompanyAdmin } from "@/components/admin/CompanyAdmin"

export default function Admin() {
  const { isAuthenticated, user, authFlow } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
      return
    }

    // Check if user has valid role
    if (!isSuperAdmin(user) && !isCompanyAdmin(user)) {
      console.log('❌ Admin component - User has no valid role, redirecting to login')
      navigate("/login")
    }
  }, []) // Remove navigate from dependencies since it's stable

  // Don't render if not authenticated or no valid role
  if (!isAuthenticated || (!isSuperAdmin(user) && !isCompanyAdmin(user)) || authFlow === 'localStorage') {
    console.log('❌ Admin component - Not rendering due to authentication/role issues')
    return null
  }

  // Render appropriate admin component based on user role
  if (isSuperAdmin(user)) {
    return <QuriusAdmin user={user} />
  } else if (isCompanyAdmin(user)) {
    return <CompanyAdmin user={user} />
  }

  console.log('❌ Admin component - No matching role found')
  return null
} 