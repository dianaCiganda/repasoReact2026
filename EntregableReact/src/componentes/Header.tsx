import Boton from "./Button";
import './Button.css'

function Header() {
  return (
    <header className="navbar">
      <ul>
        <li><Boton texto="Inicio" /></li>
        <li><Boton texto="Acerca de nosotros" /></li>
        <li><Boton texto="Contacto" /></li>
      </ul>
    </header>
  );
}

export default Header;