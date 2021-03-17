import React from "react";
import { Fade } from "react-awesome-reveal";
 
const Section = ({
  img,
  headText,
  titleText,
  bodyText,
  bottomText,
  rowStyle,
  button,
  buttonText,
  background,
}) => {
  return (
    <section
      className={`section-flex row mx-0 p-2 px-md-4 align-items-center ${background} ${rowStyle} ${rowStyle === "column" || rowStyle === "column-reverse"
          ? "text-center"
          : "text-lg-left"
        }`}
    >
      {img ?
        <div className="col-md-5  pt-3 mx-auto p-0">
          <Fade up duration={1500}>
            <img className="animate-img" src={img} alt="section-img" />
          </Fade>
        </div>
        : null}

      <div
        className={`col-lg-5 pt-3 mx-auto p-lg-5 ${!img ? "text-center" : "normal-align"
          } ${rowStyle === "column-reverse" ? "col-lg-7" : "col-lg-5"}`}
      >
        <Fade down delay={500}>
          <div>
            <h6 className="headText"> {headText} </h6>
            <h3 className="large-text"> {titleText} </h3>
            <h6> {bodyText} </h6>

            {button ?
              <button className="btn btn-orange mt-4">{buttonText}</button>
              : null}

            {bottomText ?
              <h6 className="ml-md-3 mt-4 font-weight-bold">{bottomText}</h6>
              : null}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Section;
