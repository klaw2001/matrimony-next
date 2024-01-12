import Layout from "@/components/layouts/Layout";
import React from "react";

const Interests = () => {
  return (
    <Layout>
      {/* <!-- LOGIN --> */}
      <section>
        <div className="db">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-12 db-sec-com">
                    <h2 className="db-tit">Interest request</h2>
                    <div className="db-pro-stat">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Edid profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              View profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Plan change
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Download invoice now
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="db-inte-main">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#home"
                            >
                              New requests
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#menu1"
                            >
                              Accept request
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#menu2"
                            >
                              Denay request
                            </a>
                          </li>
                        </ul>
                        {/* <!-- Tab panes --> */}
                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                          <div id="home" className="container tab-pane active">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men1.jpg"
                                      alt=""
                                    />{" "}
                                    <span className="badge bg-primary user-pla-pat">
                                      Platinum user
                                    </span>
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="profile-details.html"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men2.jpg"
                                      alt=""
                                    />{" "}
                                    <span className="badge bg-primary user-pla-gold">
                                      Gold user
                                    </span>
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="profile-details.html"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men3.jpg"
                                      alt=""
                                    />{" "}
                                    <span className="badge bg-primary user-pla-free">
                                      Free user
                                    </span>
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="profile-details.html"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men4.jpg"
                                      alt=""
                                    />{" "}
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="profile-details.html"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div id="menu1" className="container tab-pane fade">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men5.jpg"
                                      alt=""
                                    />{" "}
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                      <li>
                                        Accept on: 3:000 PM, 21 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="profile-details.html"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div id="menu2" className="container tab-pane fade">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men1.jpg"
                                      alt=""
                                    />{" "}
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                      <li>
                                        Denay on: 3:000 PM, 21 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="profile-details.html"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}
    </Layout>
  );
};

export default Interests;
