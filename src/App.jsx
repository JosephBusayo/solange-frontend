import React from "react";
import Home from "../src/Pages/Home";
import Navbar from "./components/Navbar";
import Shop from "./Pages/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
