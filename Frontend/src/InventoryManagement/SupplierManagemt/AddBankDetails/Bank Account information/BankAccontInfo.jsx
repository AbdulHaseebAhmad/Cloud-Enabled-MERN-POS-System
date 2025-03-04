import {   useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSupplierDetails } from "../../../../InventoryManagement/Redux/Supplier/SupplierActions";
import PropTypes from "prop-types";

export default function BankAccontInfo({title}) {

  const supplierBankDetails = useSelector(
    (state) => state.SupplierReducer.supplierDetails?.["Payment Details"]?.["Bank Account Information"]
  );

console.log(supplierBankDetails,'sbt')
  const [changed,setChanged] = useState(false);
 
  const dispatch = useDispatch()
  const [bankAccountInfoTemplate] = useState({
    "Bank Name": {
      name: "Bank Name",
      type: "text",
      placeholder: "Enter Bank Name",
    },
    "Account Name": {
      name: "Account Name",
      type: "text",
      placeholder: "Enter Account Name",
    },
    "Account Number": {
      name: "Account Number",
      type: "text",
      placeholder: "Enter Account Number",
    },
    IBAN: {
      name: "IBAN",
      type: "text",
      placeholder: "Enter IBAN Number",
    },
    "SWIFT Code": {
      name: "Swift Code",
      type: "text",
      placeholder: "Enter Swift Code",
    },
    "Branch Code": {
      name: "Branch Code",
      type: "text",
      placeholder: "Enter Branch Code",
    },
  });

  const [bankDetails, setBankDetails] = useState(
    Object.entries(bankAccountInfoTemplate).reduce((acc, [key]) => {
      acc[key] = supplierBankDetails?.[key] || "";
      return acc;
    }, {})
  );

  const handleChange = (key, value) => {
    setChanged(true);
    setBankDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    dispatch(setSupplierDetails({key:"Payment Details",details:{"Bank Account Information":bankDetails}}))
    setChanged(false);
  };

  return (
    <>
      {Object.entries(bankAccountInfoTemplate).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm text-lt-secondary-bg-color">
            {value.name} <span className="text-red-500">*</span>
          </label>
          <input
            name={value.name}
            type={value.type}
            value={bankDetails[key]}
            placeholder={value.placeholder}
            className="mt-1 block w-full p-4 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color font-medium"
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </div>
      ))}
      {changed && <button
        type="button"
        className="w-72  mt-4 text-white py-2 px-2 rounded-md  dark:hover:bg-d-primary-action-color bg-d-secondary-bg-color"
        onClick={handleSave}
      >
        Save {title}
      </button>}
    </>
  );
}


BankAccontInfo.propTypes = {
  title:PropTypes.string
}