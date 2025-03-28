//Configurar una instancia de axios. Puede definir la URL base y los interceptores para adjuntar el token en cada request
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para agregar el token a las peticiones (si existe)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
