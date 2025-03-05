import React from 'react';

function Productos() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Página de Productos</h1>

      <img src="/turner.png" alt="turner" className="mb-6"/>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Aquí pondría productos, si tuviera alguno.</h2>
        <p>Actualmente, no hay productos disponibles.</p>
      </div>
    </div>
  );
}

export default Productos;