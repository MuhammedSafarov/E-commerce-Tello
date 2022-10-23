import React, { useEffect } from "react";
import "./BasketContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  getBasketAsync,
  updateBasketCountAsync,
  deleteBasketAsync,
} from "../../../store/actions/Basket";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketLoading from "./BasketLoading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BasketContent = () => {
  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state.basket);


  useEffect(() => {
    dispatch(getBasketAsync());
  }, [dispatch]);

  const showToastMessage = () => {
    toast.error("Məhsul səbətdən silindi !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  console.log(value.line_items);

  return (
    <div className="general-container">
      <div className="products-length">
        <p>Səbət ( {value.total_items} məhsul )</p>
      </div>

      <div className="basket-container">
        <div className="basket-products">
          {value.line_items?.map((el) => {
            return (
              <div key={el.id} className="selected-products">
                <div className="selected-product-info">
                  <Link to={`/products-detail/${el.product_id}`}>
                    <img className="product-img" src={el.image.url} alt="" />
                  </Link>
                  <div className="name-price">
                    <h4 className="product-name">{el.name}</h4>
                    <h5 className="product-price">
                      {el.price.formatted_with_symbol}
                    </h5>
                  </div>
                </div>

                <div className="selected-product-count">
                  <div className="inc-dec">
                    <button className="minus-btn">
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="minus"
                        onClick={() => {
                          dispatch(
                            updateBasketCountAsync({
                              id: el.id,
                              quantity: el.quantity - 1,
                            })
                          );
                        }}
                      />
                    </button>
                    {loading ? <BasketLoading /> : <div>{el.quantity}</div>}
                    <button className="plus-btn">
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="plus"
                        onClick={() => {
                          dispatch(
                            updateBasketCountAsync({
                              id: el.id,
                              quantity: el.quantity + 1,
                            })
                          );
                        }}
                      />
                    </button>
                  </div>
                  <div className="delete-btn">
                    <button
                      onClick={() => {
                        dispatch(
                          deleteBasketAsync({
                            id: el.id,
                          })
                        );
                        showToastMessage();
                      }}
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.900391 4.54541H2.70039H17.1004"
                          stroke="red"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.39922 4.54542V2.72724C5.39922 2.24503 5.58886 1.78257 5.92643 1.44159C6.26399 1.10062 6.72183 0.909058 7.19922 0.909058H10.7992C11.2766 0.909058 11.7344 1.10062 12.072 1.44159C12.4096 1.78257 12.5992 2.24503 12.5992 2.72724V4.54542M15.2992 4.54542V17.2727C15.2992 17.7549 15.1096 18.2174 14.772 18.5583C14.4344 18.8993 13.9766 19.0909 13.4992 19.0909H4.49922C4.02183 19.0909 3.56399 18.8993 3.22643 18.5583C2.88886 18.2174 2.69922 17.7549 2.69922 17.2727V4.54542H15.2992Z"
                          stroke="red"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.19922 9.09094V14.5455"
                          stroke="red"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8008 9.09094V14.5455"
                          stroke="red"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="basket-price">
          <h3>Ümumi</h3>
          <div>
            <p>Məbləğ</p>
            <p>
              {value?.subtotal?.formatted}
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49887 1.77311L8.4672 0.333374L7.47089 0.848187L7.44215 1.77915C3.56073 2.16268 0.5 6.50992 0.5 11.8198C0.5 12.1619 0.512615 12.4997 0.537844 12.8334H1.89708C1.88433 12.5893 1.87594 12.3434 1.87594 12.0946C1.87594 7.27828 4.30653 3.32528 7.40771 2.90228L7.12998 11.9486L8.70709 11.1763L8.52373 2.90406C11.6183 3.3368 14.042 7.28544 14.042 12.0947C14.042 12.3435 14.0337 12.5895 14.0209 12.8335H15.4624C15.4873 12.5002 15.4999 12.1623 15.5001 11.8199C15.4999 6.48302 12.4085 2.11806 8.49887 1.77311Z"
                  fill="#1D2123"
                />
              </svg>
            </p>
          </div>
          <div>
            <p>Çatdırılma</p>
            <p>
              0
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49887 1.77311L8.4672 0.333374L7.47089 0.848187L7.44215 1.77915C3.56073 2.16268 0.5 6.50992 0.5 11.8198C0.5 12.1619 0.512615 12.4997 0.537844 12.8334H1.89708C1.88433 12.5893 1.87594 12.3434 1.87594 12.0946C1.87594 7.27828 4.30653 3.32528 7.40771 2.90228L7.12998 11.9486L8.70709 11.1763L8.52373 2.90406C11.6183 3.3368 14.042 7.28544 14.042 12.0947C14.042 12.3435 14.0337 12.5895 14.0209 12.8335H15.4624C15.4873 12.5002 15.4999 12.1623 15.5001 11.8199C15.4999 6.48302 12.4085 2.11806 8.49887 1.77311Z"
                  fill="#1D2123"
                />
              </svg>
            </p>
          </div>
          <div>
            <p>Hədiyyə paketi</p>
            <p>
              0{" "}
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49887 1.77311L8.4672 0.333374L7.47089 0.848187L7.44215 1.77915C3.56073 2.16268 0.5 6.50992 0.5 11.8198C0.5 12.1619 0.512615 12.4997 0.537844 12.8334H1.89708C1.88433 12.5893 1.87594 12.3434 1.87594 12.0946C1.87594 7.27828 4.30653 3.32528 7.40771 2.90228L7.12998 11.9486L8.70709 11.1763L8.52373 2.90406C11.6183 3.3368 14.042 7.28544 14.042 12.0947C14.042 12.3435 14.0337 12.5895 14.0209 12.8335H15.4624C15.4873 12.5002 15.4999 12.1623 15.5001 11.8199C15.4999 6.48302 12.4085 2.11806 8.49887 1.77311Z"
                  fill="#1D2123"
                />
              </svg>
            </p>
          </div>
          <div>
            <p>Promo Kod</p>
            <p>
              0
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49887 1.77311L8.4672 0.333374L7.47089 0.848187L7.44215 1.77915C3.56073 2.16268 0.5 6.50992 0.5 11.8198C0.5 12.1619 0.512615 12.4997 0.537844 12.8334H1.89708C1.88433 12.5893 1.87594 12.3434 1.87594 12.0946C1.87594 7.27828 4.30653 3.32528 7.40771 2.90228L7.12998 11.9486L8.70709 11.1763L8.52373 2.90406C11.6183 3.3368 14.042 7.28544 14.042 12.0947C14.042 12.3435 14.0337 12.5895 14.0209 12.8335H15.4624C15.4873 12.5002 15.4999 12.1623 15.5001 11.8199C15.4999 6.48302 12.4085 2.11806 8.49887 1.77311Z"
                  fill="#1D2123"
                />
              </svg>
            </p>
          </div>
          <div className="total-price">
            <p>Cəmi</p>
            <p className="price">
              {!loading ? (
                <p>{value?.subtotal?.formatted}</p>
              ) : (
                <BasketLoading />
              )}
              <svg
                id="total-price-current"
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49887 1.77311L8.4672 0.333374L7.47089 0.848187L7.44215 1.77915C3.56073 2.16268 0.5 6.50992 0.5 11.8198C0.5 12.1619 0.512615 12.4997 0.537844 12.8334H1.89708C1.88433 12.5893 1.87594 12.3434 1.87594 12.0946C1.87594 7.27828 4.30653 3.32528 7.40771 2.90228L7.12998 11.9486L8.70709 11.1763L8.52373 2.90406C11.6183 3.3368 14.042 7.28544 14.042 12.0947C14.042 12.3435 14.0337 12.5895 14.0209 12.8335H15.4624C15.4873 12.5002 15.4999 12.1623 15.5001 11.8199C15.4999 6.48302 12.4085 2.11806 8.49887 1.77311Z"
                  fill="red"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketContent;
