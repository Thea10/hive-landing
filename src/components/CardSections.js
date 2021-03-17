import React from "react";
import { Bounce } from "react-awesome-reveal";
import Cards from "./Cards";

const CardSections = ({
  cardProps,
  titleText,
  bodyText,
  bottomText,
  background,
}) => {
  return (
    <section
      className={`section-flex row flex-column mx-0 p-2 p-md-4 align-items-center ${background} 
      }`}
    >
      <div className="col-md-7 mx-auto p-0 my-5 pt-md-5">
        <Bounce delay={1000} duration={1000} cascade>
          <h3 className="large-text"> {titleText} </h3>
          <h6 className="mb-4"> {bodyText} </h6>
          <h6>{bottomText}</h6>
        </Bounce>
      </div>
      <div className="col-12 p-0">
      <Cards cards={cardProps} />


      </div>

    </section>
  );
};

export default CardSections;
