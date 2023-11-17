import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import "./App.css";
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/*' element={<h2>Sitio en construcción</h2>} />
            </Routes>
            <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
