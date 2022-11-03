import { React, useState, Fragment, useContext } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../firebase/firebase";
import { CartContext } from "../contexts/cartContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const { currentUser } = useContext(UserContext);
  const { product } = useContext(CartContext);
  return (
    <Fragment>
      <nav className="w-100% h-14 bg-black  drop-shadow-lg">
        <div className="px-2 flex items-center justify-between h-full w-full">
          <div className="flex items-center px-4">
            <Link to="/">
              <h1 className="md:text-3xl font-extrabold font-nunito xs:mr-2 md:mr-4 xs:text-2xl text-black uppercase bg-white px-5 py-1 rounded-sm tracking-wider">
                ShopKart
              </h1>
            </Link>
            <ul className="hidden md:flex">
              <li className="px-10 sm:px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                <Link to="/">Home</Link>
              </li>
              <li className="px-10 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                <Link to="/products">Products</Link>
              </li>
              <li className="px-10 sm:px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                <Link to="/about">About</Link>
              </li>
              <li className="px-10 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex md:flex-row md:justify-end pr-4">
            {currentUser ? (
              <Link onClick={signOutUser} to="/login" className="flex flex-row bg-white text-black font-extrabold px-5 py-1.5 rounded-lg mr-4">
                Sign Out
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex flex-row bg-white text-black font-extrabold px-5 py-1.5 rounded-lg mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 w-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Sign In/Sign Up
              </Link>
            )}
            <Link
              to="/cart"
              className="flex flex-row bg-indigo-200 text-black font-extrabold px-5 py-1.5 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-3 w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Cart
            </Link>
          </div>
          <div
            className="md:hidden mr-4 cursor-pointer w-auto"
            onClick={handleClick}
          >
            {!nav ? (
              <MenuIcon className="text-white w-8" />
            ) : (
              <XIcon className="text-white w-8" />
            )}
          </div>
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute w-full px-6 pb-10 bg-black text-center font-bold text-white"
          }
        >
          <li
            className="block border-b-2 border-white w-full py-5"
            onClick={handleClose}
          >
            <Link to="/products">Products</Link>
          </li>
          <li
            className="block border-b-2 border-white w-full py-5"
            onClick={handleClose}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className="block border-b-2 border-white w-full py-5"
            onClick={handleClose}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="block border-b-2 border-white w-full py-5"
            onClick={handleClose}
          >
            <Link to="/login">Sign In/Sign Up</Link>
          </button>
          <Link to="/cart" onClick={handleClose} className="block border-b-2 border-white w-full py-5">
            Cart
          </Link>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
