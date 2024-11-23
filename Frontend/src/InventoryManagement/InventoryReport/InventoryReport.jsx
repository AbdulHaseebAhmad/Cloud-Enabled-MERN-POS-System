import { useState } from 'react';

const InventoryReports = () => {
  const [reportData] = useState({
    sales: '$10,000',
    inventoryTurnover: '5%',
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">
          Inventory Reports
        </h2>
        <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
          Generate Report
        </button>
      </div>

      <div className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Sales Report</h3>
        <p className="text-2xl font-bold text-lt-secondary-text-color dark:text-d-secondary-text-color">
          {reportData.sales}
        </p>

        <h3 className="text-lg font-semibold text-lt-primary-text-color dark:text-d-primary-text-color mt-6">Inventory Turnover</h3>
        <p className="text-2xl font-bold text-lt-secondary-text-color dark:text-d-secondary-text-color">
          {reportData.inventoryTurnover}
        </p>
      </div>
    </div>
  );
};

export default InventoryReports;
