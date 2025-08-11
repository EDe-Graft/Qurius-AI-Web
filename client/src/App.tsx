import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from "@/pages/Admin"
import Login from "@/pages/Login"
import { Onboarding } from "@/pages/Onboarding"
import { Landing } from "@/pages/Landing"
import { Demo } from "@/pages/Demo"

import { About } from "@/pages/About"
import { Contact } from "@/pages/Contact"
// import { TestPaymentBypass } from "@/pages/TestPaymentBypass"
import { AuthCallback } from "@/pages/AuthCallback"
import { PasswordReset } from "@/pages/PasswordReset"
import { PublicNavigation, AdminNavigation } from "@/components/admin/Navigation"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { AuthProvider } from "@/context/AuthContext"
import { LanguageProvider } from "@/context/LanguageContext"
import { CompanyDataProvider } from "@/context/CompanyDataContext"

export default function App() {
  return (
    <CompanyDataProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public routes without authentication */}
              <Route path="/" element={<><PublicNavigation /><Landing /></>} />
              <Route path="/demo" element={<><PublicNavigation /><Demo /></>} />
              <Route path="/onboarding" element={<><PublicNavigation /><Onboarding /></>} />

              <Route path="/about" element={<><PublicNavigation /><About /></>} />
              <Route path="/contact" element={<><PublicNavigation /><Contact /></>} />
              
              {/* Auth routes */}
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/reset-password" element={<PasswordReset />} />
              
              {/* Test route (development only) */}
              {/* <Route path="/test-payment-bypass" element={<TestPaymentBypass />} /> */}
              
              {/* Admin routes with authentication */}
              <Route path="/login" element={<><AdminNavigation /><Login /></>} />
              <Route path="/admin" element={<ProtectedRoute><><AdminNavigation /><Admin /></></ProtectedRoute>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </LanguageProvider>
    </CompanyDataProvider>
  )
}

