import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import SystemIcon from './icons/SystemIcon';

const themeOptions = [
  { value: 'light' as const, label: 'Light Theme', Icon: SunIcon, title: 'Activate Light Theme' },
  { value: 'dark' as const, label: 'Dark Theme', Icon: MoonIcon, title: 'Activate Dark Theme' },
  { value: 'system' as const, label: 'System Theme', Icon: SystemIcon, title: 'Use System Theme Preference' },
];

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-1 p-0.5 bg-[var(--bg-element)] rounded-full" role="radiogroup" aria-label="Theme selection">
      {themeOptions.map((option) => {
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`p-1.5 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-[var(--bg-element)] focus:ring-[var(--ring-color-focus)]
                        ${isActive
                          ? 'bg-[var(--bg-default)] shadow-sm text-[var(--color-primary)]'
                          : 'text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-secondary)]'
                        }`}
            aria-label={option.label}
            title={option.title}
            role="radio"
            aria-checked={isActive}
          >
            <option.Icon className="w-5 h-5" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSelector;