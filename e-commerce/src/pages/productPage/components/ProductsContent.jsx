import "./ProductsContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsContent = ({ products, loading }) => {
  return (
    <div className="common-container">
      <div className="sidebar">
        <div className="check-header">
          <h5>Brend</h5>
          <FontAwesomeIcon icon={faMinus} className="nav-icons" />
        </div>
        <div className="checkboxes">
          <div className="check">
            <input type="checkbox" value="Apple" />
            <label>Apple</label>
          </div>
          <div className="check">
            <input type="checkbox" value="Apple" />
            <label>Samsung</label>
          </div>
          <div className="check">
            <input type="checkbox" value="Apple" />
            <label>Xiaomi</label>
          </div>
          <div className="check">
            <input type="checkbox" value="Apple" />
            <label>Honor</label>
          </div>
        </div>
        <div className="check-header">
          <h5>Type</h5>
          <FontAwesomeIcon icon={faPlus} className="nav-icons" />
        </div>
      </div>

      <div className="products-container">
        <div className="heading">
          <h4>Məhsullar</h4>
        </div>
        <div className="products-list">
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
            </div>
          ) : (
            products.map((el) => {
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
    </div>
  );
};

export default ProductsContent;
