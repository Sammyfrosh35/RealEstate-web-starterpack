import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import data from "../../utils/accordion";

const value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*left hand side part*/}

        <div className="v-left">
          <div className="image-container">
            <img src="./r5.jpg" alt="" />
          </div>
        </div>

        {/*right hand side part*/}
        <div className="flexColstart v-right">
          <span className="orangeText">Our Value</span>
          <br />
          <span className="primaryText">The Value We Give To Customers</span>
          <br />
          <span className="secondaryText">
            A Better Shelter Give A Longer Life Span
            <br />
            We Are Always Ready To Give You a Better Shelter
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null)
              return (
                <AccordionItem className= {`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>

                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed ")
                        }
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default value;
