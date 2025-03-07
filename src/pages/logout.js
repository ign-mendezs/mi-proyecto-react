import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "sessionToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        router.push('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>¿Seguro que quieres cerrar sesión?</h1>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}
