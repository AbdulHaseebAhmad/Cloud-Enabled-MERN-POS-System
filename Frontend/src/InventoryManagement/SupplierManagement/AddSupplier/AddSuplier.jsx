import { useState } from "react";
import PropTypes from 'prop-types';
import SupplierPaymentDetailsAccordion from "../SupplierBillingInfo/SupplierPaymentDetailsAccordion";
const AddSupplier = ({ togglePortal, nextComponent }) => {
  const formFields = [
    { field: "Supplier Name", placeholder: "Enter Supplier Name" },
    { field: "Supplier Contact", placeholder: "Enter Supplier Contact" },
    { field: "Supplier Address", placeholder: "Enter Supplier Address" },
    { field: "Supplier Id", placeholder: "Generate Supplier Id" },
  ];
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Supplier Added:", formData);
  };

  return (
    <>
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-lt-primary-text-color dark:text-d-primary-bg-color">
            Add Supplier
          </h2>
          <button
            onClick={() => togglePortal()}
            className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          {formFields.map(({ field, placeholder }) => {
            return (
              <div key={field}>
                <label
                  htmlFor="field"
                  className="block text-sm font-medium text-lt-primary-text-color"
                >
                  {field} <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  id="field"
                  name={field}
                  value={formData.field}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white  dark:text-d-secondary-bg-color"
                  placeholder={placeholder}
                  required
                />
              </div>
            );
          })}
          <div className="mt-6">
            <button
              type="button"
              className="border active:border-1-d-secondary-bg-colorbg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
              onClick={() =>
                nextComponent(() => SupplierPaymentDetailsAccordion)
              }
            >
              Next
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
};

export default AddSupplier;
