"use client"
import AOS from 'aos';
import React, { useEffect } from 'react'

const GalleryGrid = () => {
    useEffect(() => {
        AOS.init();
      });
  return (
    <>
         <section>
        <div className="wedd-gall home-wedd-gall">
            <div className="">
                <div className="gall-inn">
                    <div className="home-tit">
                        <p>collections</p>
                        <h2><span>Photo gallery</span></h2>
                        <span className="leaf1"></span>
                        <span className="tit-ani-"></span>
                    </div>
                    <div className="col-sm-6 col-md-2">
                        <div className="gal-im mb-0 " data-aos="flip-up">
                            <img src="images/slick-1.jpeg" className="gal-siz-1" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-2.jpeg" className="gal-siz-2" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-3.jpeg" className="gal-siz-2" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-4.jpeg" className="gal-siz-1" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2">
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-5.jpeg" className="gal-siz-1" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-6.jpeg" className="gal-siz-2" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-7.jpeg" className="gal-siz-2" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-8.jpeg" className="gal-siz-1" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/slick-9.jpeg" className="gal-siz-2" alt="" loading="lazy"/>
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                        <div className="gal-im mb-0" data-aos="flip-up">
                            <img src="images/about-home-1.jpg" className="gal-siz-1" alt="" loading="lazy"/>
                              {/* 1 */}
                            <div className="txt text-white">
                                <span className='text-white'>Wedding</span>
                                <h4 className='text-white'>Bride & Groom</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GalleryGrid