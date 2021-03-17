import React from "react";
import { Fade } from "react-awesome-reveal";
import blogone from "../img/commsone.png";
import blogtwo from "../img/commstwo.png";
import blogthree from "../img/commsthree.png";

let blog_cards = [
  {
    img: blogone,
    type: "Business Blog",
    author: "Hive Streaming",
    title: "Video Communications for the Financial Industry",
    body:
      "Experts have long predicted that video would be the next big thing in the financial industry. In one survey, 8...",
  },
  {
    img: blogtwo,
    type: "Business Blog",
    author: "Adam Knapp",
    title: "Employees Will Return to the Office: Is your Network Ready?",
    body:
      "Can your network handle the increase in video usage when your employees start to come back to the office? As m...",
  },
  {
    img: blogthree,
    type: "Webinars",
    author: "Johan Ljungberg",
    title: "Are your Employees Engaged with your Video Webcasting?",
    body:
      "Speakers: Steve Vonder Haar, Senior Analyst, Wainhouse Research Niclas Staberg, VP of Customer Success, Hive S...",
  },
];

const BlogCards = () => {
  return (
        <div  className="blog-card row mx-0 justify-content-center p-2 p-md-5">
        {blog_cards.map((card, index) => 
        <div key={index} className="col-md-5 col-lg-3 p-0 text-left mx-3  mb-5">
              <Fade direction="up" duration={1000}>

            <img src={card.img} alt="post-img" className="mb-4" />
          <div className="d-flex mb-2">
             <h6 className="headText"> {card.type}</h6>
             <h6 className="small-text  ml-2"> {card.author} </h6>

          </div>
          <h5 className="title mb-3"> {card.title} </h5>

          <h6> {card.body} </h6>
          </Fade>

        </div>
      )}

        </div>
    
  );
};

export default BlogCards;
