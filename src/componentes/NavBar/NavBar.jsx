import React from 'react'
import CarWidget from '../CarWidget/CarWidget';
import './NavBar.css';

const NavBar = () => {
  return (
   <header>
    <h1>Vestidos online</h1>
    <nav>
        <ul>
            <li>Vestidos civil</li>
            <li>vestidos iglesia</li>
            <li>vestidos damas de honor</li>
            <li>Sastreria</li>
        </ul>
    </nav>

    <CarWidget/>
   </header>
  )
}

export default NavBar