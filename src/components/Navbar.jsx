import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export function Navbar() {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  return (
    <section>
      {/* Top Header */}
      <div className="Announcement md:flex md:flex-row md:justify-between">
        <div className="col-md-6 d-flex align-items-center display-none">
          <p>+255 768 356 890</p>
          <p>info@zpunet.com</p>
        </div>

        <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
          <Link to="">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link to="">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="">
            <i className="fab fa-pinterest-p"></i>
          </Link>
        </div>
      </div>


      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo-cropped.png" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Solange</span>
                  </a>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header md:flex md:justify-between">
            <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo-cropped.png" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Solange</span>
            </a>

            <div className="">
              <form className="input-group">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Search"
                />
                <button type="submit" className="search-button">
                  search
                </button>
              </form>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
              <div className="btn-group">
                <button
                  type="button"
                  className="name-button dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hi, Admin Doe
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>

                  <Link className="dropdown-item" to="#">
                    Logout
                  </Link>
                </div>
              </div>

              <Link to="/cart">
                <i className="fas fa-shopping-bag"></i>
                <span className="badge">{cartItems.length}</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}