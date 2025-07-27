import axios from 'axios'
import { createClient } from '@supabase/supabase-js'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

//get url and key from backend server
const response = await axios.get(`${BACKEND_URL}/api/widget-config`)
const { supabaseUrl, supabaseAnonKey } = response.data

if (!supabaseUrl) {
  throw new Error('Missing Supabase URL')
}

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase anon key')
}

// Create typed Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Re-export Database type for convenience
export type { Database } from '../../types/database'

export default supabase