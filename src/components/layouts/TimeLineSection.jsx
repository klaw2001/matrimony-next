"use client";
import React, { useEffect } from "react";
import AOS from "aos";
const TimeLineSection = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <section>
        <div className="wedd-tline">
          <div className="container">
            <div className="row">
              <div className="home-tit">
                <p>Moments</p>
                <h2>
                  <span>How it works</span>
                </h2>
                <span className="leaf1"></span>
                <span className="tit-ani-"></span>
              </div>
              <div className="inn">
                <ul>
                  <li>
                    <div className="tline-inn">
                      <div className="tline-im " data-aos="fade-up">
                        <img
                          src="images/icon/rings.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="tline-con " data-aos="fade-up">
                        <h5>Register</h5>
                        <span>Timing: 7:00 PM</span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tline-inn tline-inn-reve">
                      <div className="tline-con " data-aos="fade-up">
                        <h5>Find your Match</h5>
                        <span>Timing: 7:00 PM</span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </p>
                      </div>
                      <div className="tline-im " data-aos="fade-up">
                        <img
                          src="images/icon/wedding-2.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tline-inn">
                      <div className="tline-im" data-aos="fade-up">
                        <img
                          src="images/icon/love-birds.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="tline-con " data-aos="fade-up">
                        <h5>Send Interest</h5>
                        <span>Timing: 7:00 PM</span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tline-inn tline-inn-reve">
                      <div className="tline-con " data-aos="fade-up">
                        <h5>Get Profile Information</h5>
                        <span>Timing: 7:00 PM</span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </p>
                      </div>
                      <div className="tline-im " data-aos="fade-up">
                        <img
                          src="images/icon/network.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tline-inn">
                      <div className="tline-im " data-aos="fade-up">
                        <img src="images/icon/chat.png" alt="" loading="lazy" />
                      </div>
                      <div className="tline-con " data-aos="fade-up">
                        <h5>Start Meetups</h5>
                        <span>Timing: 7:00 PM</span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tline-inn tline-inn-reve">
                      <div className="tline-con " data-aos="fade-up">
                        <h5>Getting Marriage</h5>
                        <span>Timing: 7:00 PM</span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </p>
                      </div>
                      <div className="tline-im" data-aos="fade-up">
                        <img
                          src="images/icon/wedding-couple.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeLineSection;
