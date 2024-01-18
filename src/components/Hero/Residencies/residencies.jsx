import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "Swiper/css";
import "swiper/swiper-bundle.css";
import "./residencies.css";
import data from "../../../utils/slider.json";
import { sliderSettings } from "../../../utils/common";

const residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColstart">
          <span className="orangeText">Best Choices</span> 
          <br />
          <span className="primaryText">Popular Properties</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src="./r3.png" alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};



const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};
export default residencies;