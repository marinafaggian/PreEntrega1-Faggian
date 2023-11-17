import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, autor, idCat, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <h3 className='cardText obra'>Nombre: {nombre}</h3>
      <h3 className='cardText obra'>Autor: {autor}</h3>
      <p className='cardText'>Precio: {precio}</p>
      <p className='cardText'>Orgánico: {idCat}</p>
      <p className='cardText'>Stock: {stock}</p>
      <Link to={`/item/${id}`} className='cardLink'>Ver Detalles</Link>
    </div>
  )
}

export default Item