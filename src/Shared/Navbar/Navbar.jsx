import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvide";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-black text-white">
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
            className="menu menu-compact dropdown-content mt-3 text-white p-2 shadow bg-black rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-2xl">Foodies</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              About us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        {user && (
          <div>
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <button><img
              className="rounder-full h-12 w-12 mt-2"
              src={user?.photoURL}
              alt=""
            /></button>
            </div>
            
          </div>
        )}

        {user ? (
          <Link onClick={handleLogOut} className="btn btn-warning">
            Log Out
          </Link>
        ) : (
          <Link to="/login">
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
