// Wix Widget API Service
const WixWidgetAPI = {
    // Minimal axios implementation for Wix compatibility
    axios: {
        post: async function(url, data, config = {}) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...config.headers
                    },
                    body: JSON.stringify(data)
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const responseData = await response.json();
                return {
                    data: responseData,
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                };
            } catch (error) {
                throw {
                    message: error.message,
                    response: {
                        data: { error: error.message },
                        status: error.status || 500,
                        statusText: error.statusText || 'Network Error'
                    }
                };
            }
        },
        
        get: async function(url, config = {}) {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        ...config.headers
                    }
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const responseData = await response.json();
                return {
                    data: responseData,
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                };
            } catch (error) {
                throw {
                    message: error.message,
                    response: {
                        data: { error: error.message },
                        status: error.status || 500,
                        statusText: error.statusText || 'Network Error'
                    }
                };
            }
        }
    },

    // Send message to API
    async sendMessage(message, companyData) {
        try {
            console.log('🤖 Sending message to API:', message.substring(0, 50) + '...');
            
            // Track message sent
            const {name: companyName, id: companyId} = companyData;
            await WixWidgetAnalytics.trackMessageSent(companyName, companyId, message);
            
            const response = await this.axios.post(
                WIX_WIDGET_CONFIG.apiUrl + WIX_WIDGET_CONFIG.endpoints.search, 
                {
                    question: message,
                    companyData: companyData,
                    messages: []
                }
            );
            
            console.log('✅ API response received:', response.status);
            
            if (response.data && response.data.length > 0) {
                const result = response.data[0];
                
                // Check for limit reached
                if (result.source === 'limit_reached' || result.limitReached) {
                    const limitMessage = WIX_WIDGET_CONFIG.errors.limitReached;
                    
                    // Track limit reached
                    await WixWidgetAnalytics.trackMessageReceived(
                        companyName, 
                        companyId, 
                        limitMessage, 
                        'limit_reached',
                        undefined,
                        undefined,
                        'Monthly limit exceeded'
                    );
                    
                    return limitMessage;
                }
                
                const answer = result.answer || WIX_WIDGET_CONFIG.errors.generic;
                
                // Track successful response with source
                await WixWidgetAnalytics.trackMessageReceived(
                    companyName, 
                    companyId, 
                    answer, 
                    result.source || 'ai',
                    result.faqId,
                    result.confidence,
                    result.aiFallbackReason
                );
                
                return answer;
            }
            
            const fallbackMessage = WIX_WIDGET_CONFIG.errors.noAnswer;
            
            // Track fallback response
            await WixWidgetAnalytics.trackMessageReceived(
                companyName, 
                companyId, 
                fallbackMessage, 
                'ai',
                undefined,
                undefined,
                'No relevant FAQ found'
            );
            
            return fallbackMessage;
            
        } catch (error) {
            console.error('❌ API Error:', error);
            
            let errorMessage = WIX_WIDGET_CONFIG.errors.network;
            
            // Handle specific error types
            if (error.response && error.response.status === 401) {
                errorMessage = WIX_WIDGET_CONFIG.errors.authentication;
            } else if (error.response && error.response.status === 429) {
                errorMessage = WIX_WIDGET_CONFIG.errors.rateLimit;
            } else if (error.response && error.response.status === 500) {
                errorMessage = WIX_WIDGET_CONFIG.errors.server;
            }
            
            // Track error response
            await WixWidgetAnalytics.trackMessageReceived(
                companyName, 
                companyId, 
                errorMessage, 
                'ai',
                undefined,
                undefined,
                `API Error: ${error.message}`
            );
            
            return errorMessage;
        }
    },

    // Validate API connection
    async testConnection() {
        try {
            const response = await this.axios.get(WIX_WIDGET_CONFIG.apiUrl + '/api/health');
            return {
                success: true,
                status: response.status,
                data: response.data
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                status: error.response?.status
            };
        }
    },

    // Get API status
    async getAPIStatus() {
        try {
            const response = await this.axios.get(WIX_WIDGET_CONFIG.apiUrl + '/status');
            return response.data;
        } catch (error) {
            console.error('Failed to get API status:', error);
            return {
                status: 'error',
                message: error.message
            };
        }
    },

    // Rate limiting utilities
    rateLimiter: {
        requests: [],
        maxRequests: 10,
        timeWindow: 60000, // 1 minute
        
        // Check if request is allowed
        canMakeRequest() {
            const now = Date.now();
            // Remove old requests outside time window
            this.requests = this.requests.filter(time => now - time < this.timeWindow);
            
            if (this.requests.length >= this.maxRequests) {
                return false;
            }
            
            this.requests.push(now);
            return true;
        },
        
        // Get time until next request is allowed
        getTimeUntilNext() {
            if (this.requests.length < this.maxRequests) {
                return 0;
            }
            
            const oldestRequest = Math.min(...this.requests);
            const timeWindowEnd = oldestRequest + this.timeWindow;
            return Math.max(0, timeWindowEnd - Date.now());
        }
    },

    // Retry logic for failed requests
    async retryRequest(requestFn, maxRetries = 3, delay = 1000) {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await requestFn();
            } catch (error) {
                if (attempt === maxRetries) {
                    throw error;
                }
                
                console.warn(`API request failed (attempt ${attempt}/${maxRetries}), retrying...`);
                await this.sleep(delay * attempt); // Exponential backoff
            }
        }
    },

    // Utility function for delays
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // Initialize API service
    init() {
        console.log('🔌 Wix Widget API Service initialized');
        
        // Test connection on init
        this.testConnection().then(result => {
            if (result.success) {
                console.log('✅ API connection test successful');
            } else {
                console.warn('⚠️ API connection test failed:', result.error);
            }
        });
    },

    // Theme service
    theme: {
        // Get company theme from API
        async getCompanyTheme(companyName, companyId, isDark = false) {
            try {
                console.log('🎨 Fetching theme for company:', companyName, 'ID:', companyId);
                
                const response = await this.axios.get(
                    `${WIX_WIDGET_CONFIG.apiUrl}/api/companies/${encodeURIComponent(companyName)}/${companyId}/theme`
                );
                
                if (response.data && response.data.company) {
                    const company = response.data.company;
                    const theme = company.theme || {};
                    const logoUrl = company.logo_url || '';
                    
                    console.log('✅ Theme fetched successfully:', theme);
                    
                    return {
                        primaryColor: theme.primaryColor || '#3B82F6',
                        backgroundColor: isDark ? '#1e2939' : '#F3F4F6',
                        textColor: isDark ? '#F9FAFB' : '#1F2937',
                        borderColor: isDark ? '#374151' : '#E5E7EB',
                        accentColor: '#10B981',
                        logoUrl: logoUrl
                    };
                } else {
                    console.warn('⚠️ No theme data found, using default');
                    return this.getDefaultTheme(isDark);
                }
            } catch (error) {
                console.error('❌ Failed to fetch company theme:', error);
                return this.getDefaultTheme(isDark);
            }
        },

        // Get default theme
        getDefaultTheme(isDark = false) {
            return {
                primaryColor: '#3B82F6',
                backgroundColor: isDark ? '#1e2939' : '#F3F4F6',
                textColor: isDark ? '#F9FAFB' : '#1F2937',
                borderColor: isDark ? '#374151' : '#E5E7EB',
                accentColor: '#10B981',
                logoUrl: ''
            };
        },

        // Apply theme to widget elements
        applyTheme(theme) {
            try {
                console.log('🎨 Applying theme:', theme);
                
                // Create CSS variables for the theme
                const cssVars = `
                    :root {
                        --widget-primary-color: ${theme.primaryColor};
                        --widget-background-color: ${theme.backgroundColor};
                        --widget-text-color: ${theme.textColor};
                        --widget-border-color: ${theme.borderColor};
                        --widget-accent-color: ${theme.accentColor};
                    }
                `;
                
                // Remove existing theme style if any
                const existingStyle = document.getElementById('widget-theme-style');
                if (existingStyle) {
                    existingStyle.remove();
                }
                
                // Add new theme style
                const styleElement = document.createElement('style');
                styleElement.id = 'widget-theme-style';
                styleElement.textContent = cssVars;
                document.head.appendChild(styleElement);
                
                // Apply theme to specific elements
                this.applyThemeToElements(theme);
                
                console.log('✅ Theme applied successfully');
            } catch (error) {
                console.error('❌ Failed to apply theme:', error);
            }
        },

        // Apply theme to specific widget elements
        applyThemeToElements(theme) {
            // Apply to minimized button
            const minimizedButton = document.querySelector('.wix-minimized-button button');
            if (minimizedButton) {
                minimizedButton.style.backgroundColor = theme.primaryColor;
                minimizedButton.style.borderColor = theme.primaryColor;
            }
            
            // Apply to chat header
            const chatHeader = document.querySelector('.wix-chat-header');
            if (chatHeader) {
                chatHeader.style.backgroundColor = theme.primaryColor;
                chatHeader.style.color = '#FFFFFF';
            }
            
            // Apply to send button
            const sendButton = document.querySelector('.wix-send-button');
            if (sendButton) {
                sendButton.style.backgroundColor = theme.primaryColor;
                sendButton.style.borderColor = theme.primaryColor;
            }
            
            // Apply to input border
            const chatInput = document.querySelector('.wix-chat-input input');
            if (chatInput) {
                chatInput.style.borderColor = theme.borderColor;
                chatInput.style.backgroundColor = theme.backgroundColor;
                chatInput.style.color = theme.textColor;
            }
            
            // Apply to message bubbles
            const userMessages = document.querySelectorAll('.wix-message.user');
            userMessages.forEach(msg => {
                msg.style.backgroundColor = theme.primaryColor;
                msg.style.color = '#FFFFFF';
            });
            
            const aiMessages = document.querySelectorAll('.wix-message.ai');
            aiMessages.forEach(msg => {
                msg.style.backgroundColor = theme.backgroundColor;
                msg.style.color = theme.textColor;
                msg.style.borderColor = theme.borderColor;
            });
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WixWidgetAPI;
} 