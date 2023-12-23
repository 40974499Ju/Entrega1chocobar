import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './componentes/Home/home';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Item from './componentes/Item/Item';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />

        </Routes >
      </BrowserRouter >




      

     
    </div >
  )

}







export default App
