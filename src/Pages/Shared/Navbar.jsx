import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Navbar.css";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const navItems = (
    <>
      <NavLink to="/">
        <li className="text-lg p-2 rounded-lg font-extrabold">Home</li>
      </NavLink>
      {!user && (
        <>
          <NavLink to="/login">
            <li className="text-lg p-2 rounded-lg font-extrabold">Login</li>
          </NavLink>
          <NavLink to="/signup">
            <li className="text-lg p-2 rounded-lg font-extrabold">sign up</li>
          </NavLink>
        </>
      )}
      {
        user && <NavLink to="/cart">
        <li className="text-lg p-2 rounded-lg font-extrabold">Cart</li>
      </NavLink>
      }
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Logout Successfully Done!"
        });
        navigate("/")
      })
      .catch((error) => {
        // console.log(error);
      });
  };
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
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <Link to="/userInfo">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-2"
          >
            <div className="w-10 rounded-full">
              <img alt="Chobi nai kno!" src={user.photoURL} />
            </div>
          </div>
          </Link>
        )}
        {user ? (
          <button
            className="btn btn-outline text-orange-500 border-2 border-orange-500 text-lg font-extrabold"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline text-orange-500 border-2 border-orange-500 text-lg font-extrabold"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
