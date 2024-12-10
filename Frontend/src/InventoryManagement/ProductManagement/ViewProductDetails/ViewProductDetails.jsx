import PropTypes from "prop-types";

const ViewProductDetails = ({ product, togglePortal }) => {
  return (
    <>
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-d-primary-bg-color">
            Product Details
          </h2>
          <button
            onClick={togglePortal}
            className="bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-d-secondary-bg-color"
          >
            Close
          </button>
        </div>
      </div>
      <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
        <div className="space-y-4">
          {/* Product Images */}
          <div className="flex justify-center items-center mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-64 h-64 object-cover border border-lt-primary-border-color rounded-md shadow-sm"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Name:
              </label>
              <p className="mt-1 text-d-secondary-bg-color">{product.name}</p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                SKU:
              </label>
              <p className="mt-1 text-d-secondary-bg-color">{product.sku}</p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Price:
              </label>
              <p className="mt-1 text-d-secondary-bg-color">${product.price}</p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Description:
              </label>
              <p className="mt-1 text-d-secondary-bg-color">
                {product.description}
              </p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Category:
              </label>
              <p className="mt-1 text-d-secondary-bg-color">
                {product.category}
              </p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Supplier:
              </label>
              <p className="mt-1 text-d-secondary-bg-color">
                {product.supplier}
              </p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Stock:
              </label>
              <p className="mt-1 text-d-secondary-bg-color">
                {product.stock} units
              </p>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Variants:
              </label>
              <ul className="mt-1 text-d-secondary-bg-color list-disc list-inside">
                {product.variants.map((variant, index) => (
                  <li key={index}>{variant}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ViewProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    supplier: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  togglePortal: PropTypes.func.isRequired,
};

export default ViewProductDetails;
