import { useState } from "react";
import logo from "../../assets/logo.jpg";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const InventoryNavbar = () => {
  const userData = useSelector((state) => state.UserReducer.user);
  
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logOutHandler = () => {
    Cookies.remove("token");
    if(Cookies.get("token") === undefined){
      navigate("/login");
    }
  }
  return (
    <nav className="w-full bg-d-primary-bg-color p-4">
      <div className="flex items-center justify-between flex-wrap">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8 w-auto" />
        </div>

        {/* Center Section: Store/Outlet & Employee Info */}
        <div className="text-center text-d-primary-text-color flex-grow">
          <div className="text-sm font-medium">
            Store: Outlet 1 / ID: #12345
          </div>
          <div className="text-sm font-medium">
            Employee: {userData?.preferred_username}
          </div>
        </div>

        {/* Right Section: Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* <button className="bg-d-primary-action-color text-white font-xl px-6 py-2 rounded-md focus:outline-none hover:bg-d-secondary-bg-color transition-colors duration-300">
            Profile
          </button>
          <button className="bg-d-primary-action-color text-white font-xl px-6 py-2 rounded-md focus:outline-none hover:bg-d-secondary-bg-color transition-colors duration-300">
            Settings
          </button> */}
          <button
            className="bg-d-primary-action-color text-white font-xl px-6 py-2 rounded-md focus:outline-none hover:bg-d-secondary-bg-color transition-colors duration-300"
            onClick={logOutHandler}
          >
            Log Out
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-d-primary-text-color focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start bg-d-primary-bg-color p-6 space-y-4 mt-2 rounded-lg shadow-lg">
          {/* <button className="bg-d-secondary-bg-color text-d-primary-text-color px-6 py-3 w-full rounded-md focus:outline-none hover:bg-d-primary-action-color transition-colors duration-300">
            Profile
          </button>
          <button className="bg-d-secondary-bg-color text-d-primary-text-color px-6 py-3 w-full rounded-md focus:outline-none hover:bg-d-primary-action-color transition-colors duration-300">
            Settings
          </button> */}
          <button
            className="bg-d-secondary-bg-color text-d-primary-text-color px-6 py-3 w-full rounded-md focus:outline-none hover:bg-d-primary-action-color transition-colors duration-300"
            onClick={logOutHandler}
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default InventoryNavbar;
