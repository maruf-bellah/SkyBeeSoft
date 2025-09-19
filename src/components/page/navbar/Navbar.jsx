/** @format */

import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        className='container-fluid sticky-top  bg-light'
        style={{
          top: "-100px",
        }}>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light p-lg-0'>
            <a className='navbar-brand d-lg-none' href='index.html'>
              <h1 className='fw-bold m-0'>GrowMark</h1>
            </a>
            <button
              className='navbar-toggler me-0'
              data-bs-target='#navbarCollapse'
              data-bs-toggle='collapse'
              type='button'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <div className='navbar-nav'>
                <a className='nav-item nav-link active' href='index.html'>
                  Home
                </a>
                <a className='nav-item nav-link' href='about.html'>
                  About
                </a>
                <a className='nav-item nav-link' href='service.html'>
                  Services
                </a>
                <a className='nav-item nav-link' href='project.html'>
                  Projects
                </a>
                <div className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    data-bs-toggle='dropdown'
                    href='#'>
                    Pages
                  </a>
                  <div className='dropdown-menu bg-light rounded-0 rounded-bottom m-0'>
                    <a className='dropdown-item' href='feature.html'>
                      Features
                    </a>
                    <a className='dropdown-item' href='team.html'>
                      Our Team
                    </a>
                    <a className='dropdown-item' href='testimonial.html'>
                      Testimonial
                    </a>
                    <a className='dropdown-item' href='quote.html'>
                      Quotation
                    </a>
                    <a className='dropdown-item' href='404.html'>
                      404 Page
                    </a>
                  </div>
                </div>
                <a className='nav-item nav-link' href='contact.html'>
                  Contact
                </a>
              </div>
              <div className='ms-auto d-none d-lg-block'>
                <a className='btn btn-primary rounded-pill py-2 px-3' href=''>
                  Get A Quote
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
