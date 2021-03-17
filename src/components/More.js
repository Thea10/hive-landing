import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Section from "./Section";
import CardSections from "./CardSections";
import Cards from "./Cards";
import Quote from "./Quote";
import Footer from "./Footer";
import headerimg from "../img/more-header.png";
import sectionone from "../img/more-section-one.png";
import sectiontwo from "../img/more-section-two.png";
import sectionthree from "../img/more-section-three.png";
import sectionfour from "../img/more-section-four.png";
import sectionfive from "../img/more-section-five.png";
import microsoft from "../img/microsoft.png";
import work from "../img/workplace.png";
import global from "../img/global.png";
import more from "../img/more (2).png";
import { infoCardItems } from "./Main";

let sections = [
  {
    img: sectionone,
    headText: "ALIGN & ENGAGE",
    titleText: "Empowered employees drive results",
    bodyText:
      "Deliver key communications, buffer-free and in the highest quality possible to ensure workforce alignment and employee engagement.",
    button: null,
    buttonText: null,
    background: "transparent",
    bottomText: null,
    rowStyle: "normal",
  },
  {
    img: sectiontwo,
    headText: "Perfect quality",
    titleText: "Best possible video experience for everyone, everywhere",
    bodyText:
      "Leave no team behind. The Hive P2P distribution protocol delivers top quality live video to every employee, regardless of their bandwidth or location.",
    button: null,
    buttonText: null,
    background: "transparent",
    bottomText: null,
    rowStyle: "column-reverse",
  },
  {
    img: sectionthree,
    headText: "Analyze & Optimize",
    titleText: "Detailed audience analytics",
    bodyText:
      "Perfect the way you deliver communications to your audience by understanding them. Use your Hive Analytics dashboard and reporting to analyze and optimize the video experience and better plan your live events.",
    button: true,
    buttonText: "Learn more",
    background: "transparent",
    bottomText: null,
    rowStyle: "reverse",
  },
  {
    img: sectionfour,
    headText: "Onboarding & Customer Success",
    titleText: "Seamless onboarding and expert advisory",
    bodyText:
      "Get set up quickly and start using Hive immediately to optimize your internal video communication with personal help from our Customer Success team.",
    button: null,
    buttonText: null,
    background: "light",
    bottomText: null,
    rowStyle: "normal",
  },
  {
    img: null,
    headText: "Integrations",
    titleText: "Integrated video stack",
    bodyText:
      "Build the perfect video streaming stack. Hive integrates seamlessly with every leading enterprise video communication platform and supports the use of multiple solutions, simultaneously.",
    button: null,
    buttonText: null,
    background: "transparent",
    bottomText: null,
    rowStyle: "column-reverse",
  },
];

let smallCards = [
  {
    img: microsoft,
    headText: "Microsoft 365",
    bodyText:
      "Pioneering cloud-based applications for live communications and VOD content storage & management.",
    footText: "Learn more",
    background: "dark",
    size: "normal",
  },

  {
    img: work,
    headText: "Workplace",
    bodyText:
      "WebRTC is pre-integrated with Workplace and is already working in the background to make live video broadcasts more efficient in select SKUs.",
    footText: "Learn more",
    background: "dark",
    size: "normal",
  },
  {
    img: global,
    headText: "Global Meet",
    bodyText:
      "Live webcasting and video streaming for enterprise and Fortune™ 500 companies",
    footText: "Learn more",
    background: "dark",
    size: "normal",
  },
  {
    img: more,
    headText: "30+ more",
    bodyText:
      "We are always adding integrations that adhere to our top quality standards.",
    footText: "See all Integrations",
    background: "dark",
    size: "normal",
  },
];

const More = () => {
  return (
    <div>
      <Fade>
        <header className="container-fluid row align-items-center justify-content-center justify-con px-2 px-md-4 mx-0">
          <div className="col-md-7 col-lg-4 p-0 ml-xl-5 text-md-left">
            <Fade direction="left" delay={1000}>
              <h6 className="headText"> VIDEO EXPERIENCE PLATFORM </h6>

              <h4 className="large-text">
                Great video experiences for all employees
              </h4>

              <h5 className="mb-4">
                 
                Hive makes it easy to understand, secure and optimize video
                streaming, whether you are communicating with 100 people or
                100,000.
              </h5>

              <div className="row align-items-center  mx-0">
                  <button className="btn btn-orange">Book a demo</button>
                  <NavLink className="ml-4" to="/">
                    Home
                  </NavLink>
                </div>
            </Fade>
          </div>

          <div
            className="col-md-8 col-xl-7 main d-none d-lg-block"
            style={{ backgroundImage: `url(${headerimg})`, height: "600px" }}
          ></div>
        </header>

        {sections.map((section, index) => (
          <Section
            key={index}
            img={section.img}
            headText={section.headText}
            titleText={section.titleText}
            bodyText={section.bodyText}
            button={section.button}
            buttonText={section.buttonText}
            background={section.background}
            bottomText={section.bottomText}
            rowStyle={section.rowStyle}
          />
        ))}

        <Cards cards={smallCards} />

        <Section
          img={sectionfive}
          headText={"Privacy & Security"}
          titleText={"Enterprise-grade security you can always trust"}
          bodyText={
            "Hive’s backend is protected by Microsoft Azure and the Hive team has zero access to your data. All viewer PI is anonymized on your dashboard."
          }
          button={null}
          buttonText={null}
          background={"transparent"}
          bottomText={"How we keep you protected"}
          rowStyle={"reverse"}
        />
        <CardSections
          cardProps={infoCardItems}
          titleText={"Discover how our products work together"}
          bodyText={
            "Create a seamless video experience with three core products that work independently or in tandem."
          }
          bottomText={null}
          background={"light"}
        />

        <Quote />

        <Footer />
      </Fade>
    </div>
  );
};

export default More;
