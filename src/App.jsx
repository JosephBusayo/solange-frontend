import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

/* import NotFound from "./screens/NotFound"; */
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Login } from './Pages/Login';

const App = () => {
  const BASE_URL =  "https://solange.onrender.com";
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
  console.log(products)

  return (
    <>
      {/* {error && <p>Error: {error}</p>} */}

      <Routes>
        <Route exact path="/home" element={<Home products={products} isLoading={isLoading}/>} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

