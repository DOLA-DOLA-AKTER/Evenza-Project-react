import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../assets/slinder-img-1.png"
import slider2 from "../assets/slinder-img-2.png"
import slider3 from "../assets/slinder-img-3.png"
import slider4 from "../assets/slinder-img-4.png"
import slider5 from "../assets/slinder-img-5.png"
import slider6 from "../assets/slinder-img-6.png"

const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div className='py-5 bg-primary w-full overflow-x-hidden'>
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="" />
        </div>
        <div>
          <img src={slider2} alt="" />
        </div>
        <div>
          <img src={slider3} alt="" />
        </div>
        <div>
          <img src={slider4} alt="" />
        </div>
        <div>
          <img src={slider5} alt="" />
        </div>
        <div>
          <img src={slider6} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default AutoPlay
