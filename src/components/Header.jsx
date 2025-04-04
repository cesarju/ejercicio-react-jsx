import { Link } from "react-router-dom";
import "./header.css";

export function Header(props) {
  if (props.isLoggedIn && props.rol === "") {
    return (
      <nav className="header">
        <h1>🐕</h1>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="">List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              About me
            </a>
          </li>
        </ul>
      </nav>
    );
  } else if (props.rol === "Admin" && props.isLoggedIn) {
    return (
      <nav className="header">
        <p className="logo-container">🐕</p>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/listPets"} className="nav-link">
              Lista de Animalitos
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Adopción
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Refugios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Singup
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

// export function ListCard() {
//   return <h1>Hooola</h1>;
// }
