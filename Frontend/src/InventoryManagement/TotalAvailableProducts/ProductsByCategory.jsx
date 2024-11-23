import { useState } from 'react';

const ProductsByCategory = () => {
  const [categories] = useState([
    { 
      category: 'Electronics', 
      totalProducts: 150, 
      thumbnail: 'https://via.placeholder.com/150?text=Electronics' // Placeholder image, replace with actual thumbnail
    },
    { 
      category: 'Clothing', 
      totalProducts: 80, 
      thumbnail: 'https://via.placeholder.com/150?text=Clothing' // Placeholder image, replace with actual thumbnail
    },
    { 
      category: 'Home Appliances', 
      totalProducts: 30, 
      thumbnail: 'https://via.placeholder.com/150?text=Home+Appliances' // Placeholder image, replace with actual thumbnail
    },
    { 
      category: 'Sports', 
      totalProducts: 50, 
      thumbnail: 'https://via.placeholder.com/150?text=Sports' // Placeholder image, replace with actual thumbnail
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color mb-4">
        Total Products by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-4 rounded-lg shadow-md flex flex-col items-center">
            <img 
              src={category.thumbnail} 
              alt={category.category} 
              className="w-32 h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color mb-2">
              {category.category}
            </h3>
            <p className="text-lg text-lt-primary-text-color dark:text-d-primary-text-color mb-2">
              Total Products: {category.totalProducts}
            </p>
            <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
              View Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
