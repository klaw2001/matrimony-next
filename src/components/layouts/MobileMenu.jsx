"use client";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Link from "next/link";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const [close, setClose] = useState(false);
  const [id, setUserId] = useState(null);

  const handleclose = () => {
    toggleMenu();
    setClose(!close);
  };
  useEffect(() => {
    // const userName = localStorage.getItem("userName");
    const userID = localStorage.getItem("loggedinUser");
    setUserId(userID);
    // setUser(userName);
  }, []);
  return (
    <>
      <div
        className={`mob-me-all mobile_menu ${isOpen ? "act" : ""}  ${
          close && ""
        }`}
      >
        <div className="mob-me-clo">
          <button className="w-auto bg-transparent" onClick={handleclose}>
            <img src="/images/icon/close.svg" alt="" />
          </button>
        </div>
        <div className="mv-bus">
          <h4>
            <i className="fa fa-globe" aria-hidden="true"></i> EXPLORE CATEGORY
          </h4>
          <ul>
            <li>
              <Link href="/all-profiles">All Profiles</Link>
            </li>
            <li>
              <Link href="/contact">Wedding Reservation</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/plans">Plans</Link>
            </li>
          </ul>
          <h4>
            <i className="fa fa-align-center" aria-hidden="true"></i> All Pages
          </h4>
          <ul>
          {id && (

<>

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
</>
    
)}
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Photo gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            
          </ul>
          {/* <div className="menu-pop-help">
            <h4>Support Team</h4>
            <div className="user-pro">
              <img src="/public/images/profiles/1.jpg" alt="" loading="lazy" />
            </div>
            <div className="user-bio">
              <h5>Ashley emyy</h5>
              <span>Senior personal advisor</span>
              <a href="enquiry.html" className="btn btn-primary btn-sm">
                Ask your doubts
              </a>
            </div>
          </div>
          <div className="menu-pop-soci">
            <ul>
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
              <li>
                <a href="#!">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="late-news">
            <h4>Latest news</h4>
            <ul>
              <li>
                <div className="rel-pro-img">
                  <img
                    src="../../public/images/couples/1.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="blog-detail.html" className="fclick"></a>
              </li>
              <li>
                <div className="rel-pro-img">
                  <img
                    src="../../public/images/couples/3.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="blog-detail.html" className="fclick"></a>
              </li>
              <li>
                <div className="rel-pro-img">
                  <img
                    src="../../public/images/couples/4.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="blog-detail.html" className="fclick"></a>
              </li>
            </ul>
          </div>
          <div className="prof-rhs-help">
            <div className="inn">
              <h3>Tell us your Needs</h3>
              <p>Tell us what kind of service you are looking for.</p>
              <a href="enquiry.html">Register for free</a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
