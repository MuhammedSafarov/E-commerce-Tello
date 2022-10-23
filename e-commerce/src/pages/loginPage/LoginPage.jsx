import React from "react";
import Footer from "../homePage/components/Footer";
import Navbar from "../homePage/components/Navbar";
import NavigationMenu from "../homePage/components/NavigationMenu";
import LoginContent from "./components/LoginContent";

const loginPage = () => {
  return (
    <div>
      <Navbar />
      <NavigationMenu />
      <LoginContent />
      <Footer />
    </div>
  );
};

export default loginPage;
