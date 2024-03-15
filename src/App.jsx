import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

/* import NotFound from "./screens/NotFound"; */
import { Home } from './Pages/Home';
import {Navbar} from './Components/Navbar';
import {Footer} from './Components/Footer';
import { Login } from './Pages/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={
          <>
            <Navbar/>
            <Home />
            <Footer />
          </>
        }
        />

        <Route exact path="/login" element={<Login  />} />
      </Routes>
    </>
  );
}

export default App;

