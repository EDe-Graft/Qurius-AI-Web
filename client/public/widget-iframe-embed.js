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

    applyContainerLayout(); // set initial layout based on viewport

    // Header bar (close + fullscreen) – only meaningful on desktop, but harmless on mobile
    var header = document.createElement('div');
    header.style.height = '40px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.padding = '0 12px';
    header.style.fontSize = '12px';
    header.style.fontWeight = '500';
    header.style.background =
      'linear-gradient(to right, rgba(15,23,42,0.98), rgba(15,23,42,0.94))';
    header.style.color = '#e5e7eb';
    header.style.borderBottom = '1px solid rgba(55,65,81,0.9)';

    var title = document.createElement('div');
    title.textContent = 'Qurius AI Assistant';
    title.style.display = 'flex';
    title.style.alignItems = 'center';
    title.style.gap = '6px';
    title.style.fontSize = '12px';

    var dot = document.createElement('span');
    dot.style.display = 'inline-block';
    dot.style.width = '6px';
    dot.style.height = '6px';
    dot.style.borderRadius = '9999px';
    dot.style.backgroundColor = '#22c55e';

    var titleText = document.createElement('span');
    titleText.textContent = 'Online';
    titleText.style.opacity = '0.9';

    title.appendChild(dot);
    title.appendChild(titleText);

    var controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.alignItems = 'center';
    controls.style.gap = '6px';

    // Fullscreen toggle button (desktop only)
    var fullscreenBtn = document.createElement('button');
    fullscreenBtn.type = 'button';
    fullscreenBtn.setAttribute('aria-label', 'Toggle fullscreen');
    fullscreenBtn.style.width = '24px';
    fullscreenBtn.style.height = '24px';
    fullscreenBtn.style.borderRadius = '9999px';
    fullscreenBtn.style.border = 'none';
    fullscreenBtn.style.display = 'flex';
    fullscreenBtn.style.alignItems = 'center';
    fullscreenBtn.style.justifyContent = 'center';
    fullscreenBtn.style.cursor = 'pointer';
    fullscreenBtn.style.backgroundColor = 'transparent';
    fullscreenBtn.style.color = '#9ca3af';
    fullscreenBtn.style.transition = 'background-color 0.15s ease, color 0.15s ease';

    fullscreenBtn.onmouseenter = function () {
      fullscreenBtn.style.backgroundColor = 'rgba(31,41,55,0.85)';
      fullscreenBtn.style.color = '#e5e7eb';
    };
    fullscreenBtn.onmouseleave = function () {
      fullscreenBtn.style.backgroundColor = 'transparent';
      fullscreenBtn.style.color = '#9ca3af';
    };

    fullscreenBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>';

    fullscreenBtn.onclick = function (e) {
      e.stopPropagation();
      toggleFullscreen();
    };

    // Close button
    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close chat');
    closeBtn.style.width = '24px';
    closeBtn.style.height = '24px';
    closeBtn.style.borderRadius = '9999px';
    closeBtn.style.border = 'none';
    closeBtn.style.display = 'flex';
    closeBtn.style.alignItems = 'center';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.backgroundColor = 'transparent';
    closeBtn.style.color = '#9ca3af';
    closeBtn.style.transition = 'background-color 0.15s ease, color 0.15s ease';

    closeBtn.onmouseenter = function () {
      closeBtn.style.backgroundColor = 'rgba(31,41,55,0.85)';
      closeBtn.style.color = '#e5e7eb';
    };
    closeBtn.onmouseleave = function () {
      closeBtn.style.backgroundColor = 'transparent';
      closeBtn.style.color = '#9ca3af';
    };

    closeBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

    closeBtn.onclick = function (e) {
      e.stopPropagation();
      closeWidget();
    };

    controls.appendChild(fullscreenBtn);
    controls.appendChild(closeBtn);

    header.appendChild(title);
    header.appendChild(controls);

    // Iframe
    iframe = document.createElement('iframe');
    iframe.id = 'qurius-widget-iframe';
    iframe.src = iframeSrc;
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100% - 40px)'; // minus header height
    iframe.style.border = 'none';
    iframe.style.display = 'block';

    container.appendChild(header);
    container.appendChild(iframe);
    document.body.appendChild(container);
  }

  function applyContainerLayout() {
    if (!container) return;

    isMobile = window.innerWidth <= 768;

    if (isFullscreen) {
      // Fullscreen mode - cover entire viewport
      container.style.top = '0';
      container.style.left = '0';
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

  function handleResize() {
    applyContainerLayout();
  }

  // ---- Init ----
  function init() {
    try {
      createLauncherButton();
      createContainerAndIframe();
      window.addEventListener('resize', handleResize);
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

