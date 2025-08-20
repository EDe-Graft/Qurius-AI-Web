// Wix Widget React Components
const WixWidgetComponents = {
    // SVG Icons
    icons: {
        MessageCircleIcon: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
        ),

        UserIcon: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
        ),

        BotIcon: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
                <circle cx="12" cy="5" r="2"/>
                <path d="M12 7v4"/>
                <line x1="8" y1="16" x2="8" y2="16"/>
                <line x1="16" y1="16" x2="16" y2="16"/>
            </svg>
        ),

        SendIcon: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22,2 15,22 11,13 2,9 22,2"/>
            </svg>
        ),

        MoonIcon: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        ),

        SunIcon: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
        ),

        MinimizeIcon: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 14 10 14 10 20"/>
                <polyline points="20 10 14 10 14 4"/>
                <line x1="14" y1="10" x2="21" y2="3"/>
                <line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
        ),

        LoaderIcon: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
            </svg>
        )
    },

    // Theme Toggle Component
    ThemeToggle: ({ theme, toggleTheme }) => (
        <button
            onClick={toggleTheme}
            className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md flex items-center justify-center"
        >
            {theme === "light" ? (
                <WixWidgetComponents.icons.MoonIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            ) : (
                <WixWidgetComponents.icons.SunIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            )}
        </button>
    ),

    // Message Bubble Component
    MessageBubble: ({ message, isUser, timestamp }) => (
        <div className={`flex gap-3 max-w-4xl mx-auto px-4 py-6 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                isUser ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}>
                {isUser ? <WixWidgetComponents.icons.UserIcon /> : <WixWidgetComponents.icons.BotIcon />}
            </div>
            <div className={`flex-1 space-y-2 ${isUser ? "text-right" : "text-left"}`}>
                <div className={`inline-block max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    isUser
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"
                }`}>
                    <div className="whitespace-pre-wrap break-words">{message}</div>
                </div>
                {timestamp && (
                    <div className={`text-xs text-gray-500 dark:text-gray-400 px-2 ${isUser ? "text-right" : "text-left"}`}>
                        {timestamp}
                    </div>
                )}
            </div>
        </div>
    ),

    // Typing Indicator Component
    TypingIndicator: () => (
        <div className="flex gap-3 max-w-4xl mx-auto px-4 py-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <WixWidgetComponents.icons.BotIcon />
            </div>
            <div className="flex-1">
                <div className="inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                    </div>
                </div>
            </div>
        </div>
    ),

    // Chat Input Component
    ChatInput: ({ onSendMessage, isLoading, placeholder }) => {
        const [message, setMessage] = React.useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if (message.trim() && !isLoading) {
                onSendMessage(message.trim());
                setMessage("");
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
            }
        };

        return (
            <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto p-4">
                    <form onSubmit={handleSubmit} className="relative">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={placeholder}
                            disabled={isLoading}
                            className="min-h-[60px] max-h-[200px] text-sm resize-none pr-12 p-3 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
                            rows={1}
                        />
                        <button
                            type="submit"
                            disabled={!message.trim() || isLoading}
                            className="absolute right-2 bottom-2 h-8 w-8 mb-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 transition-colors duration-200 rounded-md flex items-center justify-center text-white"
                        >
                            {isLoading ? <WixWidgetComponents.icons.LoaderIcon /> : <WixWidgetComponents.icons.SendIcon />}
                        </button>
                    </form>
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                        Press Enter to send, Shift + Enter for new line
                    </div>
                </div>
            </div>
        );
    },

    // Demo Mode Component
    DemoMode: () => (
        <div className="demo-mode">
            <h1>💬 Wix AI Chat Widget</h1>
            <p>This is a demo of the Wix AI Chat Widget. To use it on your Wix website, you need to provide valid parameters.</p>
            <a href="?demo=true&company=Demo Company&id=demo123&key=demo-key&plan=pro&theme=light" className="demo-button">
                🚀 Try Demo Mode
            </a>
            <p style={{marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7}}>
                For production use, include parameters like:<br />
                <code>?company=YourCompany&id=YOUR_ID&key=YOUR_KEY&plan=pro&theme=light</code>
            </p>
        </div>
    ),

    // Error Message Component
    ErrorMessage: () => (
        <div className="error-message">
            <h2>⚠️ Configuration Error</h2>
            <p>Missing required parameters for the Wix AI Chat Widget.</p>
            <p>Please provide valid <code>company</code>, <code>id</code>, and <code>key</code> parameters.</p>
            <p style={{fontSize: '0.9rem', marginTop: '1rem'}}>
                Example: <code>?company=MyCompany&id=123&key=abc123&plan=pro&theme=light</code>
            </p>
        </div>
    ),

    // Minimized Button Component
    MinimizedButton: ({ onToggleMinimize }) => {
        console.log('🎯 MinimizedButton component rendered');
        
        const handleClick = (e) => {
            console.log('🖱️ MinimizedButton clicked!');
            console.log('🖱️ Click event details:', {
                target: e.target,
                currentTarget: e.currentTarget,
                pointerType: e.pointerType,
                timestamp: e.timeStamp
            });
            onToggleMinimize();
        };
        
        return (
            <div className="wix-minimized-button">
                <button
                    onClick={handleClick}
                    className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                    style={{ pointerEvents: 'auto' }}
                >
                    <WixWidgetComponents.icons.MessageCircleIcon />
                </button>
            </div>
        );
    },

    // Chat Header Component
    ChatHeader: ({ companyName, theme, toggleTheme, onToggleMinimize }) => (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <WixWidgetComponents.icons.MessageCircleIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{companyName} Assistant</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Online now</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <WixWidgetComponents.ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                {onToggleMinimize && (
                    <button
                        onClick={onToggleMinimize}
                        className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center justify-center"
                    >
                        <WixWidgetComponents.icons.MinimizeIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </button>
                )}
            </div>
        </div>
    ),

    // Messages Container Component
    MessagesContainer: ({ messages, isTyping, messagesEndRef }) => (
        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900 messages-container">
            <div className="py-4">
                {messages.map((message) => (
                    <WixWidgetComponents.MessageBubble
                        key={message.id}
                        message={message.content}
                        isUser={message.isUser}
                        timestamp={message.timestamp}
                    />
                ))}
                {isTyping && <WixWidgetComponents.TypingIndicator />}
            </div>
            <div ref={messagesEndRef} />
        </div>
    )
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WixWidgetComponents;
} 