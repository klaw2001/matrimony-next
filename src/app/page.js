import Image from "next/image";
import "./globals.css";

import Layout from "@/components/layouts/Layout";
import HomeSlickCarousel from "@/components/HomeSlickCarousel";
import TimeLineSection from "@/components/layouts/TimeLineSection";
import GalleryGrid from "@/components/layouts/GalleryGrid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroSearchLayout from "@/components/layouts/HeroSearchLayout";

export default function Home() {
  return (
    <Layout>
      {/* <!-- BANNER & SEARCH --> */}
      <section>
        <div className="str">
          <div>
            <div className="hom-head">
              <div className="container">
                <div className="row">
                  <div className="hom-ban">
                    <div className="ban-tit">
                      <span className="text-white">
                        <i className="no1">#1</i> Matrimony
                      </span>
                      <h1>
                        Find your
                        <br />
                        <b>Right Match</b> here
                      </h1>
                      <p>Most trusted Matrimony Brand in the World.</p>
                    </div>
                    <div className="ban-search chosenini">
                      <HeroSearchLayout />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- END --> */}

      {/* <!-- BANNER SLIDER --> */}
      <section>
        <div className="hom-ban-sli">
          <div>
            <ul className="ban-sli">
              <li>
                <div className="image">
                  <img src="/images/ban-bg.jpg" alt="" loading="lazy" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- QUICK ACCESS --> */}
      <HomeSlickCarousel />
      {/* <!-- END --> */}

      {/* <!-- TRUST BRANDS --> */}
      <section>
        <div className="hom-cus-revi">
          <div className="container">
            <div className="row ">
              <div className="home-tit">
                <p>trusted brand</p>
                <h2>
                  <span>
                    Trust by <b className="num">1500</b>+ Couples
                  </span>
                </h2>
                <span className="leaf1"></span>
                <span className="tit-ani-"></span>
              </div>
              <div className="slid-inn ">
                <ul className="slider3 row row-cols-1 row-cols-lg-3">
                  <li className="mb-5 mb-lg-0 col">
                    <div className="cus-revi-box">
                      <div className="revi-im d-none d-lg-block">
                        <img src="/images/stars-1.png" alt="" loading="lazy" />
                        <i className="cir-com cir-1"></i>
                        <i className="cir-com cir-2"></i>
                        <i className="cir-com cir-3"></i>
                      </div>
                      <p>
                        I met my soulmate through Quick Matche matrimony , and
                        we recently celebrated our first wedding anniversary!
                        Their unique matching algorithm identified our
                        compatibility perfectly.{" "}
                      </p>
                      <h5>Shubham (32)</h5>
                      <span>Mumbai</span>
                    </div>
                  </li>
                  <li className="mb-5 mb-lg-0 col">
                    <div className="cus-revi-box">
                      <div className="revi-im d-none d-lg-block">
                        <img src="/images/stars-1.png" alt="" loading="lazy" />
                        <i className="cir-com cir-1"></i>
                        <i className="cir-com cir-2"></i>
                        <i className="cir-com cir-3"></i>
                      </div>
                      <p>
                        After trying various dating apps without success, I
                        stumbled upon Quick Matche Matrimony. Their emphasis on
                        genuine connections resonated deeply, leading me to my
                        ideal partner!{" "}
                      </p>
                      <h5>Sarah</h5>
                      <span> Mumbai</span>
                    </div>
                  </li>
                  <li className="mb-5 mb-lg-0 col">
                    <div className="cus-revi-box">
                      <div className="revi-im d-none d-lg-block">
                        <img src="/images/stars-1.png" alt="" loading="lazy" />
                        <i className="cir-com cir-1"></i>
                        <i className="cir-com cir-2"></i>
                        <i className="cir-com cir-3"></i>
                      </div>
                      <p>
                        Their site has been instrumental in connecting
                        like-minded individuals seeking long-term relationships.
                        I highly recommend them!{" "}
                      </p>
                      <h5>Siddhartha (40)</h5>
                      <span>Mumbai</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- BANNER --> */}
      <section>
        <div className="str">
          <div className="ban-inn ban-home">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit">
                    <span className="text-warning">
                      <i className="no1">#1</i> Wedding Website
                    </span>
                    <h2>Why choose us</h2>
                    <p>Most Trusted and premium Matrimony Service in India.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- START --> */}
      <section>
        <div className="ab-sec2">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div className="opacity-100" data-dely="0.1">
                    <img src="/images/icon/prize.png" alt="" loading="lazy" />
                    <h4>Genuine profiles</h4>
                    <p>Contact genuine profiles with 100% verified mobile</p>
                  </div>
                </li>
                <li>
                  <div className="opacity-100" data-dely="0.3">
                    <img src="/images/icon/trust.png" alt="" loading="lazy" />
                    <h4>Most trusted</h4>
                    <p>The most trusted wedding matrimony brand lorem</p>
                  </div>
                </li>
                <li>
                  <div className="opacity-100" data-dely="0.6">
                    <img src="/images/icon/rings.png" alt="" loading="lazy" />
                    <h4>2000+ weddings</h4>
                    <p>Thousands of peoples have found their life partner</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- ABOUT START --> */}
      <section>
        <div className="ab-wel">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="ab-wel-lhs">
                  <span className="ab-wel-3"></span>
                  <img
                    src="images/about-home-1.jpg"
                    alt=""
                    loading="lazy"
                    className="ab-wel-1"
                  />
                  <img
                    src="images/about-home-2.jpg"
                    alt=""
                    loading="lazy"
                    className="ab-wel-2 img-fluid"
                  />
                  <span className="ab-wel-4"></span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ab-wel-rhs">
                  <div className="ab-wel-tit">
                    <h2>
                      Welcome to <em>Quick Match matrimony</em>
                    </h2>
                    <p>
                      Our one-stop shop for finding the ideal life partner! We
                      are passionate about uniting individuals based on shared
                      values, interests, and goals. Our journey began 6 years
                      ago when we realized that many people were dissatisfied
                      with traditional marriage methods.{" "}
                    </p>
                    <p>
                      {" "}
                      <Link href="/plans">Click here to</Link> Start you
                      matrimony service now.
                    </p>
                  </div>
                  <div className="ab-wel-tit-1">
                    <p>
                      As a result, we established our own platform to provide
                      users with modern tools and resources to find their
                      perfect match conveniently. Our team consists of highly
                      skilled professionals with extensive industry expertise
                      and commitment to delivering exceptional customer service.
                    </p>
                  </div>
                  <div className="ab-wel-tit-2">
                    <ul>
                      <li>
                        <div>
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <h4>
                            Enquiry <em>+91 81046 66091</em>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div>
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                          <h4>
                            Get Support <em>info@quickmatch.com</em>
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- COUNTS START --> */}
      <section>
        <div className="ab-cont">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <div>
                      <h4>2K</h4>
                      <span>Couples pared</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <div>
                      <h4>4000+</h4>
                      <span>Registerents</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <div>
                      <h4>1600+</h4>
                      <span>Mens</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ab-cont-po">
                    <i className="fa fa-female" aria-hidden="true"></i>
                    <div>
                      <h4>2000+</h4>
                      <span>Womens</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}

      {/* <!-- MOMENTS START --> */}
      <TimeLineSection />
      {/* <!-- END --> */}

      {/* <!-- GALLERY START --> */}
      <GalleryGrid />
      {/* <!-- END --> */}

      {/* <!-- FIND YOUR MATCH BANNER --> */}
      <section>
        <div className="str count">
          <div className="container">
            <div className="row">
              <div className="fot-ban-inn">
                <div className="lhs">
                  <h2>Find your perfect Match now</h2>
                  <p>
                    Start your journey to finding true love and lifelong
                    happiness. Our platform is designed to connect you with
                    like-minded individuals who share your values and
                    aspirations.
                  </p>
                  <Link href="/signup" className="cta-3 text-white">
                    Register Now
                  </Link>
                  <Link href="/contact" className="cta-4">
                    Help & Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END --> */}
    </Layout>
  );
}
