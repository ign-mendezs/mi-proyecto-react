import { useState } from 'react';
import axios from 'axios';

function LoginForm({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e) => setPassword(e.target.value), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamada al endpoint de login
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      const token = response.data.token;
      // Guarda el token en localStorage (o en un contexto global)
      localStorage.setItem('token', token);
      setAuth(true); // Actualiza el estado de autenticación
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error en el login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      /><br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
      /><br />
      <button type="submit">Iniciar sesión</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
