//1- importar useStates y createContex que me permite crear un contexto que almanecera toda la logica de mi carrillo de compras

import { useState, createContext } from "react";

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
}