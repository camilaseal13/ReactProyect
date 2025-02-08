import { CartWidget } from "./CartWidget";
import "../App.css";
import rescatalaLogo from "./rescatalaLogo.png";

export const NavBar = () => {
  return (
    <header className="navbar-header">
      <div>
        <nav className="navbar-container">
          <img src={rescatalaLogo} className="logo" alt="Logo de rescatala" />{" "}
          <ul className="category-container">
            <li>Hombres</li>
            <li>Mujeres</li>
            <li>Accesorios</li>
            <li>Sale</li>
          </ul>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};
