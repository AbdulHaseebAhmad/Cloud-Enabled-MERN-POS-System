import { useState } from 'react';

const ProductManagement = () => {
  const [products] = useState([
    { name: 'Product A', category: 'Electronics', sku: 'A001', price: '$100', stock: 50, supplier: 'Supplier X' },
    { name: 'Product B', category: 'Clothing', sku: 'B002', price: '$20', stock: 5, supplier: 'Supplier Y' },
    // Add more products here
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Product Management</h2>
        <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-4 rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Product</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Category</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">SKU</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Price</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Stock</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Supplier</th>
              <th className="px-4 py-2 text-left text-lt-primary-text-color dark:text-d-primary-text-color">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t border-lt-primary-border-color dark:border-d-primary-border-color">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.sku}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">{product.supplier}</td>
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

export default ProductManagement;
