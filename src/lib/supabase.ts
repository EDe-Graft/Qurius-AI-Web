import { createClient } from '@supabase/supabase-js'
import {SUPABASE_CONFIG} from './config'

const supabaseUrl = SUPABASE_CONFIG.projectUrl
const supabaseKey = SUPABASE_CONFIG.anonKey

if (!supabaseUrl) {
  throw new Error('Missing Supabase URL')
}

if (!supabaseKey) {
  throw new Error('Missing Supabase anon key')
}

// Create typed Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)

// Re-export Database type for convenience
export type { Database } from '../../types/database'

export default supabase