import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  faMinus,
  faPlus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import Gallery from "./Gallery";
import { useParams } from "react-router";
import { commerce } from "../../../Commerce";
import LoadingSpinner from "./LoadingSpinner";
import { addBasketAsync } from "../../../store/actions/Basket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailContent = () => {
  const productId = useParams().id;
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const showToastMessage = () => {
    toast.success("Səbətə əlavə edildi !", {
      position: toast.POSITION.TOP_RIGHT,
      className: "success-message",
    });
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    const data = await commerce.products.retrieve(productId);
    setProduct(data);
    setIsLoading(false);
  };

  function addToBasket() {
    dispatch(addBasketAsync({ productId, count }));
  }

  useEffect(() => {
    fetchProducts();
  }, [productId]);

  return (
    <div className="detail-container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="products-details">
          <Gallery product={product} />
          <div className="product-info">
            <div className="product-name">
              <h1>{product?.name}</h1>
            </div>
            <div className="stars">
              <ul>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.85686 0.163269L10.2406 5.24123L15.5712 6.06052L11.714 10.0109L12.6243 15.5918L7.85686 12.9555L3.08944 15.5918L3.99972 10.0109L0.142578 6.06052L5.47315 5.24123L7.85686 0.163269Z"
                      fill="#F2994A"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.85686 0.163269L10.2406 5.24123L15.5712 6.06052L11.714 10.0109L12.6243 15.5918L7.85686 12.9555L3.08944 15.5918L3.99972 10.0109L0.142578 6.06052L5.47315 5.24123L7.85686 0.163269Z"
                      fill="#F2994A"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.85686 0.163269L10.2406 5.24123L15.5712 6.06052L11.714 10.0109L12.6243 15.5918L7.85686 12.9555L3.08944 15.5918L3.99972 10.0109L0.142578 6.06052L5.47315 5.24123L7.85686 0.163269Z"
                      fill="#F2994A"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.85686 0.163269L10.2406 5.24123L15.5712 6.06052L11.714 10.0109L12.6243 15.5918L7.85686 12.9555L3.08944 15.5918L3.99972 10.0109L0.142578 6.06052L5.47315 5.24123L7.85686 0.163269Z"
                      fill="#F2994A"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.85686 0.163269L10.2406 5.24123L15.5712 6.06052L11.714 10.0109L12.6243 15.5918L7.85686 12.9555L3.08944 15.5918L3.99972 10.0109L0.142578 6.06052L5.47315 5.24123L7.85686 0.163269Z"
                      fill="#F2994A"
                    />
                  </svg>
                </li>
              </ul>
              <div>
                | <a>234 comments</a>
              </div>
            </div>
            <div className="price-div">
              <h3 className="price">{product?.price?.formatted_with_symbol}</h3>
              <form className="basket" id="mobile-basket-btn">
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="basket-icon"
                />
                <button
                  onClick={() => {
                    addToBasket();
                    showToastMessage();
                  }}
                  className="basket-btn"
                  type="button"
                >
                  Səbətə At
                </button>
                <ToastContainer />
              </form>
            </div>
            <div className="inc-dec">
              <button className="minus-btn">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="minus"
                  onClick={() =>
                    count > 1 ? setCount(count - 1) : setCount(1)
                  }
                />
              </button>
              <div>{count}</div>
              <button className="plus-btn">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="plus"
                  onClick={() => setCount(count + 1)}
                />
              </button>
            </div>
            <form className="basket" id="desktop-basket-btn">
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className="basket-icon"
              />
              <button
                onClick={() => {
                  addToBasket();
                  showToastMessage();
                }}
                className="basket-btn"
                type="button"
              >
                Səbətə At
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailContent;
