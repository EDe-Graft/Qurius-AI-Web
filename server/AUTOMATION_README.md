# Qurius-AI Automation System

## Overview

The Qurius-AI Automation System provides intelligent, scheduled crawling capabilities with change detection to automatically keep your knowledge base up-to-date. The system includes:

- **Automated Crawling**: Scheduled website crawling based on frequency (daily/weekly/monthly)
- **Change Detection**: Intelligent content change detection to avoid unnecessary crawls
- **Performance Analytics**: Comprehensive monitoring and analytics
- **Admin Interface**: Full web-based management interface

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Scheduler     │    │ Change Detection │    │   Crawler       │
│   Service       │───▶│   Service        │───▶│   Service       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Database      │    │   Analytics      │    │   Admin UI      │
│   Functions     │    │   Storage        │    │   Interface     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Quick Start

### 1. Database Setup

Run the automation schema to create required tables and functions:

```sql
-- Execute the crawler-schema.sql file
\i server/crawler/crawler-schema.sql
```

### 2. Environment Configuration

Add these environment variables to your `.env` file:

```bash
# Automation Configuration
AUTOMATION_ENABLED=true
AUTOMATION_CHECK_INTERVAL=5  # minutes
AUTOMATION_MAX_CONCURRENT=3
AUTOMATION_BATCH_SIZE=10

# Test Configuration (optional)
TEST_COMPANY_ID=your-test-company-id
```

### 3. Start the System

The automation system starts automatically with the server:

```bash
npm start
```

The scheduler will start automatically and begin checking for companies due for crawling every 5 minutes.

## Configuration

### Automation Settings

Configure automation behavior through the database or API:

```javascript
// Example: Update automation configuration
const config = {
  change_detection: {
    threshold: 0.1,           // 10% change threshold
    min_content_length: 100   // Minimum content length
  },
  scheduler: {
    check_interval: 5,        // Check every 5 minutes
    max_concurrent: 3,        // Max 3 concurrent crawls
    batch_size: 10           // Process 10 companies at a time
  }
}
```

### Schedule Configuration

Each crawl schedule can be configured with:

- **Frequency**: `daily`, `weekly`, `monthly`
- **Max Pages**: Maximum pages to crawl (default: 25)
- **Max Depth**: Crawl depth (default: 1)
- **Delay**: Delay between requests in ms (default: 1000)
- **Change Threshold**: Content change threshold (default: 0.1)

## API Reference

### Schedule Management

#### Create Schedule
```http
POST /api/automation/schedules
Content-Type: application/json

{
  "company_id": "uuid",
  "base_url": "https://example.com",
  "frequency": "weekly",
  "max_pages": 25,
  "max_depth": 1,
  "delay_ms": 1000,
  "change_threshold": 0.1,
  "is_active": true
}
```

#### Get Schedules
```http
GET /api/automation/schedules
GET /api/automation/schedules?company_id=uuid
GET /api/automation/schedules?is_active=true
```

#### Update Schedule
```http
PUT /api/automation/schedules/:id
Content-Type: application/json

{
  "frequency": "daily",
  "max_pages": 50,
  "is_active": false
}
```

#### Delete Schedule
```http
DELETE /api/automation/schedules/:id
```

### Scheduler Control

#### Get Status
```http
GET /api/automation/status
```

Response:
```json
{
  "isRunning": true,
  "activeCrawls": 2,
  "maxConcurrentCrawls": 3,
  "checkIntervalMinutes": 5,
  "batchSize": 10
}
```

#### Control Scheduler
```http
POST /api/automation/scheduler
Content-Type: application/json

{
  "action": "start"  // or "stop"
}
```

### Analytics

#### Get Dashboard Data
```http
GET /api/automation/dashboard
```

#### Get Company Analytics
```http
GET /api/automation/analytics/:companyId?days=30
```

#### Get Configuration
```http
GET /api/automation/config
```

#### Update Configuration
```http
PUT /api/automation/config
Content-Type: application/json

{
  "change_detection.threshold": 0.15,
  "scheduler.check_interval": 10
}
```

### Manual Triggers

#### Trigger Manual Crawl
```http
POST /api/automation/trigger/:companyId
Content-Type: application/json

{
  "force": false  // Skip change detection if true
}
```

## Database Schema

### Tables

#### `crawl_schedules`
Stores automated crawl configurations.

```sql
CREATE TABLE crawl_schedules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  base_url TEXT NOT NULL,
  frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'monthly')),
  max_pages INTEGER DEFAULT 25,
  max_depth INTEGER DEFAULT 1,
  delay_ms INTEGER DEFAULT 1000,
  change_threshold DECIMAL DEFAULT 0.1,
  is_active BOOLEAN DEFAULT true,
  next_crawl TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### `content_hashes`
Tracks content changes for change detection.

```sql
CREATE TABLE content_hashes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  content_length INTEGER,
  crawl_session_id UUID REFERENCES crawl_sessions(id),
  last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(company_id, url)
);
```

#### `automation_analytics`
Stores automation performance metrics.

```sql
CREATE TABLE automation_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  crawl_session_id UUID REFERENCES crawl_sessions(id),
  trigger_type TEXT NOT NULL,
  content_changes_detected INTEGER DEFAULT 0,
  new_faqs_generated INTEGER DEFAULT 0,
  execution_time_ms INTEGER,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### `automation_config`
