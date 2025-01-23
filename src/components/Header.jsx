import React, { useContext, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import ProductContext from '../store/ProductProvider';


function Header() {
  const { cart } = useContext(ProductContext);
  const [isLoggin, setIsloggin] = useState(true);

  return (
    <>
      {/* Navbar 1 */}
      <nav className="container-fluid navbar bg-light shadow fixed-top p-y-2  font-poppins m-0">
        <nav className="container ">
          <div className=" col-3">
            <a href="#" className='fs-3 fw-bold nav-link'>Logo</a>
          </div>
          <div className=" col-9 col-lg-6 ">
            <form className="d-flex border">
              <input type="text" className='form-control rounded-0 border-0 shadow-none ' placeholder='Search Products' />
              <button className='btn rounded-0 border-0 bg-secondary-subtle border-start'><IoMdSearch className=' fs-5 ' /></button>
            </form>
          </div>
          <div className=" col-3 d-none d-lg-block text-light">
            {isLoggin ? (
              <div className="d-flex align-items-center justify-content-end">
                <div className="dropdown">
                  <button
                    className="btn border-0 dropdown-toggle text-dark"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User Name
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  style={{ width: 40, height: 40 }}
                  className="rounded-circle overflow-hidden border"
                >
                  <img
                    src="https://static01.nyt.com/images/2021/02/27/arts/tomjerry1/tomjerry1-superJumbo.jpg"
                    alt="Profile"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <button className="btn px-3 bg-blue-700 text-light rounded-0 border" >
                  Register
                </button>
                <button className="btn px-3 border border-2 rounded-0 btn-outline-secondary">Login</button>
              </div>
            )}
          </div>
        </nav>
      </nav>
      {/* Navbar 2 */}
      <nav className="container-fluid navbar bg-dark font-poppins mt-5 p-0">
        <div className="container p-0">
          <div className="col-lg-3 col-12 py-2 py-lg-3 bg-blue-700 ">
            <div className="dropdown ">
              <button className="btn text-light bg-transparent  rounded-0 border-0  dropdown-toggle d-flex justify-content-between align-items-center w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className='d-flex align-items-center'>
                  <CiMenuBurger className='fs-2 me-2' />
                  <span className='fs-3 m-0'>Categories</span>
                </div>
              </button>
              <ul className="dropdown-menu w-100 mt-3 rounded-0 border border-2">
                <li><NavLink to="/laptop" className="dropdown-item" href="#">Laptop</NavLink></li>
                <li><NavLink to="/phone" className="dropdown-item" href="#">Phone</NavLink></li>
                <li><NavLink to="/camera" className="dropdown-item" href="#">Camera</NavLink></li>
                <li><NavLink to="/printer" className="dropdown-item" href="#">Printer</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="col-9 d-none d-lg-flex align-items-center justify-content-between">
            <ul className="nav">
              <li><NavLink to={"/"} className='nav-link hover-blue text-light'> Home</NavLink></li>
              <li><NavLink to={"/product"} className='nav-link hover-blue text-light'> Shop</NavLink></li>
              <li><a href="" className='nav-link hover-blue text-light'> Contact</a></li>
            </ul>
            <div className="d-flex align-items-center">
              <NavLink to="/card" className='nav-link hover-blue text-light'>
                <button type="button" className="btn text-light border me-3 rounded-0 position-relative">
                  <FaCartShopping />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length >= 0 ? cart.length : (0)}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                Shopping Card
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
