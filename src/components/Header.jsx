import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  //   const currentTheme = localStorage.getItem("theme");
  const auth = localStorage.getItem('token');
  
  const CurrentNavItem = ({ isActive }) => ({
    color: isActive ? "#fff" : "#afb6cd",
});

  return (
    <header className="header " id="header">
      <nav className="navbar container">
        <a href="#">
          <h2 className="logo activated">NewsFlash</h2>
        </a>

        <div className={`menu ${mobileMenu ? " activated " : ""} `} id="menu">
          <ul className="list">
            <li className="list-item">
              <NavLink
                exact
                to="/"
                className="list-link"
                style={CurrentNavItem}
              >
                Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                exact
                to="/categories"
                className="list-link"
                style={CurrentNavItem}
              >
                Categories
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                exact
                to="/compose"
                className="list-link"
                style={CurrentNavItem}
              >
                Compose
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                exact
                to="/blogs"
                className="list-link"
                style={CurrentNavItem}
              >
                Blogs
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                exact
                to="/about"
                className="list-link"
                style={CurrentNavItem}
              >
                About
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                exact
                to="/contact"
                className="list-link"
                style={CurrentNavItem}
              >
                Contact
              </NavLink>
            </li>
            <li className="list-item screen-lg-hidden">
              <NavLink
                exact
                to={auth ? "/dashboard" :"/register"}
                className="list-link"
                style={CurrentNavItem}
              >
            {auth ? "Dashboard" :"Register"}
              </NavLink>
            </li>
            <li className="list-item screen-lg-hidden">
              <NavLink
                exact
                onClick={()=>localStorage.removeItem('token')}
                to={auth ? "/" :"/login"}
                className="list-link"
                style={CurrentNavItem}
              >
                {auth ? 'Log Out' : 'Sign In'}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="list list-right">
          <button
            onClick={() => setLightTheme(!lightTheme)}
            className="btn place-items-center"
            id="theme-toggle-btn"
          >
            {lightTheme ? (
              <i className="ri-moon-line mooon-icon"></i>
            ) : (
              <i className="ri-sun-line sun-icon"></i>
            )}
          </button>

          <NavLink exact to="/search">
            <button className="btn place-items-center" id="search-icon">
              <i className="ri-search-line"></i>
            </button>
          </NavLink>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="btn place-items-center screen-lg-hidden menu-toggle-icon"
            id="menu-toggle-icon"
          >
            {mobileMenu ? (
              <i className="ri-close-line close-menu-iconn"></i>
            ) : (
              <i className="ri-menu-3-line open-menu-icon"></i>
            )}
          </button>

          <NavLink
            exact
            onClick={()=>{localStorage.removeItem('token')}}
            to={auth ? "/" :"/login"}
            style={CurrentNavItem}
            className="list-link screen-sm-hidden"
          >
            {auth ? 'Log Out' : 'Sign In'}
          </NavLink>
          <NavLink
            exact
            to={auth ? "/dashboard" :"/register"}
            style={CurrentNavItem}
            className="btn sign-up-btn fancy-border screen-sm-hidden"
          >
            <span>{auth ? 'Dashboard' : 'Sign Up'}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
