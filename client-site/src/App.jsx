import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductByBrand from './Pages/ProductByBrand';
import ProductByCategories from './Pages/ProductByCategories';
import ProductByKeyWord from './Pages/ProductByKeyWord';
import ProductDetails from './Pages/ProductDetails';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/by-brands/:id" element={<ProductByBrand />} />
        <Route path="/by-categories/:id" element={<ProductByCategories />} />
        <Route path="/by-key-word/:keyWord" element={<ProductByKeyWord />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;