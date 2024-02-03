"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const HomeSlickCarousel = () => {
  // useEffect(() => {
  // No need for jQuery, use React's state to handle slider initialization
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],// Adjust as needed
  };
  // Initialize Slick slider after component is mounted
  //     const slickSlider = new Slider('.hom-qui-acc-sli', sliderSettings);

  //     // Destroy the slider when the component is unmounted
  //     // return () => {
  //     //     slickSlider.slickGoTo(0); // Go to the first slide before unslick
  //     //     slickSlider.unslick();        };
  //   }, []);
  return (
    <div>
      <section>
        <div className="str home-acces-main">
          <div className="container">
            <div className="row">
              {/* <!-- BACKGROUND SHAPE --> */}
              <div className="wedd-shap">
                <span className="abo-shap-1"></span>
                <span className="abo-shap-4"></span>
              </div>
              {/* <!-- END BACKGROUND SHAPE --> */}

              <div className="home-tit">
                <p className="text-white">Quick Access</p>
                <h2>
                  <span>Our Services</span>
                </h2>
                <span className="leaf1"></span>
                <span className="tit-ani-"></span>
              </div>
              <div className="home-acces">
                <ul className="hom-qui-acc-sli text-center py-5">
                  <Slider {...sliderSettings}>
                    <li>
                      <div
                        className="wow fadeInUp hacc hacc1"
                        data-wow-delay="0.1s"
                      >
                        <div className="con">
                          <img
                            src="/images/icon/user.png"
                            alt=""
                            loading="lazy"
                            className="mx-auto mb-3"
                          />
                          <h4 className="text-white">Browse Profiles</h4>
                          <p className="text-white">1200+ Profiles</p>
                          <Link className="text-light" href="/all-profiles">View more</Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className="wow fadeInUp hacc hacc2"
                        data-wow-delay="0.2s"
                      >
                        <div className="con">
                          <img
                            src="/images/icon/gate.png"
                            alt=""
                            loading="lazy"
                            className="mx-auto mb-3"
                          />
                          <h4 className="text-white">Wedding</h4>
                          <p className="text-white">1200+ Profiles</p>
                          <Link className="text-light" href="/gallery">View more</Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className="wow fadeInUp hacc hacc3"
                        data-wow-delay="0.3s"
                      >
                        <div className="con">
                          <img
                            src="/images/icon/couple.png"
                            alt=""
                            loading="lazy"
                            className="mx-auto mb-3"
                          />
                          <h4 className="text-white">All Services</h4>
                          <p className="text-white">1200+ Profiles</p>
                          <Link className="text-light" href="/services">View more</Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className="wow fadeInUp hacc hacc4"
                        data-wow-delay="0.4s"
                      >
                        <div className="con">
                          <img
                            src="/images/icon/hall.png"
                            alt=""
                            loading="lazy"
                            className="mx-auto mb-3"
                          />
                          <h4 className="text-white">Join Now</h4>
                          <p className="text-white">Start for free</p>
                          <Link className="text-light" href="/plans">Get started</Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className="wow fadeInUp hacc hacc3"
                        data-wow-delay="0.3s"
                      >
                        <div className="con">
                          <img
                            src="/images/icon/photo-camera.png"
                            alt=""
                            loading="lazy"
                            className="mx-auto mb-3"
                          />
                          <h4 className="text-white">Photo gallery</h4>
                          <p className="text-white">1200+ Profiles</p>
                          <Link className="text-light" href="/gallery">View more</Link>
                        </div>
                      </div>
                    </li>
                   
                  </Slider>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSlickCarousel;
