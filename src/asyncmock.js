const productos = [
    { id: "1", nombre: "Dress julieta", stock: 10, precio: 17000, img: "../img/julieta.jpg", idCat: "2" },
    { id: "2", nombre: "Dress Amapola", stock: 10, precio: 13000, img: "../img/amapola.jpg", idCat: "2" },
    { id: "3", nombre: "Dress Raquelina", stock: 10, precio: 15000, img: "../img/raquelina.jpg", idCat: "3" },
    { id: "4", nombre: "Drees Ana", stock: 10, precio: 14000, img: "../img/ana.jpg", idCat: "3" },
]










export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}



export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}



