import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ContentNavigation = ({
  phonesCount,
  accessoriesCount,
  smartWatchCounts,
}) => {
  return (
    <div className="content-navigation">
      <div className="mobile-products nav-card">
        <div className="nav-text">
          <p className="bolder">Telefon</p>
          <p className="low-opacity">Məhsul sayı: {phonesCount}</p>
          <div>
            <Link className="product-link" to="/products/phones">
              Məhsullara keçid{" "}
            </Link>
            <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
          </div>
        </div>
        <img id="xiaomi" src={require("./img/xiaomi.png")} alt="" />
      </div>

      <div className="other-products">
        <div className="smart-watch nav-card">
          <div className="nav-text">
            <p className="bolder">Smart Saat</p>
            <p className="low-opacity">Məhsul sayı: {smartWatchCounts}</p>
            <div>
              <Link className="product-link" to="/products/smartwatch">
                Məhsullara keçid{" "}
              </Link>
              <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
            </div>
          </div>
          <img src={require("./img/AppleWatch.png")} alt="" />
        </div>

        <div className="accessories nav-card">
          <div className="nav-text">
            <p className="bolder">Aksesuar</p>
            <p className="low-opacity">Məhsul sayı: {accessoriesCount}</p>
            <div>
              <Link className="product-link" to="/products/accsessories">
                Məhsullara keçid{" "}
              </Link>
              <FontAwesomeIcon icon={faAngleRight} className="nav-icons" />
            </div>
          </div>
          <img src={require("./img/MagSafe.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContentNavigation;
