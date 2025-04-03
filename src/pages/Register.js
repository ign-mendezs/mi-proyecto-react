import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { api } from '../services/api';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      setMessage('Usuario registrado. Ahora puedes iniciar sesión.');
      setTimeout(() => router.push('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al registrar usuario');
    }
  }, [formData, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="border border-gray-300 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-center">Registro</h2>

        {/* Mensajes de éxito o error */}
        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required className="border border-gray-300 rounded p-2"/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border border-gray-300 rounded p-2"/>
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required className="border border-gray-300 rounded p-2"/>
          <button type="submit" className="bg-green-300 text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
            Registrarse
          </button>
        </form>
        <Link href="/login" className="mt-4 block text-center text-blue-500 underline">
          Si ya tienes cuenta, inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
