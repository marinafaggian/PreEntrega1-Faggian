import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import { useState, useEffect } from 'react';

const navbar = () => {
  return (
    <header className="header">
      <div className='navBar'>
        <Link to="/" className='titulos'>
          <img className='logoNavBar' src="../img/logo_transparent.png" alt="Logo Auris" />
          <h2>AURIS</h2>
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink to="categoria/SA" className={"li"}>Voces Iguales (SA)</NavLink>
            </li>
            <li>
              <NavLink to="categoria/TB" className={"li"}>Voces Iguales (TB)</NavLink>
            </li>
            <li>
              <NavLink to="categoria/SATB" className={"li"}>Voces Mixtas (SATB)</NavLink>
            </li>
            <li>
              <NavLink to="/*" className={"li"}>Instrumentales</NavLink>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  )
}

export default navbar