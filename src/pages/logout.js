import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "sessionToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        router.push('/');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">¿Seguro que quieres cerrar sesión?</h1>
            <button className="btn btn-green" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}
