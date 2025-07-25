# 🚀 Backend Deployment Guide

## Deploy to Render

### 1. Prepare Your Repository
Make sure your `server/` folder is in your GitHub repository.

### 2. Deploy to Render
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `qurius-backend`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`

### 3. Add Environment Variables
In Render dashboard, add these environment variables:
```env
JINA_API_KEY=your-jina-api-key
OPENROUTER_API_KEY=your-openrouter-key
ALLOWED_ORIGINS=https://your-frontend-url.vercel.app
SOURCE_URL=https://your-frontend-url.vercel.app
```

### 4. Deploy
Click "Create Web Service" and wait for deployment.

### 5. Test Your Backend
```bash
curl https://your-backend.onrender.com/api/health
```

## Local Testing
```bash
cd server
npm install
npm run dev
```

## Environment Variables
Create `.env` file in server folder:
```env
JINA_API_KEY=your-jina-api-key
OPENROUTER_API_KEY=your-openrouter-key
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
SOURCE_URL=http://localhost:3000
``` 