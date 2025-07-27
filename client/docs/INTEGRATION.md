# Qurius-AI Chat Widget Integration Guide

Welcome to the Qurius-AI Chat Widget integration guide! This document will help you add our intelligent chat widget to your website in just a few minutes.

## Quick Start

Add the chat widget to your website with just one line of code:

```html
<script src="https://qurius-ai.vercel.app/embed.js" 
        data-company="Your Company Name" 
        data-theme="light">
</script>
```

## Installation Options

### Option 1: Simple Integration (Recommended)

Add this script tag to your HTML `<head>` or before the closing `</body>` tag:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Website</title>
</head>
<body>
    <!-- Your website content -->
    
    <!-- Add the chat widget -->
    <script src="https://qurius-ai.vercel.app/embed.js" 
            data-company="Your Company Name" 
            data-theme="light">
    </script>
</body>
</html>
```

### Option 2: Programmatic Integration

For more control, you can initialize the widget programmatically:

```html
<script src="https://qurius-ai.vercel.app/embed.js"></script>
<script>
    // Initialize the widget
    window.QuriusAI.init('Your Company Name', {
        theme: 'light',
        position: 'bottom-right',
        apiUrl: 'https://qurius-ai.onrender.com'
    });
</script>
```

## Configuration Options

### Basic Configuration

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-company` | string | Required | Your company name |
| `data-theme` | string | `light` | Widget theme (`light` or `dark`) |

### Advanced Configuration

When using programmatic initialization, you can pass additional options:

```javascript
window.QuriusAI.init('Your Company Name', {
    theme: 'dark',                    // 'light' or 'dark'
    position: 'bottom-left',          // 'bottom-right' or 'bottom-left'
    apiUrl: 'https://qurius-ai.onrender.com',  // Your API endpoint
    supabaseUrl: 'your-supabase-url', // Optional: Custom Supabase URL
    supabaseAnonKey: 'your-key'       // Optional: Custom Supabase key
});
```

## API Reference

### Global Object: `window.QuriusAI`

#### Methods

##### `init(companyName, options)`
Initializes the chat widget.

**Parameters:**
- `companyName` (string): Your company name
- `options` (object): Configuration options

**Example:**
```javascript
window.QuriusAI.init('Acme Corp', {
    theme: 'dark',
    position: 'bottom-left'
});
```

##### `show()`
Shows the chat widget.

**Example:**
```javascript
window.QuriusAI.show();
```

##### `hide()`
Hides the chat widget.

**Example:**
```javascript
window.QuriusAI.hide();
```

#### Properties

##### `config`
Returns the current configuration.

**Example:**
```javascript
console.log(window.QuriusAI.config);
```

## Customization

### Themes

The widget supports two themes:

- **Light Theme** (`data-theme="light"`): Clean, professional look
- **Dark Theme** (`data-theme="dark"`): Modern, sleek appearance

### Positioning

The widget can be positioned in two locations:

- **Bottom Right** (default): `position: 'bottom-right'`
- **Bottom Left**: `position: 'bottom-left'`

## Examples

### Basic Integration

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my awesome website with integrated chat support.</p>
    
    <!-- Chat Widget -->
    <script src="https://qurius-ai.vercel.app/embed.js" 
            data-company="My Awesome Company" 
            data-theme="light">
    </script>
</body>
</html>
```

### Advanced Integration

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my awesome website with integrated chat support.</p>
    
    <!-- Chat Widget -->
    <script src="https://qurius-ai.vercel.app/embed.js"></script>
    <script>
        // Initialize with custom options
        window.QuriusAI.init('My Awesome Company', {
            theme: 'dark',
            position: 'bottom-left',
            apiUrl: 'https://qurius-ai.onrender.com'
        });
        
        // Show widget after 5 seconds
        setTimeout(() => {
            window.QuriusAI.show();
        }, 5000);
    </script>
</body>
</html>
```

### React Integration

```jsx
import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        // Load the widget script
        const script = document.createElement('script');
        script.src = 'https://qurius-ai.vercel.app/embed.js';
        script.onload = () => {
            // Initialize the widget
            window.QuriusAI.init('My React App', {
                theme: 'light'
            });
        };
        document.head.appendChild(script);
        
        return () => {
            // Cleanup if needed
            if (window.QuriusAI) {
                window.QuriusAI.hide();
            }
        };
    }, []);
    
    return (
        <div>
            <h1>My React App</h1>
            <p>Chat widget will appear in the bottom-right corner.</p>
        </div>
    );
}

export default App;
```

### Vue.js Integration

```vue
<template>
    <div>
        <h1>My Vue App</h1>
        <p>Chat widget will appear in the bottom-right corner.</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        // Load the widget script
        const script = document.createElement('script');
        script.src = 'https://qurius-ai.vercel.app/embed.js';
        script.onload = () => {
            // Initialize the widget
            window.QuriusAI.init('My Vue App', {
                theme: 'light'
            });
        };
        document.head.appendChild(script);
    }
}
</script>
```

## Troubleshooting

### Common Issues

#### Widget Not Appearing
1. Check that the script URL is correct
2. Ensure your website allows external scripts
3. Check browser console for errors
4. Verify that `data-company` is set

#### Widget Not Responding
1. Check your internet connection
2. Verify the API URL is accessible
3. Check browser console for network errors
4. Ensure your Supabase configuration is correct

#### Styling Conflicts
1. The widget uses `z-index: 9999` to appear above other content
2. If you have conflicting styles, the widget may not appear properly
3. Check for CSS conflicts with your website's styles

### Debug Mode

Enable debug mode to see detailed logs:

```javascript
// Add this before initializing the widget
window.QuriusAIDebug = true;

window.QuriusAI.init('Your Company', {
    theme: 'light'
});
```

### Browser Support

The widget supports all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Support

If you encounter any issues:

1. **Check the documentation** above
2. **Enable debug mode** to see detailed logs
3. **Contact support** at support@qurius-ai.com
4. **Check our status page** at status.qurius-ai.com

## Changelog

### Version 1.0.0
- Initial release
- Light and dark themes
- Bottom-right and bottom-left positioning
- Basic chat functionality
- Custom branding support

## License

This widget is provided under the MIT License. See LICENSE file for details. 