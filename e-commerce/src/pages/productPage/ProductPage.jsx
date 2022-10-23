import React, { useState, useEffect } from "react";
import Footer from "../homePage/components/Footer";
import Navbar from "../homePage/components/Navbar";
import NavigationMenu from "../homePage/components/NavigationMenu";
import ProductsContent from "./components/ProductsContent";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import { commerce } from "../../Commerce";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const categorie = useParams().slug;
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await commerce.products.list({
        category_slug: [categorie],
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getProducts();
  }, [categorie]);

  return (
    <div className="product-p">
      <Navbar />
      <NavigationMenu />
      <ProductsContent
        products={products}
        loading={loading}
        setLoading={setLoading}
      />
      <Footer />
    </div>
  );
};

export default ProductPage;
