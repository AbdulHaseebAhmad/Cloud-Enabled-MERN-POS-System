import { useState } from "react";
import AccordianForm from "./Accordian/AccordinForm";
import {
  paymentTermsFieldsData,
  bankFieldsData,
  billingFieldsData,
  taxFieldsData,
} from "./Accordian/data";
const SupplierPaymentDetailsAccordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const sections = [
    {
      sectionName: "Bank Account Information",
      toggleId: "bankInfo",
      section: (
        <AccordianForm
          toggleId="bankInfo"
          accordianName="Bank Account Information"
          fieldsData={bankFieldsData}
          toggleFunction={toggleSection}
        />
      ),
    },
    {
      sectionName: "Paymet Terms",
      toggleId: "paymentTerms",
      section: (
        <AccordianForm
          fieldsData={paymentTermsFieldsData}
          accordianName="Payment Terms"
          toggleId="paymentTerms"
          toggleFunction={toggleSection}
        />
      ),
    },
    {
      sectionName: "Tax Information",
      toggleId: "taxInfo",
      section: (
        <AccordianForm
          fieldsData={taxFieldsData}
          accordianName="Tax Information"
          toggleId="taxInfo"
          toggleFunction={toggleSection}
        />
      ),
    },
    {
      sectionName: "Billing Information",
      toggleId: "billingInfo",
      section: (
        <AccordianForm
          fieldsData={billingFieldsData}
          accordianName="Billing Information"
          toggleId="billingInfo"
          toggleFunction={toggleSection}
        />
      ),
    },
  ];

  console.log(activeSection);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-lt-secondary-bg-color rounded-lg shadow-md border border-lt-primary-border-color">
      <h2 className="text-2xl font-bold text-d-primary-bg-color mb-6">
        Supplier Payment Details
      </h2>
      <div className="space-y-4">
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
      </div>
    </div>
  );
};

export default SupplierPaymentDetailsAccordion;
