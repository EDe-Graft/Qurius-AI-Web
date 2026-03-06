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
    launcherButton.style.width = '56px';
    launcherButton.style.height = '56px';
    launcherButton.style.borderRadius = '9999px';
    launcherButton.style.border = 'none';
    launcherButton.style.cursor = 'pointer';
    launcherButton.style.zIndex = '999998';
    launcherButton.style.display = 'flex';
    launcherButton.style.alignItems = 'center';
    launcherButton.style.justifyContent = 'center';
    launcherButton.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.35)';
    launcherButton.style.background =
      'linear-gradient(135deg, #4f46e5, #6366f1)';
    launcherButton.style.color = '#ffffff';
    launcherButton.style.fontSize = '20px';
    launcherButton.style.transition =
      'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease';

    launcherButton.onmouseenter = function () {
      launcherButton.style.transform = 'translateY(-2px)';
      launcherButton.style.boxShadow = '0 14px 40px rgba(15, 23, 42, 0.45)';
    };

    launcherButton.onmouseleave = function () {
      launcherButton.style.transform = 'translateY(0)';
      launcherButton.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.35)';
    };

    launcherButton.onclick = function () {
      openWidget();
    };

    // Simple chat icon (speech bubble)
    launcherButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 0 1-6.6 3.1 8.38 8.38 0 0 1-5.4-1.9L3 21l2.9-4.1A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 7.1 4.9 8.38 8.38 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8.5z"></path></svg>';

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

