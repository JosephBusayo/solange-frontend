import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
/* import NotFound from "./screens/NotFound"; */
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { ProductDetail } from './Pages/ProductDetail';
import { CartPage } from "./Pages/CartPage";

const App = () => {

  return (
    <section className="no-scrollbar overflow-y-auto overflow-x-auto">
      {/* {error && <p>Error: {error}</p>} */}

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart/:id" element={<CartPage />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </section>
  );
}

export default App;

