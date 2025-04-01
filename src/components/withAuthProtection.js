// Para centralizar la protección de páginas se usa un HOC (Higher Order Component) Esto te permitiría envolver cualquier página y pasarle un permiso requerido

import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

/**
 * HOC para proteger páginas basado en roles.
 * @param {React.Component} WrappedComponent - Componente que se quiere proteger.
 * @param {string | string[]} requiredRoles - Rol o roles requeridos para acceder.
 */
const withRoleProtection = (WrappedComponent, requiredRoles) => {
  return (props) => {
    const router = useRouter();
    const { isAuthenticated, user } = useContext(AuthContext);

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }
      // Asegurarse de que requiredRoles sea un arreglo
      const rolesToCheck = Array.isArray(requiredRoles)
        ? requiredRoles
        : [requiredRoles];

      // Verificar que el usuario tenga al menos uno de los roles requeridos
      if (!user?.roles || !user.roles.some(role => rolesToCheck.includes(role))) {
        router.push('/error');
      }
    }, [isAuthenticated, user, router]);

    // Mientras se verifica la autenticación y roles, no se renderiza nada
    const rolesToCheck = Array.isArray(requiredRoles)
      ? requiredRoles
      : [requiredRoles];

    if (
      !isAuthenticated ||
      (requiredRoles && (!user?.roles || !user.roles.some(role => rolesToCheck.includes(role))))
    ) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withRoleProtection;
