function JSXRenderCard({ mensaje }) {
    return (
      <div className="col-span-2 flex gap-x-6">
        <div className="card w-1/3 flex flex-col items-center justify-center">
          <h2 className="font-bold">JSX y Renderizado</h2>
          {mensaje}
        </div>
        <div className="card w-2/3 py-4">
          <h2 className="font-bold">Explicación</h2>
          <p>
            JSX es una extensión de sintaxis de JavaScript que permite escribir HTML dentro de JavaScript.
            React utiliza JSX para describir la interfaz de usuario.
          </p>
        </div>
      </div>
    );
  }
  
  export default JSXRenderCard;
  