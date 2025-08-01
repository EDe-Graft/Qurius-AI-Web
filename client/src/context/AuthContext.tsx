import React, { createContext, useContext, useEffect, useState } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { signIn, signOut, getCurrentUser, getCurrentSession } from '@/lib/auth'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isAuthenticated: boolean
  authFlow: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [authFlow, setAuthFlow] = useState<string | null>('localStorage')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const currentSession = await getCurrentSession()
        const currentUser = await getCurrentUser()
        
        setSession(currentSession)
        setUser(currentUser)

        // If we have a valid Supabase session and user, set authFlow to supabase
        if (currentSession && currentUser && currentUser.id && currentUser.id !== 'user-id') {
          console.log('✅ AuthContext - Setting authFlow to supabase')
          setAuthFlow('supabase')
        } else {
          console.log('🔍 AuthContext - Setting authFlow to localStorage')
          setAuthFlow('localStorage')
        }

      } catch (error) {
        console.error('Error getting initial session:', error)
        // Fallback to localStorage for simple auth
        const storedUser = localStorage.getItem('qurius_user')
        const storedSession = localStorage.getItem('qurius_session')
        
        if (storedUser && storedSession) {
          try {
            setUser(JSON.parse(storedUser))
            setSession(JSON.parse(storedSession))
            setAuthFlow('localStorage')
          } catch (e) {
            console.error('Error parsing stored auth data:', e)
          }
        }
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔄 AuthContext - Auth state change:', event, session?.user?.id)
        
        if (event === 'INITIAL_SESSION') {
          return
        }
        
        setSession(session)
        setUser(session?.user ?? null)
        
        // Update authFlow based on session
        if (session && session.user && session.user.id && session.user.id !== 'user-id') {
          console.log('✅ AuthContext - Setting authFlow to supabase (from auth state change)')
          setAuthFlow('supabase')
        } else {
          console.log('🔍 AuthContext - Setting authFlow to localStorage (from auth state change)')
          setAuthFlow('localStorage')
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const handleSignIn = async (email: string, password: string) => {
    try {
      const result = await signIn(email, password)
      console.log('✅ AuthContext - Sign in successful, authFlow:', authFlow)
      
      // Update authFlow to supabase after successful sign in
      if (result && result.user && result.user.id && result.user.id !== 'user-id') {
        console.log('✅ AuthContext - Setting authFlow to supabase after sign in')
        setAuthFlow('supabase')
      }
    } catch (error) {
      throw error
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      throw error
    }
  }

  const value = {
    user,
    session,
    loading,
    signIn: handleSignIn,
    signOut: handleSignOut,
    isAuthenticated: !!user,
    authFlow
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 