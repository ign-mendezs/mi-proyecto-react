import React, { useState, Profiler } from 'react';
import MiComponente from '../components/MiComponente';
import Condicional from "../components/Condicional";
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ThemeProvider } from '../contexts/ThemeContext';

function HomePage() {
  // Ejemplo 1: JSX y Renderizado
  const nombre = 'Usuario';
  const mensaje = <p>¡Hola, {nombre}!</p>;

  // Ejemplo 3: Props y Estado (useState)
  const [contador, setContador] = useState(0);

  // Ejemplo 4: Renderizado Condicional
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // Profiler callback
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(`Profiler: ${id} - ${phase} - actualDuration: ${actualDuration}`);
  };

  return (
    <ThemeProvider>
      <Profiler id="HomePage" onRender={onRender}>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Ejemplos de Fundamentos de React</h1>

          {/* Ejemplo 1: JSX y Renderizado */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">JSX y Renderizado</h2>
            {mensaje}
          </div>

          {/* Ejemplo 3: Props y Estado (useState) */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Props y Estado</h2>
            <MiComponente texto={`Contador: ${contador}`} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setContador(contador + 1)}>Incrementar</button>
          </div>

          {/* Ejemplo 4: Renderizado Condicional */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Renderizado Condicional</h2>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
              {mostrarMensaje ? 'Ocultar' : 'Mostrar'} Mensaje
            </button>
            {mostrarMensaje && <p className="mt-2">Este mensaje se muestra condicionalmente.</p>}
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Renderizado Condicional 2</h2>
            <Condicional loggedIn={true} />
          </div>

          <ThemeSwitcher />
        </div>
      </Profiler>
    </ThemeProvider>
  );
}

export default HomePage;