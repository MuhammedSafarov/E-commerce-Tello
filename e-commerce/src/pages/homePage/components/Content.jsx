import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="content-slider">
      <Slider {...settings}>
        <div className="slider-p">
          <img
            _ngcontent-who-c75=""
            className="default-image"
            src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:1400:600:0/bg:ffffff/q:100/plain/s3://complex-images/92/3675/2100-new-1.png@jpeg"
            title="02_AW_SE2_preorder AlmaStore.az"
            alt="02_AW_SE2_preorder AlmaStore.az"
          />
        </div>
        <div className="slider-p">
          <img
            _ngcontent-who-c75=""
            className="default-image"
            src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:1400:600:0/bg:000000/q:100/plain/s3://complex-images/92/3603/2100-new-2.png@jpeg"
            title="19_why-aw AlmaStore.az"
            alt="19_why-aw AlmaStore.az"
          />
        </div>
        <div className="slider-p">
          <img
            _ngcontent-who-c75=""
            className="default-image"
            src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:1400:600:0/bg:000000/q:100/plain/s3://complex-images/92/3617/2100-ru.png@jpeg"
            title="03_NPI_iPhone14_Pro_cs AlmaStore.az"
            alt="03_NPI_iPhone14_Pro_cs AlmaStore.az"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Content;
