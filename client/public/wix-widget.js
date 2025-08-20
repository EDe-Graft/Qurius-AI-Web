// Wix-Compatible Qurius AI Chat Widget (React/JSX Version) - Enhanced
(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
    apiUrl: 'https://qurius-ai.onrender.com',
    defaultTheme: 'light'
  };
  
  // Widget state
  let widgetContainer = null;
  let companyData = null;
  
  // Minimal axios implementation for Wix compatibility
  const axios = {
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
  };

  // Analytics Service for Wix Widget
  const analyticsService = {
    // Generate unique session ID
    getSessionId() {
      let sessionId = sessionStorage.getItem('qurius_session_id');
      if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('qurius_session_id', sessionId);
      }
      return sessionId;
    },

    // Track widget view
    async trackWidgetView(companyName, pageUrl) {
      try {
        const sessionId = this.getSessionId();
        const userAgent = navigator.userAgent;
        
        await axios.post(`${CONFIG.apiUrl}/api/analytics/widget-view`, {
          companyName,
          pageUrl: pageUrl || window.location.href,
          userAgent,
          sessionId,
          timestamp: new Date().toISOString()
        });
        console.log('📊 Widget view tracked');
      } catch (error) {
        console.error('Failed to track widget view:', error);
      }
    },

    // Track widget interaction
    async trackWidgetInteraction(companyName, eventType, message, response, additionalData = {}) {
      try {
        const sessionId = this.getSessionId();
        
        await axios.post(`${CONFIG.apiUrl}/api/analytics/widget-interaction`, {
          companyName,
          eventType,
          message,
          response,
          sessionId,
          timestamp: new Date().toISOString(),
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
        const sessionId = this.getSessionId();
        
        await axios.post(`${CONFIG.apiUrl}/api/analytics/widget-interaction`, {
          companyName,
          eventType: 'message_received',
          response,
          responseSource,
          faqId,
          confidenceScore,
          aiFallbackReason,
          sessionId,
          timestamp: new Date().toISOString()
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
    }
  };

  // Markdown rendering utilities (simplified for Wix compatibility)
  const markdownUtils = {
    // Convert markdown links to clickable HTML
    renderMarkdown: function(text) {
      if (!text) return '';
      
      // Convert markdown links [text](url) to HTML
      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="qurius-link">$1</a>');
      
      // Convert plain URLs to clickable links
      text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="qurius-link">$1</a>');
      
      // Convert email addresses to mailto links
      text = text.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1" class="qurius-link">$1</a>');
      
      // Convert phone numbers to tel links
      text = text.replace(/(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g, '<a href="tel:$1" class="qurius-link">$1</a>');
      
      return text;
    },

    // Create element with markdown content
    createMarkdownElement: function(content, className = '') {
      const div = document.createElement('div');
      div.className = className;
      div.innerHTML = this.renderMarkdown(content);
      return div;
    }
  };
  
  // Inject styles for Wix compatibility (enhanced with theme support)
  function injectStyles() {
    if (document.querySelector('#qurius-wix-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'qurius-wix-styles';
    style.textContent = `
      /* Light theme (default) */
      .qurius-wix-widget {
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 999999 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        box-sizing: border-box !important;
        width: 400px !important;
        height: 600px !important;
        max-height: 80vh !important;
      }
      
      .qurius-wix-button {
        width: 60px !important;
        height: 60px !important;
        border-radius: 50% !important;
        background: #3b82f6 !important;
        color: white !important;
        border: none !important;
        cursor: pointer !important;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 24px !important;
        transition: transform 0.2s !important;
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 999999 !important;
      }
      
      .qurius-wix-button:hover {
        transform: scale(1.1) !important;
      }
      
      .qurius-wix-chat {
        width: 400px !important;
        height: 600px !important;
        max-height: 80vh !important;
        background: white !important;
        border-radius: 12px !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15) !important;
        border: 1px solid #e5e7eb !important;
        display: flex !important;
        flex-direction: column !important;
        overflow: hidden !important;
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 999999 !important;
      }
      
      .qurius-wix-header {
        background: #3b82f6 !important;
        color: white !important;
        padding: 15px 20px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        border-top-left-radius: 12px !important;
        border-top-right-radius: 12px !important;
      }
      
      .qurius-wix-header h3 {
        margin: 0 !important;
        font-size: 16px !important;
        font-weight: 600 !important;
      }
      
      .qurius-wix-theme-toggle {
        background: none !important;
        border: none !important;
        color: white !important;
        cursor: pointer !important;
        padding: 4px !important;
        border-radius: 4px !important;
        transition: background-color 0.2s !important;
        margin-right: 8px !important;
      }
      
      .qurius-wix-theme-toggle:hover {
        background: rgba(255, 255, 255, 0.1) !important;
      }
      
      .qurius-wix-close {
        background: none !important;
        border: none !important;
        color: white !important;
        cursor: pointer !important;
        font-size: 20px !important;
        padding: 0 !important;
        width: 24px !important;
        height: 24px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 4px !important;
        transition: background-color 0.2s !important;
      }
      
      .qurius-wix-close:hover {
        background: rgba(255, 255, 255, 0.1) !important;
      }
      
      .qurius-wix-messages {
        flex: 1 !important;
        padding: 20px !important;
        overflow-y: auto !important;
        background: #f9fafb !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 15px !important;
      }
      
      .qurius-wix-message {
        padding: 12px 16px !important;
        border-radius: 12px !important;
        max-width: 80% !important;
        word-wrap: break-word !important;
        line-height: 1.4 !important;
        font-size: 14px !important;
        position: relative !important;
      }
      
      .qurius-wix-message.user {
        background: #3b82f6 !important;
        color: white !important;
        margin-left: auto !important;
        align-self: flex-end !important;
      }
      
      .qurius-wix-message.bot {
        background: white !important;
        color: #374151 !important;
        border: 1px solid #e5e7eb !important;
        align-self: flex-start !important;
      }
      
      .qurius-wix-message-timestamp {
        font-size: 11px !important;
        opacity: 0.7 !important;
        margin-top: 4px !important;
        text-align: right !important;
      }
      
      .qurius-wix-message.user .qurius-wix-message-timestamp {
        text-align: right !important;
      }
      
      .qurius-wix-message.bot .qurius-wix-message-timestamp {
        text-align: left !important;
      }
      
      .qurius-wix-input {
        padding: 15px 20px !important;
        border-top: 1px solid #e5e7eb !important;
        background: white !important;
        display: flex !important;
        gap: 10px !important;
        align-items: center !important;
      }
      
      .qurius-wix-input input {
        flex: 1 !important;
        padding: 10px 12px !important;
        border: 1px solid #d1d5db !important;
        border-radius: 6px !important;
        font-size: 14px !important;
        outline: none !important;
        transition: border-color 0.2s !important;
        background: white !important;
        color: #374151 !important;
      }
      
      .qurius-wix-input input:focus {
        border-color: #3b82f6 !important;
      }
      
      .qurius-wix-input input:disabled {
        background: #f3f4f6 !important;
        cursor: not-allowed !important;
      }
      
      .qurius-wix-send {
        background: #3b82f6 !important;
        color: white !important;
        border: none !important;
        padding: 10px 16px !important;
        border-radius: 6px !important;
        cursor: pointer !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        transition: background-color 0.2s !important;
        min-width: 60px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      
      .qurius-wix-send:hover:not(:disabled) {
        background: #2563eb !important;
      }
      
      .qurius-wix-send:disabled {
        background: #9ca3af !important;
        cursor: not-allowed !important;
      }
      
      .qurius-wix-loading {
        text-align: center !important;
        color: #6b7280 !important;
        font-style: italic !important;
        padding: 20px !important;
        align-self: flex-start !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
      }
      
      .qurius-wix-loading-dots {
        display: flex !important;
        gap: 4px !important;
      }
      
      .qurius-wix-loading-dot {
        width: 6px !important;
        height: 6px !important;
        border-radius: 50% !important;
        background: #6b7280 !important;
        animation: qurius-bounce 1.4s infinite ease-in-out !important;
      }
      
      .qurius-wix-loading-dot:nth-child(1) { animation-delay: -0.32s !important; }
      .qurius-wix-loading-dot:nth-child(2) { animation-delay: -0.16s !important; }
      
      @keyframes qurius-bounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }
      
      .qurius-wix-welcome {
        text-align: center !important;
        color: #6b7280 !important;
        padding: 20px !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
      }
      
      .qurius-link {
        color: #3b82f6 !important;
        text-decoration: none !important;
        transition: color 0.2s !important;
      }
      
      .qurius-link:hover {
        color: #2563eb !important;
        text-decoration: underline !important;
      }
      
      .qurius-wix-message.user .qurius-link {
        color: #ffffff !important;
        text-decoration: underline !important;
      }
      
      .qurius-wix-message.user .qurius-link:hover {
        color: #e5e7eb !important;
      }
      
      /* Dark theme */
      .qurius-wix-widget.dark .qurius-wix-chat {
        background: #1f2937 !important;
        border-color: #374151 !important;
      }
      
      .qurius-wix-widget.dark .qurius-wix-messages {
        background: #111827 !important;
      }
      
      .qurius-wix-widget.dark .qurius-wix-message.bot {
        background: #374151 !important;
        color: #f9fafb !important;
        border-color: #4b5563 !important;
      }
      
      .qurius-wix-widget.dark .qurius-wix-input {
        background: #1f2937 !important;
        border-color: #374151 !important;
      }
      
      .qurius-wix-widget.dark .qurius-wix-input input {
        background: #374151 !important;
        color: #f9fafb !important;
        border-color: #4b5563 !important;
      }
      
      .qurius-wix-widget.dark .qurius-wix-input input:focus {
        border-color: #3b82f6 !important;
      }
      
      .qurius-wix-widget.dark .qurius-wix-loading,
      .qurius-wix-widget.dark .qurius-wix-welcome {
        color: #9ca3af !important;
      }
      
      .qurius-wix-widget.dark .qurius-wix-loading-dot {
        background: #9ca3af !important;
      }
      
      @media (max-width: 480px) {
        .qurius-wix-chat {
          width: calc(100vw - 40px) !important;
          height: calc(100vh - 40px) !important;
          bottom: 20px !important;
          right: 20px !important;
          left: 20px !important;
        }
        
        .qurius-wix-button {
          bottom: 20px !important;
          right: 20px !important;
        }
      }
    `;
    
    document.head.appendChild(style);
  }

  // Send message to API using axios
  async function sendMessageToAPI(message) {
    try {
      console.log('🤖 Sending message to API:', message.substring(0, 50) + '...');
      
      // Track message sent
      await analyticsService.trackMessageSent(companyData.name, message);
      
      const response = await axios.post(`${CONFIG.apiUrl}/api/faqs/search`, {
        question: message,
        companyData: companyData,
        messages: []
      });
      
      console.log('✅ API response received:', response.status);
      
      if (response.data && response.data.length > 0) {
        const result = response.data[0];
        
        // Check for limit reached
        if (result.source === 'limit_reached' || result.limitReached) {
          const limitMessage = 'Message limit reached for this month. Please contact customer support for assistance.';
          
          // Track limit reached
          await analyticsService.trackMessageReceived(
            companyData.name, 
            limitMessage, 
            'limit_reached',
            undefined,
            undefined,
            'Monthly limit exceeded'
          );
          
          return limitMessage;
        }
        
        const answer = result.answer || 'Sorry, I encountered an error. Please try again.';
        
        // Track successful response with source
        await analyticsService.trackMessageReceived(
          companyData.name, 
          answer, 
          result.source || 'ai',
          result.faqId,
          result.confidence,
          result.aiFallbackReason
        );
        
        return answer;
      }
      
      const fallbackMessage = 'Sorry, I couldn\'t find a relevant answer. Please try rephrasing your question.';
      
      // Track fallback response
      await analyticsService.trackMessageReceived(
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
      
      let errorMessage = 'Sorry, I\'m having trouble connecting right now. Please try again later.';
      
      // Handle specific error types
      if (error.response && error.response.status === 401) {
        errorMessage = 'Authentication error. Please contact support.';
      } else if (error.response && error.response.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
      } else if (error.response && error.response.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      }
      
      // Track error response
      await analyticsService.trackMessageReceived(
        companyData.name, 
        errorMessage, 
        'ai',
        undefined,
        undefined,
        `API Error: ${error.message}`
      );
      
      return errorMessage;
    }
  }

  // React Components (using JSX-like syntax with vanilla JS) - Enhanced
  const ReactComponents = {
    // Message Circle Icon
    MessageCircleIcon: () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z');
      
      svg.appendChild(path);
      return svg;
    },

    // Sun Icon (for light theme)
    SunIcon: () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '16');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '12');
      circle.setAttribute('cy', '12');
      circle.setAttribute('r', '5');
      
      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path1.setAttribute('d', 'M12 1v2');
      
      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path2.setAttribute('d', 'M12 21v2');
      
      const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path3.setAttribute('d', 'M4.22 4.22l1.42 1.42');
      
      const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path4.setAttribute('d', 'M18.36 18.36l1.42 1.42');
      
      const path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path5.setAttribute('d', 'M1 12h2');
      
      const path6 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path6.setAttribute('d', 'M21 12h2');
      
      const path7 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path7.setAttribute('d', 'M4.22 19.78l1.42-1.42');
      
      const path8 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path8.setAttribute('d', 'M18.36 5.64l1.42-1.42');
      
      svg.appendChild(circle);
      svg.appendChild(path1);
      svg.appendChild(path2);
      svg.appendChild(path3);
      svg.appendChild(path4);
      svg.appendChild(path5);
      svg.appendChild(path6);
      svg.appendChild(path7);
      svg.appendChild(path8);
      
      return svg;
    },

    // Moon Icon (for dark theme)
    MoonIcon: () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '16');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
      
      svg.appendChild(path);
      return svg;
    },

    // Send Icon
    SendIcon: () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '16');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z');
      
      svg.appendChild(path);
      return svg;
    },

    // Create message bubble with timestamp and markdown
    createMessageBubble: (content, isUser, timestamp) => {
      const messageDiv = document.createElement('div');
      messageDiv.className = `qurius-wix-message ${isUser ? 'user' : 'bot'}`;
      
      // Add markdown content
      const contentDiv = markdownUtils.createMarkdownElement(content, 'qurius-message-content');
      messageDiv.appendChild(contentDiv);
      
      // Add timestamp
      if (timestamp) {
        const timestampDiv = document.createElement('div');
        timestampDiv.className = 'qurius-wix-message-timestamp';
        timestampDiv.textContent = timestamp;
        messageDiv.appendChild(timestampDiv);
      }
      
      return messageDiv;
    },

    // Create loading indicator with animated dots
    createLoadingIndicator: () => {
      const loadingDiv = document.createElement('div');
      loadingDiv.className = 'qurius-wix-loading';
      
      const textSpan = document.createElement('span');
      textSpan.textContent = 'AI is typing';
      
      const dotsDiv = document.createElement('div');
      dotsDiv.className = 'qurius-wix-loading-dots';
      
      for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'qurius-wix-loading-dot';
        dotsDiv.appendChild(dot);
      }
      
      loadingDiv.appendChild(textSpan);
      loadingDiv.appendChild(dotsDiv);
      
      return loadingDiv;
    },

    // Create welcome message
    createWelcomeMessage: () => {
      const welcomeDiv = document.createElement('div');
      welcomeDiv.className = 'qurius-wix-welcome';
      welcomeDiv.textContent = 'Hello! I\'m here to help. How can I assist you today?';
      return welcomeDiv;
    }
  };

  // Widget state management (React-like) - Enhanced
  const WidgetState = {
    isMinimized: true,
    messages: [],
    isLoading: false,
    theme: CONFIG.defaultTheme,

    // State setters
    setMinimized(value) {
      this.isMinimized = value;
      this.updateUI();
    },

    setLoading(value) {
      this.isLoading = value;
      this.updateUI();
    },

    setTheme(value) {
      this.theme = value;
      this.updateUI();
      this.applyTheme();
    },

    addMessage(content, isUser = false) {
      const timestamp = new Date().toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit" 
      });
      this.messages.push({ content, isUser, id: Date.now(), timestamp });
      this.updateUI();
    },

    // Apply theme to widget container
    applyTheme() {
      if (!widgetContainer) return;
      
      if (this.theme === 'dark') {
        widgetContainer.classList.add('dark');
      } else {
        widgetContainer.classList.remove('dark');
      }
    },

    // Update UI based on state
    updateUI() {
      if (!widgetContainer) return;
      
      const chatInterface = widgetContainer.querySelector('.qurius-wix-chat');
      const chatButton = widgetContainer.querySelector('.qurius-wix-button');
      const messagesContainer = widgetContainer.querySelector('#qurius-messages');
      const input = widgetContainer.querySelector('#qurius-input');
      const sendButton = widgetContainer.querySelector('.qurius-wix-send');
      const themeToggle = widgetContainer.querySelector('.qurius-wix-theme-toggle');

      if (this.isMinimized) {
        chatInterface.style.display = 'none';
        chatButton.style.display = 'flex';
      } else {
        chatInterface.style.display = 'flex';
        chatButton.style.display = 'none';
        
        // Focus input when opened
        setTimeout(() => {
          if (input) input.focus();
        }, 100);
      }

      // Update messages
      if (messagesContainer) {
        messagesContainer.innerHTML = '';
        
        // Add welcome message if no messages
        if (this.messages.length === 0) {
          messagesContainer.appendChild(ReactComponents.createWelcomeMessage());
        } else {
          this.messages.forEach(msg => {
            messagesContainer.appendChild(
              ReactComponents.createMessageBubble(msg.content, msg.isUser, msg.timestamp)
            );
          });
        }

        // Add loading indicator if loading
        if (this.isLoading) {
          messagesContainer.appendChild(ReactComponents.createLoadingIndicator());
        }

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }

      // Update input state
      if (input) {
        input.disabled = this.isLoading;
      }
      if (sendButton) {
        sendButton.disabled = this.isLoading;
        sendButton.innerHTML = '';
        sendButton.appendChild(ReactComponents.SendIcon());
      }

      // Update theme toggle
      if (themeToggle) {
        themeToggle.innerHTML = '';
        if (this.theme === 'dark') {
          themeToggle.appendChild(ReactComponents.SunIcon());
        } else {
          themeToggle.appendChild(ReactComponents.MoonIcon());
        }
      }
    }
  };
  
  // Create widget container with React-like structure - Enhanced
  function createWidget() {
    if (widgetContainer) return widgetContainer;
    
    widgetContainer = document.createElement('div');
    widgetContainer.className = 'qurius-wix-widget';
    
    // Create chat interface (initially hidden)
    const chatInterface = document.createElement('div');
    chatInterface.className = 'qurius-wix-chat';
    chatInterface.style.display = 'none';
    chatInterface.innerHTML = `
      <div class="qurius-wix-header">
        <h3>${companyData?.name || 'AI Assistant'}</h3>
        <div style="display: flex; align-items: center;">
          <button class="qurius-wix-theme-toggle" onclick="window.quriusWixWidget.toggleTheme()"></button>
          <button class="qurius-wix-close" onclick="window.quriusWixWidget.toggle()">×</button>
        </div>
      </div>
      <div class="qurius-wix-messages" id="qurius-messages">
        ${ReactComponents.createWelcomeMessage().outerHTML}
      </div>
      <div class="qurius-wix-input">
        <input type="text" id="qurius-input" placeholder="Ask me anything..." onkeypress="if(event.key==='Enter') window.quriusWixWidget.sendMessage()">
        <button class="qurius-wix-send" onclick="window.quriusWixWidget.sendMessage()"></button>
      </div>
    `;
    
    // Create chat button (initially visible)
    const chatButton = document.createElement('button');
    chatButton.className = 'qurius-wix-button';
    chatButton.appendChild(ReactComponents.MessageCircleIcon());
    chatButton.onclick = () => window.quriusWixWidget.toggle();
    
    // Add both elements to container
    widgetContainer.appendChild(chatInterface);
    widgetContainer.appendChild(chatButton);
    
    document.body.appendChild(widgetContainer);
    
    // Apply initial theme
    WidgetState.applyTheme();
    
    return widgetContainer;
  }
  
  // Widget API (React-like methods) - Enhanced
  const widgetAPI = {
    init: function(companyName, companyId, key, plan, theme) {
      companyData = {
        name: companyName,
        id: companyId,
        key: key,
        plan: plan
      };
      
      // Set initial theme
      if (theme) {
        WidgetState.setTheme(theme);
      }
      
      injectStyles();
      createWidget();
      
      // Track widget view
      analyticsService.trackWidgetView(companyName);
      
      console.log('✅ Enhanced Wix widget initialized for:', companyName);
    },
    
    toggle: async function() {
      const newMinimizedState = !WidgetState.isMinimized;
      WidgetState.setMinimized(newMinimizedState);
      
      // Track widget open/close
      if (companyData && companyData.name) {
        if (newMinimizedState) {
          await analyticsService.trackWidgetClose(companyData.name);
        } else {
          await analyticsService.trackWidgetOpen(companyData.name);
        }
      }
      
      console.log('Widget toggled:', newMinimizedState ? 'minimized' : 'expanded');
    },
    
    toggleTheme: async function() {
      const newTheme = WidgetState.theme === 'light' ? 'dark' : 'light';
      WidgetState.setTheme(newTheme);
      
      // Track theme change
      if (companyData && companyData.name) {
        await analyticsService.trackThemeChange(companyData.name, newTheme);
      }
      
      console.log('Theme changed to:', newTheme);
    },
    
    sendMessage: async function() {
      const input = document.getElementById('qurius-input');
      const message = input.value.trim();
      
      if (!message || WidgetState.isLoading) return;
      
      // Add user message
      WidgetState.addMessage(message, true);
      input.value = '';
      
      // Set loading state
      WidgetState.setLoading(true);
      
      try {
        // Get AI response
        const response = await sendMessageToAPI(message);
        
        // Add AI response
        WidgetState.addMessage(response, false);
        
      } catch (error) {
        console.error('❌ Message sending error:', error);
        
        // Add error message
        WidgetState.addMessage('Sorry, something went wrong. Please try again.', false);
        
      } finally {
        // Clear loading state
        WidgetState.setLoading(false);
        
        // Focus input
        if (input) input.focus();
      }
    }
  };
  
  // Expose widget API globally
  window.quriusWixWidget = widgetAPI;
  
  // Auto-initialize if data attributes are present
  document.addEventListener('DOMContentLoaded', function() {
    const script = document.currentScript || document.querySelector('script[src*="wix-widget.js"]');
    if (script) {
      const companyName = script.getAttribute('data-company');
      const companyId = script.getAttribute('data-id');
      const key = script.getAttribute('data-key');
      const plan = script.getAttribute('data-plan');
      const theme = script.getAttribute('data-theme') || CONFIG.defaultTheme;
      
      if (companyName && companyId) {
        widgetAPI.init(companyName, companyId, key, plan, theme);
      } else {
        console.error('❌ Missing required data attributes: data-company and data-id');
      }
    }
  });
})(); 