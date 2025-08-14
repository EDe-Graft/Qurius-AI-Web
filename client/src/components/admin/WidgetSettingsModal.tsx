import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Save, X } from 'lucide-react';
import { CompanyService } from '@/services/companyService';

interface WidgetTheme {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
}

interface WidgetSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyId: string;
  initialTheme: WidgetTheme;
  onThemeUpdate?: (theme: WidgetTheme) => void;
}

export function WidgetSettingsModal({ 
  isOpen, 
  onClose, 
  companyId, 
  initialTheme, 
  onThemeUpdate 
}: WidgetSettingsModalProps) {
  const [widgetTheme, setWidgetTheme] = useState<WidgetTheme>(initialTheme);
  const [savingTheme, setSavingTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top when modal opens with loading screen
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Hide loading screen after scroll animation completes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust timing as needed
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSaveTheme = async () => {
    try {
      setSavingTheme(true);
      // Update company theme
      await CompanyService.updateCompany(companyId, {
        theme: widgetTheme
      });
      
      // Call parent callback if provided
      if (onThemeUpdate) {
        onThemeUpdate(widgetTheme);
      }
      
      alert('Widget theme updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error saving theme:', error);
      alert(`Failed to save theme: ${error}`);
    } finally {
      setSavingTheme(false);
    }
  };

  const ColorPicker = ({ 
    label, 
    color, 
    onChange 
  }: { 
    label: string;
    color: string;
    onChange: (color: string) => void;
  }) => (
    <div className="flex items-center space-x-3">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[120px]">
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="#000000"
        />
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-[60]">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mt-50 flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Loading...</p>
          </div>
        </div>
      )}
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4 my-15 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Palette className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Widget Theme Configuration
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {/* Theme Preview */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Theme Preview
              </h3>
              <div 
                className="w-full h-20 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center"
                style={{ backgroundColor: widgetTheme.backgroundColor }}
              >
                <div 
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ 
                    backgroundColor: widgetTheme.primaryColor,
                    color: widgetTheme.textColor
                  }}
                >
                  Sample Widget Button
                </div>
              </div>
            </div>

            {/* Color Configuration */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Color Settings
              </h3>
              
              <ColorPicker
                label="Primary Color"
                color={widgetTheme.primaryColor}
                onChange={(color) => setWidgetTheme(prev => ({ ...prev, primaryColor: color }))}
              />
              
              <ColorPicker
                label="Background Color"
                color={widgetTheme.backgroundColor}
                onChange={(color) => setWidgetTheme(prev => ({ ...prev, backgroundColor: color }))}
              />
              
              <ColorPicker
                label="Text Color"
                color={widgetTheme.textColor}
                onChange={(color) => setWidgetTheme(prev => ({ ...prev, textColor: color }))}
              />
            </div>

            {/* Preset Themes */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                Preset Themes
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    primaryColor: '#9810fa',
                    backgroundColor: '#ffffff',
                    textColor: '#000000'
                  })}
                  className="text-xs"
                >
                  Purple Theme
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    primaryColor: '#3B82F6',
                    backgroundColor: '#ffffff',
                    textColor: '#1F2937'
                  })}
                  className="text-xs"
                >
                  Blue Theme
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    primaryColor: '#10B981',
                    backgroundColor: '#ffffff',
                    textColor: '#000000'
                  })}
                  className="text-xs"
                >
                  Green Theme
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    primaryColor: '#F59E0B',
                    backgroundColor: '#ffffff',
                    textColor: '#000000'
                  })}
                  className="text-xs"
                >
                  Orange Theme
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveTheme}
                disabled={savingTheme}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                {savingTheme ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Saving...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Theme</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
} 