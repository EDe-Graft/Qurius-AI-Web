import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Palette, Save, ArrowLeft, Link, Shield, Plus, X } from 'lucide-react';
import { CompanyService } from '@/services/companyService';

interface WidgetTheme {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
}

export function WidgetSettings() {
  const navigate = useNavigate();
  const { companyId } = useParams<{ companyId: string }>();
  const [widgetTheme, setWidgetTheme] = useState<WidgetTheme>({
    primaryColor: '#3B82F6',
    backgroundColor: '#FFFFFF',
    textColor: '#1F2937'
  });
  const [bookingUrl, setBookingUrl] = useState('');
  const [bookingUrlError, setBookingUrlError] = useState('');
  const [allowedDomains, setAllowedDomains] = useState<string[]>([]);
  const [domainInput, setDomainInput] = useState('');
  const [domainInputError, setDomainInputError] = useState('');
  const domainInputRef = useRef<HTMLInputElement>(null);
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
        if (company?.booking_url) {
          setBookingUrl(company.booking_url);
        }
        if (company?.allowed_domains) {
          setAllowedDomains(company.allowed_domains);
        }
      } catch (error) {
        console.error('Error loading company theme:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCompanyTheme();
  }, [companyId, navigate]);

  const normaliseDomain = (raw: string): string | null => {
    const trimmed = raw.trim().toLowerCase();
    if (!trimmed) return null;
    try {
      const withProto = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
      return new URL(withProto).hostname || null;
    } catch {
      return null;
    }
  };

  const handleAddDomain = () => {
    setDomainInputError('');
    const normalised = normaliseDomain(domainInput);
    if (!normalised) {
      setDomainInputError('Please enter a valid domain (e.g. example.com)');
      return;
    }
    if (allowedDomains.includes(normalised)) {
      setDomainInputError('This domain is already in the list');
      return;
    }
    setAllowedDomains(prev => [...prev, normalised]);
    setDomainInput('');
    domainInputRef.current?.focus();
  };

  const handleRemoveDomain = (domain: string) => {
    setAllowedDomains(prev => prev.filter(d => d !== domain));
  };

  const handleDomainKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddDomain();
    }
  };

  const validateBookingUrl = (url: string) => {
    if (!url) return true; // Optional field
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSaveTheme = async () => {
    if (!companyId) return;

    // Validate booking URL if provided
    if (bookingUrl && !validateBookingUrl(bookingUrl)) {
      setBookingUrlError('Please enter a valid URL (e.g. https://calendly.com/yourname)');
      return;
    }
    setBookingUrlError('');

    try {
      setSavingTheme(true);
      await CompanyService.updateCompany(companyId, {
        theme: widgetTheme,
        booking_url: bookingUrl || undefined,
        allowed_domains: allowedDomains,
      });
      
      alert('Widget settings updated successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert(`Failed to save settings: ${error}`);
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
              Widget Settings
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

            {/* Booking URL */}
            <div className="space-y-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 pt-4">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Link className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Demo Booking
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    When visitors ask about demos or scheduling, a "Book a Demo" button will appear in the chat.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Booking URL <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  value={bookingUrl}
                  onChange={(e) => {
                    setBookingUrl(e.target.value);
                    setBookingUrlError('');
                  }}
                  placeholder="https://calendly.com/yourname or https://cal.com/yourname"
                  className={`w-full px-3 py-2.5 text-sm border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    bookingUrlError
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                />
                {bookingUrlError && (
                  <p className="text-xs text-red-500 dark:text-red-400">{bookingUrlError}</p>
                )}
                {bookingUrl && !bookingUrlError && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">
                    ✓ Booking button will appear when visitors mention demos or scheduling.
                  </p>
                )}
              </div>
            </div>

            {/* Allowed Domains */}
            <div className="space-y-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 pt-4">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Allowed Domains
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Restrict your widget to specific domains. Leave empty to allow any website to embed it.
                  </p>
                </div>
              </div>

              {/* Domain input row */}
              <div className="flex gap-2">
                <div className="flex-1 space-y-1">
                  <input
                    ref={domainInputRef}
                    type="text"
                    value={domainInput}
                    onChange={(e) => { setDomainInput(e.target.value); setDomainInputError(''); }}
                    onKeyDown={handleDomainKeyDown}
                    placeholder="example.com"
                    className={`w-full px-3 py-2.5 text-sm border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      domainInputError
                        ? 'border-red-400 dark:border-red-500'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                  />
                  {domainInputError && (
                    <p className="text-xs text-red-500 dark:text-red-400">{domainInputError}</p>
                  )}
                </div>
                <Button
                  type="button"
                  onClick={handleAddDomain}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 self-start mt-0"
                  title="Add domain"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Domain list */}
              {allowedDomains.length > 0 ? (
                <ul className="space-y-2">
                  {allowedDomains.map((domain) => (
                    <li
                      key={domain}
                      className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-sm"
                    >
                      <span className="text-gray-800 dark:text-gray-200 font-mono truncate">{domain}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveDomain(domain)}
                        className="ml-3 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex-shrink-0"
                        title="Remove domain"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg px-3 py-2">
                  ⚠️ No domains added — widget can be embedded on any website.
                </p>
              )}
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
                    <span>Save Settings</span>
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
