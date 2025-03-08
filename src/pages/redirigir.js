import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5); // Inicializa la cuenta en 5 segundos

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown <= 1) {
                    clearInterval(interval); // Detiene el intervalo cuando llega a 0
                    router.replace('/'); // Redirige a la nueva página
                    return 0; // Se asegura de que el estado no siga bajando
                }
                return prevCountdown - 1; // Resta 1 cada segundo
            });
        }, 1000); // Se ejecuta cada 1000 ms (1 segundo)

        return () => clearInterval(interval); // Limpia el intervalo si el usuario navega antes
    }, [router]); // Se ejecuta cuando el componente se monta

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border border-gray-300 p-8 rounded-lg text-center">
                <p>Serás redirigido en {countdown} segundos...</p>
            </div>
        </div>
    );
}
