const misProductos = [
    { id: "1", nombre: "Balada para mi muerte", autor:"Nestor Zadoff", stock:20, idCat: "SATB", precio: 1000, img: '../img/BaladaParaMiMuerte.jpg' },
    { id: "2", nombre: "Compadre del sol", autor:"Ricardo Mansilla", stock:20, idCat: "SATB", precio: 1500, img: '../img/CompadreDelSol.jpg' },
    { id: "3", nombre: "El día que me quieras", autor:"Vivian Tabbush", stock:20, idCat: "SATB", precio: 1500, img: '../img/ElDiaQueMeQuieras.jpg' },
    { id: "4", nombre: "Gato de la calesita", autor:"Camilo Matta", stock:20, idCat: "SA", precio: 2000, img: '../img/GatoDeLaCalesita.jpg' },
    { id: "5", nombre: "La baguala", autor:"Francisco Gato", stock:20, idCat: "SA", precio: 1500, img: '../img/LaBaguala.jpg' },
    { id: "6", nombre: "El Porteñito", autor:"Oreste Chlopecki", stock:20, idCat: "TB", precio: 2000, img: '../img/ElPorteñito.jpg' },
    { id: "7", nombre: "Melodías de Arrabal", autor:"Vivian Tabbush", stock:20, idCat: "SA", precio: 1500, img: '../img/MelodiasDeArrabal.jpg' },
    { id: "8", nombre: "Milonga triste", autor:"Javier Zentner", stock:20, idCat: "TB", precio: 1900, img: '../img/MilongaTriste.jpg' },
    { id: "9", nombre: "El explicado", autor:"Les Luthiers", stock:20, idCat: "TB", precio: 2500, img: '../img/ElExplicado.jpg' },
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100);
    });
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find((item) => item.id == id);
            resolve(producto);
        }, 100);
    });
}

export const getProductorPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter((item) => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500);
    });
}
