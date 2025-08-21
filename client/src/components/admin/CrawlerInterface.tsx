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
  status: 'running' | 'completed' | 'failed'
  crawl_date: string
  completed_date?: string
  error_message?: string
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
        const runningSession = sessions.find((s: CrawlSession) => s.status === 'running')
        if (runningSession) {
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
        }
      }
    } catch (error) {
      console.error('Failed to check for generated FAQs:', error)
    }
  }

  const handleSaveApprovedFAQs = async (approvedFAQs: Array<{ question: string; answer: string }>) => {
    setSavingFAQs(true)
    try {
      const response = await axios.post(`${BACKEND_URL}/api/crawler/save-faqs`, {
        companyId,
        faqs: approvedFAQs
      })
      
      if (response.data.success) {
        // Reload FAQs to show the newly saved ones
        await loadCrawledFAQs()
        setShowFAQPreview(false)
        setGeneratedFAQs([])
      } else {
        throw new Error(response.data.error || 'Failed to save FAQs')
      }
    } catch (error: any) {
      console.error('Failed to save approved FAQs:', error)
      alert(`Failed to save FAQs: ${error.response?.data?.error || error.message}`)
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
      const confirmMessage = `This website was already crawled on ${crawlDate} (Status: ${previousCrawl.status}). Do you want to crawl it again?`
      
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

          if (session.status === 'completed') {
            clearInterval(interval)
            setIsCrawling(false)
            
            // Check for AI-generated FAQs to review
            await checkForGeneratedFAQs()
            
            // Reload existing FAQs
            loadCrawledFAQs()
          } else if (session.status === 'failed') {
            clearInterval(interval)
            setIsCrawling(false)
            loadCrawledFAQs()
          }
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

    // Stop polling after 10 minutes
    setTimeout(() => {
      clearInterval(interval)
      setIsCrawling(false) // Stop loading animation after timeout
    }, 600000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running':
        return <Clock className="h-4 w-4 text-blue-500" />
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
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }

    return (
      <Badge className={variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800'}>
        {status}
      </Badge>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="space-y-6">
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
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                crawlMode === 'website'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <Globe className="h-4 w-4 inline mr-2" />
              Website Crawl
            </button>
            <button
              onClick={() => setCrawlMode('documents')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                crawlMode === 'documents'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Document Upload
            </button>
          </div>

          {/* Website Crawl Mode */}
          {crawlMode === 'website' && (
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter website URL (e.g., https://example.com)"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  disabled={isCrawling}
                  className="flex-1"
                />
                <Button
                  onClick={() => {
                    startCrawl()
                    setWebsiteUrl('')
                  }}
                  disabled={isCrawling || !websiteUrl.trim()}
                  className="flex items-center gap-2"
                >
                  {isCrawling ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  {isCrawling ? 'Crawling in Progress...' : 'Start Crawl'}
                </Button>
              </div>
              
              {previouslyCrawledUrl && (
                <div className="text-orange-600 text-sm bg-orange-50 dark:bg-orange-900/20 p-3 rounded flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  This website has been crawled before. Crawling again will create a new session.
                </div>
              )}

              <div className="text-sm text-gray-600 dark:text-gray-400">
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
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.docx,.doc,.txt,.md"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Drop your documents here or{' '}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    browse files
                  </button>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Supports PDF, Word documents, and text files (max 10MB each, up to 5 files)
                </p>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Selected Files:</h4>
                  {uploadedFiles.map((uploadedFile) => (
                    <div key={uploadedFile.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <File className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">{uploadedFile.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{formatFileSize(uploadedFile.size)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(uploadedFile.id)}
                        className="text-gray-400 hover:text-red-500"
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
                className="w-full flex items-center gap-2"
              >
                {isUploading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                {isUploading ? 'Processing Documents...' : 'Process Documents'}
              </Button>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>• Extracts text from PDF, Word, and text files</p>
                <p>• Generates FAQs automatically from document content</p>
                <p>• Supports up to 5 files, 10MB each</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded">
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
              Crawl Sessions ({crawlSessions.length})
              {isCrawling && (
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <RefreshCw className="h-3 w-3 animate-spin mr-1" />
                  Active
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crawlSessions.map((session) => (
                <div key={session.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(session.status)}
                      <span className="font-medium">{session.base_url}</span>
                    </div>
                    {getStatusBadge(session.status)}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Pages:</span>
                      <span className="ml-2 font-medium">{session.pages_crawled}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Content:</span>
                      <span className="ml-2 font-medium">{session.content_extracted}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">FAQs:</span>
                      <span className="ml-2 font-medium">{session.faqs_generated}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Date:</span>
                      <span className="ml-2 font-medium">{formatDate(session.crawl_date)}</span>
                    </div>
                  </div>

                  {session.error_message && (
                    <div className="mt-3 text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded">
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
              Crawled FAQs ({crawledFAQs.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crawledFAQs.map((faq) => (
                <div key={faq.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {faq.question}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {faq.source} ({Math.round(faq.confidence * 100)}%)
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
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
            <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              No Crawl Data Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
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