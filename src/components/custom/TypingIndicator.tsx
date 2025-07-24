export default function TypingIndicator() {
  return (
    <div className="flex gap-3 max-w-4xl mx-auto px-4 py-6">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>
      <div className="flex-1">
        <div className="inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
