import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/PosScreen/PosScreenActions";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.UserReducer.user);

  const [SKU, setSKU] = useState("");

  const handleScan = (e) => {
    setSKU(e.target.value);
  };

  const handleSubmitSKU = () => {
    if (SKU.length > 0) {
      dispatch(getProduct(SKU));
    }
  };

  const logOutHandler = () => {
    Cookies.remove("token");
    if (!Cookies.remove("token")) {
      navigate("/login");
    }
  };

  return (
    <>
      <header className="flex flex-wrap justify-between items-center p-4 bg-d-primary-bg-color shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0 border">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-d-primary-text-color">POS</h1>
        </div>

        {/* Search & Scan */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-2/4 justify-end space-y-2 md:space-y-0 md:space-x-4  ">
          <input
            type="text"
            placeholder="Scan or Enter SKU"
            className="p-2 border rounded w-full md:w-80 bg-white text-black"
            onChange={handleScan}
          />
          <div className="flex space-x-2">
            <button
              className="p-2 bg-d-primary-action-color text-white rounded hover:bg-d-secondary-bg-color transition w-16"
              onClick={handleSubmitSKU}
            >
              Search
            </button>
            {<button
              className="p-2 bg-d-primary-action-color text-white rounded hover:bg-d-secondary-bg-color transition w-16"
              onClick={handleSubmitSKU}
            >
              Scan
            </button>}
          </div>
        </div>

        {/* Date, Cashier Name & Logout */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0 ">
          <div className="text-sm text-d-primary-text-color">
            <div>Date: {new Date().toLocaleDateString()}</div>
            <div>Cashier: {userData?.preferred_username || "N/A"}</div>
          </div>
          <button
            className="p-2 bg-d-primary-action-color text-white rounded hover:bg-d-secondary-bg-color transition"
            onClick={logOutHandler}
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-d-secondary-bg-color p-3 border-b border-d-primary-border-color shadow-sm">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          <li>
            <NavLink
              to="/pos/checkout"
              className={({ isActive }) =>
                isActive ? "text-sm text-d-primary-action-color" : "text-sm text-white"
              }
            >
              Current Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pos/open-orders"
              className={({ isActive }) =>
                isActive ? "text-sm text-d-primary-action-color" : "text-sm text-white"
              }
            >
              Open Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pos/coupons"
              className={({ isActive }) =>
                isActive ? "text-sm text-d-primary-action-color" : "text-sm text-white"
              }
            >
              Coupons
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}