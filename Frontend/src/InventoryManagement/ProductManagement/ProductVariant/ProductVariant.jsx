import { useState } from "react";
import PropTypes from "prop-types";
import AddVariant from "./AddVariant/AddVariant";
import AddProduct from "../AddProducts/AddProduct";
import SupplierAddedSuccessfully from "../../SupplierManagement/SupplierAddedSuccesfully/SupplierAddedSuccessfully";
import { motion } from "framer-motion";

const ProductVariantAccordion = ({
  togglePortal,
  pageTitle,
  nextComponent,
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
        <motion.div layoutId="modal" >
        <AddVariant
          handleChange={handleChange}
          removeVariant={removeVariant}
          variants={variants}
          addVariant={addVariant}
        /></motion.div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-lt-secondary-action-color text-white py-2 px-4 rounded-md hover:bg-d-primary-action-color bg-d-primary-bg-color"
            onClick={() => nextComponent(() => AddProduct)}
          >
            Back{" "}
          </button>

          {variants.length === 0 && (
            <button
              type="button"
              className=" text-white py-2 px-4 rounded-md bg-d-primary-action-color hover:bg-d-primary-bg-color"
              onClick={addVariant}
            >
              Add Variant
            </button>
          )}
          <button
            onClick={() => nextComponent(() => SupplierAddedSuccessfully)}
            className=" text-white py-2 px-4 rounded-md hover:bg-d-primary-bg-color bg-d-primary-action-color"
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
