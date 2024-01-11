import Layout from '@/components/layouts/Layout'
import React from 'react'

const SignUp = () => {
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
                  <h2>Now <b>Find your life partner</b> Easy and fast.</h2>
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
                    <p>Already a member? <a href="login.html">Login</a></p>
                  </div>
                  <div className="form-login">
                    <form onsubmit="signUp(event)">
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
                          id="password"
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
                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="agree"
                          />
                          Creating an account means you’re okay with our
                          <a href="#!">Terms of Service</a>, Privacy Policy, and
                          our default Notification Settings.
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
  )
}

export default SignUp