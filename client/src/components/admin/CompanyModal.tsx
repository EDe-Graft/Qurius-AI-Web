import { useState, useEffect } from "react"
import { X, Save, Trash2, Eye, Edit, Building2, Globe, MapPin, Mail, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Company {
  id?: string
  name: string
  domain?: string
  location?: string
  description: string
  theme: {
    primaryColor: string
    backgroundColor: string
    textColor: string
  }
  industry: string
  website: string
  contact_email?: string
  email: string
  logo_url: string
  enrollment_date?: string
  status?: 'active' | 'inactive' | 'suspended'
  conversations?: number
  lastActive?: string
}

interface CompanyModalProps {
  isOpen: boolean
  onClose: () => void
  company?: Company | null
  mode: 'view' | 'add' | 'edit'
  onSave: (company: Company) => void | Promise<void>
  onDelete?: (companyId: string) => void
}

const defaultCompany: Company = {
  name: '',
  domain: '',
  location: '',
  description: '',
  theme: {
    primaryColor: '#3B82F6',
    backgroundColor: '#F3F4F6',
    textColor: '#1F2937'
  },
  industry: '',
  website: '',
  contact_email: '',
  email: '',
  logo_url: '',
  enrollment_date: new Date().toISOString().split('T')[0],
  status: 'active'
}

const themeColors = [
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Purple', value: '#8B5CF6' },
  { name: 'Green', value: '#10B981' },
  { name: 'Orange', value: '#F59E0B' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Pink', value: '#EC4899' },
  { name: 'Indigo', value: '#6366F1' },
  { name: 'Teal', value: '#14B8A6' }
]

const industries = [
  'Technology',
  'Healthcare',
  'Education',
  'Finance',
  'Retail',
  'Manufacturing',
  'Consulting',
  'Real Estate',
  'Entertainment',
  'Non-Profit',
  'Other'
]

export function CompanyModal({ isOpen, onClose, company, mode, onSave, onDelete }: CompanyModalProps) {
  const [formData, setFormData] = useState<Company>(defaultCompany)
  const [errors, setErrors] = useState<Partial<Company>>({})

  useEffect(() => {
    if (company && mode !== 'add') {
      setFormData(company)
    } else {
      setFormData(defaultCompany)
    }
    setErrors({})
  }, [company, mode, isOpen])

  const validateForm = (): boolean => {
    const newErrors: Partial<Company> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Company name is required'
    }
    
    if (formData.domain && !/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(formData.domain)) {
      newErrors.domain = 'Please enter a valid domain'
    }
    
    if (formData.location && formData.location.trim() === '') {
      newErrors.location = 'Location cannot be empty if provided'
    }
    
    if (!formData.industry.trim()) {
      newErrors.industry = 'Industry is required'
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Website is required'
    }
    
    if (!formData.contact_email?.trim()) {
      newErrors.contact_email = 'Contact email is required'
    } else if (formData.contact_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact_email)) {
      newErrors.contact_email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSave(formData)
      onClose()
    }
  }

  const handleDelete = () => {
    if (company?.id && onDelete) {
      onDelete(company.id)
      onClose()
    }
  }

  const updateField = (field: keyof Company, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            {mode === 'view' && <Eye className="h-5 w-5 text-blue-600" />}
            {mode === 'add' && <Building2 className="h-5 w-5 text-green-600" />}
            {mode === 'edit' && <Edit className="h-5 w-5 text-purple-600" />}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {mode === 'view' && 'View Company'}
              {mode === 'add' && 'Add New Company'}
              {mode === 'edit' && 'Edit Company'}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-red-500 dark:hover:bg-red-500"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {mode === 'view' ? (
            <div className="space-y-6">
              {/* Company Info */}
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: formData.theme.primaryColor }}
                >
                  {formData.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {formData.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{formData.industry}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Domain</label>
                    <div className="flex items-center mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Globe className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-900 dark:text-gray-100">{formData.domain}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                    <div className="flex items-center mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-900 dark:text-gray-100">{formData.location}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
                    <div className="flex items-center mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Link className="h-4 w-4 text-gray-400 mr-2" />
                      <a 
                        href={formData.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {formData.website}
                      </a>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact Email</label>
                    <div className="flex items-center mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <a 
                        href={`mailto:${formData.contact_email}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {formData.contact_email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                    <div className="mt-1">
                      <span className={cn(
                        "inline-flex px-2 py-1 text-xs font-medium rounded-full",
                        formData.status === 'active' && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                        formData.status === 'inactive' && "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
                        formData.status === 'suspended' && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      )}>
                        {(formData.status || 'inactive').charAt(0).toUpperCase() + (formData.status || 'inactive').slice(1)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme Color</label>
                    <div className="flex items-center mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div 
                        className="w-6 h-6 rounded-full mr-3"
                        style={{ backgroundColor: formData.theme.primaryColor }}
                      />
                      <span className="text-gray-900 dark:text-gray-100">{formData.theme.primaryColor}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enrollment Date</label>
                    <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-900 dark:text-gray-100">
                        {new Date(formData.enrollment_date || '').toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {formData.conversations && (
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Conversations</label>
                      <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-900 dark:text-gray-100">
                          {formData.conversations.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-900 dark:text-gray-100">{formData.description}</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                      "text-gray-900 dark:text-gray-100",
                      errors.name && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Enter company name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Domain *
                  </label>
                  <input
                    type="text"
                    value={formData.domain}
                    onChange={(e) => updateField('domain', e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                      "text-gray-900 dark:text-gray-100",
                      errors.domain && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="example.com"
                  />
                  {errors.domain && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.domain}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                      "text-gray-900 dark:text-gray-100",
                      errors.location && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="City, State"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.location}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => updateField('industry', e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                      "text-gray-900 dark:text-gray-100",
                      errors.industry && "border-red-500 focus:ring-red-500"
                    )}
                  >
                    <option value="">Select Industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.industry}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  rows={3}
                  className={cn(
                    "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                    "text-gray-900 dark:text-gray-100",
                    errors.description && "border-red-500 focus:ring-red-500"
                  )}
                  placeholder="Brief description of the company"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website *
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                      "text-gray-900 dark:text-gray-100",
                      errors.website && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="https://example.com"
                  />
                  {errors.website && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.website}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    value={formData.contact_email}
                    onChange={(e) => updateField('contact_email', e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                      "text-gray-900 dark:text-gray-100",
                      errors.contact_email && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="contact@example.com"
                  />
                  {errors.contact_email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.contact_email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    value={formData.logo_url}
                    onChange={(e) => updateField('logo_url', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="https://example.com/logo.png"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Enrollment Date
                  </label>
                  <input
                    type="date"
                    value={formData.enrollment_date}
                    onChange={(e) => updateField('enrollment_date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Theme Color
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {themeColors.map(color => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => updateField('theme', JSON.stringify({ primaryColor: color.value, backgroundColor: '#F3F4F6', textColor: '#1F2937' }))}
                        className={cn(
                          "w-12 h-12 rounded-lg border-2 transition-all",
                          JSON.stringify(formData.theme) === JSON.stringify({ primaryColor: color.value, backgroundColor: '#F3F4F6', textColor: '#1F2937' })
                            ? "border-gray-900 dark:border-gray-100 scale-110" 
                            : "border-gray-300 dark:border-gray-600 hover:scale-105"
                        )}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Selected: {formData.theme.primaryColor}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => updateField('status', e.target.value as 'active' | 'inactive' | 'suspended')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-3">
            {mode === 'edit' && company?.id && onDelete && (
              <Button
                variant="outline"
                onClick={handleDelete}
                className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            )}
          </div>
          
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            {mode !== 'view' && (
              <Button
                type="submit"
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Save className="h-4 w-4 mr-2" />
                {mode === 'add' ? 'Add Company' : 'Save Changes'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 