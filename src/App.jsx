import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
/* import NotFound from "./screens/NotFound"; */
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { ProductDetail } from './Pages/ProductDetail';
const BASE_URL =  "https://solange.onrender.com";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(`${BASE_URL}/api/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="no-scrollbar overflow-y-auto overflow-x-auto">
      {/* {error && <p>Error: {error}</p>} */}

      <Routes>
        <Route exact path="/home" element={<Home products={products} isLoading={isLoading}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </section>
  );
}

export default App;

