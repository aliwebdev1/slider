// src/TestimonialSlider.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const images = [
        '/images/relief-international.png',
        '/images/oxfam.png',
        '/images/save-the-children.png',
        '/images/psa.png',
        '/images/unicef.png',
        '/images/dai.png',
        '/images/drc.png',
        '/images/somaliland.png',
        '/images/diakonia.png',
    ];

    const testimonials = [
        { text: "Kindly do not hesitate to enter into collaboration with Smart Vision for similar activities, as UNICEF was very pleased and satisfied by their work", author: "Hanna Yoshimoto", organization: "UNICEF" },
        // Add more testimonials here if needed
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="testimonial-slider">
            <h2>Testimonial</h2>

            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Coa_Illustration_Cross_Pattee_rounded.svg/300px-Coa_Illustration_Cross_Pattee_rounded.svg.png" alt="Organization Logo" />
                        <p className="testimonial-author">
                            <strong>{testimonials[currentTestimonial].author}</strong><br />
                            {testimonials[currentTestimonial].organization}
                        </p>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default TestimonialSlider;
