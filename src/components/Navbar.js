// src/components/Navbar.js
import NavItem from './NavItem';
import LogoutButton from './forms/LogoutButton';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="bg-primary text-textSecondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Mi MVP React</h1>

        {/* Links */}
        <ul className="flex items-center space-x-6">
          <NavItem href="/">👤 Inicio</NavItem>
          <NavItem href="/basics-react">📚 Fundamentos de React</NavItem>
          <NavItem href="/products">📦 Productos</NavItem>
          <NavItem href="/administrator">🛠️ Administracion</NavItem>
          {!isAuthenticated && (
            <NavItem href="/login">🔑 Login</NavItem>
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
