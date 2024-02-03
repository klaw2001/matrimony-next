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
                <span className="text-white">Free support:</span> +91 81046 66091 &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                <span className="text-white">Email:</span>
                info@quickmatch.com 
              </h2>
            </div>
          </div>
          <div className="row wed-foot-link wed-foot-link-1">
            <div className="col-md-4">
              <h4>Get In Touch</h4>
              <p>Address: Sai raje cooperative housing society -G2 floor , Subhash nagar road , Near Marian school , Mauli nursing home . Kalyan 421004 .</p>
              <p>
                Phone: <a href="tel:+91 8104666091">+91 81046 66091</a>
              </p>
              <p>
                Email: <a href="mailto:info@quickmatch.com">info@quickmatch.com</a>
              </p>
            </div>
            <div className="col-md-4">
              <h4>HELP &amp; SUPPORT</h4>
              <ul>
                <li>
                  <Link href="/about">About company</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
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
             Quick Match Matrimony - Trusted by over thousands of Boys & Girls for
              successfull marriage.{" "}
              <Link
                href="/signup"
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
                  <a href="https://reduxsolutions.com" target="_blank">
                    Redux Solutions
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
