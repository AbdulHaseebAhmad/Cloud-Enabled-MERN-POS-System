
const SecondaryNavbar = () => {
  return (
    <div className=" p-4 bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color shadow-md justify-self-center mt-2">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="flex space-x-6">
          <a 
            to="/inventory-management" 
            className="text-lg text-lt-primary-text-color dark:text-d-primary-text-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color"
          >
            Inventory Reports
          </a>
          <a 
            to="/order-management" 
            className="text-lg text-lt-primary-text-color dark:text-d-primary-text-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color"
          >
           Supplier Management
          </a>
          <a 
            to="/point-of-sales" 
            className="text-lg text-lt-primary-text-color dark:text-d-primary-text-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color"
          >
            Product Management
          </a>
          <a 
            to="/reports" 
            className="text-lg text-lt-primary-text-color dark:text-d-primary-text-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color"
          >
            Dashboard
          </a>

          <a 
            to="/reports" 
            className="text-lg text-lt-primary-text-color dark:text-d-primary-text-color hover:text-lt-primary-action-color dark:hover:text-d-primary-action-color"
          >
            Stock Tracking
          </a>

          
        </nav>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
