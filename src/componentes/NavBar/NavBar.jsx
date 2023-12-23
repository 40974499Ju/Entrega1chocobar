import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <h1>Vestidos online</h1>
        </Link>

        <nav className="navj">
            <ul>
                <li className="navj">
                    <NavLink to="/categoria/2">Vestidos largos</NavLink>
                </li>

                <li className="navj">
                    <NavLink to="/categoria/3">Vestidos cortos</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default NavBar