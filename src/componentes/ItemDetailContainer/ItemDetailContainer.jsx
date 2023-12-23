import React from 'react'
import { useState, useEffect } from 'react';
import { getUnProducto } from '../../asyncnock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
 const [producto, setProducto] = useState(null);
 const {idItem} = useParams ();
 useEffect(()=>{
    getUnProducto(idItem)
    .then(respuesta => setProducto(respuesta))
 },[idItem])
 
    return (
    <div>
        <itemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer