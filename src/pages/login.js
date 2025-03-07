export default function Login() {
    const handleLogin = () => {
        document.cookie = "sessionToken=abc123; path=/"; // Crear la cookie de sesión
        alert("Sesión iniciada. Revisa las cookies en DevTools.");
        window.location.href = "/productos"; // Redirigir a productos
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="text-3xl font-bold mb-6 text-center">Página de Login</h1>
            <button className="btn btn-green" onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
}
