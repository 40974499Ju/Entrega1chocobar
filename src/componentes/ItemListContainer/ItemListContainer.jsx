import React from 'react'
import './ItemListContainer.css'; 
import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../../asyncnock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);
  const {idCategoria} = useParams();
  useEffect( ()=> {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
    .then(respuesta => setProductos(respuesta))

  }, [idCategoria])
}

export default ItemListContainer