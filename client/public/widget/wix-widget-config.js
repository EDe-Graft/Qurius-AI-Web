// Wix Widget Configuration
const WIX_WIDGET_CONFIG = {
    // set API URL based on environment
    apiUrl: (() => {
        const hostname = window.location.hostname;
        if (hostname === 'qurius.app' || hostname.includes('vercel.app')) {
            return 'https://qurius-ai.onrender.com';
        } else {
            return 'http://localhost:3000';
        }
    })(),
    defaultTheme: 'light',
    defaultCompanyName: 'AI Assistant',
    defaultPlan: 'free',
    defaultKey: 'demo-2025',
    
    // Widget dimensions
    widgetWidth: '400px',
    widgetHeight: '600px',
    buttonSize: '60px',
    
    // Animation durations
    animationDuration: '0.2s',
    typingAnimationDuration: '1.4s',
    
    // Z-index values
    widgetZIndex: '999999',
    buttonZIndex: '999999',
    
    // API endpoints
    endpoints: {
        search: '/api/faqs/search',
        analytics: {
            widgetView: '/api/analytics/widget-view',
            widgetInteraction: '/api/analytics/widget-interaction'
        },
        company: {
            widgetData: '/api/companies/{id}/widget-data'
        }
    },
    
    // Error messages
    errors: {
        network: 'Sorry, I\'m having trouble connecting right now. Please try again later.',
        authentication: 'Authentication error. Please contact support.',
        rateLimit: 'Too many requests. Please wait a moment and try again.',
        server: 'Server error. Please try again later.',
        limitReached: 'Message limit reached for this month. Please contact customer support for assistance.',
        noAnswer: 'Sorry, I couldn\'t find a relevant answer. Please try rephrasing your question.',
        generic: 'Sorry, something went wrong. Please try again.'
    },
    
    // Demo mode settings
    demo: {
        enabled: true,
        companyName: 'Demo Company',
        companyId: 'demo123',
        key: 'demo-key',
        plan: 'pro'
    }
};

// Environment detection
const WIX_WIDGET_ENV = {
    isProduction: window.location.hostname === 'qurius.app',
    isLocal: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    isWix: window.location.hostname.includes('wix') || window.location.hostname.includes('wixsite'),
    isIframe: window !== window.top,
    
    // Get current environment
    getEnvironment() {
        if (this.isProduction) return 'production';
        if (this.isLocal) return 'local';
        if (this.isWix) return 'wix';
        return 'unknown';
    },
    
    // Log environment info
    logEnvironment() {
        console.log('🌍 Wix Widget Environment:', {
            hostname: window.location.hostname,
            environment: this.getEnvironment(),
            isIframe: this.isIframe,
            userAgent: navigator.userAgent.substring(0, 100) + '...'
        });
    }
};

// URL parameter utilities
const WIX_WIDGET_PARAMS = {
    // Get URL parameters
    getParams() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            company: urlParams.get('company') || WIX_WIDGET_CONFIG.defaultCompanyName,
            id: urlParams.get('id') || '',
            key: urlParams.get('key') || WIX_WIDGET_CONFIG.defaultKey,
            plan: urlParams.get('plan') || WIX_WIDGET_CONFIG.defaultPlan,
            theme: urlParams.get('theme') || WIX_WIDGET_CONFIG.defaultTheme,
            demo: urlParams.get('demo') || 'false'
        };
    },
    
    // Validate parameters
    validateParams(params) {
        const isValidSetup = (params.id && params.key) || params.demo === 'true';
        return {
            isValid: isValidSetup,
            isDemo: params.demo === 'true',
            missingParams: isValidSetup ? [] : ['id', 'key']
        };
    },
    
    // Get company data object
    getCompanyData(params) {
        return {
            name: params.company,
            id: params.id,
            key: params.key,
            plan: params.plan
        };
    },

    // Fetch full company data from backend API
    async fetchFullCompanyData(companyId) {
        try {
            console.log('🔍 Fetching full company data for ID:', companyId);
            
            const endpoint = WIX_WIDGET_CONFIG.endpoints.company.widgetData.replace('{id}', companyId);
            const url = `${WIX_WIDGET_CONFIG.apiUrl}${endpoint}`;
            
            console.log('🌐 API URL:', url);
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.success && data.company) {
                // console.log('✅ Full company data fetched successfully:', data.company);
                return data.company;
            } else {
                console.warn('⚠️ No company data returned from API');
                return null;
            }
        } catch (error) {
            console.error('❌ Error fetching full company data:', error);
            return null;
        }
    },

    // Merge URL params with backend company data
    async getUnifiedCompanyData(params) {
        try {
            // Start with URL params data
            const urlData = this.getCompanyData(params);
            
            // If we have a valid company ID, fetch full data from backend
            if (params.id && params.id !== 'undefined' && params.id !== 'null' && params.id !== '') {
                console.log('🔄 Fetching unified company data...');
                
                const backendData = await this.fetchFullCompanyData(params.id);
                
                if (backendData) {
                    // Merge backend data with URL params, prioritizing backend data
                    const unifiedData = {
                        ...urlData,
                        ...backendData,
                        // Ensure we keep the key from URL params for authentication
                        key: urlData.key,
                        // Use backend name if available, otherwise URL param
                        name: backendData.name || urlData.name,
                        // Use backend plan if available, otherwise URL param
                        plan: backendData.plan || urlData.plan
                    };
                    
                    // console.log('✅ Unified company data created:', unifiedData);
                    return unifiedData;
                } else {
                    console.warn('⚠️ Backend data fetch failed, using URL params only');
                    return urlData;
                }
            } else {
                console.log('ℹ️ No company ID provided, using URL params only');
                return urlData;
            }
        } catch (error) {
            console.error('❌ Error creating unified company data:', error);
            // Fallback to URL params only
            return this.getCompanyData(params);
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WIX_WIDGET_CONFIG, WIX_WIDGET_ENV, WIX_WIDGET_PARAMS };
} 