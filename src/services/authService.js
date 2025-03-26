//Aqui se puede implementar la logica de autenticacion, como registrar, iniciar sesion, cerrar sesion, y para gestionar el token

import api from '../utils/api';

const AuthService = {
  login: async (credentials) => {
    const response = await api.post('/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  register: async (userData) => {
    const response = await api.post('/register', userData);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  getCurrentUser: () => {
    return localStorage.getItem('token');
  },
};

export default AuthService;