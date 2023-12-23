import React from 'react'
import CarWidget from '../CarWidget/CarWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <header>
      <Link to="/">

        <h1>Vestidos online</h1>
      </Link>

      <nav>
        <ul>
          <li> 
            <NavLink to="/">Home</NavLink> 

          </li>
          <li> <NavLink to="/Vestidoscivil" >Vestidos civil</NavLink> </li>
          <li> <NavLink to="/vestidosiglesia" >vestidos iglesia</NavLink> </li>
          <li> <NavLink to="/vestidos damas de honor">vestidos damas de honor</NavLink> </li>
          <li> <NavLink to="/sastreria">Sastreria</NavLink> </li>
        </ul>
      </nav>

      <CarWidget />
    </header>
  )
}

export default NavBar