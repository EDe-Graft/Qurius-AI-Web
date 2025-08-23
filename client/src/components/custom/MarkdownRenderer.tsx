import ReactMarkdown from "react-markdown"

interface MarkdownRendererProps {
  content: string
  className?: string
}

// Helper function to determine link type and styling
function getLinkTypeAndStyle(href: string) {
  if (!href) return { type: 'external', style: 'text-blue-500 hover:text-blue-600' }
  
  const url = href.toLowerCase()
  
  if (url.startsWith('mailto:')) {
    return { type: 'email', style: 'text-green-500 hover:text-green-600' }
  }
  
  if (url.startsWith('tel:')) {
    return { type: 'phone', style: 'text-purple-500 hover:text-purple-600' }
  }
  
  if (url.startsWith('sms:')) {
    return { type: 'sms', style: 'text-orange-500 hover:text-orange-600' }
  }
  
  if (url.startsWith('whatsapp:')) {
    return { type: 'whatsapp', style: 'text-green-500 hover:text-green-600' }
  }
  
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return { type: 'external', style: 'text-blue-500 hover:text-blue-600' }
  }
  
  // Default for relative links or unknown protocols
  return { type: 'internal', style: 'text-blue-500 hover:text-blue-600' }
}

// Helper function to get appropriate icon for link type
// function getLinkIcon(type: string) {
//   switch (type) {
//     case 'email':
//       return '📧'
//     case 'phone':
//       return '📞'
//     case 'sms':
//       return '💬'
//     case 'whatsapp':
//       return '📱'
//     case 'external':
//       return '🔗'
//     default:
//       return '🔗'
//   }
// }

// Function to detect and convert plain text links to markdown
function detectAndConvertLinks(text: string): string {
  if (!text) return text

  // Email detection pattern
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
  
  // Phone number patterns (various formats)
  const phonePatterns = [
    /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g, // (555) 123-4567, 555-123-4567, 555.123.4567
    /\b\(\d{3}\)\s?\d{3}[-.\s]?\d{4}\b/g, // (555) 123-4567
    /\+\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}\b/g, // International: +1-555-123-4567
    /\b\d{10,15}\b/g // 10-15 digit numbers
  ]
  
  // URL patterns
  const urlPatterns = [
    /\bhttps?:\/\/[^\s<>"{}|\\^`\[\]]+/g, // http:// or https:// URLs
    /\bwww\.[^\s<>"{}|\\^`\[\]]+/g, // www. URLs
    /\b[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\/[^\s<>"{}|\\^`\[\]]*/g // domain.com/path
  ]
  
  // Physical address pattern (basic)
  const addressPattern = /\b\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Court|Ct|Place|Pl|Way|Circle|Cir|Terrace|Ter)\b/gi
  
  let processedText = text

  // Convert emails to mailto links
  processedText = processedText.replace(emailPattern, (email) => {
    return `${email}`
  })

  // Convert phone numbers to tel links
  phonePatterns.forEach(pattern => {
    processedText = processedText.replace(pattern, (phone) => {
      // Clean the phone number for tel: link
      const cleanPhone = phone.replace(/[\s\(\)\-\.]/g, '')
      return `${cleanPhone}`
    })
  })

  // Convert URLs to clickable links
  urlPatterns.forEach(pattern => {
    processedText = processedText.replace(pattern, (url) => {
      // Ensure URL has protocol
      const fullUrl = url.startsWith('http') ? url : `https://${url}`
      return `${fullUrl}`
    })
  })

  // Convert addresses to Google Maps links
  processedText = processedText.replace(addressPattern, (address) => {
    const encodedAddress = encodeURIComponent(address)
    return `${encodedAddress}`
  })

  return processedText
}

// Function to detect and convert common contact phrases
// function detectContactPhrases(text: string): string {
//   if (!text) return text

//   // Common contact phrases that should be converted to links
//   const contactPhrases = [
//     {
//       pattern: /\b(?:contact us|email us|reach us|get in touch)\s+(?:at\s+)?([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b/gi,
//       replacement: (match: string, email: string) => `${email}`
//     },
//     {
//       pattern: /\b(?:call us|phone us|dial)\s+(?:at\s+)?(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})\b/gi,
//       replacement: (match: string, phone: string) => {
//         const cleanPhone = phone.replace(/[\s\(\)\-\.]/g, '')
//         return `[${match}](tel:${cleanPhone})`
//       }
//     },
//     {
//       pattern: /\b(?:visit our website|go to our website|check out our website)\s+(?:at\s+)?([A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b/gi,
//       replacement: (match: string, website: string) => {
//         const fullUrl = website.startsWith('http') ? website : `https://${website}`
//         return `[${match}](${fullUrl})`
//       }
//     }
//   ]

//   let processedText = text

//   contactPhrases.forEach(({ pattern, replacement }) => {
//     processedText = processedText.replace(pattern, replacement)
//   })

//   return processedText
// }

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  // Pre-process content to detect and convert links
  const convertedLinksContent = detectAndConvertLinks(content)

  return (
    <div className={`prose prose-sm max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        components={{
          // Custom styling for markdown elements
          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="text-sm">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          code: ({ children }) => (
            <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
              {children}
            </pre>
          ),
          h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
          h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
          h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
          a: ({ children, href }) => {
            const { type, style } = getLinkTypeAndStyle(href || '')
            // const icon = getLinkIcon(type)
            
            // Handle different link types
            if (type === 'email') {
              return (
                <a 
                  href={href} 
                  className={`${style} underline inline-flex items-center gap-1 hover:no-underline transition-colors`}
                  title="Send email"
                >
                  {/* <span className="text-xs">{icon}</span> */}
                  {children}
                </a>
              )
            }
            
            if (type === 'phone') {
              return (
                <a 
                  href={href} 
                  className={`${style} underline inline-flex items-center gap-1 hover:no-underline transition-colors`}
                  title="Call phone number"
                >
                  {/* <span className="text-xs">{icon}</span> */}
                  {children}
                </a>
              )
            }
            
            if (type === 'sms') {
              return (
                <a 
                  href={href} 
                  className={`${style} underline inline-flex items-center gap-1 hover:no-underline transition-colors`}
                  title="Send SMS"
                >
                  {/* <span className="text-xs">{icon}</span> */}
                  {children}
                </a>
              )
            }
            
            if (type === 'whatsapp') {
              return (
                <a 
                  href={href} 
                  className={`${style} underline inline-flex items-center gap-1 hover:no-underline transition-colors`}
                  title="Open WhatsApp"
                >
                  {/* <span className="text-xs">{icon}</span> */}
                  {children}
                </a>
              )
            }
            
            // External links
            if (type === 'external') {
              return (
                <a 
                  href={href} 
                  className={`${style} underline inline-flex items-center gap-1 hover:no-underline transition-colors`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Open external link"
                >
                  {/* <span className="text-xs">{icon}</span> */}
                  {children}
                </a>
              )
            }
            
            // Internal links (default)
            return (
              <a 
                href={href} 
                className={`${style} underline inline-flex items-center gap-1 hover:no-underline transition-colors`}
                title="Navigate to link"
              >
                {/* <span className="text-xs">{icon}</span> */}
                {children}
              </a>
            )
          },
        }}
      >
        {convertedLinksContent}
      </ReactMarkdown>
    </div>
  )
} 