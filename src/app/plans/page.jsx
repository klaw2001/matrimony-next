import Layout from '@/components/layouts/Layout'
import PlansNot from '@/components/layouts/PlansNot'
import Link from 'next/link'
import React from 'react'

const Plans = () => {
  return (
    <Layout>
        <PlansNot/>
            {/* <!-- PRICING PLANS --> */}
    {/* <section>
        <div className="plans-ban">
            <div className="container">
                <div className="row">
                    <span className="pri text-white">Pricing</span>
                    <h1 className='text-white'>Get Started <br/> Pick your Plan Now</h1>
                    <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <span className="nocre text-white">No credit card required</span>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- END --> */}

    {/* <!-- PRICING PLANS --> */}
    {/* <section>
        <div className="plans-main">
            <div className="container">
                <div className="row">
                    <ul>
                        <li>
                            <div className="pri-box">
                                <h2>Starter</h2>
                                <p>Printer took a type and scrambled </p>
                                <Link href="/signup" className="cta">Get Started</Link>
                                <span className="pri-cou"><b>69₹</b>/mo</span>
                                <ol>
                                    <li><i className="fa fa-close close" aria-hidden="true"></i> 5 Premium Profiles view /mo
                                    </li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                    <li><i className="fa fa-close close" aria-hidden="true"></i>View contact details</li>
                                    <li><i className="fa fa-close close" aria-hidden="true"></i>Send interest</li>
                                    <li><i className="fa fa-close close" aria-hidden="true"></i>Start Chat</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className="pri-box pri-box-pop">
                                <span className="pop-pln">Most popular plan</span>
                                <h2>Gold</h2>
                                <p>Quick Match Matrimony - Quaterly Subscription</p>
                                <Link href="/signup" className="cta">Get Started</Link>
                                <span className="pri-cou"><b>399₹</b></span>
                                <ol>
                                    <li><i className="fa fa-check" aria-hidden="true"></i> 20 Premium Profiles view /mo</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>View contact details</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Send interest</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Start Chat</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className="pri-box">
                                <h2>Platinum</h2>
                                <p>Quick Match Matrimony - Half Yearly Subscription </p>
                                <Link href="/signup" className="cta">Get Started</Link>
                                <span className="pri-cou"><b>669₹</b></span>
                                <ol>
                                    <li><i className="fa fa-check" aria-hidden="true"></i> 50 Premium Profiles view /mo</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>View contact details</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Send interest</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Start Chat</li>
                                </ol>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- END --> */}
    </Layout>
  )
}

export default Plans