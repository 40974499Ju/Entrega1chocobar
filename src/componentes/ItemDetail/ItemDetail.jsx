import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);



  const { agregarAlCarrito } = useContext(CarritoContext);




  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);



    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <p>Precio:{precio} </p>
      <p>ID:{id} </p>
      <p>
        "¿Será este el vestido perfecto para tu gran día? Descúbrelo y haz realidad tus sueños de boda con elegancia y estilo."</p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail