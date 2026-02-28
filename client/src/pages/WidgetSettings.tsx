import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Palette, Save, ArrowLeft } from 'lucide-react';
import { CompanyService } from '@/services/companyService';
import { useAuth } from '@/context/AuthContext';

interface WidgetTheme {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
}

export function WidgetSettings() {
  const navigate = useNavigate();
  const { companyId } = useParams<{ companyId: string }>();
  const { user } = useAuth();
  const [widgetTheme, setWidgetTheme] = useState<WidgetTheme>({
    primaryColor: '#3B82F6',
    backgroundColor: '#FFFFFF',
    textColor: '#1F2937'
  });
  const [savingTheme, setSavingTheme] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(true);

  // Default theme options (same as onboarding)
  const defaultThemes = [
    { name: "Blue", primaryColor: "#3B82F6" },
    { name: "Green", primaryColor: "#10B981" },
    { name: "Purple", primaryColor: "#8B5CF6" },
    { name: "Orange", primaryColor: "#F59E0B" },
    { name: "Red", primaryColor: "#EF4444" },
    { name: "Teal", primaryColor: "#14B8A6" }
  ];

  // Load company theme
  useEffect(() => {
    const loadCompanyTheme = async () => {
      if (!companyId) {
        navigate('/admin');
        return;
      }

      try {
        setLoading(true);
        const company = await CompanyService.getCompanyById(companyId);
        if (company?.theme) {
          setWidgetTheme(company.theme);
        }
      } catch (error) {
        console.error('Error loading company theme:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCompanyTheme();
  }, [companyId, navigate]);

  const handleSaveTheme = async () => {
    if (!companyId) return;

    try {
      setSavingTheme(true);
      await CompanyService.updateCompany(companyId, {
        theme: widgetTheme
      });
      
      alert('Widget theme updated successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error saving theme:', error);
      alert(`Failed to save theme: ${error}`);
    } finally {
      setSavingTheme(false);
    }
  };

  const applyDefaultTheme = (defaultTheme: any) => {
    setWidgetTheme({
      ...widgetTheme,
      primaryColor: defaultTheme.primaryColor
    });
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/admin')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Widget Theme Configuration
            </h1>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
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
              
              {/* Primary Color Picker */}
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
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Drag through the color spectrum to find your perfect shade
                </p>
              </div>
            </div>

            {/* Preset Themes */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                Quick Color Presets
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {defaultThemes.map((defaultTheme, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => applyDefaultTheme(defaultTheme)}
                    className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-colors min-h-[44px] md:min-h-[40px]"
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: defaultTheme.primaryColor }}
                      />
                      <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {defaultTheme.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                onClick={() => navigate('/admin')}
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
  );
}
