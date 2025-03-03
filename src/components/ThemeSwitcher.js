import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const buttonBgColor = theme === 'light' ? 'bg-gray-200' : 'bg-gray-700';
  const buttonTextColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <button
      className={`p-2 rounded ${buttonBgColor} ${buttonTextColor}`}
      onClick={toggleTheme}
    >
      Cambiar a color {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}

export default ThemeSwitcher;