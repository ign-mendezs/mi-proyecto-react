// Este componente protege las rutas que requieren autenticación

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AuthService from '../services/authService';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return AuthService.getCurrentUser() ? children : null;
};

export default ProtectedRoute;