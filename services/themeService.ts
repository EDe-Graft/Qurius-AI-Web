// services/themeService.ts
import { supabase } from "../src/lib/supabase";

export interface CompanyTheme {
  primaryColor: string; // Only this from company
  // System colors for consistency
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  accentColor: string;
}


export class ThemeService {
  static generateThemeFromPrimary(primaryColor: string, isDark: boolean): CompanyTheme {
    return {
      primaryColor,
      backgroundColor: isDark ? '#1F2937' : '#F3F4F6',
      textColor: isDark ? '#F9FAFB' : '#1F2937',
      borderColor: isDark ? '#374151' : '#E5E7EB',
      accentColor: isDark ? '#10B981' : '#10B981', // Keep accent consistent
    };
  }

  static async getCompanyTheme(companyName: string, isDark: boolean): Promise<CompanyTheme> {
    const { data: company } = await supabase
      .from('companies')
      .select('theme')
      .eq('name', companyName)
      .single();
    
    const primaryColor = company?.theme || '#3B82F6';
    return this.generateThemeFromPrimary(primaryColor, isDark);
  }
}