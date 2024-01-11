import Layout from '@/components/layouts/Layout'
import React from 'react'

const Login = () => {
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
                                <h2>Now <b>Find <br/> your life partner</b> Easy and fast.</h2>
                            </div>
                            <div className="im">
                                <img src="images/login-couple.png" alt=""/>
                            </div>
                            <div className="log-bg">&nbsp;</div>
                        </div>
                        <div className="rhs">
                            <div>
                                <div className="form-tit">
                                    <h4>Start for free</h4>
                                    <h1>Sign in to Matrimony</h1>
                                    <p>Not a member? <a href="sign-up.html">Sign up now</a></p>
                                </div>
                                <div className="form-login">
                                    <form onsubmit="login(event)">
                                        <div className="form-group">
                                            <label className="lb">Email:</label>
                                            <input type="email" className="form-control" id="email"
                                                placeholder="Enter email" name="email"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="lb">Password:</label>
                                            <input type="password" className="form-control" id="pwd"
                                                placeholder="Enter password" name="pswd"/>
                                        </div>
                                        <div className="form-group form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" name="agree"/> Remember
                                                me
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
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

export default Login