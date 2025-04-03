import React from 'react';
import withAuthProtection from '../components/withAuthProtection';

function Administrador() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Página de Administracion</h1>

    </div>
  );
}

export default withAuthProtection(Administrador, ['admin']);
