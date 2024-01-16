"use client";
import Layout from "@/components/layouts/Layout";
import { getSingleUser } from "@/helpers/getUsers";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const UserEditProfile = () => {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("loggedinUser");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getSingleUser(id);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const personal_info = user.personalInfo || [];

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
                            value={user.name}
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
                            value={user.email}
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
                            value={user.phone}
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
                            value={user.password}
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
                            <input
                              type="text"
                              className="form-control"
                              name="dob"
                              value={personal_info && personal_info?.dob}
                              disabled
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Age:</label>
                            <input
                              type="number"
                              className="form-control"
                              name="infoAge"
                              value={personal_info?.infoAge}
                            />
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
                            <input
                              type="text"
                              className="form-control"
                              value={user.hobbies}
                              name="hobbies"
                              placeholder="Enter Your Hobbies Seperated By Commas"
                            />
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
