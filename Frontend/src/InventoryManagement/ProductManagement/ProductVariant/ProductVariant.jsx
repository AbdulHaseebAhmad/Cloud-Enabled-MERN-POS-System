import { useState } from "react";
import PropTypes from "prop-types";
import AddVariant from "./AddVariant/AddVariant";

const ProductVariantAccordion = ({
  togglePortal,
  pageTitle,
}) => {
  const [variants, setVariants] = useState([
    { name: "", sku: "", priceModifier: "", stock: "", image: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;
    setVariants(updatedVariants);
  };

  const addVariant = () => {
    setVariants([
      ...variants,
      { name: "", sku: "", priceModifier: "", stock: "", image: "" },
    ]);
  };

  const removeVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariants(updatedVariants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Variants Added:", variants);
  };

  return (
    <>
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-d-primary-bg-color">
            {pageTitle} Product / Product Variants
          </h2>
          <button
            onClick={() => togglePortal()}
            className="bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-d-secondary-bg-color"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
        <AddVariant handleChange={handleChange} removeVariant={removeVariant} variants={variants}/>
        <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-lt-secondary-action-color text-white py-2 px-4 rounded-md hover:bg-d-primary-action-color"
            >
              Back{" "}
            </button>

            {(variants.length === 0)&& ( <button
                type="button"
                className="bg-lt-primary-action-color text-white py-2 px-4 rounded-md hover:bg-d-primary-action-color"
                onClick={addVariant}
              >
                Add Variant
              </button>)}
            <button
                onClick={handleSubmit}
              className="bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color"
            >
              Add Product
            </button>
          </div>
      </div>
    </>
  );
};

ProductVariantAccordion.propTypes = {
  togglePortal: PropTypes.func.isRequired,
  nextComponent: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default ProductVariantAccordion;
