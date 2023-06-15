import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Product from './components/Product';
import Logo from './components/Logo';
import About from './components/About';

const App = () => {
  return (
    <div className='container'>
      <Logo />
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='product/:id' element={<Product />} />
              <Route path='contact' element={<Contact />} />
              <Route path='about' element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
