import { Link } from "react-router-dom";
import Boton from "./Button";
import "./Button.css";

function Header() {
  return (
    <header className="navbar">
      <ul>
        <li>
          <Link to="/">
            <Boton texto="Inicio" />
          </Link>
        </li>

        <li>
          <Link to="/about">
            <Boton texto="Acerca de nosotros" />
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <Boton texto="Contacto" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;