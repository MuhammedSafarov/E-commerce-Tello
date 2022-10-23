import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Cooperation = () => {
  return (
    <div className="cooperation">
      <div className="container">
        <Splide
          options={{
            rewind: true,
            gap: "16px",
            perPage: 5,
            perMove: 1,
            type: "loop",
            autoplay: true,
            arrows: false,
            autoWidth: true,
            width: "100%",
            fixedHeight: "5rem",
          }}
        >
          <SplideSlide>
            <div className="slideItem">
              <img src={require("./img/cooperation1.png")} alt="slideImg" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItem">
              <img src={require("./img/cooperation2.png")} alt="slideImg" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItem">
              <img src={require("./img/cooperation3.png")} alt="slideImg" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItem">
              <img src={require("./img/cooperation4.png")} alt="slideImg" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItem">
              <img src={require("./img/cooperation5.png")} alt="slideImg" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slideItem">
              <img src={require("./img/cooperation6.png")} alt="slideImg" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Cooperation;
