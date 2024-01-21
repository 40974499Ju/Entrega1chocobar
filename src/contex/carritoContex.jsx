//1- importar useStates y createContex que me permite crear un contexto que almanecera toda la logica de mi carrillo de compras

import { useState, createContext } from "react";

//2-creamos el contex:

export const CarritoContex = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})