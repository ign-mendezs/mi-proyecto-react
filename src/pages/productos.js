import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import ProtectedRoute from '../components/ProtectedRoute'; 

export default function Productos() {

  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
}
