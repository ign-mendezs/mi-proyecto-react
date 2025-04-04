import { useState, Profiler, useCallback } from 'react';
import Image from 'next/image'
import JSXRenderCard from '../components/basics-examples/cards/JSXRenderCard';
import PropsEstadoCard from '../components/basics-examples/cards/PropsEstadoCard';
import CondicionalCard from '../components/basics-examples/cards/CondicionalCard';
import Condicional2Card from '../components/basics-examples/cards/Condicional2Card';
import ThemeCard from '../components/basics-examples/cards/ThemeCard';
import RedirectCard from '../components/basics-examples/cards/RedirectCard';
import { ThemeProvider } from '../context/ThemeContext';

function FundamentosReact() {
  const nombre = 'Usuario';
  const mensaje = <p>¡Hola, {nombre}!</p>;

  const [contador, setContador] = useState(0);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const onRender =useCallback( (id, phase, actualDuration) => {
    console.log(`Profiler: ${id} - ${phase} - actualDuration: ${actualDuration}`);
  }, []);

  const handleIncrement = useCallback(() => {
    setContador(prev => prev + 1);
  }, []);

  const handleToggleMessage = useCallback(() => {
    setMostrarMensaje(prev => !prev);
  }, []);

  return (
    <ThemeProvider>
      <Profiler id="HomePage" onRender={onRender}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Ejemplos de Fundamentos de React</h1>

          <div className="grid grid-cols-2 gap-3 w-full max-w-4xl">
            {/* Card 1: JSX y Renderizado */}
            <JSXRenderCard mensaje={mensaje} />
            {/* Card 2: Props y Estado */}
            <PropsEstadoCard contador={contador} onIncrement={handleIncrement} />
            {/* Card 3: Renderizado Condicional */}
            <CondicionalCard mostrarMensaje={mostrarMensaje} onToggle={handleToggleMessage} />
            {/* Card 4: Renderizado Condicional 2 */}
            <Condicional2Card />
            {/* Card 5: cambio Colores*/}
            <ThemeCard />
            {/* Card 6: Ejemplo de Redirección */}
            <RedirectCard />

          </div>

          <Image src="/fondos/books.png"
          alt="Decoración" width={370} height={370} className="absolute -bottom-12.2 left-0 w-30 h-auto opacity-80 pointer-events-none"/>
         
        </div>
      </Profiler>
    </ThemeProvider>
  );
}

export default FundamentosReact;