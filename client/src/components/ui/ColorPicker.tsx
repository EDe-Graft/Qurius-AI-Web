import { useState, useRef, useEffect } from 'react';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  className?: string;
}

export function ColorPicker({ value, onChange, className = '' }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);
  const pickerRef = useRef<HTMLDivElement>(null);
  const saturationRef = useRef<HTMLDivElement>(null);

  // Convert hex to HSL
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  // Initialize from hex value
  useEffect(() => {
    if (value) {
      const hsl = hexToHsl(value);
      setHue(hsl.h);
      setSaturation(hsl.s);
      setLightness(hsl.l);
    }
  }, [value]);

  // Update color when HSL changes
  useEffect(() => {
    if (isOpen) {
      const newColor = hslToHex(hue, saturation, lightness);
      onChange(newColor);
    }
  }, [hue, saturation, lightness, isOpen]);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleHueChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percent = Math.max(0, Math.min(100, (y / rect.height) * 100));
    setHue(Math.round(360 - (percent / 100) * 360));
  };

  const handleSaturationChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!saturationRef.current) return;
    const rect = saturationRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const s = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const l = Math.max(0, Math.min(100, 100 - (y / rect.height) * 100));
    setSaturation(Math.round(s));
    setLightness(Math.round(l));
  };

  const currentColor = hslToHex(hue, saturation, lightness);

  return (
    <div className={`relative ${className}`} ref={pickerRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer transition-all duration-200 hover:border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        style={{ backgroundColor: value }}
      >
        <span className="sr-only">Select color</span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 z-[10000]"
          onClick={(e) => e.stopPropagation()}
          style={{ minWidth: '280px' }}
        >
          <div className="flex gap-4">
            {/* Saturation/Lightness picker */}
            <div
              ref={saturationRef}
              className="relative w-48 h-48 rounded-lg cursor-crosshair border border-gray-300 dark:border-gray-600"
              style={{
                background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%))`
              }}
              onMouseDown={(e) => {
                handleSaturationChange(e);
                const handleMove = (moveEvent: MouseEvent) => {
                  handleSaturationChange({
                    ...e,
                    clientX: moveEvent.clientX,
                    clientY: moveEvent.clientY,
                    currentTarget: e.currentTarget
                  } as React.MouseEvent<HTMLDivElement>);
                };
                const handleUp = () => {
                  document.removeEventListener('mousemove', handleMove);
                  document.removeEventListener('mouseup', handleUp);
                };
                document.addEventListener('mousemove', handleMove);
                document.addEventListener('mouseup', handleUp);
              }}
            >
              <div
                className="absolute w-4 h-4 border-2 border-white rounded-full shadow-lg pointer-events-none"
                style={{
                  left: `${saturation}%`,
                  top: `${100 - lightness}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: currentColor
                }}
              />
            </div>

            {/* Hue slider */}
            <div className="flex flex-col">
              <div
                className="relative w-8 h-48 rounded-lg cursor-crosshair border border-gray-300 dark:border-gray-600"
                style={{
                  background: 'linear-gradient(to bottom, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
                }}
                onMouseDown={(e) => {
                  handleHueChange(e);
                  const handleMove = (moveEvent: MouseEvent) => {
                    handleHueChange({
                      ...e,
                      clientY: moveEvent.clientY,
                      currentTarget: e.currentTarget
                    } as React.MouseEvent<HTMLDivElement>);
                  };
                  const handleUp = () => {
                    document.removeEventListener('mousemove', handleMove);
                    document.removeEventListener('mouseup', handleUp);
                  };
                  document.addEventListener('mousemove', handleMove);
                  document.addEventListener('mouseup', handleUp);
                }}
              >
                <div
                  className="absolute left-0 right-0 w-6 h-2 border-2 border-white rounded shadow-lg pointer-events-none"
                  style={{
                    top: `${100 - (hue / 360) * 100}%`,
                    transform: 'translateY(-50%)',
                    marginLeft: '4px'
                  }}
                />
              </div>

              {/* Color preview */}
              <div className="mt-4">
                <div
                  className="w-full h-12 rounded-lg border border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: currentColor }}
                />
                <input
                  type="text"
                  value={currentColor.toUpperCase()}
                  onChange={(e) => {
                    const hex = e.target.value;
                    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
                      const hsl = hexToHsl(hex);
                      setHue(hsl.h);
                      setSaturation(hsl.s);
                      setLightness(hsl.l);
                      onChange(hex);
                    }
                  }}
                  className="mt-2 w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
