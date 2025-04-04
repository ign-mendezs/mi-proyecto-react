import Component from '../Component';

function PropsEstadoCard({ contador, onIncrement }) {
  return (
    <div className="col-span-2 flex gap-x-6">
      <div className="card w-1/3 flex flex-col items-center justify-center">
        <h2 className="font-bold">Props y Estado</h2>
        <Component texto={`Contador: ${contador}`} />
        <button className="btn btn-blue" onClick={onIncrement}>
          Incrementar
        </button>
      </div>
      <div className="card w-2/3 py-4">
        <h2 className="font-bold">Explicación</h2>
        <p>Las props (propiedades) son datos que se pasan de un componente padre a un componente hijo. El estado es un objeto que representa los datos internos de un componente y puede cambiar con el tiempo.</p>
        <p>Este es un componente funcional simple (MiComponente) que recibe una prop llamada texto.</p>
      </div>
    </div>
  );
}

export default PropsEstadoCard;
