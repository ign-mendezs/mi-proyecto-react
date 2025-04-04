import RedirectExample from '../RedirectExample';

function RedirectCard() {
  return (
    <div className="col-span-2 flex gap-x-6">
      <RedirectExample />
      <div className="card w-2/3 py-4">
        <h2 className="font-bold">Explicación</h2>
        <p>
          Este ejemplo muestra cómo utilizar el hook useEffect para crear una cuenta regresiva que,
          al llegar a cero, redirige al usuario a otra página.
        </p>
      </div>
    </div>
  );
}

export default RedirectCard;
