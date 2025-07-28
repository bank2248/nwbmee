import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark'; // Actual theme being applied
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
        return storedTheme;
      }
    }
    return 'system';
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');

  const applyTheme = useCallback((currentTheme: Theme) => {
    let newEffectiveTheme: 'light' | 'dark';
    if (currentTheme === 'system') {
      newEffectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      newEffectiveTheme = currentTheme;
    }

    setEffectiveTheme(newEffectiveTheme);
    if (newEffectiveTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        if (theme === 'system') {
          applyTheme('system');
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, applyTheme]);

  const setTheme = (newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    setThemeState(newTheme);
  };
  
  // Initial application of theme on mount
  useEffect(() => {
    applyTheme(theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount to set initial theme based on localStorage/system

  return (
    <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
