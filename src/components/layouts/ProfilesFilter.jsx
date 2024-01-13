import Link from "next/link";
import React from "react";

const ProfilesFilter = () => {
  return (
    <>
      {/* <!-- START --> */}
      <section>
        <div className="all-weddpro all-jobs all-serexp chosenini">
          <div className="container">
            <div className="row">
              <div className="col-md-3 fil-mob-view">
                <span className="filter-clo">+</span>
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-search" aria-hidden="true"></i> I am
                    looking for
                  </h4>
                  <div className="form-group">
                    <select className="chosen-select">
                      <option value="">I am looking for</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>Age
                  </h4>
                  <div className="form-group">
                    <select className="chosen-select">
                      <option value="">Select age</option>
                      <option value="">18 to 30</option>
                      <option value="">31 to 40</option>
                      <option value="">41 to 50</option>
                      <option value="">51 to 60</option>
                      <option value="">61 to 70</option>
                      <option value="">71 to 80</option>
                      <option value="">81 to 90</option>
                      <option value="">91 to 100</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-bell-o" aria-hidden="true"></i>Select
                    Religion
                  </h4>
                  <div className="form-group">
                    <select className="chosen-select">
                      <option>Religion</option>
                      <option>Any</option>
                      <option>Hindu</option>
                      <option>Muslim</option>
                      <option>Jain</option>
                      <option>Christian</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-cate">
                  <h4>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Location
                  </h4>
                  <div className="form-group">
                    <select className="chosen-select" name="addjbmaincate">
                      <option value="Chennai">Chennai</option>
                      <option value="Bangaluru">Bangaluru</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com lhs-rati lhs-avail lhs-cate">
                  <h4>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{" "}
                    Availablity
                  </h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          className="rating_check"
                          id="exav1"
                          checked
                        />
                        <label for="exav1">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          className="rating_check"
                          id="exav2"
                        />
                        <label for="exav2">Available</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          className="rating_check"
                          id="exav3"
                        />
                        <label for="exav3">Offline</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- END --> */}

                {/* <!-- START --> */}
                <div className="filt-com lhs-rati lhs-ver lhs-cate">
                  <h4>
                    <i className="fa fa-shield" aria-hidden="true"></i>Profile
                  </h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          className="rating_check"
                          id="exver1"
                          checked
                        />
                        <label for="exver1">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          className="rating_check"
                          id="exver2"
                        />
                        <label for="exver2">Premium</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          className="rating_check"
                          id="exver3"
                        />
                        <label for="exver3">Free</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- END --> */}
                {/* <!-- START --> */}
                <div className="filt-com filt-send-query">
                  <div className="send-query">
                    <h5>What are you looking for?</h5>
                    <p>We will help you to arrage the best match to you.</p>
                    <a href="#!" data-toggle="modal" data-target="#expfrm">
                      Send your queries
                    </a>
                  </div>
                </div>
                {/* <!-- END --> */}
              </div>
              <div className="col-md-9">
                <div className="short-all">
                  <div className="short-lhs">
                    Showing <b>32</b> profiles
                  </div>
                  <div className="short-rhs">
                    <ul>
                      <li>Sort by:</li>
                      <li>
                        <div className="form-group">
                          <select className="chosen-select">
                            <option value="">Most relative</option>
                            <option value="Men">Date listed: Newest</option>
                            <option value="Men">Date listed: Oldest</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        <div className="sort-grid sort-grid-1">
                          <i className="fa fa-th-large" aria-hidden="true"></i>
                        </div>
                      </li>
                      <li>
                        <div className="sort-grid sort-grid-2 act">
                          <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="all-list-sh">
                  <ul>
                    <li>
                      <div
                        className="all-pro-box user-avil-onli"
                        data-useravil="avilyes"
                        data-aviltxt="Available online"
                      >
                        {/* <!--PROFILE IMAGE--> */}
                        <div className="pro-img">
                          <a href="profile-details.html">
                            <img src="images/profiles/4.jpg" alt="" />
                          </a>
                          <div
                            className="pro-ave"
                            title="User currently available"
                          >
                            <span className="pro-ave-yes"></span>
                          </div>
                          <div className="pro-avl-status">
                            <h5>Available Online</h5>
                          </div>
                        </div>
                        {/* <!--END PROFILE IMAGE--> */}

                        {/* <!--PROFILE NAME--> */}
                        <div className="pro-detail">
                          <h4>
                            <a href="profile-details.html">Ashley emyy</a>
                          </h4>
                          <div className="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div className="links">
                            <span className="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              className="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <Link href='/profile-details/1'>More detaiils</Link>
                          </div>
                        </div>
                        {/* <!--END PROFILE NAME--> */}
                        {/* <!--SAVE--> */}
                        <span
                          className="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {/* <!--END SAVE--> */}
                      </div>
                    </li>
                    <li>
                      <div
                        className="all-pro-box"
                        data-useravil="avilno"
                        data-aviltxt="Offline"
                      >
                        {/* <!--PROFILE IMAGE--> */}
                        <div className="pro-img">
                          <a href="profile-details.html">
                            <img src="images/profiles/10.jpg" alt="" />
                          </a>
                          <div
                            className="pro-ave"
                            title="User currently available"
                          >
                            <span className="pro-ave-yes"></span>
                          </div>
                          <div className="pro-avl-status">
                            {/* <span className="marqu">
                              Last login 10 mins ago | I'll be available on
                              10:00 AM
                            </span> */}
                          </div>
                        </div>
                        {/* <!--END PROFILE IMAGE--> */}

                        {/* <!--PROFILE NAME--> */}
                        <div className="pro-detail">
                          <h4>
                            <a href="profile-details.html">Elizabeth Taylor</a>
                          </h4>
                          <div className="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div className="links">
                            <span className="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              className="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="profile-details.html">More detaiils</a>
                          </div>
                        </div>
                        {/* <!--END PROFILE NAME--> */}
                        {/* <!--SAVE--> */}
                        <span
                          className="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {/* <!--END SAVE--> */}
                      </div>
                    </li>
                    <li>
                      <div
                        className="all-pro-box user-avil-onli"
                        data-useravil="avilyes"
                        data-aviltxt="Available online"
                      >
                        {/* <!--PROFILE IMAGE--> */}
                        <div className="pro-img">
                          <a href="profile-details.html">
                            <img src="images/profiles/11.jpg" alt="" />
                          </a>
                          <div
                            className="pro-ave"
                            title="User currently available"
                          >
                            <span className="pro-ave-yes"></span>
                          </div>
                          <div className="pro-avl-status">
                            <h5>Available Online</h5>
                          </div>
                        </div>
                        {/* <!--END PROFILE IMAGE--> */}

                        {/* <!--PROFILE NAME--> */}
                        <div className="pro-detail">
                          <h4>
                            <a href="profile-details.html">Angelina Jolie</a>
                          </h4>
                          <div className="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div className="links">
                            <span className="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              className="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="profile-details.html">More detaiils</a>
                          </div>
                        </div>
                        {/* <!--END PROFILE NAME--> */}

                        {/* <!--END USER AND GET QUOTE--> */}
                        {/* <!--SAVE--> */}
                        <span
                          className="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {/* <!--END SAVE--> */}
                      </div>
                    </li>
                    <li>
                      <div
                        className="all-pro-box"
                        data-useravil="avilno"
                        data-aviltxt="Offline"
                      >
                        {/* <!--PROFILE IMAGE--> */}
                        <div className="pro-img">
                          <a href="profile-details.html">
                            <img src="images/profiles/12.jpg" alt="" />
                          </a>
                          <div
                            className="pro-ave"
                            title="User currently available"
                          >
                            <span className="pro-ave-yes"></span>
                          </div>
                          <div className="pro-avl-status">
                            <h5>Last login 10 mins ago</h5>
                            {/* <span className="marqu">
                              Last login 10 mins ago | I'll be available on
                              10:00 AM
                            </span> */}
                          </div>
                        </div>
                        {/* <!--END PROFILE IMAGE--> */}

                        {/* <!--PROFILE NAME--> */}
                        <div className="pro-detail">
                          <h4>
                            <a href="profile-details.html">Olivia mia</a>
                          </h4>
                          <div className="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div className="links">
                            <span className="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              className="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="profile-details.html">More detaiils</a>
                          </div>
                        </div>
                        {/* <!--END PROFILE NAME--> */}
                        {/* <!--SAVE--> */}
                        <span
                          className="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {/* <!--END SAVE--> */}
                      </div>
                    </li>
                    <li>
                      <div
                        className="all-pro-box"
                        data-useravil="avilno"
                        data-aviltxt="Offline"
                      >
                        {/* <!--PROFILE IMAGE--> */}
                        <div className="pro-img">
                          <a href="profile-details.html">
                            <img src="images/profiles/13.jpg" alt="" />
                          </a>
                          <div
                            className="pro-ave"
                            title="User currently available"
                          >
                            <span className="pro-ave-yes"></span>
                          </div>
                          <div className="pro-avl-status">
                            <h5>Last login 10 mins ago</h5>
                            {/* <span className="marqu">
                              Last login 10 mins ago | I'll be available on
                              10:00 AM
                            </span> */}
                          </div>
                        </div>
                        {/* <!--END PROFILE IMAGE--> */}

                        {/* <!--PROFILE NAME--> */}
                        <div className="pro-detail">
                          <h4>
                            <a href="profile-details.html">Jennifer</a>
                          </h4>
                          <div className="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div className="links">
                            <span className="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              className="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="profile-details.html">More detaiils</a>
                          </div>
                        </div>
                        {/* <!--END PROFILE NAME--> */}
                        {/* <!--SAVE--> */}
                        <span
                          className="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {/* <!--END SAVE--> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}
    </>
  );
};

export default ProfilesFilter;
