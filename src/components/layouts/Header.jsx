"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle Menu");
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div>
        {/* <!-- POPUP SEARCH --> */}
        {/* <div className="pop-search">
        <span className="ser-clo">+</span>
        <div className="inn">
          <form>
            <input type="text" placeholder="Search here..." />
          </form>
          <div className="rel-sear">
            <h4>Top searches:</h4>
            <a href="all-profiles.html">Browse all profiles</a>
            <a href="all-profiles.html">Mens profile</a>
            <a href="all-profiles.html">Female profile</a>
            <a href="all-profiles.html">New profiles</a>
          </div>
        </div>
      </div> */}
        {/* <!-- END --> */}

        {/* <!-- TOP MENU --> */}
        <div className="head-top">
          <div className="container">
            <div className="row">
              <div className="lhs">
                <ul className="m-0">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="rhs">
                <ul className="m-0">
                  <li>
                    <a href="tel:+9704462944">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      &nbsp;+01 5312 5312
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@example.com">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      &nbsp; help@company.com
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END --> */}

        {/* <!-- MAIN MENU --> */}
        <div className="hom-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="hom-nav">
                {/* <!-- LOGO --> */}
                <div className="logo">
                  <Link href="/" className="logo-brand">
                    <img
                      src="/images/logo-b.png"
                      alt="logo"
                      loading="lazy"
                      className="ic-logo"
                    />
                  </Link>
                </div>

                {/* <!-- EXPLORE MENU --> */}
                <div className="bl">
                  <ul>
                    <li className="smenu-pare">
                      <span className="smenu">Explore</span>
                      <div className="smenu-open smenu-box">
                        <div className="container">
                          <div className="row">
                            <h4 className="tit">Explore category</h4>
                            <ul>
                              <li>
                                <div className="menu-box menu-box-2">
                                  <h5>
                                    Browse profiles{" "}
                                    <span>1200+ Verified profiles</span>
                                  </h5>
                                  <span className="explor-cta">
                                    More details
                                  </span>
                                  <Link
                                    href="/all-profiles"
                                    className="fclick"
                                  ></Link>
                                </div>
                              </li>
                              <li>
                                <div className="menu-box menu-box-1">
                                  <h5>
                                    Wedding page <span>Make reservation</span>
                                  </h5>
                                  <span className="explor-cta">
                                    More details
                                  </span>
                                  <a href="wedding.html" className="fclick"></a>
                                </div>
                              </li>
                              <li>
                                <div className="menu-box menu-box-3">
                                  <h5>
                                    All Services<span>Lorem ipsum dummy</span>
                                  </h5>
                                  <span className="explor-cta">
                                    More details
                                  </span>
                                  <a
                                    href="services.html"
                                    className="fclick"
                                  ></a>
                                </div>
                              </li>
                              <li>
                                <div className="menu-box menu-box-4">
                                  <h5>
                                    Join Now <span>Lorem ipsum dummy</span>
                                  </h5>
                                  <span className="explor-cta">
                                    More details
                                  </span>
                                  <a href="plans.html" className="fclick"></a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="smenu-pare">
                      <span className="smenu">All pages</span>
                      <div className="smenu-open smenu-multi">
                        <div className="container">
                          <div className="row">
                            <div className="multi-col">
                              <div className="inn">
                                <h4>Page sets 1</h4>
                                <ul>
                                  <li>
                                    <Link
                                      href="/all-profiles"
                                      className="fclick"
                                    >
                                      All Profiles
                                    </Link>
                                  </li>
                                  <li>
                                    <a href="profile-details.html">
                                      Profile details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="wedding.html">Wedding</a>
                                  </li>
                                  <li>
                                    <a href="wedding-video.html">
                                      Wedding video
                                    </a>
                                  </li>
                                  <li>
                                    <a href="services.html">Our Services</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="multi-col">
                              <div className="inn">
                                <h4>Page sets 2</h4>
                                <ul>
                                  <li>
                                    <a href="plans.html">Pricing plans</a>
                                  </li>
                                  <li>
                                    <a href="login.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="sign-up.html">Sign-up</a>
                                  </li>
                                  <li>
                                    <a href="photo-gallery.html">
                                      Photo gallery
                                    </a>
                                  </li>
                                  <li>
                                    <a href="photo-gallery-1.html">
                                      Photo gallery 1
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="multi-col">
                              <div className="inn">
                                <h4>Page sets 3</h4>
                                <ul>
                                  <li>
                                    <a href="contact.html">Contact</a>
                                  </li>
                                  <li>
                                    <a href="about.html">About</a>
                                  </li>
                                  <li>
                                    <a href="blog.html">Blog</a>
                                  </li>
                                  <li>
                                    <a href="blog-detail.html">Blog detail</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="multi-col">
                              <div className="inn">
                                <h4>Page sets 4</h4>
                                <ul>
                                  <li>
                                    <a href="enquiry.html">Ask your doubts</a>
                                  </li>
                                  <li>
                                    <a href="make-reservation.html">
                                      Make Reservation
                                    </a>
                                  </li>
                                  <li>
                                    <a href="faq.html">FAQ</a>
                                  </li>
                                  <li>
                                    <a href="coming-soon.html" target="_blank">
                                      Coming soon
                                    </a>
                                  </li>
                                  <li>
                                    <a href="404.html">404</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="multi-col full">
                              <div className="inn">
                                <h4>User dashboard pages</h4>
                                <ul>
                                  <li>
                                    <a href="user-dashboard.html">Dashboard</a>
                                  </li>
                                  <li>
                                    <a href="user-profile.html">My profile</a>
                                  </li>
                                  <li>
                                    <a href="user-interests.html">Interests</a>
                                  </li>
                                  <li>
                                    <a href="user-chat.html">Chat lists</a>
                                  </li>
                                  <li>
                                    <a href="user-plan.html">My plan details</a>
                                  </li>
                                  <li>
                                    <a href="user-setting.html">
                                      Profile settings
                                    </a>
                                  </li>
                                  <li>
                                    <a href="user-profile-edit.html">
                                      Edit full profile
                                    </a>
                                  </li>
                                  <li>
                                    <a href="login.html">Sign in</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="smenu-pare">
                      <span className="smenu">Top pages</span>
                      <div className="smenu-open smenu-single">
                        <ul>
                          <li>
                            <Link href="/all-profiles">All profiles</Link>
                          </li>
                          {/* <li>
                          <a href="profile-details.html">Profile details</a>
                        </li> */}

                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link href="/gallery">Photo gallery</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link href="/plans">Plans</Link>
                    </li>
                    <li>
                      <Link href="/signup">Register</Link>
                    </li>
                    <li className="smenu-pare">
                      <span className="smenu">Dashboard</span>
                      <div className="smenu-open smenu-single">
                        <ul>
                          <li>
                            <Link href="/dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link href="/user-profile">My profile</Link>
                          </li>
                          <li>
                            <Link href="/interests">Interests</Link>
                          </li>
                          <li>
                            <Link href="/chat-list">Chat lists</Link>
                          </li>
                          <li>
                            <Link href="/user-plan">My plan details</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* <!-- USER PROFILE --> */}
                <div className="al">
                  <div className="head-pro">
                    <img
                      src="../../public/images/profiles/1.jpg"
                      alt=""
                      loading="lazy"
                    />
                    <b>Advisor</b>
                    <br />
                    <h4>Ashley emyy</h4>
                    <span className="fclick"></span>
                  </div>
                </div>

                {/* <!--MOBILE MENU--> */}
                <div className="mob-menu">
                  <div className="mob-me-ic">
                    <button
                      className="mobile-menu bg-transparent"
                      data-mob="mobile"
                      onClick={toggleMenu}
                    >
                      <img src="/images/icon/menu.svg" alt="" />
                    </button>
                  </div>
                </div>
                {/* <!--END MOBILE MENU--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END --> */}

        {/* <!-- EXPLORE MENU POPUP --> */}
        {isMenuOpen && (
          <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        )}
        {/* <!-- END MOBILE MENU POPUP --> */}

        {/* <!-- MOBILE USER PROFILE MENU POPUP --> */}
        <div className="mob-me-all dashbord_menu">
          <div className="mob-me-clo">
            <img src="../../public/images/icon/close.svg" alt="" />
          </div>
          <div className="mv-bus">
            <div className="head-pro">
              <img
                src="../../public/images/profiles/1.jpg"
                alt=""
                loading="lazy"
              />
              <b>user profile</b>
              <br />
              <h4>Ashley emyy</h4>
            </div>
            <ul>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="sign-up.html">Sign-up</a>
              </li>
              <li>
                <a href="plans.html">Pricing plans</a>
              </li>
              <li>
                <a href="all-profiles.html">Browse profiles</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- END USER PROFILE MENU POPUP -->   */}
      </div>
    </>
  );
};

export default Header;
