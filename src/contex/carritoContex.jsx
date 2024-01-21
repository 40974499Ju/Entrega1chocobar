//1- importar useStates y createContex que me permite crear un contexto que almanecera toda la logica de mi carrillo de compras

import { useState, createContext } from "react";
import { getProductosPorCategoria } from "../asyncmock";

//2-creamos el contex:

export const CarritoContex = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//el valor inicial es un objeto, con la propiedad carrito, que es una array vacio, el total de la compra y la cantidad del total del carrito 

export const CarritoProvider = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCatidadTotal] = useState(0);

    console.log(carrito);

    //////////////////////////////////////////////////////////////////////////
    //agremos algunas funciones para la logica del carrito 

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCatidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setCatidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }

    }

    //funcion para elimanar un producto:

    const eliminarProducto = (id) => {
        const prodcutoEliminado = carrito.find(prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);


        setCarrito(carritoActualizado);
        setCatidadTotal(prev => prev - prodcutoEliminado.cantidad);
        setTotal(prev => prev - (prodcutoEliminado.item.precio * prodcutoEliminado.cantidad));
    }

    //funcion para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
        setCatidadTotal(0);
        setTotal(0);
    }
}