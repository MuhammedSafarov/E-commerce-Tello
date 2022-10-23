import React, { Component } from "react";
import "./Gallery.scss";
import Slider from "react-slick";


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      count: 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const productData = this.props.product;

    return (
      <div className="slider">
        <div className="product-slider">
          <Slider
            className="big-img-slider"
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            {productData?.assets?.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.url} alt="" />
                </div>
              );
            })}
          </Slider>

          <Slider
            className="small-img-slider"
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {productData?.assets?.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.url} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
