import React from "react";
import Footer from "../homePage/components/Footer";
import Navbar from "../homePage/components/Navbar";
import NavigationMenu from "../homePage/components/NavigationMenu";
import "./BasketPage.scss";
import BasketContent from "./components/BasketContent";
import EmptyBasket from "./components/EmptyBasket";
import { useSelector } from "react-redux";

const BasketPage = () => {
  const { value } = useSelector((state) => state.basket);
  return (
    <div>
      <Navbar />
      <NavigationMenu />
      {value?.total_items > 0 ? <BasketContent /> : <EmptyBasket />}
      <Footer />
    </div>
  );
};

export default BasketPage;
