// Qurius-AI Chat Widget Embed Script
(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    // scriptUrl: window.location.hostname === 'localhost' ? 'dist/widget/chat-widget.umd.cjs' : 'https://qurius.app/widget/chat-widget.umd.cjs', // Points to React widget
    // cssUrl: window.location.hostname === 'localhost' ? 'dist/widget/chat-widget.css' : 'https://qurius.app/widget/chat-widget.css', // CSS file for styling
    // apiUrl: window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://qurius-ai.onrender.com',
    scriptUrl: 'https://qurius.app/widget/chat-widget.umd.cjs',
    cssUrl: 'https://qurius.app/widget/chat-widget.css',
    apiUrl: 'https://qurius-ai.onrender.com',
    defaultTheme: 'light'
  };
  
  // Widget state
  let widgetLoaded = false;
  let widgetContainer = null;
  
  // Store original page styles before widget CSS loads
  const originalPageStyles = {
    bodyBackground: null,
    htmlBackground: null,
    captured: false
  };
  
  // Capture original styles immediately when script loads (before widget CSS)
  function captureOriginalStyles() {
    if (originalPageStyles.captured) return;
    
    // Only capture if widget CSS hasn't loaded yet
    const widgetCSSLoaded = document.querySelector(`link[href*="chat-widget.css"]`) || 
                           document.querySelector('#qurius-widget-styles');
    
    if (!widgetCSSLoaded && document.body) {
      const bodyStyle = window.getComputedStyle(document.body);
      originalPageStyles.bodyBackground = bodyStyle.backgroundColor;
      
      // Check if it's the default widget background (white or dark)
      // If it matches widget defaults, it might already be affected
      const isWidgetDefault = bodyStyle.backgroundColor === 'rgb(255, 255, 255)' || 
                              bodyStyle.backgroundColor === 'rgb(0, 0, 0)' ||
                              bodyStyle.backgroundColor.includes('oklch');
      
      if (isWidgetDefault) {
        // Might already be affected, use unset instead
        originalPageStyles.bodyBackground = 'unset';
      }
    }
    
    if (!widgetCSSLoaded && document.documentElement) {
      originalPageStyles.htmlBackground = window.getComputedStyle(document.documentElement).backgroundColor;
    }
    
    originalPageStyles.captured = true;
  }
  
  // Capture immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', captureOriginalStyles);
  } else {
    captureOriginalStyles();
  }
  
  // Protect against JavaScript theme changes
  function protectPageFromThemeChanges() {
    if (!document.body) {
      // Wait for body to be available
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', protectPageFromThemeChanges);
      } else {
        setTimeout(protectPageFromThemeChanges, 100);
      }
      return;
    }
    
    // Store original inline style values (capture before widget loads)
    const originalBodyBg = document.body.style.backgroundColor || '';
    const originalBodyColor = document.body.style.color || '';
    
    // Helper function for color normalization
    const normalizeColor = (color) => {
      if (!color) return '';
      return color.toLowerCase().replace(/\s+/g, '');
    };
    
    // Widget theme colors to detect and revert
    const widgetLightBg = 'rgb(255, 255, 255)';
    const widgetDarkBg = 'rgb(0, 0, 0)';
    const widgetLightColor = 'rgb(0, 0, 0)';
    const widgetDarkColor = 'rgb(255, 255, 255)';
    
    // Also check for hex colors and other formats
    const widgetBgColors = [
      widgetLightBg,
      widgetDarkBg,
      '#ffffff',
      '#000000',
      'rgb(255,255,255)',
      'rgb(0,0,0)'
    ];
    
    // Function to restore original styles
    const restoreOriginalStyles = () => {
      if (!document.body) return;
      
      const currentBg = document.body.style.backgroundColor || '';
      const currentColor = document.body.style.color || '';
      
      const normalizedCurrentBg = normalizeColor(currentBg);
      const normalizedCurrentColor = normalizeColor(currentColor);
      
      // Check if current background matches widget theme colors
      const isWidgetBg = widgetBgColors.some(widgetBg => 
        normalizeColor(widgetBg) === normalizedCurrentBg
      ) || normalizedCurrentBg === normalizeColor(widgetLightBg) || 
         normalizedCurrentBg === normalizeColor(widgetDarkBg);
      
      // Check if current color matches widget theme colors
      const isWidgetColor = normalizedCurrentColor === normalizeColor(widgetLightColor) || 
                           normalizedCurrentColor === normalizeColor(widgetDarkColor);
      
      // Restore if changed to widget colors
      if (isWidgetBg && normalizedCurrentBg !== normalizeColor(originalBodyBg)) {
        console.log('🛡️ Restoring original body background-color (was:', currentBg, ')');
        document.body.style.setProperty('background-color', originalBodyBg, 'important');
      }
      
      if (isWidgetColor && normalizedCurrentColor !== normalizeColor(originalBodyColor)) {
        console.log('🛡️ Restoring original body color (was:', currentColor, ')');
        document.body.style.setProperty('color', originalBodyColor, 'important');
      }
    };
    
    // Use MutationObserver to watch for style attribute changes
    const styleObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          // Immediately restore if widget changed it
          requestAnimationFrame(() => {
            restoreOriginalStyles();
          });
        }
      });
    });
    
    // Observe body for style attribute changes
    styleObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['style']
    });
    
    // Periodic check as a backup (less frequent to avoid performance issues)
    const restoreInterval = setInterval(() => {
      restoreOriginalStyles();
    }, 250); // Check every 250ms
    
    // Override setProperty on body.style to intercept changes
    const bodyStyle = document.body.style;
    const originalSetProperty = bodyStyle.setProperty.bind(bodyStyle);
    
    bodyStyle.setProperty = function(property, value, priority) {
      // Block background-color and color changes that match widget themes
      const normalizedValue = (value || '').toLowerCase().replace(/\s+/g, '');
      const isWidgetBgValue = widgetBgColors.some(widgetBg => 
        normalizeColor(widgetBg) === normalizedValue
      );
      const isWidgetColorValue = normalizedValue === normalizeColor(widgetLightColor) || 
                                 normalizedValue === normalizeColor(widgetDarkColor);
      
      if ((property === 'background-color' || property === 'backgroundColor') && isWidgetBgValue) {
        console.log('🛡️ Blocked setProperty: background-color =', value);
        // Restore original instead
        requestAnimationFrame(() => {
          originalSetProperty('background-color', originalBodyBg, 'important');
        });
        return;
      }
      
      if (property === 'color' && isWidgetColorValue) {
        console.log('🛡️ Blocked setProperty: color =', value);
        // Restore original instead
        requestAnimationFrame(() => {
          originalSetProperty('color', originalBodyColor, 'important');
        });
        return;
      }
      
      return originalSetProperty(property, value, priority);
    };
    
    // Cleanup function (for when widget is removed, if needed)
    window.__qurius_style_protection_cleanup = () => {
      styleObserver.disconnect();
      clearInterval(restoreInterval);
    };
    
    console.log('✅ Page protection against JavaScript theme changes enabled');
  }
  
  // Initialize protection when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', protectPageFromThemeChanges);
  } else {
    protectPageFromThemeChanges();
  }
  
  // Add protective CSS to prevent widget styles from affecting page
  function addProtectiveCSS() {
    // Check if protective styles are already added
    if (document.querySelector('#qurius-protective-styles')) {
      return;
    }
    
    // Ensure we've captured original styles
    captureOriginalStyles();
    
    // Use original if available, otherwise use unset to remove the property
    // Using 'unset' will remove the background-color property and let the page's
    // original styles (or browser defaults) take effect
    const bodyBg = originalPageStyles.bodyBackground || 'unset';
    const htmlBg = originalPageStyles.htmlBackground || 'unset';
    
    const style = document.createElement('style');
    style.id = 'qurius-protective-styles';
    style.textContent = `
      /* Protective styles to prevent widget CSS from affecting host page */
      body {
        background-color: ${bodyBg} !important;
      }
      
      html {
        background-color: ${htmlBg} !important;
      }
    `;
    
    // Insert after widget CSS to override it (must come after widget CSS)
    const widgetLink = document.querySelector(`link[href*="chat-widget.css"]`);
    const widgetStyles = document.querySelector('#qurius-widget-styles');
    
    if (widgetLink) {
      widgetLink.insertAdjacentElement('afterend', style);
    } else if (widgetStyles) {
      widgetStyles.insertAdjacentElement('afterend', style);
    } else {
      // If no widget CSS found, append to end of head
      document.head.appendChild(style);
    }
    
    console.log('✅ Protective CSS added to preserve page background');
  }

  // Load CSS file
  function loadCSS() {
    return new Promise((resolve, reject) => {
      // Check if CSS is already loaded
      if (document.querySelector(`link[href*="chat-widget.css"]`) || document.querySelector('#qurius-widget-styles')) {
        // Add protective CSS if widget CSS is already loaded
        addProtectiveCSS();
        resolve();
        return;
      }
      
      // Try to load external CSS first (for regular websites)
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CONFIG.cssUrl;
      
      link.onload = () => {
        console.log('✅ External CSS loaded successfully');
        // Add protective CSS after widget CSS loads
        setTimeout(() => {
          addProtectiveCSS();
        }, 0);
        resolve();
      };
      
      link.onerror = (error) => {
        console.warn('⚠️ External CSS failed to load, trying inline injection...');
        // Fallback to inline CSS for Wix and other restricted platforms
        injectInlineCSS();
        // Add protective CSS after inline injection
        setTimeout(() => {
          addProtectiveCSS();
        }, 0);
        resolve();
      };
      
      document.head.appendChild(link);
    });
  }
  
  // Inject CSS inline for Wix compatibility
  function injectInlineCSS() {
    // Check if styles are already injected
    if (document.querySelector('#qurius-widget-styles')) {
      return;
    }
    
    const style = document.createElement('style');
    style.id = 'qurius-widget-styles';
    style.textContent = `
      /* Qurius AI Chat Widget Styles */
      #qurius-chat-widget {
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 999999 !important;
        width: 400px !important;
        height: 600px !important;
        max-height: 80vh !important;
        display: block !important;
        overflow: visible !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        box-sizing: border-box !important;
      }
      
      #qurius-chat-widget * {
        box-sizing: border-box !important;
      }
      
      #qurius-chat-widget iframe {
        width: 100% !important;
        height: 100% !important;
        border: none !important;
        border-radius: 12px !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
      }
      
      /* Responsive design */
      @media (max-width: 480px) {
        #qurius-chat-widget {
          width: calc(100vw - 40px) !important;
          height: calc(100vh - 40px) !important;
          bottom: 20px !important;
          right: 20px !important;
          left: 20px !important;
        }
      }
      
      /* Hide widget initially */
      #qurius-chat-widget.hidden {
        display: none !important;
      }
      
      /* Protective styles to prevent widget CSS from affecting host page */
      body {
        background-color: inherit !important;
      }
      
      html {
        background-color: inherit !important;
      }
    `;
    
    document.head.appendChild(style);
    console.log('✅ Inline CSS injected successfully');
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
  async function initWidget(companyName, companyId, options = {}) {
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
          companyId: companyId,
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
      const companyId = script.getAttribute('data-id');
      const key = script.getAttribute('data-key');
      const plan = script.getAttribute('data-plan');
      const theme = script.getAttribute('data-theme') || CONFIG.defaultTheme;
      if (companyId) {
        initWidget(companyName, companyId, { theme, key, plan });
      } else {
        console.error('Company name or ID not found in data attributes');
      }
    }
  });
})(); 