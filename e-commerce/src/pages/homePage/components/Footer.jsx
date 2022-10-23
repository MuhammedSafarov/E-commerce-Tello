import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-navigation">
        <div className="nav first-p">
          <Link to='/'>
            <div className="logo">
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
            </div>
          </Link>
          <div className="social-media-icons">
            <svg
              className="social-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M14.5455 0.90918H5.45457C2.94419 0.90918 0.909119 2.94425 0.909119 5.45463V14.5455C0.909119 17.0559 2.94419 19.091 5.45457 19.091H14.5455C17.0559 19.091 19.0909 17.0559 19.0909 14.5455V5.45463C19.0909 2.94425 17.0559 0.90918 14.5455 0.90918Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.6364 9.42719C13.7485 10.1838 13.6193 10.9565 13.267 11.6354C12.9148 12.3143 12.3574 12.8648 11.6742 13.2087C10.991 13.5526 10.2168 13.6723 9.46161 13.5508C8.70647 13.4293 8.00886 13.0727 7.46802 12.5319C6.92719 11.991 6.57065 11.2934 6.44914 10.5383C6.32763 9.78315 6.44732 9.00891 6.79119 8.32571C7.13507 7.64251 7.68561 7.08514 8.36452 6.73287C9.04343 6.38059 9.81613 6.25136 10.5727 6.36356C11.3445 6.478 12.0589 6.83761 12.6106 7.38929C13.1623 7.94096 13.5219 8.65544 13.6364 9.42719Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 5H15.01"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <img
              className="social-icon"
              src={require("./img/social2.png")}
              alt=""
            />
            <svg
              className="social-icon"
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M18.7834 2.84992C18.6844 2.45443 18.4828 2.09206 18.1989 1.79942C17.915 1.50679 17.559 1.29424 17.1667 1.18325C15.7334 0.833252 10 0.833252 10 0.833252C10 0.833252 4.2667 0.833252 2.83336 1.21659C2.44107 1.32757 2.08501 1.54012 1.80115 1.83276C1.51729 2.1254 1.31569 2.48776 1.2167 2.88325C0.954374 4.33788 0.826059 5.81351 0.833362 7.29159C0.824012 8.78079 0.952335 10.2677 1.2167 11.7333C1.32583 12.1165 1.53195 12.465 1.81515 12.7453C2.09835 13.0256 2.44905 13.2281 2.83336 13.3333C4.2667 13.7166 10 13.7166 10 13.7166C10 13.7166 15.7334 13.7166 17.1667 13.3333C17.559 13.2223 17.915 13.0097 18.1989 12.7171C18.4828 12.4244 18.6844 12.0621 18.7834 11.6666C19.0437 10.2229 19.172 8.75853 19.1667 7.29159C19.176 5.80238 19.0477 4.3155 18.7834 2.84992V2.84992Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.125 10.0167L12.9167 7.29165L8.125 4.56665V10.0167Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <img
              className="social-icon"
              src={require("./img/social4.png")}
              alt=""
            />
          </div>
        </div>
        <div className="nav second-p">
          <h3>Menu</h3>
          <Link className="footer-links" to="/products/newproducts">
            Yeni
          </Link>
          <Link className="footer-links" to="/products/bestselled">
            Endirimlər
          </Link>
          <Link className="footer-links" to="/products/accsessories">
            Aksessuarlar
          </Link>
          <Link className="footer-links" to="/products/allproducts">
            Bütün brendlər
          </Link>
        </div>
        <div className="nav third-p">
          <h3>Kömək</h3>
          <a href="">Tez-tez soruşulan suallar</a>
          <a href="">Çatdırılma xidməti</a>
          <a href="">Geri qaytarılma şərtləri</a>
        </div>
        <div className="nav fourth-p">
          <h3>Əlaqə</h3>
          <div className="contact">
            <img src={require("./img/contact1.png")} alt="" />
            <a id="location" href="#">
              M. K. Ataturk avenue 89, Baku,Azerbaijan
            </a>
          </div>
          <div className="contact">
            <img src={require("./img/contact2.png")} alt="" />
            <a href="#">example@gmail.com</a>
          </div>
          <div className="contact">
            <img src={require("./img/contact3.png")} alt="" />
            <a>*2108</a>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="footer-first-section">
          <img src={require("./img/copy.png")} alt="" />
          <p>PeojectX 2021. Bütün hüquqlar qorunur.</p>
        </div>
        <div className="footer-second-section">
          <div>Qaydalar və şərtlər</div>
          <div>Məxfilik siyasəti</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
