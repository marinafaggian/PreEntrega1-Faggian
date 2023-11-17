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
            <h2>Nombre:{nombre} </h2>
            <h3>Autor: {autor}</h3>
            <h3>Precio: {precio}</h3>
            <h3>Orgánico: {idCat}</h3>
            <h3>Stock: {stock}</h3>
            <img src={img} alt={nombre} />
            <p>{detalle}</p>
            {
                agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail