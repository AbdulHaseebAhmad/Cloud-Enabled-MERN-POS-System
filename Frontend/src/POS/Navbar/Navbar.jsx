import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/PosScreenActions";
import { useState } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const rp = useSelector((state) => state.currentCart.currentOrder);
  const [SKU,setSKU] = useState("");
  console.log(rp);

  const handleScan = (e) => {
    const { value } = e.target;
    console.log(value);
    setSKU(value);
  };

  const handleSubmitSKU = () => {
    if(SKU.length > 0){
      dispatch(getProduct(SKU));
  }};
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Store Name</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Scan or Enter SKU"
            className="p-2 border rounded w-64 bg-white text-black"
            onChange={handleScan}
          />
          <button className="p-2 border border-gray-300 text-d-primary-action-color rounded hover:bg-d-primary-action-color hover:text-white" onClick={handleSubmitSKU}>
            Search
          </button>
          <button className="p-2 border border-gray-300 text-d-primary-action-color rounded hover:bg-d-primary-action-color hover:text-white" onClick={handleSubmitSKU}>
            Scan
          </button>
        </div>
        <div className="flex flex-col items-end">
        <span className="text-sm">Date & Time</span>
        <span className="text-sm">Cashier Name</span>
        </div>
      </header>
      <nav className="bg-white p-2 border-b border-gray-200 shadow-sm">
        <ul className="flex space-x-8 justify-center">
          <li>
            <NavLink
              to="/pos/checkout"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-d-primary-action-color hover:text-d-primary-action-color"
                  : "text-sm text-gray-700"
              }
            >
              Current Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pos/open-orders"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-d-primary-action-color hover:text-d-primary-action-color"
                  : "text-sm text-gray-700"
              }
            >
              Open Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pos/coupons"
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-d-primary-action-color hover:text-d-primary-action-color"
                  : "text-sm text-gray-700"
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
