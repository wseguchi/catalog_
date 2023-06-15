import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Product from './components/Product';
import Logo from './components/Logo';

const App = () => {
  return (
    <>
      <Logo />
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='product/:id' element={<Product />} />
              <Route path='contact' element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
