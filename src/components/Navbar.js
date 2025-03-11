import Link from 'next/link';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { token, login, logout } = useAuth();

    return (
        <nav className="bg-primary text-textSecondary p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">Mi Proyecto</h1>

                {/* Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:bg-green-800 px-4 py-2 rounded transition">
                        👤 Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/redirigir" className="hover:bg-green-800 px-4 py-2 rounded transition">
                        🔄 Prueba para redirigir
                        </Link>
                    </li>
                    <div>
                        {token ? (
                        <>
                            <Link href="/productos" className="mr-4">Productos</Link>
                            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
                        </>
                        ) : (
                        <button onClick={login} className="bg-green-500 px-4 py-2 rounded">Login</button>
                        )}
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
