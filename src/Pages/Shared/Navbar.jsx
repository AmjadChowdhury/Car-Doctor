import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">sign up</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
    </>

    const {user,logOut} = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
        .then(() => {
          console.log('logout succesfull')
        })
        .catch(error => {
          console.log(error)
        })
    }
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div>
            <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <button className="btn btn-outline btn-warning" onClick={handleLogout}>Logout</button> : <Link to="/login" className="btn btn-outline btn-warning">LogIn</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
