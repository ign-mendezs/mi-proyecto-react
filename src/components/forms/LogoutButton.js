// src/components/LogoutButton.js
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!isAuthenticated) return null;

  return (
    <button 
      onClick={handleLogout} 
      className="inline-flex items-center hover:bg-green-800 px-4 py-2 rounded transition">
      Logout
    </button>
 
  );
};

export default LogoutButton;
