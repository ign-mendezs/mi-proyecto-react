// 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectExample() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = useCallback(() => {
    setIsStarted(true);
  }, []);

  useEffect(() => {
    if (!isStarted) return; // Solo inicia si isStarted es true

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(interval);
          router.replace('/'); // Redirige cuando llegue a 0
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted, router]);

  return (
    <div className="card flex flex-col items-center justify-center">
      <h2 className="font-bold mb-2">Redirección con Cuenta Regresiva</h2>
      {isStarted ? (
        <p>Serás redirigido en {countdown} segundos...</p>
      ) : (
        <button 
          onClick={handleStart} 
          className="btn btn-blue"
        >
          Iniciar Redirección
        </button>
      )}
    </div>
  );
}
