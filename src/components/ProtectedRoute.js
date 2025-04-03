//
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si se especifica un permiso requerido y el usuario no lo tiene, redirige a una página de "No autorizado"
  if (requiredPermission) {
    // Se asume que el objeto 'user' tiene una propiedad 'permissions' (array)
    if (!user || !user.permissions || !user.permissions.includes(requiredPermission)) {
      return <Navigate to="/error" />;
    }
  }

  return children;
};

export default ProtectedRoute;
