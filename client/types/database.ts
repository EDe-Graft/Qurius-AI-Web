// Central database type definitions for Supabase
// This file contains all database-related types for easy maintainability

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Main Database interface
export interface Database {
  public: {
    Tables: {
      // Users table
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      
      // Chat conversations table
      conversations: {
        Row: {
          id: string
          user_id: string
          title: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }

      // FAQs table
      faqs: {
        Row: {
          id: string
          company_id: string
          question: string
          answer: string
          question_embedding: number[]
          answer_embedding: number[]
          tags: string[] | null
          relevance_score: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          question: string
          answer: string
          question_embedding: number[]
          answer_embedding: number[]
          tags?: string[] | null
          relevance_score?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          question?: string
          answer?: string
          question_embedding?: number[]
          answer_embedding?: number[]
          tags?: string[] | null
          relevance_score?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "faqs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          }
        ]
      }
      
      // Chat messages table
      messages: {
        Row: {
          id: string
          conversation_id: string
          content: string
          is_user: boolean
          created_at: string
        }
        Insert: {
          id?: string
          conversation_id: string
          content: string
          is_user: boolean
          created_at?: string
        }
        Update: {
          id?: string
          conversation_id?: string
          content?: string
          is_user?: boolean
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          }
        ]
      }
      
      // User preferences table
      user_preferences: {
        Row: {
          id: string
          user_id: string
          theme: 'light' | 'dark' | 'system'
          language: string
          notifications_enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          theme?: 'light' | 'dark' | 'system'
          language?: string
          notifications_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          theme?: 'light' | 'dark' | 'system'
          language?: string
          notifications_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }

      // Companies table
      companies: {
        Row: {
          id: string
          name: string
          domain: string | null
          description: string | null
          theme: string
          embedding: number[] | null
          created_at: string
          updated_at: string
          
        }
        Insert: {
          id?: string
          name: string
          domain?: string | null
          description?: string | null
          theme?: string
          embedding?: number[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          domain?: string | null
          description?: string | null
          theme?: string
          embedding?: number[] | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      find_relevant_faqs: {
        Args: {
          p_company_id: string
          p_query: string
          p_query_embedding: number[]
          p_top_k?: number
        }
        Returns: Array<{
          faq_id: string
          question: string
          answer: string
          similarity: number
        }>
      }
    }
    Enums: {
      theme_type: 'light' | 'dark' | 'system'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Utility types for easier usage
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Specific table types for convenience
export type User = Tables<'users'>
export type UserInsert = TablesInsert<'users'>
export type UserUpdate = TablesUpdate<'users'>

export type Conversation = Tables<'conversations'>
export type ConversationInsert = TablesInsert<'conversations'>
export type ConversationUpdate = TablesUpdate<'conversations'>

export type Message = Tables<'messages'>
export type MessageInsert = TablesInsert<'messages'>
export type MessageUpdate = TablesUpdate<'messages'>

export type UserPreferences = Tables<'user_preferences'>
export type UserPreferencesInsert = TablesInsert<'user_preferences'>
export type UserPreferencesUpdate = TablesUpdate<'user_preferences'>

// Custom types for application logic
export interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: string
  conversationId?: string
}

export interface ConversationWithMessages extends Conversation {
  messages: Message[]
}

export interface UserWithPreferences extends User {
  preferences?: UserPreferences
}

// API response types
export interface ApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  count: number
  page: number
  pageSize: number
  hasMore: boolean
}

// Real-time subscription types
export interface RealtimePayload<T> {
  eventType: 'INSERT' | 'UPDATE' | 'DELETE'
  new: T
  old: T
  schema: string
  table: string
}

// Auth types
export interface AuthUser {
  id: string
  email: string
  emailConfirmed: boolean
  lastSignInAt: string | null
  createdAt: string
}

export interface AuthSession {
  accessToken: string
  refreshToken: string
  expiresAt: number
  user: AuthUser
}
