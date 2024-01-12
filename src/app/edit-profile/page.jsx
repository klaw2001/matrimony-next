import Layout from "@/components/layouts/Layout";
import React from "react";

const UserEditProfile = () => {
  return (
    <Layout>
      {/* <!-- REGISTER --> */}
      <section>
        <div className="login pro-edit-update">
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="rhs">
                  <div className="form-login">
                    <form>
                      {/* <!--PROFILE BIO--> */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Basic info</h4>
                          <h1>Edit my profile</h1>
                        </div>
                        <div className="form-group">
                          <label className="lb">Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                            name="name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Phone:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            name="phone"
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Password:</label>
                          <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                          />
                        </div>
                      </div>
                      {/* <!--END PROFILE BIO--> */}
                      {/* <!--PROFILE BIO--> */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Basic info</h4>
                          <h1>Advanced bio</h1>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Gender:</label>
                            <select
                              className="form-select chosen-select"
                              data-placeholder="Select your Gender"
                            >
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">City:</label>
                            <select
                              className="form-select chosen-select"
                              data-placeholder="Select your City"
                            >
                              <option>Chennai</option>
                              <option>Newyork</option>
                              <option>London</option>
                              <option>Chicago</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Date of birth:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Age:</label>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Height:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Weight:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Fathers name:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Mothers name:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="lb">Address:</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      {/* <!--END PROFILE BIO--> */}
                      {/* <!--PROFILE BIO--> */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Job details</h4>
                          <h1>Job & Education</h1>
                        </div>
                        <div className="form-group">
                          <label className="lb">Job type:</label>
                          <select
                            className="form-select chosen-select"
                            data-placeholder="Select your Hobbies"
                          >
                            <option>Business</option>
                            <option>Employee</option>
                            <option>Government</option>
                            <option>Jobless</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="lb">Company name:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Salary:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Job total experience:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="lb">Degree:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">School:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">College:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      {/* <!--END PROFILE BIO--> */}
                      {/* <!--PROFILE BIO--> */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Media</h4>
                          <h1>Social media</h1>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">WhatsApp:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Facebook:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Instagram:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">X:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Youtube:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Linkedin:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      {/* <!--END PROFILE BIO--> */}
                      {/* <!--PROFILE BIO--> */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>interests</h4>
                          <h1>Hobbies</h1>
                        </div>
                        <div className="chosenini">
                          <div className="form-group">
                            <select
                              className="chosen-select"
                              data-placeholder="Select your Hobbies"
                              multiple
                            >
                              <option></option>
                              <option>Modelling </option>
                              <option>Watching </option>
                              <option>movies </option>
                              <option>Playing </option>
                              <option>volleyball</option>
                              <option>Hangout with family </option>
                              <option>Adventure travel </option>
                              <option>Books reading </option>
                              <option>Music </option>
                              <option>Cooking </option>
                              <option>Yoga</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* <!--END PROFILE BIO--> */}
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
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

export default UserEditProfile;
