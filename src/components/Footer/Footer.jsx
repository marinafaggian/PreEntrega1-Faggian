import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='newsConteiner'>
          <h3 className='tituloFooter'>Suscribite a nuestro newsletter</h3>
          <div className='newsForm'>
            <input type="text" placeholder='Ingresá tu email' className='newsInput'/>
            <button className='newsButton'> Enviar </button>
          </div>
        </div>
        <div className='redesConteiner'>
          <h3 className='tituloFooter'>Nuestras redes</h3>
          <div className='redesImg'>
            <img src="../img/whatsapp.png" alt="WhatsApp" className='redes'/>
            <img src="../img/instagram.png" alt="Instagram" className='redes'/>
            <img src="../img/twitter.png" alt="X (ex Twitter)" className='redes'/>
          </div>
        </div>
    </div>
  )
}

export default Footer