import { useState } from 'react';

const ProductDetails = () => {
  const [productDetails] = useState({
    name: 'Wireless Headphones',
    imageUrl: 'https://via.placeholder.com/300', // Placeholder image, replace with actual product image URL
    price: '$120',
    availableColors: ['Black', 'White', 'Blue'],
    availableSizes: ['S', 'M', 'L'],
    description: 'High-quality wireless headphones with noise-cancellation feature and long-lasting battery.',
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color mb-4">
        Product Details
      </h2>

      <div className="bg-lt-secondary-bg-color dark:bg-d-secondary-bg-color p-6 rounded-lg shadow-md flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <img src={productDetails.imageUrl} alt={productDetails.name} className="w-full h-auto rounded-lg" />
        </div>

        {/* Product Info */}
        <div className="w-full sm:w-2/3 sm:pl-6">
          <h3 className="text-2xl font-semibold text-lt-primary-text-color dark:text-d-primary-text-color mb-2">
            {productDetails.name}
          </h3>
          <p className="text-xl text-lt-primary-text-color dark:text-d-primary-text-color mb-4">{productDetails.description}</p>
          <p className="text-lg font-semibold text-lt-secondary-text-color dark:text-d-secondary-text-color mb-4">Price: {productDetails.price}</p>

          <div className="mb-4">
            <p className="font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Available Colors:</p>
            <div className="flex space-x-2">
              {productDetails.availableColors.map((color, index) => (
                <div key={index} className={`w-6 h-6 rounded-full`} style={{ backgroundColor: color.toLowerCase() }}></div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-lt-primary-text-color dark:text-d-primary-text-color">Available Sizes:</p>
            <div className="flex space-x-4">
              {productDetails.availableSizes.map((size, index) => (
                <span key={index} className="px-4 py-2 border rounded-md text-lt-primary-text-color dark:text-d-primary-text-color">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
