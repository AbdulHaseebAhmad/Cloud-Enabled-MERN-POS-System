import { useState } from 'react';
import logo from "../../assets/logo.jpg";
const InventoryNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full bg-d-primary-bg-color p-4">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8 w-auto" />
        </div>

        {/* Center Section: Store/Outlet & Employee Info */}
        <div className="text-center text-d-primary-text-color flex-grow">
          <div className="text-sm font-medium">Store: Outlet 1 / ID: #12345</div>
          <div className="text-sm font-medium">Employee: John Doe / ID: #67890</div>
        </div>

        {/* Right Section: Dropdown and Logout */}
        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="bg-d-secondary-bg-color text-d-secondary-text-color px-4 py-2 rounded-md focus:outline-none hover:bg-d-primary-action-color mr-2"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white bg-d-secondary-bg-color border border-d-primary-border-color rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 text-sm text-d-primary-text-color hover:bg-d-primary-action-color rounded-md">
                  Profile
                </li>
                <li className="px-4 py-2 text-sm text-d-primary-text-color hover:bg-d-primary-action-color rounded-md">
                  Settings
                </li>
                <li className="px-4 py-2 text-sm text-d-primary-text-color hover:bg-d-primary-action-color rounded-md">
                  <button className="w-full text-left" onClick={() => alert('Logged out')}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default InventoryNavbar;
