import React from 'react';
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';
import {IoCallSharp, IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className="container-fluid bg-dark p-0 mb-5 pb-4 mb-lg-0 pb-lg-0">
      <div className="container p-0">
        <div className="row m-0">
          {/* Contact Section */}
          <div className="col-lg-4 py-2 py-lg-5 text-light">
            <h3>Get In Touch</h3>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptates aliquid est facere accusantium cupiditate ducimus nostrum repellat laboriosam odit necessitatibus tempore, incidunt praesentium nesciunt.
            </p>
            <ul className="list-unstyled">
              <li className="py-1">
                <IoLocationSharp className="fs-4 me-2" />
                334 Street, Phnom Penh, Cambodia
              </li>
              <li className="py-1">
                <MdEmail className=" fs-4 me-2" />
                chheangkimhuy419@gmail.com
              </li>
              <li className="py-1">
                <IoCallSharp className="fs-4 me-2" />
                +855 884907877
              </li>
            </ul>
          </div>

          {/* Links and Newsletter Section */}
          <div className="col-lg-8  row m-0 p-0">
            {/* Quick Shop */}
            <div className="col-md-3 py-2 py-lg-5 text-light ">
              <h3 className=''>Quick Shop</h3>
              <ul className="list-unstyled py-2">
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Home</a></li>
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Our Shop</a></li>
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Shopping Cart</a></li>
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Contact Us</a></li>
              </ul>
            </div>

            {/* My Account */}
            <div className="col-md-3 py-2 py-lg-5 text-light">
              <h3>My Account</h3>
              <ul className="list-unstyled py-2">
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Home</a></li>
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Our Shop</a></li>
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Shopping Cart</a></li>
                <li className="py-1"><a href="#" className="text-light text-decoration-none"> &gt; Contact Us</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-6 py-2 py-lg-5 text-light">
              <h3>Newsletter</h3>
              <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <form className='d-flex'>
                <input
                  type="email"
                  className="form-control py-2 rounded-0 shadow-none border-0"
                  placeholder="Please Enter Your Email Address"
                  aria-label="Email address"
                  style={{width:'75%'}}
                />
                <button type="submit" className="btn btn-primary text-light border-0 border-start rounded-0">
                  Sign Up
                </button>
              </form>
              <h4 className="mt-4">Follow Us</h4>
              <ul className="list-unstyled d-flex gap-3">
                <li><a href="#" className="text-light text-decoration-none"><FaFacebook className="fs-3" /></a></li>
                <li><a href="#" className="text-light text-decoration-none"><FaLinkedin className="fs-3" /></a></li>
                <li><a href="#" className="text-light text-decoration-none"><FaTiktok className="fs-3" /></a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row m-0 text-light pt-3 border-top">
            <div className="col-12 col-md-6">
              &copy; {new Date().getFullYear()} <a href="" className=' text-decoration-none hover-deceration fw-medium'>Domain</a>All Right Reserved. Designed. Designed by
              <a href="" className=' text-decoration-none hover-deceration fw-medium'>Web Developer</a>
              <p>Distributed By: <a href="" className=' text-decoration-none hover-deceration fw-medium'>ETEC</a></p>
            </div>
            <div className="col-12 col-md-6 text-end">
              ABA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
