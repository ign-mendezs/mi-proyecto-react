const Condicional2 = ({ loggedIn }) => {
    return (
      <div>
        {loggedIn ? (
          <h2 className="text-green-500">Bienvenido, usuario 😊</h2>
        ) : (
          <h2 className="text-red-500">Por favor, inicia sesión 🔒</h2>
        )}
      </div>
    );
  };
  
  export default Condicional2;
  