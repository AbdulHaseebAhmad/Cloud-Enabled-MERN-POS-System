import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setSupplierDetails } from "../../../../InventoryManagement/Redux/Supplier/SupplierActions";
import PropTypes from 'prop-types';

export default function PymentTerms({title}) {
    const dispatch = useDispatch()
    const supplierPaymentTerms = useSelector(
      (state) => state.SupplierReducer.supplierDetails?.["Payment Details"]?.["Payment Terms"]
    );
    const [changed,setChanged] = useState(false);

  const [paymentTermsTemplate] = useState({
    "Payment Frequency": {
      name: "Payment Frequency",
      type: "select",
      placeholder: "Enter Payment Frequency",
    },
    "Payment Due Period": {
      name: "Payment Due Period",
      type: "dropdown",
      placeholder: "Enter Payment Due Period",
    },
    "Preferred Payment Method": {
      name: "Preferred Payment Method",
      type: "dropdown",
      placeholder: "Enter Preferred Payment Method",
    },
    "Discount Terms": {
      name: "Discount Terms",
      type: "text",
      placeholder: "Enter Discount Terms",
    }
  });

  const [paymentTerms, setBillingInfo] = useState(
    Object.entries(paymentTermsTemplate).reduce((acc, [key]) => {
      acc[key] = supplierPaymentTerms?.[key] || "";
      return acc;
    }, {})
  );

  const handleChange = (key, value) => {
    setChanged(true);
    setBillingInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    dispatch(setSupplierDetails({key:"Payment Details",details:{"Payment Terms":paymentTerms}}))
    setChanged(false);

  };

  return (
    <>
      {Object.entries(paymentTermsTemplate).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm text-lt-secondary-bg-color">
            {value.name} <span className="text-red-500">*</span>
          </label>
          <input
            name={value.name}
            type={value.type}
            value={paymentTerms[key]}
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


PymentTerms.propTypes = {
  title:PropTypes.string
}