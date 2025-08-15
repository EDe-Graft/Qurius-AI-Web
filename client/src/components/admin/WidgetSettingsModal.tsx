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
  const [isDragging, setIsDragging] = useState(false);

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

  const handleColorPickerMouseDown = () => {
    setIsDragging(true);
  };

  const handleColorPickerMouseUp = () => {
    setIsDragging(false);
  };

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidgetTheme({
      ...widgetTheme,
      primaryColor: e.target.value
    });
  };

  const PrimaryColorPicker = () => (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Primary Color
      </label>
      <div className="relative">
        <input
          type="color"
          value={widgetTheme.primaryColor}
          onChange={handleColorPickerChange}
          onMouseDown={handleColorPickerMouseDown}
          onMouseUp={handleColorPickerMouseUp}
          onMouseLeave={handleColorPickerMouseUp}
          className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-lg cursor-crosshair transition-all duration-200 hover:border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          style={{
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        />
        {isDragging && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-lg pointer-events-none">
            <span className="text-xs text-white font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
              Drag to select color
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={widgetTheme.primaryColor}
          onChange={(e) => setWidgetTheme({ ...widgetTheme, primaryColor: e.target.value })}
          className="w-24 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="#000000"
        />
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Drag through the color spectrum to find your perfect shade
        </span>
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
                className="w-full h-64 md:h-80 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 overflow-hidden flex flex-col"
                style={{ backgroundColor: widgetTheme.backgroundColor }}
              >
                {/* Mini Header */}
                <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: widgetTheme.primaryColor }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-xs">Company Assistant</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Online now</p>
                    </div>
                  </div>
                </div>

                {/* Mini Messages */}
                <div className="flex-1 overflow-hidden p-2 space-y-2">
                  {/* AI Message */}
                  <div className="flex gap-2 max-w-[90%] flex-row">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400"
                      style={{ backgroundColor: widgetTheme.backgroundColor }}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div
                        className="inline-block max-w-[90%] px-3 py-2 rounded-2xl text-xs leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md bg-gray-100 dark:bg-gray-700"
                      >
                        Hello! How can I help you today?
                      </div>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-2 max-w-[90%] mx-auto flex-row-reverse">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: widgetTheme.primaryColor }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 space-y-1 text-right">
                      <div
                        className="inline-block max-w-[90%] px-3 py-2 rounded-2xl text-xs leading-relaxed text-white rounded-br-md"
                        style={{ backgroundColor: widgetTheme.primaryColor }}
                      >
                        What are your business hours?
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex gap-2 max-w-[90%] flex-row">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400"
                      style={{ backgroundColor: widgetTheme.backgroundColor }}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div
                        className="inline-block max-w-[90%] px-3 py-2 rounded-2xl text-xs leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md bg-gray-100 dark:bg-gray-700"
                      >
                        We're open Monday-Friday, 9am-5pm. Is there anything specific you'd like to know?
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Input */}
                <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div 
                      className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full px-3 text-xs text-gray-500 dark:text-gray-400 flex items-center"
                    >
                      Type your message...
                    </div>
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: widgetTheme.primaryColor }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Configuration */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Color Settings
              </h3>
              
              <PrimaryColorPicker />
            </div>

            {/* Preset Themes */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                Quick Color Presets
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    ...widgetTheme,
                    primaryColor: '#9810fa'
                  })}
                  className="text-xs"
                >
                  Purple
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    ...widgetTheme,
                    primaryColor: '#3B82F6'
                  })}
                  className="text-xs"
                >
                  Blue
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    ...widgetTheme,
                    primaryColor: '#10B981'
                  })}
                  className="text-xs"
                >
                  Green
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setWidgetTheme({
                    ...widgetTheme,
                    primaryColor: '#F59E0B'
                  })}
                  className="text-xs"
                >
                  Orange
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