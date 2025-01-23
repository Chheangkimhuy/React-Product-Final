import React from 'react'
import { AiFillProduct } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { RiContactsBookFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

function BottomBar() {
  return (
    <div>
      <div className="conatiner-fluid bg-blue-700 py-4 d-lg-none fixed-bottom">
        <ul className="nav justify-content-between px-4">
          <li><NavLink to="/" className="d-grid text-light text-decoration-none">
            <IoHome className='mx-auto fs-3' />
            Home
          </NavLink></li>
          <li><NavLink to="/product" className="d-grid text-light text-decoration-none">
            <AiFillProduct className='mx-auto fs-3' />
            Product
          </NavLink></li>
          <li><a href="" className="d-grid text-light text-decoration-none">
            <RiContactsBookFill className='mx-auto fs-3' />
            Contact
          </a></li>
          <li><NavLink to="/card" className="d-grid text-light text-decoration-none">
            <FaShoppingCart className='mx-auto fs-3' />
            Cart
          </NavLink></li>
          <li><a href="" className="d-grid text-light text-decoration-none">
            <IoMdContact className='mx-auto fs-3' />
            Account
          </a></li>
        </ul>
      </div>
    </div>
  )
}

export default BottomBar