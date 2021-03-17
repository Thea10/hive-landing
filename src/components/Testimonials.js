import React from "react";
import { Zoom, Fade } from "react-awesome-reveal";

const Testimonials = ({ headText, bodyText, img, footText, dark }) => {
  return (
    <Fade top delay={1000}>
      <div className={`testimonials ${dark} p-5 `}>
        <h4 className="head-text">{headText}</h4>
        <h4 className="col-md-6 p-0 mx-auto  mb-4 foot-text">{bodyText}</h4>

        <Zoom cascade delay={500}>
          <div className="row mx-0 justify-content-center justify-content-md-between  p-md-5 mb-5 mb-md-3">
            {img.map((item, index) => (
              <img key={index} src={item} alt="logo" />
            ))}
          </div>
        </Zoom>


        <Fade bottom delay={1000}>
          <small className="foot-text"> {footText} </small>
        </Fade>
      </div>
    </Fade>
  );
};

export default Testimonials;
