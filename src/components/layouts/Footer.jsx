import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="wed-hom-footer">
        <div className="container">
          <div className="text-center">
            <div className="row foot-supp justify-content-center">
              <h2 className="text-white">
                <span className="text-white">Free support:</span> +92 (8800) 68
                - 8960 &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                <span className="text-white">Email:</span>
                info@example.com
              </h2>
            </div>
          </div>
          <div className="row wed-foot-link wed-foot-link-1">
            <div className="col-md-4">
              <h4>Get In Touch</h4>
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>
                Phone: <a href="tel:+917904462944">+92 (8800) 68 - 8960</a>
              </p>
              <p>
                Email: <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
            <div className="col-md-4">
              <h4>HELP &amp; SUPPORT</h4>
              <ul>
                <li>
                  <a href="about-us.html">About company</a>
                </li>
                <li>
                  <a href="#!">Contact us</a>
                </li>
                <li>
                  <a href="#!">Feedback</a>
                </li>
                <li>
                  <a href="about-us.html#faq">FAQs</a>
                </li>
                <li>
                  <a href="about-us.html#testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 fot-soc">
              <h4>SOCIAL MEDIA</h4>
              <ul>
                <li>
                  <a href="#!">
                    <img src="images/social/1.png" alt="" loading="lazy" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/2.png" alt="" loading="lazy" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/3.png" alt="" loading="lazy" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/5.png" alt="" loading="lazy" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row foot-count">
            <p>
              Company name Site - Trusted by over thousands of Boys & Girls for
              successfull marriage.{" "}
              <Link
                href="sign-up.html"
                className="btn btn-primary btn-sm text-white"
              >
                Join us today !
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- COPYRIGHTS  */}
      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 text-center text-md-start">
                <p>
                  Copyright © <span id="cry">2024</span>{" "}
                  <Link href="/" target="">
                    Quick Match Matrimony
                  </Link>{" "}
                  All rights reserved.
                </p>
              </div>
              <div className="col-12 col-md-6 text-center text-md-end">
                <p>
                  Developed By{" "}
                  <a href="https://hrishikeshnetke.in" target="_blank">
                    Hrishikesh Netke
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END  */}
    </>
  );
};

export default Footer;
