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
            await WixWidgetAnalytics.trackMessageSent(companyData.name, message);
            
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
                        companyData.name, 
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
                    companyData.name, 
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
                companyData.name, 
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
                companyData.name, 
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
            const response = await this.axios.get(WIX_WIDGET_CONFIG.apiUrl + '/health');
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
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WixWidgetAPI;
} 