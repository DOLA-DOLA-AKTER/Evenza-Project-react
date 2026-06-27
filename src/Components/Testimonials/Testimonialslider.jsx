import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard'
import border2 from '../assets/border2.png'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}


const Testimonialslider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: i => (
            <div className="dot-bar"></div>
        ),
        responsive: [
            {
            breakpoint: 1170, // Tablet
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768, // Mobile
            settings: {
                slidesToShow: 1,
            }
        }
    ]
        
    };

    return (
        <div>
            <Slider {...settings}>
                <TestimonialCard
                    peragraph='"Truly outstanding service! The team exceeded our
                            expectations with their professionalism, creativity,
                            and quick turnaround time. Highly recommended for
                            anyone seeking quality and reliability."'
                    icon={border2}
                    title='Kristin Watson'
                    decs='Global Marketing Director'
                />
                <TestimonialCard
                    peragraph='"Truly outstanding service! The team exceeded our
                            expectations with their professionalism, creativity,
                            and quick turnaround time. Highly recommended for
                            anyone seeking quality and reliability."'
                    icon={border2}
                    title='Ralph Edwards'
                    decs='Global Marketing Director'
                />
                <TestimonialCard
                    peragraph='"Truly outstanding service! The team exceeded our
                            expectations with their professionalism, creativity,
                            and quick turnaround time. Highly recommended for
                            anyone seeking quality and reliability."'
                    icon={border2}
                    title='Harry Potter'
                    decs='Global Marketing Director'
                />
                <TestimonialCard
                    peragraph='"Truly outstanding service! The team exceeded our
                            expectations with their professionalism, creativity,
                            and quick turnaround time. Highly recommended for
                            anyone seeking quality and reliability."'
                    icon={border2}
                    title='Humairah Khan'
                    decs='Global Marketing Director'
                />
            </Slider>
        </div>
    )
}

export default Testimonialslider
