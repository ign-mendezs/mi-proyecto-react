//
import { useState, useEffect, useCallback } from 'react';

/* eslint-disable react/no-unknown-property */

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

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
          margin: 5px; /* Agregamos un margen de 5px */
          padding: 8px 16px; /* Añadimos padding para mejor aspecto */
          border: none; /* Quitamos el borde por defecto */
          cursor: pointer; /* Cambiamos el cursor al pasar por encima */
        }
        .light-card {
          background-color: #fff;
          color: #000;
          margin: 5px; /* Agregamos un margen de 5px */
          padding: 8px 16px; /* Añadimos padding para mejor aspecto */
          border: 1px solid #ccc; /* Añadimos un borde ligero */
          cursor: pointer; /* Cambiamos el cursor al pasar por encima */
        }
        button {
          border-radius: 4px; /* Opcional: bordes redondeados */
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