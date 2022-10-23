import React from "react";
import Footer from "../homePage/components/Footer";
import Navbar from "../homePage/components/Navbar";
import NavigationMenu from "../homePage/components/NavigationMenu";
import DetailContent from "./components/DetailContent";
import "./Detail.scss";

const Detail = () => {
  return (
    <div>
      <Navbar />
      <NavigationMenu />
      <DetailContent />
      <Footer />
    </div>
  );
};

export default Detail;
