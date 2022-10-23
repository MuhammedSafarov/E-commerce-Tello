import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import BestSeller from "./components/BestSeller";
import NewProducts from "./components/NewProducts";
import Advertisements from "./components/Advertisements";
import NewAccessories from "./components/NewAccessories";
import ContentNavigation from "./components/ContentNavigation";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Cooperation from "./components/Cooperation";
import Footer from "./components/Footer";
import { commerce } from "../../Commerce";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [mostSelled, setMostSelled] = useState(null);
  const [newPhone, setNewPhone] = useState(null);
  console.log(loading);

  const [newAccessories, setNewAccessories] = useState(null);
  const [accessoriesCount, setAccessoriesCount] = useState(null);

  const [phonesCount, setPhonesCount] = useState(null);

  const [smartWatchCounts, setSmartWatchCounts] = useState(null);

  const calculatePhonesCount = async () => {
    const data = await commerce.products.list({
      category_slug: ["phones"],
    });
    setLoading(true);
    setPhonesCount(data?.data.length);
  };

  const calculateWatchesCount = async () => {
    const data = await commerce.products.list({
      category_slug: ["smartwatch"],
    });
    setLoading(true);
    console.log(data?.data);
    setSmartWatchCounts(data?.data.length);
  };

  const fetchProducts = async () => {
    const data = await commerce.products.list({
      category_slug: ["bestselled"],
    });
    setMostSelled(data?.data?.slice(0, 4));
    setLoading(true);
  };

  const fetchNewPhone = async () => {
    const data = await commerce.products.list({
      category_slug: ["newproducts"],
    });
    setNewPhone(data?.data?.slice(0, 4));
    setLoading(true);
  };

  const fetchNewAccessories = async () => {
    const data = await commerce.products.list({
      category_slug: ["accsessories"],
    });
    setNewAccessories(data?.data?.slice(0, 4));
    setLoading(true);
    setAccessoriesCount(data?.data.length);
  };

  useEffect(() => {
    fetchProducts();
    fetchNewPhone();
    fetchNewAccessories();
    calculatePhonesCount();
    calculateWatchesCount();
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <NavigationMenu />
      <Content />
      <BestSeller mostSelled={mostSelled} />
      <NewProducts newPhone={newPhone} />
      <Advertisements />
      <NewAccessories newAccessories={newAccessories} />
      <ContentNavigation
        phonesCount={phonesCount}
        accessoriesCount={accessoriesCount}
        smartWatchCounts={smartWatchCounts}
      />
      <Services />
      <Cooperation />
      <Footer />
    </div>
  );
};

export default HomePage;
