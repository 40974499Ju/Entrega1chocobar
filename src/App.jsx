import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componentes/Cart/Cart";
import Productos from "./componentes/Productos/Productos";
import Formulario from "./componentes/Formulario/formulario";
const App = () => {
  return (
    <div>
      <BrowserRouter>
       
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}  />
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}  />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<h2>Sitio en construcción</h2>} />

          </Routes>
        </CarritoProvider>
       
      </BrowserRouter>
      <Formulario/>
      <Productos/>
      
      

      
    </div>
  )
}

export default App
