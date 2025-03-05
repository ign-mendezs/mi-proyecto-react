import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-customGreen text-white p-4">
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
                        <Link href="/productos" className="hover:bg-green-800 px-4 py-2 rounded transition">
                        📦 Productos
                        </Link>
                    </li>
                    <li>
                        <Link href="/redirigir" className="hover:bg-green-800 px-4 py-2 rounded transition">
                        🔄 Prueba para redirigir
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
