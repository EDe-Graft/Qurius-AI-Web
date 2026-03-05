import ReactMarkdown from 'react-markdown'

interface MessageBubbleProps {
  content: string
  isUser: boolean
  timestamp: string
  liked?: 'like' | 'dislike' | null
}

export function MessageBubble({ content, isUser }: MessageBubbleProps) {
  return (
    <div className="text-xs sm:text-sm leading-relaxed">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mb-1.5 sm:mb-2 last:mb-0">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          code: ({ children }) => (
            <code className="px-1 sm:px-1.5 py-0.5 rounded bg-slate-800/50 text-[10px] sm:text-xs font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="p-1.5 sm:p-2 rounded bg-slate-800/50 text-[10px] sm:text-xs font-mono overflow-x-auto my-1.5 sm:my-2">
              {children}
            </pre>
          ),
          ul: ({ children }) => <ul className="list-disc list-inside my-1.5 sm:my-2 space-y-0.5 sm:space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside my-1.5 sm:my-2 space-y-0.5 sm:space-y-1">{children}</ol>,
          li: ({ children }) => <li className="ml-1.5 sm:ml-2">{children}</li>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`underline ${
                isUser ? 'text-slate-100' : 'text-indigo-400 hover:text-indigo-300'
              }`}
            >
              {children}
            </a>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
