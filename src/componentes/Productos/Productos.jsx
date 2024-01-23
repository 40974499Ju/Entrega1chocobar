import React from 'react'
import { useState, useEffect } from 'react'
import { getDocs, collection, query } from 'firebase/firestore'
import { db } from '../../services/config'

const Productos = () => {
    const [productos, setProductos] = useState([]);
  return (
    <div>Productos</div>
  )
}

export default Productos