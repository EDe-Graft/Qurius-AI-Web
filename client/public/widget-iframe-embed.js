/**
 * Qurius AI - Widget Iframe Embed Script
 *
 * Usage (on any website):
 *
 * <script
 *   src="https://qurius.app/widget-iframe-embed.js"
 *   data-id="YOUR_COMPANY_ID"
 *   data-key="YOUR_WIDGET_KEY"
 *   data-plan="starter|growth|pro"
 *   data-theme="light|dark">
 * </script>
 *
 * - Renders a floating chat button bottom-right.
 * - On click, opens a responsive iframe:
 *   - Mobile: full-screen.
 *   - Desktop: bottom-right chat window (similar to siteassist.io).
 * - Provides close (X) and fullscreen buttons on desktop.
 * - Does not modify host page styles beyond the floating elements.
 */

(function () {
  'use strict';

  // ---- Config from script tag ----
  var script =
    document.currentScript ||
    document.querySelector('script[src*="widget-iframe-embed.js"]');

  if (!script) {
    console.error('Qurius AI: embed script tag not found');
    return;
  }

  var companyId = script.getAttribute('data-id') || '';
  var key = script.getAttribute('data-key') || '';
  var plan = script.getAttribute('data-plan') || 'starter';
  var theme = script.getAttribute('data-theme') || 'dark';
  var primaryColor = script.getAttribute('data-primary-color') || '#6366f1'; // Default indigo

  if (!companyId || !key) {
    console.error(
      'Qurius AI: data-id (companyId) and data-key (widget key) are required on the script tag.'
    );
    return;
  }

  // ---- Environment / URLs ----
  var hostname = window.location.hostname;
  var isLocal =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '::1';

  var iframeBaseUrl = isLocal
    ? 'http://localhost:5173/widget-iframe'
    : 'https://qurius.app/widget-iframe';

  var iframeSrc =
    iframeBaseUrl +
    '?companyId=' +
    encodeURIComponent(companyId) +
    '&key=' +
    encodeURIComponent(key) +
    '&plan=' +
    encodeURIComponent(plan) +
    '&theme=' +
    encodeURIComponent(theme);

  // ---- State ----
  var isOpen = false;
  var isFullscreen = false;
  var container = null;
  var iframe = null;
  var launcherButton = null;
  var fullscreenBtn = null;
  var isMobile = window.innerWidth <= 768;

  // ---- Helpers ----
  function createLauncherButton() {
    if (launcherButton) return launcherButton;

    launcherButton = document.createElement('button');
    launcherButton.id = 'qurius-widget-launcher';
    launcherButton.type = 'button';
    launcherButton.setAttribute('aria-label', 'Open Qurius AI chat');

    launcherButton.style.position = 'fixed';
    launcherButton.style.bottom = '20px';
    launcherButton.style.right = '20px';
    launcherButton.style.padding = '12px 20px';
    launcherButton.style.borderRadius = '8px';
    launcherButton.style.border = 'none';
    launcherButton.style.cursor = 'pointer';
    launcherButton.style.zIndex = '999998';
    launcherButton.style.display = 'flex';
    launcherButton.style.alignItems = 'center';
    launcherButton.style.justifyContent = 'center';
    launcherButton.style.gap = '8px';
    launcherButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    launcherButton.style.background = primaryColor;
    launcherButton.style.color = '#ffffff';
    launcherButton.style.fontSize = '14px';
    launcherButton.style.fontWeight = '500';
    launcherButton.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    launcherButton.style.transition =
      'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease, background-color 0.2s ease, filter 0.2s ease';

    // Helper function to darken color for hover
    function darkenColor(color, percent) {
      var num = parseInt(color.replace('#', ''), 16);
      var amt = Math.round(2.55 * percent);
      var R = (num >> 16) + amt;
      var G = (num >> 8 & 0x00FF) + amt;
      var B = (num & 0x0000FF) + amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    launcherButton.onmouseenter = function () {
      launcherButton.style.transform = 'translateY(-1px)';
      launcherButton.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.25)';
      launcherButton.style.filter = 'brightness(0.9)';
    };

    launcherButton.onmouseleave = function () {
      launcherButton.style.transform = 'translateY(0)';
      launcherButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      launcherButton.style.filter = 'brightness(1)';
    };

    launcherButton.onclick = function () {
      openWidget();
    };

    // "Ask AI" text with sparkle icon
    launcherButton.innerHTML =
      '<span style="font-size: 16px; line-height: 1;">✨</span>' +
      '<span>Ask AI</span>';

    document.body.appendChild(launcherButton);

    return launcherButton;
  }

  function createContainerAndIframe() {
    if (container && iframe) return;

    container = document.createElement('div');
    container.id = 'qurius-widget-iframe-container';

    container.style.position = 'fixed';
    container.style.zIndex = '999999';
    container.style.overflow = 'hidden';
    container.style.display = 'none'; // hidden until open
    container.style.boxShadow = '0 20px 45px rgba(15, 23, 42, 0.45)';
    container.style.backgroundColor = 'transparent';
    container.style.transition = 'all 0.3s ease-in-out';
    container.style.transformOrigin = 'bottom right';

    applyContainerLayout(); // set initial layout based on viewport

    // Iframe
    iframe = document.createElement('iframe');
    iframe.id = 'qurius-widget-iframe';
    iframe.src = iframeSrc;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.display = 'block';
    
    // Send fullscreen state after iframe loads
    iframe.onload = function() {
      // Small delay to ensure iframe is fully ready
      setTimeout(function() {
        notifyIframeFullscreenState();
      }, 100);
    };

    container.appendChild(iframe);
    document.body.appendChild(container);
  }

  function applyContainerLayout() {
    if (!container) return;

    isMobile = window.innerWidth <= 768;

    if (isFullscreen) {
      // Fullscreen mode - cover entire viewport, expanding from bottom-right
      container.style.top = 'auto';
      container.style.left = 'auto';
      container.style.right = '0';
      container.style.bottom = '0';
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.borderRadius = '0';
      container.style.margin = '0';
    } else if (isMobile) {
      // Mobile: full-screen style when open
      container.style.top = '0';
      container.style.left = '0';
      container.style.right = '0';
      container.style.bottom = '0';
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.borderRadius = '0';
      container.style.margin = '0';
    } else {
      // Desktop: bottom-right chat window
      container.style.bottom = '20px';
      container.style.right = '20px';
      container.style.top = 'auto';
      container.style.left = 'auto';
      container.style.width = '420px';
      container.style.height = '620px';
      container.style.borderRadius = '16px';
      container.style.margin = '0';
    }
  }

  function openWidget() {
    createContainerAndIframe();
    isOpen = true;
    container.style.display = 'block';
    if (launcherButton) {
      launcherButton.style.opacity = '0';
      launcherButton.style.pointerEvents = 'none';
    }
    applyContainerLayout();
    notifyIframeFullscreenState();
  }

  function closeWidget() {
    isOpen = false;
    isFullscreen = false;
    if (container) {
      container.style.display = 'none';
    }
    if (launcherButton) {
      launcherButton.style.opacity = '1';
      launcherButton.style.pointerEvents = 'auto';
    }
  }

  function toggleFullscreen() {
    // On mobile, fullscreen == normal open state; no-op
    if (window.innerWidth <= 768) return;

    isFullscreen = !isFullscreen;
    applyContainerLayout();
    notifyIframeFullscreenState();
  }

  // Inform the iframe of fullscreen state so it can adjust UI
  function notifyIframeFullscreenState() {
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.postMessage(
        {
          source: 'qurius-embed',
          type: 'qurius-fullscreen-changed',
          isFullscreen: isFullscreen
        },
        '*'
      );
    } catch (e) {
      // Fail silently; this is non-critical UX info
    }
  }

  // Listen for messages from the iframe to control fullscreen/close
  function handleMessage(event) {
    if (!event || !event.data) return;
    var data = event.data;

    if (data && data.source === 'qurius-widget') {
      if (data.type === 'qurius-close-widget') {
        closeWidget();
      } else if (data.type === 'qurius-toggle-fullscreen') {
        toggleFullscreen();
      } else if (data.type === 'qurius-request-fullscreen-state') {
        // Respond to iframe's request for current fullscreen state
        notifyIframeFullscreenState();
      }
    }
  }

  function handleResize() {
    applyContainerLayout();
  }

  // ---- Init ----
  function init() {
    try {
      createLauncherButton();
      createContainerAndIframe();
      window.addEventListener('resize', handleResize);
      window.addEventListener('message', handleMessage);
    } catch (e) {
      console.error('Qurius AI: Failed to initialize widget iframe embed:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

