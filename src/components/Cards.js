import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
      
    <div className="row w-100 mx-0 justify-content-center align-items-center mb-5">
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            headText={card.headText}
            bodyText={card.bodyText}
            footText={card.footText}
            background={card.background}
            size={card.size}
          />
        ))}
    </div>
  );
};

export default Cards;
