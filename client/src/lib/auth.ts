import { supabase } from './supabase'
import type { User, Session } from '@supabase/supabase-js'
import axios from 'axios'

export interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
}

export interface CompanyAdmin {
  id: string
  email: string
  company_name: string
  company_id: string
  role: 'company_admin' | 'super_admin' | 'regular_user'
}

// Simple localStorage auth for fallback
const localStorageAuth = {
  signIn: async (email: string, password: string) => {
    // Check if this is a regular user/visitor
    if (email === 'user@qurius.ai' && password === 'user123') {
      const mockUser = {
        id: 'user-id',
        email: email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        app_metadata: { role: 'regular_user' },
        user_metadata: { role: 'regular_user' },
        aud: 'authenticated',
        role: 'regular_user'
      }
      const mockSession = {
        access_token: 'mock-token',
        refresh_token: 'mock-refresh',
        expires_in: 3600,
        token_type: 'bearer',
        user: mockUser
      }
      
      localStorage.setItem('qurius_user', JSON.stringify(mockUser))
      localStorage.setItem('qurius_session', JSON.stringify(mockSession))
      
      return { user: mockUser, session: mockSession }
    } else {
      throw new Error('Invalid credentials')
    }
  },
  
  signOut: async () => {
    localStorage.removeItem('qurius_user')
    localStorage.removeItem('qurius_session')
  },
  
  getCurrentUser: async () => {
    const stored = localStorage.getItem('qurius_user')
    return stored ? JSON.parse(stored) : null
  },
  
  getCurrentSession: async () => {
    const stored = localStorage.getItem('qurius_session')
    return stored ? JSON.parse(stored) : null
  }
}

// Check if user is a company admin
export const checkCompanyAdmin = async (email: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/companies/admin-check`, {
      email
    });

    if (response.data.isAdmin) {
      return response.data.company;
    }
    return null;
  } catch (error) {
    console.error('Error checking company admin:', error);
    return null;
  }
}

// Sign up with email and password
export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  } catch (error) {
    // Fallback to localStorage if Supabase fails
    console.warn('Supabase signup failed, using localStorage fallback')
    throw new Error('Signup not available in demo mode')
  }
}

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  try {
    // First check if this is a super admin
    let isSuperAdmin = false;
    try {
      const superAdminResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/super-admin`, {
        email,
        password
      });

      if (superAdminResponse.data.isSuperAdmin) {
        console.log('✅ Super admin authentication successful');
        isSuperAdmin = true;
      }
    } catch (superAdminError: any) {
      // Only continue if it's a 401 (not a super admin)
      // If it's any other error (network, server, etc.), throw it
      if (superAdminError.response?.status !== 401) {
        console.error('❌ Super admin authentication error:', superAdminError);
        throw new Error(superAdminError.response?.data?.error || 'Super admin authentication failed');
      }
      // Not a super admin, continue with regular authentication
      console.log('🔍 Not a super admin, checking company admin...');
    }

    // Check if this is a company admin
    const companyData = await checkCompanyAdmin(email)
    const isCompanyAdmin = !!companyData;

    // Only allow super admins and company admins to sign in
    if (!isSuperAdmin && !isCompanyAdmin) {
      throw new Error('Access denied. Only authorized administrators can access the admin panel. Please contact support if you believe this is an error.')
    }

    // Sign in with Supabase for both super admin and company admin
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      throw new Error(error.message)
    }

    // Add role metadata to user
    if (data.user) {
      data.user.user_metadata = {
        ...data.user.user_metadata,
        role: isSuperAdmin ? 'super_admin' : 'company_admin'
      }
      
      // Add company data for company admins
      if (isCompanyAdmin && companyData) {
        data.user.user_metadata = {
          ...data.user.user_metadata,
          company_name: companyData.name,
          company_id: companyData.id,
        }
      }
    }
    
    return data
  } catch (error) {
    // Don't fallback to localStorage - only show the error message
    throw error;
  }
}

// Sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    // Fallback to localStorage if Supabase fails
    console.warn('Supabase signout failed, using localStorage fallback')
    await localStorageAuth.signOut()
  }
}

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      throw new Error(error.message)
    }
    
    return user
  } catch (error) {
    // Fallback to localStorage if Supabase fails
    console.warn('Supabase getCurrentUser failed, using localStorage fallback')
    return await localStorageAuth.getCurrentUser()
  }
}

// Get current session
export const getCurrentSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      throw new Error(error.message)
    }
    
    return session
  } catch (error) {
    // Fallback to localStorage if Supabase fails
    console.warn('Supabase getCurrentSession failed, using localStorage fallback')
    return await localStorageAuth.getCurrentSession()
  }
}

// Listen to auth state changes
export const onAuthStateChange = (callback: (event: string, session: Session | null) => void) => {
  try {
    return supabase.auth.onAuthStateChange(callback)
  } catch (error) {
    // Fallback for localStorage auth
    console.warn('Supabase onAuthStateChange failed, using localStorage fallback')
    return {
      data: {
        subscription: {
          unsubscribe: () => {}
        }
      }
    }
  }
}

// Reset password
export const resetPassword = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    console.warn('Password reset not available in demo mode')
    throw new Error('Password reset not available in demo mode')
  }
}

// Update password
export const updatePassword = async (password: string) => {
  try {
    const { error } = await supabase.auth.updateUser({
      password,
    })
    
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    console.warn('Password update not available in demo mode')
    throw new Error('Password update not available in demo mode')
  }
}

// Get user role
export const getUserRole = (user: User | null): 'super_admin' | 'company_admin' | 'regular_user' | null => {
  if (!user) return 'regular_user'
  
  // Check user metadata for role
  const role = user.user_metadata?.role || user.app_metadata?.role
  return role || null
}

// Check if user is super admin
export const isSuperAdmin = (user: User | null): boolean => {
  const role = getUserRole(user)
  const isSuper = role === 'super_admin'
  console.log('🔍 isSuperAdmin - Role:', role, 'Is super admin:', isSuper)
  return isSuper
}

// Check if user is company admin
export const isCompanyAdmin = (user: User | null): boolean => {
  const role = getUserRole(user)
  const isCompany = role === 'company_admin'
  console.log('🔍 isCompanyAdmin - Role:', role, 'Is company admin:', isCompany)
  return isCompany
}
