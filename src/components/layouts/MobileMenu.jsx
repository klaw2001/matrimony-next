import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Link from "next/link";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const [close, setClose] = useState(false);
  const [id, setUserId] = useState(null);
  const [user , setUser] = useState(null)

  const handleLinkClick = () => {
    toggleMenu(); // Close the menu
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userID = localStorage.getItem("loggedinUser");
    setUserId(userID);
    setUser(userName);
  }, []);

  const handleclose = () => {
    toggleMenu();
    setClose(!close);
  };

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
          <div className="" >
            {id ? (
              <div className="head-pro">
                <Link href={`/user-profile`} onClick={handleLinkClick}>
                  <h4>{user}</h4>
                </Link>
              </div>
            ) : (
              <Link href="/signup" className="cta-dark text-white" onClick={handleLinkClick}>
                Sign Up
              </Link>
            )}{" "}
          </div>
          <h4>
            <i className="fa fa-globe" aria-hidden="true"></i> EXPLORE CATEGORY
          </h4>
          <ul>
            <li>
              <Link href="/all-profiles" onClick={handleLinkClick}>All Profiles</Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleLinkClick}>Wedding Reservation</Link>
            </li>
            <li>
              <Link href="/services" onClick={handleLinkClick}>Services</Link>
            </li>
            <li>
              <Link href="/plans" onClick={handleLinkClick}>Plans</Link>
            </li>
          </ul>
          <h4>
            <i className="fa fa-align-center" aria-hidden="true"></i> All Pages
          </h4>
          <ul>
            {id && (
              <>
                <li>
                  <Link href="/user-profile" onClick={handleLinkClick}>My profile</Link>
                </li>
                <li>
                  <Link href="/plans" onClick={handleLinkClick}>Plans</Link>
                </li>
                <li>
                  <Link href="/chat-list" onClick={handleLinkClick}>Chat lists</Link>
                </li>
                <li>
                  <Link href="/user-plan" onClick={handleLinkClick}>My plan details</Link>
                </li>
              </>
            )}
            <li>
              <Link href="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link href="/gallery" onClick={handleLinkClick}>Photo gallery</Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
          {/* Other menu content */}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
