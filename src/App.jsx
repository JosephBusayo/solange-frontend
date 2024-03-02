import React from "react";
import { Home } from "../src/Pages/Home";
import { Navbar } from "./components/Navbar";
import { Shop } from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Product } from "./components/Product";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Shop />
              <Footer />
            </>
          }
        />

        <Route
          exact
          path="/product"
          element={
            <>
              <Navbar />
              <Product />
              <Footer />
            </>
          }
        />

        <Route exact path="/Signin" element={<SignIn />} />
        <Route exact path="/Signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
