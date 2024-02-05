"use client";
import Layout from "@/components/layouts/Layout";
import { getSingleUser } from "@/helpers/getUsers";
import axios from "axios";
// import 'dotenv/config'
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const UserEditProfile = () => {

  const router = useParams();
  const { id } = router;
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);

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

  const handleDropSingleFile = (files) => {
    const newFile = files[0];
    if (newFile) {
      setFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  };

  const imageUpload = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.UPLOAD_PRESET);
    data.append("cloud_name", process.env.CLOUD_NAME);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const res2 = await res.json();
    return res2.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const image = await imageUpload();
      formData.images = image;
    }
    await axios
      .put(`/api/auth/singleuser/${id}`, formData)
      .then((res) => {
        toast.success('Profile Updated Succesfully')
      })
      .catch((err) => console.log(err));
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
                            value={formData?.phone}
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
                        <div className="form-group">
                          <label className="lb">Profile Picture:</label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleDropSingleFile(e.target.files)
                            }
                          />
                          {file && (
                            <img
                              src={file.preview}
                              alt="Preview"
                              className="preview-image"
                            />
                          )}
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
                              value={formData?.dob}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Age:</label>
                            <input
                              type="number"
                              className="form-control"
                              name="age"
                              value={formData?.age}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Height:</label>
                            <input
                              type="Number"
                              className="form-control"
                              name="height"
                              value={formData?.height}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Weight:</label>
                            <input
                              type="Number"
                              name="weight"
                              className="form-control"
                              value={formData?.weight}
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
                              name="fathersName"
                              value={formData?.fathersName}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Family name:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="familyName"
                              value={formData?.familyName}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="lb">Religion:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="religion"
                            value={formData?.religion}
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
                            typeof="text"
                            name="jobType"
                            value={formData?.jobType}
                          >
                            <option value="Business">Business</option>
                            <option value="Employee">Employee</option>
                            <option value="Government">Government</option>
                            <option value="Jobless">Jobless</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="lb">Company name:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            value={formData?.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Salary:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="salary"
                              value={formData?.salary}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Position:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="position"
                              value={formData?.position}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="lb">Degree:</label>
                          <input
                            type="text"
                            name="degree"
                            className="form-control"
                            value={formData?.degree}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">School:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="school"
                              value={formData?.school}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">College:</label>
                            <input
                              type="text"
                              name="college"
                              className="form-control"
                              value={formData?.college}
                              onChange={handleInputChange}
                            />
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
                            <input
                              type="text"
                              name="whatsapp"
                              className="form-control"
                              value={formData?.whatsapp}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Facebook:</label>
                            <input
                              type="text"
                              name="facebook"
                              className="form-control"
                              value={formData?.facebook}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Instagram:</label>
                            <input
                              type="text"
                              name="instagram"
                              className="form-control"
                              value={formData?.instagram}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Twitter:</label>
                            <input
                              type="text"
                              name="twitter"
                              className="form-control"
                              value={formData?.twitter}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Youtube:</label>
                            <input
                              type="text"
                              name="youtube"
                              className="form-control"
                              value={formData?.youtube}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Linkedin:</label>
                            <input
                              type="text"
                              name="linkedin"
                              className="form-control"
                              value={formData?.linkedin}
                              onChange={handleInputChange}
                            />
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
