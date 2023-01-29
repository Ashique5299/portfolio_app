import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "../../TestimonialJsonData.json";
import TestimonialCard from "./TestimonialCard";

function TestimonialSliderComponent() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
      <div className="text-center mb-10">
        <div className="text-6xl font-jost font-semibold"> TESTIMONIALS</div>
        <div className="mt-4">
          <span className="text-lg font-semibold text-red-700">What</span>
          <span className="text-2xl font-caveat font-bold ml-4">
            Customers Says
          </span>
        </div>
      </div>
      <Slider {...settings}>
        {testimonialData.map((item) => (
          <div className="">
            <div className="mycard mx-9">
              <TestimonialCard item={item} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSliderComponent;
