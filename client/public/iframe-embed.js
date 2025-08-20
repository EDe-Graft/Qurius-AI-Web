/**
 * Qurius AI Chat Widget - Iframe Embed Script
 * Simple one-line embed for Wix and other platforms
 */

(function() {
    'use strict';
    
    // Configuration - read from script data attributes
    const script = document.currentScript || document.querySelector('script[src*="iframe-embed.js"]');
    const config = {
        company: script?.getAttribute('data-company') || 'AI Assistant',
        id: script?.getAttribute('data-id') || '',
        key: script?.getAttribute('data-key') || 'demo-2025',
        plan: script?.getAttribute('data-plan') || 'free',
        theme: script?.getAttribute('data-theme') || 'light'
    };
    
    // Auto-detection fallback if no config provided
    if (!config.id || config.id === '') {
        config.company = document.title || 'Company';
        config.id = 'auto-detected-id';
        config.key = 'demo-2025';
        config.plan = 'free';
        config.theme = 'light';
    }
    
    console.log('🚀 Qurius AI Widget Embed Initializing...', config);
    
    // Widget configuration
    const WIDGET_CONFIG = {
        apiUrl: (() => {
            const hostname = window.location.hostname;
            if (hostname === 'qurius.app' || hostname.includes('vercel.app')) {
                return 'https://qurius-ai.onrender.com';
            } else {
                // For local development, use localhost
                return 'http://localhost:3000';
            }
        })(),
        iframeUrl: (() => {
            const hostname = window.location.hostname;
            if (hostname === 'qurius.app' || hostname.includes('vercel.app')) {
                return 'https://qurius.app/widget/wix-widget-iframe-modular.html';
            } else {
                // For local development, use relative path
                return 'public/widget/wix-widget-iframe-modular.html';
            }
        })(),
        widgetWidth: '400px',
        widgetHeight: '600px',
        buttonSize: '64px'
    };
    
    // Create widget iframe
    function createWidgetIframe() {
        // Create floating iframe container
        const iframeContainer = document.createElement('div');
        iframeContainer.id = 'qurius-widget-container';
        iframeContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: ${WIDGET_CONFIG.widgetWidth};
            height: ${WIDGET_CONFIG.widgetHeight};
            z-index: 999999;
            border-radius: 12px;
            overflow: hidden;
            background: transparent;
            background-color: transparent;
            border: none;
            box-shadow: none;
            pointer-events: none;
            transition: all 0.3s ease-in-out;
        `;
        
        console.log('📦 Iframe container created');
        
        // Create iframe
        const iframe = document.createElement('iframe');
        const iframeSrc = `${WIDGET_CONFIG.iframeUrl}?company=${encodeURIComponent(config.company)}&id=${encodeURIComponent(config.id)}&key=${encodeURIComponent(config.key)}&plan=${encodeURIComponent(config.plan)}&theme=${encodeURIComponent(config.theme)}`;
        
        iframe.src = iframeSrc;
        iframe.id = 'qurius-widget-iframe';
        iframe.style.cssText = `
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 12px;
            background: transparent !important;
            background-color: transparent !important;
            transition: all 0.3s ease-in-out;
        `;
        iframe.allow = 'microphone; camera';
        
        console.log('🖼️ Iframe created, src:', iframeSrc);
        
        // Track iframe loading
        iframe.onload = function() {
            console.log('✅ Qurius Widget iframe loaded successfully');
            console.log('🔍 Iframe content window:', iframe.contentWindow);
            console.log('🔍 Iframe document:', iframe.contentDocument);
        };
        
        iframe.onerror = function() {
            console.error('❌ Qurius Widget iframe failed to load');
        };
        
        // Add to page
        iframeContainer.appendChild(iframe);
        document.body.appendChild(iframeContainer);
        console.log('📄 Widget iframe added to page');
        
        // Listen for messages from iframe to update pointer events
        window.addEventListener('message', function(event) {
            // Verify the message is from our iframe
            if (event.source !== iframe.contentWindow) {
                return;
            }
            
            // Handle widget state changes
            if (event.data && event.data.type === 'widget-minimized-state') {
                const isMinimized = event.data.isMinimized;
                console.log('🔄 Widget minimized state changed:', isMinimized);
                
                if (isMinimized) {
                    // When minimized: Set container to none, but allow button clicks
                    iframeContainer.style.pointerEvents = 'none';
                    
                    // Add a click handler to the iframe container that only responds to button clicks
                    iframeContainer.addEventListener('click', handleIframeClick, true);
                    
                    // Alternative: Use CSS to make only the button clickable
                    iframe.style.cssText = `
                        width: 100%;
                        height: 100%;
                        border: none;
                        border-radius: 12px;
                        background: transparent !important;
                        background-color: transparent !important;
                        pointer-events: none;
                        transition: all 0.3s ease-in-out;
                    `;
                    
                    // Add a transparent overlay div that only responds to button clicks
                    const buttonOverlay = document.createElement('div');
                    buttonOverlay.id = 'qurius-button-overlay';
                    buttonOverlay.style.cssText = `
                        position: absolute;
                        bottom: 16px;
                        right: 15px;
                        width: ${WIDGET_CONFIG.buttonSize};
                        height: ${WIDGET_CONFIG.buttonSize};
                        border-radius: 50%;
                        z-index: 1000000;
                        pointer-events: auto;
                        cursor: pointer;
                    `;
                    
                    buttonOverlay.addEventListener('click', function(e) {
                        console.log('🎯 Button overlay clicked!');
                        // Send click message to iframe
                        iframe.contentWindow.postMessage({
                            type: 'button-click',
                            timestamp: Date.now()
                        }, '*');
                    });
                    
                    // Send hover message to iframe
                    buttonOverlay.addEventListener('mouseenter', function(e) {
                        iframe.contentWindow.postMessage({
                            type: 'button-hover',
                            timestamp: Date.now()
                        }, '*');
                    });
                    
                    // Send hover end message to iframe
                    buttonOverlay.addEventListener('mouseleave', function(e) {
                        iframe.contentWindow.postMessage({
                            type: 'button-hover-end',
                            timestamp: Date.now()
                        }, '*');
                    });
                    
                    // Remove existing overlay if any
                    const existingOverlay = document.getElementById('qurius-button-overlay');
                    if (existingOverlay) {
                        existingOverlay.remove();
                    }
                    
                    iframeContainer.appendChild(buttonOverlay);
                    
                } else {
                    // When expanded: Remove all restrictions
                    iframeContainer.style.pointerEvents = 'auto';
                    iframe.style.cssText = `
                        width: 100%;
                        height: 100%;
                        border: none;
                        border-radius: 12px;
                        background: transparent !important;
                        background-color: transparent !important;
                        transition: all 0.3s ease-in-out;
                    `;
                    
                    // Remove click handler
                    iframeContainer.removeEventListener('click', handleIframeClick, true);
                    
                    // Remove button overlay
                    const existingOverlay = document.getElementById('qurius-button-overlay');
                    if (existingOverlay) {
                        existingOverlay.remove();
                    }
                }
            }
        });
        
        // Function to handle iframe clicks when minimized
        function handleIframeClick(e) {
            // Check if click is in the button area (bottom-right corner)
            const rect = iframeContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Button area: bottom-right 64x64px
            const buttonArea = {
                left: rect.width - 84, // 20px margin from right
                right: rect.width - 20,
                top: rect.height - 84,  // 20px margin from bottom
                bottom: rect.height - 20
            };
            
            if (clickX >= buttonArea.left && clickX <= buttonArea.right &&
                clickY >= buttonArea.top && clickY <= buttonArea.bottom) {
                console.log('🎯 Button area clicked!');
                // Send click message to iframe
                iframe.contentWindow.postMessage({
                    type: 'button-click',
                    timestamp: Date.now()
                }, '*');
            }
        }
        
        return iframeContainer;
    }
    
    // Initialize widget when DOM is ready
    function initWidget() {
        // Check if widget already exists
        if (document.getElementById('qurius-widget-container')) {
            console.log('⚠️ Qurius Widget already exists on page');
            return;
        }
        
        // Create and add widget
        const widget = createWidgetIframe();
        console.log('✅ Qurius AI Widget initialized successfully');
        
        // Add global access for debugging
        window.quriusWidget = {
            config: config,
            container: widget,
            destroy: function() {
                if (widget && widget.parentNode) {
                    widget.parentNode.removeChild(widget);
                    console.log('🗑️ Qurius Widget destroyed');
                }
            }
        };
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
    
})(); 