"use client"
import Layout from "@/components/layouts/Layout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed before making the request

    axios.post('/api/auth/add-users/', user)
      .then(response => {
        toast.success('Sign Up Successful')
        setTimeout(() => {
          router.push('/login')
        }, 3000);
        console.log(response.data);
      })
      .catch(error => {
        toast.error("Something Went Wrong")
        console.error(error);
      });
  };
  return (
    <Layout>
      {/* <!-- REGISTER --> */}
      <section>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="lhs">
                  <div className="tit">
                    <h2>
                      Now <b>Find your life partner</b> Easy and fast.
                    </h2>
                  </div>
                  <div className="im">
                    <img src="images/login-couple.png" alt="" />
                  </div>
                  <div className="log-bg">&nbsp;</div>
                </div>
                <div className="rhs">
                  <div>
                    <div className="form-tit">
                      <h4>Start for free</h4>
                      <h1>Sign up to Matrimony</h1>
                      <p>
                        Already a member? <Link href="/login">Login</Link>
                      </p>
                    </div>
                    <div className="form-login">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="lb">Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Phone:</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter phone number"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Password:</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group form-check">
                          <label className="form-check-label">
                          <input
                              className="form-check-input"
                              type="checkbox"
                              name="agree"
                              checked={user.agree}
                              onChange={handleChange}
                            />
                            Creating an account means you’re okay with our
                            <Link href="/">Terms of Service</Link>, Privacy Policy,
                            and our default Notification Settings.
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          id="submit-btn"
                        >
                          Create Account
                        </button>
                      </form>
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

export default SignUp;
