import React from 'react';
import './Item.css';

const Item = ({id, nombre, autor, organico, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre}/>
        <h3>Nombre: {nombre}</h3>
        <h4>Autor: {autor}</h4>
        <p>Precio: {precio}</p>
        <p>Orgánico: {organico}</p>
        <p>ID: {id}</p>
        <button>Ver Detalles</button>
    </div>
  )
}

export default Item