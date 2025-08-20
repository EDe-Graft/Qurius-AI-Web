// Wix Widget Analytics Service
const WixWidgetAnalytics = {
    // Generate unique session ID
    getSessionId() {
        let sessionId = sessionStorage.getItem('qurius_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('qurius_session_id', sessionId);
        }
        return sessionId;
    },

    // Get user agent and page info
    getPageInfo() {
        return {
            userAgent: navigator.userAgent,
            pageUrl: window.location.href,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            sessionId: this.getSessionId()
        };
    },

    // Track widget view
    async trackWidgetView(companyName, pageUrl) {
        try {
            const pageInfo = this.getPageInfo();
            
            await this.makeAnalyticsRequest(WIX_WIDGET_CONFIG.endpoints.analytics.widgetView, {
                companyName,
                pageUrl: pageUrl || pageInfo.pageUrl,
                userAgent: pageInfo.userAgent,
                sessionId: pageInfo.sessionId,
                timestamp: pageInfo.timestamp
            });
            
            console.log('📊 Widget view tracked for:', companyName);
        } catch (error) {
            console.error('Failed to track widget view:', error);
        }
    },

    // Track widget interaction
    async trackWidgetInteraction(companyName, eventType, message, response, additionalData = {}) {
        try {
            const pageInfo = this.getPageInfo();
            
            await this.makeAnalyticsRequest(WIX_WIDGET_CONFIG.endpoints.analytics.widgetInteraction, {
                companyName,
                eventType,
                message,
                response,
                sessionId: pageInfo.sessionId,
                timestamp: pageInfo.timestamp,
                ...additionalData
            });
            
            console.log('📊 Widget interaction tracked:', eventType);
        } catch (error) {
            console.error('Failed to track widget interaction:', error);
        }
    },

    // Track message sent
    async trackMessageSent(companyName, message) {
        await this.trackWidgetInteraction(companyName, 'message_sent', message);
    },

    // Track message received
    async trackMessageReceived(companyName, response, responseSource, faqId, confidenceScore, aiFallbackReason) {
        try {
            const pageInfo = this.getPageInfo();
            
            await this.makeAnalyticsRequest(WIX_WIDGET_CONFIG.endpoints.analytics.widgetInteraction, {
                companyName,
                eventType: 'message_received',
                response,
                responseSource,
                faqId,
                confidenceScore,
                aiFallbackReason,
                sessionId: pageInfo.sessionId,
                timestamp: pageInfo.timestamp
            });
        } catch (error) {
            console.error('Failed to track message received:', error);
        }
    },

    // Track widget open/close
    async trackWidgetOpen(companyName) {
        await this.trackWidgetInteraction(companyName, 'widget_opened');
    },

    async trackWidgetClose(companyName) {
        await this.trackWidgetInteraction(companyName, 'widget_closed');
    },

    // Track theme change
    async trackThemeChange(companyName, themeMode) {
        await this.trackWidgetInteraction(companyName, 'theme_changed', undefined, undefined, {
            themeMode
        });
    },

    // Track error
    async trackError(companyName, errorType, errorMessage, additionalData = {}) {
        await this.trackWidgetInteraction(companyName, 'error', undefined, undefined, {
            errorType,
            errorMessage,
            ...additionalData
        });
    },

    // Make analytics request using fetch
    async makeAnalyticsRequest(endpoint, data) {
        const response = await fetch(WIX_WIDGET_CONFIG.apiUrl + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Analytics request failed: ${response.status}`);
        }

        return response.json();
    },

    // Batch tracking for performance
    batchEvents: [],
    batchTimeout: null,

    // Add event to batch
    addToBatch(event) {
        this.batchEvents.push(event);
        
        // Clear existing timeout
        if (this.batchTimeout) {
            clearTimeout(this.batchTimeout);
        }
        
        // Set new timeout to send batch
        this.batchTimeout = setTimeout(() => {
            this.sendBatch();
        }, 1000); // Send batch after 1 second
    },

    // Send batched events
    async sendBatch() {
        if (this.batchEvents.length === 0) return;
        
        try {
            const events = [...this.batchEvents];
            this.batchEvents = [];
            
            // Send batch to analytics endpoint
            await this.makeAnalyticsRequest('/api/analytics/batch', {
                events,
                sessionId: this.getSessionId(),
                timestamp: new Date().toISOString()
            });
            
            console.log('📊 Batch analytics sent:', events.length, 'events');
        } catch (error) {
            console.error('Failed to send batch analytics:', error);
        }
    },

    // Initialize analytics
    init() {
        console.log('📊 Wix Widget Analytics initialized');
        
        // Log environment info
        WIX_WIDGET_ENV.logEnvironment();
        
        // Set up page unload handler to send any remaining events
        window.addEventListener('beforeunload', () => {
            if (this.batchEvents.length > 0) {
                this.sendBatch();
            }
        });
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WixWidgetAnalytics;
} 