import React, { use } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/userIcon.gif";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
export default function NavBar() {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("usre trying to logout");
    logOut()
      .then(() => {
        alert("You logged out successfully")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div>{user && user.email}</div>
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
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    document
                      .getElementById("services-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link to="/myprofile">
                  <a>My Profile</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-xl ">
            <img className="w-14 h-14" src={logo} alt="" />
            <span
              className="hidden sm:block"
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
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() =>
                  document
                    .getElementById("services-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <a>Service</a>
              </Link>
            </li>
            <li>
              <Link to="/myprofile">
                <a>My Profile</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-neutral btn-outline w-34"
            >
              <img className="w-10 h-10" src={userIcon} alt="" />
              LogOut
            </button>
          ) : (
            <Link className="btn btn-neutral btn-outline w-34" to="/auth/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
