// src/context/ThemeContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Timing constants for theme changes
const THEME_CHANGE_DELAY = 400; // ms before theme change starts
const LOADER_DURATION = 1300; // ms the loader shows (adjust this value)

// 1. Define your theme color types
type ThemeColors = {
  containerBackground: string;
  messageBackground: string;
  text: string;
  primary: string;
  secondary: string;
  card: string;
  border: string;
  gray: string;
};

// 2. Define light/dark themes
type Theme = {
  light: ThemeColors;
  dark: ThemeColors;
};

const defaultTheme: Theme = {
  light: {
    containerBackground: '#ffffff',
    messageBackground: '#f5f5f5',
    text: '#000000',
    primary: '#8B5CF6',
    secondary: '#8B5CF6',
    card: '#f5f5f5',
    border: '#e0e0e0',
    gray: '#888888',
  },
  dark: {
    containerBackground: '#000000',
    messageBackground: '#111827',
    text: '#ffffff',
    primary: '#8B5CF6',
    secondary: '#8B5CF6',
    card: '#1e1e1e',
    border: '#333333',
    gray: '#888888',
  },
};

// 3. Define context type
interface ThemeContextType {
  colors: ThemeColors;
  defaultTheme: 'light' | 'dark';
  isDark: boolean;
  setColorScheme: (scheme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  isThemeChanging: boolean;
}

// 4. Create the context with proper typing
export const ThemeContext = createContext<ThemeContextType>({
  colors: defaultTheme.light,
  defaultTheme: 'light',
  isDark: false,
  setColorScheme: () => {},
  toggleTheme: () => {},
  isThemeChanging: false,
});

// 5. Define props for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// 6. Implement the provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Check for saved theme preference or use system preference
  const getInitialTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      // Check localStorage for saved theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }

      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light'; // default if window is not available (SSR)
  };

  const [isDark, setIsDark] = useState(getInitialTheme() === 'dark');
  const [isThemeChanging, setIsThemeChanging] = useState(false);
  
  const setColorScheme = (scheme: 'light' | 'dark') => {
    setIsDark(scheme === 'dark');
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', scheme);
    }
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    
    // Set theme changing state to true
    setIsThemeChanging(true);
    
    // Delay the actual theme change to allow components to prepare
    setTimeout(() => {
      setColorScheme(newTheme);
      
      // Reset theme changing state after the specified duration
      setTimeout(() => {
        setIsThemeChanging(false);
      }, LOADER_DURATION); // Use the constant for loader duration
    }, THEME_CHANGE_DELAY); // Use the constant for initial delay
  };

  useEffect(() => {
    // Watch for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only change if there's no saved preference
      if (!localStorage.getItem('theme')) {
        setColorScheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme to document body and HTML element
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Apply dark class to HTML element for Tailwind CSS
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      document.body.style.backgroundColor = isDark 
        ? defaultTheme.dark.containerBackground 
        : defaultTheme.light.containerBackground;
      document.body.style.color = isDark 
        ? defaultTheme.dark.text 
        : defaultTheme.light.text;
    }
  }, [isDark]);

  const colors = isDark ? defaultTheme.dark : defaultTheme.light;

  return (
    <ThemeContext.Provider value={{
      colors,
      defaultTheme: isDark ? 'dark' : 'light',
      isDark,
      setColorScheme, 
      toggleTheme,
      isThemeChanging
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 7. Create a custom hook for consuming the context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};