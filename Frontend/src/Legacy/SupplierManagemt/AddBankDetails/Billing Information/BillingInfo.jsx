import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSupplierDetails } from "../../../../InventoryManagement/Redux/Supplier/SupplierActions";
import PropTypes from "prop-types";
export default function BillingInfo({title}) {
    const dispatch = useDispatch()
    const [changed,setChanged] = useState(false);

    const supplierBillingInfo = useSelector(
      (state) => state.SupplierReducer.supplierDetails?.["Payment Details"]?.["Billing Information"]
    );  

  const [billingInfoTemplate] = useState({
    "Billing Address": {
      name: "Billing Address",
      type: "text",
      placeholder: "Enter Billing Address",
    },
    "Invoice Requirements": {
      name: "Invoice Requirements",
      type: "text",
      placeholder: "Enter Invoice Requirements",
    }
  });

  const [billingInfo, setBillingInfo] = useState(
    Object.entries(billingInfoTemplate).reduce((acc, [key]) => {
      acc[key] = supplierBillingInfo?.[key] || "";
      return acc;
    }, {})
  );

  const handleChange = (key, value) => {
    setChanged(true);
    setBillingInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    dispatch(setSupplierDetails({key:"Payment Details",details:{"Billing Information":billingInfo}}))
    setChanged(false);

  };

  return (
    <>
      {Object.entries(billingInfoTemplate).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm text-lt-secondary-bg-color">
            {value.name} <span className="text-red-500">*</span>
          </label>
          <input
            name={value.name}
            type={value.type}
            value={billingInfo[key]}
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

BillingInfo.propTypes = {
  title:PropTypes.string
}