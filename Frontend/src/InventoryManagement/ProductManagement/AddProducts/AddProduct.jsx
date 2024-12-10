import { useState } from "react";
import PropTypes from "prop-types";
import ProductVariantAccordion from "../ProductVariant/ProductVariant"

const AddProduct = ({ togglePortal, nextComponent, pageTitle }) => {
  const formFields = [
    { field: "Product Name", placeholder: "Enter Product Name" },
    { field: "SKU", placeholder: "Enter Product SKU" },
    { field: "Price", placeholder: "Enter Product Price" },
    { field: "Description", placeholder: "Enter Product Description" },
    { field: "Category", placeholder: "Select Category" },
    { field: "Supplier", placeholder: "Select Supplier" },
  ];

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", formData);
  };

  return (
    <>
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-d-primary-bg-color">
            {pageTitle} Product / Product Details
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
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map(({ field, placeholder }) => {
            return (
              <div key={field}>
                <label
                  htmlFor="field"
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  {field} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="field"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder={placeholder}
                  required
                />
              </div>
            );
          })}
          <div className="mt-6 w-full flex justify-between">
            <button
              type="button"
              className="border active:border-1-d-secondary-bg-color bg-lt-primary-action-color hover:bg-d-primary-action-color text-white py-2 px-4 rounded-md bg-lt-primary-bg-color"
              onClick={() => nextComponent(() => ProductVariantAccordion)}
            >
              Next
            </button>
            <button
              type="button"
              className="border active:border-1-d-secondary-bg-color bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color hover:bg-d-secondary-bg-color"
              onClick={() => nextComponent(() => ProductVariantAccordion)}
            >
              Add Product Variants
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

AddProduct.propTypes = {
  togglePortal: PropTypes.func.isRequired,
  nextComponent: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default AddProduct;
