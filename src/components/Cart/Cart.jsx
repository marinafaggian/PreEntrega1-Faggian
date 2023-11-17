import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);
    if (cantidadTotal === 0) {
        return (
            <div className='noProductosConteiner'>
                <h2 className='noProductos'>No hay productos en el carrito</h2>
                <Link to="/" className='noProductosLink'>Ver Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <div className='cartConteiner'>
                <h3 className='cartInfo'>Total: ${total}</h3>
                <h3 className='cartInfo'>Cantidad Total: {cantidadTotal} </h3>
                <div className='buttonConteiner'>
                    <Link to="/checkout" className='cartButton'>Finalizar compra</Link>
                    <button onClick={() => vaciarCarrito()} className='cartButton'>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Cart