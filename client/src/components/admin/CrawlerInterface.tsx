import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  Play, 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText,
  Download,
  RefreshCw,
  Upload,
  File,
  X
} from 'lucide-react'
import axios from 'axios'
import { FAQPreviewModal } from './FAQPreviewModal'
import { useNotifications } from '@/context/NotificationContext'
import { NotificationBanner } from './NotificationBanner'

interface CrawlerInterfaceProps {
  companyId: string
  companyName: string
}

interface CrawlSession {
  id: string
  base_url: string
  pages_crawled: number
  content_extracted: number
  faqs_generated: number
  status: 'running' | 'crawling' | 'processing_embeddings' | 'generating_faqs' | 'ready_for_review' | 'completed' | 'failed'
  crawl_date: string
  completed_date?: string
  error_message?: string
  progress_percentage?: number
  status_details?: string
  ai_generated_faqs?: Array<{ question: string; answer: string }>
  ai_faqs_count?: number
}

interface CrawledFAQ {
  id: string
  question: string
  answer: string
  confidence: number
  source: string
  created_at: string
}

interface UploadedFile {
  file: File
  id: string
  name: string
  size: number
  type: string
}

export function CrawlerInterface({ companyId, companyName }: CrawlerInterfaceProps) {
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [isCrawling, setIsCrawling] = useState(false)
  const [crawlSessions, setCrawlSessions] = useState<CrawlSession[]>([])
  const [crawledFAQs, setCrawledFAQs] = useState<CrawledFAQ[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [previouslyCrawledUrl, setPreviouslyCrawledUrl] = useState<string | null>(null)
  
  // Document upload state
  const [crawlMode, setCrawlMode] = useState<'website' | 'documents'>('website')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  // FAQ Preview Modal State
  const [showFAQPreview, setShowFAQPreview] = useState(false)
  const [generatedFAQs, setGeneratedFAQs] = useState<Array<{ question: string; answer: string }>>([])
  const [savingFAQs, setSavingFAQs] = useState(false)

  // Notification State
  const { addNotification } = useNotifications()
  const [showBanner, setShowBanner] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(false)

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  // Helper function to normalize URLs for comparison
  const normalizeUrl = (url: string): string => {
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`)
      return `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname.replace(/\/$/, '')}`
    } catch {
      return url.toLowerCase().replace(/\/$/, '')
    }
  }

  // Load crawl sessions on mount
  useEffect(() => {
    loadCrawlSessions()
    loadCrawledFAQs()
  }, [companyId])

  // Check if current URL has been crawled before
  useEffect(() => {
    if (websiteUrl.trim() && crawlSessions.length > 0) {
      const normalizedUrl = normalizeUrl(websiteUrl.trim())
      const previousCrawl = crawlSessions.find(session => 
        normalizeUrl(session.base_url) === normalizedUrl
      )
      setPreviouslyCrawledUrl(previousCrawl ? previousCrawl.base_url : null)
    } else {
      setPreviouslyCrawledUrl(null)
    }
  }, [websiteUrl, crawlSessions])

  const loadCrawlSessions = async () => {
    try {
      setLoading(true)
      // Load all crawl sessions to check for previously crawled URLs
      const response = await axios.get(`${BACKEND_URL}/api/crawler/sessions/${companyId}`)
      if (response.data.success && response.data.sessions) {
        const sessions = response.data.sessions
        setCrawlSessions(sessions)
        
        // Check if there's a currently running session
        const activeSession = sessions.find((s: CrawlSession) => 
          ['running', 'crawling', 'processing_embeddings', 'generating_faqs'].includes(s.status)
        )
        if (activeSession) {
          setIsCrawling(true)
          pollCrawlStatus()
        }
      } else {
        // Fallback to single session API if new endpoint doesn't exist
        const fallbackResponse = await axios.get(`${BACKEND_URL}/api/crawler/status/${companyId}`)
        if (fallbackResponse.data.success && fallbackResponse.data.crawlSession) {
          const session = fallbackResponse.data.crawlSession
          setCrawlSessions([session])
          
          if (session.status === 'running') {
            setIsCrawling(true)
            pollCrawlStatus()
          }
        } else {
          setCrawlSessions([])
        }
      }
    } catch (error) {
      console.error('Failed to load crawl sessions:', error)
      setCrawlSessions([])
    } finally {
      setLoading(false)
    }
  }

  const loadCrawledFAQs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/crawler/faqs/${companyId}`)
      if (response.data.success) {
        setCrawledFAQs(response.data.faqs || [])
      }
    } catch (error) {
      console.error('Failed to load crawled FAQs:', error)
      // Don't treat missing FAQs as an error - set empty array
      setCrawledFAQs([])
    }
  }

  const checkForGeneratedFAQs = async () => {
    try {
      // Get the latest crawl session to check for generated FAQs
      const response = await axios.get(`${BACKEND_URL}/api/crawler/status/${companyId}`)
      if (response.data.success && response.data.crawlSession) {
        const session = response.data.crawlSession
        
        // Check if this session has AI-generated FAQs
        if (session.ai_generated_faqs && session.ai_generated_faqs.length > 0) {
          setGeneratedFAQs(session.ai_generated_faqs)
          setShowFAQPreview(true)
          
          // Add notification
          addNotification({
            type: 'success',
            title: 'AI FAQs Ready for Review',
            message: `${session.ai_generated_faqs.length} AI-generated FAQs are ready for your review and approval.`,
            read: false,
            action: {
              label: 'Review FAQs',
              onClick: () => setShowFAQPreview(true)
            }
          })
          
          // Show banner if not dismissed
          if (!bannerDismissed) {
            setShowBanner(true)
          }
        }
      }
    } catch (error) {
      console.error('Failed to check for generated FAQs:', error)
    }
  }

  const handleSaveApprovedFAQs = async (approvedFAQs: Array<{ question: string; answer: string }>) => {
    setSavingFAQs(true)
    try {
      // Get the current session ID from crawl sessions
      console.log('🔍 Looking for active session in:', crawlSessions)
      
      let currentSession = crawlSessions.find(session => 
        ['ready_for_review', 'generating_faqs'].includes(session.status)
      )
      
      // Fallback: look for any session with AI-generated FAQs
      if (!currentSession) {
        currentSession = crawlSessions.find(session => 
          session.ai_generated_faqs && session.ai_generated_faqs.length > 0
        )
        console.log('🔄 Fallback: Found session with AI FAQs:', currentSession)
      }
      
      console.log('📋 Found session:', currentSession)
      
      if (!currentSession) {
        console.error('❌ No active session found. Available sessions:', crawlSessions.map(s => ({ id: s.id, status: s.status })))
        throw new Error('No active crawl session found. Please try refreshing the page.')
      }

      console.log('💾 Saving FAQs with data:', {
        sessionId: currentSession.id,
        sessionStatus: currentSession.status,
        approvedFAQsCount: approvedFAQs.length,
        approvedFAQs: approvedFAQs
      })

      const response = await axios.post(`${BACKEND_URL}/api/crawler/save-faqs`, {
        sessionId: currentSession.id,
        approvedFAQs: approvedFAQs
      })
      
      if (response.data.success) {
        // Reload FAQs to show the newly saved ones
        await loadCrawledFAQs()
        setShowFAQPreview(false)
        setGeneratedFAQs([])
        
        // Add success notification
        addNotification({
          type: 'success',
          title: 'FAQs Saved Successfully',
          message: `Successfully saved ${approvedFAQs.length} approved FAQs.`,
          read: false
        })
      } else {
        throw new Error(response.data.error || 'Failed to save FAQs')
      }
    } catch (error: any) {
      console.error('❌ Failed to save approved FAQs:', error)
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      })
      
      const errorMessage = error.response?.data?.error || error.message || 'Failed to save FAQs'
      alert(`Failed to save FAQs: ${errorMessage}`)
    } finally {
      setSavingFAQs(false)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type
    }))

    setUploadedFiles(prev => [...prev, ...newFiles])
    
    // Clear the input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const validateFiles = () => {
    if (uploadedFiles.length === 0) {
      setError('Please select at least one document to upload')
      return false
    }

    const maxFileSize = 10 * 1024 * 1024 // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'text/plain',
      'text/markdown'
    ]

    for (const uploadedFile of uploadedFiles) {
      if (uploadedFile.size > maxFileSize) {
        setError(`File ${uploadedFile.name} is too large. Maximum size is 10MB.`)
        return false
      }

      if (!allowedTypes.includes(uploadedFile.type)) {
        setError(`File ${uploadedFile.name} is not a supported type. Please upload PDF, Word, or text files.`)
        return false
      }
    }

    return true
  }

  const startDocumentProcessing = async () => {
    if (!validateFiles()) return

    try {
      setIsUploading(true)
      setError(null)

      const formData = new FormData()
      formData.append('companyId', companyId)
      
      uploadedFiles.forEach(uploadedFile => {
        formData.append('documents', uploadedFile.file)
      })

      const response = await axios.post(`${BACKEND_URL}/api/crawler/upload-documents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.data.success) {
        // Start polling for status updates
        pollCrawlStatus()
        setUploadedFiles([]) // Clear uploaded files
      } else {
        setIsUploading(false)
      }
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to upload documents')
      setIsUploading(false)
    }
  }

  const startCrawl = async () => {
    if (crawlMode === 'documents') {
      return startDocumentProcessing()
    }

    if (!websiteUrl.trim()) {
      setError('Please enter a website URL')
      return
    }

    // Check if this URL has been crawled before
    const normalizedUrl = normalizeUrl(websiteUrl.trim())
    const previousCrawl = crawlSessions.find(session => 
      normalizeUrl(session.base_url) === normalizedUrl
    )

    if (previousCrawl) {
      const crawlDate = new Date(previousCrawl.crawl_date).toLocaleDateString()
      const statusText = previousCrawl.status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      const confirmMessage = `This website was already crawled on ${crawlDate} (Status: ${statusText}). Do you want to crawl it again?`
      
      if (!window.confirm(confirmMessage)) {
        return
      }
    }

    try {
      setIsCrawling(true)
      setError(null)
      setPreviouslyCrawledUrl(null)

      const response = await axios.post(`${BACKEND_URL}/api/crawler/start`, {
        companyId,
        websiteUrl: websiteUrl.trim()
      })

      if (response.data.success) {
        // Start polling for status updates
        pollCrawlStatus()
        // Don't set isCrawling to false here - let polling handle it
      } else {
        setIsCrawling(false)
      }
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to start crawl')
      setIsCrawling(false)
    }
  }

  const pollCrawlStatus = () => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/crawler/status/${companyId}`)
        if (response.data.success && response.data.crawlSession) {
          const session = response.data.crawlSession
          setCrawlSessions([session])

          // Continue polling until status is 'ready_for_review' or 'completed' or 'failed'
          if (session.status === 'ready_for_review') {
            clearInterval(interval)
            setIsCrawling(false)
            
            // Check for AI-generated FAQs to review
            await checkForGeneratedFAQs()
            
            // Reload existing FAQs
            loadCrawledFAQs()
          } else if (session.status === 'completed') {
            clearInterval(interval)
            setIsCrawling(false)
            
            // Check for AI-generated FAQs to review (in case they were already reviewed)
            await checkForGeneratedFAQs()
            
            // Reload existing FAQs
            loadCrawledFAQs()
          } else if (session.status === 'failed') {
            clearInterval(interval)
            setIsCrawling(false)
            loadCrawledFAQs()
          }
          // Continue polling for: 'crawling', 'processing_embeddings', 'generating_faqs'
        } else {
          // If no session found, stop polling and loading
          clearInterval(interval)
          setIsCrawling(false)
        }
      } catch (error) {
        console.error('Failed to poll crawl status:', error)
        clearInterval(interval)
        setIsCrawling(false) // Stop loading animation on error
      }
    }, 5000) // Poll every 5 seconds

    // Stop polling after 30 minutes (increased from 10 minutes)
    setTimeout(() => {
      clearInterval(interval)
      setIsCrawling(false) // Stop loading animation after timeout
    }, 1800000) // 30 minutes
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running':
      case 'crawling':
        return <Globe className="h-4 w-4 text-blue-500" />
      case 'processing_embeddings':
        return <RefreshCw className="h-4 w-4 text-purple-500" />
      case 'generating_faqs':
        return <FileText className="h-4 w-4 text-orange-500" />
      case 'ready_for_review':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      running: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      crawling: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      processing_embeddings: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      generating_faqs: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      ready_for_review: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }

    return (
      <Badge className={variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800'}>
        {status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </Badge>
    )
  }

  const getStatusDescription = (status: string, details?: string) => {
    switch (status) {
      case 'running':
      case 'crawling':
        return details || 'Crawling website pages and extracting content...'
      case 'processing_embeddings':
        return details || 'Generating AI embeddings for content analysis...'
      case 'generating_faqs':
        return details || 'Creating AI-generated FAQs from your content...'
      case 'ready_for_review':
        return details || 'AI FAQs are ready for your review and approval!'
      case 'completed':
        return 'Processing completed successfully'
      case 'failed':
        return 'Processing failed - please try again'
      default:
        return 'Processing in progress...'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Notification Banner */}
      {showBanner && (
        <NotificationBanner
          message={`AI-generated FAQs are ready for review! ${generatedFAQs.length} FAQs are waiting for your approval.`}
          actionLabel="Review FAQs"
          onAction={() => {
            setShowFAQPreview(true)
            setShowBanner(false)
          }}
          onDismiss={() => {
            setShowBanner(false)
            setBannerDismissed(true)
          }}
          type="success"
          autoDismiss={false}
        />
      )}

      {/* Crawl Control */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Content Processor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Mode Toggle */}
          <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <button
              onClick={() => setCrawlMode('website')}
              className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                crawlMode === 'website'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Website Crawl</span>
              <span className="sm:hidden">Website</span>
            </button>
            <button
              onClick={() => setCrawlMode('documents')}
              className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                crawlMode === 'documents'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Document Upload</span>
              <span className="sm:hidden">Documents</span>
            </button>
          </div>

          {/* Website Crawl Mode */}
          {crawlMode === 'website' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Input
                  placeholder="Enter website URL (e.g., https://example.com)"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isCrawling && websiteUrl.trim()) {
                      startCrawl()
                      setWebsiteUrl('')
                    }
                  }}
                  disabled={isCrawling}
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={() => {
                    startCrawl()
                    setWebsiteUrl('')
                  }}
                  disabled={isCrawling || !websiteUrl.trim()}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  {isCrawling ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  <span className="hidden sm:inline">
                    {isCrawling ? 'Crawling in Progress...' : 'Start Crawl'}
                  </span>
                  <span className="sm:hidden">
                    {isCrawling ? 'Crawling...' : 'Start'}
                  </span>
                </Button>
              </div>
              
              {previouslyCrawledUrl && (
                <div className="text-orange-600 text-xs sm:text-sm bg-orange-50 dark:bg-orange-900/20 p-3 rounded flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>This website has been crawled before. Crawling again will create a new session.</span>
                </div>
              )}

              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>• Crawls up to 50 pages per website</p>
                <p>• Extracts content and generates FAQs automatically</p>
                <p>• Respects robots.txt and includes delays between requests</p>
              </div>
            </div>
          )}

          {/* Document Upload Mode */}
          {crawlMode === 'documents' && (
            <div className="space-y-4">
              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 sm:p-6 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.docx,.doc,.txt,.md"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Upload className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Drop your documents here or{' '}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    browse files
                  </button>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Supports PDF, Word documents, and text files (max 10MB each, up to 5 files)
                </p>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">Selected Files:</h4>
                  {uploadedFiles.map((uploadedFile) => (
                    <div key={uploadedFile.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <File className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">{uploadedFile.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{formatFileSize(uploadedFile.size)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(uploadedFile.id)}
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Process Documents Button */}
              <Button
                onClick={startDocumentProcessing}
                disabled={isUploading || uploadedFiles.length === 0}
                className="w-full flex items-center justify-center gap-2"
              >
                {isUploading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">
                  {isUploading ? 'Processing Documents...' : 'Process Documents'}
                </span>
                <span className="sm:hidden">
                  {isUploading ? 'Processing...' : 'Process'}
                </span>
              </Button>

              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>• Extracts text from PDF, Word, and text files</p>
                <p>• Generates FAQs automatically from document content</p>
                <p>• Supports up to 5 files, 10MB each</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="text-red-600 text-xs sm:text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Crawl Sessions */}
      {crawlSessions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span className="text-sm sm:text-base">Crawl Sessions ({crawlSessions.length})</span>
              {isCrawling && (
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                  <RefreshCw className="h-3 w-3 animate-spin mr-1" />
                  Active
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crawlSessions.map((session) => (
                <div key={session.id} className="border rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      {getStatusIcon(session.status)}
                      <span className="font-medium text-sm sm:text-base truncate">{session.base_url}</span>
                    </div>
                    {getStatusBadge(session.status)}
                  </div>
                  
                  {/* Progress Bar */}
                  {!['completed', 'failed'].includes(session.status) && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{session.progress_percentage || 0}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${session.progress_percentage || 0}%` }}
                        ></div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {getStatusDescription(session.status, session.status_details)}
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Pages:</span>
                      <span className="ml-1 sm:ml-2 font-medium">{session.pages_crawled}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Content:</span>
                      <span className="ml-1 sm:ml-2 font-medium">{session.content_extracted}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">FAQs:</span>
                      <span className="ml-1 sm:ml-2 font-medium">{session.faqs_generated}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Date:</span>
                      <span className="ml-1 sm:ml-2 font-medium">{formatDate(session.crawl_date)}</span>
                    </div>
                  </div>

                  {session.error_message && (
                    <div className="mt-3 text-red-600 text-xs sm:text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded">
                      Error: {session.error_message}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Crawled FAQs */}
      {crawledFAQs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span className="text-sm sm:text-base">Crawled FAQs ({crawledFAQs.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crawledFAQs.map((faq) => (
                <div key={faq.id} className="border rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-0 mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      {faq.question}
                    </h4>
                    <Badge variant="outline" className="text-xs w-fit">
                      {faq.source} ({Math.round(faq.confidence * 100)}%)
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    {faq.answer}
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    Created: {formatDate(faq.created_at)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {crawlSessions.length === 0 && crawledFAQs.length === 0 && !loading && (
        <Card>
          <CardContent className="text-center py-8">
            <Globe className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              No Crawl Data Yet
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Start a crawl to automatically extract content and generate FAQs from {companyName}'s website.
            </p>
          </CardContent>
        </Card>
      )}

      {/* FAQ Preview Modal */}
      <FAQPreviewModal
        isOpen={showFAQPreview}
        onClose={() => setShowFAQPreview(false)}
        generatedFAQs={generatedFAQs}
        onSaveApproved={handleSaveApprovedFAQs}
        companyName={companyName}
        isLoading={savingFAQs}
      />
    </div>
  )
} 