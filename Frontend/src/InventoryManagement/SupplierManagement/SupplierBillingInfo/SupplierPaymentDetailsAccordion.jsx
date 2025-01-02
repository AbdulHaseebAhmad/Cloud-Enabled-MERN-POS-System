import { useState } from "react";
import PropTypes from "prop-types";
import AccordianForm from "./Accordian/AccordinForm";
import {
  paymentTermsFieldsData,
  bankFieldsData,
  billingFieldsData,
  taxFieldsData,
} from "./Accordian/data";
import AddSupplier from "../AddSupplier/AddSuplier";
import SupplierAddedSuccessfully from "../SupplierAddedSuccesfully/SupplierAddedSuccessfully";
import { motion, AnimatePresence } from "framer-motion";

const SupplierPaymentDetailsAccordion = ({
  togglePortal,
  nextComponent,
  pageTitle,
  suppliersData,
  data,
  submithandler,
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      "Payment Details": { ...prev["Payment Details"], [name]: value },
    }));
    const allFields = [
      ...paymentTermsFieldsData,
      ...bankFieldsData,
      ...billingFieldsData,
      ...taxFieldsData,
    ];
    const allFieldsFilled = allFields.every((field) => {
      return (
        paymentDetails[field] !== "" || data["Payment Details"][field] !== ""
      );
    });
    if (allFieldsFilled) {
      setFormIsValid(true);
    }
  }; // this function is passed to the child to handle changes in fields here in the parent

  const handlePassData = () => {
    suppliersData(paymentDetails);
  }; // this function passes formdata of current modal to portal back
  const sections = [
    {
      sectionName: "Bank Account Information",
      toggleId: "bankInfo",
      section: (
        <AccordianForm
          key="bankInfo"
          toggleId="bankInfo"
          accordianName="Bank Account Information"
          fieldsData={bankFieldsData}
          toggleFunction={toggleSection}
          onChangeHandler={onChangeHandler}
          data={data}
          handlePassData={handlePassData}
        />
      ),
    },
    {
      sectionName: "Paymet Terms",
      toggleId: "paymentTerms",
      section: (
        <AccordianForm
          key="paymentTerms"
          fieldsData={paymentTermsFieldsData}
          accordianName="Payment Terms"
          toggleId="paymentTerms"
          toggleFunction={toggleSection}
          onChangeHandler={onChangeHandler}
          data={data}
          handlePassData={handlePassData}
        />
      ),
    },
    {
      sectionName: "Tax Information",
      toggleId: "taxInfo",
      section: (
        <AccordianForm
          key="taxInfo"
          fieldsData={taxFieldsData}
          accordianName="Tax Information"
          toggleId="taxInfo"
          toggleFunction={toggleSection}
          onChangeHandler={onChangeHandler}
          data={data}
          handlePassData={handlePassData}
        />
      ),
    },
    {
      sectionName: "Billing Information",
      toggleId: "billingInfo",
      section: (
        <AccordianForm
          key="billingInfo"
          fieldsData={billingFieldsData}
          accordianName="Billing Information"
          toggleId="billingInfo"
          toggleFunction={toggleSection}
          onChangeHandler={onChangeHandler}
          data={data}
          handlePassData={handlePassData}
        />
      ),
    },
  ];

  return (
    <>
      <div className="pl-6 pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-lt-primary-text-color dark:text-d-primary-bg-color">
            {pageTitle} Supplier / Billing Details
          </h2>
          <button
            onClick={() => {
              togglePortal();
              handlePassData();
            }}
            className="bg-lt-primary-action-color dark:bg-d-primary-action-color text-white py-2 px-4 rounded-md hover:bg-lt-primary-bg-color dark:hover:bg-d-secondary-bg-color"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
        <AnimatePresence>
          <motion.div
            layout
            key={"toggleId"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="space-y-4"
          >
            {sections.map(({ sectionName, toggleId, section }) =>
              activeSection === toggleId ? (
                section
              ) : (
                <button
                  key={sectionName}
                  className="w-full text-left px-4 py-4 font-medium bg-white dark:bg-d-secondary-bg-color dark:text-d-primary-text-color focus:outline-none"
                  onClick={() => toggleSection(toggleId)}
                >
                  {sectionName}
                </button>
              )
            )}
          </motion.div>
          <div className="mt-6 w-full flex justify-between">
            <button
              type="button"
              className="border active:border-1-d-secondary-bg-colorbg-lt-primary-action-color  text-white py-2 px-4 rounded-md bg-d-primary-bg-color hover:bg-d-primary-action-color"
              onClick={() => nextComponent(() => AddSupplier)}
            >
              Back
            </button>
            <button
  disabled={!formIsValid}
  type="button"
  className={`border py-2 px-4 rounded-md transition ${
    formIsValid
      ? "bg-d-primary-bg-color text-white hover:bg-d-primary-action-color active:border-1-d-secondary-bg-colorbg-lt-primary-action-color dark:bg-d-primary-action-color"
      : "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300"
  }`}
  onClick={() => {
    if (formIsValid) {
      submithandler();
      nextComponent(() => SupplierAddedSuccessfully);
    }
  }}
>
  Add Supplier
</button>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};
SupplierPaymentDetailsAccordion.propTypes = {
  togglePortal: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  nextComponent: PropTypes.func.isRequired,
  suppliersData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  submithandler: PropTypes.func.isRequired,
};

export default SupplierPaymentDetailsAccordion;
