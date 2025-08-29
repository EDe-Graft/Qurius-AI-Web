# Section Scroll Handler Implementation Guide

## 🎯 Overview

This guide explains how to implement automatic section scrolling on your website when users arrive from external links (like the Qurius chatbot widget) with anchor tags.

## 📁 Files Created

1. **`section-scroll-handler.js`** - The main JavaScript handler
2. **`section-scroll-demo.html`** - Demo page for testing
3. **`SECTION_SCROLL_IMPLEMENTATION.md`** - This guide

## 🚀 Quick Implementation

### Step 1: Add the Script to Your Website

Add this line to your website's `<head>` or before `</body>`:

```html
<script src="path/to/section-scroll-handler.js"></script>
```

### Step 2: Ensure Your Sections Have IDs

Make sure your HTML sections have the correct IDs that match the anchor links:

```html
<!-- This will work with: https://your-site.com/#pricing -->
<div id="pricing" class="pricing-section">
    <h2>Pricing Plans</h2>
    <!-- Your pricing content -->
</div>

<!-- This will work with: https://your-site.com/#contact -->
<div id="contact" class="contact-section">
    <h2>Contact Us</h2>
    <!-- Your contact content -->
</div>
```

### Step 3: Test the Implementation

Visit your website with a hash in the URL:
```
https://your-site.com/#pricing
```

The page should automatically scroll to the pricing section.

## ⚙️ Configuration Options

You can customize the behavior by modifying the `config` object in the script:

```javascript
const config = {
    scrollDelay: 100,        // Delay before scrolling (ms)
    scrollBehavior: 'smooth', // 'smooth' or 'auto'
    scrollOffset: 80,        // Offset from top (for fixed headers)
    retryAttempts: 3,        // Number of retry attempts if element not found
    retryDelay: 500         // Delay between retries (ms)
};
```

## 🎨 Visual Features

The script includes:

- **Smooth scrolling** animation
- **Visual highlight** effect on the target section
- **Offset support** for fixed headers
- **Retry mechanism** for dynamic content
- **Multiple selector support** (ID, class, data attributes)

## 🔧 Advanced Usage

### Manual Scroll Control

You can manually trigger scrolling from JavaScript:

```javascript
// Scroll to a specific section
window.SectionScrollHandler.scrollToSection('#pricing');

// Find an element
const element = window.SectionScrollHandler.findElement('#pricing');

// Scroll to an element
window.SectionScrollHandler.scrollToElement(element, 100);
```

### Multiple Selector Support

The script tries multiple selectors to find elements:

1. `#pricing` - Direct ID match
2. `[id="pricing"]` - ID attribute match
3. `[name="pricing"]` - Name attribute match
4. `[data-section="pricing"]` - Data attribute match
5. `.pricing` - Class match (fallback)
6. `[class*="pricing"]` - Partial class match

## 🧪 Testing

### Test with Demo Page

1. Open `section-scroll-demo.html` in a browser
2. Click the demo links or visit with a hash:
   ```
   file:///path/to/section-scroll-demo.html#pricing
   ```
3. Check the browser console for debug messages

### Test with Your Website

1. Add the script to your website
2. Visit with different hashes:
   ```
   https://your-site.com/#pricing
   https://your-site.com/#contact
   https://your-site.com/#about
   ```
3. Verify smooth scrolling and highlighting

## 🐛 Troubleshooting

### Section Not Found

If a section isn't scrolling:

1. **Check the ID**: Ensure the HTML element has the correct ID
2. **Check the hash**: Verify the URL hash matches the element ID
3. **Check console**: Look for error messages in browser console
4. **Try different selectors**: Use data attributes or classes as fallbacks

### Scroll Offset Issues

If the scroll position is wrong:

1. **Adjust offset**: Modify `scrollOffset` in the config
2. **Check fixed headers**: Ensure the offset accounts for fixed navigation
3. **Test on mobile**: Mobile browsers may need different offsets

### Performance Issues

If scrolling is slow or unreliable:

1. **Reduce retry attempts**: Lower `retryAttempts` in config
2. **Increase delay**: Raise `retryDelay` for slower pages
3. **Check page load**: Ensure the script runs after DOM is ready

## 📱 Mobile Compatibility

The script works on mobile devices, but consider:

- **Touch scrolling**: May interfere with programmatic scrolling
- **Viewport issues**: Mobile browsers handle scrolling differently
- **Performance**: Mobile devices may need longer delays

## 🔒 Security Considerations

- The script only reads the URL hash and scrolls to elements
- No external data is processed
- No user data is collected or transmitted
- Safe to use on any website

## 📞 Support

If you need help implementing this on your website:

1. Check the browser console for error messages
2. Verify your HTML structure matches the expected format
3. Test with the demo page first
4. Contact support if issues persist

## 🎉 Success Indicators

You'll know it's working when:

- ✅ Links from the chatbot scroll to the correct section
- ✅ Sections are highlighted briefly when scrolled to
- ✅ Smooth scrolling animation works
- ✅ Console shows success messages
- ✅ Works on both desktop and mobile

---

**Note**: This implementation works with any external link that includes anchor tags, not just the Qurius chatbot. It's a general-purpose solution for section scrolling. 