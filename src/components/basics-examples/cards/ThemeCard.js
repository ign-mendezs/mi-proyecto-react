import ThemeSwitcher from '../ThemeSwitcher';

function ThemeCard() {
  return (
    <div className="col-span-2 flex gap-x-6">
      <div className="card w-1/3 flex flex-col items-center justify-center">
        <h2 className="font-bold">Cambio de tema</h2>
        <ThemeSwitcher />
      </div>
      <div className="card w-2/3 py-4">
        <h2 className="font-bold">Explicación</h2>
        <p>Los hooks permiten usar el estado y otros efectos de React en componentes funcionales.</p>
        <p>useState: Se utiliza para mantener el estado isDarkMode, que indica si el tema oscuro está activado o no.</p>
        <p>useEffect: Se utiliza para aplicar el tema al document.body cada vez que isDarkMode cambia.</p>
      </div>
    </div>
  );
}

export default ThemeCard;
