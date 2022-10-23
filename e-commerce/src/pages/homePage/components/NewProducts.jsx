import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import Product from "../../productPage/components/Product";

const NewProducts = ({ newPhone }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    newPhone ? setLoading(false) : setLoading(true);
  });

  return (
    <div className="best-seller">
      <div className="bestseller-heading">
        <h4 className="bestsller-h">Yeni gələn məhsullar</h4>
        <div className="show-all">
          <Link className="showall-link" to="/products/newproducts">
            Hamısına bax
          </Link>
          <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
        </div>
      </div>

      <div className="bestseller-products">
        {loading ? (
          <div className="skeleton">
            <div className="product-card-skeleton">
              <Skeleton className="skeleton-img" height={200} />
              <Skeleton count={2} />
            </div>
            <div className="product-card-skeleton">
              <Skeleton className="skeleton-img" height={200} />
              <Skeleton count={2} />
            </div>
            <div className="product-card-skeleton">
              <Skeleton className="skeleton-img" height={200} />
              <Skeleton count={2} />
            </div>
            <div className="product-card-skeleton">
              <Skeleton className="skeleton-img" height={200} />
              <Skeleton count={2} />
            </div>
          </div>
        ) : (
          newPhone?.map((el) => {
            return (
              <Product
                key={el.id}
                image={el.image.url}
                name={el.name}
                price={el.price.formatted_with_symbol}
                id={el.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default NewProducts;
