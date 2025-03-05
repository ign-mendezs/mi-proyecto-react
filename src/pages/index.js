import React, { useState, Profiler } from 'react';
import MiComponente from '../components/MiComponente';
import Condicional from "../components/Condicional";
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ThemeProvider } from '../contexts/ThemeContext';

function HomePage() {
  const nombre = 'Usuario';
  const mensaje = <p>¡Hola, {nombre}!</p>;

  const [contador, setContador] = useState(0);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const onRender = (id, phase, actualDuration) => {
    console.log(`Profiler: ${id} - ${phase} - actualDuration: ${actualDuration}`);
  };

  return (
    <ThemeProvider>
      <Profiler id="HomePage" onRender={onRender}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Ejemplos de Fundamentos de React</h1>

          {/* Card 1: JSX y Renderizado */}
          <div className="card">
            <h2>JSX y Renderizado</h2>
            {mensaje}
          </div>

          {/* Card 2: Props y Estado */}
          <div className="card">
            <h2>Props y Estado</h2>
            <MiComponente texto={`Contador: ${contador}`} />
            <button 
              className="btn btn-blue"
              onClick={() => setContador(contador + 1)}
            >
              Incrementar
            </button>
          </div>

          {/* Card 3: Renderizado Condicional */}
          <div className="card">
            <h2>Renderizado Condicional</h2>
            <button 
              className="btn btn-green"
              onClick={() => setMostrarMensaje(!mostrarMensaje)}
            >
              {mostrarMensaje ? 'Ocultar' : 'Mostrar'} Mensaje
            </button>
            {mostrarMensaje && <p className="mt-2">Este mensaje se muestra condicionalmente.</p>}
          </div>

          {/* Card 4: Renderizado Condicional 2 */}
          <div className="card">
            <h2>Renderizado Condicional 2</h2>
            <Condicional loggedIn={true} />
          </div>

          <ThemeSwitcher />
        </div>
      </Profiler>
    </ThemeProvider>
  );
}

export default HomePage;
