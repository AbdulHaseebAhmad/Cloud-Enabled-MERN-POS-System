import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

export default function AddVariant({
  handleChange,
  removeVariant,
  handleSubmit,
  variants,
  addVariant,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {variants.map((variant, index) => (
        <AnimatePresence key={variant.name}>
          <motion.div
            key={variant.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: [10,20] }}
            transition={{ duration: 1, type: "tween" }}
            className="border border-lt-primary-border-color p-4 rounded-md"
          >
            <h3 className="text-lg font-semibold mb-4 text-lt-primary-text-color">
              Variant {index + 1}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`name-${index}`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  Variant Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id={`name-${index}`}
                  value={variant.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder="e.g., Size or Color"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`sku-${index}`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  SKU <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id={`sku-${index}`}
                  value={variant.sku}
                  onChange={(e) => handleChange(index, "sku", e.target.value)}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder="Enter SKU"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`priceModifier-${index}`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  Price Modifier
                </label>
                <input
                  type="number"
                  id={`priceModifier-${index}`}
                  value={variant.priceModifier}
                  onChange={(e) =>
                    handleChange(index, "priceModifier", e.target.value)
                  }
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder="e.g., 10"
                />
              </div>
              <div>
                <label
                  htmlFor={`stock-${index}`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id={`stock-${index}`}
                  value={variant.stock}
                  onChange={(e) => handleChange(index, "stock", e.target.value)}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder="Enter stock quantity"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor={`image-${index}`}
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Upload Image
              </label>
              <input
                type="file"
                id={`image-${index}`}
                onChange={(e) =>
                  handleChange(index, "image", e.target.files[0])
                }
                className="mt-1 block w-full text-d-secondary-bg-color"
              />
            </div>
            <button
              type="button"
              className="mt-4 bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
              onClick={() => removeVariant(index)}
            >
              Remove Variant
            </button>
            {index === variants.length - 1 && (
              <button
                type="button"
                className="mt-4 ml-2 bg-lt-primary-action-color text-white py-1 px-4 rounded-md hover:bg-d-primary-action-color"
                onClick={addVariant}
              >
                Add Another Variant
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      ))}
    </form>
  );
}

AddVariant.propTypes = {
  handleChange: PropTypes.func.isRequired, // Function to handle input changes
  removeVariant: PropTypes.func.isRequired, // Function to remove a variant
  handleSubmit: PropTypes.func.isRequired, // Function to handle form submission
  addVariant: PropTypes.func.isRequired, // Function to handle form submission
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Unique identifier for the variant
      name: PropTypes.string.isRequired, // Name of the variant (e.g., color, size)
      value: PropTypes.string, // Value of the variant (optional)
    })
  ).isRequired, // Array of variant objects
};
