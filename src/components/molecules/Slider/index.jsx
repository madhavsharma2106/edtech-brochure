import React from "react";
import "./index.scss";
import { default as SlickSlider } from "react-slick";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slider-arrow slider-arrow-right "
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src={require("../../../assets/icons/right-arrow-blow.svg")}
        alt="Right arrow to view next component"
      />
    </div>
  );
}

function PreviousArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slider-arrow slider-arrow-left "
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src={require("../../../assets/icons/left-arrow-blue.svg")}
        alt="Left arrow to view next component"
      />
    </div>
  );
}

function Slider({ children }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  return (
    <SlickSlider className="slick-slider" {...settings}>
      {children}
    </SlickSlider>
  );
}

export default Slider;
