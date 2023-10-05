import React from 'react';
import './CartWidget.css';
import CarritoDeCompras from '../../assets/CarritoDeCompras.png';

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img src= {CarritoDeCompras} alt="Carrito de compras" />
        <strong> 2 </strong>
    </div>
  )
}

export default CartWidget