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

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
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
            
            // Handle different link types
            if (type === 'email') {
              return (
                <a 
                  href={href} 
                  className={`${style} underline inline-flex items-center gap-1 hover:no-underline transition-colors`}
                  title="Send email"
                >
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
                {children}
              </a>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 