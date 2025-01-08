import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

export default function AddVariant({
  handleChange,
  removeVariant,
  variants,
  addVariant,
  index,
  savedFormData
}) {
  return (
    <form  className="space-y-6">
      <AnimatePresence >
          <motion.div
          key={index}
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
                  htmlFor={`name`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  Variant Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name='name'
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder={savedFormData?.variants?.[index]?.name || "e.g., Size or Color"}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`sku`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  SKU <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name='sku'
                  onChange={(e) => handleChange(index,e)}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder={savedFormData?.variants?.[index]?.sku || "Enter SKU"}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`priceModifier`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  Price Modifier
                </label>
                <input
                  type="number"
                  name='priceModifier'
                  onChange={(e) =>
                    handleChange(index,e)
                  }
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder={savedFormData?.variants?.[index]?.priceModifier ||  "e.g., 10"}
                />
              </div>
              <div>
                <label
                  htmlFor={`stock`}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id={`stock`}
                  name='stock'
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder={savedFormData?.variants?.[index]?.stock || "Enter stock quantity"}
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor={`image`}
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                Upload Image
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id={`image`}
                name='image'
                onChange={(e) =>
                  handleChange(index, e)
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
    </form>
  );
}

AddVariant.propTypes = {
  handleChange: PropTypes.func.isRequired, // Function to handle input changes
  removeVariant: PropTypes.func.isRequired, // Function to remove a variant
  addVariant: PropTypes.func.isRequired, // Function to handle form submission
  variants: PropTypes.array.isRequired, // Array of variant objects
  index: PropTypes.number.isRequired, // Index of the variant in the array
  savedFormData: PropTypes.object, // Object of saved form data
};
