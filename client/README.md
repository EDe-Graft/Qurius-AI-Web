# 🚀 Frontend Deployment Guide

## Deploy to Vercel

### 1. Prepare Your Repository
Make sure your `client/` folder is in your GitHub repository.

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3. Add Environment Variables
In Vercel dashboard, add:
```env
VITE_BACKEND_URL=https://your-backend.onrender.com
VITE_SUPABASE_PROJECT_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Deploy
Click "Deploy" and wait for deployment.

### 5. Update Embed Script
After deployment, update `public/embed.js`:
```javascript
const CONFIG = {
  scriptUrl: 'https://your-app.vercel.app/chat-widget.js',
  cssUrl: 'https://your-app.vercel.app/chat-widget.css',
  apiUrl: 'https://your-backend.onrender.com',
  defaultTheme: 'light'
};
```

## Build Widget
```bash
cd client
npm run build:widget
```

## Test Widget Embedding
Create a test HTML file:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test Widget</title>
</head>
<body>
    <h1>Test Page</h1>
    <script src="https://your-app.vercel.app/embed.js" 
            data-company="Test Company" 
            data-theme="light">
    </script>
</body>
</html>
```

## Environment Variables
Create `.env` file in client folder:
```env
VITE_BACKEND_URL=http://localhost:3001
VITE_SUPABASE_PROJECT_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
``` 