import React from 'react'
import { useParams } from 'react-router-dom'

const sastreria = () => {
    const { id } = useParams();
    console.log(id);
    return (
    <div>
         <h2>Sección sastreria</h2>
         <p>ID productos: {id}  </p>

    </div>
   

    )
}

export default sastreria