import Layout from "@/components/layouts/Layout";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      {/* <!-- BANNER --> */}
      <section>
        <div className="str">
          <div className="ban-inn ab-ban pg-cont">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit">
                    <span className="text-warning">We are here to assist you.</span>
                    <h1>Contact us</h1>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- START --> */}
      <section>
        <div className="ab-sec2 pg-cont">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div className="we-here">
                    <h3>Our office</h3>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                    <span>
                      <i className="fa fa-phone" aria-hidden="true"></i> +91
                      81046 66091
                    </span>
                    <span>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                      info@quickmatch.com{" "}
                    </span>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>Sai
                      raje cooperative housing society -G2 floor , Subhash nagar
                      road , Near Marian school , Mauli nursing home . Kalyan
                      421004 .
                    </span>
                  </div>
                </li>
                <li>
                  <div className="we-cont">
                    <img src="images/icon/trust.png" alt="" />
                    <h4>Customer Relations</h4>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                    <a href="#!" className="cta-rou-line">
                      Get Support
                    </a>
                  </div>
                </li>
                <li>
                  <div className="we-cont">
                    <img src="images/icon/telephone.png" alt="" />
                    <h4>WhatsApp Support</h4>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                    <a href="#!" className="cta-rou-line">
                      Talk to sales
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- REGISTER --> */}
      <section>
        <div className="login pg-cont">
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="lhs">
                  <div className="tit">
                    <h2>
                      Now <b>Contact to us</b> Easy and fast.
                    </h2>
                  </div>
                  <div className="im">
                    <img src="images/login-couple.png" alt="" />
                  </div>
                  <div className="log-bg">&nbsp;</div>
                </div>
                <div className="rhs">
                  <div>
                    <div className="form-tit">
                      <h4>Lets talk</h4>
                      <h1>Send your enquiry now </h1>
                    </div>
                    <div className="form-login">
                      <form
                        className="cform fvali"
                        method="post"
                        action="mail/mail-contact.php"
                      >
                        <div
                          className="alert alert-success cmessage"
                          style={{ display: "none" }}
                          role="alert"
                        >
                          Your message was sent successfully.
                        </div>
                        <div className="form-group">
                          <label className="lb">Name:</label>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your full name"
                            name="name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Phone:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            name="phone"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Message:</label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            placeholder="Enter message"
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Send Enquiry
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}
    </Layout>
  );
};

export default Contact;
