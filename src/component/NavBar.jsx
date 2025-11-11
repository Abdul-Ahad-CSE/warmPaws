import React from "react";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>MyProfile</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-14 h-14" src={logo} alt="" />
            <span
              style={{
                background: "linear-gradient(to right, #FF7B4F, #5DACE8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              WarmPaws
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>MyProfile</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-neutral btn-outline w-24">Login</a>
        </div>
      </div>
    </div>
  );
}
