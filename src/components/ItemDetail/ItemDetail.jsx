import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, autor, stock, idCat, precio, img, detalle }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const { agregarAlCarrito } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
    }


    return (
        <div className='contenedorItem'>
            <div className='divImagen'>
                <img src={img} alt={nombre} className='imagen'/>
            </div>
            <div className='info'>
                <h2 className='infoItems'>Nombre: {nombre} </h2>
                <h3 className='infoItems'>Autor: {autor}</h3>
                <h3 className='infoItems'>Precio: {precio}</h3>
                <h3 className='infoItems'>Orgánico: {idCat}</h3>
                <h3 className='infoItems'>Stock: {stock}</h3>
                <p className='infoItems detalle'>{detalle}</p>
                {
                    agregarCantidad > 0 ? (<Link to="/cart" className='terminarCompra'>Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail