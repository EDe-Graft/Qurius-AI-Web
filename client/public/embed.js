// Qurius-AI Chat Widget Embed Script
(function() {
  'use strict';

  // Get backend URL from environment variable
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';


  // Get API URL from environment variable
  // Configuration
  const CONFIG = {
    scriptUrl: `${FRONTEND_URL}/chat-widget.js`,
    cssUrl: `${FRONTEND_URL}/chat-widget.css`,
    apiUrl: BACKEND_URL,
    defaultTheme: 'light'
  };
  
  // Widget state
  let widgetLoaded = false;
  let widgetContainer = null;
  
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
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Initialize widget
  function initWidget(companyName, options = {}) {
    const container = createWidgetContainer();
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
      }
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