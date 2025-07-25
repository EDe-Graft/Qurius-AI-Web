// services/themeService.ts
import { supabase } from "../src/lib/supabase";
import type { CompanyTheme } from "types/interfaces";

export class ThemeService {
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
    const { data: company } = await supabase
      .from('companies')
      .select('theme, logo_url')
      .eq('name', companyName)
      .single();
    
    const primaryColor = company?.theme || '#3B82F6';
    const logoUrl = company?.logo_url || '';
    return this.generateThemeFromPrimary(primaryColor, isDark, logoUrl);
  }
}