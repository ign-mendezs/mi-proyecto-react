import Condicional2 from '../Condicional2';

function Condicional2Card() {
  return (
    <div className="col-span-2 flex gap-x-6">
      <div className="card w-1/3 flex flex-col items-center justify-center">
        <h2 className="font-bold">Renderizado Condicional 2</h2>
        <Condicional2 loggedIn />
      </div>
      <div className="card w-2/3 py-4">
        <h2 className="font-bold">Explicación</h2>
        <p>Este componente funcional (Condicional) recibe una prop llamada loggedIn (un valor booleano). Utiliza renderizado condicional con un operador ternario para mostrar un mensaje de bienvenida o de inicio de sesión, dependiendo del valor de loggedIn que puedes cambiar con DevTools.</p>
      </div>
    </div>
  );
}

export default Condicional2Card;
