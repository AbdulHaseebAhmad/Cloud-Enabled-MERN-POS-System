import { useState } from 'react';

const SupplierManagement = () => {
  const [suppliers] = useState([
    { name: 'Supplier X', contact: '123-456-7890', productCount: 50 },
    { name: 'Supplier Y', contact: '987-654-3210', productCount: 20 },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Supplier Management</h2>
        <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
          Add Supplier
        </button>
      </div>

      <div className="overflow-x-auto bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-4 rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Supplier</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Contact</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Products Supplied</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr key={index} className="border-t border-lt-primary-border-color dark:border-d-primary-border-color">
                <td className="px-4 py-2">{supplier.name}</td>
                <td className="px-4 py-2">{supplier.contact}</td>
                <td className="px-4 py-2">{supplier.productCount}</td>
                <td className="px-4 py-2">
                  <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-1 px-2 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
                    Edit
                  </button>
                  <button className="ml-2 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierManagement;
