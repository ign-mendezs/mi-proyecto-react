function CondicionalCard({ mostrarMensaje, onToggle }) {
    return (
      <div className="col-span-2 flex gap-x-6">
        <div className="card w-1/3 flex flex-col items-center justify-center">
          <h2 className="font-bold">Renderizado Condicional</h2>
          <button className="btn btn-green" onClick={onToggle}>
            {mostrarMensaje ? 'Ocultar' : 'Mostrar'} Mensaje
          </button>
          {mostrarMensaje && <p className="mt-2">Este mensaje se muestra condicionalmente.</p>}
        </div>
        <div className="card w-2/3 py-4">
          <h2 className="font-bold">Explicación</h2>
          <p>El renderizado condicional permite mostrar diferentes elementos de la interfaz de usuario en función de ciertas condiciones. Se puede lograr utilizando operadores ternarios, sentencias if o el operador lógico &&.</p>
        </div>
      </div>
    );
  }
  
  export default CondicionalCard;
  