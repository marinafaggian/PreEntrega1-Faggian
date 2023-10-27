import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

const navbar = () => {
  return (
    <header>
      <Link to="/" className='titulos'>
        <img className='logoNavBar' src="../img/logo_transparent.png" alt="Logo Auris" />
        <h3>Partituras</h3>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/SA">Voces Iguales (SA)</NavLink>
          </li>
          <li>
            <NavLink to="categoria/TB">Voces Iguales (TB)</NavLink>
          </li>
          <li>
            <NavLink to="categoria/SATB">Voces Mixtas (SATB)</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default navbar