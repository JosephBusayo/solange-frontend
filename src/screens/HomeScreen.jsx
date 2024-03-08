import React from "react";
import Navbar from "./../components/Navbar";
import ShopSection from "../components/homeComponents/ShopSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "../components/Footer";

export const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar /> 
      <ShopSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer /> 
    </div>
  );
};


