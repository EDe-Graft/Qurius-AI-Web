import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from "@/pages/Admin"
import Login from "@/pages/Login"
import { Onboarding } from "@/pages/Onboarding"
import { Landing } from "@/pages/Landing"
import { Demo } from "@/pages/Demo"
import { Integration } from "@/pages/Integration"
import { PublicNavigation, AdminNavigation } from "@/components/admin/Navigation"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { AuthProvider } from "@/context/AuthContext"
import { LanguageProvider } from "@/context/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes without authentication */}
            <Route path="/" element={
              <>
                <PublicNavigation />
                <Landing />
              </>
            } />
            <Route path="/demo" element={
              <>
                <PublicNavigation />
                <Demo />
              </>
            } />
            <Route path="/onboarding" element={
              <>
                <PublicNavigation />
                <Onboarding />
              </>
            } />
            <Route path="/integration" element={
              <>
                <PublicNavigation />
                <Integration />
              </>
            } />
            
            {/* Admin routes with authentication */}
            <Route path="/login" element={
              <>
                <AdminNavigation />
                <Login />
              </>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <>
                  <AdminNavigation />
                  <Admin />
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  )
}

