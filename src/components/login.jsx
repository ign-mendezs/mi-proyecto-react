import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log({
      username: username,
      password: password,
    });

    // Here you would typically add your login logic, such as:
    // - Sending a request to your backend API
    // - Handling authentication responses
    // - Redirecting the user upon successful login
  };

  return (
    <div className="card item-center text-center">
      <form onSubmit={handleLogin}> {/* Add onSubmit handler to the form */}
        <label>Username:</label>
        <input
          type="text"
          value={username} // Add value prop to input
          onChange={(e) => setUsername(e.target.value)}
          required // Add required prop for validation
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password} // Add value prop to input
          onChange={(e) => setPassword(e.target.value)}
          required // Add required prop for validation
        />
        <br />
        <button type="submit">Login</button> {/* Change button type to submit */}
      </form>
    </div>
  );
};

export default Login;