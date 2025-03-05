// components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Actualiza el estado del body para mantener la consistencia (opcional)
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button 
        className={`btn ${isDarkMode ? 'dark-card' : 'light-card'}`}
        onClick={toggleTheme}
      >
        Cambiar a {isDarkMode ? 'Claro' : 'Oscuro'}
      </button>
      <style jsx>{`
        .dark-card {
          background-color: #333;
          color: #fff;
        }
        .light-card {
          background-color: #fff;
          color: #000;
        }
      `}</style>
      <style jsx global>{`
        .card {
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#000'};
          transition: background-color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitcher;