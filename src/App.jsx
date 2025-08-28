import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Page from './page/page';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App 
