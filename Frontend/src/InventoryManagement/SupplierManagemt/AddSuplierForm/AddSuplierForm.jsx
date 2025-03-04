import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setSupplierDetails } from "../../../InventoryManagement/Redux/Supplier/SupplierActions";
// import { setProduct } from "../../../InventoryManagement/Redux/Product/ProductActions"

export default function AddSuplierForm() {
  const supplierDetails = useSelector(
    (state) => state.SupplierReducer.supplierDetails
  );

  console.log(supplierDetails);

  const dispatch = useDispatch();
  const productTemplate = {
    "Supplier Name": {
      name: "Supplier Name",
      type: "text",
      placeholder: "Supplier Name",
    },
    "Supplier Id": {
      name: "Supplier Id",
      type: "text",
      placeholder: "Supplier Id",
    },
    "Supplier Address": {
      name: "Supplier Address",
      type: "text",
      placeholder: "Supplier Address",
    },
    "Supplier Contact": {
      name: "Supplier Contact",
      type: "text",
      placeholder: "Supplier Contact",
    },
    "Total Stock": {
      name: "Total Stock",
      type: "text",
      placeholder: "Total Stock",
    },
  };

  const [product, setProductState] = useState(
    Object.entries(productTemplate).reduce((acc, [key]) => {
      acc[key] = supplierDetails?.[key] || "";
      return acc;
    }, {})
  );

  useEffect(() => {
    dispatch(setSupplierDetails({key:"General",details:product}));
  }, [product, dispatch]);

  const handleChange = (key, value) => {
    setProductState((prev) => ({
      ...prev,
      [key]: key === "Price" ? parseInt(value) : value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0.1, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, type: "tween" }}
      className="w-full"
    >
      <div className="p-0 w-full mx-auto shadow-md ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-4">
          {Object.entries(productTemplate).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm text-lt-secondary-bg-color">
                {value.name} <span className="text-red-500">*</span>
              </label>
              <input
                type={value.type}
                value={product[key]}
                placeholder={value.placeholder}
                className="mt-1 block w-full p-4 border border-lt-primary-border-color rounded-md bg-white text-d-secondary-bg-color font-medium"
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
