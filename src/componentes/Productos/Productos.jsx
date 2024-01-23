import { useState, useEffect } from "react";
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/config";


const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        const misProductos = query(collection(db, "productos"));

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                
            })
    }, [productos])

   

    const descontarStock = async(producto) => {
        const productoRef = doc(db, "productos", producto.id); 
        const nuevoStock = producto.stock - 1; 

        await updateDoc(productoRef, {stock: nuevoStock});

        
        const productosActualizados = productos.map( (p) => {
            if(p.id === producto.id) {
                return {...p, stock: nuevoStock};
            }
            return p;
        })
        setProductos(productosActualizados);
    }


    return (
        <div>
            <h2>Mis productos</h2>
            <div className="productos-container">
                {
                    productos.map(producto => (
                        <div>
                            <h3> {producto.nombre} </h3>
                            <p> Precio: {producto.precio} </p>
                            <p> Stock: {producto.stock} </p>
                            <button onClick={() => descontarStock(producto) }> Comprar </button>
                        </div>
                    ))

                }
            </div>

        </div>
    )
}

export default Productos