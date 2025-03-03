import React from 'react';

function ErroresPage() {
  function errorEjemplo() {
    console.log(variableInexistente);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de Errores</h1>

      <div className="mb-6">
        <p className="mb-2">Haz clic en el botón para generar un error:</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => errorEjemplo()}
        >
          Generar error
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Instrucciones</h2>
        <p>
          1. Abre las herramientas de desarrollo del navegador (DevTools) presionando F12.
        </p>
        <p>2. Ve a la pestaña "Console" para ver el error generado.</p>
        <p>
          3. Experimenta con diferentes tipos de errores, como usar variables no definidas o llamar a funciones inexistentes.
        </p>
        <p>
          4. Observa cómo React maneja los errores y muestra mensajes en la consola.
        </p>
      </div>
    </div>
  );
}

export default ErroresPage;
