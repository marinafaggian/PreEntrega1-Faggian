import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>

      <Link to={'/cart'}>
        <img src="../img/CarritoDeCompras.png" alt="Carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget