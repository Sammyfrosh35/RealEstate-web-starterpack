import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings  flexCenter hero-container ">
        {/* left hand side hero section*/}

        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{y:"7rem", opacity: 0}}
              animate={{y:0, opacity: 1}}
              transition={{
                duration: 2,
                type:"keyframes"
              }}
            >
              DISCOVER <br />
              MORE SUITABLE <br />
              HOUSING PROPERTY
            </motion.h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of suitable propert with ease
            </span>
            <span className="secondaryText">
              Experience no difficulty in getting a residence
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right hand side hero section*/}

        <div className="flexCenter hero-right">
          <motion.div
          initial={{x:"7rem", opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
           className="image-container">
            <img src="./r6.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
