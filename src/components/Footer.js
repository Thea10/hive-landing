import React from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className=" section-flex row mx-0 pt-4 p-lg-5  mb-0 dark ">
        <div className={`col-lg-7 pt-3 mx-auto p-lg-5 text-lg-left`}>
          <h2 className="large-text mb-4">
            The best enterprise video experiences start with Hive
          </h2>
          <h6 className="mb-5">
            Get connected with one of our product experts to begin your journey
            with Hive today.
          </h6>
          <div className="row align-items-center justify-content-center justify-content-lg-start  mx-0">
            <button className="btn btn-green ">Book a demo</button>
            <NavLink className="ml-4" to="/learn-more">
              Contact Sales
            </NavLink>
          </div>
        </div>

        <div className="d-none d-lg-block col-lg-4 bg-image"></div>
      </section>

      <section className="footer pb-5">
        <div className="main-links row mx-0 px-5 py-2 justify-content-between">
          <NavLink to="/learn-more" className="col-md-2 my-3  ml-lg-5">
            Overview
          </NavLink>
          <NavLink to="/learn-more" className="col-md-2 my-3  ">
            Analytics
          </NavLink>
          <NavLink to="/learn-more" className="col-md-2 my-3 ">
            Operations
          </NavLink>
          <NavLink to="/learn-more" className="col-md-2 my-3 ">
            Optimization
          </NavLink>
          <NavLink to="/learn-more" className="col-md-2 my-3  mr-lg-5">
            Demo
          </NavLink>
        </div>

        <hr />

        <div className="sub-links row mx-0 p-3 p-md-5 mt-4 justify-content-between">
          <div className="col-12  p-0 col-md-6 row mx-0 justify-content-between text-md-left">
            <Fade direction="left" cascade duration={700}>
              <ul>
                <li className="link-heads mb-4"> PLATFORM </li>
                <li className="link-texts mb-3">Overview </li>
                <li className="link-texts  mb-3">Analytics </li>
                <li className="link-texts  mb-3">Operations </li>
                <li className="link-texts  mb-3">Determination </li>
                <li className="link-texts  mb-3">Privacy & Security </li>
                <li className="link-texts  mb-3">Integrations </li>
                <li className="link-texts  mb-3">Pricig </li>
              </ul>
              <ul>
                <li className="link-heads mb-4"> RESOURCES </li>
                <li className="link-texts  mb-3">Customer Stories </li>
                <li className="link-texts  mb-3">Partner Directory </li>
                <li className="link-texts  mb-3">Business Blog </li>
                <li className="link-texts  mb-3">Technical Blog </li>
                <li className="link-texts  mb-3">Videos </li>
                <li className="link-texts  mb-3">Whitepapers </li>
              </ul>

              <ul>
                <li className="link-heads mb-4"> COMPANY </li>
                <li className="link-texts  mb-3">About </li>
                <li className="link-texts  mb-3">Press </li>
                <li className="link-texts  mb-3">Careers</li>
                <li className="link-texts  mb-3">Contact</li>
                <li className="link-texts  mb-3">Support </li>
              </ul>
            </Fade>
          </div>

          <div className=" col-12  p-0  col-md-5">
            <Fade direction="bottom-right" delay={1000}>
              <h6 className="link-heads mb-3"> NEWSLETER </h6>

              <div className="newsletter d-flex mb-5">
                <input className="form-control border-0 h-auto bg-transparent" />
                <button className="btn btn-orange">Sign Up</button>
              </div>

              <ul className="d-flex justify-content-between">
                <li className="socials mb-4"> Facebook </li>
                <li className="socials mb-4"> Twitter </li>

                <li className="socials mb-4"> LinkedIn </li>
              </ul>
            </Fade>
          </div>
        </div>

        <div className="row mx-0 px-3 px-md-5 mb-5 justify-content-between">
          <Fade direction="up" delay={3000}>
            <div className="copy mb-3">
              &copy {new Date().getFullYear()} Hive Streaming. All Rights
              Reserved.
            </div>

            <div className="mb-3">
              <span className="copy"> Terms & Conditions </span>
              <span className="copy ml-3"> Privacy Policy </span>
            </div>
          </Fade>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
