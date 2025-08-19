// Wix-Compatible Qurius AI Chat Widget
(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
    apiUrl: 'https://qurius-ai.onrender.com',
    defaultTheme: 'light'
  };
  
  // Widget state
  let widgetContainer = null;
  let isMinimized = true; // Start minimized like React widget
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
  
  // Inject styles for Wix compatibility
  function injectStyles() {
    if (document.querySelector('#qurius-wix-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'qurius-wix-styles';
    style.textContent = `
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
      }
      
      .qurius-wix-welcome {
        text-align: center !important;
        color: #6b7280 !important;
        padding: 20px !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
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
  
  // Create widget container
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
        <button class="qurius-wix-close" onclick="window.quriusWixWidget.toggle()">×</button>
      </div>
      <div class="qurius-wix-messages" id="qurius-messages">
        <div class="qurius-wix-welcome">
          Hello! I'm here to help. How can I assist you today?
        </div>
      </div>
      <div class="qurius-wix-input">
        <input type="text" id="qurius-input" placeholder="Ask me anything..." onkeypress="if(event.key==='Enter') window.quriusWixWidget.sendMessage()">
        <button class="qurius-wix-send" onclick="window.quriusWixWidget.sendMessage()">Send</button>
      </div>
    `;
    
    // Create chat button (initially visible)
    const chatButton = document.createElement('button');
    chatButton.className = 'qurius-wix-button';
    chatButton.innerHTML = '💬';
    chatButton.onclick = () => window.quriusWixWidget.toggle();
    
    // Add both elements to container
    widgetContainer.appendChild(chatInterface);
    widgetContainer.appendChild(chatButton);
    
    document.body.appendChild(widgetContainer);
    return widgetContainer;
  }
  
  // Send message to API using axios
  async function sendMessageToAPI(message) {
    try {
      console.log('🤖 Sending message to API:', message.substring(0, 50) + '...');
      
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
          return 'Message limit reached for this month. Please contact customer support for assistance.';
        }
        
        return result.answer || 'Sorry, I encountered an error. Please try again.';
      }
      
      return 'Sorry, I couldn\'t find a relevant answer. Please try rephrasing your question.';
      
    } catch (error) {
      console.error('❌ API Error:', error);
      
      // Handle specific error types
      if (error.response) {
        if (error.response.status === 401) {
          return 'Authentication error. Please contact support.';
        } else if (error.response.status === 429) {
          return 'Too many requests. Please wait a moment and try again.';
        } else if (error.response.status === 500) {
          return 'Server error. Please try again later.';
        }
      }
      
      return 'Sorry, I\'m having trouble connecting right now. Please try again later.';
    }
  }
  
  // Add message to chat
  function addMessage(content, isUser = false) {
    const messagesContainer = document.getElementById('qurius-messages');
    
    // Remove welcome message if it exists and this is the first user message
    const welcomeMessage = messagesContainer.querySelector('.qurius-wix-welcome');
    if (welcomeMessage && isUser) {
      welcomeMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `qurius-wix-message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = content;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  // Widget API
  const widgetAPI = {
    init: function(companyName, companyId, key, plan, theme) {
      companyData = {
        name: companyName,
        id: companyId,
        key: key,
        plan: plan
      };
      
      injectStyles();
      createWidget();
      console.log('✅ Wix widget initialized for:', companyName);
    },
    
    toggle: function() {
      const chatInterface = widgetContainer.querySelector('.qurius-wix-chat');
      const chatButton = widgetContainer.querySelector('.qurius-wix-button');
      
      isMinimized = !isMinimized;
      
      if (isMinimized) {
        // Minimize: hide chat, show button
        chatInterface.style.display = 'none';
        chatButton.style.display = 'flex';
        console.log('Widget minimized, chat button visible');
      } else {
        // Expand: show chat, hide button
        chatInterface.style.display = 'flex';
        chatButton.style.display = 'none';
        console.log('Widget expanded, chat interface visible');
        
        // Focus on input when opened
        setTimeout(() => {
          const input = document.getElementById('qurius-input');
          if (input) input.focus();
        }, 100);
      }
    },
    
    sendMessage: async function() {
      const input = document.getElementById('qurius-input');
      const sendButton = document.querySelector('.qurius-wix-send');
      const message = input.value.trim();
      
      if (!message) return;
      
      // Disable input and button
      input.disabled = true;
      sendButton.disabled = true;
      
      // Add user message
      addMessage(message, true);
      input.value = '';
      
      // Show loading
      const loadingDiv = document.createElement('div');
      loadingDiv.className = 'qurius-wix-loading';
      loadingDiv.textContent = 'AI is typing...';
      document.getElementById('qurius-messages').appendChild(loadingDiv);
      
      try {
        // Get AI response
        const response = await sendMessageToAPI(message);
        
        // Remove loading
        loadingDiv.remove();
        
        // Add AI response
        addMessage(response, false);
        
      } catch (error) {
        console.error('❌ Message sending error:', error);
        
        // Remove loading
        loadingDiv.remove();
        
        // Add error message
        addMessage('Sorry, something went wrong. Please try again.', false);
        
      } finally {
        // Re-enable input and button
        input.disabled = false;
        sendButton.disabled = false;
        input.focus();
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