import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SupplierPaymentDetailsAccordion from "../SupplierBillingInfo/SupplierPaymentDetailsAccordion";

const AddSupplier = ({
  togglePortal,
  nextComponent,
  pageTitle,
  suppliersData,
  data,
}) => {
  // Form fields definition
  const formFields = [
    {
      name: "Supplier Name",
      label: "Supplier Name",
      placeholder: "Enter Supplier Name",
    },
    {
      name: "Supplier Contact",
      label: "Supplier Contact",
      placeholder: "Enter Supplier Contact",
    },
    {
      name: "Supplier Address",
      label: "Supplier Address",
      placeholder: "Enter Supplier Address",
    },
    {
      name: "Supplier Id",
      label: "Supplier Id",
      placeholder: "Generate Supplier Id",
    },
  ];

  const [formData, setFormData] = useState({});
  // State for form data and form validity
  const [formIsValid, setFormIsValid] = useState(false);
  // Validate form dynamically based on required fields
  const validateForm = () => {
    const allFieldsFilled = formFields.every((field) => {
      return (formData && formData[field.name] || data && data[field.name]);
    });
    setFormIsValid(allFieldsFilled);
  };

  // Update state and validate form on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };
      return updatedFormData;
    });
  };

  // Run validation after formData changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Handle data submission
  const handlePassData = () => {
    suppliersData(formData);
  };

  return (
    <>
      {/* Header Section */}
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-d-primary-bg-color">
            {pageTitle} Supplier / Supplier Details
          </h2>
          <button
            onClick={togglePortal}
            className="bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-d-secondary-bg-color"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
        <form className="space-y-4">
          {formFields.map(({ name, label, placeholder }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-sm font-medium text-lt-primary-text-color"
              >
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={name}
                name={name}
                placeholder={data && data[name] || placeholder}
                value={formData[name] && formData[name]  || ""}
                onChange={handleChange}
                className="font-medium mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white dark:text-d-secondary-bg-color"
                required
              />
            </div>
          ))}

          {/* Action Buttons */}
          <div className="mt-6 w-full flex justify-between">
            {formIsValid && (
              <button
                type="button"
                className={`border py-2 px-4 rounded-md 
      ${
        formIsValid
          ? "bg-d-primary-bg-color text-white hover:bg-d-primary-action-color"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
                onClick={() => {
                  handlePassData();
                  nextComponent(() => SupplierPaymentDetailsAccordion);
                }}
                disabled={!formIsValid}
              >
                Next
              </button>
            )}
            <button
              type="button"
              className={`border py-2 px-4 rounded-md 
      ${
        formIsValid
          ? "bg-d-primary-bg-color text-white hover:bg-d-primary-action-color"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
              onClick={() => {
                handlePassData();
                nextComponent(() => SupplierPaymentDetailsAccordion);
              }}
              disabled={!formIsValid}
            >
              Add Payment Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

AddSupplier.propTypes = {
  togglePortal: PropTypes.func.isRequired,
  nextComponent: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  suppliersData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default AddSupplier;
