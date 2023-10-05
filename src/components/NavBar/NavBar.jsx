import React from 'react';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

const navbar = () => {
  return (
    <header>
        <div className='titulos'>    
        <h1>Auris</h1>
        <h3>Partituras</h3>
        </div>

        <nav>
            <ul>
                <li>Compositores</li>
                <li>Estilos</li>
                <li>Orgánico</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default navbar