import React, { useState, Profiler } from 'react';
import MiComponente from '../components/MiComponente';
import Condicional from "../components/Condicional";
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ThemeProvider } from '../context/ThemeContext';

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

          <div className="grid grid-cols-2 gap-3 w-full max-w-4xl">
            {/* Card 1: JSX y Renderizado */}
            <div className="col-span-2 flex gap-x-6">
              <div className="card w-1/3 flex flex-col items-center justify-center">
                <h2 className='font-bold'>JSX y Renderizado</h2>
                {mensaje}
              </div>
              <div className="card w-2/3 py-4">
                <h2 className='font-bold'>Explicación</h2>
                <p>JSX es una extensión de sintaxis de JavaScript que permite escribir HTML dentro de JavaScript. React utiliza JSX para describir la interfaz de usuario.</p>
              </div>
            </div>

            {/* Card 2: Props y Estado */}
            <div className="col-span-2 flex gap-x-6">
              <div className="card w-1/3 flex flex-col items-center justify-center">
                <h2 className='font-bold'>Props y Estado</h2>
                <MiComponente texto={`Contador: ${contador}`} />
                <button
                  className="btn btn-blue"
                  onClick={() => setContador(contador + 1)}
                >
                  Incrementar
                </button>
              </div>
              <div className="card w-2/3 py-4">
                <h2 className='font-bold'>Explicación</h2>
                <p>Las props (propiedades) son datos que se pasan de un componente padre a un componente hijo. El estado es un objeto que representa los datos internos de un componente y puede cambiar con el tiempo.</p>
                <p>Este es un componente funcional simple (MiComponente) que recibe una prop llamada texto.</p>
              </div>
            </div>

            {/* Card 3: Renderizado Condicional */}
            <div className="col-span-2 flex gap-x-6">
              <div className="card w-1/3 flex flex-col items-center justify-center">
                <h2 className='font-bold'>Renderizado Condicional</h2>
                <button
                  className="btn btn-green"
                  onClick={() => setMostrarMensaje(!mostrarMensaje)}
                >
                  {mostrarMensaje ? 'Ocultar' : 'Mostrar'} Mensaje
                </button>
                {mostrarMensaje && <p className="mt-2">Este mensaje se muestra condicionalmente.</p>}
              </div>
              <div className="card w-2/3 py-4">
                <h2 className='font-bold'>Explicación</h2>
                <p>El renderizado condicional permite mostrar diferentes elementos de la interfaz de usuario en función de ciertas condiciones. Se puede lograr utilizando operadores ternarios, sentencias if o el operador lógico &&.</p>
              </div>
            </div>

            {/* Card 4: Renderizado Condicional 2 */}
            <div className="col-span-2 flex gap-x-6">
              <div className="card w-1/3 flex flex-col items-center justify-center">
                <h2 className='font-bold'>Renderizado Condicional 2</h2>
                <Condicional loggedIn={true} />
              </div>
              <div className="card w-2/3 py-4">
                <h2 className='font-bold'>Explicación</h2>
                <p>Este componente funcional (Condicional) recibe una prop llamada loggedIn (un valor booleano). Utiliza renderizado condicional con un operador ternario para mostrar un mensaje de bienvenida o de inicio de sesión, dependiendo del valor de loggedIn.</p>
              </div>
            </div>
            {/* Card 5: cambio theme */}
            <div className="col-span-2 flex gap-x-6">
              <div className="card w-1/3 flex flex-col items-center justify-center">
                <h2 className='font-bold'>Cambio de tema</h2>
                <ThemeSwitcher />
              </div>
              <div className="card w-2/3 py-4">
                <h2 className='font-bold'>Explicación</h2>
                <p> Los hooks permiten usar el estado y otros efectos de React en componentes funcionales. </p>
                <p> useState: Se utiliza para mantener el estado isDarkMode, que indica si el tema oscuro está activado o no. </p>
                <p> useEffect: Se utiliza para aplicar el tema al document.body cada vez que isDarkMode cambia. Esto se logra agregando o eliminando las clases dark y light del body. Esto permite que el estado del tema sea persistente en el body del documento. </p>
              </div>
            </div>
          </div>

        </div>
      </Profiler>
    </ThemeProvider>
  );
}

export default HomePage;