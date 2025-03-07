import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

function Productos() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Leer la cookie manualmente
        const cookies = document.cookie.split('; ').find(row => row.startsWith('sessionToken='));

        if (!cookies) {
            router.push('/error'); // Redirigir si no hay sesión
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    if (!isAuthenticated) {
        return null; // Evita que la página se renderice antes de redirigir
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Página de Productos</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Aquí pondría productos</h2>
      </div>

      <img src="/turner.png" alt="turner" className="mb-6"/>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Si tuviera alguno</h2>
      </div>
    </div>
  );
}

export default Productos;