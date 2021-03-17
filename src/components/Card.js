import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

const Card = ({ img, headText, bodyText, footText, background, size }) => {
  return (
    <JackInTheBox
      duration={1500}
      className={`info-cards col-11 col-sm-7 col-md-6 col-lg-3   my-2  p-3 ${size}    ${
        size === "large" ? "mx-2 py-md-5" : "col-lg-2 "
      } ${background} ${
        background === "dark" ? "text-md-left" : "text-center"
      }` }
    >
      <div>
        <img className="mb-4" src={img} alt="" />

        <h4
          className={`head-text mb-4  ${
            size === "large" ? "mid-text " : "normal-text "
          } `}
        >
          {headText}
        </h4>

        <h6 className="body-text mb-4"> {bodyText} </h6>
        <h6
          className="foot-text"
          style={{ marginTop: `${size === "large" ? "4rem" : "2rem"} ` }}
        >
          {footText}
        </h6>
      </div>
    </JackInTheBox>
  );
};

export default Card;
