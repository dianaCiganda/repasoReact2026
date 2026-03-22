import { Link } from "react-router-dom";
import Boton from "./Button";
import "./Header.css";

type Props = {
  setSearchTerm: (value: string) => void;
};

function Header({ setSearchTerm }: Props) {
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

      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        className="buscador"
        placeholder="Buscar integrante..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
}

export default Header;