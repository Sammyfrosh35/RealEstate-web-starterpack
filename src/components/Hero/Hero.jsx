import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
    
{/* left hand side hero section*/}

    <div className=" flexColStart hero-left">
        <div className="hero-title">
          <div className="orange-circle"></div>
         <h1>DISCOVER <br />
           MORE SUITABLE <br />
           HOUSING PROPERTY
           </h1> 
        </div>
        <div className=" flexColStart hero-des">
          <span>Find a variety of suitable propert with ease</span>
          <span>Experience no difficulty in getting a residence</span>
        </div>

        <div className="search-bar">Search bar</div>
    </div>


{/* right hand side hero section*/}

    <div className="flexCenter hero-right">
        <div className="image-container">
            <img src="./hero-image.png" alt="" />

        </div>
    </div>
    </div>
    </section>
  )
}

export default Hero