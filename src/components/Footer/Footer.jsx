import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/*left hand side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
            <span className='secondaryText'>
                Our vision is to ensure everyone lives in 
                the best suitable resisdences.
            </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'> 145 New york, FL 4576, USA</span>

                    <div className="flexCenter f-menu">
                        <span>Properties</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>

            </div>
        </div>
    </section>
  )
}

export default Footer