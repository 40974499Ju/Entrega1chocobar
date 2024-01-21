import { useState } from 'react';
import Contador from '../contador/contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContex } from '../../contex/carritoContex';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, stock, precio, img}) => {
  
  const [agregarCantidad, setAgregarCantidad]  = useState(0);

  //cambios de la clase 6

  const {agregarAlCarrito} = useContext(CarritoContex);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);
  }

  const item = {id, nombre, precio};
  agregarAlCarrito(item, cantidad);

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <p>Precio:{precio} </p>
        <p>ID:{id} </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ducimus nisi deleniti libero quia molestiae magnam suscipit ad cumque et praesentium est, ullam recusandae eaque nobis corporis natus repudiandae necessitatibus!</p>
        <img src={img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
    </div>
  )
}

export default ItemDetail