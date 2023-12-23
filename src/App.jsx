import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './componentes/Home/home';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/id:categoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />

        </Routes >
      </BrowserRouter >




      

      <ItemListContainer greeting="Hola Mundo" />
    </div >
  )

}







export default App
