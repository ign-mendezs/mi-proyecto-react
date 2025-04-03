// src/components/Navbar.js
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { AuthContext } from '../context/AuthContext';
import React, { useState, useContext } from 'react';

export default function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="bg-primary text-textSecondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Mi MVP React</h1>

        {/* Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="hover:bg-green-800 px-4 py-2 rounded transition">
              👤 Inicio
            </Link>
          </li>
          <li>
            <Link href="/basics-react" className="hover:bg-green-800 px-4 py-2 rounded transition">
              📚 Fundamentos de React
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:bg-green-800 px-4 py-2 rounded transition">
              📦 Productos
            </Link>
          </li>
          <li>
            <Link href="/administrator" className="hover:bg-green-800 px-4 py-2 rounded transition">
              🛠️ Administracion
            </Link>
          </li>
          {!isAuthenticated && (
            <li>
              <Link href="/login" className="hover:bg-green-800 px-4 py-2 rounded transition">
                Login
              </Link>
            </li>
          )}

          {isAuthenticated && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
