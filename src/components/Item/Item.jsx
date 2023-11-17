import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, autor, idCat, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <h3>Autor: {autor}</h3>
      <p>Precio: {precio}</p>
      <p>Orgánico: {idCat}</p>
      <p>Stock: {stock}</p>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item