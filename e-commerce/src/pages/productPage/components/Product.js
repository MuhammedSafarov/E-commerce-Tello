import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ image, name, price, id }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/products-detail/${id}`);
  };

  return (
    <div onClick={onClickHandler} className="product-card">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <div className="card-header">{name}</div>
      <div className="price">
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default Product;
