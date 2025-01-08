import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductVariantAccordion from "../ProductVariant/ProductVariant";
import { useDispatch, useSelector } from "react-redux";
import { getSuppliers } from "../../Redux/Supplier/SupplierActions";

const AddProduct = ({
  togglePortal,
  nextComponent,
  pageTitle,
  handleSaveData,
  savedFormData,
}) => {
  const formFields = [
    { field: "Product Name", placeholder: "Enter Product Name" },
    { field: "SKU", placeholder: "Enter Product SKU" },
    { field: "Price", placeholder: "Enter Product Price" },
    { field: "Description", placeholder: "Enter Product Description" },
    { field: "Category", placeholder: "Select Category" },
    { field: "Supplier", placeholder: "Select Supplier" },
  ];

  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSavedDataExist, setIsSavedDataExist] = useState(false);

  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.SupplierReducer.data);

  useEffect(() => {
    dispatch(getSuppliers());
  }, [dispatch]);

  const isFormComplete = (data) =>
    formFields.every(({ field }) => data[field] && data[field].trim() !== "");

  useEffect(() => {
    setIsSavedDataExist(isFormComplete(savedFormData));
    setIsFormValid(isFormComplete(formData));
  }, [formData, savedFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-d-primary-bg-color">
            {pageTitle} Product / Product Details
          </h2>
          <button
            onClick={togglePortal}
            className="bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-d-secondary-bg-color"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
        <form className="space-y-2">
          {formFields.map(({ field, placeholder }) =>
            field !== "Supplier" ? (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  {field} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  placeholder={
                    savedFormData[field] || placeholder
                  }
                  required
                />
              </div>
            ) : (
              <div key={field}>
                <label
                  htmlFor="supplierDropdown"
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  {field} <span className="text-red-500">*</span>
                </label>
                <select
                  id="supplierDropdown"
                  name={field}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color"
                  onChange={handleChange}
                  value={formData[field] || ""}
                >
                  <option value="">
                    {savedFormData[field] || "Select Supplier"}
                  </option>
                  {suppliers.length > 0 ? (
                    suppliers.map(({ _id, "Supplier Name": supplierName }) => (
                      <option key={_id} value={supplierName}>
                        {supplierName}
                      </option>
                    ))
                  ) : (
                    <option disabled value="">
                      No Suppliers Found. Add a Supplier First.
                    </option>
                  )}
                </select>
              </div>
            )
          )}
          <div className="mt-6 w-full flex justify-between">
            {(isSavedDataExist || !isFormValid) && (
              <button
                type="button"
                className={`border py-2 px-4 rounded-md${
                  isSavedDataExist
                    ? " text-white bg-d-primary-bg-color hover:bg-d-primary-action-color"
                    : " bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => {
                  handleSaveData(formData);
                  nextComponent(() => ProductVariantAccordion);
                }}
              >
                Next
              </button>
            )}
            {isFormValid && (
              <button
                type="button"
                className="border py-2 px-4 rounded-md text-white bg-d-primary-bg-color hover:bg-d-primary-action-color"
                onClick={() => {
                  handleSaveData(formData);
                  nextComponent(() => ProductVariantAccordion);
                }}
              >
                Save Product Details
              </button>
            )}
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
  handleSaveData: PropTypes.func.isRequired,
  savedFormData: PropTypes.object.isRequired,
};

export default AddProduct;
