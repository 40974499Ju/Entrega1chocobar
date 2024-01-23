import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);
    if (cantidadTotal === 0) {
        return (
            <>
                <h2>El carrito esta vacio</h2>
                <Link to="/"> Ver productos </Link>
            </>

        )
    }
    return (
        <div>
            {
                carrito.map(producto => <cartItem key={producto.item.id} {...producto} />)
            }
            <h3>total: $ {total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()}> vaciar carrito </button>
            <link to="/checkout">Finalizar Compra</link>

        </div>
    )
}

export default Cart