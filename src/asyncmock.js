const misProductos = [
    {id: 1, nombre: "Balada para mi muerte", autor: "Nestor Zadoff", organico: "SATB", precio: 1000, img: './img/BaladaParaMiMuerte.jpg'},
    {id: 2, nombre: "Buenos Aires Hora Cero", autor: "Nestor Zadoff", organico: "SATB", precio: 1000, img: './img/BuenosAiresHoraCero.jpg'},
    {id: 3, nombre: "Chacarera de las Piedras", autor: "Gustavo Felice", organico: "SATB", precio: 1200, img: './img/ChacareraDeLasPiedras.jpg'},
    {id: 4, nombre: "Compadre del Sol", autor: "Ricardo Mansilla", organico: "SATB", precio: 1500, img: './img/CompadreDelSol.jpg'},
    {id: 5, nombre: "El día que me quieras", autor: "Vivian Tabbush", organico: "SATB", precio: 1500, img: './img/ElDiaQueMeQuieras.jpg'},
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 1500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() =>{
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 1000)
    })
}