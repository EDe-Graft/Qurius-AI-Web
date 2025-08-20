// Wix Widget Main App Component
const WixWidgetApp = () => {
    const { useState, useRef, useEffect } = React;

    // Get parameters from URL
    const params = WIX_WIDGET_PARAMS.getParams();
    const validation = WIX_WIDGET_PARAMS.validateParams(params);
    
    // Initialize with URL params data, will be updated with full data
    const [companyData, setCompanyData] = useState(WIX_WIDGET_PARAMS.getCompanyData(params));
    const [isLoading, setIsLoading] = useState(true);

    //destructuring companyData
    const {name: companyName, id: companyId} = companyData;

    const [theme, setTheme] = useState(params.theme);
    const [isMinimized, setIsMinimized] = useState(true);

    // Fetch unified company data on mount
    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                console.log('🚀 Fetching unified company data on mount...');
                setIsLoading(true);
                
                const unifiedData = await WIX_WIDGET_PARAMS.getUnifiedCompanyData(params);
                
                if (unifiedData) {
                    console.log('✅ Unified company data loaded:', unifiedData);
                    setCompanyData(unifiedData);
                } else {
                    console.warn('⚠️ Failed to load unified data, using URL params');
                }
            } catch (error) {
                console.error('❌ Error loading unified company data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCompanyData();
    }, []);

    // Initialize services
    useEffect(() => {
        WixWidgetAnalytics.init();
        WixWidgetAPI.init();
    }, []);

    // Apply theme to document
    useEffect(() => {
        if (theme === 'dark' && !isMinimized) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme, isMinimized]);

    // Track widget view on mount (after data is loaded)
    useEffect(() => {
        if (!isLoading && validation.isValid && companyName && companyName !== WIX_WIDGET_CONFIG.defaultCompanyName) {
            console.log('🔍 Widget mount effect triggered');
            console.log('📊 Initial state:', { isMinimized, validation: validation.isValid, companyName: companyName });
            
            WixWidgetAnalytics.trackWidgetView(companyName, companyId);
        }
        
        // Send initial minimized state to parent
        try {
            console.log('📤 Sending initial state to parent:', { isMinimized, timestamp: Date.now() });
            window.parent.postMessage({
                type: 'widget-minimized-state',
                isMinimized: isMinimized,
                timestamp: Date.now()
            }, '*');
            console.log('✅ Initial state message sent successfully');
        } catch (error) {
            console.error('❌ Failed to send initial state to parent:', error);
        }
        
        // Listen for button click messages from parent
        const handleParentMessage = (event) => {
            if (event.data && event.data.type === 'button-click') {
                console.log('🎯 Button click message received from parent');
                if (isMinimized) {
                    console.log('🔄 Expanding widget from parent click');
                    setIsMinimized(false);
                }
            }
        };
        
        window.addEventListener('message', handleParentMessage);
        
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('message', handleParentMessage);
        };
    }, [validation.isValid, companyName, isMinimized, isLoading]);

    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        
        // Track theme change
        if (companyName && companyName !== WIX_WIDGET_CONFIG.defaultCompanyName) {
            await WixWidgetAnalytics.trackThemeChange(companyName, companyId, newTheme);
        }
    };

    const handleToggleMinimize = async () => {
        console.log('🔄 Toggle minimize called, current state:', isMinimized);
        const newMinimizedState = !isMinimized;
        console.log('🔄 New minimized state will be:', newMinimizedState);
        
        setIsMinimized(newMinimizedState);
        
        // Send message to parent about minimized state change
        try {
            console.log('📤 Sending state change to parent:', { isMinimized: newMinimizedState, timestamp: Date.now() });
            window.parent.postMessage({
                type: 'widget-minimized-state',
                isMinimized: newMinimizedState,
                timestamp: Date.now()
            }, '*');
            console.log('✅ State change message sent successfully');
        } catch (error) {
            console.error('❌ Failed to send state change to parent:', error);
        }
        
        // Track widget open/close
        if (companyName && companyName !== WIX_WIDGET_CONFIG.defaultCompanyName) {
            if (newMinimizedState) {
                await WixWidgetAnalytics.trackWidgetClose(companyName, companyId);
            } else {
                await WixWidgetAnalytics.trackWidgetOpen(companyName, companyId);
            }
        }
    };

    // Show demo mode or error if invalid setup
    if (!validation.isValid) {
        // Check if this is opened directly in browser
        const isDirectAccess = !document.referrer || document.referrer === window.location.href;

        if (isDirectAccess) {
            // Show demo mode for direct access
            return <WixWidgetComponents.DemoMode />;
        } else {
            // Show error for iframe without parameters
            return <WixWidgetComponents.ErrorMessage />;
        }
    }

    return (
        <div id="wix-chat-widget" className={`${isMinimized ? 'minimized' : ''}`}>
            {isLoading ? (
                <div className="wix-minimized-button">
                    <div className="h-16 w-16 rounded-full shadow-lg flex items-center justify-center"
                         style={{ backgroundColor: companyData?.theme?.primaryColor || '#3B82F6' }}>
                        <div className="w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                </div>
            ) : (
                <WixWidgetChatInterface
                    companyName={companyName}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    isMinimized={isMinimized}
                    onToggleMinimize={handleToggleMinimize}
                    companyData={companyData}
                />
            )}
        </div>
    );
};

// Chat Interface Component
const WixWidgetChatInterface = ({ companyName, theme, toggleTheme, isMinimized, onToggleMinimize, companyData }) => {
    const { useState, useRef, useEffect } = React;

    //destructuring companyData
    const {logo_url: logoUrl, theme: companyTheme} = companyData;

    const [messages, setMessages] = useState([
        {
            id: "1",
            content: `Hello! I'm your ${companyName} assistant. How can I help you today?`,
            isUser: false,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (content) => {
        const userMessage = {
            id: Date.now().toString(),
            content,
            isUser: true,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsTyping(true);

        try {
            // Get AI response using API service
            const response = await WixWidgetAPI.sendMessage(content, companyData);
            
            const aiMessage = {
                id: (Date.now() + 1).toString(),
                content: response,
                isUser: false,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('❌ Message sending error:', error);
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                content: WIX_WIDGET_CONFIG.errors.generic,
                isUser: false,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    if (isMinimized) {
        return <WixWidgetComponents.MinimizedButton onToggleMinimize={onToggleMinimize} companyTheme={companyTheme} />;
    }

    return (
        <div className="wix-chat-container bg-transparent dark:bg-gray-900 border border-gray-200 dark:border-gray-700  rounded-lg flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
            {/* Header */}
            <WixWidgetComponents.ChatHeader 
                companyName={companyName}
                logoUrl={logoUrl}
                theme={theme}
                toggleTheme={toggleTheme}
                onToggleMinimize={onToggleMinimize}
                companyTheme={companyTheme}
            />

            {/* Messages */}
            <WixWidgetComponents.MessagesContainer 
                messages={messages}
                isTyping={isTyping}
                messagesEndRef={messagesEndRef}
                companyTheme={companyTheme}
            />

            {/* Input */}
            <WixWidgetComponents.ChatInput
                onSendMessage={handleSendMessage}
                isLoading={isTyping}
                placeholder={`Ask ${companyName} anything...`}
                companyTheme={companyTheme}
            />
        </div>
    );
};

// Export for use in main HTML file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WixWidgetApp, WixWidgetChatInterface };
} 