
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { api } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';

const Login = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      login(res.data.token);
      // Redirigir a la página luego del login
      router.push('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Error en el login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="border border-gray-300 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border border-gray-300 rounded p-2"/>
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required className="border border-gray-300 rounded p-2"/>
          <button type="submit" className="bg-green-300 text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Ingresar</button>
        </form>
        <Link href="/Register" className="mt-4 block text-center text-blue-500 underline">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
