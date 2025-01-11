
const Dashboard = () => {
 
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Products Card */}
        <div className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Total Products</h3>
          <p className="text-2xl font-bold text-lt-secondary-text-color dark:text-d-secondary-text-color">500</p>
        </div>

        {/* Low Stock Items Card */}
        <div className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Low Stock Items</h3>
          <p className="text-2xl font-bold text-lt-secondary-text-color dark:text-d-secondary-text-color">12</p>
        </div>

        {/* Total Suppliers Card */}
        <div className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Total Suppliers</h3>
          <p className="text-2xl font-bold text-lt-secondary-text-color dark:text-d-secondary-text-color">25</p>
        </div>

        {/* Recent Activity Card */}
        <div className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Recent Activity</h3>
          <ul className="text-lt-secondary-text-color dark:text-d-secondary-text-color text-sm">
            <li>Product X restocked (500 units)</li>
            <li>Product Y low stock warning</li>
            <li>Supplier Z added</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
          View Low Stock
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
