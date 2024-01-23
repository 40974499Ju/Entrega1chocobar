const productos = [
    { id: "1", nombre: "Dress julieta", stock: 10, precio: 17000, img: "../img/julieta.jpg", idCat: "2" },
    { id: "2", nombre: "Dress Amapola", stock: 10, precio: 13000, img: "../img/amapola.jpg", idCat: "2" },
    { id: "3", nombre: "Dress Raquelina", stock: 10, precio: 15000, img: "../img/raquelina.jpg", idCat: "2" },
    { id: "4", nombre: "Drees Ana", stock: 10, precio: 14000, img: "../img/ana.jpg", idCat: "2" },
    { id: "5", nombre: "Dress Esther", stock: 10, precio: 20000, img: "../img/esther.jpg", idCat: "3" },
    { id: "6", nombre: "Dress Franca ", stock: 10, precio: 38000, img: "../img/franca.jpg", idCat: "2" },
    { id: "7", nombre: "Dress franchesca", stock: 10, precio: 43000, img: "../img/franchesca.jpg", idCat: "2" },
    { id: "8", nombre: "Dress victoria", stock: 10, precio: 80000, img: "../img/victoria.jpg", idCat: "2" },
    { id: "9", nombre: "Dress Macarena", stock: 10, precio: 75000, img: "../img/macarena.jpg", idCat: "3" },
    { id: "10", nombre: "Dress Mariana", stock: 10, precio: 100000, img: "../img/mariana.jpg", idCat: "2" },
    { id: "11", nombre: "Dress Merida", stock: 10, precio: 93000, img: "../img/merida.jpg", idCat: "3" },
    { id: "12", nombre: "Dress Gabriela", stock: 10, precio: 197000, img: "../img/gabriela.jpg", idCat: "3" },
    { id: "13", nombre: "Dress Gladys", stock: 10, precio: 86000, img: "../img/gladys.jpg", idCat: "2" },
    { id: "14", nombre: "Dress Maria", stock: 10, precio: 79000, img: "../img/maria2.jpg", idCat: "2" },
    { id: "15", nombre: "Dress Ariel", stock: 10, precio: 110000, img: "../img/ariel.jpg", idCat: "2" },
    { id: "16", nombre: "Dress Florencia", stock: 10, precio: 94000, img: "../img/florencia2.jpg", idCat: "3" },
    { id: "17", nombre: "Dress Amalia", stock: 10, precio: 132000, img: "../img/amalia.jpg", idCat: "3" },
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



