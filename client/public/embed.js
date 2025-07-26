// Qurius-AI Chat Widget Embed Script
(function() {
  'use strict';

  // Configuration for deployed version
  const CONFIG = {
    scriptUrl: 'https://qurius-ai.vercel.app/widget/chat-widget.umd.cjs',
    cssUrl: 'https://qurius-ai.vercel.app/widget/chat-widget.css',
    apiUrl: 'https://qurius-ai.onrender.com',
    defaultTheme: 'light'
  };
  
  // Widget state
  let widgetLoaded = false;
  let widgetContainer = null;
  let chatButton = null;
  
  // Create chat button
  function createChatButton() {
    if (chatButton) return chatButton;
    
    chatButton = document.createElement('div');
    chatButton.id = 'qurius-chat-button';
    chatButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      width: 60px;
      height: 60px;
      background: #667eea;
      border-radius: 50%;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      transition: transform 0.3s, box-shadow 0.3s;
    `;
    chatButton.innerHTML = '💬';
    chatButton.title = 'Chat with us';
    
    // Add hover effects
    chatButton.addEventListener('mouseenter', () => {
      chatButton.style.transform = 'scale(1.1)';
      chatButton.style.boxShadow = '0 6px 25px rgba(0,0,0,0.3)';
    });
    
    chatButton.addEventListener('mouseleave', () => {
      chatButton.style.transform = 'scale(1)';
      chatButton.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    });
    
    // Click to open widget
    chatButton.addEventListener('click', () => {
      if (widgetContainer && widgetContainer.style.display === 'none') {
        showWidget();
        chatButton.style.display = 'none';
      }
    });
    
    document.body.appendChild(chatButton);
    return chatButton;
  }
  
  // Create widget container
  function createWidgetContainer() {
    if (widgetContainer) return widgetContainer;
    
    widgetContainer = document.createElement('div');
    widgetContainer.id = 'qurius-chat-widget';
    widgetContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      width: 400px;
      height: 600px;
      max-height: 80vh;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      border: 1px solid #e5e7eb;
      display: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    
    document.body.appendChild(widgetContainer);
    return widgetContainer;
  }
  
  // Load CSS
  function loadCSS() {
    if (document.querySelector('link[href*="chat-widget.css"]')) return;
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CONFIG.cssUrl;
    document.head.appendChild(link);
  }
  
  // Load widget script
  function loadWidgetScript() {
    if (widgetLoaded) return Promise.resolve();
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = CONFIG.scriptUrl;
      script.onload = () => {
        widgetLoaded = true;
        resolve();
      };
      script.onerror = (error) => {
        console.error('Failed to load widget script:', error);
        reject(error);
      };
      document.head.appendChild(script);
    });
  }
  
  // Initialize widget
  function initWidget(companyName, options = {}) {
    const container = createWidgetContainer();
    const button = createChatButton();
    loadCSS();
    
    return loadWidgetScript().then(() => {
      // Initialize the React widget
      if (window.QuriusChatWidget) {
        window.QuriusChatWidget.init(container, {
          companyName,
          theme: options.theme || CONFIG.defaultTheme,
          apiUrl: CONFIG.apiUrl,
          ...options
        });
      } else {
        console.error('QuriusChatWidget not found after loading script');
      }
    }).catch(error => {
      console.error('Failed to initialize widget:', error);
    });
  }
  
  // Show/hide widget
  function showWidget() {
    if (widgetContainer) {
      widgetContainer.style.display = 'block';
    }
  }
  
  function hideWidget() {
    if (widgetContainer) {
      widgetContainer.style.display = 'none';
      if (chatButton) {
        chatButton.style.display = 'flex';
      }
    }
  }
  
  // Expose global API
  window.QuriusAI = {
    init: initWidget,
    show: showWidget,
    hide: hideWidget,
    config: CONFIG
  };
  
  // Auto-initialize if data attributes are present
  document.addEventListener('DOMContentLoaded', function() {
    const script = document.currentScript || document.querySelector('script[src*="embed.js"]');
    if (script) {
      const companyName = script.getAttribute('data-company');
      const theme = script.getAttribute('data-theme') || CONFIG.defaultTheme;
      
      if (companyName) {
        initWidget(companyName, { theme });
      }
    }
  });
})(); 