import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamada al endpoint de registro
      await axios.post('http://localhost:5000/auth/register', { name, email, password });
      setMensaje('Usuario registrado correctamente. Ahora inicia sesión.');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al registrar usuario');
      setMensaje('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Registrarse</button>
      {mensaje && <p>{mensaje}</p>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default RegisterForm;