Centralized configuration storage.

```sql
CREATE TABLE automation_config (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Functions

#### `get_companies_due_for_crawling()`
Returns companies that are due for crawling based on their schedule.

#### `update_next_crawl_date(schedule_id, frequency)`
Updates the next crawl date based on frequency.

#### `get_automation_statistics(days_back)`
Returns automation statistics for the specified period.

## Testing

### Run Automation Tests

```bash
# Run comprehensive automation tests
node server/test-automation.js

# Test specific components
node -e "
import AutomationTester from './server/test-automation.js'
const tester = new AutomationTester()
tester.testDatabaseFunctions()
"
```

### Test Coverage

The test suite covers:

- ✅ Database functions and schema
- ✅ Change detection service
- ✅ Scheduler service
- ✅ API endpoints
- ✅ Component integration
- ✅ Error handling

## Monitoring & Troubleshooting

### Logs

The automation system provides detailed logging:

```bash
# Scheduler logs
🚀 Starting Crawl Scheduler...
✅ Scheduler started - checking every 5 minutes
🔍 Checking for companies due for crawling...
📋 Found 3 companies due for crawling
🕷️ Starting automated crawl for Company Name (https://example.com)
✅ Automated crawl completed for Company Name

# Change detection logs
🔍 Checking for content changes: https://example.com
📊 Change detection results for https://example.com:
  - URLs checked: 10
  - URLs with changes: 2
  - Change percentage: 20.0%
  - Threshold: 10.0%
  - Significant changes: Yes
```

### Common Issues

#### Scheduler Not Starting
```bash
# Check if scheduler is running
curl http://localhost:3001/api/automation/status

# Check logs for errors
tail -f logs/server.log | grep -i scheduler
```

#### Change Detection Not Working
```bash
# Verify content hashes are being stored
SELECT COUNT(*) FROM content_hashes WHERE company_id = 'your-company-id';

# Check change detection configuration
SELECT * FROM automation_config WHERE key LIKE 'change_detection%';
```

#### Crawls Not Triggering
```bash
# Check if companies are due for crawling
SELECT * FROM crawl_schedules WHERE next_crawl <= NOW() AND is_active = true;

# Verify schedule configuration
SELECT company_id, frequency, next_crawl, is_active FROM crawl_schedules;
```

### Performance Optimization

#### Database Indexes
Ensure these indexes exist for optimal performance:

```sql
CREATE INDEX idx_crawl_schedules_next_crawl ON crawl_schedules(next_crawl);
CREATE INDEX idx_crawl_schedules_is_active ON crawl_schedules(is_active);
CREATE INDEX idx_content_hashes_company_id ON content_hashes(company_id);
CREATE INDEX idx_automation_analytics_created_at ON automation_analytics(created_at);
```

#### Configuration Tuning

For high-traffic systems:

```javascript
// Increase batch processing
AUTOMATION_BATCH_SIZE=20

// Reduce check frequency
AUTOMATION_CHECK_INTERVAL=10

// Increase concurrent crawls
AUTOMATION_MAX_CONCURRENT=5
```

## Security Considerations

### Access Control
- All automation endpoints require super admin privileges
- API keys and tokens are validated for all requests
- Database functions use RLS (Row Level Security)

### Rate Limiting
- Built-in rate limiting prevents abuse
- Configurable delays between requests
- Concurrent crawl limits prevent server overload

### Data Privacy
- Content hashes are stored securely
- No raw content is stored in analytics
- Company data is isolated and protected

## Deployment

### Production Checklist

- [ ] Database schema deployed
- [ ] Environment variables configured
- [ ] Automation enabled in production
- [ ] Monitoring and alerting set up
- [ ] Backup strategy implemented
- [ ] Performance testing completed

### Environment Variables

```bash
# Required
SUPABASE_PROJECT_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-key
BACKEND_URL=https://your-backend-url.com

# Optional
AUTOMATION_ENABLED=true
AUTOMATION_CHECK_INTERVAL=5
AUTOMATION_MAX_CONCURRENT=3
AUTOMATION_BATCH_SIZE=10
```

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Review the logs for error messages
3. Run the test suite to identify issues
4. Contact the development team with specific error details

## Changelog

### v1.0.0 (Current)
- Initial automation system release
- Scheduled crawling with change detection
- Comprehensive admin interface
- Performance analytics and monitoring
- Full API documentation and testing suite 