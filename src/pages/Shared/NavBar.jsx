import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth(); 
  console.log("user is", user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Order Food</Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-opacity-30">
      <div className="navbar bg-base-100 shadow-sm">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost font-bold text-2xl bg-amber-500 hover:bg-gray-300 p-3 rounded-2xl text-white hover:text-black"
          >
            Bhojon Bari
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="btn btn-error bg-yellow-600 text-white font-semibold"
              >
                Logout
              </button>
          <img
  className="rounded-full border-2 h-12 w-12 object-cover"
  src={user?.photoURL || '/default-profile.png'} // default picture
  alt={user?.displayName || "User"}
  title={user?.displayName}
/>

            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-yellow-600 text-white font-semibold">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
