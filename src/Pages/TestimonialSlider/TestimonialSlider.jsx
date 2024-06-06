// src/TestimonialSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 4,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        afterChange: (current) => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const slides = [
        { image: '/images/relief-international.png', text: "Relief International is doing great work!", author: "Hanna Yoshimoto", organization: "ali" },
        { image: '/images/oxfam.png', text: "Oxfam is a fantastic organization!", author: "Hanna Yoshimoto", organization: "joy" },
        { image: '/images/save-the-children.png', text: "Save the Children is making a difference!" },
        { image: '/images/psa.png', text: "PSA's efforts are commendable!" },
        { image: '/images/unicef.png', text: "UNICEF was very pleased and satisfied by their work", author: "Hanna Yoshimoto", organization: "UNICEF" },
        { image: '/images/dai.png', text: "DAI is achieving great results!" },
        { image: '/images/drc.png', text: "Danish Refugee Council is doing an amazing job!" },
        { image: '/images/somaliland.png', text: "Somaliland State is thriving!" },
        { image: '/images/diakonia.png', text: "Diakonia's initiatives are impactful!" },
    ];

    return (
        <div className="testimonial-slider">
            <h2>Testimonial</h2>
            {slides[currentSlide] && <p className="testimonial-text">{slides[currentSlide].text}</p>}
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Coa_Illustration_Cross_Pattee_rounded.svg/300px-Coa_Illustration_Cross_Pattee_rounded.svg.png" alt="Organization Logo" />
                    </div>
                ))}
            </Slider>
            {slides[currentSlide] && slides[currentSlide].author && (
                <p className="testimonial-author">
                    <strong>{slides[currentSlide].author}</strong><br />
                    {slides[currentSlide].organization}
                </p>
            )}
        </div>
    );
};

export default TestimonialSlider;
