import React, { useState, useEffect, useCallback } from "react";
import { DebounceInput } from "react-debounce-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBasketAsync } from "../../../store/actions/Basket";
import { commerce } from "../../../Commerce";
import { getUser } from "../../../store/actions/Users";
const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { value } = useSelector((state) => state.basket);
  const { user } = useSelector((state) => state.user);
  console.log(user.firstname);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);

  const navigate = useNavigate();

  const onClickHamburger = () => {
    setHamburgerMenu((prev) => !prev);
  };

  const fetchSearchProducts = useCallback(async () => {
    const response = await commerce.products.list({
      query: inputValue.length > 0 ? inputValue : null,
    });
    setSearchedProduct(response?.data?.slice(0, 3));
  }, [inputValue]);

  useEffect(() => {
    dispatch(getBasketAsync());
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (inputValue.length > 0) {
      fetchSearchProducts();
    } else {
      setSearchedProduct([]);
    }
  }, [inputValue, setSearchedProduct, fetchSearchProducts]);
  // console.log(searchedProduct);

  return (
    <>
      <div className="navbar">
        <div className={hamburgerMenu ? "modul opened" : "modul"}>
          <div>
            <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
            <Link to="/products/smartwatch" className="link">
              Smart saat
            </Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
            <Link to="/products/bestselled" className="link">
              Çox satılanlar
            </Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
            <Link to="/products/accsessories" className="link">
              Aksesuarlar
            </Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
            <Link to="/products/phones" className="link">
              Telefonlar
            </Link>
          </div>
        </div>

        <div className="first-p">
          <FontAwesomeIcon
            onClick={onClickHamburger}
            icon={faBars}
            className="menu-icon"
          />
          <Link to="/" className="logo-link">
            <img src={require("./img/Tello-img.png")} alt="tel-img" />
            <svg
              width="73"
              height="27"
              viewBox="0 0 73 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.65 5.668V26H11.628V5.668H18.666V1.86H0.646V5.668H7.65ZM34.8343 17.67C34.8343 12.366 31.2643 8.66 26.3003 8.66C21.1323 8.66 17.5623 12.468 17.5623 17.5C17.5623 22.566 21.2683 26.34 26.2663 26.34C28.3403 26.34 30.1423 25.796 31.6043 24.742C33.1003 23.688 34.0863 22.328 34.5963 20.662H30.6863C29.9043 22.26 28.3403 23.042 26.4023 23.042C24.9403 23.042 23.7163 22.6 22.7643 21.716C21.8463 20.832 21.3363 19.744 21.2683 18.418H34.8003L34.8343 17.67ZM21.4043 15.766C21.9143 13.216 23.7843 11.788 26.1983 11.788C28.4083 11.788 30.2443 13.148 30.7883 15.766H21.4043ZM38.641 0.499998V26H42.381V0.499998H38.641ZM47.4066 0.499998V26H51.1466V0.499998H47.4066ZM54.9483 17.5C54.9483 22.43 58.8583 26.34 63.8563 26.34C68.8543 26.34 72.7643 22.43 72.7643 17.5C72.7643 12.57 68.8543 8.66 63.8563 8.66C58.8583 8.66 54.9483 12.57 54.9483 17.5ZM68.9563 17.5C68.9563 20.492 66.8143 22.872 63.8563 22.872C60.8303 22.872 58.7223 20.492 58.7223 17.5C58.7223 14.508 60.8303 12.128 63.8563 12.128C66.8143 12.128 68.9563 14.508 68.9563 17.5Z"
                fill="#2DD06E"
              />
            </svg>
          </Link>
        </div>
        <div className="second-p">
          <form>
            <button id="search">
              <FontAwesomeIcon icon={faSearch} className="nav-icons" />
            </button>

            <DebounceInput
              className="input"
              minLength={1}
              debounceTimeout={1000}
              placeholder="Axtarış..."
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="searched-products">
              {searchedProduct?.map((el) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/products-detail/${el.id}`);
                    }}
                    key={el.id}
                    className="searched-item"
                  >
                    <img src={el?.image.url} alt="" />
                    <h5>{el.name}</h5>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
        <div className="third-p">
          <Link className="login-link" to="/login">
            <FontAwesomeIcon icon={faUser} className="nav-icons" />
          </Link>
          <Link className="basket-link" to="/basket">
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icons" />
          </Link>
          <div className="basket-count-div">
            <p className="basket-count">
              {value?.total_items > 0 ? value?.total_items : 0}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
