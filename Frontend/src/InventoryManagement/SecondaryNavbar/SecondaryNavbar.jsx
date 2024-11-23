import { NavLink } from "react-router-dom";

const SecondaryNavbar = () => {
  const ActiveStyle =
    "text-lt-primary-action-color dark:text-d-primary-action-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color";
  const InActiveStyle =
    "text-lt-primary-text-color dark:text-d-primary-text-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color";

  return (
    <div className=" p-4 bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color shadow-md justify-self-center mt-2">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="flex space-x-6">
          <NavLink
            to="/dashboard/supplier-management"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Supplier Management
          </NavLink>
          <NavLink
            to="/dashboard/product-management"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Product Management
          </NavLink>
          <NavLink
            to="/dashboard/stock-tracking"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Stock Tracking
          </NavLink>
          <NavLink
            to="/dashboard/inventory-reports"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Inventory Reports
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
