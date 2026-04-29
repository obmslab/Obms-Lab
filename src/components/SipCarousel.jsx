import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import "./SipCarousel.css";

const Carousel = () => {
  const slides = [
    { id: 1, src: img1, alt: "Slide 1" },
    { id: 2, src: img2, alt: "Slide 2" },
    { id: 3, src: img3, alt: "Slide 3" },
    { id: 4, src: img4, alt: "Slide 4" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
 <div className="carousel">
  <div className="carousel-wrapper">
    {/* Left arrow */}
    <button className="carousel-btn left" onClick={prevSlide}>◀</button>

    {/* Image container */}
    <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
      {slides.map((slide) => (
        <div className="carousel-item" key={slide.id}>
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}
    </div>

    {/* Right arrow */}
    <button className="carousel-btn right" onClick={nextSlide}>▶</button>
  </div>

  {/* Dot indicators below */}
  <div className="carousel-dots">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === current ? "active" : ""}`}
        onClick={() => setCurrent(index)}
      ></span>
    ))}
  </div>
</div>

  );
};

export default Carousel;
