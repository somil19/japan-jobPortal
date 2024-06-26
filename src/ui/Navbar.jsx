import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  return (
    <nav className="flex flex-wrap items-center justify-between p-3  bg-pink-200">
      <img
        src={logo}
        onClick={() => navigate("/")}
        alt="ACME"
        className="w-20 cursor-pointer h-18 md:w-28 md:h-26"
      />
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}>
          <img
            className={!isMenuOpen ? "block" : "hidden"}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="46"
            height="46"
            alt="Open Menu"
          />
          <img
            className={isMenuOpen ? "block" : "hidden"}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="46"
            height="46"
            alt="Close Menu"
          />
        </button>
      </div>
      <div
        className={`w-full md:flex md:items-center md:w-auto text-right text-bold mt-5 md:mt-0   ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          onClick={toggleMenu}
          className="block md:inline-block text-blue-900 hover:text-blue-500 text-xl px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Home
        </Link>
        <Link
          to="/jobs"
          onClick={toggleMenu}
          className="block md:inline-block text-blue-900 hover:text-blue-500 text-xl px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Jobs
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="block md:inline-block text-blue-900 text-xl hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="block md:inline-block text-blue-900 text-xl hover:text-blue-500 px-3 py-3  md:border-none"
        >
          Contact
        </Link>
      </div>
      <div className={`flex w-full md:w-auto  justify-center`}>
        <button
          href="#"
          className={`md:flex  md:w-auto px-4 py-2 text-center bg-blue-900 hover:bg-blue-500 text-white rounded-xl ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          Create Account
        </button>
      </div>
    </nav>
  );
}
