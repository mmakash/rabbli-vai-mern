import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductByBrand from './Pages/ProductByBrand';
import ProductByCategories from './Pages/ProductByCategories';
import ProductByKeyWord from './Pages/ProductByKeyWord';
import ProductDetails from './Pages/ProductDetails';
import About from './Pages/About';
import Refund from './Pages/Refund';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import HowToBuy from './Pages/HowToBuy';
import Contact from './Pages/Contact';
import Complain from './Pages/Complain';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/by-brands/:id" element={<ProductByBrand />} />
        <Route path="/by-categories/:id" element={<ProductByCategories />} />
        <Route path="/by-key-word/:keyWord" element={<ProductByKeyWord />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/complain" element={<Complain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;