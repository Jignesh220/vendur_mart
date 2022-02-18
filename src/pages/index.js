import React from "react";
import HeaderDoc from "../component/reuseable/HeaderDoc";
import Footer from "../component/reuseable/Footer";
import BackgroundImage from "../images/bkgi.png";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import "../component/layout.css";

const IndexPage = () => {
  return (
    <section className="min-vh-100 test">
      <HeaderDoc />
      <div className="card border-0">
        <img src={BackgroundImage} alt="" className="bkgimage" />
        <div className="card-img-overlay text-light ml-5 mt-lg-5 mt-1 w-75 text-monospace lead">
          <h5 className="card-title font-size-card">VendurMart</h5>
          <p className="card-text ml-2 w-50 font-size-card2">
            We Provide B2B, C2C, B2C, C2C system for a better quality service
          </p>
          <button
            onClick={() => scrollTo("#explore")}
            className="card-text ml-2 btn bg-light px-4 py-1 zoom1 font-size-card3"
          >
            Explore
          </button>
        </div>
      </div>
      <br />
      <div className="cd d-flex border-0 bg-light py-5 borderRounded mx-5 mb-2 mt-4">
        <div className="mx-auto">
          <div className="card-title lead text-light w-75 mx-auto text-dark text-monospace font-size-card2">
            Do you procrastinate to go to a shop? Or do you wish you could have
            all goods delivered at your home from the nearest shops as you get
            your food? VendurMart will make sure to deliver what you want from
            the nearest store in low prices anywhere anytime. Welcome to
            VendurMart, your No.1 source for all things We're dedicated to
            giving you the very best of service. We are planning to a
            B2B,C2C,B2C,C2C system for a better quality service
          </div>
        </div>
      </div>
      <div className="container-fluid" id="explore">
        <div className="row mt-3 bg-theme2 mx-5 borderR d-flex">
          <div className="mx-auto col-12 col-lg-6">
            <div className="col-10 col-lg-12 mx-auto lead text-monospace my-3 text-light text-center text-lg-left">
              VendurMart Ecommerce
            </div>
          </div>
          <div className="mx-auto col-12 col-lg-4">
            <div className="col-12 col-lg-12 mx-auto lead text-monospace text-light text-center text-lg-left">
              <Link
                to="/home"
                className="btn bg-warning py-1 zoom1 float-lg-right lead text-monospace my-3 text-dark borderR px-5"
              >
                Ecommerce
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-3 bg-theme2 mx-5 borderR d-flex">
          <div className="mx-auto col-12 col-lg-6">
            <div className="col-10 col-lg-12 mx-auto lead text-monospace my-3 text-light text-center text-lg-left">
              VendurMart Bussiness
            </div>
          </div>
          <div className="mx-auto col-12 col-lg-4">
            <div className="col-12 col-lg-12 mx-auto lead text-monospace text-light text-center text-lg-left">
              <Link
                to="https://business-vendur-mart.web.app/"
                className="btn bg-warning py-1 zoom1 float-lg-right lead text-monospace my-3 text-dark borderR px-5"
              >
                Bussiness
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </section>
  );
};

export default IndexPage;
