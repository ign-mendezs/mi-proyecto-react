export default function Login() {
    const handleLogin = () => {
        document.cookie = "sessionToken=abc123; path=/"; // Crear la cookie de sesión
        alert("Sesión iniciada. Revisa las cookies en DevTools.");
        window.location.href = "/productos"; // Redirigir a productos
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Página de Login</h1>
            <button className="btn btn-green" onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
}
