const productos = [
    { id: 1, nombre: "Dress julieta", precio: 17.000, idCat:"2" },
    { id: 2, nombre: "Dress Amapola", precio: 13.000, idCat:"2" },
    { id: 3, nombre: "Dress Raquelina", precio: 15.500, idCat:"3" },
    { id: 4, nombre: "Dress Ana", precio: 14.000, idCat:"3" },

]







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
        },2000)
    })
}