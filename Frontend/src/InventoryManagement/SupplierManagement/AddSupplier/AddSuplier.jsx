import { useState } from "react";
import PropTypes from "prop-types";
import SupplierPaymentDetailsAccordion from "../SupplierBillingInfo/SupplierPaymentDetailsAccordion";

const AddSupplier = ({
  togglePortal,
  nextComponent,
  pageTitle,
  suppliersData,
  data
}) => {
  const formFields = [
    { field: "Supplier Name", placeholder: "Enter Supplier Name" },
    { field: "Supplier Contact", placeholder: "Enter Supplier Contact" },
    { field: "Supplier Address", placeholder: "Enter Supplier Address" },
    { field: "Supplier Id", placeholder: "Generate Supplier Id" },
  ];

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Supplier Added:", formData);
  };

  const handlePassData = () => {
    suppliersData(formData);
  }; // this function passes the current modals form data to portal back

  return (
    <>
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold  text-d-primary-bg-color">
            {pageTitle} Supplier / Supplier Details
          </h2>
          <button
            onClick={() => togglePortal()}
            className=" bg-d-primary-action-color text-white py-2 px-4 rounded-md  hover:bg-d-secondary-bg-color"
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
                  value={data ? data[field] : ""}
                  onChange={handleChange}
                  className="font-medium mt-1 block w-full p-2 border border-lt-primary-border-color rounded-md bg-white  dark:text-d-secondary-bg-color"
                  placeholder={placeholder}
                  required
                />
              </div>
            );
          })}
          <div className="mt-6 w-full flex justify-between">
            <button
              type="button"
              className="border active:border-1-d-secondary-bg-colorbg-lt-primary-action-color text-white py-2 px-4 rounded-md bg-d-primary-bg-color hover:bg-d-primary-action-color"
              onClick={() => {
                handlePassData();
                nextComponent(() => SupplierPaymentDetailsAccordion);
              }}
            >
              Next
            </button>
            <button
              type="button"
              className="border active:border-1-d-secondary-bg-colorbg-lt-primary-action-color  text-white py-2 px-4 rounded-md hover:bg-d-primary-bg-color bg-d-primary-action-color"
              onClick={() => {
                handlePassData();
                nextComponent(() => SupplierPaymentDetailsAccordion);
              }}
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
