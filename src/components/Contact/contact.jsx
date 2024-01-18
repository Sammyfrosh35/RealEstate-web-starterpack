import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings flexCenter c-container">
        {/*left hand side*/}

        <div className=" flexColStart c-left">
          <span className="orangeText">Contacts</span>

          <span className="primaryText">Ring us Anytime!</span>

          <span className="secondaryText">
            We are always ready to give you the best service you can imagine
          </span>

          <div className="flexColStart ContactModes">
            {/*first row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">081 696 705 69</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat now</span>
                    <span className="secondaryText">081 696 705 69</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>









            </div>

            {/*second row*/}

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">081 696 705 69</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">081 696 705 69</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>









            </div>




          </div>
        </div>

        {/*right hand side*/}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
