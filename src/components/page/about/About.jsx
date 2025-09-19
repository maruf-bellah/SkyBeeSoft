/** @format */

import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('data:image/jpeg;base64,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')",
        backgroundSize: "cover",
      }}>
      <div className='container-xxl about my-5'>
        <div className='container'>
          <div className='row g-0'>
            <div className='col-lg-6'>
              <div
                className='h-100 d-flex align-items-center justify-content-center'
                style={{
                  minHeight: "300px",
                }}>
                <button
                  className='btn-play'
                  data-bs-target='#videoModal'
                  data-bs-toggle='modal'
                  data-src='https://www.youtube.com/embed/DWRcNpR6Kdc'
                  type='button'>
                  <span />
                </button>
              </div>
            </div>
            <div
              className='col-lg-6 pt-lg-5 wow fadeIn'
              data-wow-delay='0.5s'
              style={{
                animationDelay: "0.5s",
                animationName: "fadeIn",
                visibility: "visible",
              }}>
              <div className='bg-white rounded-top p-5 mt-lg-5'>
                <p className='fs-5 fw-medium text-primary'>About Us</p>
                <h1 className='display-6 mb-4'>
                  The Best Marketing Agency to Improve Your Business
                </h1>
                <p className='mb-4'>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
                <div className='row g-5 pt-2 mb-5'>
                  <div className='col-sm-6'>
                    <img
                      alt=''
                      className='img-fluid mb-4'
                      src='img/icon/icon-5.png'
                    />
                    <h5 className='mb-3'>Managed Services</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                  <div className='col-sm-6'>
                    <img
                      alt=''
                      className='img-fluid mb-4'
                      src='img/icon/icon-2.png'
                    />
                    <h5 className='mb-3'>Dedicated Experts</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                </div>
                <a className='btn btn-primary rounded-pill py-3 px-5' href=''>
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
