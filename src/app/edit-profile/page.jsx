"use client";
import Layout from "@/components/layouts/Layout";
import { getSingleUser } from "@/helpers/getUsers";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const UserEditProfile = () => {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("loggedinUser");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getSingleUser(id);
        setUser(userData);
        setFormData(userData);
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

  const personal_info = formData.personalInfo || [];
  const contactInfo = formData.contactInfo || [{}]; // Ensure contactInfo is an array with at least one object

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/auth/singleuser/${id}` ,formData)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err))
    console.log("Form submitted:", formData);

  };
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
                    <form onSubmit={handleSubmit}>
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
                            value={formData.name}
                            onChange={handleInputChange}
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
                            value={formData.email}
                            onChange={handleInputChange}
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
                            value={contactInfo[0]?.phone}
                            onChange={handleInputChange}
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
                            value={formData.password}
                            onChange={handleInputChange}
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
                              value={formData.gender}
                              onChange={handleInputChange}
                              name="gender"
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">City:</label>
                            {/* <select
                              className="form-select chosen-select"
                              data-placeholder="Select your City"
                            >
                              <option>Chennai</option>
                              <option>Newyork</option>
                              <option>London</option>
                              <option>Chicago</option>
                            </select> */}
                            <input
                              type="text"
                              className="form-control"
                              name="city"
                              placeholder="Enter Your City"
                              value={formData.city}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Date of birth:</label>
                            <input
                              type="date"
                              className="form-control"
                              name="dob"
                              value={personal_info[0]?.dob}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Age:</label>
                            <input
                              type="number"
                              className="form-control"
                              name="infoAge"
                              value={personal_info[0]?.infoAge}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Height:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={personal_info[0]?.infoHeight}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Weight:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={personal_info[0]?.weight}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Fathers name:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={personal_info[0]?.fathersName}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Family name:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={personal_info[0]?.familyName}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="lb">Religion:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={personal_info[0]?.religion}
                            onChange={handleInputChange}
                          />
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
                          <input
                            type="text"
                            className="form-control"
                            value={personal_info[0]?.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Salary:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={personal_info[0]?.salary}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Position:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={personal_info[0]?.position}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="lb">Degree:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={personal_info[0]?.degree}
                            onChange={handleInputChange}
                          />
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
                              value={formData.hobbies}
                              onChange={handleInputChange}
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
