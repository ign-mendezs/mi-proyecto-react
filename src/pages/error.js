import React from 'react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1>🚫 Acceso Denegado</h1>
      <p>No tienes permisos para acceder a esta página.</p>
      <a href="/" className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
        Volver al inicio
      </a>
    </div>
  );
}