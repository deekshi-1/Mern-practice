import React from "react";
import "./banner.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/banner/1.jpeg";
import img2 from "../../assets/banner/2.jpeg";
import img3 from "../../assets/banner/3.jpeg";

function Banner() {
  return (
    <div className="banner-container">
      <Carousel
        className="banner-carousel"
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        interval={3000}
      >
        <div className="carousel-slide">
          <img src={img1} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={img2} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={img3} alt="Slide 3" />
        </div>
      </Carousel>
      <div className="banner-content">
      </div>
    </div>
  );
}

export default Banner;
