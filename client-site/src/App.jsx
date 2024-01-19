import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductByBrand from './Pages/ProductByBrand';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/by-brands/:id" element={<ProductByBrand />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;