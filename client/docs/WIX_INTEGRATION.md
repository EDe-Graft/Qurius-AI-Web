# Wix Integration Guide

Qurius AI provides two integration options for Wix websites, each with different benefits and trade-offs.

## 🎯 Integration Options

### Option 1: Iframe Integration (Recommended)

**Best for:** Full feature experience, easy maintenance, consistent updates

#### Benefits:
- ✅ **Full React Widget Experience** - All features work perfectly
- ✅ **Automatic Updates** - No need to update code on Wix
- ✅ **Complete Functionality** - Themes, languages, streaming, analytics
- ✅ **Better Performance** - React optimizations and virtual DOM
- ✅ **Easier Maintenance** - Single codebase for all platforms

#### Implementation:

1. **Add HTML Element in Wix:**
   ```html
   <div id="qurius-chat-container" style="width: 400px; height: 600px; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.15);">
   </div>
   ```

2. **Add Custom Code in Wix:**
   ```javascript
   // Add this in Wix Custom Code section
   window.addEventListener('load', function() {
     const container = document.getElementById('qurius-chat-container');
     if (container) {
       const iframe = document.createElement('iframe');
       iframe.src = 'https://qurius.app/widget-iframe.html?company=YOUR_COMPANY_NAME&id=YOUR_COMPANY_ID&key=YOUR_WIDGET_KEY&plan=YOUR_PLAN&theme=light';
       iframe.width = '100%';
       iframe.height = '100%';
       iframe.style.border = 'none';
       iframe.style.borderRadius = '12px';
       iframe.allow = 'microphone; camera';
       container.appendChild(iframe);
     }
   });
   ```

#### Parameters:
- `company`: Your company name
- `id`: Your company ID from Qurius dashboard
- `key`: Your widget key from Qurius dashboard
- `plan`: Your plan (free, pro, enterprise)
- `theme`: Widget theme (light, dark)

### Option 2: Wix Widget (Current)

**Best for:** Maximum Wix compatibility, seamless styling integration

#### Benefits:
- ✅ **Wix Compatible** - Works without domain whitelisting
- ✅ **Seamless Integration** - Can match Wix site styling perfectly
- ✅ **Lightweight** - No React overhead
- ✅ **Direct Access** - Can interact with Wix page elements

#### Limitations:
- ❌ **Limited Features** - Missing some React widget functionality
- ❌ **Separate Codebase** - Requires maintenance of Wix-specific code
- ❌ **Manual Updates** - Need to update Wix code for new features

#### Implementation:

1. **Add Custom Code in Wix:**
   ```html
   <script src="https://qurius.app/wix-widget.js" 
     data-company="YOUR_COMPANY_NAME" 
     data-id="YOUR_COMPANY_ID" 
     data-key="YOUR_WIDGET_KEY"
     data-plan="YOUR_PLAN"
     data-theme="light">
   </script>
   ```

## 🔧 Setup Instructions

### For Iframe Integration:

1. **Contact Wix Support** (if needed):
   - Request to whitelist `qurius.app` for iframe embedding
   - This is usually not required but may be needed for some Wix plans

2. **Add to Wix Page:**
   - Go to your Wix page editor
   - Add an HTML element where you want the chat widget
   - Use the implementation code above

3. **Test the Integration:**
   - Preview your Wix site
   - Verify the chat widget appears and functions correctly
   - Test all features (messaging, themes, etc.)

### For Wix Widget Integration:

1. **Add Custom Code:**
   - Go to your Wix page editor
   - Add custom code section
   - Paste the script tag with your parameters

2. **Test the Integration:**
   - Preview your Wix site
   - Verify the chat widget appears
   - Test basic messaging functionality

## 🎨 Customization

### Iframe Styling:
```css
/* Custom iframe styling */
#qurius-chat-container {
  width: 400px;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  margin: 20px;
}

/* Responsive design */
@media (max-width: 480px) {
  #qurius-chat-container {
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
  }
}
```

### Wix Widget Styling:
The Wix widget automatically adapts to your site's styling and can be customized through CSS overrides if needed.

## 🚀 Recommendation

**For most customers, we recommend the iframe approach** because:

1. **Full Feature Experience** - You get the complete React widget with all features
2. **Automatic Updates** - New features and improvements are automatically available
3. **Better Performance** - React's optimizations provide smoother experience
4. **Easier Support** - Single codebase means fewer platform-specific issues

**Use the Wix widget only if:**
- You need maximum Wix compatibility
- You want seamless styling integration
- You have specific Wix platform requirements

## 📞 Support

If you encounter any issues with either integration method:

1. **Check the browser console** for error messages
2. **Verify your parameters** (company ID, widget key, etc.)
3. **Test in different browsers** to ensure compatibility
4. **Contact Qurius support** with specific error details

## 🔄 Migration

You can easily switch between approaches by:
1. Removing the current implementation
2. Adding the new implementation
3. Testing thoroughly before going live

Both approaches use the same backend API, so your data and analytics remain consistent. 