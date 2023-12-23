import { useState } from 'react'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import sastreria from './componentes/sastreria/sastreria';
import vestidoCilvil from './componentes/vestidoCivil/vestidoCilvil';
import vestidoIglesia from './componentes/vestidoIglesia/vestidoIglesia';
import vestidoDamaDeHonor from './componentes/vestidosDamaDeHonor/vestidoDamaDeHonor';
import home from './componentes/Home/home';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      </Routes>
      </BrowserRouter>


      

      <NavBar />

      <ItemListContainer greeting="Hola Mundo" />
    </div>
  )

}







export default App
