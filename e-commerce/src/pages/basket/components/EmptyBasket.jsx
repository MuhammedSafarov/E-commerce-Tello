import React from "react";
import { Link } from "react-router-dom";
import "./EmptyBasket.scss";

const EmptyBasket = () => {
  return (
    <div className="common-empty-basket">
      <div className="empty-basket">
        <div className="products-length">
          <p>Səbət (0 məhsul)</p>
        </div>
        <div className="empty-content">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33398 8.33334H15.584C20.084 8.33334 23.6257 12.2083 23.2507 16.6667L19.7923 58.1666C19.209 64.9583 24.584 70.7916 31.4173 70.7916H75.7923C81.7923 70.7916 87.0423 65.875 87.5006 59.9167L89.7506 28.6667C90.2506 21.75 85.0006 16.125 78.0423 16.125H24.2507"
              stroke="#BDBDBD"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M67.7083 91.6667C70.5848 91.6667 72.9167 89.3348 72.9167 86.4583C72.9167 83.5819 70.5848 81.25 67.7083 81.25C64.8319 81.25 62.5 83.5819 62.5 86.4583C62.5 89.3348 64.8319 91.6667 67.7083 91.6667Z"
              stroke="#BDBDBD"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.3744 91.6667C37.2508 91.6667 39.5827 89.3348 39.5827 86.4583C39.5827 83.5819 37.2508 81.25 34.3744 81.25C31.4979 81.25 29.166 83.5819 29.166 86.4583C29.166 89.3348 31.4979 91.6667 34.3744 91.6667Z"
              stroke="#BDBDBD"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.5 33.3333H87.5"
              stroke="#BDBDBD"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Səbətiniz hal hazırda boşdur</p>
          <button className="shopping-link">
            <Link id="linkToHome" to="/">
              Alışverişə davam et
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyBasket;
