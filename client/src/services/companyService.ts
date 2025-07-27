import axios from 'axios'

export interface Company {
  id?: string
  name: string
  domain: string
  location: string
  description: string
  theme: string
  industry: string
  website: string
  contact_email: string
  logo_url: string
  enrollment_date: string
  status: 'active' | 'inactive' | 'suspended'
  conversations?: number
  queries?: number
  lastActive?: string
}

export class CompanyService {
  static BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  static async createCompany(company: Omit<Company, 'id'>): Promise<Company> {
    try {
      const response = await axios.post(`${this.BACKEND_URL}/api/companies`, company, {
        headers: { 'Content-Type': 'application/json' },
      })
      
      if (response.data.success) {
        return response.data.company
      } else {
        throw new Error(response.data.error || 'Failed to create company')
      }
    } catch (error: any) {
      console.error('Error creating company:', error)
      throw new Error(error.response?.data?.error || 'Failed to create company')
    }
  }

  static async updateCompany(company: Company): Promise<Company> {
    try {
      const response = await axios.put(`${this.BACKEND_URL}/api/companies/${company.id}`, company, {
        headers: { 'Content-Type': 'application/json' },
      })
      
      if (response.data.success) {
        return response.data.company
      } else {
        throw new Error(response.data.error || 'Failed to update company')
      }
    } catch (error: any) {
      console.error('Error updating company:', error)
      throw new Error(error.response?.data?.error || 'Failed to update company')
    }
  }

  static async deleteCompany(companyId: string): Promise<boolean> {
    try {
      const response = await axios.delete(`${this.BACKEND_URL}/api/companies/${companyId}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      
      return response.data.success
    } catch (error: any) {
      console.error('Error deleting company:', error)
      throw new Error(error.response?.data?.error || 'Failed to delete company')
    }
  }

  static async getAllCompanies(): Promise<Company[]> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/companies`, {
        headers: { 'Content-Type': 'application/json' },
      })
      
      return response.data || []
    } catch (error: any) {
      console.error('Error fetching companies:', error)
      throw new Error(error.response?.data?.error || 'Failed to fetch companies')
    }
  }

  static async getCompanyById(companyId: string): Promise<Company> {
    try {
      const response = await axios.get(`${this.BACKEND_URL}/api/companies/${companyId}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      
      return response.data
    } catch (error: any) {
      console.error('Error fetching company:', error)
      throw new Error(error.response?.data?.error || 'Failed to fetch company')
    }
  }
} 