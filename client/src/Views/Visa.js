import React, { Component } from "react";
import Background from '../assets/img/visa-header.jpg';
import Card from '../Components/Card';
import '../assets/css/style.css';

class Visa extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <div
          className="page-header"
          style={{
            backgroundImage:
            `url(${Background})`,
            backgroundPositionY:'center',
            width: "100%",
            height: "400px"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="page-title">Visa Immigration List</h1>{" "}
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p className="page-description">
                  Vivamus ipsum ligula, faucibus a odio et, lacinia ultricies
                  urna. Sed lobortis non nulla sit amet laoreet. Integer eget
                  erat nibh.
                </p>
              </div>
            </div>
          </div>

        </div>
        <section id="services" className="services section-bg">
          <div className="container">
        <div className="row">
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />
            <Card title="Job Seeker Visa"  desc="Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc." />

        </div>
        </div>
        </section>
      </section>
    );
  }
}

export default Visa;
