import React from "react";
import DarkLight from "./DarkLight";

function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 uppercase bg-base-100"
          >
            <li>
              <a>about</a>
            </li>
            <li>
              <a>projects</a>
            </li>
            <li>
              <a>contact</a>
            </li>
            <li>
              <DarkLight />
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 uppercase">
          <li>
            <a>about</a>
          </li>
          <li>
            <a>projects</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li>
            <DarkLight />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
