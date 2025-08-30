import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, Phone, X } from 'lucide-react';
import { darkenColor } from '@/lib/utils';
import type { LeadInfo } from '../../../types/interfaces';

interface LeadCollectionFormProps {
  onSubmit: (leadInfo: LeadInfo) => void;
  onSkip: () => void;
  isSubmitting: boolean;
  error?: string;
  defaultTheme?: 'light' | 'dark';
  companyTheme?: any;
}

export function LeadCollectionForm({
  onSubmit,
  onSkip,
  isSubmitting,
  error,
  defaultTheme = 'light',
  companyTheme
}: LeadCollectionFormProps) {
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(leadInfo);
  };

  const handleInputChange = (field: keyof LeadInfo, value: string) => {
    setLeadInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = leadInfo.email || leadInfo.phone; // At least one contact method required

  return (
    <Card className={`w-full max-w-md mx-auto ${defaultTheme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-lg font-semibold ${defaultTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
            Contact Information
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onSkip}
            disabled={isSubmitting}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className={`text-sm ${defaultTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Please share your contact information so we can provide you with more personalized assistance.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className={`text-sm font-medium ${defaultTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <User className="inline h-4 w-4 mr-2" />
              Name (Optional)
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={leadInfo.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              disabled={isSubmitting}
              className={`${defaultTheme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'}`}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className={`text-sm font-medium ${defaultTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <Mail className="inline h-4 w-4 mr-2" />
              Email Address (Recommended)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={leadInfo.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isSubmitting}
              className={`${defaultTheme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'}`}
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className={`text-sm font-medium ${defaultTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <Phone className="inline h-4 w-4 mr-2" />
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={leadInfo.phone || ''}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              disabled={isSubmitting}
              className={`${defaultTheme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'}`}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full text-white transition-all duration-200 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              backgroundColor: companyTheme?.primaryColor || '#007bff',
              '--hover-bg-color': companyTheme?.primaryColor ? darkenColor(companyTheme.primaryColor, 20) : undefined,
            } as React.CSSProperties & { '--hover-bg-color': string }}
            onMouseEnter={(e) => {
              if (companyTheme?.primaryColor) {
                e.currentTarget.style.backgroundColor = darkenColor(companyTheme.primaryColor, 20);
              }
            }}
            onMouseLeave={(e) => {
              if (companyTheme?.primaryColor) {
                e.currentTarget.style.backgroundColor = companyTheme.primaryColor;
              }
            }}
            onFocus={(e) => {
              if (companyTheme?.primaryColor) {
                e.currentTarget.style.backgroundColor = darkenColor(companyTheme.primaryColor, 20);
              }
            }}
            onBlur={(e) => {
              if (companyTheme?.primaryColor) {
                e.currentTarget.style.backgroundColor = companyTheme.primaryColor;
              }
            }}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              'Submit Contact Information'
            )}
          </Button>

          {/* Skip Button */}
          <Button
            type="button"
            variant="outline"
            onClick={onSkip}
            disabled={isSubmitting}
            className={`w-full hover:scale-105 ${defaultTheme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}
          >
            Skip for now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 