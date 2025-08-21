# Puppeteer Integration for SPA Support

## Overview

The Qurius Crawler now supports Single Page Applications (SPAs) using Puppeteer as a fallback when Cheerio fails to extract content.

## Features

- **Automatic Fallback**: Uses Puppeteer when Cheerio extraction returns no content
- **SPA Detection**: Automatically detects React/Vue/Angular applications
- **Performance Optimized**: Only uses Puppeteer when necessary
- **Configurable**: Can be enabled/disabled via configuration

## Installation

```bash
cd server
npm install puppeteer
```

## Configuration

The crawler can be configured with Puppeteer options:

```javascript
const crawler = new QuriusCrawler({
  enablePuppeteer: true,        // Enable Puppeteer (default: true)
  puppeteerTimeout: 30000,      // Timeout in ms (default: 30000)
  maxPages: 50,                 // Max pages to crawl
  maxDepth: 3,                  // Max crawl depth
  delay: 1000                   // Delay between requests
})
```

## How It Works

1. **Cheerio First**: Attempts to extract content using Cheerio (fast, static HTML)
2. **Content Check**: If no content is found, assumes it's an SPA
3. **Puppeteer Fallback**: Launches headless browser to render JavaScript
4. **Content Extraction**: Extracts content from the fully rendered page
5. **Database Storage**: Saves content chunks with embeddings for RAG

## Supported SPA Frameworks

- ✅ React
- ✅ Vue.js
- ✅ Angular
- ✅ Next.js
- ✅ Nuxt.js
- ✅ Svelte
- ✅ Any JavaScript-heavy application

## Performance Considerations

- **Puppeteer is slower** than Cheerio (browser startup + rendering time)
- **Memory usage** increases with browser instances
- **Only used when needed** - static sites still use Cheerio
- **Configurable timeouts** to prevent hanging

## Troubleshooting

### Puppeteer Installation Issues

```bash
# If you get installation errors, try:
npm install puppeteer --unsafe-perm=true

# Or use a different browser:
npm install puppeteer-core
```

### Memory Issues

If you experience memory issues with many concurrent crawls:

```javascript
const crawler = new QuriusCrawler({
  enablePuppeteer: true,
  maxPages: 10,  // Reduce max pages
  maxDepth: 2    // Reduce depth
})
```

### Timeout Issues

For slow-loading SPAs:

```javascript
const crawler = new QuriusCrawler({
  puppeteerTimeout: 60000  // Increase timeout to 60 seconds
})
```

## Testing

Use the test script to verify Puppeteer functionality:

```bash
cd server
node test-puppeteer-crawler.js
```

This will test both static and SPA websites to ensure both Cheerio and Puppeteer work correctly.

## API Usage

The crawler API automatically uses Puppeteer when needed:

```bash
POST /api/crawler/start
{
  "companyId": "your-company-id",
  "websiteUrl": "https://your-spa-website.com"
}
```

The crawler will automatically detect if Puppeteer is needed and use it accordingly. 