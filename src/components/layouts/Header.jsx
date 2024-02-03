"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [id, setUserId] = useState(null);
  const toggleMenu = () => {
    console.log("Toggle Menu");
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userID = localStorage.getItem("loggedinUser");
    setUserId(userID);
    setUser(userName);
  }, []);
  return (
    <>
      <div>
        {/* <!-- TOP MENU --> */}
        <div className="head-top">
          <div className="container">
            <div className="row">
              <div className="lhs">
                <ul className="m-0">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="rhs">
                <ul className="m-0">
                  <li>
                    <a href="tel:+91 8104666091">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      &nbsp;+91 81046 66091
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@quickmatch.com">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      &nbsp; info@quickmatch.com
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
              <div className="hom-nav d-flex align-items-center">
                {/* <!-- LOGO --> */}
                <div className="logo">
                  <Link href="/" className="logo-brand">
                    <Image
                      src="/images/logo.svg"
                      alt="logo"
                      loading="lazy"
                      // layout="fill"
                      width={200}
                      height={50}
                      className="img-fluid mt-1"
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
                                  <h5 className="text-white">
                                    Browse profiles{" "}
                                    <span className="text-white">
                                      1200+ Verified profiles
                                    </span>
                                  </h5>
                                  <span className="explor-cta text-white">
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
                                  <h5 className="text-white">
                                    Wedding page{" "}
                                    <span className="text-white">
                                      Make reservation
                                    </span>
                                  </h5>
                                  <span className="explor-cta text-white">
                                    More details
                                  </span>
                                  <Link
                                    href="/wedding"
                                    className="fclick"
                                  ></Link>
                                </div>
                              </li>
                              <li>
                                <div className="menu-box menu-box-3">
                                  <h5 className="text-white">
                                    All Services
                                    <span className="text-white">
                                      Our Matrimonial Services
                                    </span>
                                  </h5>
                                  <span className="explor-cta text-white">
                                    More details
                                  </span>
                                  <Link
                                    href="/services"
                                    className="fclick"
                                  ></Link>
                                </div>
                              </li>
                              <li>
                                <div className="menu-box menu-box-4">
                                  <h5 className="text-white">
                                    Join Now{" "}
                                    <span className="text-white">
                                      Our Membership Plans Coming Soon
                                    </span>
                                  </h5>
                                  <span className="explor-cta text-white">
                                    More details
                                  </span>
                                  <Link href="/plans" className="fclick"></Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li className="smenu-pare">
                      <span className="">
                        <Link href='/all-profiles'>ALL Profiles</Link>
                      </span>
                     
                    </li> */}
                    
                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          <li>
                            <Link href="/gallery">Photo gallery</Link>
                          </li>
                   
                    
                    {id && (

                    <li className="smenu-pare">
                      <span className="smenu">Dashboard</span>
                      <div className="smenu-open smenu-single">
                        <ul>
                          {/* <li>
                            <Link href="/dashboard">Dashboard</Link>
                          </li> */}
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
                    )}
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                  </ul>
                </div>

                {/* <!-- USER PROFILE --> */}
                <div className="al" key={id}>
                  {id ? (
                    <div className="head-pro">
                      <Link href={`/user-profile`}>
                        <h4>{user}</h4>
                      </Link>
                    </div>
                  ) : (
                    <Link href="/signup" className="cta-dark text-white">
                      Sign Up
                    </Link>
                  )}{" "}
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
