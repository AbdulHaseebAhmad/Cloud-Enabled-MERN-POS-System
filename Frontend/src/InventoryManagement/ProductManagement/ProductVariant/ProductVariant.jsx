import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddVariant from "./AddVariant/AddVariant";
import AddProduct from "../AddProducts/AddProduct";
import ProductResponseMessage from "../ProductResponseMessage/ProductResponseMessage";

const ProductVariantAccordion = ({
  togglePortal,
  pageTitle,
  nextComponent,
  handleSaveData,
  savedFormData,
  saveProducts,
}) => {
  const [variants, setVariants] = useState(
    savedFormData?.variants || [
      { name: "", sku: "", priceModifier: "", stock: "", image: "" },
    ]
  );

  const [isFormValid, setFormIsValid] = useState(false);

  const handleChange = (i, e) => {
    const { name, value, files } = e.target;
    const targetVariant = variants.find((variant, index) => {
      return index === i;
    });
    if (name === "image") {
      targetVariant[name] = files[0];
    }
    if(name === "priceModifier" || name === "stock"){
      targetVariant[name] = parseInt(value);
      console.log(typeof(targetVariant[name]))
    }
    targetVariant[name] = value;
  };

  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      { name: "", sku: "", priceModifier: "", stock: "", image: "" },
    ]);
  };

  const removeVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariants(updatedVariants);
  };

  useEffect(() => {
    const isValid =
     variants.length > 0 && ( savedFormData?.variants?.length !== 0 &&
      variants.every((eachVariant) => {
        return Object.entries(eachVariant).every(([key, value]) => {
          return savedFormData[key] && savedFormData[value] !== undefined;
        });
      })) ? true : variants.every((eachVariant) => {
        // eslint-disable-next-line no-unused-vars
        return Object.entries(eachVariant).every(([key, value]) => {
          return value !== '' ;
        });
      });
        
    setFormIsValid(isValid);
  }, [variants, savedFormData]);

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
        {variants.length > 0 ? variants.map((variant, index) => {
          return (
            <AddVariant
              key={index}
              handleChange={handleChange}
              removeVariant={removeVariant}
              variants={variants}
              addVariant={addVariant}
              index={index}
              savedFormData={savedFormData}
              variant={variant}
            />
          );
        }) : <div>No Variants</div>}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-lt-secondary-action-color text-white py-2 px-4 rounded-md hover:bg-d-primary-action-color bg-d-primary-bg-color"
            onClick={() => {
              handleSaveData({ variants: variants });
              nextComponent(() => AddProduct);
            }}
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
          {isFormValid ? (
            <button
              onClick={() => {
                handleSaveData({ Variants: variants });
                saveProducts();
                nextComponent(() => ProductResponseMessage);
              }}
              className=" text-white py-2 px-4 rounded-md hover:bg-d-primary-bg-color bg-d-primary-action-color"
            >
              Add Product
            </button>
          ):  <button
            type="button"
            className="bg-lt-secondary-action-color text-white py-2 px-4 rounded-md hover:bg-d-primary-action-color bg-d-primary-bg-color"
            onClick={() => {
              handleSaveData({ variants: variants });
            }}
          >
            Save{" "}
          </button>}
        </div>
      </div>
    </>
  );
};

ProductVariantAccordion.propTypes = {
  togglePortal: PropTypes.func.isRequired,
  nextComponent: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  handleSaveData: PropTypes.func.isRequired,
  savedFormData: PropTypes.object.isRequired,
  saveProducts: PropTypes.func.isRequired,
};

export default ProductVariantAccordion;
