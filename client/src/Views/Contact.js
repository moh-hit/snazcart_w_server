import React, { Component } from "react";


export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title aos-init aos-animate" data-aos="fade-up">
            <h2>Contact Us</h2>
            <p>Contact us the get started</p>
          </div>

          <div className="row">
            <div
              className="col-lg-5 d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <h4>Location:</h4>
                  <p>SCF 41, 2nd Floor, Super Market Near Bus stand, Pehowa</p>
                </div>

                <div className="email">
                  <h4>Email:</h4>
                  <p>www.abroadways.in</p>
                </div>

                <div className="phone">
                  <h4>Call:</h4>
                  <p>+91 88168 88162</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8120342242564!2d76.58219701547137!3d29.984831481904013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e25afc37b30df%3A0x8cb2f77a3f84c5ef!2sManav%20I%20Tech%20-%20IELTS%2C%20PTE%2C%20Spoken%20English%2C%20HKCL%20Centre!5e0!3m2!1sen!2sin!4v1582740655897!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
              </div>
            </div>

            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <label for="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    data-rule="required"
                    data-msg="Please write something for us"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
