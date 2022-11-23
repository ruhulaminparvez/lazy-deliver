import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../Assets/logo/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        alert("Logout Successful");
      })
  };

  return (
    <div>
      <div className="navbar bg-base-100 px-12" data-theme="lofi">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">Services</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center normal-case text-xl"
          >
            <img className="h-12 w-12 mr-2" src={logo} alt="" />
            LazyDeliver
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {/* <Link to='login' className="btn">Log In</Link>
          <Link to='registration' className="btn btn-outline">Registration</Link> */}

          {user?.email? (
            <>
              <Link to="/all-review" className="btn">
                My Reviews
              </Link>
              <Link to="/add-service" className="btn">
                Add Service
              </Link>
              <button onClick={handleLogout} className="btn btn-outline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="login" className="btn">
                Log In
              </Link>
              <Link to="registration" className="btn btn-outline">
                Registration
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
