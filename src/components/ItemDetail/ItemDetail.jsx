import './ItemDetail.css';

const ItemDetail = ({ id, nombre, autor, idCat, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Autor: {autor}</h3>
            <h3>Precio: {precio}</h3>
            <h3>Orgánico: {idCat}</h3>
            <h3>ID: {id}</h3>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo aspernatur reiciendis, minus consequuntur voluptatum beatae accusamus alias repellendus. Distinctio placeat tempora dolor molestiae nesciunt sit soluta, recusandae eveniet aperiam.</p>
        </div>
    )
}

export default ItemDetail