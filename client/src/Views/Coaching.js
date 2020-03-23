import React, { Component } from "react";
import About from "../assets/img/about-img.svg";

class Coaching extends Component {
  render() {
    return (
      <section id="about" className="about mt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img
                src={About}
                className="img-fluid aos-init aos-animate"
                alt=""
                data-aos="zoom-in"
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up" className="aos-init aos-animate">
                Voluptatem dignissimos provident quasi
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="aos-init aos-animate"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div
                  className="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bx bx-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div
                  className="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Coaching;
