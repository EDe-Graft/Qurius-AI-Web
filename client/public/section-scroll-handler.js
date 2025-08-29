/**
 * Section Scroll Handler for Qurius.app
 * 
 * This script handles automatic scrolling to sections when users arrive
 * from external links (like the chatbot widget) with anchor tags.
 * 
 * Usage: Add this script to your website's <head> or before </body>
 */

(function() {
    'use strict';
  
    // Configuration
    const config = {
      scrollDelay: 100,        // Delay before scrolling (ms)
      scrollBehavior: 'smooth', // 'smooth' or 'auto'
      scrollOffset: 80,        // Offset from top (for fixed headers)
      retryAttempts: 3,        // Number of retry attempts if element not found
      retryDelay: 1000         // Delay between retries (ms)
    };
  
    /**
     * Scroll to element with smooth animation and offset
     */
    function scrollToElement(element, offset = 0) {
      if (!element) return false;
  
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: config.scrollBehavior
      });
  
      return true;
    }
  
    /**
     * Find element by various selectors
     */
    function findElement(hash) {
      // Remove the # from the hash
      const id = hash.substring(1);
      
      // Try different selectors
      const selectors = [
        `#${id}`,                    // Direct ID match
        `[id="${id}"]`,              // ID attribute match
        `[name="${id}"]`,            // Name attribute match
        `[data-section="${id}"]`,    // Data attribute match
        `.${id}`,                    // Class match (fallback)
        `[class*="${id}"]`           // Partial class match
      ];
  
      for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element) {
          console.log(`🎯 Found element with selector: ${selector}`);
          return element;
        }
      }
  
      return null;
    }
  
    /**
     * Handle hash-based scrolling
     */
    function handleHashScroll() {
      const hash = window.location.hash;
      
      if (!hash) return;
  
      console.log(`🔍 Processing hash: ${hash}`);
  
      // Try to find the element immediately
      let element = findElement(hash);
      
      if (element) {
        // Element found, scroll to it after a short delay
        setTimeout(() => {
          const success = scrollToElement(element, config.scrollOffset);
          if (success && element) {
            console.log(`✅ Scrolled to section: ${hash}`);
            
            // Add visual highlight to the section
            element.classList.add('section-highlight');
            setTimeout(() => {
              if (element) {
                element.classList.remove('section-highlight');
              }
            }, 2000);
          }
        }, config.scrollDelay);
        return;
      }
  
      // Element not found immediately, retry with delays
      let attempts = 0;
      const retryInterval = setInterval(() => {
        attempts++;
        console.log(`🔄 Retry attempt ${attempts} for hash: ${hash}`);
        
        element = findElement(hash);
        
        if (element) {
          clearInterval(retryInterval);
          const success = scrollToElement(element, config.scrollOffset);
          if (success) {
            console.log(`✅ Scrolled to section after retry: ${hash}`);
            
            // Add visual highlight
            element.classList.add('section-highlight');
            setTimeout(() => {
              if (element) {
                element.classList.remove('section-highlight');
              }
            }, 2000);
          }
        } else if (attempts >= config.retryAttempts) {
          clearInterval(retryInterval);
          console.warn(`⚠️ Could not find element for hash: ${hash} after ${config.retryAttempts} attempts`);
        }
      }, config.retryDelay);
    }
  
    /**
     * Handle hash changes (for single-page applications)
     */
    function handleHashChange() {
      // Clear any existing timeouts/intervals
      if (window.hashScrollTimeout) {
        clearTimeout(window.hashScrollTimeout);
      }
      
      // Add a small delay to ensure DOM is ready
      window.hashScrollTimeout = setTimeout(handleHashScroll, 50);
    }
  
    /**
     * Initialize the scroll handler
     */
    function init() {
      console.log('🚀 Section Scroll Handler initialized');
      
      // Handle initial page load
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleHashScroll);
      } else {
        // DOM is already loaded
        handleHashScroll();
      }
      
      // Handle hash changes (for SPAs)
      window.addEventListener('hashchange', handleHashChange);
      
      // Handle popstate (back/forward navigation)
      window.addEventListener('popstate', handleHashChange);
    }
  
    /**
     * Add CSS for section highlighting
     */
    function addStyles() {
      const style = document.createElement('style');
      style.textContent = `
        .section-highlight {
          animation: sectionPulse 2s ease-in-out;
        }
        
        @keyframes sectionPulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0.3); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        
        .section-highlight {
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `;
      document.head.appendChild(style);
    }
  
    // Initialize when script loads
    addStyles();
    init();
  
    // Export for manual use
    window.SectionScrollHandler = {
      scrollToSection: function(hash) {
        window.location.hash = hash;
        handleHashScroll();
      },
      findElement: findElement,
      scrollToElement: scrollToElement
    };
  
  })(); 