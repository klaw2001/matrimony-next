import { useRouter } from 'next/router'
import React from 'react'

const ProfileDetails = () => {
    const router = useRouter()
    const { id } = router.query
    
  return (
    <>
            {/* <!-- PROFILE --> */}
    <section>
        <div className="profi-pg profi-ban">
            <div className="">
                <div className="">
                    <div className="profile">
                        <div className="pg-pro-big-im">
                            <div className="s1">
                                <img src="images/profiles/profile-large.jpg" loading="lazy" className="pro" alt=""/>
                            </div>
                            <div className="s3">
                                <a href="#!" className="cta fol cta-chat">Chat now</a>
                                <span className="cta cta-sendint" data-toggle="modal" data-target="#sendInter">Send
                                    interest</span>
                            </div>
                        </div>
                    </div>
                    <div className="profi-pg profi-bio">
                        <div className="lhs">
                            <div className="pro-pg-intro">
                                <h1>Angelina Jolie</h1>
                                <div className="pro-info-status">
                                    <span className="stat-1"><b>100</b> viewers</span>
                                    <span className="stat-2"><b>Available</b> online</span>
                                </div>
                                <ul>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-city.png" loading="lazy" alt=""/>
                                            <span>City: <strong>New York</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-age.png" loading="lazy" alt=""/>
                                            <span>Age: <strong>21</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-city.png" loading="lazy" alt=""/>
                                            <span>Height: <strong>5.7</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="images/icon/pro-city.png" loading="lazy" alt=""/>
                                            <span>Job: <strong>Working</strong></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- PROFILE ABOUT --> */}
                            <div className="pr-bio-c pr-bio-abo">
                                <h3>About</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English. </p>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text.</p>
                            </div>
                            {/* <!-- END PROFILE ABOUT --> */}
                            {/* <!-- PROFILE ABOUT --> */}
                            <div className="pr-bio-c pr-bio-gal" id="gallery">
                                <h3>Photo gallery</h3>
                                <div id="image-gallery">
                                    <div className="pro-gal-imag">
                                        <div className="img-wrapper">
                                            <a href="#!"><img src="images/profiles/1.jpg" className="img-responsive" alt=""/></a>
                                            <div className="img-overlay"><i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pro-gal-imag">
                                        <div className="img-wrapper">
                                            <a href="#!"><img src="images/profiles/6.jpg" className="img-responsive" alt=""/></a>
                                            <div className="img-overlay"><i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pro-gal-imag">
                                        <div className="img-wrapper">
                                            <a href="#!"><img src="images/profiles/14.jpg" className="img-responsive" alt=""/></a>
                                            <div className="img-overlay"><i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END PROFILE ABOUT --> */}
                            {/* <!-- PROFILE ABOUT --> */}
                            <div className="pr-bio-c pr-bio-conta">
                                <h3>Contact info</h3>
                                <ul>
                                    <li><span><i className="fa fa-mobile"
                                                aria-hidden="true"></i><b>Phone:</b>+92 (8800) 68 - 8960</span></li>
                                    <li><span><i className="fa fa-envelope-o"
                                                aria-hidden="true"></i><b>Email:</b>angelinajoliewed@gmail.com</span>
                                    </li>
                                    <li><span><i className="fa fa fa-map-marker" aria-hidden="true"></i><b>Address: </b>28800
                                            Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span></li>
                                </ul>
                            </div>
                            {/* <!-- END PROFILE ABOUT --> */}
                            {/* <!-- PROFILE ABOUT --> */}
                            <div className="pr-bio-c pr-bio-info">
                                <h3>Personal information</h3>
                                <ul>
                                    <li><b>Name:</b> Angelina Jolie</li>
                                    <li><b>Fatheres name:</b> John smith</li>
                                    <li><b>Family name:</b> Joney family</li>
                                    <li><b>Age:</b> 24</li>
                                    <li><b>Date of birth:</b>03 Jan 1998</li>
                                    <li><b>Height:</b>167cm</li>
                                    <li><b>Weight:</b>65kg</li>
                                    <li><b>Degree:</b> MSC Computer Science</li>
                                    <li><b>Religion:</b> Any</li>
                                    <li><b>Profession:</b> Working</li>
                                    <li><b>Company:</b> Google</li>
                                    <li><b>Position:</b> Web developer</li>
                                    <li><b>Salary:</b> $1000 p/m</li>
                                </ul>
                            </div>
                            {/* <!-- END PROFILE ABOUT --> */}
                            {/* <!-- PROFILE ABOUT --> */}
                            <div className="pr-bio-c pr-bio-hob">
                                <h3>Hobbies</h3>
                                <ul>
                                    <li><span>Modelling</span></li>
                                    <li><span>Watching movies</span></li>
                                    <li><span>Playing volleyball</span></li>
                                    <li><span>Hangout with family</span></li>
                                    <li><span>Adventure travel</span></li>
                                    <li><span>Books reading</span></li>
                                    <li><span>Music</span></li>
                                    <li><span>Cooking</span></li>
                                    <li><span>Yoga</span></li>
                                </ul>
                            </div>
                            {/* <!-- END PROFILE ABOUT --> */}
                            {/* <!-- PROFILE ABOUT --> */}
                            <div className="pr-bio-c menu-pop-soci pr-bio-soc">
                                <h3>Social media</h3>
                                <ul>
                                    <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            {/* <!-- END PROFILE ABOUT --> */}


                        </div>

                        {/* <!-- PROFILE lHS --> */}
                        <div className="rhs">
                            {/* <!-- HELP BOX --> */}
                            <div className="prof-rhs-help">
                                <div className="inn">
                                    <h3>Tell us your Needs</h3>
                                    <p>Tell us what kind of service or experts you are looking.</p>
                                    <a href="sign-up.html">Register for free</a>
                                </div>
                            </div>
                            {/* <!-- END HELP BOX --> */}
                            {/* <!-- RELATED PROFILES --> */}
                            <div className="slid-inn pr-bio-c wedd-rel-pro">
                                <h3>Related profiles</h3>
                                <ul className="slider3">
                                    <li>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src="images/profiles/1.jpg" alt=""/>
                                                <span className="badge badge-success">21 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Christine</h5>
                                                <span>City: <b>New York City</b></span>
                                            </div>
                                            <a href="profile-details.html" className="fclick"></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src="images/profiles/2.jpg" alt=""/>
                                                <span className="badge badge-success">21 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Christine</h5>
                                                <span>City: <b>New York City</b></span>
                                            </div>
                                            <a href="profile-details.html" className="fclick"></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src="images/profiles/3.jpg" alt=""/>
                                                <span className="badge badge-success">21 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Christine</h5>
                                                <span>City: <b>New York City</b></span>
                                            </div>
                                            <a href="profile-details.html" className="fclick"></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src="images/profiles/4.jpg" alt=""/>
                                                <span className="badge badge-success">21 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Christine</h5>
                                                <span>City: <b>New York City</b></span>
                                            </div>
                                            <a href="profile-details.html" className="fclick"></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src="images/profiles/6.jpg" alt=""/>
                                                <span className="badge badge-success">21 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Christine</h5>
                                                <span>City: <b>New York City</b></span>
                                            </div>
                                            <a href="profile-details.html" className="fclick"></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- END RELATED PROFILES --> */}
                        </div>
                        {/* <!-- END PROFILE lHS --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END PROFILE --> */}
    </>
  )
}

export default ProfileDetails