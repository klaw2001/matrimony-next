"use client"
import Layout from "@/components/layouts/Layout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter()
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        rememberMe: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/api/auth/login', credentials);
          toast.success('Login Successful')
          localStorage.setItem('token' , response.data.token)
          localStorage.setItem('loggedinUser' , response.data.user._id)
          localStorage.setItem('userName', response.data.user.name)
          setTimeout(() => {
            router.push('/')
          }, 2000);
        } catch (error) {
            toast.error(error.response.data.error)
          console.error(error.response.data.error); // Handle login error
        }
      };
  return (
    <Layout>
      {/* <!-- LOGIN --> */}
      <section>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="lhs">
                  <div className="tit">
                    <h2>
                      Now{" "}
                      <b>
                        Find <br /> your life partner
                      </b>{" "}
                      Easy and fast.
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
                      <h1>Sign in to Matrimony</h1>
                      <p>
                        Not a member? <Link href="/signup">Sign up now</Link>
                      </p>
                    </div>
                    <div className="form-login">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="lb">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleChange}
                            value={credentials.email}
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Password:</label>
                          <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="password"
                            onChange={handleChange}
                            value={credentials.password}
                          />
                        </div>
                        <div className="form-group form-check d-flex justify-content-between align-items-center">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="agree"
                              onChange={handleChange}
                              value={credentials.rememberMe}
                            />{" "}
                            Remember me
                          </label>
                          <Link href='/reset-password' className="fw-bold text-decoration-underline" style={{fontSize:'13px'}}>Forgot Password ?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Sign in
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

export default Login;
