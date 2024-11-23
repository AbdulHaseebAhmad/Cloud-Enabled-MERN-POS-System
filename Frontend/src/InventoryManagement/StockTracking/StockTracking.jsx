
const StockTracking = () => {
  const lowStockProducts = [
    { name: 'Product B', stock: 5 },
    { name: 'Product D', stock: 2 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color mb-4">
        Stock Tracking
      </h2>

      <div className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-lt-primary-text-color dark:text-d-primary-text-color mb-4">Low Stock Alerts</h3>
        <ul>
          {lowStockProducts.map((product, index) => (
            <li key={index} className="text-lt-primary-text-color dark:text-d-primary-text-color mb-2">
              {product.name} is low in stock ({product.stock} units)
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
          Send Restock Request
        </button>
      </div>
    </div>
  );
};

export default StockTracking;
