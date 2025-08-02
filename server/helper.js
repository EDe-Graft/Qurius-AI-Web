// Helper function to calculate time ago
export function getTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInMs = now - past;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInWeeks < 4) {
      return `${diffInWeeks} weeks ago`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths} months ago`;
    } else {
      return `${Math.floor(diffInMonths / 12)} years ago`;
    }
  }
  
// Helper function to convert text to proper Title Case
export function toTitleCase(text) {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to format date and time in readable format
export function formatReadableDateTime(date, options = {}) {
    const defaultOptions = {
      includeTimezone: true,
      timezone: 'ET', // Default to Eastern Time
      ...options
    };
  
    try {
      const dateObj = new Date(date);
      
      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
      }
  
      // Format the date parts
      const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
      const monthName = dateObj.toLocaleDateString('en-US', { month: 'short' });
      const day = dateObj.getDate().toString().padStart(2, '0');
      
      // Format the time
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      
      // Build the formatted string
      let formatted = `${dayName} ${monthName} ${day}, ${displayHours}:${minutes} ${ampm}`;
      
      // Add timezone if requested
      if (defaultOptions.includeTimezone) {
        formatted += ` ${defaultOptions.timezone}`;
      }
      
      return formatted;
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  }
  
  // Helper function to get current timezone abbreviation
  export function getCurrentTimezone() {
    const date = new Date();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Map common timezones to abbreviations
    const timezoneMap = {
      'America/New_York': 'ET',
      'America/Chicago': 'CT',
      'America/Denver': 'MT',
      'America/Los_Angeles': 'PT',
      'America/Phoenix': 'MT',
      'America/Anchorage': 'AKT',
      'Pacific/Honolulu': 'HT',
      'Europe/London': 'GMT',
      'Europe/Paris': 'CET',
      'Europe/Berlin': 'CET',
      'Asia/Tokyo': 'JST',
      'Asia/Shanghai': 'CST',
      'Australia/Sydney': 'AEST',
      'Australia/Perth': 'AWST'
    };
    
    return timezoneMap[timezone] || 'UTC';
  }
  
  
    // Helper functions
  export function generateTemporaryPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }