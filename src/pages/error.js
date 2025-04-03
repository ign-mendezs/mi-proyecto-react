
export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 ">
      <div className="border border-gray-300 p-8 rounded-lg text-center mb-6">
        <h1 className="text-1xl font-bold mb-6 text-center">🚫 Acceso Denegado</h1>
        <p className="mb-6 text-black py-1 px-4">No tienes permisos para acceder a esta página.</p>
        <a href="/" className="bg-green-300 text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300 ">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}