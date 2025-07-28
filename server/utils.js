// Utility function to parse theme JSON
export function parseTheme(theme) {
  if (typeof theme === 'string') {
    try {
      return JSON.parse(theme);
    } catch (error) {
      console.error('Error parsing theme JSON:', error);
      return {
        primaryColor: "#3B82F6",
        backgroundColor: "#FFFFFF",
        textColor: "#1F2937"
      };
    }
  }
  return theme;
}

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