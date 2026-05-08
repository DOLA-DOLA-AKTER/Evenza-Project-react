import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider from '../assets/slider.png'

const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
    cssEase: "linear"
  };
  return (
    <div className='py-6 bg-primary'>
      <Slider {...settings}>
        <div>
          <img src={slider} alt="Slider" />
        </div>
        <div>
          <img src={slider} alt="Slider" />
        </div>
      </Slider>
    </div>
  )
}

export default AutoPlay
