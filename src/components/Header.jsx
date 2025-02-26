export function Header(props) {
  if (props.isLoggedIn && props.rol === "") {
    return (
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">List</a>
          </li>
          <li>
            <a href="">About me</a>
          </li>
        </ul>
      </nav>
    );
  } else if (props.rol === "Admin" && props.isLoggedIn) {
    return (
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Elimiar</a>
          </li>
          <li>
            <a href="">editar</a>
          </li>

          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Singup</a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Singup</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export function ListCard() {
  return <h1>Hooola</h1>;
}
