import React from "react";
import placeimg from "../img/mainsectionfour.png";
import hexiom from "../img/mainsectionfourhexiom.png";
import quote from "../img/quote.png";

const Quote = () => {
  return (
    <div className="quotes row justify-content-center mx-auto my-5 p-md-5 text-xl-left">
      <div className="d-none d-xl-block col-md-6  p-0">
        <img className="placeholder h-100 w-100" src={placeimg} alt="placeholder" />
      </div>
      <div className="text col-12 col-sm-10 col-xl-6 m-auto m-md-0 p-5">
        <img src={quote} alt="quote" height={30} className="mb-3 " />
        <h5 className="mb-4"> 
          We are very happy with our decision to deploy Hive Streaming. The
          results are beyond our expectations and, as a result, we are confident
          in Hexion in embracing video communications internally leveraging
          Office 365 and Microsoft Teams.
        </h5>
        <div className="row mx-0 justify-content-between align-items-center mb-4">
          <h6>Dennis Ryan,</h6>
          <h6>Vice President & CIO</h6>
          <img src={hexiom} className="logo" alt="company-logo" />
        </div>
        <h6 className="ml-md-3 ">Read story</h6>
      </div>
    </div>
  );
};

export default Quote;
