const bankFieldsData = [
  { field: "Bank Name", placeholder: "Enter Bank Name" },
  { field: "Account Name/Holder", placeholder: "Enter Account Holder Name" },
  { field: "Account Number", placeholder: "Enter Account Number" },
  { field: "IBAN", placeholder: "Enter IBAN" },
  { field: "SWIFT/BIC Code", placeholder: "Enter SWIFT/BIC Code" },
  { field: "Branch Code", placeholder: "Enter Branch Code (optional)" },
];

const taxFieldsData = [
  { field: "Tax Identification Number (TIN)", placeholder: "Enter tax ID" },
  { field: "VAT Number (if applicable)", placeholder: "Enter VAT Number" },
];

const billingFieldsData = [
  { field: "Billing Address", placeholder: "Enter billing address" },
  {
    field: "Invoice Requirements",
    placeholder: "Enter invoice requirements",
  },
];

const paymentTermsFieldsData = [
  {
    field: "Payment Frequency",
    placeholder: "Enter payment frequency (e.g., Weekly, Monthly)",
    type: "dropdown",
    options: ["Weekly", "Bi-Weekly", "Monthly", "Tri-Mester", "SeMester"],
  },
  {
    field: "Payment Due Period",
    placeholder: "Enter payment due period (e.g., Net 30, Net 60)",
  },
  {
    field: "Preferred Payment Method",
    placeholder: "Enter preferred payment method (e.g., Bank Transfer, Check)",
    type: "dropdown",
    options: ["Bank Transfer", "Check", "Both"],
  },
  {
    field: "Discount Terms",
    placeholder: "Enter discount terms (e.g., 2% if paid within 10 days)",
  },
];

export {
  paymentTermsFieldsData,
  bankFieldsData,
  billingFieldsData,
  taxFieldsData,
};
