import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSupplierDetails } from "../../../../InventoryManagement/Redux/Supplier/SupplierActions";
import PropTypes from 'prop-types';

export default function TaxInformation({title}) {
    const dispatch = useDispatch()
    const supplierTaxInformation = useSelector(
      (state) => state.SupplierReducer.supplierDetails?.["Payment Details"]?.["Tax Information"]
    );
    const [changed,setChanged] = useState(false);
  const [taxInfoTemplate] = useState({
    "Tax Identification Number (TIN)": {
      name: "Tax Identification Number (TIN)",
      type: "text",
      placeholder: "Enter Tax Identification Number (TIN)",
    },
    "VAT Number (if applicable)": {
      name: "VAT Number (if applicable)",
      type: "text",
      placeholder: "Enter VAT Number (if applicable) *",
    }
  });

  const [taxInfo, setTaxInfoDetails] = useState(
    Object.entries(taxInfoTemplate).reduce((acc, [key]) => {
      acc[key] = supplierTaxInformation?.[key] || "";
      return acc;
    }, {})
  );

  const handleChange = (key, value) => {
    setChanged(true);
    setTaxInfoDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    dispatch(setSupplierDetails({key:"Payment Details",details:{"Tax Information":taxInfo}}))
    setChanged(false);
  };

  return (
    <>
      {Object.entries(taxInfoTemplate).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm text-lt-secondary-bg-color">
            {value.name} <span className="text-red-500">*</span>
          </label>
          <input
            name={value.name}
            type={value.type}
            value={taxInfo[key]}
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


TaxInformation.propTypes = {
  title:PropTypes.string
}

