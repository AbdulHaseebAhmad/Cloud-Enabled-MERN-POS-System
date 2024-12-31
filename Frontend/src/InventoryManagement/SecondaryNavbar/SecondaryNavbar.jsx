import { NavLink } from "react-router-dom";
import { useState } from "react";
import  {motion, AnimatePresence } from "framer-motion";
const SecondaryNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ActiveStyle =
    "text-lt-primary-action-color dark:text-d-primary-action-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color font-medium";
  const InActiveStyle =
    "text-d-secondary-bg-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color font-medium";

  return (
      <AnimatePresence>
        <motion.div 
      initial={{ x:0 }}
      animate={{ x:'center' }}
      exit={{ x:0 }}
      transition={{ duration: 0.6, type: "tween",  }}
      className={`p-1 md:p-6 bg-lt-secondary-bg-color shadow-md flex ${isOpen?'justify-self-center':'justify-self-end'} md:justify-self-center mt-2 rounded-lg`}>
      <div className="container mx-auto flex flex-col justify-between items-center">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-lt-primary-action-color text-white p-2 rounded-md"
        >
          {isOpen ? "Close" : "Navigate Menu"}
        </button>

        {/* Links for larger screens */}
        <nav className="hidden md:flex space-x-6 justify-around text-center text-2sm">
          <NavLink
            to="supplier-management"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Supplier Management
          </NavLink>
          <NavLink
            to="product-management"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Product Management
          </NavLink>
          <NavLink
            to="stock-tracking"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Stock Tracking
          </NavLink>
          <NavLink
            to="inventory-reports"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Inventory Reports
          </NavLink>
          <NavLink
            to="/inventory-management"
            className={({ isActive }) =>
              isActive ? ActiveStyle : InActiveStyle
            }
          >
            Dashboard
          </NavLink>
        </nav>
        <AnimatePresence>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 10 }}
              exit={{ y: 0 }}
              transition={{ duration: 0.2, type: "tween", bounce: 0.15 }}
              className="md:hidden bg-lt-secondary-bg-color  mt-4 p-4 rounded-lg shadow-lg"
            >
              <nav className="flex flex-col space-y-2 p-2">
                <NavLink
                  to="supplier-management"
                  className={({ isActive }) =>
                    isActive ? ActiveStyle : InActiveStyle
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Supplier Management
                </NavLink>
                <NavLink
                  to="product-management"
                  className={({ isActive }) =>
                    isActive ? ActiveStyle : InActiveStyle
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Product Management
                </NavLink>
                <NavLink
                  to="stock-tracking"
                  className={({ isActive }) =>
                    isActive ? ActiveStyle : InActiveStyle
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Stock Tracking
                </NavLink>
                <NavLink
                  to="inventory-reports"
                  className={({ isActive }) =>
                    isActive ? ActiveStyle : InActiveStyle
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Inventory Reports
                </NavLink>
                <NavLink
                  to="/inventory-management"
                  className={({ isActive }) =>
                    isActive ? ActiveStyle : InActiveStyle
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </NavLink>
              </nav>
              </motion.div>
          )}
              </AnimatePresence>

            </div>
    </motion.div>        

      </AnimatePresence>
  );
};

export default SecondaryNavbar;
