// Qurius-AI Chat Widget Embed Script
(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    scriptUrl: 'dist/widget/chat-widget.umd.cjs', // Points to React widget
    cssUrl: 'dist/widget/chat-widget.css', // CSS file for styling
    apiUrl: window.location.hostname === 'qurius.app' ? 'https://qurius-ai.onrender.com' : 'http://localhost:3000',
    defaultTheme: 'light'
  };
  
  // Widget state
  let widgetLoaded = false;
  let widgetContainer = null;
  
  // Load CSS file
  function loadCSS() {
    return new Promise((resolve, reject) => {
      // Check if CSS is already loaded
      if (document.querySelector(`link[href*="chat-widget.css"]`)) {
        resolve();
        return;
      }
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CONFIG.cssUrl;
      
      link.onload = () => {
        console.log('✅ CSS loaded successfully');
        resolve();
      };
      
      link.onerror = (error) => {
        console.error('Failed to load CSS:', error);
        reject(new Error('Failed to load CSS'));
      };
      
      document.head.appendChild(link);
    });
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
      display: block;
      overflow: visible;
    `;
    
    document.body.appendChild(widgetContainer);
    return widgetContainer;
  }
  
  // Load widget script
  function loadWidgetScript() {
    return new Promise((resolve, reject) => {
      if (window.QuriusChatWidget) {
        console.log('Widget already loaded');
        resolve();
        return;
      }
      
      console.log('Loading React widget script from:', CONFIG.scriptUrl);
      
      const script = document.createElement('script');
      script.src = CONFIG.scriptUrl;
      
      script.onload = () => {
        console.log('Script loaded, waiting for widget...');
        // Wait for widget to be available
        let attempts = 0;
        const checkWidget = () => {
          console.log('Checking for widget...', attempts);
          console.log('window.QuriusChatWidget:', window.QuriusChatWidget);
          console.log('typeof window.QuriusChatWidget:', typeof window.QuriusChatWidget);
          if (window.QuriusChatWidget && window.QuriusChatWidget.init) {
            console.log('✅ React widget loaded successfully:', window.QuriusChatWidget);
            resolve();
          } else if (attempts < 50) {
            attempts++;
            setTimeout(checkWidget, 100);
          } else {
            console.error('Widget not found after', attempts, 'attempts');
            console.error('Available globals:', Object.keys(window).filter(k => k.includes('Qurius')));
            reject(new Error('Widget failed to load'));
          }
        };
        checkWidget();
      };
      
      script.onerror = (error) => {
        console.error('Failed to load widget script:', error);
        console.error('Script URL was:', CONFIG.scriptUrl);
        reject(new Error('Failed to load widget script'));
      };
      
      document.head.appendChild(script);
    });
  }
  
  // Initialize widget
  async function initWidget(companyName, options = {}) {
    try {
      console.log('Initializing React widget...');
      
      // Create elements
      createWidgetContainer();
      
      // Load CSS first
      await loadCSS();
      
      // Load widget script
      await loadWidgetScript();
      
      // Initialize widget
      console.log('About to create React widget...');
      console.log('window.QuriusChatWidget:', window.QuriusChatWidget);
      console.log('typeof window.QuriusChatWidget:', typeof window.QuriusChatWidget);
      
      if (window.QuriusChatWidget && window.QuriusChatWidget.init) {
        console.log('Creating React widget...');
        window.QuriusChatWidget.init(widgetContainer, {
          companyName: companyName,
          theme: options.theme || CONFIG.defaultTheme,
          apiUrl: options.apiUrl || CONFIG.apiUrl,
          key: options.key,
          plan: options.plan
        });
        widgetLoaded = true;
        console.log('✅ React widget initialized successfully');
      } else {
        console.error('QuriusChatWidget class not found on window');
        console.error('Available window properties:', Object.keys(window));
        throw new Error('QuriusChatWidget class not found');
      }
    } catch (error) {
      console.error('Failed to initialize widget:', error);
    }
  }
  
  // Show widget
  function showWidget() {
    if (widgetContainer) {
      widgetContainer.style.display = 'block';
    }
  }
  
  // Hide widget
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
      const key = script.getAttribute('data-key');
      const plan = script.getAttribute('data-plan');
      const theme = script.getAttribute('data-theme') || CONFIG.defaultTheme;
      if (companyName) {
        initWidget(companyName, { theme, key, plan });
      }
    }
  });
})(); 