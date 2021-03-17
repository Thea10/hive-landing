import React from "react";
import { Bounce, Fade  } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import Testimonials from "./Testimonials";
import Section from "./Section";
import CardSections from "./CardSections";
import Cards from "./Cards";
import microsoft from "../img/microsoft-lg.png";
import facebook from "../img/facebook.png";
import kellog from "../img/kellogs.png";
import ericsson from "../img/ericsson.png";
import honeywell from "../img/honeywell.png";
import pwc from "../img/pwc.png";
import hexiom from "../img/hexiom.png";
import pepsi from "../img/pepsi.png";
import loreal from "../img/l'oreal.png";
import telefone from "../img/telefone.png";
import sectionone from "../img/mainsectionone.png";
import sectiontwo from "../img/main-section-two.png";
import sectionthree from "../img/main-section-three.png";
import analytics from "../img/analytics.png";
import operations from "../img/operations.png";
import optimal from "../img/optimization.png";
import seamless from "../img/seamless.png";
import tech from "../img/pioneer.png";
import secure from "../img/security.png";
import experts from "../img/experts.png"
import Quote from "./Quote";
import BlogCards from "./BlogCards";
import Footer from "./Footer";



export const infoCardItems = [
  {
    img: analytics,
    headText: 'Analytics',
    bodyText: 'Get a holistic understanding of technical performance, Quality of Experience, and viewer engagement, and determine how to maximize reach and quality for both live and on-demand video.',
    footText: 'Explore Analytics',
    background: 'light',
    size: 'large'

  },
  {
    img: operations,
    headText: 'Operations',
    bodyText: 'Ensure every live video stream is a success with pre-event Silent Testing, real-time alerts, and detailed performance monitoring.',
    footText: 'Explore Operations',
    background: 'light',
    size: 'large'

  },
  {
    img: optimal,
    headText: 'Optimization',
    bodyText: 'Deliver a world-class video streaming experience to employees globally with intelligent P2P distribution, enterprise security, and multi-platform support.',
    footText: 'Explore Optimization',
    background: 'light',
    size: 'large'

  },
]

let smallCardItems =  [
  {
    img: seamless,
    headText: 'Seamless Integration',
    bodyText: 'Use your preferred enterprise video communication platforms to their fullest potential.',
    footText: 'Learn more',
    background: 'transparent',
    size: 'small'

  },
  {
    img: tech,
    headText: 'Pioneering Technology',
    bodyText: 'Stay up to date with systems that improve the more you stream via intelligent algorithms.',
    footText: 'Learn more',
    background: 'transparent',
    size: 'small'

  },{
    img: secure,
    headText: 'Enterprise Security',
    bodyText: 'Keep every stream private and secure behind your own protective firewall.',
    footText: 'Learn more',
    background: 'transparent',
    size: 'small'

  },{
    img: experts,
    headText: 'Dedicated Experts',
    bodyText: 'Achieve your desired outcomes with expert help from the Hive Customer Success team.',
    footText: 'Learn more',
    background: 'transparent',
    size: 'small'

  },

]


const Main = () => {
  return (
    <div>
      <Fade>
        <header className="container-fluid large-padding">
          <div className="row  mx-0 px-3 pt-5 mt-5 justify-content-between ">
            <div className="d-none d-lg-block col-md-4 main-left"></div>

            <div className="col-lg-4 px-0 pb-5">
              <Bounce delay={1000} duration={2000} bottom>
                <button className="btn btn-deep-orange mb-4">
                  <span> <i className="fas fa-bell mx-3 "></i> LATEST</span> <span className="opacity-1 ml-3">|</span>
                  <span className="ml-3">Read the ZF Customer Story  <i className="fas fa-chevron-right mx-3"></i></span>
                </button>
              </Bounce>
              <Fade right delay={500} duration={2000}>
                <div className="mb-4">
                  <h1 className="large-text mb-3">
                    Unlimited reach. Highest quality. Full control.
                  </h1>
                  <h5>
                    Hive Streaming allows you to reliably deliver video to any
                    audience size in the highest quality and analyze the
                    outcomes and trends of your video communication.
                  </h5>
                </div>
                <div className="row align-items-center justify-content-center mx-0">
                  <button className="btn btn-orange">Book a demo</button>
                  <NavLink className="ml-4" to="/learn-more">
                    Learn more
                  </NavLink>
                </div>
              </Fade>
            </div>

            <div className="d-none d-lg-block col-md-4 main-right"></div>
          </div>
        </header>
        <Testimonials headText={'Trusted by enterprise leaders'} img={[microsoft, facebook, kellog, ericsson, honeywell]} bodyText={null} footText={'Read customer stories'} dark="null" />

        <Section img={sectionone} headText={'Why Hive'} titleText={'Reach every employee in the best quality possible'} bodyText={'With Hive, you can reliably deliver impactful video communication to your entire workforce—whether they are at the office, working from home or halfway across the world. The excellent quality and a consistently high bitrate ensure that viewers get the best possible experience and stay engaged the whole time.'}     button={null} buttonText={null} background={'transparent'} bottomText={null} rowStyle={'normal'}  />

        <CardSections cardProps={infoCardItems} titleText={'Explore The Hive Video Experience Platform'} bodyText={'Impact a broader enterprise audience than ever before using our three core products.'} bottomText={'Learn more about the Platform'} background={'light'} />
        
        <Section img={sectiontwo} headText={'Quick Setup'} titleText={'Seamless integration with your existing technology'} bodyText={'Hive is designed for the modern enterprise and integrates easily with most major video communication platforms. Setup is quick and friction-free—no added hardware.'}     button={null} buttonText={null} background={'transparent'} bottomText={null} rowStyle={'reverse'}  />

        <Cards cards={ smallCardItems} />
        <Section img={sectionthree} headText={'Analytics'} titleText={'Access actionable video experience insights'} bodyText={'Your enterprise video communication harnesses important data. Hive Analytics integrates with every leading enterprise video platform, enabling you to compare performance trends across dates, locations, QoE, and more.'}     button={null} buttonText={null} background={'transparent'} bottomText={'Learn more about analytics'} rowStyle={'normal'}  />

        <Testimonials headText={'Trusted by enterprise leaders'} img={[pwc, hexiom, pepsi, loreal, telefone]} bodyText={'Some of the world’s most inspiring enterprise leaders rely on Hive. Join Mark Zuckerberg, Satya Nadella and many more in using live video to engage their workforces.'} footText={'Read customer stories'} dark="dark" />

        <Quote />

        <Section img={null} headText={'Hive Labs'} titleText={'Forever pioneering'} bodyText={'For years, our dedicated in-house R&D team, Hive Labs, has been conducting intensive market research to keep The Hive Platform on the vanguard of video streaming technology, driving innovation in the field of video experience.'}     button={null} buttonText={null} background={'light'} bottomText={'About our company'} rowStyle={'normal'}  />

        <BlogCards />
        <Footer />
      </Fade>
    </div>
  );
};

export default Main;
