'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' },
  ];

  return (
    <div className="flex items-center space-x-1 bg-cyber-gray/30 backdrop-blur-cyber rounded-lg p-1 border border-neon-cyan/20">
      {themes.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          className={`
            relative flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300
            ${theme === name 
              ? 'bg-neon-cyan/20 text-neon-cyan shadow-neon' 
              : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10'
            }
          `}
          title={label}
        >
          <Icon size={16} />
          {theme === name && (
            <div className="absolute inset-0 rounded-md border border-neon-cyan/50 animate-pulse-neon" />
          )}
        </button>
      ))}
    </div>
  );
}
