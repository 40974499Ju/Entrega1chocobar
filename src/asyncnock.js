const productos = [
    { id: 1, nombre: "Dress julieta", precio: 17.000, img:"./img/vestidojulieta.jpg",  idCat:"2" },
    { id: 2, nombre: "Dress Amapola", precio: 13.000,img:"./img/vestidoamapola.jpg", idCat:"2" },
    { id: 3, nombre: "Dress Raquelina", precio: 15.500, img:"./imagenes/vestidoraquelina", idCat:"3" },
    { id: 4, nombre: "Dress Ana", precio: 14.000, img:"./imagenes/vestidoana.jpg", idCat:"3" },

]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {

        resolve (productos);
    }, 2000)
    })
}



export const getUnProducto = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout (()=>{
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        },2000)
    })
}