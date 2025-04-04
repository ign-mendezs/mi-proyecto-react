function IntroCard() {
    return (
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo del proyecto</h2>
        <p className="text-gray-700 mb-6">
          Este MVP tiene fines educativos y muestra cómo funcionan los componentes básicos de React.js.
          Además, incluye un sistema de autenticación con JWT y control de acceso por roles de usuario,
          conectado a un backend hecho en Node.js con una base de datos SQLite simple.
        </p>
  
        <h2 className="text-2xl font-semibold mb-4">🚀 Que encontrarás</h2>
        <p className="text-gray-700 mb-2">
          Puedes navegar por las distintas secciones para explorar:
        </p>
        <ul className="text-left text-gray-700 list-disc list-inside mb-4">
          <li>Componentes básicos de React y hooks</li>
          <li>Formularios con validación usando React Hook Form</li>
          <li>Autenticación con JWT</li>
          <li>Acceso según roles de usuario</li>
          <li>Conexión frontend-backend con Axios</li>
        </ul>
  
        <p className="text-gray-700">
          Cada sección incluye ejemplos comentados para facilitar la comprensión.
        </p>
      </div>
    );
  }
  
  export default IntroCard;
  