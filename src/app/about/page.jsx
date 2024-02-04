import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <Layout>
      {/* <!-- BANNER --> */}
      <section>
        <div className="str">
          <div className="ban-inn ab-ban">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit text-warning">
                    <span>
                      <i className="no1 text-warning">#1</i> <span className="text-warning">Wedding Website</span>
                    </span>
                    <h1>About us</h1>
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
        <div className="ab-sec2">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div className="opacity-100" data-dely="0.1">
                    <img src="/images/icon/prize.png" alt="" loading="lazy" />
                    <h4>Genuine profiles</h4>
                    <p>Contact genuine profiles with 100% verified mobile</p>
                  </div>
                </li>
                <li>
                  <div className="opacity-100" data-dely="0.3">
                    <img src="/images/icon/trust.png" alt="" loading="lazy" />
                    <h4>Most trusted</h4>
                    <p>The most trusted wedding matrimony brand lorem</p>
                  </div>
                </li>
                <li>
                  <div className="opacity-100" data-dely="0.6">
                    <img src="/images/icon/rings.png" alt="" loading="lazy" />
                    <h4>2000+ weddings</h4>
                    <p>Thousands of peoples have found their life partner</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- ABOUT START --> */}
      <section>
        <div className="ab-wel">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="ab-wel-lhs">
                  <span className="ab-wel-3"></span>
                  <img
                    src="images/about-home-1.jpg"
                    alt=""
                    loading="lazy"
                    className="ab-wel-1"
                  />
                  <img
                    src="images/about-home-2.jpg"
                    alt=""
                    loading="lazy"
                    className="ab-wel-2 img-fluid"
                  />
                  <span className="ab-wel-4"></span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ab-wel-rhs">
                  <div className="ab-wel-tit">
                    <h2>
                      Welcome to <em>Quick Match matrimony</em>
                    </h2>
                    <p>
                      Our one-stop shop for finding the ideal life partner! We
                      are passionate about uniting individuals based on shared
                      values, interests, and goals. Our journey began 6 years
                      ago when we realized that many people were dissatisfied
                      with traditional marriage methods.{" "}
                    </p>
                    <p>
                      {" "}
                      <Link href="/plans">Click here to</Link> Start you
                      matrimony service now.
                    </p>
                  </div>
                  <div className="ab-wel-tit-1">
                    <p>
                      As a result, we established our own platform to provide
                      users with modern tools and resources to find their
                      perfect match conveniently. Our team consists of highly
                      skilled professionals with extensive industry expertise
                      and commitment to delivering exceptional customer service.
                    </p>
                  </div>
                  <div className="ab-wel-tit-2">
                    <ul>
                      <li>
                        <div>
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <h4>
                            Enquiry <em>+91 81046 66091</em>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div>
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                          <h4>
                            Get Support <em>info@quickmatch.com</em>
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- COUNTS START --> */}
      <section>
        <div className="ab-cont">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <div>
                      <h4>2K</h4>
                      <span>Couples pared</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <div>
                      <h4>4000+</h4>
                      <span>Registerents</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <div>
                      <h4>1600+</h4>
                      <span>Mens</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-female" aria-hidden="true"></i>
                    <div>
                      <h4>2000+</h4>
                      <span>Womens</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- RECENT COUPLES --> */}
      <section>
        <div className="hom-partners abo-partners" id="testimonials">
          <div className="container">
            <div className="row">
              {/* <!-- SUB TITLE --> */}
              <div className="sub-tit-caps">
                <h2>
                  Customer{" "}
                  <span className="" data-aos="flip-up">
                    Testimonials
                  </span>
                </h2>
                <p>From The Couples Itself</p>
              </div>

              {/* <!-- TESTMONIAL BACKGROUND SHAPES --> */}
              <div className="wedd-shap">
                <span className="abo-shap-1"></span>
                <span className="abo-shap-3"></span>
              </div>

              {/* <!-- SLIDER START --> */}
              <div id="demo" className="carousel slide" data-ride="carousel">
                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <ul>
                      <li>
                        <div className="ab-testmo">
                          <div className="ab-test-rat">
                            <div className="ab-test-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star-half-o"
                                aria-hidden="true"
                              ></i>
                              <span>(50 Reviews)</span>
                            </div>
                            <div className="ab-test-conte">
                              <p>
                              This website saved our family from an arranged marriage disaster by finding us compatible partners who understand each other well.
                              </p>
                            </div>
                          </div>
                          <div className="ab-rat-user">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />

                            <div>
                              <h4>Abhay & Nisha</h4>
                              <span>Pune</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ab-testmo">
                          <div className="ab-test-rat">
                            <div className="ab-test-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star-o"
                                aria-hidden="true"
                              ></i>
                              <span>(50 Reviews)</span>
                            </div>
                            <div className="ab-test-conte">
                              <p>
                              With so many fake profiles out there nowadays, this site stands apart due its strict verification process ensuring only real people get matched up!
                              </p>
                            </div>
                          </div>
                          <div className="ab-rat-user">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />

                            <div>
                              <h4> Akshay & Swati</h4>
                              <span>Mumbai</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ab-testmo">
                          <div className="ab-test-rat">
                            <div className="ab-test-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star-half-o"
                                aria-hidden="true"
                              ></i>
                              <span>(50 Reviews)</span>
                            </div>
                            <div className="ab-test-conte">
                            <p>
  My wife and I met through their portal; we&rsquo;re deeply grateful for the wonderful service they provide.
</p>

                            </div>
                          </div>
                          <div className="ab-rat-user">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                            <div>
                              <h4>Vivek & Shivani</h4>
                              <span>Mumbai</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="carousel-item">
                    <ul>
                      <li>
                        <div className="ab-testmo">
                          <div className="ab-test-rat">
                            <div className="ab-test-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star-o"
                                aria-hidden="true"
                              ></i>
                              <span>(50 Reviews)</span>
                            </div>
                            <div className="ab-test-conte">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </p>
                            </div>
                          </div>
                          <div className="ab-rat-user">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                            <div>
                              <h4>John Smith</h4>
                              <span>IT Profession</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ab-testmo">
                          <div className="ab-test-rat">
                            <div className="ab-test-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star-o"
                                aria-hidden="true"
                              ></i>
                              <span>(50 Reviews)</span>
                            </div>
                            <div className="ab-test-conte">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </p>
                            </div>
                          </div>
                          <div className="ab-rat-user">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                            <div>
                              <h4>Julia Ann</h4>
                              <span>Teacher</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ab-testmo">
                          <div className="ab-test-rat">
                            <div className="ab-test-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star-half-o"
                                aria-hidden="true"
                              ></i>
                              <span>(50 Reviews)</span>
                            </div>
                            <div className="ab-test-conte">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </p>
                            </div>
                          </div>
                          <div className="ab-rat-user">
                            <img src="images/profiles/7.jpg" alt="" />
                            <div>
                              <h4>William Son</h4>
                              <span>Government Staff</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Left and right controls --> */}
                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}
    </Layout>
  );
};

export default About;
