import Layout from '@/components/layouts/Layout'
import React from 'react'

const Plans = () => {
  return (
    <Layout>
            {/* <!-- PRICING PLANS --> */}
    <section>
        <div class="plans-ban">
            <div class="container">
                <div class="row">
                    <span class="pri">Pricing</span>
                    <h1>Get Started <br/> Pick your Plan Now</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <span class="nocre">No credit card required</span>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END --> */}

    {/* <!-- PRICING PLANS --> */}
    <section>
        <div class="plans-main">
            <div class="container">
                <div class="row">
                    <ul>
                        <li>
                            <div class="pri-box">
                                <h2>Free</h2>
                                <p>Printer took a type and scrambled </p>
                                <a href="sign-up.html" class="cta">Get Started</a>
                                <span class="pri-cou"><b>$0</b>/mo</span>
                                <ol>
                                    <li><i class="fa fa-close close" aria-hidden="true"></i> 5 Premium Profiles view /mo
                                    </li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                    <li><i class="fa fa-close close" aria-hidden="true"></i>View contact details</li>
                                    <li><i class="fa fa-close close" aria-hidden="true"></i>Send interest</li>
                                    <li><i class="fa fa-close close" aria-hidden="true"></i>Start Chat</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div class="pri-box pri-box-pop">
                                <span class="pop-pln">Most popular plan</span>
                                <h2>Gold</h2>
                                <p>Printer took a type and scrambled </p>
                                <a href="sign-up.html" class="cta">Get Started</a>
                                <span class="pri-cou"><b>$349</b>/mo</span>
                                <ol>
                                    <li><i class="fa fa-check" aria-hidden="true"></i> 20 Premium Profiles view /mo</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>View contact details</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Send interest</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Start Chat</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div class="pri-box">
                                <h2>Platinum</h2>
                                <p>Printer took a type and scrambled </p>
                                <a href="sign-up.html" class="cta">Get Started</a>
                                <span class="pri-cou"><b>$549</b>/mo</span>
                                <ol>
                                    <li><i class="fa fa-check" aria-hidden="true"></i> 50 Premium Profiles view /mo</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>View contact details</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Send interest</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Start Chat</li>
                                </ol>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END --> */}
    </Layout>
  )
}

export default Plans