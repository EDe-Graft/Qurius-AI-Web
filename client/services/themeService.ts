// services/themeService.ts
import axios from 'axios';
import type { CompanyTheme } from "types/interfaces";

export class ThemeService {

  static BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  
  // Generate theme from primary color
  static generateThemeFromPrimary(primaryColor: string, isDark: boolean, logoUrl?: string): CompanyTheme {
    return {
      primaryColor,
      logoUrl,
      backgroundColor: isDark ? '#1F2937' : '#F3F4F6',
      textColor: isDark ? '#F9FAFB' : '#1F2937',
      borderColor: isDark ? '#374151' : '#E5E7EB',
      accentColor: isDark ? '#10B981' : '#10B981', // Keep accent consistent
    };
  }

  static async getCompanyTheme(companyName: string, isDark: boolean): Promise<CompanyTheme> {
    try {
      // Make API call to backend to get company theme
        const response = await axios.get(`${this.BACKEND_URL}/api/companies/${encodeURIComponent(companyName)}/theme`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const company = response.data;
      const primaryColor = company?.theme || '#3B82F6';
      const logoUrl = company?.logo_url || '';
      return this.generateThemeFromPrimary(primaryColor, isDark, logoUrl);
    } catch (error) {
      console.error('Error fetching company theme:', error);
      // Return default theme if API call fails
      return this.generateThemeFromPrimary('#3B82F6', isDark, '');
    }
  }
}