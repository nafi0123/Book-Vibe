import React from "react";
import { NavLink } from "react-router";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Dynamic styling for active/inactive links
  const navItemStyle = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${
      isActive
        ? "text-green-600 bg-green-100"
        : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
    }`;

  const links = (
    <>
      <NavLink to="/" className={navItemStyle}>
        Home
      </NavLink>
      <NavLink to="/about" className={navItemStyle}>
        About
      </NavLink>
      <NavLink to="/readList" className={navItemStyle}>
        Read List
      </NavLink>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className=" px-1">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-green-600 tracking-tight">
              Book<span className="text-gray-800">Vibe</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">{links}</div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="ml-4 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 shadow transition duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-white rounded-box w-52 space-y-2"
            >
              {links}
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
