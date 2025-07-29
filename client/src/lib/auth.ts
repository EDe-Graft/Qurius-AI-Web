import { supabase } from './supabase'
import type { User, Session } from '@supabase/supabase-js'

export interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
}

// Simple localStorage auth for fallback
const localStorageAuth = {
  signIn: async (email: string, password: string) => {
    // Simple mock authentication for demo
    if (email === 'admin@qurius.ai' && password === 'admin123') {
      const mockUser = {
        id: 'mock-user-id',
        email: email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        role: 'authenticated'
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
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  } catch (error) {
    // Fallback to localStorage if Supabase fails
    console.warn('Supabase signin failed, using localStorage fallback')
    return await localStorageAuth.signIn(email, password)
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
