import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} =useContext(CarritoContext);
  return (
    <div className='itemConteiner'>
        <h4 className='itemNombre'> {item.nombre} </h4>
        <p className='itemInfo'>Cantidad: {cantidad} </p>
        <p className='itemInfo'>Precio: {item.precio} </p>
        <button onClick={()=> eliminarProducto(item.id)} className='buttonEliminar'> Eliminar </button>
    </div>
  )
}

export default CartItem