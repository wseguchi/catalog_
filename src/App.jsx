import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
