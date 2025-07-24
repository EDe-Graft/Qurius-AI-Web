// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

// 1. Define your theme color types
type ThemeColors = {
  background: string;
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
    background: '#ffffff',
    text: '#000000',
    primary: '#8B5CF6',
    secondary: '#8B5CF6',
    card: '#f5f5f5',
    border: '#e0e0e0',
    gray: '#888888',
  },
  dark: {
    background: '#000000',
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
  theme: 'light' | 'dark';
  isDark: boolean;
  setColorScheme: (scheme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

// 4. Create the context with proper typing
export const ThemeContext = createContext<ThemeContextType>({
  colors: defaultTheme.light,
  theme: 'light',
  isDark: false,
  setColorScheme: () => {},
  toggleTheme: () => {},
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
  
  const setColorScheme = (scheme: 'light' | 'dark') => {
    setIsDark(scheme === 'dark');
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', scheme);
    }
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setColorScheme(newTheme);
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

  // Apply theme to document body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.backgroundColor = isDark 
        ? defaultTheme.dark.background 
        : defaultTheme.light.background;
      document.body.style.color = isDark 
        ? defaultTheme.dark.text 
        : defaultTheme.light.text;
    }
  }, [isDark]);

  const colors = isDark ? defaultTheme.dark : defaultTheme.light;

  return (
    <ThemeContext.Provider value={{
      colors,
      theme: isDark ? 'dark' : 'light',
      isDark,
      setColorScheme, 
      toggleTheme 
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